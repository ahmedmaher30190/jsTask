<?php
error_reporting( E_ALL );
ini_set( "display_errors", 1 );

header('Content-Type: application/json');
$data =[
  ["domains"=>"1", "sup"=>[
    ["email"=> 'info@sabelhost.com'],
    ["email"=> 'pay@sabelhost.com'],
    ["email"=> 'support@sabelhost.com'],
    ["email"=> 'advrtisment@sabelhost.com'],
    ["email"=> 'sabel@sabelhost.com'],
  ]
],
["domains"=>"2", "sup"=>[
  ["email"=> 'info@1usd.net'],
  ["email"=> 'clients@1usd.net'],
  ["email"=> 'carears@1usd.net'],
  ["email"=> 'hosting@1usd.net'],
  ["email"=> 'payment@1usd.net'],
  ["email"=> 'invoice@1usd.net'],
]
],
["domains"=>"3", "sup"=>[
  ["email"=> 'support@google.com'],
  ["email"=> 'play@google.com'],
  ["email"=> 'youtube@google.com'],
]
],
["domains"=>"4", "sup"=>[
  ["email"=> 'carears@linkedin.com'],
  ["email"=> 'info@linkedin.com'],
  ["email"=> 'pro@linkedin.com'],
  ["email"=> 'advrtise@linkedin.com'],
  ["email"=> 'notification@linkedin.com'],
]
],
["domains"=>"5", "sup"=>[
  ["email"=> 'info@dryosry.com'],
]
],
["domains"=>"6", "sup"=>[
  ["email"=> 'support@facebook.com'],
  ["email"=> 'securty@facebook.com'],
]
],
];
$data_steb_2 = [];
$numberOfIndex = 0;
foreach($data as $d){
  $data_steb_2[]= $d['sup'];
  $numberOfIndex += sizeof($d['sup']);
}
$data_steb_3 = [];
function getDataNew($index){
  global $data_steb_2;
  global $data_steb_3;
  for ($i=0; $i < sizeof($data_steb_2) ; $i++) {
    if(isset($data_steb_2[$i][$index])){
      $data_steb_3[] = $data_steb_2[$i][$index]['email'];
      //unset($data_steb_2[$i][$index]);
    }
  }
}
for ( $i = 0; $i <= $numberOfIndex; $i++) {
  getDataNew($i);
}
// $data_steb_4 = array_filter($data_steb_3);
$data = array_filter($data_steb_3);
print_r( json_encode($data));

?>
