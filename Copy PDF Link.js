{
"translatorID":"70bf0b84-5070-4f3b-85a7-d7219eebbc74",
"translatorType":2,
"label":"Copy PDF Link",
"creator":"Rizami Annuar, original using idea from Andy Verne, refined using ChatGPT-4",
"target":"html",
"minVersion":"1.0",
"maxVersion":"",
"priority":100,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2024-04-18 09:01:00"
}

function doExport() {
    var item;
    var hasPDF = false;

    while (item = Zotero.nextItem()) {
        if (item.itemType === 'attachment' && item.contentType === 'application/pdf') {
            Zotero.write("zotero://open-pdf/0_" + item.key);
            hasPDF = true;
        }
    }

    // If no PDF was found in the selection
    if (!hasPDF) {
        Zotero.write("No PDF file selected. Please select a PDF file to export its link.");
    }
}
