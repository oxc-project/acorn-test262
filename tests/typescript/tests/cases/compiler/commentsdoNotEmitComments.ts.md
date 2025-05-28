__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 1577,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "decorators": [],
            "name": "myVariable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 43,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
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
          "start": 106,
          "end": 115,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 115,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 120,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 187,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 186,
            "decorators": [],
            "name": "fooVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 186,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 176,
                "end": 186,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 182,
                    "end": 186
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 188,
        "end": 195,
        "callee": {
          "type": "Identifier",
          "start": 188,
          "end": 191,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "value": 50,
            "raw": "50"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 197,
        "end": 205,
        "callee": {
          "type": "Identifier",
          "start": 197,
          "end": 203,
          "decorators": [],
          "name": "fooVar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 831,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 831,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 292,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 282,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 292,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 292,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 340,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 337,
              "end": 339,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 419,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 386,
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 419,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 419,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 399,
                    "end": 413,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 406,
                      "end": 412,
                      "object": {
                        "type": "ThisExpression",
                        "start": 406,
                        "end": 410
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 450,
            "end": 499,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 466,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 466,
              "end": 499,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 469,
                "end": 499,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 479,
                    "end": 493,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 486,
                      "end": 492,
                      "object": {
                        "type": "ThisExpression",
                        "start": 486,
                        "end": 490
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 530,
            "end": 589,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 546,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 589,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 547,
                  "end": 558,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 550,
                    "end": 558,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 552,
                      "end": 558
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 560,
                "end": 589,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 570,
                    "end": 583,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 570,
                      "end": 582,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 570,
                        "end": 576,
                        "object": {
                          "type": "ThisExpression",
                          "start": 570,
                          "end": 574
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 576,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 582,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 625,
            "end": 656,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 636,
              "end": 656,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 646,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 638,
                    "end": 646,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 655,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 649,
                  "end": 655
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 723,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 703,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 703,
              "end": 723,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 704,
                  "end": 713,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 705,
                    "end": 713,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 714,
                "end": 722,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 716,
                  "end": 722
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 829,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 783,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 783,
              "end": 829,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 784,
                  "end": 788,
                  "decorators": [],
                  "name": "aOrb",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 790,
                "end": 829,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 800,
                    "end": 823,
                    "argument": {
                      "type": "CallExpression",
                      "start": 807,
                      "end": 822,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 820,
                        "object": {
                          "type": "Identifier",
                          "start": 807,
                          "end": 811,
                          "decorators": [],
                          "name": "aOrb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 820,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 871,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 870,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 860,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 863,
            "end": 870,
            "callee": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 898,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 910,
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 911,
        "end": 1170,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 943,
            "end": 963,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 944,
                "end": 953,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 945,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 947,
                    "end": 953
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 962,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 956,
                "end": 962
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 992,
            "end": 1008,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 997,
                "end": 1006,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 998,
                  "end": 1006,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1040,
            "end": 1060,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1041,
                "end": 1050,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1042,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1044,
                    "end": 1050
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1051,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1053,
                "end": 1059
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1095,
            "end": 1134,
            "key": {
              "type": "Identifier",
              "start": 1095,
              "end": 1100,
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1115,
                "end": 1124,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1116,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1118,
                    "end": 1124
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1127,
                "end": 1133
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1155,
            "end": 1168,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1155,
              "end": 1159,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1159,
              "end": 1167,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1161,
                "end": 1167
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
      "type": "VariableDeclaration",
      "start": 1205,
      "end": 1218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1217,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1217,
            "decorators": [],
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1215,
                "end": 1217,
                "typeName": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1217,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1249,
      "end": 1418,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1258,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1259,
        "end": 1418,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1284,
            "end": 1368,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1291,
              "end": 1368,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1297,
                "end": 1298,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1299,
                "end": 1368,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1309,
                    "end": 1362,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1320,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1320,
                      "end": 1362,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1321,
                          "end": 1337,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1328,
                            "end": 1337,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1329,
                              "end": 1337,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1331,
                                "end": 1337
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1339,
                        "end": 1362,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1392,
            "end": 1416,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1399,
              "end": 1416,
              "id": {
                "type": "Identifier",
                "start": 1406,
                "end": 1408,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1409,
                "end": 1416,
                "body": []
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1434,
      "end": 1448,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1446,
          "end": 1447,
          "id": {
            "type": "Identifier",
            "start": 1446,
            "end": 1447,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1508,
      "end": 1545,
      "id": {
        "type": "Identifier",
        "start": 1519,
        "end": 1524,
        "decorators": [],
        "name": "color",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1525,
        "end": 1545,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1527,
            "end": 1530,
            "id": {
              "type": "Identifier",
              "start": 1527,
              "end": 1530,
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1532,
            "end": 1537,
            "id": {
              "type": "Identifier",
              "start": 1532,
              "end": 1537,
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1539,
            "end": 1543,
            "id": {
              "type": "Identifier",
              "start": 1539,
              "end": 1543,
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1546,
      "end": 1577,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1550,
          "end": 1576,
          "id": {
            "type": "Identifier",
            "start": 1550,
            "end": 1562,
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1555,
              "end": 1562,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1557,
                "end": 1562,
                "typeName": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1562,
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1565,
            "end": 1576,
            "object": {
              "type": "Identifier",
              "start": 1565,
              "end": 1570,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1571,
              "end": 1576,
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
