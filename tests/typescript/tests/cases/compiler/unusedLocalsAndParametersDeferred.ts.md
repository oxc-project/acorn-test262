__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defered",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
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
              "start": 30,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 31
          }
        ],
        "start": 29,
        "end": 32
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "start": 42,
                    "end": 43
                  },
                  "typeArguments": null,
                  "start": 42,
                  "end": 43
                },
                "start": 39,
                "end": 43
              },
              "start": 36,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "start": 33,
          "end": 43
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
            "start": 46,
            "end": 47
          },
          "typeArguments": null,
          "start": 46,
          "end": 47
        },
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 61,
              "end": 64
            },
            "start": 54,
            "end": 65
          }
        ],
        "start": 48,
        "end": 67
      },
      "expression": false,
      "start": 13,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
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
          "typeAnnotation": null,
          "start": 113,
          "end": 114
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
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 129
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 147
                        },
                        "directive": null,
                        "start": 146,
                        "end": 148
                      }
                    ],
                    "start": 136,
                    "end": 154
                  },
                  "id": null,
                  "generator": false,
                  "start": 130,
                  "end": 154
                }
              ],
              "optional": false,
              "start": 122,
              "end": 155
            },
            "directive": null,
            "start": 122,
            "end": 156
          }
        ],
        "start": 116,
        "end": 158
      },
      "expression": false,
      "start": 102,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          }
        ],
        "optional": false,
        "start": 159,
        "end": 163
      },
      "directive": null,
      "start": 159,
      "end": 164
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
            "name": "fexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 206
          },
          "init": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 235
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 252,
                                "end": 253
                              },
                              "directive": null,
                              "start": 252,
                              "end": 254
                            }
                          ],
                          "start": 242,
                          "end": 260
                        },
                        "id": null,
                        "generator": false,
                        "start": 236,
                        "end": 260
                      }
                    ],
                    "optional": false,
                    "start": 228,
                    "end": 261
                  },
                  "directive": null,
                  "start": 228,
                  "end": 262
                }
              ],
              "start": 222,
              "end": 264
            },
            "expression": false,
            "start": 209,
            "end": 264
          },
          "definite": false,
          "start": 202,
          "end": 264
        }
      ],
      "declare": false,
      "start": 198,
      "end": 265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fexp",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 271,
            "end": 272
          }
        ],
        "optional": false,
        "start": 266,
        "end": 273
      },
      "directive": null,
      "start": 266,
      "end": 274
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
            "name": "farrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 313
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 336
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 353,
                                "end": 354
                              },
                              "directive": null,
                              "start": 353,
                              "end": 355
                            }
                          ],
                          "start": 343,
                          "end": 361
                        },
                        "id": null,
                        "generator": false,
                        "start": 337,
                        "end": 361
                      }
                    ],
                    "optional": false,
                    "start": 329,
                    "end": 362
                  },
                  "directive": null,
                  "start": 329,
                  "end": 363
                }
              ],
              "start": 323,
              "end": 365
            },
            "id": null,
            "generator": false,
            "start": 316,
            "end": 365
          },
          "definite": false,
          "start": 307,
          "end": 365
        }
      ],
      "declare": false,
      "start": 303,
      "end": 366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "farrow",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 373
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 374,
            "end": 375
          }
        ],
        "optional": false,
        "start": 367,
        "end": 376
      },
      "directive": null,
      "start": 367,
      "end": 377
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
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 383,
          "end": 388
        }
      ],
      "declare": false,
      "start": 379,
      "end": 389
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
        "start": 397,
        "end": 398
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 460,
                        "end": 467
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 489
                                },
                                "directive": null,
                                "start": 488,
                                "end": 490
                              }
                            ],
                            "start": 474,
                            "end": 500
                          },
                          "id": null,
                          "generator": false,
                          "start": 468,
                          "end": 500
                        }
                      ],
                      "optional": false,
                      "start": 460,
                      "end": 501
                    },
                    "directive": null,
                    "start": 460,
                    "end": 502
                  }
                ],
                "start": 450,
                "end": 508
              },
              "expression": false,
              "start": 446,
              "end": 508
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 440,
            "end": 508
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 559,
                      "end": 565
                    },
                    "start": 557,
                    "end": 565
                  },
                  "start": 556,
                  "end": 565
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 584
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 605,
                                  "end": 606
                                },
                                "directive": null,
                                "start": 605,
                                "end": 607
                              }
                            ],
                            "start": 591,
                            "end": 617
                          },
                          "id": null,
                          "generator": false,
                          "start": 585,
                          "end": 617
                        }
                      ],
                      "optional": false,
                      "start": 577,
                      "end": 618
                    },
                    "directive": null,
                    "start": 577,
                    "end": 619
                  }
                ],
                "start": 567,
                "end": 625
              },
              "expression": false,
              "start": 555,
              "end": 625
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 550,
            "end": 625
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 663
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 673
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 690,
                          "end": 695
                        },
                        "directive": null,
                        "start": 690,
                        "end": 696
                      }
                    ],
                    "start": 680,
                    "end": 702
                  },
                  "id": null,
                  "generator": false,
                  "start": 674,
                  "end": 702
                }
              ],
              "optional": false,
              "start": 666,
              "end": 703
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 662,
            "end": 704
          }
        ],
        "start": 399,
        "end": 706
      },
      "abstract": false,
      "declare": false,
      "start": 391,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 713
        },
        "typeArguments": null,
        "arguments": [],
        "start": 708,
        "end": 715
      },
      "directive": null,
      "start": 708,
      "end": 716
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
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 727
          },
          "init": null,
          "definite": false,
          "start": 722,
          "end": 727
        }
      ],
      "declare": false,
      "start": 718,
      "end": 728
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 785,
                    "end": 791
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 793
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 812
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 833,
                                        "end": 834
                                      },
                                      "directive": null,
                                      "start": 833,
                                      "end": 835
                                    }
                                  ],
                                  "start": 819,
                                  "end": 845
                                },
                                "id": null,
                                "generator": false,
                                "start": 813,
                                "end": 845
                              }
                            ],
                            "optional": false,
                            "start": 805,
                            "end": 846
                          },
                          "directive": null,
                          "start": 805,
                          "end": 847
                        }
                      ],
                      "start": 795,
                      "end": 853
                    },
                    "expression": false,
                    "start": 791,
                    "end": 853
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 785,
                  "end": 853
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 900
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 904,
                            "end": 910
                          },
                          "start": 902,
                          "end": 910
                        },
                        "start": 901,
                        "end": 910
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 922,
                              "end": 929
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "v",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 950,
                                        "end": 951
                                      },
                                      "directive": null,
                                      "start": 950,
                                      "end": 952
                                    }
                                  ],
                                  "start": 936,
                                  "end": 962
                                },
                                "id": null,
                                "generator": false,
                                "start": 930,
                                "end": 962
                              }
                            ],
                            "optional": false,
                            "start": 922,
                            "end": 963
                          },
                          "directive": null,
                          "start": 922,
                          "end": 964
                        }
                      ],
                      "start": 912,
                      "end": 970
                    },
                    "expression": false,
                    "start": 900,
                    "end": 970
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 895,
                  "end": 970
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1008
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1018
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1035,
                                "end": 1040
                              },
                              "directive": null,
                              "start": 1035,
                              "end": 1041
                            }
                          ],
                          "start": 1025,
                          "end": 1047
                        },
                        "id": null,
                        "generator": false,
                        "start": 1019,
                        "end": 1047
                      }
                    ],
                    "optional": false,
                    "start": 1011,
                    "end": 1048
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1007,
                  "end": 1049
                }
              ],
              "start": 744,
              "end": 1051
            },
            "abstract": false,
            "declare": false,
            "start": 738,
            "end": 1051
          },
          "definite": false,
          "start": 734,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 730,
      "end": 1051
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1057,
          "end": 1058
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1053,
        "end": 1060
      },
      "directive": null,
      "start": 1053,
      "end": 1061
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1069
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1134
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1136
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1148,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1176,
                                      "end": 1177
                                    },
                                    "directive": null,
                                    "start": 1176,
                                    "end": 1178
                                  }
                                ],
                                "start": 1162,
                                "end": 1188
                              },
                              "id": null,
                              "generator": false,
                              "start": 1156,
                              "end": 1188
                            }
                          ],
                          "optional": false,
                          "start": 1148,
                          "end": 1189
                        },
                        "directive": null,
                        "start": 1148,
                        "end": 1190
                      }
                    ],
                    "start": 1138,
                    "end": 1196
                  },
                  "expression": false,
                  "start": 1134,
                  "end": 1196
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1128,
                "end": 1196
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1244
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1248,
                          "end": 1254
                        },
                        "start": 1246,
                        "end": 1254
                      },
                      "start": 1245,
                      "end": 1254
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1266,
                            "end": 1273
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "v",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1294,
                                      "end": 1295
                                    },
                                    "directive": null,
                                    "start": 1294,
                                    "end": 1296
                                  }
                                ],
                                "start": 1280,
                                "end": 1306
                              },
                              "id": null,
                              "generator": false,
                              "start": 1274,
                              "end": 1306
                            }
                          ],
                          "optional": false,
                          "start": 1266,
                          "end": 1307
                        },
                        "directive": null,
                        "start": 1266,
                        "end": 1308
                      }
                    ],
                    "start": 1256,
                    "end": 1314
                  },
                  "expression": false,
                  "start": 1244,
                  "end": 1314
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1239,
                "end": 1314
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
                  "start": 1352,
                  "end": 1353
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defered",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1362
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1379,
                              "end": 1384
                            },
                            "directive": null,
                            "start": 1379,
                            "end": 1385
                          }
                        ],
                        "start": 1369,
                        "end": 1391
                      },
                      "id": null,
                      "generator": false,
                      "start": 1363,
                      "end": 1391
                    }
                  ],
                  "optional": false,
                  "start": 1355,
                  "end": 1392
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1352,
                "end": 1392
              }
            ],
            "start": 1072,
            "end": 1394
          },
          "definite": false,
          "start": 1068,
          "end": 1394
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1398
      },
      "directive": null,
      "start": 1397,
      "end": 1399
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 1435,
              "end": 1436
            },
            "init": null,
            "definite": false,
            "start": 1435,
            "end": 1436
          }
        ],
        "declare": false,
        "start": 1431,
        "end": 1436
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 1440,
        "end": 1441
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1456
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1474
                        },
                        "directive": null,
                        "start": 1473,
                        "end": 1475
                      }
                    ],
                    "start": 1463,
                    "end": 1481
                  },
                  "id": null,
                  "generator": false,
                  "start": 1457,
                  "end": 1481
                }
              ],
              "optional": false,
              "start": 1449,
              "end": 1482
            },
            "directive": null,
            "start": 1449,
            "end": 1483
          }
        ],
        "start": 1443,
        "end": 1485
      },
      "start": 1426,
      "end": 1485
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "start": 1521,
              "end": 1522
            },
            "init": null,
            "definite": false,
            "start": 1521,
            "end": 1522
          }
        ],
        "declare": false,
        "start": 1517,
        "end": 1522
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1527,
            "end": 1528
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1529,
            "end": 1530
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1531,
            "end": 1532
          }
        ],
        "start": 1526,
        "end": 1533
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1548
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1565,
                          "end": 1566
                        },
                        "directive": null,
                        "start": 1565,
                        "end": 1567
                      }
                    ],
                    "start": 1555,
                    "end": 1573
                  },
                  "id": null,
                  "generator": false,
                  "start": 1549,
                  "end": 1573
                }
              ],
              "optional": false,
              "start": 1541,
              "end": 1574
            },
            "directive": null,
            "start": 1541,
            "end": 1575
          }
        ],
        "start": 1535,
        "end": 1577
      },
      "start": 1512,
      "end": 1577
    },
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
              "start": 1610,
              "end": 1611
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1614,
              "end": 1615
            },
            "definite": false,
            "start": 1610,
            "end": 1615
          }
        ],
        "declare": false,
        "start": 1606,
        "end": 1615
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1618
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1621,
          "end": 1623
        },
        "start": 1617,
        "end": 1623
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
          "start": 1625,
          "end": 1626
        },
        "start": 1625,
        "end": 1628
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1643
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1660,
                          "end": 1661
                        },
                        "directive": null,
                        "start": 1660,
                        "end": 1662
                      }
                    ],
                    "start": 1650,
                    "end": 1668
                  },
                  "id": null,
                  "generator": false,
                  "start": 1644,
                  "end": 1668
                }
              ],
              "optional": false,
              "start": 1636,
              "end": 1669
            },
            "directive": null,
            "start": 1636,
            "end": 1670
          }
        ],
        "start": 1630,
        "end": 1672
      },
      "start": 1601,
      "end": 1672
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1704
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1707,
            "end": 1712
          },
          "definite": false,
          "start": 1695,
          "end": 1712
        }
      ],
      "declare": false,
      "start": 1689,
      "end": 1713
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "condition",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1727
      },
      "consequent": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1742
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1745,
                  "end": 1746
                },
                "definite": false,
                "start": 1741,
                "end": 1746
              }
            ],
            "declare": false,
            "start": 1735,
            "end": 1747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1759
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1776,
                          "end": 1777
                        },
                        "directive": null,
                        "start": 1776,
                        "end": 1778
                      }
                    ],
                    "start": 1766,
                    "end": 1784
                  },
                  "id": null,
                  "generator": false,
                  "start": 1760,
                  "end": 1784
                }
              ],
              "optional": false,
              "start": 1752,
              "end": 1785
            },
            "directive": null,
            "start": 1752,
            "end": 1786
          }
        ],
        "start": 1729,
        "end": 1788
      },
      "alternate": null,
      "start": 1714,
      "end": 1788
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1830,
                  "end": 1831
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1834,
                  "end": 1835
                },
                "definite": false,
                "start": 1830,
                "end": 1835
              }
            ],
            "declare": false,
            "start": 1824,
            "end": 1836
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1848
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1865,
                          "end": 1866
                        },
                        "directive": null,
                        "start": 1865,
                        "end": 1867
                      }
                    ],
                    "start": 1855,
                    "end": 1873
                  },
                  "id": null,
                  "generator": false,
                  "start": 1849,
                  "end": 1873
                }
              ],
              "optional": false,
              "start": 1841,
              "end": 1874
            },
            "directive": null,
            "start": 1841,
            "end": 1875
          }
        ],
        "start": 1818,
        "end": 1877
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 1885,
          "end": 1886
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1900,
                    "end": 1901
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1904,
                    "end": 1905
                  },
                  "definite": false,
                  "start": 1900,
                  "end": 1905
                }
              ],
              "declare": false,
              "start": 1894,
              "end": 1906
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defered",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1918
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1935,
                            "end": 1936
                          },
                          "directive": null,
                          "start": 1935,
                          "end": 1937
                        }
                      ],
                      "start": 1925,
                      "end": 1943
                    },
                    "id": null,
                    "generator": false,
                    "start": 1919,
                    "end": 1943
                  }
                ],
                "optional": false,
                "start": 1911,
                "end": 1944
              },
              "directive": null,
              "start": 1911,
              "end": 1945
            }
          ],
          "start": 1888,
          "end": 1947
        },
        "start": 1878,
        "end": 1947
      },
      "finalizer": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1968,
                  "end": 1969
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1972,
                  "end": 1973
                },
                "definite": false,
                "start": 1968,
                "end": 1973
              }
            ],
            "declare": false,
            "start": 1962,
            "end": 1974
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1986
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2003,
                          "end": 2004
                        },
                        "directive": null,
                        "start": 2003,
                        "end": 2005
                      }
                    ],
                    "start": 1993,
                    "end": 2011
                  },
                  "id": null,
                  "generator": false,
                  "start": 1987,
                  "end": 2011
                }
              ],
              "optional": false,
              "start": 1979,
              "end": 2012
            },
            "directive": null,
            "start": 1979,
            "end": 2013
          }
        ],
        "start": 1956,
        "end": 2015
      },
      "start": 1814,
      "end": 2015
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 2046,
        "end": 2047
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "start": 2058,
                  "end": 2059
                },
                "init": null,
                "definite": false,
                "start": 2058,
                "end": 2059
              }
            ],
            "declare": false,
            "start": 2054,
            "end": 2060
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 2065,
                "end": 2072
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2089,
                          "end": 2090
                        },
                        "directive": null,
                        "start": 2089,
                        "end": 2091
                      }
                    ],
                    "start": 2079,
                    "end": 2097
                  },
                  "id": null,
                  "generator": false,
                  "start": 2073,
                  "end": 2097
                }
              ],
              "optional": false,
              "start": 2065,
              "end": 2098
            },
            "directive": null,
            "start": 2065,
            "end": 2099
          }
        ],
        "start": 2048,
        "end": 2101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2036,
      "end": 2101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2103
      },
      "directive": null,
      "start": 2102,
      "end": 2104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2109
}
```
