<?
require ('header.php');
global $study;
global $run;

if(isset($run)) {
  $next_study=$run->getNextStudy($study);
  $optional=$run->isOptional($next_study);
  if(($next_study and !$optional) or ($next_study and $optional and $currentUser->userHasCompletedStudy($study)))
    header("Location: pre_survey.php?study_id=$next_study->id&run_id=$run->id");
}   


require ('includes/header.php');
// ends with </html>
require ('includes/design.php');
// ends with <div id="main"



//$vpndata = get_vpn_data($vpncode); // returns an object
$timestarted = $_GET['ts'];

//todo
/* if(study_part_completed($vpncode,'pretest')) {  */
/* 	/\* update_timestamps($vpncode,$study,$timestarted); *\/ */
/* 	update_timestamps($vpncode,$timestarted); */
/* 	// update study field in vpndata table and send/queue emails if needed */
/* 	/\* post_study_hook($vpncode,$study); *\/ */
/* 	post_study_hook($vpncode); */
/* 	// garbage collection */
/* 	remove_stale_itemsdisplayed($vpncode,$timestarted); */
/* 	} */

if((isset($run) and !$next_study) or !isset($run)) {
?>

<p>Danke für das Ausfüllen der Studie.</p>
<p><a href="index.php">Hier gehts weiter</a></p>  

                                  <?php }  else {  ?>

<p>Danke für das Ausfüllen der Studie.</p>
                                  <p>Machen Sie doch mit diese Studie weiter: <a href=<?php echo "pre_survey.php?study_id=$next_study->id&run_id=$run->id"; ?>><?php echo $next_study->name; ?></a></p>  
<p><a href="index.php">Zurück zum Index</a></p>  

<?php
}
// schließe main-div
echo "</div>\n";
// binde Navigation ein
require ('includes/navigation.php');
// schließe Datenbank-Verbindung, füge bei Bedarf Analytics ein
require('includes/footer.php');
?>