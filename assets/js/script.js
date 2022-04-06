const treeViewWidgetElement = $("#tree-view-widget")

function populateTreeViewWidget()
{
    const content = $("<div>");
    content.append("ABCD");
    content.addClass("tree-view-content");
    treeViewWidgetElement.append(content);
}

populateTreeViewWidget();