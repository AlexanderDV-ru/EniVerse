using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using System.Text.RegularExpressions;
[ExecuteInEditMode]
public class NewPageGen : MonoBehaviour
{
	//public
    public string assetsPath="Assets/",pagesPath="pages/",pageVerse="new_verse",pagePath = "",pageName="new_page",pageExtension=".page";
    public string pageParent = "verse";

    public bool create;
	public bool index;

	public InputField field;
	public InputField search;
	public InputField keysField;
	public InputField searchOutputPathConditionalField;
	public InputField searchOutputTextConditionalField;

	public Text openedName;
	public int maxIters=4096;
	public string equals="=";
	public List<string> pagesHistory=new List<string>();
	public Dictionary<string, FileInfo> pagesFiles;
	public float doubleClickTime=0.5f;
	public string pageNamePattern="[abcdefghijklmnopqrstuvwxyz_][abcdefghijklmnopqrstuvwxyz_0123456789]*";
	public bool pageNameIgnoreCase=true;

	//internal
	string fullText="";

	string lastSearch="";
	string lastFullText="";
	string lastPath="";

	string indexed="";
	float lastClick;
    // Start is called before the first frame update
    void Start()
    {
		DoIndex();
		Open();
    }
	public string TextByName(string name)
	{
		string allText="";
		if(pagesFiles.ContainsKey(name))
			using (var reader = pagesFiles[name].OpenText())
			{
				allText=reader.ReadToEnd();
			}
		return allText;
	}
	public string ValueByName(string name, string value)
	{
		return ValueByText(TextByName(name),value);
	}
	public string ValueByText(string text, string value)
	{
		foreach (string line in text.Split('\n'))
		{
			if(line.Replace(" ","").Replace("\t","").StartsWith(value+equals))
				return line.Substring(value.Length+equals.Length);
		}
		return null;
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
				Dictionary<string,string> indexingVals=new Dictionary<string,string>();
				string nam=file.Name.Substring(0,file.Name.Length-pageExtension.Length);
				if(pageNameIgnoreCase)
					nam=nam.ToLower();
				pagesFiles.Add(nam,file);
				indexed+=nam+"\t\t";
				foreach(var key in keysField.text.Split(','))
					if(key!="")
						indexingVals.Add(key,"");
				string[] keys = new string[indexingVals.Keys.Count];
				indexingVals.Keys.CopyTo(keys, 0);
				using (var reader = file.OpenText())
				{
					string line;
					while ((line = reader.ReadLine()) != null)
					{
						foreach(var key in keys)
							if(line.Replace(" ","").Replace("\t","").StartsWith(key+equals))
								indexingVals[key]=line.Substring(key.Length+equals.Length);
					}
				}
				if(indexingVals.ContainsKey("1parent"))
					indexingVals["1parent"]=ValueByName(indexingVals["parent"],"parent");
				if(indexingVals.ContainsKey("path"))
					indexingVals["path"]=file.FullName;
				foreach(var pair in indexingVals)
					indexed+=pair.Key+"="+pair.Value+"\t\t";
				indexed+="\n";
			}
	}
    // Update is called once per frame
	public void Open(string pageName="",string[] filter=null)
	{
		if(pageName=="")
		{
			field.text=fullText=indexed;
			openedName.text="Index";
			lastPath="temp:/index.temp";
		}
		else
		{
			if(pageNameIgnoreCase)
				pageName=pageName.ToLower();
			if(!pagesFiles.ContainsKey(pageName))
				return;
			lastPath=pagesFiles[pageName].FullName;
			if(pagesHistory.Count==0||pagesHistory[pagesHistory.Count-1]!=pageName)
				pagesHistory.Add(pageName);
			using (var reader = pagesFiles[pageName].OpenText())
			{
				field.text=fullText=reader.ReadToEnd();
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
		Debug.Log(name+" "+!File.Exists(path)+"\t\t"+fileParent+" "+fileVerse+" "+fileName+" "+path);
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
	public bool CanBeName(string checking)
	{
		foreach(Match match in Regex.Matches(checking,pageNamePattern,pageNameIgnoreCase?RegexOptions.IgnoreCase:RegexOptions.None))
			if(match.Value==checking)
				return true;
		return false;
	}
    void Update()
    {
		string path=assetsPath+pagesPath+pagePath+pageName+pageExtension;
		if(search.text!=lastSearch||lastFullText!=fullText)
		{
			lastSearch=search.text;
			lastFullText=fullText;
			string curText="";
			try
			{
				foreach (Match match in Regex.Matches(fullText, lastSearch, RegexOptions.IgnoreCase))
					curText+=match.Value;
				if(Regex.Matches(fullText, searchOutputTextConditionalField.text, RegexOptions.IgnoreCase).Count!=0)
					if(Regex.Matches(lastPath, searchOutputPathConditionalField.text, RegexOptions.IgnoreCase).Count!=0)
						field.text=curText;
			}
			catch
			{
				field.text=fullText;
			}
		}

		if(Input.GetMouseButtonDown(0)||Input.GetMouseButtonDown(1))
		if(field.isFocused)
		{
			if(Time.time-lastClick<doubleClickTime)
			{
				int start=0,end=0;
				for(int c=field.caretPosition,cc=0;c>=0&&cc<32;c--,cc++)
					if(CanBeName(field.text.Substring(c,field.caretPosition-c+1)))
						start=c;
				for(int c=field.caretPosition,cc=0;c<field.text.Length&&cc<32;c++,cc++)
					if(CanBeName(field.text.Substring(start,c-start+1)))
						end=c;
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
