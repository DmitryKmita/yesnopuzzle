case $1 in
	"initial") git checkout 5fde9b17624faeaae5e5121534a7df5f242c8237 ;;
	1) git checkout 5fde9b17624faeaae5e5121534a7df5f242c8237 ;;
	"models") git checkout 59459229e3b2f7166504bc71e09840d0ae8f4eea ;;
	2) git checkout 59459229e3b2f7166504bc71e09840d0ae8f4eea ;;
	"routes") git checkout 2ecfc847a37a8fbe2a1f9a5b54f0be0097a27c75 ;;
	3) git checkout 2ecfc847a37a8fbe2a1f9a5b54f0be0097a27c75 ;;
	"controllers") git checkout 370eb3641bb19d19f031940c2d97703a9b083530 ;;
	4) git checkout 370eb3641bb19d19f031940c2d97703a9b083530 ;;
	"latest") git checkout master ;;
	5) git checkout master ;;
	*) echo "Try harder" ;;
esac