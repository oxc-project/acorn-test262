__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 204,
  "end": 1385,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 220,
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 223,
        "end": 236,
        "typeName": {
          "type": "Identifier",
          "start": 223,
          "end": 228,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 228,
          "end": 236,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 235,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 235,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "start": 237,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 251,
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 254,
        "end": 278,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 254,
            "end": 267,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 259,
              "end": 267,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 260,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 266,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 270,
            "end": 278,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 280,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 301,
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 304,
        "end": 324,
        "typeName": {
          "type": "Identifier",
          "start": 304,
          "end": 309,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 309,
          "end": 324,
          "params": [
            {
              "type": "TSUnionType",
              "start": 310,
              "end": 323,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 310,
                  "end": 316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 317,
                  "end": 323,
                  "typeName": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 323,
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 327,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 339,
          "end": 369,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 369,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 345,
              "end": 369,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 354,
                  "end": 360
                },
                {
                  "type": "TSStringKeyword",
                  "start": 362,
                  "end": 368
                }
              ]
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 371,
        "end": 374,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 420,
      "end": 460,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 431,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 432,
          "end": 455,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 436,
            "end": 455,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 438,
              "end": 455,
              "elementType": {
                "type": "TSUnionType",
                "start": 439,
                "end": 452,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 439,
                    "end": 445
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 446,
                    "end": 452
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 457,
        "end": 460,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 461,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 472,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 473,
          "end": 488,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 476,
            "end": 477,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 479,
              "end": 488,
              "typeName": {
                "type": "Identifier",
                "start": 479,
                "end": 488,
                "decorators": [],
                "name": "someArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 493,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 539,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 550,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 551,
          "end": 556,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 554,
            "end": 555,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 558,
        "end": 561,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 601,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 610,
        "end": 612,
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 613,
          "end": 627,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 632,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 668,
      "end": 698,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 679,
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 680,
          "end": 693,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 681,
              "end": 682,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 684,
              "end": 685,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 687,
              "end": 692,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 688,
                  "end": 691,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 689,
                      "end": 690,
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
      "body": {
        "type": "BlockStatement",
        "start": 695,
        "end": 698,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 699,
      "end": 741,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 710,
        "decorators": [],
        "name": "a6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 711,
          "end": 736,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 718,
              "end": 719,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 721,
              "end": 725,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 724,
                "end": 725,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 726,
            "end": 736,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 728,
              "end": 736,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 728,
                "end": 734
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 738,
        "end": 741,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 768,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 767,
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 746,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 747,
            "end": 748,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 750,
            "end": 751,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 753,
            "end": 760,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 762,
            "end": 766,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 816,
      "end": 830,
      "expression": {
        "type": "CallExpression",
        "start": 816,
        "end": 829,
        "callee": {
          "type": "Identifier",
          "start": 816,
          "end": 818,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 819,
            "end": 828,
            "argument": {
              "type": "Identifier",
              "start": 822,
              "end": 828,
              "decorators": [],
              "name": "array2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 887,
      "end": 921,
      "expression": {
        "type": "CallExpression",
        "start": 887,
        "end": 920,
        "callee": {
          "type": "Identifier",
          "start": 887,
          "end": 889,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 890,
            "end": 919,
            "elements": [
              {
                "type": "Literal",
                "start": 891,
                "end": 892,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 894,
                "end": 895,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 897,
                "end": 905,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 907,
                "end": 912,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 914,
                "end": 918,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 976,
      "end": 987,
      "expression": {
        "type": "CallExpression",
        "start": 976,
        "end": 986,
        "callee": {
          "type": "Identifier",
          "start": 976,
          "end": 978,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 979,
            "end": 985,
            "elements": [
              {
                "type": "Literal",
                "start": 980,
                "end": 981,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 983,
                "end": 984,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1065,
      "end": 1086,
      "expression": {
        "type": "CallExpression",
        "start": 1065,
        "end": 1085,
        "callee": {
          "type": "Identifier",
          "start": 1065,
          "end": 1067,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1068,
            "end": 1084,
            "elements": [
              {
                "type": "Literal",
                "start": 1069,
                "end": 1070,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1072,
                "end": 1073,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1075,
                "end": 1083,
                "value": "string",
                "raw": "\"string\""
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1144,
      "end": 1165,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1148,
          "end": 1164,
          "id": {
            "type": "Identifier",
            "start": 1148,
            "end": 1152,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1155,
            "end": 1164,
            "elements": [
              {
                "type": "Literal",
                "start": 1156,
                "end": 1157,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1159,
                "end": 1160,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1162,
                "end": 1163,
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
      "type": "ClassDeclaration",
      "start": 1166,
      "end": 1261,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1172,
        "end": 1173,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1174,
        "end": 1261,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1180,
            "end": 1211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1180,
              "end": 1191,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1191,
              "end": 1211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1192,
                  "end": 1206,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "RestElement",
                    "start": 1192,
                    "end": 1206,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 1202,
                      "end": 1206,
                      "decorators": [],
                      "name": "temp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1208,
                "end": 1211,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1294,
      "end": 1340,
      "id": {
        "type": "Identifier",
        "start": 1303,
        "end": 1307,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1307,
        "end": 1325,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1308,
            "end": 1324,
            "name": {
              "type": "Identifier",
              "start": 1308,
              "end": 1309,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1318,
              "end": 1324,
              "typeName": {
                "type": "Identifier",
                "start": 1318,
                "end": 1324,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "RestElement",
          "start": 1326,
          "end": 1335,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1329,
            "end": 1330,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1330,
            "end": 1335,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1332,
              "end": 1335,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1332,
                "end": 1333,
                "typeName": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1333,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1337,
        "end": 1340,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1341,
      "end": 1373,
      "expression": {
        "type": "CallExpression",
        "start": 1341,
        "end": 1372,
        "callee": {
          "type": "Identifier",
          "start": 1341,
          "end": 1345,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1346,
            "end": 1347,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1349,
            "end": 1350,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1352,
            "end": 1360,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "MemberExpression",
            "start": 1362,
            "end": 1366,
            "object": {
              "type": "Identifier",
              "start": 1362,
              "end": 1364,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1365,
              "end": 1366,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "MemberExpression",
            "start": 1368,
            "end": 1371,
            "object": {
              "type": "Identifier",
              "start": 1368,
              "end": 1369,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1370,
              "end": 1371,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
