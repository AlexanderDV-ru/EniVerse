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
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
		string path=assetsPath+pagesPath+pagePath+pageName+pageExtension;
		if(index)
		{
			string indexed="";
			var subdirs=new DirectoryInfo(assetsPath+pagesPath).GetDirectories();
			var files=new DirectoryInfo(assetsPath+pagesPath).GetFiles();
			foreach(var file in files)
				if(file.Name.EndsWith(pageExtension))
					indexed+=file.Name.Substring(0,file.Name.Length-pageExtension.Length)+" : "+("undefined")+"\n";

			field.text=indexed;
			index=false;
		}
        if(create)
        {
            string p = assetsPath;
            foreach (string pp in path.Split('/'))
            {
                p += p==assetsPath?pp:"/" + pp;
                if(p!= assetsPath+path)
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
