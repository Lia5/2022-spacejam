<?php


$utm_source = $_POST['utm_source']; if ($utm_source == '') { $utm_source = '-'; }
$utm_medium = $_POST['utm_medium']; if ($utm_medium == '') { $utm_medium = '-'; }
$utm_term = $_POST['utm_term']; if ($utm_term == '') { $utm_term = '-'; }
$utm_content = $_POST['utm_content']; if ($utm_content == '') { $utm_content = '-'; }
$utm_campaign = $_POST['utm_campaign']; if ($utm_campaign == '') { $utm_campaign = '-'; }

$data = array(
    'add' =>
        array(
            0 =>
                array(
                    'source_name' => 'galaktica',
                    'source_uid' => microtime(true), // уникальное число
                    'created_at' => strtotime(date()), // текущее время в формате unix timestamp
                    'incoming_entities' =>
                        array(
                            'leads' =>
                                array(
                                    0 =>
                                        array(
                                            'name' => 'Заявка с сайта:'.' - '.$_POST['name2'],
                                            'custom_fields' =>
                                                array(
                                                    0 =>
                                                        array(
                                                            'id' => '448311',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $_POST['phone'],
                                                                        ),
                                                                ),
                                                        ),
                                                    1 =>
                                                        array(
                                                            'id' => '448045',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится инфо
                                                                            'value' => $_POST['info'],
                                                                        ),
                                                                ),
                                                        ),
                                                    2 =>
                                                        array(
                                                            'id' => '448309',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится описание
                                                                            'value' => $_POST['description'],
                                                                        ),
                                                                ),
                                                        ),
                                                    3 =>
                                                        array(
                                                            'id' => '447057',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $utm_source,
                                                                        ),
                                                                ),
                                                        ),
                                                    4 =>
                                                        array(
                                                            'id' => '447059',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $utm_medium,
                                                                        ),
                                                                ),
                                                        ),
                                                    5 =>
                                                        array(
                                                            'id' => '447061',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $utm_campaign,
                                                                        ),
                                                                ),
                                                        ),
                                                    6 =>
                                                        array(
                                                            'id' => '447063',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $utm_term,
                                                                        ),
                                                                ),
                                                        ),
                                                    7 =>
                                                        array(
                                                            'id' => '447065',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // Переменная где хранится комметарий
                                                                            'value' => $utm_content,
                                                                        ),
                                                                ),
                                                        ),

                                                ),
                                        ),
                                ),
                            'contacts' =>
                                array(
                                    0 =>
                                        array(
                                            'name' => $_POST['name2'], // Переменная где хранится имя контакта
                                            'custom_fields' =>
                                                array(
                                                    0 =>
                                                        array(
                                                            'id' => '220961',
                                                            'values' =>
                                                                array(
                                                                    0 =>
                                                                        array(
                                                                            // переменная где хранится телефон контакта
                                                                            'value' => $_POST['phone'],
                                                                            'enum' => 'WORK',
                                                                        ),
                                                                ),
                                                            ),
                                                    // 1 =>
                                                    //     array(
                                                    //         'id' => '318003',
                                                    //         'values' =>
                                                    //             array(
                                                    //                 0 =>
                                                    //                     array(
                                                    //                         // переменная где хранится телефон контакта
                                                    //                         'value' => $_POST['email'],
                                                    //                         'enum' => 'WORK',
                                                    //                     ),
                                                    //             ),
                                                    //     )
                                                ),
                                                'responsible_user_id' => '1',
                                        ),
                                ),
                        ),
                    'incoming_lead_info' =>
                        array(
                            'form_id' => '123', // любое число
                            'form_page' => 'https://promo.stolyar.te.ua/',
                            'ip' => $_SERVER['REMOTE_ADDR'], // ip адрес от куда идет запрос
                            'service_code' => '1', // любое число
                        ),
                ),
        ),
);
$LOGIN = 'derevo0383@gmail.com'; // Тут пишем логин
$HASH = '006f8bd3166cbce89de6b409090552993977c75e'; // Тут пишем API ключ
$subdomain='derevo0383';
$link='https://'.$subdomain.'.amocrm.ru/api/v2/incoming_leads/form?login='.$LOGIN.'&api_key='.$HASH;

$pole = 'https://'.$subdomain.'.amocrm.ru/api/v2/account?with=custom_fields';


$headers[] = "Accept: application/json";

//Curl options
$curl = curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, "amoCRM-API-client-
undefined/2.0");
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_HEADER, false);
$out = curl_exec($curl);
curl_close($curl);
$result = json_decode($out, TRUE);


exit();