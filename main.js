import jspreadsheet from 'jspreadsheet-ce';

window.onload = function () {
    const options = {
        data: ["Col 1 Value", "Col 2 Value"],
        includeHeadersOnDownload: true,
        allowInsertColumn: false,
        allowManualInsertColumn: false,
        allowRenameColumn: false,
        allowComments: false,
        contextMenu: null,
        columnResize: false,
        rowResize: false,
        colAlignments: ['left', 'left'],
    };
    const tableElement = document.getElementById("table");
    jspreadsheet(tableElement, options);
};
