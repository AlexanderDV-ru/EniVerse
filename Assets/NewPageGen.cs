using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public enum Type
{
    Page,
    Feature,
    Ability,
    Verse,
    Person,
    Creature
}
[ExecuteInEditMode]
public class NewPageGen : MonoBehaviour
{
    public string path = "Pages/";
    public Type parent=Type.Page;
    public string custom = "";
    public bool create;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(create)
        {
            string p = "Assets";
            foreach (string pp in path.Split('/'))
            {
                p += "/" + pp;
                if(p!= "Assets"+"/"+path)
                    if(!new DirectoryInfo(p).Exists)
                        new DirectoryInfo(p).Create();
            }
            StreamWriter writer = new StreamWriter("Assets/"+path+".page", false);
            string name = path.Split('/')[path.Split('/').Length - 1];
            string par = "";
            switch(parent)
            {
                case Type.Page:
                    par = "Page";
                    break;
                case Type.Feature:
                    par = "Feature";
                    break;
                case Type.Ability:
                    par = "Ability";
                    break;
                case Type.Verse:
                    par = "Verse";
                    break;
                case Type.Person:
                    par = "Person";
                    break;
                case Type.Creature:
                    par = "Creature";
                    break;
            }
            if (custom != "")
                par = custom;
            writer.WriteLine("name=" + name);
            writer.WriteLine("parent=" +par);
            writer.Close();

            create = false;
        }
    }
}
