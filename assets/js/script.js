const treeViewWidgetElement = $("#tree-view-widget")

function populateTreeViewWidget()
{
    const item1 = generateTreeViewWidget("Item 1");
    const item2 = generateTreeViewWidget("Item 2");
    const item3 = generateTreeViewWidget("Item 3");
    const item4 = generateTreeViewWidget("Item 4");
    const item5 = generateTreeViewWidget("Item 5");
    const item6 = generateTreeViewWidget("Item 6");
    const item7 = generateTreeViewWidget("Item 7");
    treeViewWidgetElement.append(item1);
    /*treeViewWidgetElement.append(item2);
    treeViewWidgetElement.append(item3);
    treeViewWidgetElement.append(item4);
    treeViewWidgetElement.append(item5);*/
    addChildWidgets(item1, [item2, item3, item4]);
    addChildWidgets(item2, [item5, item6]);
    addChildWidgets(item4, [item7]);
}

function generateTreeViewWidget(name)
{
    const content = $("<div>");
    const expandIcon = $("<div>");

    expandIcon.append("+");
    expandIcon.addClass("expand-icon");

    content.append(expandIcon);
    content.append(name);
    content.append("<ul></ul>");
    content.addClass("tree-view-content");
    return content;
}

function addChildWidgets(parent, children)
{
    const parentList = parent.children("ul");
    for(child of children)
    {
        parentList.append(child);
    }
}

populateTreeViewWidget();