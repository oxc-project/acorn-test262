__ESTREE_TEST__:PASS:
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
                        "end": 1365
                      },
                      "expression": false,
                      "start": 1323,
                      "end": 1365
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1312,
                    "end": 1365
                  }
                ],
                "start": 1302,
                "end": 1371
              },
              "abstract": false,
              "declare": false,
              "start": 1294,
              "end": 1371
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1287,
            "end": 1371
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
                "start": 1412,
                "end": 1414
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 1415,
                "end": 1422
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1402,
              "end": 1422
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1395,
            "end": 1422
          }
        ],
        "start": 1262,
        "end": 1424
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1249,
      "end": 1424
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
            "start": 1452,
            "end": 1453
          },
          "init": null,
          "definite": false,
          "start": 1452,
          "end": 1453
        }
      ],
      "declare": true,
      "start": 1440,
      "end": 1454
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "color",
        "optional": false,
        "typeAnnotation": null,
        "start": 1525,
        "end": 1530
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1536
            },
            "initializer": null,
            "computed": false,
            "start": 1533,
            "end": 1536
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1543
            },
            "initializer": null,
            "computed": false,
            "start": 1538,
            "end": 1543
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1549
            },
            "initializer": null,
            "computed": false,
            "start": 1545,
            "end": 1549
          }
        ],
        "start": 1531,
        "end": 1551
      },
      "const": true,
      "declare": false,
      "start": 1514,
      "end": 1551
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
            "name": "shade",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1563,
                  "end": 1568
                },
                "typeArguments": null,
                "start": 1563,
                "end": 1568
              },
              "start": 1561,
              "end": 1568
            },
            "start": 1556,
            "end": 1568
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1576
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null,
              "start": 1577,
              "end": 1582
            },
            "optional": false,
            "computed": false,
            "start": 1571,
            "end": 1582
          },
          "definite": false,
          "start": 1556,
          "end": 1582
        }
      ],
      "declare": false,
      "start": 1552,
      "end": 1583
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 24,
  "end": 1583
}
```
