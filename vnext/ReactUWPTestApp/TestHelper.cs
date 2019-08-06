using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;

namespace ReactUWPTestApp
{
  class TestHelper
  {
    public static void UpdateTestContentLoadedCheckBox(Frame frame, bool isChecked)
    {
      var checkBox = FindVisualChildByName(frame, "TestContentLoadedCheckBox") as CheckBox;
      if (checkBox != null)
      {
        checkBox.IsChecked = isChecked;
      }
    }
    public static DependencyObject FindVisualChildByName(FrameworkElement parent, string name)
    {
      if (parent.Name == name)
      {
        return parent;
      }

      int childrenCount = VisualTreeHelper.GetChildrenCount(parent);

      for (int i = 0; i < childrenCount; i++)
      {
        FrameworkElement childAsFE = VisualTreeHelper.GetChild(parent, i) as FrameworkElement;

        if (childAsFE != null)
        {
          DependencyObject result = FindVisualChildByName(childAsFE, name);

          if (result != null)
          {
            return result;
          }
        }
      }

      return null;
    }
  }
}
