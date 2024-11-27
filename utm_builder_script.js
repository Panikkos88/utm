document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

function copyToClipboard() {
    var copyText = document.getElementById("utmResult");
    copyText.select();
    document.execCommand("copy");
    M.toast({html: 'URL copied to clipboard!', classes: 'rounded'});
}

function handleSourceChange() {
    const source = document.getElementById("source").value;
    const campaignInput = document.getElementById("campaign");
    let campaignValue = campaignInput.value;

    if (campaignValue.includes('-')) {
        const parts = campaignValue.split('-');
        parts[1] = source;
        campaignInput.value = parts.join('-');
    } else {
        campaignInput.value = 'DPG-' + source + '-' + campaignValue;
    }
}

function handleMediumChange() {
    const medium = document.getElementById("medium").value;
    const campaignInput = document.getElementById("campaign");
    let campaignValue = campaignInput.value;

    if (campaignValue.includes('-')) {
        const parts = campaignValue.split('-');
        parts[2] = medium;
        campaignInput.value = parts.join('-');
    } else {
        campaignInput.value += '-' + medium;
    }
}

function handleCountryChange() {
    const country = document.getElementById("country").value;
    const campaignInput = document.getElementById("campaign");
    let campaignValue = campaignInput.value;

    if (campaignValue.includes('-')) {
        const parts = campaignValue.split('-');
        parts[3] = country;
        campaignInput.value = parts.join('-');
    } else {
        campaignInput.value += '-' + country;
    }
}

function handleLanguageChange() {
    const language = document.getElementById("language").value;
    const campaignInput = document.getElementById("campaign");
    let campaignValue = campaignInput.value;

    if (campaignValue.includes('-')) {
        const parts = campaignValue.split('-');
        parts[4] = language;
        campaignInput.value = parts.join('-');
    } else {
        campaignInput.value += '-' + language;
    }
}

function buildURL() {
    let baseUrl = document.getElementById("website").value.trim();
    let source = document.getElementById("source").value;
    let medium = document.getElementById("medium").value;
    let campaign = document.getElementById("campaign").value.trim();
    let term = document.getElementById("term").value.trim();
    let content = document.getElementById("content").value;

    if (!baseUrl || !source || !medium || !campaign) {
        M.toast({html: 'Please fill in all required fields', classes: 'rounded'});
        return;
    }

    let utmUrl = `${baseUrl}?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}`;

    if (term) {
        utmUrl += `&utm_term=${encodeURIComponent(term)}`;
    }

    if (content) {
        utmUrl += `&utm_content=${encodeURIComponent(content)}`;
    }

    document.getElementById("utmResult").value = utmUrl;
    document.getElementById("result").classList.remove("hidden");
}
