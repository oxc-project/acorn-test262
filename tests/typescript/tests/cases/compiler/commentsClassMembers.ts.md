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
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 75,
            "end": 93
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 135
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 155,
                  "end": 164
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 190
                        },
                        "optional": false,
                        "computed": false,
                        "start": 183,
                        "end": 190
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "start": 183,
                      "end": 194
                    },
                    "start": 176,
                    "end": 195
                  }
                ],
                "start": 166,
                "end": 201
              },
              "expression": false,
              "start": 135,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 126,
            "end": 201
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 277
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
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 297,
                        "end": 304
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 305,
                            "end": 309
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 310,
                            "end": 312
                          },
                          "optional": false,
                          "computed": false,
                          "start": 305,
                          "end": 312
                        }
                      ],
                      "optional": false,
                      "start": 297,
                      "end": 313
                    },
                    "start": 290,
                    "end": 314
                  }
                ],
                "start": 280,
                "end": 320
              },
              "expression": false,
              "start": 277,
              "end": 320
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 264,
            "end": 320
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 390
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    },
                    "start": 415,
                    "end": 423
                  },
                  "start": 410,
                  "end": 423
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
                          "start": 435,
                          "end": 439
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 435,
                        "end": 442
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 445,
                            "end": 449
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 452
                          },
                          "optional": false,
                          "computed": false,
                          "start": 445,
                          "end": 452
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 453,
                            "end": 458
                          }
                        ],
                        "optional": false,
                        "start": 445,
                        "end": 459
                      },
                      "start": 435,
                      "end": 459
                    },
                    "directive": null,
                    "start": 435,
                    "end": 460
                  }
                ],
                "start": 425,
                "end": 466
              },
              "expression": false,
              "start": 390,
              "end": 466
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 377,
            "end": 466
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
              },
              "start": 540,
              "end": 548
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 529,
            "end": 549
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 593
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 616,
                      "end": 622
                    },
                    "start": 614,
                    "end": 622
                  },
                  "start": 613,
                  "end": 622
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 641,
                          "end": 645
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 648
                        },
                        "optional": false,
                        "computed": false,
                        "start": 641,
                        "end": 648
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 652
                      },
                      "start": 641,
                      "end": 652
                    },
                    "start": 634,
                    "end": 653
                  }
                ],
                "start": 624,
                "end": 659
              },
              "expression": false,
              "start": 593,
              "end": 659
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 582,
            "end": 659
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 735
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
                          "type": "ThisExpression",
                          "start": 755,
                          "end": 759
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 763
                        },
                        "optional": false,
                        "computed": false,
                        "start": 755,
                        "end": 763
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 764,
                            "end": 768
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 769,
                            "end": 772
                          },
                          "optional": false,
                          "computed": false,
                          "start": 764,
                          "end": 772
                        }
                      ],
                      "optional": false,
                      "start": 755,
                      "end": 773
                    },
                    "start": 748,
                    "end": 774
                  }
                ],
                "start": 738,
                "end": 780
              },
              "expression": false,
              "start": 735,
              "end": 780
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 720,
            "end": 780
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 826
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 854,
                      "end": 860
                    },
                    "start": 852,
                    "end": 860
                  },
                  "start": 847,
                  "end": 860
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
                          "start": 872,
                          "end": 876
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 880
                        },
                        "optional": false,
                        "computed": false,
                        "start": 872,
                        "end": 880
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 883,
                            "end": 887
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 888,
                            "end": 891
                          },
                          "optional": false,
                          "computed": false,
                          "start": 883,
                          "end": 891
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 892,
                            "end": 897
                          }
                        ],
                        "optional": false,
                        "start": 883,
                        "end": 898
                      },
                      "start": 872,
                      "end": 898
                    },
                    "directive": null,
                    "start": 872,
                    "end": 899
                  }
                ],
                "start": 862,
                "end": 905
              },
              "expression": false,
              "start": 826,
              "end": 905
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 811,
            "end": 905
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 950
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
                "start": 953,
                "end": 960
              },
              "expression": false,
              "start": 950,
              "end": 960
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 939,
            "end": 960
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1012
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1014,
                "end": 1020
              },
              "start": 1012,
              "end": 1020
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1003,
            "end": 1021
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1070
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1093,
                      "end": 1099
                    },
                    "start": 1091,
                    "end": 1099
                  },
                  "start": 1090,
                  "end": 1099
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1118,
                          "end": 1120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1121,
                          "end": 1123
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1118,
                        "end": 1123
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1126,
                        "end": 1127
                      },
                      "start": 1118,
                      "end": 1127
                    },
                    "start": 1111,
                    "end": 1128
                  }
                ],
                "start": 1101,
                "end": 1134
              },
              "expression": false,
              "start": 1070,
              "end": 1134
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1061,
            "end": 1134
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1185
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1205,
                          "end": 1207
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1208,
                          "end": 1210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1205,
                        "end": 1210
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1211,
                            "end": 1213
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1214,
                            "end": 1216
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1211,
                          "end": 1216
                        }
                      ],
                      "optional": false,
                      "start": 1205,
                      "end": 1217
                    },
                    "start": 1198,
                    "end": 1218
                  }
                ],
                "start": 1188,
                "end": 1224
              },
              "expression": false,
              "start": 1185,
              "end": 1224
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1172,
            "end": 1224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1298
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1326,
                      "end": 1332
                    },
                    "start": 1324,
                    "end": 1332
                  },
                  "start": 1319,
                  "end": 1332
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1344,
                          "end": 1346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1347,
                          "end": 1349
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1344,
                        "end": 1349
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1354
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1352,
                          "end": 1357
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1358,
                            "end": 1363
                          }
                        ],
                        "optional": false,
                        "start": 1352,
                        "end": 1364
                      },
                      "start": 1344,
                      "end": 1364
                    },
                    "directive": null,
                    "start": 1344,
                    "end": 1365
                  }
                ],
                "start": 1334,
                "end": 1371
              },
              "expression": false,
              "start": 1298,
              "end": 1371
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1285,
            "end": 1371
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1422
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1424,
                "end": 1430
              },
              "start": 1422,
              "end": 1430
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1410,
            "end": 1431
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1448
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    },
                    "start": 1450,
                    "end": 1458
                  },
                  "start": 1449,
                  "end": 1458
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1477,
                          "end": 1481
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1482,
                          "end": 1487
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1477,
                        "end": 1487
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1491
                      },
                      "start": 1477,
                      "end": 1491
                    },
                    "start": 1470,
                    "end": 1492
                  }
                ],
                "start": 1460,
                "end": 1498
              },
              "expression": false,
              "start": 1448,
              "end": 1498
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1436,
            "end": 1498
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1514,
              "end": 1519
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
                          "type": "ThisExpression",
                          "start": 1539,
                          "end": 1543
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1544,
                          "end": 1549
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1539,
                        "end": 1549
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1550,
                            "end": 1554
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1555,
                            "end": 1560
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1550,
                          "end": 1560
                        }
                      ],
                      "optional": false,
                      "start": 1539,
                      "end": 1561
                    },
                    "start": 1532,
                    "end": 1562
                  }
                ],
                "start": 1522,
                "end": 1568
              },
              "expression": false,
              "start": 1519,
              "end": 1568
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1503,
            "end": 1568
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1584,
              "end": 1589
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1597,
                      "end": 1603
                    },
                    "start": 1595,
                    "end": 1603
                  },
                  "start": 1590,
                  "end": 1603
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
                          "start": 1615,
                          "end": 1619
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1620,
                          "end": 1625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1615,
                        "end": 1625
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1628,
                            "end": 1632
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1633,
                            "end": 1638
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1628,
                          "end": 1638
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1639,
                            "end": 1644
                          }
                        ],
                        "optional": false,
                        "start": 1628,
                        "end": 1645
                      },
                      "start": 1615,
                      "end": 1645
                    },
                    "directive": null,
                    "start": 1615,
                    "end": 1646
                  }
                ],
                "start": 1605,
                "end": 1652
              },
              "expression": false,
              "start": 1589,
              "end": 1652
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1573,
            "end": 1652
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1671
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1673,
                "end": 1679
              },
              "start": 1671,
              "end": 1679
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1657,
            "end": 1680
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1699
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1703,
                      "end": 1709
                    },
                    "start": 1701,
                    "end": 1709
                  },
                  "start": 1700,
                  "end": 1709
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1728,
                          "end": 1732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1728,
                        "end": 1739
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1742,
                        "end": 1743
                      },
                      "start": 1728,
                      "end": 1743
                    },
                    "start": 1721,
                    "end": 1744
                  }
                ],
                "start": 1711,
                "end": 1750
              },
              "expression": false,
              "start": 1699,
              "end": 1750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1685,
            "end": 1750
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1767,
              "end": 1773
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
                          "type": "ThisExpression",
                          "start": 1793,
                          "end": 1797
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1798,
                          "end": 1804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1793,
                        "end": 1804
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1805,
                            "end": 1809
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1810,
                            "end": 1816
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1805,
                          "end": 1816
                        }
                      ],
                      "optional": false,
                      "start": 1793,
                      "end": 1817
                    },
                    "start": 1786,
                    "end": 1818
                  }
                ],
                "start": 1776,
                "end": 1824
              },
              "expression": false,
              "start": 1773,
              "end": 1824
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1755,
            "end": 1824
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1847
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1855,
                      "end": 1861
                    },
                    "start": 1853,
                    "end": 1861
                  },
                  "start": 1848,
                  "end": 1861
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
                          "start": 1873,
                          "end": 1877
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1878,
                          "end": 1884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1873,
                        "end": 1884
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1887,
                            "end": 1891
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1892,
                            "end": 1898
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1887,
                          "end": 1898
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1899,
                            "end": 1904
                          }
                        ],
                        "optional": false,
                        "start": 1887,
                        "end": 1905
                      },
                      "start": 1873,
                      "end": 1905
                    },
                    "directive": null,
                    "start": 1873,
                    "end": 1906
                  }
                ],
                "start": 1863,
                "end": 1912
              },
              "expression": false,
              "start": 1847,
              "end": 1912
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1829,
            "end": 1912
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1929
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1931,
                "end": 1937
              },
              "start": 1929,
              "end": 1937
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1917,
            "end": 1938
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1950,
              "end": 1955
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1959,
                      "end": 1965
                    },
                    "start": 1957,
                    "end": 1965
                  },
                  "start": 1956,
                  "end": 1965
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1984,
                          "end": 1986
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1987,
                          "end": 1992
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1984,
                        "end": 1992
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1996
                      },
                      "start": 1984,
                      "end": 1996
                    },
                    "start": 1977,
                    "end": 1997
                  }
                ],
                "start": 1967,
                "end": 2003
              },
              "expression": false,
              "start": 1955,
              "end": 2003
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1943,
            "end": 2003
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2019,
              "end": 2024
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2044,
                          "end": 2046
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2047,
                          "end": 2052
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2044,
                        "end": 2052
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2053,
                            "end": 2055
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2056,
                            "end": 2061
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2053,
                          "end": 2061
                        }
                      ],
                      "optional": false,
                      "start": 2044,
                      "end": 2062
                    },
                    "start": 2037,
                    "end": 2063
                  }
                ],
                "start": 2027,
                "end": 2069
              },
              "expression": false,
              "start": 2024,
              "end": 2069
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2008,
            "end": 2069
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2085,
              "end": 2090
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2098,
                      "end": 2104
                    },
                    "start": 2096,
                    "end": 2104
                  },
                  "start": 2091,
                  "end": 2104
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2116,
                          "end": 2118
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2119,
                          "end": 2124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2116,
                        "end": 2124
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2127,
                            "end": 2129
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2130,
                            "end": 2135
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2127,
                          "end": 2135
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2136,
                            "end": 2141
                          }
                        ],
                        "optional": false,
                        "start": 2127,
                        "end": 2142
                      },
                      "start": 2116,
                      "end": 2142
                    },
                    "directive": null,
                    "start": 2116,
                    "end": 2143
                  }
                ],
                "start": 2106,
                "end": 2149
              },
              "expression": false,
              "start": 2090,
              "end": 2149
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2074,
            "end": 2149
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2196,
                "end": 2202
              },
              "start": 2194,
              "end": 2202
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2183,
            "end": 2203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2240,
              "end": 2244
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2248,
                      "end": 2254
                    },
                    "start": 2246,
                    "end": 2254
                  },
                  "start": 2245,
                  "end": 2254
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2273,
                          "end": 2277
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2278,
                          "end": 2282
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2273,
                        "end": 2282
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2285,
                        "end": 2286
                      },
                      "start": 2273,
                      "end": 2286
                    },
                    "start": 2266,
                    "end": 2287
                  }
                ],
                "start": 2256,
                "end": 2293
              },
              "expression": false,
              "start": 2244,
              "end": 2293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2233,
            "end": 2293
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2336
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
                          "type": "ThisExpression",
                          "start": 2356,
                          "end": 2360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2361,
                          "end": 2365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2356,
                        "end": 2365
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2366,
                            "end": 2370
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2371,
                            "end": 2375
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2366,
                          "end": 2375
                        }
                      ],
                      "optional": false,
                      "start": 2356,
                      "end": 2376
                    },
                    "start": 2349,
                    "end": 2377
                  }
                ],
                "start": 2339,
                "end": 2383
              },
              "expression": false,
              "start": 2336,
              "end": 2383
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2321,
            "end": 2383
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2422,
              "end": 2426
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2434,
                      "end": 2440
                    },
                    "start": 2432,
                    "end": 2440
                  },
                  "start": 2427,
                  "end": 2440
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
                          "start": 2452,
                          "end": 2456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2457,
                          "end": 2461
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2452,
                        "end": 2461
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2464,
                            "end": 2468
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2469,
                            "end": 2473
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2464,
                          "end": 2473
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2474,
                            "end": 2479
                          }
                        ],
                        "optional": false,
                        "start": 2464,
                        "end": 2480
                      },
                      "start": 2452,
                      "end": 2480
                    },
                    "directive": null,
                    "start": 2452,
                    "end": 2481
                  }
                ],
                "start": 2442,
                "end": 2487
              },
              "expression": false,
              "start": 2426,
              "end": 2487
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2411,
            "end": 2487
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2536,
                "end": 2542
              },
              "start": 2534,
              "end": 2542
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2521,
            "end": 2543
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2581,
              "end": 2586
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2590,
                      "end": 2596
                    },
                    "start": 2588,
                    "end": 2596
                  },
                  "start": 2587,
                  "end": 2596
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2615,
                          "end": 2619
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2620,
                          "end": 2624
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2615,
                        "end": 2624
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2628
                      },
                      "start": 2615,
                      "end": 2628
                    },
                    "start": 2608,
                    "end": 2629
                  }
                ],
                "start": 2598,
                "end": 2635
              },
              "expression": false,
              "start": 2586,
              "end": 2635
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2573,
            "end": 2635
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2675,
              "end": 2680
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
                          "type": "ThisExpression",
                          "start": 2700,
                          "end": 2704
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2705,
                          "end": 2710
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2700,
                        "end": 2710
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2711,
                            "end": 2715
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2716,
                            "end": 2721
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2711,
                          "end": 2721
                        }
                      ],
                      "optional": false,
                      "start": 2700,
                      "end": 2722
                    },
                    "start": 2693,
                    "end": 2723
                  }
                ],
                "start": 2683,
                "end": 2729
              },
              "expression": false,
              "start": 2680,
              "end": 2729
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2663,
            "end": 2729
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2769,
              "end": 2774
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2782,
                      "end": 2788
                    },
                    "start": 2780,
                    "end": 2788
                  },
                  "start": 2775,
                  "end": 2788
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
                          "start": 2800,
                          "end": 2804
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2805,
                          "end": 2810
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2800,
                        "end": 2810
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2813,
                            "end": 2817
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2818,
                            "end": 2823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2813,
                          "end": 2823
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2824,
                            "end": 2829
                          }
                        ],
                        "optional": false,
                        "start": 2813,
                        "end": 2830
                      },
                      "start": 2800,
                      "end": 2830
                    },
                    "directive": null,
                    "start": 2800,
                    "end": 2831
                  }
                ],
                "start": 2790,
                "end": 2837
              },
              "expression": false,
              "start": 2774,
              "end": 2837
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2757,
            "end": 2837
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2889,
              "end": 2893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2895,
                "end": 2901
              },
              "start": 2893,
              "end": 2901
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2882,
            "end": 2902
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2946,
              "end": 2950
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    },
                    "start": 2952,
                    "end": 2960
                  },
                  "start": 2951,
                  "end": 2960
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2979,
                          "end": 2981
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2982,
                          "end": 2986
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2979,
                        "end": 2986
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2989,
                        "end": 2990
                      },
                      "start": 2979,
                      "end": 2990
                    },
                    "start": 2972,
                    "end": 2991
                  }
                ],
                "start": 2962,
                "end": 2997
              },
              "expression": false,
              "start": 2950,
              "end": 2997
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2939,
            "end": 2997
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3043,
              "end": 3047
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3067,
                          "end": 3069
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3070,
                          "end": 3072
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3067,
                        "end": 3072
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3073,
                            "end": 3075
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3076,
                            "end": 3078
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3073,
                          "end": 3078
                        }
                      ],
                      "optional": false,
                      "start": 3067,
                      "end": 3079
                    },
                    "start": 3060,
                    "end": 3080
                  }
                ],
                "start": 3050,
                "end": 3086
              },
              "expression": false,
              "start": 3047,
              "end": 3086
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3032,
            "end": 3086
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3134
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3142,
                      "end": 3148
                    },
                    "start": 3140,
                    "end": 3148
                  },
                  "start": 3135,
                  "end": 3148
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3160,
                          "end": 3162
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3163,
                          "end": 3167
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3160,
                        "end": 3167
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3170,
                            "end": 3172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3173,
                            "end": 3177
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3170,
                          "end": 3177
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3178,
                            "end": 3183
                          }
                        ],
                        "optional": false,
                        "start": 3170,
                        "end": 3184
                      },
                      "start": 3160,
                      "end": 3184
                    },
                    "directive": null,
                    "start": 3160,
                    "end": 3185
                  }
                ],
                "start": 3150,
                "end": 3191
              },
              "expression": false,
              "start": 3134,
              "end": 3191
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3119,
            "end": 3191
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3236,
              "end": 3240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3242,
                "end": 3248
              },
              "start": 3240,
              "end": 3248
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 3229,
            "end": 3249
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3290,
              "end": 3294
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3298,
                      "end": 3304
                    },
                    "start": 3296,
                    "end": 3304
                  },
                  "start": 3295,
                  "end": 3304
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3323,
                          "end": 3327
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3328,
                          "end": 3332
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3323,
                        "end": 3332
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3335,
                        "end": 3336
                      },
                      "start": 3323,
                      "end": 3336
                    },
                    "start": 3316,
                    "end": 3337
                  }
                ],
                "start": 3306,
                "end": 3343
              },
              "expression": false,
              "start": 3294,
              "end": 3343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3283,
            "end": 3343
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3390
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
                          "type": "ThisExpression",
                          "start": 3410,
                          "end": 3414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3415,
                          "end": 3419
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3410,
                        "end": 3419
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3420,
                            "end": 3424
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3425,
                            "end": 3429
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3420,
                          "end": 3429
                        }
                      ],
                      "optional": false,
                      "start": 3410,
                      "end": 3430
                    },
                    "start": 3403,
                    "end": 3431
                  }
                ],
                "start": 3393,
                "end": 3437
              },
              "expression": false,
              "start": 3390,
              "end": 3437
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3375,
            "end": 3437
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3480,
              "end": 3484
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3492,
                      "end": 3498
                    },
                    "start": 3490,
                    "end": 3498
                  },
                  "start": 3485,
                  "end": 3498
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
                          "start": 3510,
                          "end": 3514
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3515,
                          "end": 3519
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3510,
                        "end": 3519
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3522,
                            "end": 3526
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3527,
                            "end": 3531
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3522,
                          "end": 3531
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3532,
                            "end": 3537
                          }
                        ],
                        "optional": false,
                        "start": 3522,
                        "end": 3538
                      },
                      "start": 3510,
                      "end": 3538
                    },
                    "directive": null,
                    "start": 3510,
                    "end": 3539
                  }
                ],
                "start": 3500,
                "end": 3545
              },
              "expression": false,
              "start": 3484,
              "end": 3545
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3469,
            "end": 3545
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3591,
              "end": 3596
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3598,
                "end": 3604
              },
              "start": 3596,
              "end": 3604
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3583,
            "end": 3605
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3647,
              "end": 3652
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3656,
                      "end": 3662
                    },
                    "start": 3654,
                    "end": 3662
                  },
                  "start": 3653,
                  "end": 3662
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3681,
                          "end": 3685
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3686,
                          "end": 3690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3681,
                        "end": 3690
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3693,
                        "end": 3694
                      },
                      "start": 3681,
                      "end": 3694
                    },
                    "start": 3674,
                    "end": 3695
                  }
                ],
                "start": 3664,
                "end": 3701
              },
              "expression": false,
              "start": 3652,
              "end": 3701
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3639,
            "end": 3701
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3745,
              "end": 3750
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
                          "type": "ThisExpression",
                          "start": 3770,
                          "end": 3774
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3775,
                          "end": 3780
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3770,
                        "end": 3780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3781,
                            "end": 3785
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3786,
                            "end": 3791
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3781,
                          "end": 3791
                        }
                      ],
                      "optional": false,
                      "start": 3770,
                      "end": 3792
                    },
                    "start": 3763,
                    "end": 3793
                  }
                ],
                "start": 3753,
                "end": 3799
              },
              "expression": false,
              "start": 3750,
              "end": 3799
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3733,
            "end": 3799
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3843,
              "end": 3848
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3856,
                      "end": 3862
                    },
                    "start": 3854,
                    "end": 3862
                  },
                  "start": 3849,
                  "end": 3862
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
                          "start": 3874,
                          "end": 3878
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3879,
                          "end": 3884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3874,
                        "end": 3884
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3887,
                            "end": 3891
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3892,
                            "end": 3897
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3887,
                          "end": 3897
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3898,
                            "end": 3903
                          }
                        ],
                        "optional": false,
                        "start": 3887,
                        "end": 3904
                      },
                      "start": 3874,
                      "end": 3904
                    },
                    "directive": null,
                    "start": 3874,
                    "end": 3905
                  }
                ],
                "start": 3864,
                "end": 3911
              },
              "expression": false,
              "start": 3848,
              "end": 3911
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3831,
            "end": 3911
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3967,
              "end": 3971
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3973,
                "end": 3979
              },
              "start": 3971,
              "end": 3979
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3960,
            "end": 3980
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4032
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4036,
                      "end": 4042
                    },
                    "start": 4034,
                    "end": 4042
                  },
                  "start": 4033,
                  "end": 4042
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4061,
                          "end": 4063
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4064,
                          "end": 4068
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4061,
                        "end": 4068
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4071,
                        "end": 4072
                      },
                      "start": 4061,
                      "end": 4072
                    },
                    "start": 4054,
                    "end": 4073
                  }
                ],
                "start": 4044,
                "end": 4079
              },
              "expression": false,
              "start": 4032,
              "end": 4079
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4021,
            "end": 4079
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4134,
              "end": 4138
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4158,
                          "end": 4160
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4161,
                          "end": 4163
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4158,
                        "end": 4163
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4164,
                            "end": 4166
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4167,
                            "end": 4169
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4164,
                          "end": 4169
                        }
                      ],
                      "optional": false,
                      "start": 4158,
                      "end": 4170
                    },
                    "start": 4151,
                    "end": 4171
                  }
                ],
                "start": 4141,
                "end": 4177
              },
              "expression": false,
              "start": 4138,
              "end": 4177
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4123,
            "end": 4177
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4230,
              "end": 4234
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4242,
                      "end": 4248
                    },
                    "start": 4240,
                    "end": 4248
                  },
                  "start": 4235,
                  "end": 4248
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4282,
                          "end": 4284
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4285,
                          "end": 4289
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4282,
                        "end": 4289
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4292,
                            "end": 4294
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4295,
                            "end": 4299
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4292,
                          "end": 4299
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4300,
                            "end": 4305
                          }
                        ],
                        "optional": false,
                        "start": 4292,
                        "end": 4306
                      },
                      "start": 4282,
                      "end": 4306
                    },
                    "directive": null,
                    "start": 4282,
                    "end": 4307
                  }
                ],
                "start": 4250,
                "end": 4313
              },
              "expression": false,
              "start": 4234,
              "end": 4313
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4219,
            "end": 4313
          }
        ],
        "start": 38,
        "end": 4315
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 4315
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4320,
            "end": 4322
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4329,
              "end": 4331
            },
            "typeArguments": null,
            "arguments": [],
            "start": 4325,
            "end": 4333
          },
          "definite": false,
          "start": 4320,
          "end": 4333
        }
      ],
      "declare": false,
      "start": 4316,
      "end": 4334
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
            "name": "i1_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4339,
            "end": 4343
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4346,
              "end": 4348
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4349,
              "end": 4351
            },
            "optional": false,
            "computed": false,
            "start": 4346,
            "end": 4351
          },
          "definite": false,
          "start": 4339,
          "end": 4351
        }
      ],
      "declare": false,
      "start": 4335,
      "end": 4352
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
            "name": "i1_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4357,
            "end": 4361
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4364,
              "end": 4366
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4367,
              "end": 4369
            },
            "optional": false,
            "computed": false,
            "start": 4364,
            "end": 4369
          },
          "definite": false,
          "start": 4357,
          "end": 4369
        }
      ],
      "declare": false,
      "start": 4353,
      "end": 4370
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
            "name": "i1_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 4375,
            "end": 4379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4382,
                "end": 4384
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4385,
                "end": 4387
              },
              "optional": false,
              "computed": false,
              "start": 4382,
              "end": 4387
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4388,
                "end": 4390
              }
            ],
            "optional": false,
            "start": 4382,
            "end": 4391
          },
          "definite": false,
          "start": 4375,
          "end": 4391
        }
      ],
      "declare": false,
      "start": 4371,
      "end": 4392
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
            "name": "i1_prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4397,
            "end": 4404
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4407,
              "end": 4409
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4410,
              "end": 4412
            },
            "optional": false,
            "computed": false,
            "start": 4407,
            "end": 4412
          },
          "definite": false,
          "start": 4397,
          "end": 4412
        }
      ],
      "declare": false,
      "start": 4393,
      "end": 4413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4414,
            "end": 4416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4417,
            "end": 4419
          },
          "optional": false,
          "computed": false,
          "start": 4414,
          "end": 4419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4422,
          "end": 4429
        },
        "start": 4414,
        "end": 4429
      },
      "directive": null,
      "start": 4414,
      "end": 4430
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
            "name": "i1_nc_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4435,
            "end": 4442
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4445,
              "end": 4447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4448,
              "end": 4453
            },
            "optional": false,
            "computed": false,
            "start": 4445,
            "end": 4453
          },
          "definite": false,
          "start": 4435,
          "end": 4453
        }
      ],
      "declare": false,
      "start": 4431,
      "end": 4454
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
            "name": "i1_ncf",
            "optional": false,
            "typeAnnotation": null,
            "start": 4459,
            "end": 4465
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4468,
              "end": 4470
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4471,
              "end": 4476
            },
            "optional": false,
            "computed": false,
            "start": 4468,
            "end": 4476
          },
          "definite": false,
          "start": 4459,
          "end": 4476
        }
      ],
      "declare": false,
      "start": 4455,
      "end": 4477
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
            "name": "i1_ncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4482,
            "end": 4488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4491,
                "end": 4493
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4494,
                "end": 4499
              },
              "optional": false,
              "computed": false,
              "start": 4491,
              "end": 4499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4500,
                "end": 4502
              }
            ],
            "optional": false,
            "start": 4491,
            "end": 4503
          },
          "definite": false,
          "start": 4482,
          "end": 4503
        }
      ],
      "declare": false,
      "start": 4478,
      "end": 4504
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
            "name": "i1_ncprop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4509,
            "end": 4518
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4521,
              "end": 4523
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4524,
              "end": 4529
            },
            "optional": false,
            "computed": false,
            "start": 4521,
            "end": 4529
          },
          "definite": false,
          "start": 4509,
          "end": 4529
        }
      ],
      "declare": false,
      "start": 4505,
      "end": 4530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4531,
            "end": 4533
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4534,
            "end": 4539
          },
          "optional": false,
          "computed": false,
          "start": 4531,
          "end": 4539
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_ncprop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4542,
          "end": 4551
        },
        "start": 4531,
        "end": 4551
      },
      "directive": null,
      "start": 4531,
      "end": 4552
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
            "name": "i1_s_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4557,
            "end": 4563
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4566,
              "end": 4568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4569,
              "end": 4571
            },
            "optional": false,
            "computed": false,
            "start": 4566,
            "end": 4571
          },
          "definite": false,
          "start": 4557,
          "end": 4571
        }
      ],
      "declare": false,
      "start": 4553,
      "end": 4572
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
            "name": "i1_s_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4577,
            "end": 4583
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4586,
              "end": 4588
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4589,
              "end": 4591
            },
            "optional": false,
            "computed": false,
            "start": 4586,
            "end": 4591
          },
          "definite": false,
          "start": 4577,
          "end": 4591
        }
      ],
      "declare": false,
      "start": 4573,
      "end": 4592
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
            "name": "i1_s_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 4597,
            "end": 4603
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4606,
                "end": 4608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4609,
                "end": 4611
              },
              "optional": false,
              "computed": false,
              "start": 4606,
              "end": 4611
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4612,
                "end": 4614
              }
            ],
            "optional": false,
            "start": 4606,
            "end": 4615
          },
          "definite": false,
          "start": 4597,
          "end": 4615
        }
      ],
      "declare": false,
      "start": 4593,
      "end": 4616
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
            "name": "i1_s_prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4621,
            "end": 4630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4633,
              "end": 4635
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4636,
              "end": 4638
            },
            "optional": false,
            "computed": false,
            "start": 4633,
            "end": 4638
          },
          "definite": false,
          "start": 4621,
          "end": 4638
        }
      ],
      "declare": false,
      "start": 4617,
      "end": 4639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4640,
            "end": 4642
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4643,
            "end": 4645
          },
          "optional": false,
          "computed": false,
          "start": 4640,
          "end": 4645
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_s_prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4648,
          "end": 4657
        },
        "start": 4640,
        "end": 4657
      },
      "directive": null,
      "start": 4640,
      "end": 4658
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
            "name": "i1_s_nc_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4663,
            "end": 4672
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4675,
              "end": 4677
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4678,
              "end": 4683
            },
            "optional": false,
            "computed": false,
            "start": 4675,
            "end": 4683
          },
          "definite": false,
          "start": 4663,
          "end": 4683
        }
      ],
      "declare": false,
      "start": 4659,
      "end": 4684
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
            "name": "i1_s_ncf",
            "optional": false,
            "typeAnnotation": null,
            "start": 4689,
            "end": 4697
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4700,
              "end": 4702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4703,
              "end": 4708
            },
            "optional": false,
            "computed": false,
            "start": 4700,
            "end": 4708
          },
          "definite": false,
          "start": 4689,
          "end": 4708
        }
      ],
      "declare": false,
      "start": 4685,
      "end": 4709
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
            "name": "i1_s_ncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4714,
            "end": 4722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4725,
                "end": 4727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4728,
                "end": 4733
              },
              "optional": false,
              "computed": false,
              "start": 4725,
              "end": 4733
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4734,
                "end": 4736
              }
            ],
            "optional": false,
            "start": 4725,
            "end": 4737
          },
          "definite": false,
          "start": 4714,
          "end": 4737
        }
      ],
      "declare": false,
      "start": 4710,
      "end": 4738
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
            "name": "i1_s_ncprop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4743,
            "end": 4754
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4757,
              "end": 4759
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4760,
              "end": 4765
            },
            "optional": false,
            "computed": false,
            "start": 4757,
            "end": 4765
          },
          "definite": false,
          "start": 4743,
          "end": 4765
        }
      ],
      "declare": false,
      "start": 4739,
      "end": 4766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4767,
            "end": 4769
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4770,
            "end": 4775
          },
          "optional": false,
          "computed": false,
          "start": 4767,
          "end": 4775
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_s_ncprop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4778,
          "end": 4789
        },
        "start": 4767,
        "end": 4789
      },
      "directive": null,
      "start": 4767,
      "end": 4790
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
            "name": "i1_c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4795,
            "end": 4799
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4802,
            "end": 4804
          },
          "definite": false,
          "start": 4795,
          "end": 4804
        }
      ],
      "declare": false,
      "start": 4791,
      "end": 4805
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 4812,
        "end": 4823
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 4838,
              "end": 4841
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4843,
                "end": 4849
              },
              "start": 4841,
              "end": 4849
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 4830,
            "end": 4850
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4897,
              "end": 4899
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
                        "start": 4919,
                        "end": 4923
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4924,
                        "end": 4927
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4919,
                      "end": 4927
                    },
                    "start": 4912,
                    "end": 4928
                  }
                ],
                "start": 4902,
                "end": 4934
              },
              "expression": false,
              "start": 4899,
              "end": 4934
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4886,
            "end": 4934
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4985,
              "end": 4990
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
                        "start": 5010,
                        "end": 5014
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5015,
                        "end": 5018
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5010,
                      "end": 5018
                    },
                    "start": 5003,
                    "end": 5019
                  }
                ],
                "start": 4993,
                "end": 5025
              },
              "expression": false,
              "start": 4990,
              "end": 5025
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4974,
            "end": 5025
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5071,
              "end": 5073
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5081,
                      "end": 5087
                    },
                    "start": 5079,
                    "end": 5087
                  },
                  "start": 5074,
                  "end": 5087
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
                          "start": 5099,
                          "end": 5103
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5104,
                          "end": 5107
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5099,
                        "end": 5107
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5110,
                        "end": 5115
                      },
                      "start": 5099,
                      "end": 5115
                    },
                    "directive": null,
                    "start": 5099,
                    "end": 5116
                  }
                ],
                "start": 5089,
                "end": 5122
              },
              "expression": false,
              "start": 5073,
              "end": 5122
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 5060,
            "end": 5122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5138,
              "end": 5143
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5151,
                      "end": 5157
                    },
                    "start": 5149,
                    "end": 5157
                  },
                  "start": 5144,
                  "end": 5157
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
                          "start": 5169,
                          "end": 5173
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5174,
                          "end": 5177
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5169,
                        "end": 5177
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5180,
                        "end": 5185
                      },
                      "start": 5169,
                      "end": 5185
                    },
                    "directive": null,
                    "start": 5169,
                    "end": 5186
                  }
                ],
                "start": 5159,
                "end": 5192
              },
              "expression": false,
              "start": 5143,
              "end": 5192
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 5127,
            "end": 5192
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5242,
              "end": 5243
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 5246,
              "end": 5248
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5235,
            "end": 5249
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 5296,
              "end": 5297
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 5300,
              "end": 5302
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5288,
            "end": 5303
          }
        ],
        "start": 4824,
        "end": 5337
      },
      "abstract": false,
      "declare": false,
      "start": 4806,
      "end": 5337
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
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5342,
            "end": 5355
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 5362,
              "end": 5373
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5358,
            "end": 5375
          },
          "definite": false,
          "start": 5342,
          "end": 5375
        }
      ],
      "declare": false,
      "start": 5338,
      "end": 5376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5377,
            "end": 5390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5391,
            "end": 5393
          },
          "optional": false,
          "computed": false,
          "start": 5377,
          "end": 5393
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5396,
            "end": 5409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5410,
            "end": 5412
          },
          "optional": false,
          "computed": false,
          "start": 5396,
          "end": 5412
        },
        "start": 5377,
        "end": 5412
      },
      "directive": null,
      "start": 5377,
      "end": 5413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5414,
            "end": 5427
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5428,
            "end": 5433
          },
          "optional": false,
          "computed": false,
          "start": 5414,
          "end": 5433
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5436,
            "end": 5449
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5450,
            "end": 5455
          },
          "optional": false,
          "computed": false,
          "start": 5436,
          "end": 5455
        },
        "start": 5414,
        "end": 5455
      },
      "directive": null,
      "start": 5414,
      "end": 5456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 5456
}
```
