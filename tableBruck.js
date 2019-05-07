function getTable(root) {

    const durationLines = document.querySelectorAll('.ganttScheduleBarHandle')
    const headerHash = buildHeaderHash(root)

    function keyFormat(el) {
        return el.innerText.replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '')
    }

    function mouseOver(node) {

        const mouseoverEv = document.createEvent("MouseEvents")
        mouseoverEv.initMouseEvent("mouseover", true, false, window, 1, // detail : Event's mouse click count
        50, // screenX
        50, // screenY
        50, // clientX
        50, // clientY
        false, // ctrlKey
        false, // altKey
        false, // shiftKey
        false, // metaKey
        0, // button : 0 = click, 1 = middle button, 2 = right button
        null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
        )
        node.dispatchEvent(mouseoverEv)
    }

    function tableBuilder(rowsNodeList, cellsLocator, headerHash, linesNodeList) {
        return Array.prototype.map.call(rowsNodeList, function(row, i) {
            const tds = row.querySelectorAll(`${cellsLocator}`)
            const rowPosition = row.getBoundingClientRect().top

            const lines = Array.prototype.reduce.call(linesNodeList, function(acc, line) {
                const linePosition = line.getBoundingClientRect().top
                if (linePosition === rowPosition || linePosition === (rowPosition + 1)) {
                    mouseOver(line)
                    acc = document.querySelector('.ui-tooltip.qtip').innerText.trim()
                }
                return acc
            }, '')

            return Array.prototype.reduce.call(Object.keys(headerHash), function(acc, header) {
                acc[header] = tds[headerHash[header]].innerText.trim()
                acc.groupIndex = row.getAttribute('groupindex')
                acc.duration = lines
                return acc
            }, {})
        })
    }

    function expandAllRows(tableRoot) {
        const expandAllEl = document.querySelector(`${tableRoot} [id$="LeftHeader"] .expandGroup`)

        if (expandAllEl) {
            expandAllEl.click()
        }
    }

    function buildHeaderHash(tableRoot) {
        const headers = document.querySelectorAll(`${tableRoot} [id$="LeftHeader"] tbody td`)
        return Array.prototype.reduce.call(headers, function(acc, header, index) {
            const title = header.innerText.length ? header.innerText.trim() : 'EmptyTitle' + index

            acc[title] = index
            return acc
        }, {})
    }

    function buildGroupTable(tableRoot) {
        const rows = document.querySelectorAll(`${tableRoot} [id$="LeftPaneContents"] table tr:not([itemIndex])[groupIndex]`)

        return tableBuilder(rows, '.EditableCellHeader', headerHash, durationLines)
    }

    function buildItemTable(tableRoot) {
        const rows = document.querySelectorAll(`${tableRoot} [id$="LeftPaneContents"] table tr[itemIndex]`)
        const rowsWithContent = Array.prototype.filter.call(rows, function(row) {
            return row.innerText.trim()
        })

        return tableBuilder(rowsWithContent, '.EditableCell', headerHash, durationLines)
    }

    function buildFooter() {
        const footerKeys = document.querySelectorAll('.ganttScheduleFooterContainer .footerElement.la')
        const footerValues = document.querySelectorAll('.ganttScheduleFooterContainer .footerElement.ra')
        const emptyArr = []

        if (footerKeys.length && footerValues.length) {
            const footerResult = Array.prototype.reduce.call(footerKeys, function(acc, key, i) {
                acc[keyFormat(key)] = footerValues[i].innerText.trim()
                return acc
            }, {})

            emptyArr.push(footerResult)
        }

        return emptyArr
    }

    expandAllRows(root)
    const groupTable = buildGroupTable(root)
    const itemTable = buildItemTable(root)

    const groupWithItemsTable = groupTable.map(function(group) {
        const filteredResults = itemTable.filter(function(item) {
            return item.groupIndex === group.groupIndex
        })

        group.items = filteredResults
        return group
    })

    if ((buildFooter()).length) {
        groupWithItemsTable.push({
            footer: buildFooter()
        })
    }

    return groupWithItemsTable
}

getTable('[id*="contentSection_ebGantt"]')
