// userprofile_dynamic.js
document.addEventListener('DOMContentLoaded', function() {
    var jobChoiceField = document.getElementById('id_job_choice');
    var citizenidField = document.getElementById('id_citizenid');

    if (!jobChoiceField || !citizenidField) return;

    jobChoiceField.addEventListener('change', function() {
        var selectedJob = jobChoiceField.value;
        // Pas eventueel de URL aan naar de juiste locatie van je view:
        var url = '/admin/get_players_for_job/?job=' + encodeURIComponent(selectedJob);

        fetch(url, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Clear current options
            citizenidField.innerHTML = '';

            if (data.length === 0) {
                var option = document.createElement('option');
                option.value = '';
                option.text = 'Geen spelers beschikbaar';
                citizenidField.appendChild(option);
            } else {
                data.forEach(function(item) {
                    var option = document.createElement('option');
                    option.value = item.citizenid;
                    option.text = item.display_name;
                    citizenidField.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching players:', error);
        });
    });
});
