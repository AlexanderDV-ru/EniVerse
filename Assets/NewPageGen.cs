using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
[ExecuteInEditMode]
public class NewPageGen : MonoBehaviour
{
    public string assetsPath="Assets/",pagesPath="pages/",pageVerse="new_verse",pagePath = "",pageName="new_page",pageExtension=".page";
    public string pageParent = "verse";
    public bool create;
	public bool index;
	public InputField field;
	public Text openedName;
	public int maxIters=4096;
	public string equals="=";
	public List<string> pagesHistory=new List<string>();
	public Dictionary<string, FileInfo> pagesFiles;
	public float doubleClickTime=0.5f;
	float lastClick;
	public string pageNameSymbols="abcdefghijklmnopqrstuvwxyz_";
	public bool pageNameIgnoreCase=true;
    // Start is called before the first frame update
    void Start()
    {
		DoIndex();
		Open();
    }
	public void DoIndex()
	{
		indexed="";
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
						if(line.Replace(" ","").Replace("\t","").StartsWith("parent"+equals))
							indexingParent=line.Substring("parent".Length+equals.Length);
					}
				}
				string nam=file.Name.Substring(0,file.Name.Length-pageExtension.Length);
				if(pageNameIgnoreCase)
					nam=nam.ToLower();
				pagesFiles.Add(nam,file);
				indexed+=nam+" : "+indexingParent+"\n";
			}
	}
	string indexed="";
    // Update is called once per frame
	public void Open(string pageName="",string[] filter=null)
	{
		if(pageName=="")
		{
			field.text=indexed;
			openedName.text="Index";
		}
		else
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
	}
	public void HistoryBack()
	{
		if(pagesHistory.Count!=0)
			pagesHistory.RemoveAt(pagesHistory.Count-1);
		if(pagesHistory.Count==0)
		{
			DoIndex();
			Open();
		}
		else Open(pagesHistory[pagesHistory.Count-1]);
	}
	public void Save()
	{
		using(var writer=new StreamWriter(pagesFiles[pagesHistory[pagesHistory.Count-1]].Create()))
		{
			writer.Write(field.text);
		}
		DoIndex();
	}
	public void DoCreate(FileInfo file, string fName="")
	{
		string fileParent="",fileVerse="",fileName=fName;
		using (var reader = file.OpenText())
		{
			string line;
			while ((line = reader.ReadLine()) != null)
			{
				if(line.Replace(" ","").Replace("\t","").StartsWith("parent"+equals))
					fileParent=line.Substring("parent".Length+equals.Length);
				if(line.Replace(" ","").Replace("\t","").StartsWith("verse"+equals))
					fileVerse=line.Substring("verse".Length+equals.Length);
			}
		}
		string path=fName!=""?Path.Combine(file.Directory.FullName, fName+pageExtension):file.FullName;
		string name = path.Replace("\\","/");
		name=name.Split('/')[name.Split('/').Length - 1];
		Debug.Log(path+" "+File.Exists(path)+" "+fileParent+" "+fileVerse+" "+fileName+" "+fName+" "+name);
		name=name.Substring(0,name.IndexOf("."));
		if(fileName=="")
			fileName=name.Replace("_"," ");
		if(File.Exists(path))
			return;
		if(pagesFiles.ContainsKey(fileName))
			return;
		File.WriteAllText(path,"");
		StreamWriter writer = new StreamWriter(path);
		writer.WriteLine("name=\"" + fileName+"\"");
		writer.WriteLine("parent=" +fileParent);
		writer.WriteLine("verse=" +fileVerse);
		writer.Close();
		DoIndex();
	}
	public void DoCreate(string assetsPath,string pagesPath,string pageVerse,string pagePath,string pageName,string pageExtension,string pageParent)
	{
		string path=assetsPath+pagesPath+pagePath+pageName+pageExtension;
		if(File.Exists(path))
			return;
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
		writer.WriteLine("name=\"" + pageName.Replace("_"," ")+"\"");
		writer.WriteLine("parent=" +pageParent);
		writer.WriteLine("verse=" +pageVerse);
		writer.Close();
		DoIndex();
	}
    void Update()
    {
		string path=assetsPath+pagesPath+pagePath+pageName+pageExtension;
		if(Input.GetMouseButtonDown(0)||Input.GetMouseButtonDown(1))
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
				if(field.text.Substring(start,end-start+1).Length!=0)
					if(Input.GetMouseButtonDown(0))
						Open(field.text.Substring(start,end-start+1));
					else if(Input.GetMouseButtonDown(1))
						DoCreate(pagesFiles[openedName.text],field.text.Substring(start,end-start+1));
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
			DoCreate(assetsPath,pagesPath,pageVerse,pagePath,pageName,pageExtension,pageParent);
            create = false;
        }
    }
}
