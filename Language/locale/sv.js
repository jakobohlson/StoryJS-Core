/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
  VMM.Language = {
		lang: "sv",
		api: {
			wikipedia: "sv"
		},
		date: {
			month: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
			month_abbr: ["Jan.", "Feb.", "Mars", "April", "Maj", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dec."],
			day: ["Söndag","Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
			day_abbr: ["Sö.","Må.", "Ti.", "On.", "To.", "Fr.", "Lö."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d. mmm",
			full: "d. mmmm',' yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm',' yyyy'</small>'",
			full_long: "dddd',' d. mmm',' yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d. mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Laddar timeline... ",
			return_to_title: "Tillbaka till titeln",
			expand_timeline: "Öka timeline",
			contract_timeline: "Minska timeline",
			wikipedia: "Från Wikipedia",
			loading_content: "Laddar innehåll",
			loading: "Laddar"
		}
	}
}
