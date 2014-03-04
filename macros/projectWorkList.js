/%                                                                            %/
/% Filename: projectWorkList.js                                               %/
/% Source URL: %/
/% %/
/% %/
/% %/
/% %/
<<forEachTiddler 
    where 
        'tiddler.tags.contains("Arbeit") && tiddler.fields.work_status == "$2" && tiddler.fields.ref_to_origin_of_work == "$1"'
    sortBy 
        '1'
        ascending
    script
        '
        function writeWhereClause(status) {
           return "";
        }
        function writeLine(index, count, tiddler, context) {
            // Initialisierung
            if(index == 0) {
               context.sum_estimate = 0;
               context.sum_rest = 0;
            }
            // Aufwände summieren
            if(store.getValue(tiddler.title,"estimated_time_effort") != "" && store.getValue(tiddler.title,"estimated_time_effort") != undefined) {
               context.sum_estimate = context.sum_estimate + Number(tiddler.fields.estimated_time_effort);
               context.sum_estimate = Math.round(context.sum_estimate*10)/10;
            }
            if(store.getValue(tiddler.title,"estimated_rest_effort") != "" && store.getValue(tiddler.title,"estimated_rest_effort") != undefined) {
               context.sum_rest = context.sum_rest + Number(tiddler.fields.estimated_rest_effort);
               context.sum_rest = Math.round(context.sum_rest*10)/10;
            }
            // Formatierung
            if(tiddler.fields.work_status == 3) {
                strike = "--";
            } else {
                strike = "";
            }
            // Auszugebende Zeile zusammenbauen
            line = "|" + strike + "[["  +tiddler.title + "]]" + strike;
            if(tiddler.fields.estimated_time_effort == "" || tiddler.fields.estimated_time_effort == undefined) {
               line = line + "| - ";
            } else {
               line = line + "| " + tiddler.fields.estimated_time_effort;
            }
            if(tiddler.fields.estimated_rest_effort == "" || tiddler.fields.estimated_rest_effort == undefined) {
               line = line + "| - ";
            } else {
               line = line + "| " + tiddler.fields.estimated_rest_effort;
            }
            if(tiddler.fields.planned_month == "" || tiddler.fields.planned_month == undefined) {
               line = line + "| ";
            } else {
               line = line + "|[[" + new Date(tiddler.fields.planned_month).formatString("YYYY-0MM") + "]]";
            }
            if(tiddler.fields.planned_week == "" || tiddler.fields.planned_week == undefined) {
               line = line + " | ";
            } else {
               line = line + " |[[" + new Date(tiddler.fields.planned_week).formatString("YYYY-KW0WW") + "]]";
            }
            if(tiddler.fields.planned_day == "" || tiddler.fields.planned_day == undefined) {
               line = line + " | ";
            } else {
            line = line + " |[[" + tiddler.fields.planned_day + "]]";
            }
            line = line + "|\n";
            // Aufwandsumme pro Tag nach der letzten Zeile ausgeben
            if(index == count - 1) {
               line = line + "|  \'\'Total\'\'| \'\'  " + context.sum_estimate.toFixed(1) + "  \'\'| \'\'  " + context.sum_rest.toFixed(1) + " \'\'|>|>|";
               line = line + "|\n";
            }
            return line;
        } 
        '
    write
        'writeLine(index, count, tiddler, context)'
    begin 
        '"|!Zu tun|!Aufwand|!Rest|!Monat|!Woche|!Tag|\n"'
 >>
