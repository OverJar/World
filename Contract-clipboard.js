const contentCp = document.getElementById("content-cp");

const copyBtn = document.getElementById("copy");

copyBtn.onclick = copyToClipboard;

function copyToClipboard() {
	navigator.clipboard
		.writeText(contentCp.innerText)
		.then(() => alert("Copied to clipboard"))
		.catch((e) => alert(e.message));
}

