// ==========================================================================
// Project:   AddressBook - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals AddressBook */

// This page describes the main user interface for your application.  
AddressBook.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'workspaceView'.w(),
    workspaceView: SC.WorkspaceView.design({
      contentView: SC.SplitView.design({
        dividerThickness: 1,
        defaultThickness: 300,
        topLeftView: SC.View,
        bottomRightView: SC.View
      })
    })
  })
});
