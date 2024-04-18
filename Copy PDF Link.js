{
    "translatorID":"dcb3fd0b-907f-49bd-97ef-64eb98c5096c",
    "label":"Copy PDF Link",
    "creator":"Rizami Annuar",
    "target":"export",
    "minVersion":"2.0",
    "maxVersion":"",
    "priority":100,
    "inRepository":false,
    "translatorType":2,
    "browserSupport":"gcsibv",
    "displayOptions": {
        "exportFileData": true,
        "exportCharset": "UTF-8"
    },
    "configOptions": {
        "getCollections": true
    }
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

    if (!hasPDF) {
        Zotero.write("No PDF file selected. Please select a PDF file to export its link.");
    }
}
