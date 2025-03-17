__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 1438,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "name": "myVariable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 115,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 115,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 120,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 186,
            "name": "fooVar",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "value": 50,
            "raw": "50"
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "fooVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 831,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 234,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 831,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 292,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 282,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 292,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 292,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 340,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 337,
              "end": 339,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 419,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 386,
              "name": "myFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 419,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 450,
            "end": 499,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 466,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 466,
              "end": 499,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 530,
            "end": 589,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 546,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 589,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 547,
                  "end": 558,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 550,
                    "end": 558,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 552,
                      "end": 558
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 582,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 625,
            "end": 656,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 636,
              "end": 656,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 646,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 638,
                    "end": 646,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 655,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 649,
                  "end": 655
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 723,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 703,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 703,
              "end": 723,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 704,
                  "end": 713,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 705,
                    "end": 713,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 714,
                "end": 722,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 716,
                  "end": 722
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 829,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 783,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 783,
              "end": 829,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 784,
                  "end": 788,
                  "name": "aOrb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "aOrb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 820,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "VariableDeclaration",
      "start": 855,
      "end": 871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 870,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 860,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 863,
            "end": 870,
            "callee": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "i1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 945,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 947,
                    "end": 953
                  }
                },
                "decorators": [],
                "optional": false
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
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 998,
                  "end": 1006,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  }
                },
                "decorators": [],
                "optional": false
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
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1042,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1044,
                    "end": 1050
                  }
                },
                "decorators": [],
                "optional": false
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
              "name": "myFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1116,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1118,
                    "end": 1124
                  }
                },
                "decorators": [],
                "optional": false
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1217,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1217,
            "name": "i1_i",
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
                  "name": "i1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1249,
      "end": 1407,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1258,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1259,
        "end": 1407,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1284,
            "end": 1357,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1291,
              "end": 1357,
              "id": {
                "type": "Identifier",
                "start": 1297,
                "end": 1298,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1299,
                "end": 1357,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1309,
                    "end": 1351,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1320,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1320,
                      "end": 1351,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1329,
                              "end": 1337,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1331,
                                "end": 1337
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1339,
                        "end": 1351,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1381,
            "end": 1405,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1388,
              "end": 1405,
              "id": {
                "type": "Identifier",
                "start": 1395,
                "end": 1397,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1398,
                "end": 1405,
                "body": []
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1423,
      "end": 1437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1435,
          "end": 1436,
          "id": {
            "type": "Identifier",
            "start": 1435,
            "end": 1436,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
