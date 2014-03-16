/***
|!Filename |ExtendedBrainConfiguration.js|
|!Usage |The following code is used as configuration of ExtendedBrainPlugin, a plugin for TiddlyWikiClassic. It has to be added as tiddler named ExtendedBrainConfiguration and tagged as systemConfig. |
|!Version |0.1 |
!History
!!0.1 / 2014-03-14 / Reto Stauss
Long time ago developped but now under version control
!Configuration Values
***/
// // Zeitstempel im Titel von historischen Tiddlern
//{{{
config.options.extendedBrainTitleTimestamp = "YYYY-0MM-0DD 0hh:0mm /";
//}}}
// // Format des Zeitstempels zur Erzeugung einer eindeutigen Identifkation
//{{{
config.options.extendedBrainFormatUniqueId = "YYYY0MM0DD0hh0mm0ss";
//}}}
// // First day of a week is Sunday?
//{{{
config.options.extendedBrainFirstDayOfWeekSunday = false;
//}}}
// // Format of internal dates
//{{{
config.options.extendedBrainDateFormat = "YYYY-0MM-0DD";
config.options.extendedBrainDateWeekFormat = "YYYY-KW0WW";
config.options.extendedBrainDateMonthFormat = "YYYY-0MM";
//}}}
// // Format of displayed dates
//{{{
config.options.extendedBrainDisplayDateFormat = "DDD, DD. MMM YYYY";
config.options.extendedBrainDisplayDateWeekFormat = "YYYY-KW0WW";
config.options.extendedBrainDisplayDateMonthFormat = "YYYY-0MM";
//}}}
// // Verschiedene Texte
//{{{
config.options.extendedBrainDateField = "Feld";
config.options.extendedBrainDateIsUndefined = "ist undefiniert";
config.options.extendedBrainDateNoTiddlerFoundUniqueId = "Kein Tiddler gefunden mit der Unique ID =";
config.options.extendedBrainDateNoTiddlerFoundTitle = "Kein Tiddler gefunden mit dem Titel =";
config.options.extendedBrainDateEmpty = "";
//}}}
// // Status
//{{{
config.options.extendedBrainStatusOpenString = "Offen";
config.options.extendedBrainStatusOpenValue = 1;
config.options.extendedBrainStatusPausedString = "Wartend";
config.options.extendedBrainStatusPausedValue = 2;
config.options.extendedBrainStatusDoneString = "Erledigt";
config.options.extendedBrainStatusDoneValue = 3;
//}}}
