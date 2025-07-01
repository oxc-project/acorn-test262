__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 228
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 235
              },
              "typeArguments": null,
              "start": 229,
              "end": 235
            }
          ],
          "start": 228,
          "end": 236
        },
        "start": 223,
        "end": 236
      },
      "declare": false,
      "start": 204,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 266
                  },
                  "typeArguments": null,
                  "start": 260,
                  "end": 266
                }
              ],
              "start": 259,
              "end": 267
            },
            "start": 254,
            "end": 267
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            },
            "start": 270,
            "end": 278
          }
        ],
        "start": 254,
        "end": 278
      },
      "declare": false,
      "start": 237,
      "end": 279
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 301
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 309
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 310,
                  "end": 316
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 317,
                  "end": 323
                }
              ],
              "start": 310,
              "end": 323
            }
          ],
          "start": 309,
          "end": 324
        },
        "start": 304,
        "end": 324
      },
      "declare": false,
      "start": 280,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 343
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 345,
              "end": 369
            },
            "start": 343,
            "end": 369
          },
          "value": null,
          "start": 339,
          "end": 369
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 371,
        "end": 374
      },
      "expression": false,
      "start": 327,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 431
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
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
                ],
                "start": 439,
                "end": 452
              },
              "start": 438,
              "end": 455
            },
            "start": 436,
            "end": 455
          },
          "value": null,
          "start": 432,
          "end": 455
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 457,
        "end": 460
      },
      "expression": false,
      "start": 420,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 472
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 477
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "someArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 488
              },
              "typeArguments": null,
              "start": 479,
              "end": 488
            },
            "start": 477,
            "end": 488
          },
          "value": null,
          "start": 473,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 490,
        "end": 493
      },
      "expression": false,
      "start": 461,
      "end": 493
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 550
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "optional": true,
          "typeAnnotation": null,
          "value": null,
          "start": 551,
          "end": 556
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 558,
        "end": 561
      },
      "expression": false,
      "start": 539,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 612
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 617
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 613,
          "end": 627
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 629,
        "end": 632
      },
      "expression": false,
      "start": 601,
      "end": 632
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 679
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 682
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 689,
                      "end": 690
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 691
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 692
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 693
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 695,
        "end": 698
      },
      "expression": false,
      "start": 668,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a6",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 710
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 721,
              "end": 725
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 728,
                "end": 734
              },
              "start": 728,
              "end": 736
            },
            "start": 726,
            "end": 736
          },
          "start": 711,
          "end": 736
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 738,
        "end": 741
      },
      "expression": false,
      "start": 699,
      "end": 741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 746
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 747,
            "end": 748
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 750,
            "end": 751
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 753,
            "end": 760
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 762,
            "end": 766
          }
        ],
        "optional": false,
        "start": 744,
        "end": 767
      },
      "directive": null,
      "start": 744,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "array2",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 828
            },
            "start": 819,
            "end": 828
          }
        ],
        "optional": false,
        "start": 816,
        "end": 829
      },
      "directive": null,
      "start": 816,
      "end": 830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 889
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 891,
                "end": 892
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 894,
                "end": 895
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 897,
                "end": 905
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 907,
                "end": 912
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 914,
                "end": 918
              }
            ],
            "start": 890,
            "end": 919
          }
        ],
        "optional": false,
        "start": 887,
        "end": 920
      },
      "directive": null,
      "start": 887,
      "end": 921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 976,
          "end": 978
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 980,
                "end": 981
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 983,
                "end": 984
              }
            ],
            "start": 979,
            "end": 985
          }
        ],
        "optional": false,
        "start": 976,
        "end": 986
      },
      "directive": null,
      "start": 976,
      "end": 987
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1065,
          "end": 1067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1069,
                "end": 1070
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1072,
                "end": 1073
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1075,
                "end": 1083
              }
            ],
            "start": 1068,
            "end": 1084
          }
        ],
        "optional": false,
        "start": 1065,
        "end": 1085
      },
      "directive": null,
      "start": 1065,
      "end": 1086
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1152
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1156,
                "end": 1157
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1159,
                "end": 1160
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1162,
                "end": 1163
              }
            ],
            "start": 1155,
            "end": 1164
          },
          "definite": false,
          "start": 1148,
          "end": 1164
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1173
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1191
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "temp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1202,
                      "end": 1206
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1192,
                    "end": 1206
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1192,
                  "end": 1206
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1208,
                "end": 1211
              },
              "expression": false,
              "start": 1191,
              "end": 1211
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1180,
            "end": 1211
          }
        ],
        "start": 1174,
        "end": 1261
      },
      "abstract": false,
      "declare": false,
      "start": 1166,
      "end": 1261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1307
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1308,
              "end": 1309
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1324
              },
              "typeArguments": null,
              "start": 1318,
              "end": 1324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1308,
            "end": 1324
          }
        ],
        "start": 1307,
        "end": 1325
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1329,
            "end": 1330
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1333
                },
                "typeArguments": null,
                "start": 1332,
                "end": 1333
              },
              "start": 1332,
              "end": 1335
            },
            "start": 1330,
            "end": 1335
          },
          "value": null,
          "start": 1326,
          "end": 1335
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1337,
        "end": 1340
      },
      "expression": false,
      "start": 1294,
      "end": 1340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1341,
          "end": 1345
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1346,
            "end": 1347
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1349,
            "end": 1350
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1352,
            "end": 1360
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1364
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1366
            },
            "optional": false,
            "computed": false,
            "start": 1362,
            "end": 1366
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1369
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1370,
              "end": 1371
            },
            "optional": false,
            "computed": false,
            "start": 1368,
            "end": 1371
          }
        ],
        "optional": false,
        "start": 1341,
        "end": 1372
      },
      "directive": null,
      "start": 1341,
      "end": 1373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 204,
  "end": 1385
}
```
