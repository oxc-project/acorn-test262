__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "myVariable",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 38
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 41,
            "end": 43
          },
          "definite": false,
          "start": 28,
          "end": 43
        }
      ],
      "declare": false,
      "start": 24,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            },
            "start": 107,
            "end": 115
          },
          "start": 106,
          "end": 115
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 117,
        "end": 120
      },
      "expression": false,
      "start": 70,
      "end": 120
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
            "name": "fooVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 182,
                    "end": 186
                  },
                  "start": 179,
                  "end": 186
                },
                "start": 176,
                "end": 186
              },
              "start": 174,
              "end": 186
            },
            "start": 168,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 186
        }
      ],
      "declare": false,
      "start": 164,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 50,
            "raw": "50",
            "start": 192,
            "end": 194
          }
        ],
        "optional": false,
        "start": 188,
        "end": 195
      },
      "directive": null,
      "start": 188,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 197,
        "end": 205
      },
      "directive": null,
      "start": 197,
      "end": 206
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 234
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
              "start": 271,
              "end": 282
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
                "start": 285,
                "end": 292
              },
              "expression": false,
              "start": 282,
              "end": 292
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 271,
            "end": 292
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 337,
              "end": 339
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 326,
            "end": 340
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 386
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 406,
                        "end": 410
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 412
                      },
                      "optional": false,
                      "computed": false,
                      "start": 406,
                      "end": 412
                    },
                    "start": 399,
                    "end": 413
                  }
                ],
                "start": 389,
                "end": 419
              },
              "expression": false,
              "start": 386,
              "end": 419
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 374,
            "end": 419
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 466
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 486,
                        "end": 490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "optional": false,
                      "computed": false,
                      "start": 486,
                      "end": 492
                    },
                    "start": 479,
                    "end": 493
                  }
                ],
                "start": 469,
                "end": 499
              },
              "expression": false,
              "start": 466,
              "end": 499
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 450,
            "end": 499
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 546
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 552,
                      "end": 558
                    },
                    "start": 550,
                    "end": 558
                  },
                  "start": 547,
                  "end": 558
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
                          "type": "ThisExpression",
                          "start": 570,
                          "end": 574
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "optional": false,
                        "computed": false,
                        "start": 570,
                        "end": 576
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 579,
                        "end": 582
                      },
                      "start": 570,
                      "end": 582
                    },
                    "directive": null,
                    "start": 570,
                    "end": 583
                  }
                ],
                "start": 560,
                "end": 589
              },
              "expression": false,
              "start": 546,
              "end": 589
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 530,
            "end": 589
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 636
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    },
                    "start": 638,
                    "end": 646
                  },
                  "start": 637,
                  "end": 646
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 649,
                  "end": 655
                },
                "start": 647,
                "end": 655
              },
              "body": null,
              "expression": false,
              "start": 636,
              "end": 656
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 625,
            "end": 656
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 703
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    },
                    "start": 705,
                    "end": 713
                  },
                  "start": 704,
                  "end": 713
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 716,
                  "end": 722
                },
                "start": 714,
                "end": 722
              },
              "body": null,
              "expression": false,
              "start": 703,
              "end": 723
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 692,
            "end": 723
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 783
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
                  "name": "aOrb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 788
                }
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aOrb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 807,
                          "end": 811
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 820
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 820
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 807,
                      "end": 822
                    },
                    "start": 800,
                    "end": 823
                  }
                ],
                "start": 790,
                "end": 829
              },
              "expression": false,
              "start": 783,
              "end": 829
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 772,
            "end": 829
          }
        ],
        "start": 235,
        "end": 831
      },
      "abstract": false,
      "declare": false,
      "start": 227,
      "end": 831
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 860
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 868
            },
            "typeArguments": null,
            "arguments": [],
            "start": 863,
            "end": 870
          },
          "definite": false,
          "start": 859,
          "end": 870
        }
      ],
      "declare": false,
      "start": 855,
      "end": 871
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 910
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 947,
                    "end": 953
                  },
                  "start": 945,
                  "end": 953
                },
                "start": 944,
                "end": 953
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 956,
                "end": 962
              },
              "start": 954,
              "end": 962
            },
            "start": 943,
            "end": 963
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  "start": 998,
                  "end": 1006
                },
                "start": 997,
                "end": 1006
              }
            ],
            "returnType": null,
            "start": 992,
            "end": 1008
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1044,
                    "end": 1050
                  },
                  "start": 1042,
                  "end": 1050
                },
                "start": 1041,
                "end": 1050
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1053,
                "end": 1059
              },
              "start": 1051,
              "end": 1059
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1040,
            "end": 1060
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1100
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1118,
                    "end": 1124
                  },
                  "start": 1116,
                  "end": 1124
                },
                "start": 1115,
                "end": 1124
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1127,
                "end": 1133
              },
              "start": 1125,
              "end": 1133
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1095,
            "end": 1134
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1161,
                "end": 1167
              },
              "start": 1159,
              "end": 1167
            },
            "accessibility": null,
            "static": false,
            "start": 1155,
            "end": 1168
          }
        ],
        "start": 911,
        "end": 1170
      },
      "declare": false,
      "start": 898,
      "end": 1170
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1217
                },
                "typeArguments": null,
                "start": 1215,
                "end": 1217
              },
              "start": 1213,
              "end": 1217
            },
            "start": 1209,
            "end": 1217
          },
          "init": null,
          "definite": false,
          "start": 1209,
          "end": 1217
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1218
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1261
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1301
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
                      "start": 1312,
                      "end": 1323
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1334,
                                "end": 1340
                              },
                              "start": 1332,
                              "end": 1340
                            },
                            "start": 1331,
                            "end": 1340
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1324,
                          "end": 1340
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1342,
                        "end": 1354
                      },
                      "expression": false,
                      "start": 1323,
                      "end": 1354
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1312,
                    "end": 1354
                  }
                ],
                "start": 1302,
                "end": 1360
              },
              "abstract": false,
              "declare": false,
              "start": 1294,
              "end": 1360
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1287,
            "end": 1360
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1401,
                "end": 1403
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 1404,
                "end": 1411
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1391,
              "end": 1411
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1384,
            "end": 1411
          }
        ],
        "start": 1262,
        "end": 1413
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1249,
      "end": 1413
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
            "start": 1441,
            "end": 1442
          },
          "init": null,
          "definite": false,
          "start": 1441,
          "end": 1442
        }
      ],
      "declare": true,
      "start": 1429,
      "end": 1443
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 24,
  "end": 1443
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "myVariable",
    "start": 28,
    "end": 38,
    "range": [
      28,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 41,
    "end": 43,
    "range": [
      41,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78,
    "range": [
      70,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "fooVar",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "fooVar",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 271,
    "end": 282,
    "range": [
      271,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "myFoo",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 479,
    "end": 485,
    "range": [
      479,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 486,
    "end": 490,
    "range": [
      486,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 530,
    "end": 536,
    "range": [
      530,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 541,
    "end": 546,
    "range": [
      541,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 547,
    "end": 550,
    "range": [
      547,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 552,
    "end": 558,
    "range": [
      552,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 570,
    "end": 574,
    "range": [
      570,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 632,
    "end": 636,
    "range": [
      632,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 649,
    "end": 655,
    "range": [
      649,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 692,
    "end": 698,
    "range": [
      692,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 699,
    "end": 703,
    "range": [
      699,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 716,
    "end": 722,
    "range": [
      716,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 772,
    "end": 778,
    "range": [
      772,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 779,
    "end": 783,
    "range": [
      779,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 784,
    "end": 788,
    "range": [
      784,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrb",
    "start": 807,
    "end": 811,
    "range": [
      807,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 812,
    "end": 820,
    "range": [
      812,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 898,
    "end": 907,
    "range": [
      898,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 947,
    "end": 953,
    "range": [
      947,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 956,
    "end": 962,
    "range": [
      956,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 992,
    "end": 995,
    "range": [
      992,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1000,
    "end": 1006,
    "range": [
      1000,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1044,
    "end": 1050,
    "range": [
      1044,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1053,
    "end": 1059,
    "range": [
      1053,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "myFoo",
    "start": 1095,
    "end": 1100,
    "range": [
      1095,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1118,
    "end": 1124,
    "range": [
      1118,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1127,
    "end": 1133,
    "range": [
      1127,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1155,
    "end": 1159,
    "range": [
      1155,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1161,
    "end": 1167,
    "range": [
      1161,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1205,
    "end": 1208,
    "range": [
      1205,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "i1_i",
    "start": 1209,
    "end": 1213,
    "range": [
      1209,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 1215,
    "end": 1217,
    "range": [
      1215,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1249,
    "end": 1258,
    "range": [
      1249,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1259,
    "end": 1261,
    "range": [
      1259,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1287,
    "end": 1293,
    "range": [
      1287,
      1293
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1294,
    "end": 1299,
    "range": [
      1294,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1312,
    "end": 1323,
    "range": [
      1312,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1324,
    "end": 1330,
    "range": [
      1324,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1334,
    "end": 1340,
    "range": [
      1334,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1384,
    "end": 1390,
    "range": [
      1384,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1391,
    "end": 1400,
    "range": [
      1391,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1429,
    "end": 1436,
    "range": [
      1429,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1437,
    "end": 1440,
    "range": [
      1437,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  }
]
```
