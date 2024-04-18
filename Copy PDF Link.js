{
"translatorID":"70bf0b84-5070-4f3b-85a7-d7219eebbc74",
"translatorType":2,
"label":"Copy PDF Link",
"creator":"Rizami Annuar, original using idea from Andy Verne",
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
	while(item = Zotero.nextItem()) {
		Zotero.write("zotero://open-pdf/");
		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write(library_id+"_"+item.key);
	}}
