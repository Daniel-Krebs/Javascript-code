 var designTab = document.getElementById("Design")
if (designTab) {
    designTab.click();

    setTimeout(() => {
        var designTheme = document.getElementById("ThemesPortalVTI");

        if (designTheme) {
            designTheme.click();

        } else {
            console.error("Design theme dropdown not found.");
        }
    }, 500); 
} else {
    console.error("Design tab not found.");
}
