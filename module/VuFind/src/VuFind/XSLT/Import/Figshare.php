<?php
/**
 * XSLT importer support methods for Figshare.
 *
 * @category VuFind
 * @package  Import_Tools
 * @author   Mark Gavillet <mark.gavillet@ptfs-europe.com>
 */

namespace VuFind\XSLT\Import;

class Figshare
{
    // remove bracketed numbers appended to author names
    public static function FS_cleanAuthor($author)
    {
        $s=explode("(",$author);
        return trim($s[0]);
    }

    // strip all html from dc:description
    public static function FS_cleanDescription($desc)
    {
        return strip_tags(html_entity_decode($desc));
    }

    // assess content of dc:identifier to return URL
    public static function FS_doi_handle($identifier,$url)
    {
        if (strpos($identifier, '10.') === 0) {
            return "https://dx.doi.org/".$identifier;
        } elseif (strpos($identifier, '2134') === 0) {
            return "https://hdl.handle.net/".$identifier;
        } else {
            return $url;
        }
    }

    // re-map dc:type values
    public static function FS_mapTypes($type) {
        $format_map = array(
            "Poster"                    =>  "Poster",
            "Media"                     =>  "Audio/Video",
            "Presentation"              =>  "Presentation",
            "Model"                     =>  "Model",
            "Figure"                    =>  "Image",
            "Dataset"                   =>  "Data",
            "Journal contribution"      =>  "Article",
            "Thesis"                    =>  "Thesis",
            "Software"                  =>  "Software",
            "Online resource"           =>  "Text",
            "Preprint"                  =>  "Preprint",
            "Book"                      =>  "Book",
            "Conference contribution"   =>  "Conference proceeding",
            "Chapter"                   =>  "Book chapter",
            "Educational resource"      =>  "OER",
            "Report"                    =>  "Report",
            "Standard"                  =>  "Standard",
            "Composition"               =>  "Musical score",
            "Workflow"                  =>  "Workflow",
            "Physical object"           =>  "Physical object",
            "Monograph"                 =>  "Book",
            "Performance"               =>  "Performance",
            "Event"                     =>  "Event"
        );

        if ($type and array_key_exists($type,$format_map)) {
            return $format_map[$type];
        } else {
            $logfile = fopen("/tmp/missing-from-map.txt", "a") or die("Unable to open file!");
            fwrite($logfile, $type);
            fclose($logfile);
            return "Default";
        }
    }

}

?>
