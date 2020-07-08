using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;

public enum Type
{
    ability,
	complex,
	skill,
	element,
	emotion,
	force,
	form,
	matter,
	substance,
	creature,
	dimension,
	feature,
	inheritance,
	knowledge,
	location,
	_object__reads_like_just_object,
	parent,
	person,
	reference,
	society,
	text,
	type,
	verse
}
[ExecuteInEditMode]
public class NewPageGen : MonoBehaviour
{
    public string assetsPath="Assets/",pagesPath="pages/",pagePath = "",pageExtension=".page";
	public string pageName="new_page",pageVerse="new_verse";
    public Type pageParent=Type.verse;
    public string custom = "";
    public bool create;
	public bool index;
	public InputField field;
	public Text openedName;
    // Start is called before the first frame update
    void Start()
    {

    }
	public void DoIndex()
	{
		string indexed="";
		List<DirectoryInfo> dirs=new List<DirectoryInfo>();
		List<FileInfo> files=new List<FileInfo>();
		dirs.Add(new DirectoryInfo(assetsPath+pagesPath));
		for(int i=0;dirs.Count>0&&i<maxIters;i++)
		{
			foreach(var dir in dirs[0].GetDirectories())
				dirs.Add(dir);
			foreach(var file in dirs[0].GetFiles())
				files.Add(file);
			dirs.Remove(dirs[0]);
		}
		pagesFiles=new Dictionary<string, FileInfo>();
		foreach(var file in files)
			if(file.Name.EndsWith(pageExtension))
			{
				string indexingParent="undefined";
				using (var reader = file.OpenText())
				{
					string line;
					while ((line = reader.ReadLine()) != null)
					{
						if(line.Replace(" ","").Replace("\t","").StartsWith(parentEquals))
							indexingParent=line.Substring(parentEquals.Length);
					}
				}
				string nam=file.Name.Substring(0,file.Name.Length-pageExtension.Length);
				if(pageNameIgnoreCase)
					nam=nam.ToLower();
				pagesFiles.Add(nam,file);
				indexed+=nam+" : "+indexingParent+"\n";
			}

		field.text=indexed;
		openedName.text="Index";
	}
	public int maxIters=4096;
	public string parentEquals="parent=";
	public List<string> pagesHistory=new List<string>();
	public Dictionary<string, FileInfo> pagesFiles;
    // Update is called once per frame
	public void Open(string pageName)
	{
		if(pageNameIgnoreCase)
			pageName=pageName.ToLower();
		if(!pagesFiles.ContainsKey(pageName))
			return;
		pagesHistory.Add(pageName);
		using (var reader = pagesFiles[pageName].OpenText())
		{
			field.text=reader.ReadToEnd();
		}
		openedName.text=pageName;
	}
	public void HistoryBack()
	{
		pagesHistory.RemoveAt(pagesHistory.Count-1);
		if(pagesHistory.Count==0)
			DoIndex();
		else Open(pagesHistory[pagesHistory.Count-1]);
	}
	public float doubleClickTime=0.5f;
	float lastClick;
	public string pageNameSymbols="abcdefghijklmnopqrstuvwxyz_";
	public bool pageNameIgnoreCase=true;
	public void Save()
	{
		using(var writer=new StreamWriter(pagesFiles[pagesHistory[pagesHistory.Count-1]].Create()))
		{
			writer.Write(field.text);
		}
	}
    void Update()
    {
		string path=assetsPath+pagesPath+pagePath+pageName+pageExtension;
		if(Input.GetMouseButtonDown(0))
		{
			if(Time.time-lastClick<doubleClickTime)
			{
				int start=0,end=0;
				for(int c=field.caretPosition;c>=0;c--)
					if(pageNameIgnoreCase?pageNameSymbols.ToLower().IndexOf((field.text[c]+"").ToLower())!=-1:pageNameSymbols.IndexOf(field.text[c])!=-1)
						start=c;
					else break;
				for(int c=field.caretPosition;c<field.text.Length;c++)
					if(pageNameIgnoreCase?pageNameSymbols.ToLower().IndexOf((field.text[c]+"").ToLower())!=-1:pageNameSymbols.IndexOf(field.text[c])!=-1)
						end=c;
					else break;
				Debug.Log(start+" "+end+" "+field.text.Substring(start,end-start+1));
				if(field.text.Substring(start,end-start+1).Length!=0)
					Open(field.text.Substring(start,end-start+1));
			}
			lastClick=Time.time;
		}
		if(index)
		{
			DoIndex();
			index=false;
		}
        if(create)
        {
            string p = "";
            foreach (string pp in path.Split('/'))
            {
                p += p==""?pp:"/" + pp;
                if(p!= path)
                    if(!new DirectoryInfo(p).Exists)
                        new DirectoryInfo(p).Create();
            }
            StreamWriter writer = new StreamWriter(path, false);
            string name = path.Split('/')[path.Split('/').Length - 1];
            string parent = pageParent.ToString().Replace("_object__reads_like_just_object","object");
            if (custom != "")
                parent = custom;
            writer.WriteLine("name=\"" + pageName.Replace("_"," ")+"\"");
            writer.WriteLine("parent=" +parent);
            writer.WriteLine("verse=" +pageVerse);
            writer.Close();

            create = false;
        }
    }
}
