__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 166,
  "end": 1368,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 189,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 170,
            "end": 184,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 171,
                "end": 175,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 172,
                    "end": 174,
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 177,
                "end": 183,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 178,
                    "end": 182,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 181,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 187,
            "end": 189,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 237,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 211,
            "end": 225,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 212,
                "end": 216,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 213,
                    "end": 215,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 218,
                "end": 224,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 219,
                    "end": 223,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 220,
                        "end": 222,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 228,
            "end": 237,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 653,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 595,
            "end": 634,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 596,
                "end": 598,
                "decorators": [],
                "name": "b0",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 604,
                "end": 606,
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 634,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 609,
                "end": 634,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 610,
                    "end": 616
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 618,
                    "end": 625
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 627,
                    "end": 633
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 637,
            "end": 653,
            "elements": [
              {
                "type": "Literal",
                "start": 638,
                "end": 639,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 641,
                "end": 642,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 644,
                "end": 652,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 665,
      "end": 717,
      "body": {
        "type": "TSInterfaceBody",
        "start": 699,
        "end": 717,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 705,
            "end": 715,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 705,
              "end": 706,
              "raw": "2",
              "value": 2
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 706,
              "end": 714,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 708,
                "end": 714
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 685,
          "end": 698,
          "expression": {
            "type": "Identifier",
            "start": 685,
            "end": 690,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 690,
            "end": 698,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 691,
                "end": 697,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 697,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 676,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 719,
      "end": 788,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 737,
        "end": 788,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 743,
            "end": 786,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 750,
              "end": 785,
              "expression": {
                "type": "ArrayExpression",
                "start": 776,
                "end": 785,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 777,
                    "end": 778,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 780,
                    "end": 781,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 783,
                    "end": 784,
                    "raw": "3",
                    "value": 3
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 751,
                "end": 775,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 752,
                    "end": 758
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 760,
                    "end": 766
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 768,
                    "end": 774
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 728,
        "end": 731,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 733,
        "end": 736,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 735,
          "end": 736,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 735,
            "end": 736,
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 789,
      "end": 825,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 793,
          "end": 824,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 793,
            "end": 816,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 794,
                "end": 807,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 796,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 799,
                  "end": 807,
                  "raw": "\"string\"",
                  "value": "string"
                },
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 809,
                "end": 811,
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 813,
                "end": 815,
                "decorators": [],
                "name": "b5",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 819,
            "end": 824,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 819,
              "end": 822,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1090,
      "end": 1110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1094,
          "end": 1110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1094,
            "end": 1098,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1101,
            "end": 1110,
            "elements": [
              {
                "type": "Literal",
                "start": 1102,
                "end": 1103,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1105,
                "end": 1106,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1108,
                "end": 1109,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1111,
      "end": 1154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1115,
          "end": 1153,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1115,
            "end": 1141,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1116,
                "end": 1118,
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1120,
                "end": 1122,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1141,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1125,
                "end": 1141,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1126,
                    "end": 1132
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1134,
                    "end": 1140
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1144,
            "end": 1153,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 1145,
                "end": 1152,
                "argument": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1152,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1165,
      "end": 1208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1169,
          "end": 1207,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1169,
            "end": 1195,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1170,
                "end": 1172,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1174,
                "end": 1176,
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1195,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1179,
                "end": 1195,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1180,
                    "end": 1186
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1188,
                    "end": 1194
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1198,
            "end": 1207,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 1199,
                "end": 1206,
                "argument": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1206,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1220,
      "end": 1262,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1232,
        "end": 1262,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1238,
            "end": 1260,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1239,
                "end": 1250,
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1242,
                  "end": 1250,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1244,
                    "end": 1250
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1251,
              "end": 1260,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1253,
                "end": 1260
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1230,
        "end": 1231,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1264,
      "end": 1331,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1293,
        "end": 1331,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1299,
            "end": 1329,
            "argument": {
              "type": "ObjectExpression",
              "start": 1306,
              "end": 1329,
              "properties": [
                {
                  "type": "Property",
                  "start": 1316,
                  "end": 1323,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1316,
                    "end": 1317,
                    "raw": "2",
                    "value": 2
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1319,
                    "end": 1323,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1273,
        "end": 1276,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1277,
          "end": 1288,
          "decorators": [],
          "name": "idx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1280,
            "end": 1288,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1282,
              "end": 1288
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1289,
        "end": 1292,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1291,
          "end": 1292,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1291,
            "end": 1292,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1332,
      "end": 1358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1336,
          "end": 1357,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1336,
            "end": 1348,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1337,
                "end": 1339,
                "decorators": [],
                "name": "c4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1341,
                "end": 1343,
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1345,
                "end": 1347,
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1351,
            "end": 1357,
            "arguments": [
              {
                "type": "Literal",
                "start": 1355,
                "end": 1356,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1351,
              "end": 1354,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
