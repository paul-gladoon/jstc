function aaa(data) {
    const table = document.querySelector('[id*="TimeEntryWeek"]')
    const rows = table.querySelectorAll('[class*=RowData]')
    const row = rows[data.rowNum]
    const event = document.createEvent('HTMLEvents')
    event.initEvent('change', false, false)

    if (data.project) {
        row.querySelector('[id*="lblProjectName"]').click()
        const projectLi = document.querySelectorAll('[id*=ProjectName_DropDown] .rcbTemplate')
        for (let i = 0; i < projectLi.length; i++) {
          if (projectLi[i].innerText.indexOf(data.project) >= 0) {
            projectLi[i].click()
          }  
        }
    }

    if (data.activity) { 
        row.querySelector('[id*="lblActivityCode"]').click()
        const activityLi = document.querySelectorAll('[id*=ActivityCodes_DropDown] .rcbTemplate')
        for (let i = 0; i < activityLi.length; i++) {
          if (activityLi[i].innerText.indexOf(data.activity) >= 0) {
            activityLi[i].click()
          }  
        }
    }

    if (data.week) {
        data.week = Array.isArray(data.week) ? data.week : [data.week]
        for (const timeData of data.week) {
            row.querySelectorAll('input[id*="txtDayHours"]')[timeData.day].value = timeData.time
            row.querySelectorAll('input[id*="txtDayHours"]')[timeData.day].dispatchEvent(event)
        }
    }
}

aaa({ 
    rowNum: 0, 
    project: 'West Wing 01',
    activity: 'Design',
    week: [
        { day: 0, time: 8 }, 
        { day: 1, time: 8 }, 
        { day: 2, time: 8 }, 
        { day: 3, time: 8 }, 
        { day: 4, time: 8 },
        { day: 5, time: 8 },
        { day: 6, time: 8 }]
})
