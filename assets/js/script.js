const treeViewWidgetElement = $("#tree-view-widget")

function populateTreeViewWidget()
{
    const item1 = generateTreeViewWidget("Item 1")
    const item2 = generateTreeViewWidget("Item 2")
    const item3 = generateTreeViewWidget("Item 3")
    const item4 = generateTreeViewWidget("Item 4")
    const item5 = generateTreeViewWidget("Item 5")
    treeViewWidgetElement.append(item1);
    treeViewWidgetElement.append(item2);
    treeViewWidgetElement.append(item3);
    treeViewWidgetElement.append(item4);
    treeViewWidgetElement.append(item5);
}

function generateTreeViewWidget(name)
{
    const content = $("<div>");
    content.append(name + "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>");
    content.addClass("tree-view-content");
    return content;
}

populateTreeViewWidget();