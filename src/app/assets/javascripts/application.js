// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
    $('.account-summary .edit').on('click', function() {
        $('#account-details .account-summary').slideUp();
        $('#account-details form').slideDown();
        return false;
    });
    $('#account-details .form-cancel').on('click', function() {
        $('#account-details .account-summary').slideDown();
        $('#account-details form').slideUp();
        return false;
    });

    $('.notifications-link a').on('click', function() {
        $('.notifications-link').slideUp();
        $('#notification-settings').slideDown();
        return false;
    });
    $('#notification-settings .form-cancel').on('click', function() {
        $('.notifications-link').slideDown();
        $('#notification-settings').slideUp();
        return false;
    });

    $('.password-link a').on('click', function() {
        $('.password-link').slideUp();
        $('#change-password').slideDown();
        return false;
    });
    $('#change-password .form-cancel').on('click', function() {
        $('.password-link').slideDown();
        $('#change-password').slideUp();
        return false;
    });
});