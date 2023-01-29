        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('全世界最可爱的小姑娘，不要太挑！！！')
            $(this).hide();
        })