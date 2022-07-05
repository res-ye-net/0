$(document).ready(function(){$('.input-group input[required]').on('keyup change',function(){var $form=$(this).closest('form'),$group=$(this).closest('.input-group'),$addon=$group.find('.input-group-addon'),$icon=$addon.find('span'),state=false;if(!$group.data('validate')){state=$(this).val()?true:false;}else if($group.data('validate')=="email"){state=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val());}
if(state){$addon.removeClass('danger');$addon.addClass('success');$icon.attr('class','glyphicon glyphicon-ok');}else{$addon.removeClass('success');$addon.addClass('danger');$icon.attr('class','glyphicon glyphicon-remove');}
if($form.find('.input-group-addon.danger').length===0){$form.find('[type="submit"]').prop('disabled',false);}else{$form.find('[type="submit"]').prop('disabled',true);}});$('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');});function copyToClipboard(element){var $temp=$("<input>");$("body").append($temp);$temp.val($(element).val()).select();document.execCommand("copy");$temp.remove();var dv=$("#name").prop("defaultValue");var r_value=$("#name").val();if(r_value!==dv){var text="تم نسخ رقم الجلوس";var me=$("#copy").text(text);}
setInterval(function(){me.hide()},2000);}
function printContent(id){str=document.getElementById(id).innerHTML
newwin=window.open('','printwin')
newwin.document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"style/bootstrap.rtl.css\"/>\n')
newwin.document.write('<HTML dir="rtl">\n<HEAD><link rel=\"stylesheet\" type=\"text/css\" href=\"style/style.css\"/>\n')
newwin.document.write('<TITLE>Print Page</TITLE>\n')
newwin.document.write('<script>\n')
newwin.document.write('function chkstate(){\n')
newwin.document.write('if(document.readyState=="complete"){\n')
newwin.document.write('window.close()\n')
newwin.document.write('}\n')
newwin.document.write('else{\n')
newwin.document.write('setTimeout("chkstate()",2000)\n')
newwin.document.write('}\n')
newwin.document.write('}\n')
newwin.document.write('function print_win(){\n')
newwin.document.write('window.print();\n')
newwin.document.write('chkstate();\n')
newwin.document.write('}\n')
newwin.document.write('<\/script>\n')
newwin.document.write('</HEAD>\n')
newwin.document.write('<BODY onload="print_win()">\n')
newwin.document.write('<img src="style/images/header2.png"/><br/><br/><br/>\n')
newwin.document.write(str)
newwin.document.write('</BODY>\n')
newwin.document.write('</HTML>\n')
newwin.document.close()}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-86359217-1','auto');ga('send','pageview');