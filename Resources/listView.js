exports.addListViewWIthMapToWindow = function addListViewWIthMapToWindow(mapView, win) {
  mapView.top = 0;
  const wrapper = Ti.UI.createView({
    height: 200
  });
  wrapper.add(mapView);

  var listView = Ti.UI.createListView({
    top: '50%',
    height: '50%',
    footerView: wrapper,
    templates: {
      test: {
        childTemplates: [{
          type: 'Ti.UI.View',
          childTemplates: [{
            type: 'Ti.UI.Label',
            bindId: 'label',
            properties: {
              color: 'black',
              bindId: 'label'
            }
          }],
          properties: {
            width: Ti.UI.FILL,
            height: 200,
            cardUseCompatPadding: true,
            backgroundColor: 'white'
          }
        }]
      }
    },
    defaultItemTemplate: 'test'
  });
  var section = Ti.UI.createListSection();
  var items = [];

  for (let i = 0; i < 20; i++) {
    items.push({
      label: {
        text: 'item ' + i
      },
      template: 'test'
    })
  }

  section.setItems(items);
  listView.sections = [section];
  win.add(listView);
}
