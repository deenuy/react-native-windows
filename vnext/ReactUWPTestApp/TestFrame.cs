using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Documents;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Templated Control item template is documented at https://go.microsoft.com/fwlink/?LinkId=234235

namespace ReactUWPTestApp
{
  public sealed class TestFrame : Frame
  {
    private Type _mainPageType = null;
    private Button _backButton = null;
    private TextBlock _currentPageTextBlock = null;

    public TestFrame(Type mainPageType)
    {
      this.DefaultStyleKey = typeof(TestFrame);
      _mainPageType = mainPageType;
    }

    protected override void OnApplyTemplate()
    {
      base.OnApplyTemplate();

      this.Navigated += TestFrame_Navigated;
      _backButton = (Button)GetTemplateChild("BackButton");
      _currentPageTextBlock = (TextBlock)GetTemplateChild("CurrentPageTextBlock");
      _currentPageTextBlock.Text = "Home";

    }

    private void TestFrame_Navigated(object sender, NavigationEventArgs e)
    {
      if (e.SourcePageType == _mainPageType)
      {
        _backButton.Visibility = Visibility.Collapsed;
        _currentPageTextBlock.Text = "Home";
      }
      else
      {
        _backButton.Visibility = Visibility.Visible;
        var  testSeclaration = e.Parameter as TestDeclaration;
        _currentPageTextBlock.Text = testSeclaration?.ToString() ?? "";
      }

      GC.Collect();
      GC.WaitForPendingFinalizers();
      GC.Collect();
    }
  }
}
