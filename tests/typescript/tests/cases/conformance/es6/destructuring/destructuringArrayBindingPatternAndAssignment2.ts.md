__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 165,
  "end": 1367,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 188,
          "id": {
            "type": "ArrayPattern",
            "start": 169,
            "end": 183,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 170,
                "end": 174,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 171,
                    "end": 173,
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
                "start": 176,
                "end": 182,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 177,
                    "end": 181,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 178,
                        "end": 180,
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
            "start": 186,
            "end": 188,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 236,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 236,
          "id": {
            "type": "ArrayPattern",
            "start": 210,
            "end": 224,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 211,
                "end": 215,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 212,
                    "end": 214,
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
                "start": 217,
                "end": 223,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 218,
                    "end": 222,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 219,
                        "end": 221,
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
            "start": 227,
            "end": 236,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 653,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 652,
          "id": {
            "type": "ArrayPattern",
            "start": 594,
            "end": 633,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 595,
                "end": 597,
                "decorators": [],
                "name": "b0",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 599,
                "end": 601,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 603,
                "end": 605,
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 633,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 608,
                "end": 633,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 617,
                    "end": 624
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 636,
            "end": 652,
            "elements": [
              {
                "type": "Literal",
                "start": 637,
                "end": 638,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 640,
                "end": 641,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 643,
                "end": 651,
                "value": "string",
                "raw": "\"string\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 664,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 675,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 684,
          "end": 697,
          "expression": {
            "type": "Identifier",
            "start": 684,
            "end": 689,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 689,
            "end": 697,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 690,
                "end": 696,
                "typeName": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 696,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 698,
        "end": 716,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 704,
            "end": 714,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 704,
              "end": 705,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 705,
              "end": 713,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 787,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 730,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 732,
        "end": 735,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 734,
          "end": 735,
          "typeName": {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 736,
        "end": 787,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 742,
            "end": 785,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 749,
              "end": 784,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 750,
                "end": 774,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 751,
                    "end": 757
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 759,
                    "end": 765
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  }
                ]
              },
              "expression": {
                "type": "ArrayExpression",
                "start": 775,
                "end": 784,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 776,
                    "end": 777,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 779,
                    "end": 780,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 782,
                    "end": 783,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 788,
      "end": 824,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 792,
          "end": 823,
          "id": {
            "type": "ArrayPattern",
            "start": 792,
            "end": 815,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 793,
                "end": 806,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 795,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 798,
                  "end": 806,
                  "value": "string",
                  "raw": "\"string\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 808,
                "end": 810,
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 812,
                "end": 814,
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
            "start": 818,
            "end": 823,
            "callee": {
              "type": "Identifier",
              "start": 818,
              "end": 821,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1089,
      "end": 1109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1093,
          "end": 1109,
          "id": {
            "type": "Identifier",
            "start": 1093,
            "end": 1097,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1100,
            "end": 1109,
            "elements": [
              {
                "type": "Literal",
                "start": 1101,
                "end": 1102,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1104,
                "end": 1105,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1107,
                "end": 1108,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1110,
      "end": 1153,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1114,
          "end": 1152,
          "id": {
            "type": "ArrayPattern",
            "start": 1114,
            "end": 1140,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1115,
                "end": 1117,
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1119,
                "end": 1121,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1122,
              "end": 1140,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1124,
                "end": 1140,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1125,
                    "end": 1131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1133,
                    "end": 1139
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1143,
            "end": 1152,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 1144,
                "end": 1151,
                "argument": {
                  "type": "Identifier",
                  "start": 1147,
                  "end": 1151,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1164,
      "end": 1207,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1168,
          "end": 1206,
          "id": {
            "type": "ArrayPattern",
            "start": 1168,
            "end": 1194,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1169,
                "end": 1171,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1173,
                "end": 1175,
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1176,
              "end": 1194,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1178,
                "end": 1194,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1179,
                    "end": 1185
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1187,
                    "end": 1193
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1197,
            "end": 1206,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 1198,
                "end": 1205,
                "argument": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1205,
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1219,
      "end": 1261,
      "id": {
        "type": "Identifier",
        "start": 1229,
        "end": 1230,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1231,
        "end": 1261,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1237,
            "end": 1259,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1238,
                "end": 1249,
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1241,
                  "end": 1249,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1250,
              "end": 1259,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1252,
                "end": 1259
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1263,
      "end": 1330,
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1275,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1276,
          "end": 1287,
          "decorators": [],
          "name": "idx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1279,
            "end": 1287,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1281,
              "end": 1287
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1288,
        "end": 1291,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1290,
          "end": 1291,
          "typeName": {
            "type": "Identifier",
            "start": 1290,
            "end": 1291,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1292,
        "end": 1330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1298,
            "end": 1328,
            "argument": {
              "type": "ObjectExpression",
              "start": 1305,
              "end": 1328,
              "properties": [
                {
                  "type": "Property",
                  "start": 1315,
                  "end": 1322,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 1315,
                    "end": 1316,
                    "value": 2,
                    "raw": "2"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1318,
                    "end": 1322,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1331,
      "end": 1357,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1335,
          "end": 1356,
          "id": {
            "type": "ArrayPattern",
            "start": 1335,
            "end": 1347,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1336,
                "end": 1338,
                "decorators": [],
                "name": "c4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1342,
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1344,
                "end": 1346,
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
            "start": 1350,
            "end": 1356,
            "callee": {
              "type": "Identifier",
              "start": 1350,
              "end": 1353,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1354,
                "end": 1355,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
