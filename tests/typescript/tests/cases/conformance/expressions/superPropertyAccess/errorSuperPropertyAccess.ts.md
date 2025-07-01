__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 249
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
              "start": 256,
              "end": 267
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 285
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 288,
                            "end": 293
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 303
                          },
                          "optional": false,
                          "computed": false,
                          "start": 288,
                          "end": 303
                        },
                        "definite": false,
                        "start": 284,
                        "end": 303
                      }
                    ],
                    "declare": false,
                    "start": 280,
                    "end": 304
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 318
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 321,
                              "end": 326
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasOwnProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 327,
                              "end": 341
                            },
                            "optional": false,
                            "computed": false,
                            "start": 321,
                            "end": 341
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 342,
                              "end": 344
                            }
                          ],
                          "optional": false,
                          "start": 321,
                          "end": 345
                        },
                        "definite": false,
                        "start": 317,
                        "end": 345
                      }
                    ],
                    "declare": false,
                    "start": 313,
                    "end": 346
                  }
                ],
                "start": 270,
                "end": 352
              },
              "expression": false,
              "start": 267,
              "end": 352
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 352
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 378
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 381,
                            "end": 386
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 396
                          },
                          "optional": false,
                          "computed": false,
                          "start": 381,
                          "end": 396
                        },
                        "definite": false,
                        "start": 377,
                        "end": 396
                      }
                    ],
                    "declare": false,
                    "start": 373,
                    "end": 397
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 414,
                              "end": 419
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasOwnProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 420,
                              "end": 434
                            },
                            "optional": false,
                            "computed": false,
                            "start": 414,
                            "end": 434
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 435,
                              "end": 437
                            }
                          ],
                          "optional": false,
                          "start": 414,
                          "end": 438
                        },
                        "definite": false,
                        "start": 410,
                        "end": 438
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 439
                  }
                ],
                "start": 363,
                "end": 445
              },
              "expression": false,
              "start": 360,
              "end": 445
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 445
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 452
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 455,
                "end": 460
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 470
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 470
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 451,
            "end": 471
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 480,
                  "end": 485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 500
                },
                "optional": false,
                "computed": false,
                "start": 480,
                "end": 500
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 501,
                  "end": 503
                }
              ],
              "optional": false,
              "start": 480,
              "end": 504
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 476,
            "end": 505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static1",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 721
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 734,
                          "end": 739
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 754
                        },
                        "optional": false,
                        "computed": false,
                        "start": 734,
                        "end": 754
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 755,
                          "end": 757
                        }
                      ],
                      "optional": false,
                      "start": 734,
                      "end": 758
                    },
                    "directive": null,
                    "start": 734,
                    "end": 759
                  }
                ],
                "start": 724,
                "end": 765
              },
              "expression": false,
              "start": 721,
              "end": 765
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 700,
            "end": 765
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static2",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 796
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 809,
                          "end": 814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 815,
                          "end": 829
                        },
                        "optional": false,
                        "computed": false,
                        "start": 809,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 830,
                          "end": 832
                        }
                      ],
                      "optional": false,
                      "start": 809,
                      "end": 833
                    },
                    "directive": null,
                    "start": 809,
                    "end": 834
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 850,
                      "end": 852
                    },
                    "start": 843,
                    "end": 853
                  }
                ],
                "start": 799,
                "end": 859
              },
              "expression": false,
              "start": 796,
              "end": 859
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 771,
            "end": 859
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static2",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 890
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 892
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 904,
                          "end": 909
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 910,
                          "end": 924
                        },
                        "optional": false,
                        "computed": false,
                        "start": 904,
                        "end": 924
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 925,
                          "end": 927
                        }
                      ],
                      "optional": false,
                      "start": 904,
                      "end": 928
                    },
                    "directive": null,
                    "start": 904,
                    "end": 929
                  }
                ],
                "start": 894,
                "end": 935
              },
              "expression": false,
              "start": 890,
              "end": 935
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 865,
            "end": 935
          }
        ],
        "start": 250,
        "end": 937
      },
      "abstract": false,
      "declare": false,
      "start": 237,
      "end": 937
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 945,
        "end": 953
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
              "name": "privateFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 979
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 982,
                "end": 985
              },
              "expression": false,
              "start": 979,
              "end": 985
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 960,
            "end": 985
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 1011
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1014,
              "end": 1015
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 990,
            "end": 1016
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1039
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1042,
                "end": 1045
              },
              "expression": false,
              "start": 1039,
              "end": 1045
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1022,
            "end": 1045
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1069
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1072,
              "end": 1073
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1050,
            "end": 1074
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1112
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1115,
                "end": 1118
              },
              "expression": false,
              "start": 1112,
              "end": 1118
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1080,
            "end": 1118
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1157
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1160,
              "end": 1161
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1123,
            "end": 1162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicStaticFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1198
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1201,
                "end": 1204
              },
              "expression": false,
              "start": 1198,
              "end": 1204
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1168,
            "end": 1204
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicStaticMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1241
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1244,
              "end": 1245
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1209,
            "end": 1246
          }
        ],
        "start": 954,
        "end": 1249
      },
      "abstract": false,
      "declare": false,
      "start": 939,
      "end": 1249
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1580
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1589,
        "end": 1597
      },
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
              "start": 1604,
              "end": 1615
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1628,
                        "end": 1633
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1628,
                      "end": 1635
                    },
                    "directive": null,
                    "start": 1628,
                    "end": 1636
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1645,
                          "end": 1650
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1651,
                          "end": 1663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1645,
                        "end": 1663
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1666,
                        "end": 1667
                      },
                      "start": 1645,
                      "end": 1667
                    },
                    "directive": null,
                    "start": 1645,
                    "end": 1668
                  }
                ],
                "start": 1618,
                "end": 1674
              },
              "expression": false,
              "start": 1615,
              "end": 1674
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1604,
            "end": 1674
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1682
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1699,
                          "end": 1700
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1703,
                            "end": 1708
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1709,
                            "end": 1721
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1703,
                          "end": 1721
                        },
                        "definite": false,
                        "start": 1699,
                        "end": 1721
                      }
                    ],
                    "declare": false,
                    "start": 1695,
                    "end": 1722
                  }
                ],
                "start": 1685,
                "end": 1728
              },
              "expression": false,
              "start": 1682,
              "end": 1728
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1680,
            "end": 1728
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1739
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1756,
                          "end": 1757
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1760,
                            "end": 1765
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1766,
                            "end": 1778
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1760,
                          "end": 1778
                        },
                        "definite": false,
                        "start": 1756,
                        "end": 1778
                      }
                    ],
                    "declare": false,
                    "start": 1752,
                    "end": 1779
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1795,
                      "end": 1804
                    },
                    "start": 1788,
                    "end": 1805
                  }
                ],
                "start": 1742,
                "end": 1811
              },
              "expression": false,
              "start": 1739,
              "end": 1811
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1734,
            "end": 1811
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1820,
              "end": 1821
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1822,
                  "end": 1823
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1835,
                        "end": 1836
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1839,
                          "end": 1844
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1845,
                          "end": 1857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1839,
                        "end": 1857
                      },
                      "start": 1835,
                      "end": 1857
                    },
                    "directive": null,
                    "start": 1835,
                    "end": 1858
                  }
                ],
                "start": 1825,
                "end": 1864
              },
              "expression": false,
              "start": 1821,
              "end": 1864
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1816,
            "end": 1864
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1872
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1894,
                      "end": 1899
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1916,
                                "end": 1921
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicFunc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1922,
                                "end": 1932
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1916,
                              "end": 1932
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1916,
                            "end": 1934
                          },
                          "directive": null,
                          "start": 1916,
                          "end": 1935
                        }
                      ],
                      "start": 1902,
                      "end": 1945
                    },
                    "expression": false,
                    "start": 1885,
                    "end": 1945
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1958,
                          "end": 1959
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1976,
                                "end": 1980
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 2003,
                                            "end": 2008
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "publicFunc",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2009,
                                            "end": 2019
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2003,
                                          "end": 2019
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 2003,
                                        "end": 2021
                                      },
                                      "start": 1996,
                                      "end": 2022
                                    }
                                  ],
                                  "start": 1994,
                                  "end": 2024
                                },
                                "expression": false,
                                "start": 1982,
                                "end": 2024
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1976,
                              "end": 2024
                            }
                          ],
                          "start": 1962,
                          "end": 2034
                        },
                        "definite": false,
                        "start": 1958,
                        "end": 2034
                      }
                    ],
                    "declare": false,
                    "start": 1954,
                    "end": 2034
                  }
                ],
                "start": 1875,
                "end": 2040
              },
              "expression": false,
              "start": 1872,
              "end": 2040
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1869,
            "end": 2040
          }
        ],
        "start": 1598,
        "end": 2042
      },
      "abstract": false,
      "declare": false,
      "start": 1562,
      "end": 2042
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2257,
        "end": 2269
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2278,
        "end": 2286
      },
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
              "start": 2293,
              "end": 2304
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2317,
                        "end": 2322
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2317,
                      "end": 2324
                    },
                    "directive": null,
                    "start": 2317,
                    "end": 2325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2334,
                          "end": 2339
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2340,
                          "end": 2353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2334,
                        "end": 2353
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2356,
                        "end": 2357
                      },
                      "start": 2334,
                      "end": 2357
                    },
                    "directive": null,
                    "start": 2334,
                    "end": 2358
                  }
                ],
                "start": 2307,
                "end": 2364
              },
              "expression": false,
              "start": 2304,
              "end": 2364
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2293,
            "end": 2364
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2370,
              "end": 2372
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2389,
                          "end": 2390
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2393,
                            "end": 2398
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2399,
                            "end": 2412
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2393,
                          "end": 2412
                        },
                        "definite": false,
                        "start": 2389,
                        "end": 2412
                      }
                    ],
                    "declare": false,
                    "start": 2385,
                    "end": 2413
                  }
                ],
                "start": 2375,
                "end": 2419
              },
              "expression": false,
              "start": 2372,
              "end": 2419
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2370,
            "end": 2419
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2430
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2447,
                          "end": 2448
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2451,
                            "end": 2456
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2457,
                            "end": 2470
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2451,
                          "end": 2470
                        },
                        "definite": false,
                        "start": 2447,
                        "end": 2470
                      }
                    ],
                    "declare": false,
                    "start": 2443,
                    "end": 2471
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2487,
                      "end": 2496
                    },
                    "start": 2480,
                    "end": 2497
                  }
                ],
                "start": 2433,
                "end": 2503
              },
              "expression": false,
              "start": 2430,
              "end": 2503
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2425,
            "end": 2503
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2512,
              "end": 2513
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2515
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2528
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2531,
                          "end": 2536
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2537,
                          "end": 2550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2531,
                        "end": 2550
                      },
                      "start": 2527,
                      "end": 2550
                    },
                    "directive": null,
                    "start": 2527,
                    "end": 2551
                  }
                ],
                "start": 2517,
                "end": 2557
              },
              "expression": false,
              "start": 2513,
              "end": 2557
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2508,
            "end": 2557
          }
        ],
        "start": 2287,
        "end": 2559
      },
      "abstract": false,
      "declare": false,
      "start": 2251,
      "end": 2559
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2901,
        "end": 2913
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2922,
        "end": 2930
      },
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2944,
              "end": 2946
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2959,
                          "end": 2964
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2965,
                          "end": 2983
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2959,
                        "end": 2983
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2986,
                        "end": 2987
                      },
                      "start": 2959,
                      "end": 2987
                    },
                    "directive": null,
                    "start": 2959,
                    "end": 2988
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2997,
                          "end": 3002
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3003,
                          "end": 3022
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2997,
                        "end": 3022
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3025,
                        "end": 3026
                      },
                      "start": 2997,
                      "end": 3026
                    },
                    "directive": null,
                    "start": 2997,
                    "end": 3027
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3036,
                          "end": 3041
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3042,
                          "end": 3059
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3036,
                        "end": 3059
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3036,
                      "end": 3061
                    },
                    "directive": null,
                    "start": 3036,
                    "end": 3062
                  }
                ],
                "start": 2949,
                "end": 3068
              },
              "expression": false,
              "start": 2946,
              "end": 3068
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2937,
            "end": 3068
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3084,
              "end": 3085
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3098,
                          "end": 3103
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3104,
                          "end": 3122
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3098,
                        "end": 3122
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3125,
                        "end": 3126
                      },
                      "start": 3098,
                      "end": 3126
                    },
                    "directive": null,
                    "start": 3098,
                    "end": 3127
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3136,
                          "end": 3141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3142,
                          "end": 3161
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3136,
                        "end": 3161
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3164,
                        "end": 3165
                      },
                      "start": 3136,
                      "end": 3165
                    },
                    "directive": null,
                    "start": 3136,
                    "end": 3166
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3175,
                          "end": 3180
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3181,
                          "end": 3198
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3175,
                        "end": 3198
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3175,
                      "end": 3200
                    },
                    "directive": null,
                    "start": 3175,
                    "end": 3201
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 3217,
                      "end": 3219
                    },
                    "start": 3210,
                    "end": 3220
                  }
                ],
                "start": 3088,
                "end": 3226
              },
              "expression": false,
              "start": 3085,
              "end": 3226
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3073,
            "end": 3226
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3242,
              "end": 3243
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3244,
                  "end": 3245
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3257,
                          "end": 3262
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3263,
                          "end": 3281
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3257,
                        "end": 3281
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3284,
                        "end": 3285
                      },
                      "start": 3257,
                      "end": 3285
                    },
                    "directive": null,
                    "start": 3257,
                    "end": 3286
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3295,
                          "end": 3300
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3301,
                          "end": 3320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3295,
                        "end": 3320
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3323,
                        "end": 3324
                      },
                      "start": 3295,
                      "end": 3324
                    },
                    "directive": null,
                    "start": 3295,
                    "end": 3325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3334,
                          "end": 3339
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3340,
                          "end": 3357
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3334,
                        "end": 3357
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3334,
                      "end": 3359
                    },
                    "directive": null,
                    "start": 3334,
                    "end": 3360
                  }
                ],
                "start": 3247,
                "end": 3366
              },
              "expression": false,
              "start": 3243,
              "end": 3366
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3231,
            "end": 3366
          }
        ],
        "start": 2931,
        "end": 3368
      },
      "abstract": false,
      "declare": false,
      "start": 2895,
      "end": 3368
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3395,
            "end": 3398
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3403,
                  "end": 3404
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 3406,
                    "end": 3411
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3412,
                    "end": 3415
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3406,
                  "end": 3415
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3403,
                "end": 3415
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3417,
                  "end": 3418
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 3420,
                      "end": 3425
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3426,
                      "end": 3429
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3420,
                    "end": 3429
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3420,
                  "end": 3431
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3417,
                "end": 3431
              }
            ],
            "start": 3401,
            "end": 3433
          },
          "definite": false,
          "start": 3395,
          "end": 3433
        }
      ],
      "declare": false,
      "start": 3391,
      "end": 3434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 237,
  "end": 3434
}
```
