document.getElementById("resume").addEventListener("click", function() {
    // Remplacez "chemin/vers/votre/resume.pdf" par le chemin réel de votre fichier PDF
    var pdfPath = "packages/cv/yassine_saddiki_cv.pdf";

    // Créez un élément <a> (ancre) invisible
    var link = document.createElement('a');
    link.href = pdfPath;
    link.target = "_blank";

    // Simule un clic sur l'élément <a>
    document.body.appendChild(link);
    link.click();

    // Retire l'élément <a> du DOM
    document.body.removeChild(link);
});