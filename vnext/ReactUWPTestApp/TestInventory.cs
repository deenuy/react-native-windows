using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactUWPTestApp
{
  class TestInventory
  {
    static TestInventory()
    {
      Tests = new List<TestDeclaration>
            {
                new TestDeclaration("TextInputTest", typeof(ReactTestPage)),
            };
    }

    public static List<TestDeclaration> Tests { get; private set; }
  }
}
