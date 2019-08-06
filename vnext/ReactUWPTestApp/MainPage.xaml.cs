using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Automation;
using Windows.UI.Xaml.Automation.Peers;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace ReactUWPTestApp
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
    public MainPage()
    {
      this.InitializeComponent();

      AutomationProperties.SetName(this, "MainPage");
      Loaded += OnLoaded;
    }

    protected override AutomationPeer OnCreateAutomationPeer()
    {
      return new FrameworkElementAutomationPeer(this);
    }

    private void OnLoaded(object sender, RoutedEventArgs e)
    {
      var automationPeer = new FrameworkElementAutomationPeer(this);
      automationPeer.RaiseAutomationEvent(AutomationEvents.AsyncContentLoaded);
      itemsControl.ItemsSource = Tests;
      NavigateToTestCommand.Frame = this.Frame;
    }

    public List<TestDeclaration> Tests
    {
      get { return TestInventory.Tests; }
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
      TestHelper.UpdateTestContentLoadedCheckBox(this.Frame, isChecked: false);
    }
  }
}
