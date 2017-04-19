files=( "chutes" "lzii" "abbey" "rumours")
artist="x"
albumtitle="x"
year="x"

for i in "${files[@]}"
do
    case $i in
        "chutes")
            artist="The Shins"
            albumtitle="Chutes Too Narrow"
            year="2003"
            ;;
        "lzii")
           artist="Led Zeppelin"
           albumtitle="ii"
           year="1969"
           ;;
        "abbey")
           artist="The Beatles"
           albumtitle="Abbey Road"
           year="1969"
           ;;
        "rumours")
           artist="Fleetwood Mac"
           albumtitle="Rumours"
           year="1977"
           ;;
        *)
            echo "bad match: $i"
            ;;
    esac

    echo "$artist // $albumtitle // $year"


# head -n4 lzii.csv | \
jq --arg ar "$artist" --arg al "$albumtitle" --arg yr "$year" --slurp --raw-input --raw-output \
   'gsub("\""; "") | split("\n") | .[1:]  | map(split(",")) |
map({
"artist": $ar,
"albumtitle": $al,
"year": $yr,
"tracks" : {
"side":.[0],
"tracknum":.[1],
"tracktitle":.[2],
"people":.[3] | split("|"),
"duration":.[4]
}
})
' \
   $i.csv > $i.json
done
