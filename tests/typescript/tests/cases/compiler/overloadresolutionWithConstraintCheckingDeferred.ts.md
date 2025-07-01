__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 12,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 34
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 30,
        "end": 38
      },
      "declare": false,
      "start": 18,
      "end": 38
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 54
          }
        ],
        "start": 51,
        "end": 56
      },
      "declare": false,
      "start": 39,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 69,
        "end": 74
      },
      "declare": false,
      "start": 57,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
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
              "start": 84,
              "end": 85
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "typeArguments": null,
              "start": 94,
              "end": 95
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 95
          }
        ],
        "start": 83,
        "end": 96
      },
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
              "start": 103,
              "end": 114
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
                        "start": 118,
                        "end": 119
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 119
                    },
                    "start": 116,
                    "end": 119
                  },
                  "start": 115,
                  "end": 119
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 121,
                "end": 124
              },
              "expression": false,
              "start": 114,
              "end": 124
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 124
          }
        ],
        "start": 97,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 126
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 159
                    },
                    "start": 156,
                    "end": 159
                  },
                  "start": 155,
                  "end": 159
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 164,
                  "end": 170
                },
                "start": 161,
                "end": 170
              },
              "start": 154,
              "end": 170
            },
            "start": 152,
            "end": 170
          },
          "start": 149,
          "end": 170
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 173,
          "end": 179
        },
        "start": 171,
        "end": 179
      },
      "body": null,
      "expression": false,
      "start": 128,
      "end": 180
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 212
                    },
                    "start": 209,
                    "end": 212
                  },
                  "start": 208,
                  "end": 212
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 217,
                  "end": 220
                },
                "start": 214,
                "end": 220
              },
              "start": 207,
              "end": 220
            },
            "start": 205,
            "end": 220
          },
          "start": 202,
          "end": 220
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 223,
          "end": 229
        },
        "start": 221,
        "end": 229
      },
      "body": null,
      "expression": false,
      "start": 181,
      "end": 230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 262
                      },
                      "typeArguments": null,
                      "start": 261,
                      "end": 262
                    },
                    "start": 259,
                    "end": 262
                  },
                  "start": 258,
                  "end": 262
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 267,
                  "end": 270
                },
                "start": 264,
                "end": 270
              },
              "start": 257,
              "end": 270
            },
            "start": 255,
            "end": 270
          },
          "start": 252,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 273,
          "end": 279
        },
        "start": 271,
        "end": 279
      },
      "body": null,
      "expression": false,
      "start": 231,
      "end": 280
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 294,
                "end": 300
              },
              "start": 292,
              "end": 300
            },
            "start": 286,
            "end": 300
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 306
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 308
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    }
                  ],
                  "start": 312,
                  "end": 320
                },
                "id": null,
                "generator": false,
                "start": 307,
                "end": 320
              }
            ],
            "optional": false,
            "start": 303,
            "end": 321
          },
          "definite": false,
          "start": 286,
          "end": 321
        }
      ],
      "declare": false,
      "start": 282,
      "end": 322
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 399,
                "end": 405
              },
              "start": 397,
              "end": 405
            },
            "start": 390,
            "end": 405
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 411
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 413
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 430,
                          "end": 431
                        },
                        "typeArguments": null,
                        "start": 423,
                        "end": 431
                      }
                    ],
                    "start": 422,
                    "end": 432
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    }
                  ],
                  "start": 417,
                  "end": 435
                },
                "id": null,
                "generator": false,
                "start": 412,
                "end": 435
              }
            ],
            "optional": false,
            "start": 408,
            "end": 436
          },
          "definite": false,
          "start": 390,
          "end": 436
        }
      ],
      "declare": false,
      "start": 386,
      "end": 437
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "start": 505,
            "end": 520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 526
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 528
                  }
                ],
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 561,
                                  "end": 562
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 570,
                                        "end": 571
                                      },
                                      "typeArguments": null,
                                      "start": 563,
                                      "end": 571
                                    }
                                  ],
                                  "start": 562,
                                  "end": 572
                                },
                                "start": 561,
                                "end": 572
                              },
                              "start": 559,
                              "end": 572
                            },
                            "start": 558,
                            "end": 572
                          },
                          "init": null,
                          "definite": false,
                          "start": 558,
                          "end": 572
                        }
                      ],
                      "declare": false,
                      "start": 554,
                      "end": 573
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "start": 673,
                      "end": 682
                    }
                  ],
                  "start": 532,
                  "end": 684
                },
                "id": null,
                "generator": false,
                "start": 527,
                "end": 684
              }
            ],
            "optional": false,
            "start": 523,
            "end": 685
          },
          "definite": false,
          "start": 505,
          "end": 685
        }
      ],
      "declare": false,
      "start": 501,
      "end": 686
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 686
}
```
