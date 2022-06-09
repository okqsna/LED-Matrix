      let diodeColor = "orange";
        let clearColor = "white";
        let errorColor = "red";


        function clear() {
            document.getElementById('d1_1').style.backgroundColor = clearColor;
            document.getElementById('d1_2').style.backgroundColor = clearColor;
            document.getElementById('d1_3').style.backgroundColor = clearColor;
            document.getElementById('d1_4').style.backgroundColor = clearColor;
            document.getElementById('d1_5').style.backgroundColor = clearColor;

            document.getElementById('d2_1').style.backgroundColor = clearColor;
            document.getElementById('d2_2').style.backgroundColor = clearColor;
            document.getElementById('d2_3').style.backgroundColor = clearColor;
            document.getElementById('d2_4').style.backgroundColor = clearColor;
            document.getElementById('d2_5').style.backgroundColor = clearColor;

            document.getElementById('d3_1').style.backgroundColor = clearColor;
            document.getElementById('d3_2').style.backgroundColor = clearColor;
            document.getElementById('d3_3').style.backgroundColor = clearColor;
            document.getElementById('d3_4').style.backgroundColor = clearColor;
            document.getElementById('d3_5').style.backgroundColor = clearColor;

            document.getElementById('d4_1').style.backgroundColor = clearColor;
            document.getElementById('d4_2').style.backgroundColor = clearColor;
            document.getElementById('d4_3').style.backgroundColor = clearColor;
            document.getElementById('d4_4').style.backgroundColor = clearColor;
            document.getElementById('d4_5').style.backgroundColor = clearColor;

            document.getElementById('d5_1').style.backgroundColor = clearColor;
            document.getElementById('d5_2').style.backgroundColor = clearColor;
            document.getElementById('d5_3').style.backgroundColor = clearColor;
            document.getElementById('d5_4').style.backgroundColor = clearColor;
            document.getElementById('d5_5').style.backgroundColor = clearColor;

            document.getElementById('d6_1').style.backgroundColor = clearColor;
            document.getElementById('d6_2').style.backgroundColor = clearColor;
            document.getElementById('d6_3').style.backgroundColor = clearColor;
            document.getElementById('d6_4').style.backgroundColor = clearColor;
            document.getElementById('d6_5').style.backgroundColor = clearColor;

            document.getElementById('d7_1').style.backgroundColor = clearColor;
            document.getElementById('d7_2').style.backgroundColor = clearColor;
            document.getElementById('d7_3').style.backgroundColor = clearColor;
            document.getElementById('d7_4').style.backgroundColor = clearColor;
            document.getElementById('d7_5').style.backgroundColor = clearColor;


        }
        clear();

        add.onclick = function() {
            let str = inp.value.toLowerCase();
            inp.value = '';
            let i = 0;
            let timerId = setInterval(function() {
                if (i < str.length) {
                    switch (str[i]) {
                        case 'a':
                            clear();
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'b':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;
                        case 'c':
                            clear();
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'd':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;
                        case 'e':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'f':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;

                            break;
                        case 'g':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case '.':
                            clear();
                            document.getElementById('d3_3').style.backgroundColor = errorColor;
                            document.getElementById('d2_2').style.backgroundColor = errorColor;
                            document.getElementById('d2_4').style.backgroundColor = errorColor;
                            document.getElementById('d3_1').style.backgroundColor = errorColor;
                            document.getElementById('d3_2').style.backgroundColor = errorColor;
                            document.getElementById('d3_3').style.backgroundColor = errorColor;
                            document.getElementById('d3_4').style.backgroundColor = errorColor;
                            document.getElementById('d3_5').style.backgroundColor = errorColor;
                            document.getElementById('d4_1').style.backgroundColor = errorColor;
                            document.getElementById('d4_2').style.backgroundColor = errorColor;
                            document.getElementById('d4_3').style.backgroundColor = errorColor;
                            document.getElementById('d4_4').style.backgroundColor = errorColor;
                            document.getElementById('d4_5').style.backgroundColor = errorColor;
                            document.getElementById('d5_2').style.backgroundColor = errorColor;
                            document.getElementById('d5_3').style.backgroundColor = errorColor;
                            document.getElementById('d5_4').style.backgroundColor = errorColor;
                            document.getElementById('d6_3').style.backgroundColor = errorColor;
                            break;
                        case 'h':
                            clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            break;

                        case 'i':
                            clear();

                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;

                        case 'j':
                            clear();
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;

                        case 'k':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'l':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'm':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;

                            break;
                        case 'n':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'o':
                            clear();
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;


                            break;
                        case 'p':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;


                            break;
                        case 'q':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 'r':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 's':
                            clear();
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 't':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;


                            break;
                        case 'u':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'v':
                            clear();
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;

                            break;
                        case 'w':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;

                            break;
                        case 'x':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_5').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;

                            break;
                        case 'y':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;

                            break;
                        case 'z':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;

                            break;
                        case 'а':
                            clear();
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'б':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;
                        case 'в':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;

                        case 'г':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;


                            break;
                        case 'ґ':
                            clear();
                            document.getElementById('d1_4').style.backgroundColor = diodeColor;
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;


                            break;
                        case 'д':
                            clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;
                            break;
                        case 'е':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'є':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'ж':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_5').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;
                            break;
                        case 'з':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 'и':
                            clear();
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 'і':
                            clear();

                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;
                        case 'ї':
                            clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            break;
                        case 'й':
                            clear();

                            document.getElementById('d1_2').style.backgroundColor = diodeColor;
                            document.getElementById('d1_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 'к':
                            clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;

                        case 'л':
                            clear();

                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'м':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;

                            break;
                        case 'н':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;

                            break;
                        case 'о':
                            clear();
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;


                            break;
                        case 'п':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'р':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;


                            break;
                        case 'с':
                            clear();
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            break;
                        case 'т':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;


                            break;
                        case 'у':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'у':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'ф':
                            clear();
                            document.getElementById('d1_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d7_3').style.backgroundColor = diodeColor;


                            break;
                        case 'х':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_5').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;

                            break;
                        case 'ц':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;
                            document.getElementById('d7_5').style.backgroundColor = diodeColor;

                            break;
                        case 'ч':
                            clear();
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'ш':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_5').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;


                            break;
                        case 'щ':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_3').style.backgroundColor = diodeColor;
                            document.getElementById('d2_5').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_5').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            document.getElementById('d6_5').style.backgroundColor = diodeColor;


                            break;
                        case 'ь':
                            clear();
                            document.getElementById('d3_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_3').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;


                            break;
                        case 'ю':
                            clear();
                            document.getElementById('d2_1').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_3').style.backgroundColor = diodeColor;
                            document.getElementById('d3_5').style.backgroundColor = diodeColor;
                            document.getElementById('d4_1').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d5_1').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_5').style.backgroundColor = diodeColor;
                            document.getElementById('d6_1').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;



                            break;

                        case 'я':
                            clear();
                            document.getElementById('d1_3').style.backgroundColor = diodeColor;
                            document.getElementById('d1_4').style.backgroundColor = diodeColor;
                            document.getElementById('d2_2').style.backgroundColor = diodeColor;
                            document.getElementById('d2_4').style.backgroundColor = diodeColor;
                            document.getElementById('d3_1').style.backgroundColor = diodeColor;
                            document.getElementById('d3_4').style.backgroundColor = diodeColor;
                            document.getElementById('d4_2').style.backgroundColor = diodeColor;
                            document.getElementById('d4_3').style.backgroundColor = diodeColor;
                            document.getElementById('d4_4').style.backgroundColor = diodeColor;
                            document.getElementById('d5_3').style.backgroundColor = diodeColor;
                            document.getElementById('d5_4').style.backgroundColor = diodeColor;
                            document.getElementById('d6_2').style.backgroundColor = diodeColor;
                            document.getElementById('d6_4').style.backgroundColor = diodeColor;
                            document.getElementById('d7_1').style.backgroundColor = diodeColor;
                            document.getElementById('d7_4').style.backgroundColor = diodeColor;



                            break;
                    }
                    i++
                } else {
                    clear();
                    clearInterval(timerId);
                }
            }, 1000)

        }
