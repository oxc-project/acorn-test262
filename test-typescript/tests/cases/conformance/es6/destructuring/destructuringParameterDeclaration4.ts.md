__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 205,
  "end": 1387,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 205,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 221,
        "name": "arrayString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 224,
        "end": 237,
        "typeName": {
          "type": "Identifier",
          "start": 224,
          "end": 229,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 229,
          "end": 237,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 230,
              "end": 236,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 236,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 238,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 252,
        "name": "someArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 255,
        "end": 279,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 255,
            "end": 268,
            "typeName": {
              "type": "Identifier",
              "start": 255,
              "end": 260,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 260,
              "end": 268,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 261,
                  "end": 267,
                  "typeName": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "name": "String",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 271,
            "end": 279,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 271,
              "end": 277
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 281,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 302,
        "name": "stringOrNumArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 305,
        "end": 325,
        "typeName": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 310,
          "end": 325,
          "params": [
            {
              "type": "TSUnionType",
              "start": 311,
              "end": 324,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 311,
                  "end": 317,
                  "typeName": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 317,
                    "name": "String",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 324,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 324,
                    "name": "Number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "name": "a0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 340,
          "end": 370,
          "argument": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 344,
            "end": 370,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 346,
              "end": 370,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 347,
                  "end": 353
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 355,
                  "end": 361
                },
                {
                  "type": "TSStringKeyword",
                  "start": 363,
                  "end": 369
                }
              ]
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 372,
        "end": 375,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 432,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 433,
          "end": 456,
          "argument": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 437,
            "end": 456,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 439,
              "end": 456,
              "elementType": {
                "type": "TSUnionType",
                "start": 440,
                "end": 453,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 440,
                    "end": 446
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 447,
                    "end": 453
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 474,
          "end": 489,
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 489,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "name": "someArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 491,
        "end": 494,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "name": "a3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 552,
          "end": 557,
          "argument": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": true,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 559,
        "end": 562,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
        "name": "a4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 614,
          "end": 628,
          "argument": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 630,
        "end": 633,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 669,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 678,
        "end": 680,
        "name": "a5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 681,
          "end": 694,
          "elements": [
            {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 685,
              "end": 686,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 688,
              "end": 693,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 689,
                  "end": 692,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 696,
        "end": 699,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 700,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 711,
        "name": "a6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 712,
          "end": 737,
          "elements": [
            {
              "type": "Identifier",
              "start": 713,
              "end": 714,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 719,
              "end": 720,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 722,
              "end": 726,
              "argument": {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 727,
            "end": 737,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 729,
              "end": 737,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 729,
                "end": 735
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 742,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 745,
      "end": 769,
      "expression": {
        "type": "CallExpression",
        "start": 745,
        "end": 768,
        "callee": {
          "type": "Identifier",
          "start": 745,
          "end": 747,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 748,
            "end": 749,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 751,
            "end": 752,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 754,
            "end": 761,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 763,
            "end": 767,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 817,
      "end": 831,
      "expression": {
        "type": "CallExpression",
        "start": 817,
        "end": 830,
        "callee": {
          "type": "Identifier",
          "start": 817,
          "end": 819,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 820,
            "end": 829,
            "argument": {
              "type": "Identifier",
              "start": 823,
              "end": 829,
              "name": "array2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 888,
      "end": 922,
      "expression": {
        "type": "CallExpression",
        "start": 888,
        "end": 921,
        "callee": {
          "type": "Identifier",
          "start": 888,
          "end": 890,
          "name": "a5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 891,
            "end": 920,
            "elements": [
              {
                "type": "Literal",
                "start": 892,
                "end": 893,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 895,
                "end": 896,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 898,
                "end": 906,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 908,
                "end": 913,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 915,
                "end": 919,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 977,
      "end": 988,
      "expression": {
        "type": "CallExpression",
        "start": 977,
        "end": 987,
        "callee": {
          "type": "Identifier",
          "start": 977,
          "end": 979,
          "name": "a5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 980,
            "end": 986,
            "elements": [
              {
                "type": "Literal",
                "start": 981,
                "end": 982,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 984,
                "end": 985,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1066,
      "end": 1087,
      "expression": {
        "type": "CallExpression",
        "start": 1066,
        "end": 1086,
        "callee": {
          "type": "Identifier",
          "start": 1066,
          "end": 1068,
          "name": "a6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1069,
            "end": 1085,
            "elements": [
              {
                "type": "Literal",
                "start": 1070,
                "end": 1071,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1073,
                "end": 1074,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1076,
                "end": 1084,
                "value": "string",
                "raw": "\"string\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1145,
      "end": 1166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1149,
          "end": 1165,
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1153,
            "name": "temp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1156,
            "end": 1165,
            "elements": [
              {
                "type": "Literal",
                "start": 1157,
                "end": 1158,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1160,
                "end": 1161,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1163,
                "end": 1164,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1167,
      "end": 1262,
      "id": {
        "type": "Identifier",
        "start": 1173,
        "end": 1174,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1175,
        "end": 1262,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1181,
            "end": 1212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1181,
              "end": 1192,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1192,
              "end": 1212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1193,
                  "end": 1207,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "RestElement",
                    "start": 1193,
                    "end": 1207,
                    "argument": {
                      "type": "Identifier",
                      "start": 1203,
                      "end": 1207,
                      "name": "temp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1209,
                "end": 1212,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1295,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1308,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1327,
          "end": 1336,
          "argument": {
            "type": "Identifier",
            "start": 1330,
            "end": 1331,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1331,
            "end": 1336,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1333,
              "end": 1336,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1334,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1341,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1308,
        "end": 1326,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1309,
            "end": 1325,
            "name": {
              "type": "Identifier",
              "start": 1309,
              "end": 1310,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1319,
              "end": 1325,
              "typeName": {
                "type": "Identifier",
                "start": 1319,
                "end": 1325,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1342,
      "end": 1374,
      "expression": {
        "type": "CallExpression",
        "start": 1342,
        "end": 1373,
        "callee": {
          "type": "Identifier",
          "start": 1342,
          "end": 1346,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1347,
            "end": 1348,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1350,
            "end": 1351,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1353,
            "end": 1361,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "MemberExpression",
            "start": 1363,
            "end": 1367,
            "object": {
              "type": "Identifier",
              "start": 1363,
              "end": 1365,
              "name": "E1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1366,
              "end": 1367,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 1369,
            "end": 1372,
            "object": {
              "type": "Identifier",
              "start": 1369,
              "end": 1370,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
