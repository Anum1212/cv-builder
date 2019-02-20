$(document).ready(function () {

    $("#user-image").attr("src",$.localStorage('image'));
    $("#user-name").text($.localStorage('name'));
    $("#user-email").text($.localStorage('email'));
    $("#user-address").text($.localStorage('address'));
    $("#user-contact").text($.localStorage('contact'));
    $("#user-applyingAs").text($.localStorage('applyingAs'));
    $("#user-aboutMe").text($.localStorage('aboutMe'));
    $("#user-skillName").text($.localStorage('skillName'));
    $("#user-skillLvl").text($.localStorage('skillLvl'));
    $("#user-languageName").text($.localStorage('languageName'));
    $("#user-languageLvl").text($.localStorage('languageLvl'));
    $("#user-job").text($.localStorage('job'));
    $("#user-company").text($.localStorage('company'));
    $("#user-jobStart").text($.localStorage('jobStart'));
    $("#user-jobEnd").text($.localStorage('jobEnd'));
    $("#user-jobDescription").text($.localStorage('jobDescription'));
    $("#user-instituteName").text($.localStorage('instituteName'));
    $("#user-degreeName").text($.localStorage('degreeName'));
    $("#user-degreeStart").text($.localStorage('degreeStart'));
    $("#user-degreeEnd").text($.localStorage('degreeEnd'));
});