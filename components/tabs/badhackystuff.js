export default {
    css() {
        return `
        /** hack because the following isn't getting picked up due to not knowing the horizontal context of the parent
         .spectrum-Tabs--horizontal .spectrum-Tabs-item {
                                            vertical-align: top;
                                        }
         .spectrum-Tabs--horizontal .spectrum-Tabs-item + *:not(.spectrum-Tabs-selectionIndicator) {
                                              margin-left: 24px;
                                            }
         */
        .spectrum-Tabs-item {
            vertical-align: top;
            margin-left: 24px;
        }`;
    }
}
