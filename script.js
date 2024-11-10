$(document).ready(function() {
    let totalIncome = 0;
    let totalExpenses = 0;

    function updateOverview() {
        $('#total-income').text(totalIncome.toFixed(2));
        $('#total-expenses').text(totalExpenses.toFixed(2));
        $('#balance').text((totalIncome - totalExpenses).toFixed(2));

        $('#balance').css('color', (totalIncome - totalExpenses >= 0) ? 'green' : 'red');
    }

    $('#transaction-form').on('submit', function(e) {
        e.preventDefault();

        const description = $('#description').val().trim();
        const amount = parseFloat($('#amount').val());
        const category = $('#category').val();

        if (description && amount > 0) {
            const transactionItem = $('<li></li>')
                .addClass(category)
                .text(`${description}: $${amount.toFixed(2)}`);

            $('#transactions').append(transactionItem);

            if (category === 'income') {
                totalIncome += amount;
            } else {
                totalExpenses += amount;
            }

            $('#description').val('');
            $('#amount').val('');
            $('#category').val('income');

            updateOverview();
        } else {
            alert('Please enter a valid description and amount.');
        }
    });
});
