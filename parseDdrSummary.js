/**
 * Parses the DDR Summary file
 * @param summaryJson, type: json 
 */

 /**
  * {
	"FMPReport": {
		"@attributes": { "creationTime": "6:32:38 AM","creationDate": "11/6/2019","type": "Summary","version": "17.0.1"
		},
		"#text": ["\n\t", "\n"],
		"File": {
			"@attributes": {"link": ".//CFS Centrepoint_fmp12.xml","name": "CFS Centrepoint.fmp12","path": "E:\\CentreForSight_31_05_\\"
			},
			"#text": ["\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t\t", "\n\t"],
			"BaseTables": {"@attributes": {"count": "37"}
			},
			"Tables": {"@attributes": {"count": "304"}},
			"Relationships": {"@attributes": {"count": "264"}},
			"Accounts": {"@attributes": {"count": "11"}},
			"Privileges": {"@attributes": {"count": "9"}},
			"ExtendedPrivileges": {"@attributes": {"count": "11"}},
			"FileAccess": {"@attributes": {"count": "0"}},
			"Layouts": {"@attributes": {"count": "281"}},
			"Scripts": {"@attributes": {"count": "780"}},
			"ValueLists": {"@attributes": {"count": "156"}},
			"CustomFunctions": {"@attributes": {"count": "14"}},
			"FileReferences": {"@attributes": {"count": "1"}},
			"CustomMenuSets": {"@attributes": {"count": "1"}},
			"CustomMenus": {"@attributes": {"count": "32"}}
		}
	}
}
  */

function parseDdrSummary( summaryJson ){
    fixedKeys = ['FMPReport', 'File', 'BaseTables', 'Tables', 'Relationships', 'Accounts', 
    'Privileges', 'ExtendedPrivileges', 'FileAccess', 'Layouts', 'Scripts', 'ValueLists',
    'CustomFunctions', 'FileReferences', 'CustomMenuSets', 'CustomMenus' ];

    var summaryArr = {}; // Stores JSON in associative array format



    
}
