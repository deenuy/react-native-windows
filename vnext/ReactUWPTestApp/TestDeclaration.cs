using System;

namespace ReactUWPTestApp
{
  public class TestDeclaration
  {
    public TestDeclaration()
    {
    }

    public TestDeclaration(string name, Type pageType, string jsFileName = "ReactUWPTestApp/index.uwp", string jsComponentName = "ReactUWPTestApp")
    {
      Name = name;
      PageType = pageType;
      JSFileName = jsFileName;
      JSComponentName = jsComponentName;
    }

    public string Name { get; set; }

    public Type PageType { get; set; }

    public string JSFileName { get; set; }

    public string JSComponentName { get; set; }

    public override string ToString()
    {
      return String.Format("{0}({1}:{2})", Name, JSComponentName, JSFileName);
    }
  }
}
