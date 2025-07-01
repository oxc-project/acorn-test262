__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
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
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 156
          }
        ],
        "start": 154,
        "end": 157
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "typeArguments": null,
              "start": 161,
              "end": 162
            },
            "start": 159,
            "end": 162
          },
          "start": 158,
          "end": 162
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 179
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 197
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 197
                    },
                    "start": 194,
                    "end": 197
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 186,
                  "end": 202
                }
              ],
              "start": 180,
              "end": 206
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 206
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "start": 209,
            "end": 222
          }
        ],
        "start": 164,
        "end": 224
      },
      "expression": false,
      "start": 140,
      "end": 224
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 232,
                "end": 238
              },
              "start": 230,
              "end": 238
            },
            "start": 229,
            "end": 238
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 247,
                  "end": 248
                }
              ],
              "optional": false,
              "start": 241,
              "end": 249
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 241,
            "end": 251
          },
          "definite": false,
          "start": 229,
          "end": 251
        }
      ],
      "declare": false,
      "start": 225,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListWrapper2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 272
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
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 289
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 290,
                      "end": 291
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 290,
                    "end": 291
                  }
                ],
                "start": 289,
                "end": 292
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 298,
                      "end": 317
                    },
                    "start": 296,
                    "end": 317
                  },
                  "start": 293,
                  "end": 317
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 326,
                          "end": 327
                        },
                        "typeArguments": null,
                        "start": 326,
                        "end": 327
                      },
                      "start": 326,
                      "end": 329
                    },
                    "start": 324,
                    "end": 329
                  },
                  "start": 319,
                  "end": 329
                }
              ],
              "returnType": {
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
                      "start": 332,
                      "end": 333
                    },
                    "typeArguments": null,
                    "start": 332,
                    "end": 333
                  },
                  "start": 332,
                  "end": 335
                },
                "start": 330,
                "end": 335
              },
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
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 350
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 351,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 356
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 357,
                          "end": 358
                        }
                      ],
                      "optional": false,
                      "start": 345,
                      "end": 359
                    },
                    "start": 338,
                    "end": 360
                  }
                ],
                "start": 336,
                "end": 362
              },
              "expression": false,
              "start": 289,
              "end": 362
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 277,
            "end": 362
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversed",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 380
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 381,
                      "end": 382
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 381,
                    "end": 382
                  }
                ],
                "start": 380,
                "end": 383
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 408
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 408
                    },
                    "start": 387,
                    "end": 408
                  },
                  "start": 384,
                  "end": 408
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 417,
                          "end": 418
                        },
                        "typeArguments": null,
                        "start": 417,
                        "end": 418
                      },
                      "start": 417,
                      "end": 420
                    },
                    "start": 415,
                    "end": 420
                  },
                  "start": 410,
                  "end": 420
                }
              ],
              "returnType": {
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
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 423,
                  "end": 426
                },
                "start": 421,
                "end": 426
              },
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
                          "start": 437,
                          "end": 438
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListWrapper2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 441,
                              "end": 453
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "clone",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 454,
                              "end": 459
                            },
                            "optional": false,
                            "computed": false,
                            "start": 441,
                            "end": 459
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dit",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 460,
                              "end": 463
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 465,
                              "end": 470
                            }
                          ],
                          "optional": false,
                          "start": 441,
                          "end": 471
                        },
                        "definite": false,
                        "start": 437,
                        "end": 471
                      }
                    ],
                    "declare": false,
                    "start": 433,
                    "end": 472
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 485
                    },
                    "start": 477,
                    "end": 486
                  }
                ],
                "start": 427,
                "end": 490
              },
              "expression": false,
              "start": 380,
              "end": 490
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 365,
            "end": 490
          }
        ],
        "start": 273,
        "end": 492
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 492
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tessst",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 509
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "funkyFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 833
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
                      "start": 834,
                      "end": 835
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 834,
                    "end": 835
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 838
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 837,
                    "end": 838
                  }
                ],
                "start": 833,
                "end": 839
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 847,
                          "end": 848
                        },
                        "typeArguments": null,
                        "start": 847,
                        "end": 848
                      },
                      "start": 847,
                      "end": 850
                    },
                    "start": 845,
                    "end": 850
                  },
                  "start": 840,
                  "end": 850
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "element",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 872,
                                "end": 873
                              },
                              "typeArguments": null,
                              "start": 872,
                              "end": 873
                            },
                            "start": 870,
                            "end": 873
                          },
                          "start": 863,
                          "end": 873
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 882,
                              "end": 888
                            },
                            "start": 880,
                            "end": 888
                          },
                          "start": 875,
                          "end": 888
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 894
                          },
                          "typeArguments": null,
                          "start": 893,
                          "end": 894
                        },
                        "start": 890,
                        "end": 894
                      },
                      "start": 862,
                      "end": 894
                    },
                    "start": 860,
                    "end": 894
                  },
                  "start": 852,
                  "end": 894
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 898
                },
                "start": 895,
                "end": 898
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 918
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 943,
                                  "end": 944
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 947,
                                  "end": 948
                                },
                                "definite": false,
                                "start": 943,
                                "end": 948
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "len",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 950,
                                  "end": 953
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "array",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 956,
                                    "end": 961
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 962,
                                    "end": 968
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 956,
                                  "end": 968
                                },
                                "definite": false,
                                "start": 950,
                                "end": 968
                              }
                            ],
                            "declare": false,
                            "start": 939,
                            "end": 968
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 970,
                              "end": 971
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "len",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 974,
                              "end": 977
                            },
                            "start": 970,
                            "end": 977
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 979,
                              "end": 980
                            },
                            "start": 979,
                            "end": 982
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1008,
                                      "end": 1014
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1017,
                                        "end": 1025
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "array",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1026,
                                            "end": 1031
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "i",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1032,
                                            "end": 1033
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 1026,
                                          "end": 1034
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1036,
                                          "end": 1037
                                        }
                                      ],
                                      "optional": false,
                                      "start": 1017,
                                      "end": 1038
                                    },
                                    "definite": false,
                                    "start": 1008,
                                    "end": 1038
                                  }
                                ],
                                "declare": false,
                                "start": 1002,
                                "end": 1039
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1060,
                                  "end": 1066
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1097,
                                        "end": 1103
                                      },
                                      "start": 1090,
                                      "end": 1104
                                    }
                                  ],
                                  "start": 1068,
                                  "end": 1122
                                },
                                "alternate": null,
                                "start": 1056,
                                "end": 1122
                              }
                            ],
                            "start": 984,
                            "end": 1136
                          },
                          "start": 934,
                          "end": 1136
                        }
                      ],
                      "start": 920,
                      "end": 1146
                    },
                    "alternate": null,
                    "start": 909,
                    "end": 1146
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1171
                    },
                    "start": 1155,
                    "end": 1172
                  }
                ],
                "start": 899,
                "end": 1178
              },
              "expression": false,
              "start": 816,
              "end": 1178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 809,
            "end": 1178
          }
        ],
        "start": 510,
        "end": 1180
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 493,
      "end": 1180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scanner",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1198
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scanRange",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1213,
                    "end": 1214
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1213,
                  "end": 1214
                }
              ],
              "start": 1212,
              "end": 1215
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1223,
                    "end": 1229
                  },
                  "start": 1221,
                  "end": 1229
                },
                "start": 1216,
                "end": 1229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1239,
                    "end": 1245
                  },
                  "start": 1237,
                  "end": 1245
                },
                "start": 1231,
                "end": 1245
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1264
                        },
                        "typeArguments": null,
                        "start": 1263,
                        "end": 1264
                      },
                      "start": 1260,
                      "end": 1264
                    },
                    "start": 1257,
                    "end": 1264
                  },
                  "start": 1255,
                  "end": 1264
                },
                "start": 1247,
                "end": 1264
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1268
                },
                "typeArguments": null,
                "start": 1267,
                "end": 1268
              },
              "start": 1265,
              "end": 1268
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1203,
            "end": 1269
          }
        ],
        "start": 1199,
        "end": 1271
      },
      "declare": false,
      "start": 1181,
      "end": 1271
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 1278,
        "end": 1289
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
              "name": "createFixedSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1420
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1433,
                        "end": 1444
                      },
                      "typeArguments": null,
                      "start": 1426,
                      "end": 1444
                    },
                    "start": 1424,
                    "end": 1444
                  },
                  "start": 1421,
                  "end": 1444
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
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
                  "start": 1446,
                  "end": 1458
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1461,
                    "end": 1464
                  },
                  "start": 1461,
                  "end": 1466
                },
                "start": 1459,
                "end": 1466
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1480,
                        "end": 1485
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1486,
                          "end": 1490
                        }
                      ],
                      "start": 1476,
                      "end": 1491
                    },
                    "start": 1469,
                    "end": 1492
                  }
                ],
                "start": 1467,
                "end": 1494
              },
              "expression": false,
              "start": 1420,
              "end": 1494
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1398,
            "end": 1494
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createGrowableSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1504,
              "end": 1522
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1535,
                        "end": 1546
                      },
                      "typeArguments": null,
                      "start": 1528,
                      "end": 1546
                    },
                    "start": 1526,
                    "end": 1546
                  },
                  "start": 1523,
                  "end": 1546
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1554,
                      "end": 1560
                    },
                    "start": 1552,
                    "end": 1560
                  },
                  "start": 1548,
                  "end": 1560
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1563,
                    "end": 1566
                  },
                  "start": 1563,
                  "end": 1568
                },
                "start": 1561,
                "end": 1568
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1588,
                          "end": 1592
                        }
                      ],
                      "start": 1578,
                      "end": 1593
                    },
                    "start": 1571,
                    "end": 1594
                  }
                ],
                "start": 1569,
                "end": 1596
              },
              "expression": false,
              "start": 1522,
              "end": 1596
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1497,
            "end": 1596
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 1606,
              "end": 1611
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1612,
                      "end": 1613
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1612,
                    "end": 1613
                  }
                ],
                "start": 1611,
                "end": 1614
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1627,
                        "end": 1638
                      },
                      "typeArguments": null,
                      "start": 1620,
                      "end": 1638
                    },
                    "start": 1618,
                    "end": 1638
                  },
                  "start": 1615,
                  "end": 1638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 1647,
                          "end": 1648
                        },
                        "typeArguments": null,
                        "start": 1647,
                        "end": 1648
                      },
                      "start": 1647,
                      "end": 1650
                    },
                    "start": 1645,
                    "end": 1650
                  },
                  "start": 1640,
                  "end": 1650
                }
              ],
              "returnType": {
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
                      "start": 1653,
                      "end": 1654
                    },
                    "typeArguments": null,
                    "start": 1653,
                    "end": 1654
                  },
                  "start": 1653,
                  "end": 1656
                },
                "start": 1651,
                "end": 1656
              },
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
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1666,
                          "end": 1671
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1672,
                          "end": 1677
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1666,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1678,
                          "end": 1679
                        }
                      ],
                      "optional": false,
                      "start": 1666,
                      "end": 1680
                    },
                    "start": 1659,
                    "end": 1681
                  }
                ],
                "start": 1657,
                "end": 1683
              },
              "expression": false,
              "start": 1611,
              "end": 1683
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1599,
            "end": 1683
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEachWithIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1709
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1710,
                      "end": 1711
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1710,
                    "end": 1711
                  }
                ],
                "start": 1709,
                "end": 1712
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1725,
                        "end": 1736
                      },
                      "typeArguments": null,
                      "start": 1718,
                      "end": 1736
                    },
                    "start": 1716,
                    "end": 1736
                  },
                  "start": 1713,
                  "end": 1736
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 1745,
                          "end": 1746
                        },
                        "typeArguments": null,
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1745,
                      "end": 1748
                    },
                    "start": 1743,
                    "end": 1748
                  },
                  "start": 1738,
                  "end": 1748
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1758,
                                "end": 1759
                              },
                              "typeArguments": null,
                              "start": 1758,
                              "end": 1759
                            },
                            "start": 1756,
                            "end": 1759
                          },
                          "start": 1755,
                          "end": 1759
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1764,
                              "end": 1770
                            },
                            "start": 1762,
                            "end": 1770
                          },
                          "start": 1761,
                          "end": 1770
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1775,
                          "end": 1779
                        },
                        "start": 1772,
                        "end": 1779
                      },
                      "start": 1754,
                      "end": 1779
                    },
                    "start": 1752,
                    "end": 1779
                  },
                  "start": 1750,
                  "end": 1779
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForStatement",
                    "init": {
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
                            "start": 1796,
                            "end": 1797
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1800,
                            "end": 1801
                          },
                          "definite": false,
                          "start": 1796,
                          "end": 1801
                        }
                      ],
                      "declare": false,
                      "start": 1792,
                      "end": 1801
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1807,
                          "end": 1812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1813,
                          "end": 1819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1807,
                        "end": 1819
                      },
                      "start": 1803,
                      "end": 1819
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1822
                      },
                      "start": 1821,
                      "end": 1824
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1834,
                              "end": 1836
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1837,
                                  "end": 1842
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1843,
                                  "end": 1844
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1837,
                                "end": 1845
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1847,
                                "end": 1848
                              }
                            ],
                            "optional": false,
                            "start": 1834,
                            "end": 1849
                          },
                          "directive": null,
                          "start": 1834,
                          "end": 1850
                        }
                      ],
                      "start": 1826,
                      "end": 1856
                    },
                    "start": 1787,
                    "end": 1856
                  }
                ],
                "start": 1781,
                "end": 1860
              },
              "expression": false,
              "start": 1709,
              "end": 1860
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1686,
            "end": 1860
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1870,
              "end": 1875
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1876,
                      "end": 1877
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1876,
                    "end": 1877
                  }
                ],
                "start": 1875,
                "end": 1878
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1891,
                        "end": 1902
                      },
                      "typeArguments": null,
                      "start": 1884,
                      "end": 1902
                    },
                    "start": 1882,
                    "end": 1902
                  },
                  "start": 1879,
                  "end": 1902
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 1911,
                          "end": 1912
                        },
                        "typeArguments": null,
                        "start": 1911,
                        "end": 1912
                      },
                      "start": 1911,
                      "end": 1914
                    },
                    "start": 1909,
                    "end": 1914
                  },
                  "start": 1904,
                  "end": 1914
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1918
                  },
                  "typeArguments": null,
                  "start": 1917,
                  "end": 1918
                },
                "start": 1915,
                "end": 1918
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1930,
                        "end": 1935
                      },
                      "prefix": true,
                      "start": 1929,
                      "end": 1935
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1944,
                        "end": 1948
                      },
                      "start": 1937,
                      "end": 1949
                    },
                    "alternate": null,
                    "start": 1925,
                    "end": 1949
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1961,
                        "end": 1966
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1967,
                        "end": 1968
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1961,
                      "end": 1969
                    },
                    "start": 1954,
                    "end": 1970
                  }
                ],
                "start": 1919,
                "end": 1974
              },
              "expression": false,
              "start": 1875,
              "end": 1974
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1863,
            "end": 1974
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 1984,
              "end": 1988
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1989,
                      "end": 1990
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1989,
                    "end": 1990
                  }
                ],
                "start": 1988,
                "end": 1991
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2004,
                        "end": 2015
                      },
                      "typeArguments": null,
                      "start": 1997,
                      "end": 2015
                    },
                    "start": 1995,
                    "end": 2015
                  },
                  "start": 1992,
                  "end": 2015
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 2024,
                          "end": 2025
                        },
                        "typeArguments": null,
                        "start": 2024,
                        "end": 2025
                      },
                      "start": 2024,
                      "end": 2027
                    },
                    "start": 2022,
                    "end": 2027
                  },
                  "start": 2017,
                  "end": 2027
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2030,
                    "end": 2031
                  },
                  "typeArguments": null,
                  "start": 2030,
                  "end": 2031
                },
                "start": 2028,
                "end": 2031
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2043,
                          "end": 2048
                        },
                        "prefix": true,
                        "start": 2042,
                        "end": 2048
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2052,
                            "end": 2057
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2058,
                            "end": 2064
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2052,
                          "end": 2064
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2068,
                          "end": 2069
                        },
                        "start": 2052,
                        "end": 2069
                      },
                      "start": 2042,
                      "end": 2069
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2078,
                        "end": 2082
                      },
                      "start": 2071,
                      "end": 2083
                    },
                    "alternate": null,
                    "start": 2038,
                    "end": 2083
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2100
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2101,
                            "end": 2106
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2107,
                            "end": 2113
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2101,
                          "end": 2113
                        },
                        "operator": "-",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2116,
                          "end": 2117
                        },
                        "start": 2101,
                        "end": 2117
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2095,
                      "end": 2118
                    },
                    "start": 2088,
                    "end": 2119
                  }
                ],
                "start": 2032,
                "end": 2123
              },
              "expression": false,
              "start": 1988,
              "end": 2123
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1977,
            "end": 2123
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2141,
                      "end": 2142
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2141,
                    "end": 2142
                  }
                ],
                "start": 2140,
                "end": 2143
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2156,
                        "end": 2167
                      },
                      "typeArguments": null,
                      "start": 2149,
                      "end": 2167
                    },
                    "start": 2147,
                    "end": 2167
                  },
                  "start": 2144,
                  "end": 2167
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 2176,
                          "end": 2177
                        },
                        "typeArguments": null,
                        "start": 2176,
                        "end": 2177
                      },
                      "start": 2176,
                      "end": 2179
                    },
                    "start": 2174,
                    "end": 2179
                  },
                  "start": 2169,
                  "end": 2179
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2188,
                        "end": 2189
                      },
                      "typeArguments": null,
                      "start": 2188,
                      "end": 2189
                    },
                    "start": 2186,
                    "end": 2189
                  },
                  "start": 2181,
                  "end": 2189
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2203,
                        "end": 2209
                      },
                      "start": 2201,
                      "end": 2209
                    },
                    "start": 2191,
                    "end": 2209
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2212,
                    "end": 2213
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2213
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2216,
                  "end": 2222
                },
                "start": 2214,
                "end": 2222
              },
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
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2236,
                          "end": 2241
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2242,
                          "end": 2249
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2236,
                        "end": 2249
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2250,
                          "end": 2255
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "startIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2257,
                          "end": 2267
                        }
                      ],
                      "optional": false,
                      "start": 2236,
                      "end": 2268
                    },
                    "start": 2229,
                    "end": 2269
                  }
                ],
                "start": 2223,
                "end": 2273
              },
              "expression": false,
              "start": 2140,
              "end": 2273
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2126,
            "end": 2273
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contains",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2291
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2292,
                      "end": 2293
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2292,
                    "end": 2293
                  }
                ],
                "start": 2291,
                "end": 2294
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2307,
                        "end": 2318
                      },
                      "typeArguments": null,
                      "start": 2300,
                      "end": 2318
                    },
                    "start": 2298,
                    "end": 2318
                  },
                  "start": 2295,
                  "end": 2318
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 2326,
                          "end": 2327
                        },
                        "typeArguments": null,
                        "start": 2326,
                        "end": 2327
                      },
                      "start": 2326,
                      "end": 2329
                    },
                    "start": 2324,
                    "end": 2329
                  },
                  "start": 2320,
                  "end": 2329
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2336
                      },
                      "typeArguments": null,
                      "start": 2335,
                      "end": 2336
                    },
                    "start": 2333,
                    "end": 2336
                  },
                  "start": 2331,
                  "end": 2336
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2339,
                  "end": 2346
                },
                "start": 2337,
                "end": 2346
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2360
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "indexOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2361,
                            "end": 2368
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2356,
                          "end": 2368
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "el",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2369,
                            "end": 2371
                          }
                        ],
                        "optional": false,
                        "start": 2356,
                        "end": 2372
                      },
                      "operator": "!==",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2378,
                          "end": 2379
                        },
                        "prefix": true,
                        "start": 2377,
                        "end": 2379
                      },
                      "start": 2356,
                      "end": 2379
                    },
                    "start": 2349,
                    "end": 2380
                  }
                ],
                "start": 2347,
                "end": 2382
              },
              "expression": false,
              "start": 2291,
              "end": 2382
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2276,
            "end": 2382
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversed",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2400
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2401,
                      "end": 2402
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2401,
                    "end": 2402
                  }
                ],
                "start": 2400,
                "end": 2403
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2416,
                        "end": 2427
                      },
                      "typeArguments": null,
                      "start": 2409,
                      "end": 2427
                    },
                    "start": 2407,
                    "end": 2427
                  },
                  "start": 2404,
                  "end": 2427
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
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
                          "start": 2436,
                          "end": 2437
                        },
                        "typeArguments": null,
                        "start": 2436,
                        "end": 2437
                      },
                      "start": 2436,
                      "end": 2439
                    },
                    "start": 2434,
                    "end": 2439
                  },
                  "start": 2429,
                  "end": 2439
                }
              ],
              "returnType": {
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
                      "start": 2442,
                      "end": 2443
                    },
                    "typeArguments": null,
                    "start": 2442,
                    "end": 2443
                  },
                  "start": 2442,
                  "end": 2445
                },
                "start": 2440,
                "end": 2445
              },
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
                          "start": 2456,
                          "end": 2457
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListWrapper",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2460,
                              "end": 2471
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "clone",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2472,
                              "end": 2477
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2460,
                            "end": 2477
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dit",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2478,
                              "end": 2481
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2483,
                              "end": 2488
                            }
                          ],
                          "optional": false,
                          "start": 2460,
                          "end": 2489
                        },
                        "definite": false,
                        "start": 2456,
                        "end": 2489
                      }
                    ],
                    "declare": false,
                    "start": 2452,
                    "end": 2490
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scanner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Scanner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2508,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2508,
                              "end": 2515
                            },
                            "start": 2506,
                            "end": 2515
                          },
                          "start": 2499,
                          "end": 2515
                        },
                        "init": null,
                        "definite": false,
                        "start": 2499,
                        "end": 2515
                      }
                    ],
                    "declare": false,
                    "start": 2495,
                    "end": 2516
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scanner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2521,
                          "end": 2528
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scanRange",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2529,
                          "end": 2538
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2521,
                        "end": 2538
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 2539,
                          "end": 2540
                        },
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2542,
                          "end": 2543
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 2551,
                            "end": 2555
                          },
                          "id": null,
                          "generator": false,
                          "start": 2545,
                          "end": 2555
                        }
                      ],
                      "optional": false,
                      "start": 2521,
                      "end": 2556
                    },
                    "directive": null,
                    "start": 2521,
                    "end": 2557
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tessst",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2569,
                            "end": 2575
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funkyFor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2576,
                            "end": 2584
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2569,
                          "end": 2584
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2585,
                            "end": 2590
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2592,
                                "end": 2593
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2597,
                                  "end": 2598
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2599,
                                  "end": 2607
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2597,
                                "end": 2607
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2597,
                              "end": 2609
                            },
                            "id": null,
                            "generator": false,
                            "start": 2592,
                            "end": 2609
                          }
                        ],
                        "optional": false,
                        "start": 2569,
                        "end": 2610
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2613,
                            "end": 2614
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reverse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2615,
                            "end": 2622
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2613,
                          "end": 2622
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2613,
                        "end": 2624
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2628
                      },
                      "start": 2569,
                      "end": 2628
                    },
                    "start": 2562,
                    "end": 2629
                  }
                ],
                "start": 2446,
                "end": 2633
              },
              "expression": false,
              "start": 2400,
              "end": 2633
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2385,
            "end": 2633
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 2643,
              "end": 2649
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2662,
                        "end": 2673
                      },
                      "typeArguments": null,
                      "start": 2655,
                      "end": 2673
                    },
                    "start": 2653,
                    "end": 2673
                  },
                  "start": 2650,
                  "end": 2673
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2678,
                        "end": 2681
                      },
                      "start": 2678,
                      "end": 2683
                    },
                    "start": 2676,
                    "end": 2683
                  },
                  "start": 2675,
                  "end": 2683
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2688,
                        "end": 2691
                      },
                      "start": 2688,
                      "end": 2693
                    },
                    "start": 2686,
                    "end": 2693
                  },
                  "start": 2685,
                  "end": 2693
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2696,
                    "end": 2699
                  },
                  "start": 2696,
                  "end": 2701
                },
                "start": 2694,
                "end": 2701
              },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2711,
                          "end": 2712
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "concat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2713,
                          "end": 2719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2711,
                        "end": 2719
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2720,
                          "end": 2721
                        }
                      ],
                      "optional": false,
                      "start": 2711,
                      "end": 2722
                    },
                    "start": 2704,
                    "end": 2723
                  }
                ],
                "start": 2702,
                "end": 2725
              },
              "expression": false,
              "start": 2649,
              "end": 2725
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2636,
            "end": 2725
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insert",
              "optional": false,
              "typeAnnotation": null,
              "start": 2735,
              "end": 2741
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2742,
                      "end": 2743
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2742,
                    "end": 2743
                  }
                ],
                "start": 2741,
                "end": 2744
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2757,
                        "end": 2768
                      },
                      "typeArguments": null,
                      "start": 2750,
                      "end": 2768
                    },
                    "start": 2748,
                    "end": 2768
                  },
                  "start": 2745,
                  "end": 2768
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 2776,
                          "end": 2777
                        },
                        "typeArguments": null,
                        "start": 2776,
                        "end": 2777
                      },
                      "start": 2776,
                      "end": 2779
                    },
                    "start": 2774,
                    "end": 2779
                  },
                  "start": 2770,
                  "end": 2779
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2788,
                      "end": 2794
                    },
                    "start": 2786,
                    "end": 2794
                  },
                  "start": 2781,
                  "end": 2794
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2803,
                        "end": 2804
                      },
                      "typeArguments": null,
                      "start": 2803,
                      "end": 2804
                    },
                    "start": 2801,
                    "end": 2804
                  },
                  "start": 2796,
                  "end": 2804
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2808,
                          "end": 2812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2813,
                          "end": 2819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2808,
                        "end": 2819
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2820,
                          "end": 2825
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2827,
                          "end": 2828
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2830,
                          "end": 2835
                        }
                      ],
                      "optional": false,
                      "start": 2808,
                      "end": 2836
                    },
                    "directive": null,
                    "start": 2808,
                    "end": 2837
                  }
                ],
                "start": 2806,
                "end": 2839
              },
              "expression": false,
              "start": 2741,
              "end": 2839
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2728,
            "end": 2839
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2857
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2858,
                      "end": 2859
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2858,
                    "end": 2859
                  }
                ],
                "start": 2857,
                "end": 2860
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2873,
                        "end": 2884
                      },
                      "typeArguments": null,
                      "start": 2866,
                      "end": 2884
                    },
                    "start": 2864,
                    "end": 2884
                  },
                  "start": 2861,
                  "end": 2884
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 2892,
                          "end": 2893
                        },
                        "typeArguments": null,
                        "start": 2892,
                        "end": 2893
                      },
                      "start": 2892,
                      "end": 2895
                    },
                    "start": 2890,
                    "end": 2895
                  },
                  "start": 2886,
                  "end": 2895
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2904,
                      "end": 2910
                    },
                    "start": 2902,
                    "end": 2910
                  },
                  "start": 2897,
                  "end": 2910
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2913,
                    "end": 2914
                  },
                  "typeArguments": null,
                  "start": 2913,
                  "end": 2914
                },
                "start": 2911,
                "end": 2914
              },
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
                          "name": "res",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2925,
                          "end": 2928
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2931,
                            "end": 2935
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2936,
                            "end": 2941
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2931,
                          "end": 2942
                        },
                        "definite": false,
                        "start": 2925,
                        "end": 2942
                      }
                    ],
                    "declare": false,
                    "start": 2921,
                    "end": 2943
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2948,
                          "end": 2952
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2953,
                          "end": 2959
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2948,
                        "end": 2959
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2960,
                          "end": 2965
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2967,
                          "end": 2968
                        }
                      ],
                      "optional": false,
                      "start": 2948,
                      "end": 2969
                    },
                    "directive": null,
                    "start": 2948,
                    "end": 2970
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2982,
                      "end": 2985
                    },
                    "start": 2975,
                    "end": 2986
                  }
                ],
                "start": 2915,
                "end": 2990
              },
              "expression": false,
              "start": 2857,
              "end": 2990
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2842,
            "end": 2990
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 3000,
              "end": 3009
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3010,
                      "end": 3011
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3010,
                    "end": 3011
                  }
                ],
                "start": 3009,
                "end": 3012
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3025,
                        "end": 3036
                      },
                      "typeArguments": null,
                      "start": 3018,
                      "end": 3036
                    },
                    "start": 3016,
                    "end": 3036
                  },
                  "start": 3013,
                  "end": 3036
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 3044,
                          "end": 3045
                        },
                        "typeArguments": null,
                        "start": 3044,
                        "end": 3045
                      },
                      "start": 3044,
                      "end": 3047
                    },
                    "start": 3042,
                    "end": 3047
                  },
                  "start": 3038,
                  "end": 3047
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
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
                          "start": 3056,
                          "end": 3057
                        },
                        "typeArguments": null,
                        "start": 3056,
                        "end": 3057
                      },
                      "start": 3056,
                      "end": 3059
                    },
                    "start": 3054,
                    "end": 3059
                  },
                  "start": 3049,
                  "end": 3059
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForStatement",
                    "init": {
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
                            "start": 3076,
                            "end": 3077
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 3080,
                            "end": 3081
                          },
                          "definite": false,
                          "start": 3076,
                          "end": 3081
                        }
                      ],
                      "declare": false,
                      "start": 3072,
                      "end": 3081
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3083,
                        "end": 3084
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3087,
                          "end": 3092
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3093,
                          "end": 3099
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3087,
                        "end": 3099
                      },
                      "start": 3083,
                      "end": 3099
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3103,
                        "end": 3104
                      },
                      "start": 3101,
                      "end": 3104
                    },
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
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3118,
                                "end": 3123
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3126,
                                    "end": 3130
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3131,
                                    "end": 3138
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3126,
                                  "end": 3138
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "items",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3139,
                                      "end": 3144
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3145,
                                      "end": 3146
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 3139,
                                    "end": 3147
                                  }
                                ],
                                "optional": false,
                                "start": 3126,
                                "end": 3148
                              },
                              "definite": false,
                              "start": 3118,
                              "end": 3148
                            }
                          ],
                          "declare": false,
                          "start": 3114,
                          "end": 3149
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3156,
                                "end": 3160
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "splice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3161,
                                "end": 3167
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3156,
                              "end": 3167
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3168,
                                "end": 3173
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 3175,
                                "end": 3176
                              }
                            ],
                            "optional": false,
                            "start": 3156,
                            "end": 3177
                          },
                          "directive": null,
                          "start": 3156,
                          "end": 3178
                        }
                      ],
                      "start": 3106,
                      "end": 3184
                    },
                    "start": 3067,
                    "end": 3184
                  }
                ],
                "start": 3061,
                "end": 3188
              },
              "expression": false,
              "start": 3009,
              "end": 3188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2993,
            "end": 3188
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3204
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3205,
                      "end": 3206
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3205,
                    "end": 3206
                  }
                ],
                "start": 3204,
                "end": 3207
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3220,
                        "end": 3231
                      },
                      "typeArguments": null,
                      "start": 3213,
                      "end": 3231
                    },
                    "start": 3211,
                    "end": 3231
                  },
                  "start": 3208,
                  "end": 3231
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 3239,
                          "end": 3240
                        },
                        "typeArguments": null,
                        "start": 3239,
                        "end": 3240
                      },
                      "start": 3239,
                      "end": 3242
                    },
                    "start": 3237,
                    "end": 3242
                  },
                  "start": 3233,
                  "end": 3242
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3248,
                        "end": 3249
                      },
                      "typeArguments": null,
                      "start": 3248,
                      "end": 3249
                    },
                    "start": 3246,
                    "end": 3249
                  },
                  "start": 3244,
                  "end": 3249
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3252,
                  "end": 3259
                },
                "start": 3250,
                "end": 3259
              },
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
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3270,
                          "end": 3275
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "list",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3278,
                              "end": 3282
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "indexOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3283,
                              "end": 3290
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3278,
                            "end": 3290
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "el",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3291,
                              "end": 3293
                            }
                          ],
                          "optional": false,
                          "start": 3278,
                          "end": 3294
                        },
                        "definite": false,
                        "start": 3270,
                        "end": 3294
                      }
                    ],
                    "declare": false,
                    "start": 3266,
                    "end": 3295
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3304,
                        "end": 3309
                      },
                      "operator": ">",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3313,
                          "end": 3314
                        },
                        "prefix": true,
                        "start": 3312,
                        "end": 3314
                      },
                      "start": 3304,
                      "end": 3314
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3324,
                                "end": 3328
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "splice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3329,
                                "end": 3335
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3324,
                              "end": 3335
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3336,
                                "end": 3341
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 3343,
                                "end": 3344
                              }
                            ],
                            "optional": false,
                            "start": 3324,
                            "end": 3345
                          },
                          "directive": null,
                          "start": 3324,
                          "end": 3346
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 3360,
                            "end": 3364
                          },
                          "start": 3353,
                          "end": 3365
                        }
                      ],
                      "start": 3316,
                      "end": 3371
                    },
                    "alternate": null,
                    "start": 3300,
                    "end": 3371
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 3383,
                      "end": 3388
                    },
                    "start": 3376,
                    "end": 3389
                  }
                ],
                "start": 3260,
                "end": 3393
              },
              "expression": false,
              "start": 3204,
              "end": 3393
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3191,
            "end": 3393
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clear",
              "optional": false,
              "typeAnnotation": null,
              "start": 3403,
              "end": 3408
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3421,
                        "end": 3432
                      },
                      "typeArguments": null,
                      "start": 3414,
                      "end": 3432
                    },
                    "start": 3412,
                    "end": 3432
                  },
                  "start": 3409,
                  "end": 3432
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3440,
                        "end": 3443
                      },
                      "start": 3440,
                      "end": 3445
                    },
                    "start": 3438,
                    "end": 3445
                  },
                  "start": 3434,
                  "end": 3445
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
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3449,
                          "end": 3453
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3454,
                          "end": 3460
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3449,
                        "end": 3460
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3463,
                        "end": 3464
                      },
                      "start": 3449,
                      "end": 3464
                    },
                    "directive": null,
                    "start": 3449,
                    "end": 3465
                  }
                ],
                "start": 3447,
                "end": 3467
              },
              "expression": false,
              "start": 3408,
              "end": 3467
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3396,
            "end": 3467
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isEmpty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3477,
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3497,
                        "end": 3508
                      },
                      "typeArguments": null,
                      "start": 3490,
                      "end": 3508
                    },
                    "start": 3488,
                    "end": 3508
                  },
                  "start": 3485,
                  "end": 3508
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3516,
                        "end": 3519
                      },
                      "start": 3516,
                      "end": 3521
                    },
                    "start": 3514,
                    "end": 3521
                  },
                  "start": 3510,
                  "end": 3521
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3524,
                  "end": 3531
                },
                "start": 3522,
                "end": 3531
              },
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
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3541,
                          "end": 3545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3546,
                          "end": 3552
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3541,
                        "end": 3552
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3556,
                        "end": 3557
                      },
                      "start": 3541,
                      "end": 3557
                    },
                    "start": 3534,
                    "end": 3558
                  }
                ],
                "start": 3532,
                "end": 3560
              },
              "expression": false,
              "start": 3484,
              "end": 3560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3470,
            "end": 3560
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 3570,
              "end": 3574
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3587,
                        "end": 3598
                      },
                      "typeArguments": null,
                      "start": 3580,
                      "end": 3598
                    },
                    "start": 3578,
                    "end": 3598
                  },
                  "start": 3575,
                  "end": 3598
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3606,
                        "end": 3609
                      },
                      "start": 3606,
                      "end": 3611
                    },
                    "start": 3604,
                    "end": 3611
                  },
                  "start": 3600,
                  "end": 3611
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3620,
                      "end": 3623
                    },
                    "start": 3618,
                    "end": 3623
                  },
                  "start": 3613,
                  "end": 3623
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "start",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3632,
                        "end": 3638
                      },
                      "start": 3630,
                      "end": 3638
                    },
                    "start": 3625,
                    "end": 3638
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3641,
                    "end": 3642
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3625,
                  "end": 3642
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "end",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3649,
                        "end": 3655
                      },
                      "start": 3647,
                      "end": 3655
                    },
                    "start": 3644,
                    "end": 3655
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 3658,
                    "end": 3662
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3644,
                  "end": 3662
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3670,
                          "end": 3674
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fill",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3675,
                          "end": 3679
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3670,
                        "end": 3679
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3685
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3687,
                          "end": 3692
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "end",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3694,
                              "end": 3697
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 3702,
                              "end": 3706
                            },
                            "start": 3694,
                            "end": 3706
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "list",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3709,
                              "end": 3713
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3714,
                              "end": 3720
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3709,
                            "end": 3720
                          },
                          "alternate": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3723,
                            "end": 3726
                          },
                          "start": 3694,
                          "end": 3726
                        }
                      ],
                      "optional": false,
                      "start": 3670,
                      "end": 3727
                    },
                    "directive": null,
                    "start": 3670,
                    "end": 3728
                  }
                ],
                "start": 3664,
                "end": 3732
              },
              "expression": false,
              "start": 3574,
              "end": 3732
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3563,
            "end": 3732
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 3742,
              "end": 3748
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3761,
                        "end": 3772
                      },
                      "typeArguments": null,
                      "start": 3754,
                      "end": 3772
                    },
                    "start": 3752,
                    "end": 3772
                  },
                  "start": 3749,
                  "end": 3772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3777,
                        "end": 3780
                      },
                      "start": 3777,
                      "end": 3782
                    },
                    "start": 3775,
                    "end": 3782
                  },
                  "start": 3774,
                  "end": 3782
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3787,
                        "end": 3790
                      },
                      "start": 3787,
                      "end": 3792
                    },
                    "start": 3785,
                    "end": 3792
                  },
                  "start": 3784,
                  "end": 3792
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3795,
                  "end": 3802
                },
                "start": 3793,
                "end": 3802
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3813,
                          "end": 3814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3815,
                          "end": 3821
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3813,
                        "end": 3821
                      },
                      "operator": "!=",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3825,
                          "end": 3826
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3827,
                          "end": 3833
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3825,
                        "end": 3833
                      },
                      "start": 3813,
                      "end": 3833
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3842,
                        "end": 3847
                      },
                      "start": 3835,
                      "end": 3848
                    },
                    "alternate": null,
                    "start": 3809,
                    "end": 3848
                  },
                  {
                    "type": "ForStatement",
                    "init": {
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
                            "start": 3862,
                            "end": 3863
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 3866,
                            "end": 3867
                          },
                          "definite": false,
                          "start": 3862,
                          "end": 3867
                        }
                      ],
                      "declare": false,
                      "start": 3858,
                      "end": 3867
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3869,
                        "end": 3870
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3873,
                          "end": 3874
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3875,
                          "end": 3881
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3873,
                        "end": 3881
                      },
                      "start": 3869,
                      "end": 3881
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3885,
                        "end": 3886
                      },
                      "start": 3883,
                      "end": 3886
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3900,
                                "end": 3901
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3902,
                                "end": 3903
                              },
                              "optional": false,
                              "computed": true,
                              "start": 3900,
                              "end": 3904
                            },
                            "operator": "!==",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3909,
                                "end": 3910
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3911,
                                "end": 3912
                              },
                              "optional": false,
                              "computed": true,
                              "start": 3909,
                              "end": 3913
                            },
                            "start": 3900,
                            "end": 3913
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 3922,
                              "end": 3927
                            },
                            "start": 3915,
                            "end": 3928
                          },
                          "alternate": null,
                          "start": 3896,
                          "end": 3928
                        }
                      ],
                      "start": 3888,
                      "end": 3934
                    },
                    "start": 3853,
                    "end": 3934
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 3946,
                      "end": 3950
                    },
                    "start": 3939,
                    "end": 3951
                  }
                ],
                "start": 3803,
                "end": 3955
              },
              "expression": false,
              "start": 3748,
              "end": 3955
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3735,
            "end": 3955
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 3965,
              "end": 3970
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3971,
                      "end": 3972
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3971,
                    "end": 3972
                  }
                ],
                "start": 3970,
                "end": 3973
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3986,
                        "end": 3997
                      },
                      "typeArguments": null,
                      "start": 3979,
                      "end": 3997
                    },
                    "start": 3977,
                    "end": 3997
                  },
                  "start": 3974,
                  "end": 3997
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
                          "start": 4002,
                          "end": 4003
                        },
                        "typeArguments": null,
                        "start": 4002,
                        "end": 4003
                      },
                      "start": 4002,
                      "end": 4005
                    },
                    "start": 4000,
                    "end": 4005
                  },
                  "start": 3999,
                  "end": 4005
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4013,
                        "end": 4019
                      },
                      "start": 4011,
                      "end": 4019
                    },
                    "start": 4007,
                    "end": 4019
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4022,
                    "end": 4023
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4007,
                  "end": 4023
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "to",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4029,
                        "end": 4035
                      },
                      "start": 4027,
                      "end": 4035
                    },
                    "start": 4025,
                    "end": 4035
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 4038,
                    "end": 4042
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4025,
                  "end": 4042
                }
              ],
              "returnType": {
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
                      "start": 4045,
                      "end": 4046
                    },
                    "typeArguments": null,
                    "start": 4045,
                    "end": 4046
                  },
                  "start": 4045,
                  "end": 4048
                },
                "start": 4043,
                "end": 4048
              },
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4062,
                          "end": 4063
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4064,
                          "end": 4069
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4062,
                        "end": 4069
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4070,
                          "end": 4074
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "to",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4076,
                              "end": 4078
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 4083,
                              "end": 4087
                            },
                            "start": 4076,
                            "end": 4087
                          },
                          "consequent": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4090,
                            "end": 4099
                          },
                          "alternate": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "to",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4102,
                            "end": 4104
                          },
                          "start": 4076,
                          "end": 4104
                        }
                      ],
                      "optional": false,
                      "start": 4062,
                      "end": 4105
                    },
                    "start": 4055,
                    "end": 4106
                  }
                ],
                "start": 4049,
                "end": 4110
              },
              "expression": false,
              "start": 3970,
              "end": 4110
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3958,
            "end": 4110
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 4120,
              "end": 4126
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4127,
                      "end": 4128
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4127,
                    "end": 4128
                  }
                ],
                "start": 4126,
                "end": 4129
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4142,
                        "end": 4153
                      },
                      "typeArguments": null,
                      "start": 4135,
                      "end": 4153
                    },
                    "start": 4133,
                    "end": 4153
                  },
                  "start": 4130,
                  "end": 4153
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
                          "start": 4158,
                          "end": 4159
                        },
                        "typeArguments": null,
                        "start": 4158,
                        "end": 4159
                      },
                      "start": 4158,
                      "end": 4161
                    },
                    "start": 4156,
                    "end": 4161
                  },
                  "start": 4155,
                  "end": 4161
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4169,
                      "end": 4175
                    },
                    "start": 4167,
                    "end": 4175
                  },
                  "start": 4163,
                  "end": 4175
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4185,
                      "end": 4191
                    },
                    "start": 4183,
                    "end": 4191
                  },
                  "start": 4177,
                  "end": 4191
                }
              ],
              "returnType": {
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
                      "start": 4194,
                      "end": 4195
                    },
                    "typeArguments": null,
                    "start": 4194,
                    "end": 4195
                  },
                  "start": 4194,
                  "end": 4197
                },
                "start": 4192,
                "end": 4197
              },
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4207,
                          "end": 4208
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4209,
                          "end": 4215
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4207,
                        "end": 4215
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4216,
                          "end": 4220
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4222,
                          "end": 4228
                        }
                      ],
                      "optional": false,
                      "start": 4207,
                      "end": 4229
                    },
                    "start": 4200,
                    "end": 4230
                  }
                ],
                "start": 4198,
                "end": 4232
              },
              "expression": false,
              "start": 4126,
              "end": 4232
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4113,
            "end": 4232
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 4242,
              "end": 4246
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4247,
                      "end": 4248
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4247,
                    "end": 4248
                  }
                ],
                "start": 4246,
                "end": 4249
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4262,
                        "end": 4273
                      },
                      "typeArguments": null,
                      "start": 4255,
                      "end": 4273
                    },
                    "start": 4253,
                    "end": 4273
                  },
                  "start": 4250,
                  "end": 4273
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
                          "start": 4278,
                          "end": 4279
                        },
                        "typeArguments": null,
                        "start": 4278,
                        "end": 4279
                      },
                      "start": 4278,
                      "end": 4281
                    },
                    "start": 4276,
                    "end": 4281
                  },
                  "start": 4275,
                  "end": 4281
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compareFn",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4299,
                                "end": 4300
                              },
                              "typeArguments": null,
                              "start": 4299,
                              "end": 4300
                            },
                            "start": 4297,
                            "end": 4300
                          },
                          "start": 4296,
                          "end": 4300
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4305,
                                "end": 4306
                              },
                              "typeArguments": null,
                              "start": 4305,
                              "end": 4306
                            },
                            "start": 4303,
                            "end": 4306
                          },
                          "start": 4302,
                          "end": 4306
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4311,
                          "end": 4317
                        },
                        "start": 4308,
                        "end": 4317
                      },
                      "start": 4295,
                      "end": 4317
                    },
                    "start": 4293,
                    "end": 4317
                  },
                  "start": 4283,
                  "end": 4317
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isPresent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4329,
                        "end": 4338
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compareFn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4339,
                          "end": 4348
                        }
                      ],
                      "optional": false,
                      "start": 4329,
                      "end": 4349
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "l",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4359,
                                "end": 4360
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4361,
                                "end": 4365
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4359,
                              "end": 4365
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "compareFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4366,
                                "end": 4375
                              }
                            ],
                            "optional": false,
                            "start": 4359,
                            "end": 4376
                          },
                          "directive": null,
                          "start": 4359,
                          "end": 4377
                        }
                      ],
                      "start": 4351,
                      "end": 4383
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "l",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4397,
                                "end": 4398
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4399,
                                "end": 4403
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4397,
                              "end": 4403
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 4397,
                            "end": 4405
                          },
                          "directive": null,
                          "start": 4397,
                          "end": 4406
                        }
                      ],
                      "start": 4389,
                      "end": 4412
                    },
                    "start": 4325,
                    "end": 4412
                  }
                ],
                "start": 4319,
                "end": 4416
              },
              "expression": false,
              "start": 4246,
              "end": 4416
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4235,
            "end": 4416
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 4426,
              "end": 4434
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4435,
                      "end": 4436
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4435,
                    "end": 4436
                  }
                ],
                "start": 4434,
                "end": 4437
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4450,
                        "end": 4461
                      },
                      "typeArguments": null,
                      "start": 4443,
                      "end": 4461
                    },
                    "start": 4441,
                    "end": 4461
                  },
                  "start": 4438,
                  "end": 4461
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
                          "start": 4466,
                          "end": 4467
                        },
                        "typeArguments": null,
                        "start": 4466,
                        "end": 4467
                      },
                      "start": 4466,
                      "end": 4469
                    },
                    "start": 4464,
                    "end": 4469
                  },
                  "start": 4463,
                  "end": 4469
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4472,
                  "end": 4478
                },
                "start": 4470,
                "end": 4478
              },
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4488,
                          "end": 4489
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4490,
                          "end": 4498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4488,
                        "end": 4498
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4488,
                      "end": 4500
                    },
                    "start": 4481,
                    "end": 4501
                  }
                ],
                "start": 4479,
                "end": 4503
              },
              "expression": false,
              "start": 4434,
              "end": 4503
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4419,
            "end": 4503
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 4513,
              "end": 4519
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4520,
                      "end": 4521
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4520,
                    "end": 4521
                  }
                ],
                "start": 4519,
                "end": 4522
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4535,
                        "end": 4546
                      },
                      "typeArguments": null,
                      "start": 4528,
                      "end": 4546
                    },
                    "start": 4526,
                    "end": 4546
                  },
                  "start": 4523,
                  "end": 4546
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
                          "start": 4551,
                          "end": 4552
                        },
                        "typeArguments": null,
                        "start": 4551,
                        "end": 4552
                      },
                      "start": 4551,
                      "end": 4554
                    },
                    "start": 4549,
                    "end": 4554
                  },
                  "start": 4548,
                  "end": 4554
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4557,
                  "end": 4563
                },
                "start": 4555,
                "end": 4563
              },
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
                          "name": "JSON",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4573,
                          "end": 4577
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringify",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4578,
                          "end": 4587
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4573,
                        "end": 4587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4588,
                          "end": 4589
                        }
                      ],
                      "optional": false,
                      "start": 4573,
                      "end": 4590
                    },
                    "start": 4566,
                    "end": 4591
                  }
                ],
                "start": 4564,
                "end": 4593
              },
              "expression": false,
              "start": 4519,
              "end": 4593
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4506,
            "end": 4593
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maximum",
              "optional": false,
              "typeAnnotation": null,
              "start": 4604,
              "end": 4611
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4612,
                      "end": 4613
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4612,
                    "end": 4613
                  }
                ],
                "start": 4611,
                "end": 4614
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4627,
                        "end": 4638
                      },
                      "typeArguments": null,
                      "start": 4620,
                      "end": 4638
                    },
                    "start": 4618,
                    "end": 4638
                  },
                  "start": 4615,
                  "end": 4638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
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
                          "start": 4646,
                          "end": 4647
                        },
                        "typeArguments": null,
                        "start": 4646,
                        "end": 4647
                      },
                      "start": 4646,
                      "end": 4649
                    },
                    "start": 4644,
                    "end": 4649
                  },
                  "start": 4640,
                  "end": 4649
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4666,
                                "end": 4667
                              },
                              "typeArguments": null,
                              "start": 4666,
                              "end": 4667
                            },
                            "start": 4664,
                            "end": 4667
                          },
                          "start": 4663,
                          "end": 4667
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4672,
                          "end": 4678
                        },
                        "start": 4669,
                        "end": 4678
                      },
                      "start": 4662,
                      "end": 4678
                    },
                    "start": 4660,
                    "end": 4678
                  },
                  "start": 4651,
                  "end": 4678
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4681,
                    "end": 4682
                  },
                  "typeArguments": null,
                  "start": 4681,
                  "end": 4682
                },
                "start": 4679,
                "end": 4682
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4693,
                          "end": 4697
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4698,
                          "end": 4704
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4693,
                        "end": 4704
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 4708,
                        "end": 4709
                      },
                      "start": 4693,
                      "end": 4709
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 4726,
                            "end": 4730
                          },
                          "start": 4719,
                          "end": 4731
                        }
                      ],
                      "start": 4711,
                      "end": 4737
                    },
                    "alternate": null,
                    "start": 4689,
                    "end": 4737
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
                          "name": "solution",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4756,
                                "end": 4757
                              },
                              "typeArguments": null,
                              "start": 4756,
                              "end": 4757
                            },
                            "start": 4754,
                            "end": 4757
                          },
                          "start": 4746,
                          "end": 4757
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4760,
                          "end": 4764
                        },
                        "definite": false,
                        "start": 4746,
                        "end": 4764
                      }
                    ],
                    "declare": false,
                    "start": 4742,
                    "end": 4765
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
                          "name": "maxValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4774,
                          "end": 4782
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Infinity",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4786,
                            "end": 4794
                          },
                          "prefix": true,
                          "start": 4785,
                          "end": 4794
                        },
                        "definite": false,
                        "start": 4774,
                        "end": 4794
                      }
                    ],
                    "declare": false,
                    "start": 4770,
                    "end": 4795
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4809,
                            "end": 4814
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4817,
                            "end": 4818
                          },
                          "definite": false,
                          "start": 4809,
                          "end": 4818
                        }
                      ],
                      "declare": false,
                      "start": 4805,
                      "end": 4818
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4820,
                        "end": 4825
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4828,
                          "end": 4832
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4833,
                          "end": 4839
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4828,
                        "end": 4839
                      },
                      "start": 4820,
                      "end": 4839
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4841,
                        "end": 4846
                      },
                      "start": 4841,
                      "end": 4848
                    },
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
                                "name": "candidate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4862,
                                "end": 4871
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "list",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4874,
                                  "end": 4878
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4879,
                                  "end": 4884
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4874,
                                "end": 4885
                              },
                              "definite": false,
                              "start": 4862,
                              "end": 4885
                            }
                          ],
                          "declare": false,
                          "start": 4858,
                          "end": 4886
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isBlank",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4897,
                              "end": 4904
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "candidate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4905,
                                "end": 4914
                              }
                            ],
                            "optional": false,
                            "start": 4897,
                            "end": 4915
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 4927,
                                "end": 4936
                              }
                            ],
                            "start": 4917,
                            "end": 4944
                          },
                          "alternate": null,
                          "start": 4893,
                          "end": 4944
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
                                "name": "candidateValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4955,
                                "end": 4969
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "predicate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4972,
                                  "end": 4981
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4982,
                                    "end": 4991
                                  }
                                ],
                                "optional": false,
                                "start": 4972,
                                "end": 4992
                              },
                              "definite": false,
                              "start": 4955,
                              "end": 4992
                            }
                          ],
                          "declare": false,
                          "start": 4951,
                          "end": 4993
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "candidateValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5004,
                              "end": 5018
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "maxValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5021,
                              "end": 5029
                            },
                            "start": 5004,
                            "end": 5029
                          },
                          "consequent": {
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
                                    "name": "solution",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5041,
                                    "end": 5049
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5052,
                                    "end": 5061
                                  },
                                  "start": 5041,
                                  "end": 5061
                                },
                                "directive": null,
                                "start": 5041,
                                "end": 5062
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "maxValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5071,
                                    "end": 5079
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidateValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5082,
                                    "end": 5096
                                  },
                                  "start": 5071,
                                  "end": 5096
                                },
                                "directive": null,
                                "start": 5071,
                                "end": 5097
                              }
                            ],
                            "start": 5031,
                            "end": 5105
                          },
                          "alternate": null,
                          "start": 5000,
                          "end": 5105
                        }
                      ],
                      "start": 4850,
                      "end": 5111
                    },
                    "start": 4800,
                    "end": 5111
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "solution",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5123,
                      "end": 5131
                    },
                    "start": 5116,
                    "end": 5132
                  }
                ],
                "start": 4683,
                "end": 5136
              },
              "expression": false,
              "start": 4611,
              "end": 5136
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4597,
            "end": 5136
          }
        ],
        "start": 1290,
        "end": 5138
      },
      "abstract": false,
      "declare": false,
      "start": 1272,
      "end": 5138
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cloned",
            "optional": false,
            "typeAnnotation": null,
            "start": 5143,
            "end": 5149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 5152,
                "end": 5163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clone",
                "optional": false,
                "typeAnnotation": null,
                "start": 5164,
                "end": 5169
              },
              "optional": false,
              "computed": false,
              "start": 5152,
              "end": 5169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 5170,
                "end": 5181
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5184,
                    "end": 5185
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5186,
                    "end": 5187
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 5188,
                    "end": 5189
                  },
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 5190,
                    "end": 5191
                  }
                ],
                "start": 5183,
                "end": 5192
              }
            ],
            "optional": false,
            "start": 5152,
            "end": 5193
          },
          "definite": false,
          "start": 5143,
          "end": 5193
        }
      ],
      "declare": false,
      "start": 5139,
      "end": 5194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBlank",
        "optional": false,
        "typeAnnotation": null,
        "start": 5212,
        "end": 5219
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 5223,
              "end": 5226
            },
            "start": 5221,
            "end": 5226
          },
          "start": 5220,
          "end": 5226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5229,
          "end": 5236
        },
        "start": 5227,
        "end": 5236
      },
      "body": null,
      "expression": false,
      "start": 5195,
      "end": 5237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isPresent",
        "optional": false,
        "typeAnnotation": null,
        "start": 5255,
        "end": 5264
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5265,
              "end": 5266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5265,
            "end": 5266
          }
        ],
        "start": 5264,
        "end": 5267
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "compareFn",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5284,
                        "end": 5285
                      },
                      "typeArguments": null,
                      "start": 5284,
                      "end": 5285
                    },
                    "start": 5282,
                    "end": 5285
                  },
                  "start": 5281,
                  "end": 5285
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5290,
                        "end": 5291
                      },
                      "typeArguments": null,
                      "start": 5290,
                      "end": 5291
                    },
                    "start": 5288,
                    "end": 5291
                  },
                  "start": 5287,
                  "end": 5291
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5296,
                  "end": 5302
                },
                "start": 5293,
                "end": 5302
              },
              "start": 5280,
              "end": 5302
            },
            "start": 5278,
            "end": 5302
          },
          "start": 5268,
          "end": 5302
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5305,
          "end": 5312
        },
        "start": 5303,
        "end": 5312
      },
      "body": null,
      "expression": false,
      "start": 5238,
      "end": 5313
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 5324,
        "end": 5329
      },
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
              "start": 5330,
              "end": 5331
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5330,
            "end": 5331
          }
        ],
        "start": 5329,
        "end": 5332
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 5336,
              "end": 5340
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSAnyKeyword",
                    "start": 5348,
                    "end": 5351
                  },
                  "start": 5346,
                  "end": 5351
                },
                "start": 5341,
                "end": 5351
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5360,
                    "end": 5366
                  },
                  "start": 5358,
                  "end": 5366
                },
                "start": 5353,
                "end": 5366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5373,
                    "end": 5379
                  },
                  "start": 5371,
                  "end": 5379
                },
                "start": 5368,
                "end": 5379
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5382,
                "end": 5386
              },
              "start": 5380,
              "end": 5386
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5336,
            "end": 5387
          }
        ],
        "start": 5333,
        "end": 5389
      },
      "declare": false,
      "start": 5314,
      "end": 5389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 140,
  "end": 5389
}
```
