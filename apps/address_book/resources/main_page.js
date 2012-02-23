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
        topLeftView: SC.SourceListView.design({
              content: ["Elizabeth Jones", "Arnold Washington", "Pete Matthews"]
        }),
        bottomRightView: SC.View.design({
          childViews: 'contactDetails'.w(),

          contactDetails: SC.View.design({
            layout: { top: 50, left: 50, bottom: 50, right: 50 },
            childViews: 'nameLabel phoneLabel addressLabel'.w(),

            nameLabel: SC.LabelView.design({
              layout: { width: 500, height: 18 },
              value: "Contact name"
            }),

            phoneLabel: SC.LabelView.design({
              layout: { top: 40, width: 500, height: 18 },
                value: "Contact phone number"
              }),

            addressLabel: SC.LabelView.design({
              layout: { top: 80, width: 500, height: 500 },
              value: "Contact address"
            })
          })
        })
      })
    })
  })
});
