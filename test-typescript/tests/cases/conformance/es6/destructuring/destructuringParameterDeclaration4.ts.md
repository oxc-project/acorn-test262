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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 221,
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 224,
        "end": 237,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 229,
          "end": 237,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 230,
              "end": 236,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 236,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 224,
          "end": 229,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 238,
      "end": 280,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 252,
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 255,
        "end": 279,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 255,
            "end": 268,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 260,
              "end": 268,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 261,
                  "end": 267,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 255,
              "end": 260,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 281,
      "end": 326,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 302,
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 305,
        "end": 325,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 317,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 324,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 324,
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 375,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 372,
        "end": 375,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 340,
          "end": 370,
          "argument": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 432,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 433,
          "end": 456,
          "argument": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 494,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 491,
        "end": 494,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 474,
          "end": 489,
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "decorators": [],
                "name": "someArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 562,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 559,
        "end": 562,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 552,
          "end": 557,
          "argument": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": true,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 633,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 630,
        "end": 633,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 614,
          "end": 628,
          "argument": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 669,
      "end": 699,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 696,
        "end": 699,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 678,
        "end": 680,
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 681,
          "end": 694,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 685,
              "end": 686,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 688,
              "end": 693,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 689,
                  "end": 692,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "decorators": [],
                      "name": "c",
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
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 700,
      "end": 742,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 742,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 711,
        "decorators": [],
        "name": "a6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 712,
          "end": 737,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 713,
              "end": 714,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 719,
              "end": 720,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 722,
              "end": 726,
              "argument": {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 745,
      "end": 769,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 745,
        "end": 768,
        "arguments": [
          {
            "type": "Literal",
            "start": 748,
            "end": 749,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 751,
            "end": 752,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 754,
            "end": 761,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 763,
            "end": 767,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 745,
          "end": 747,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 817,
      "end": 831,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 817,
        "end": 830,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 820,
            "end": 829,
            "argument": {
              "type": "Identifier",
              "start": 823,
              "end": 829,
              "decorators": [],
              "name": "array2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 817,
          "end": 819,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 888,
      "end": 922,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 888,
        "end": 921,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 895,
                "end": 896,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 898,
                "end": 906,
                "raw": "\"string\"",
                "value": "string"
              },
              {
                "type": "Literal",
                "start": 908,
                "end": 913,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 915,
                "end": 919,
                "raw": "true",
                "value": true
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 888,
          "end": 890,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 977,
      "end": 988,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 977,
        "end": 987,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 984,
                "end": 985,
                "raw": "2",
                "value": 2
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 977,
          "end": 979,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1066,
      "end": 1087,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1066,
        "end": 1086,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1073,
                "end": 1074,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1076,
                "end": 1084,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1066,
          "end": 1068,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1153,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1160,
                "end": 1161,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1163,
                "end": 1164,
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
      "type": "ClassDeclaration",
      "start": 1167,
      "end": 1262,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1175,
        "end": 1262,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1181,
            "end": 1212,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1181,
              "end": 1192,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1192,
              "end": 1212,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1209,
                "end": 1212,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "decorators": [],
                      "name": "temp",
                      "optional": false,
                      "typeAnnotation": null
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1173,
        "end": 1174,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1295,
      "end": 1341,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1341,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1308,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1327,
          "end": 1336,
          "argument": {
            "type": "Identifier",
            "start": 1330,
            "end": 1331,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1308,
        "end": 1326,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1309,
            "end": 1325,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1319,
              "end": 1325,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1319,
                "end": 1325,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1309,
              "end": 1310,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1342,
      "end": 1374,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1342,
        "end": 1373,
        "arguments": [
          {
            "type": "Literal",
            "start": 1347,
            "end": 1348,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1350,
            "end": 1351,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1353,
            "end": 1361,
            "raw": "\"string\"",
            "value": "string"
          },
          {
            "type": "MemberExpression",
            "start": 1363,
            "end": 1367,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1363,
              "end": 1365,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1366,
              "end": 1367,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MemberExpression",
            "start": 1369,
            "end": 1372,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1369,
              "end": 1370,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1342,
          "end": 1346,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
