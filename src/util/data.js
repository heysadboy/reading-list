export const convertCSVtoJSON = (raw_data, type) => {
    var csv = raw_data.data;
    var lines = csv.split('\n');
    var result = [];
    var headers = lines[0].split(';');

    for (var i = 1; i < lines.length; i++) {
        var result_item = {}
        var current_line = lines[i].split(';')
        for (var j = 0; j < headers.length; j++) {
            if (current_line[j]) {
                result_item[headers[j]] = current_line[j];
                result_item['type'] = type;
            }
        }
        if (Object.keys(result_item).length != 0) {
            result.push(result_item);
        }
    }

    return result;
}

export const mergeData = (data1, data2) => {
    let newList = [...data1, ...data2];
    newList.sort((a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        }
        return 0;
    })

    return newList;
}