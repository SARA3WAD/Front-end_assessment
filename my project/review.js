function quiz()
{
    var sara = document.querySelectorAll('#label');
    var yes = 0;
    var no = 0;
    sara.forEach(function(i)
    {
        if(i.checked && i.value == 'yes')
        {
            yes++;
        }
        else if(i.checked && i.value == 'no')
        {
            no++;
        }
    })
    alert(`Yes = ${yes}  No = ${no}`);
}