const treeViewWidgetElement = $("#tree-view-widget")

function populateTreeViewWidget()
{
    const content = $("<div>");
    content.append("ABCD");
    treeViewWidgetElement.append(content);
}

populateTreeViewWidget();