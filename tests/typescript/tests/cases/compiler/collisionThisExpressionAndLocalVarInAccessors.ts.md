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
        "name": "class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 26,
                "end": 34
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 51
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 68,
                                "end": 75
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 78,
                                    "end": 86
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 119,
                                              "end": 124
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2",
                                              "start": 127,
                                              "end": 128
                                            },
                                            "definite": false,
                                            "start": 119,
                                            "end": 128
                                          }
                                        ],
                                        "declare": false,
                                        "start": 115,
                                        "end": 129
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 153,
                                            "end": 161
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 162,
                                              "end": 166
                                            }
                                          ],
                                          "optional": false,
                                          "start": 153,
                                          "end": 167
                                        },
                                        "start": 146,
                                        "end": 168
                                      }
                                    ],
                                    "start": 97,
                                    "end": 182
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 91,
                                  "end": 182
                                },
                                "id": null,
                                "generator": false,
                                "start": 77,
                                "end": 182
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 68,
                              "end": 182
                            }
                          ],
                          "start": 54,
                          "end": 192
                        },
                        "definite": false,
                        "start": 49,
                        "end": 192
                      }
                    ],
                    "declare": false,
                    "start": 45,
                    "end": 192
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 209,
                      "end": 211
                    },
                    "start": 202,
                    "end": 212
                  }
                ],
                "start": 35,
                "end": 218
              },
              "expression": false,
              "start": 24,
              "end": 218
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 218
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
              "start": 227,
              "end": 228
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
                      "start": 234,
                      "end": 240
                    },
                    "start": 232,
                    "end": 240
                  },
                  "start": 229,
                  "end": 240
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 258
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 275,
                                "end": 282
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 285,
                                    "end": 293
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 326,
                                              "end": 331
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2",
                                              "start": 334,
                                              "end": 335
                                            },
                                            "definite": false,
                                            "start": 326,
                                            "end": 335
                                          }
                                        ],
                                        "declare": false,
                                        "start": 322,
                                        "end": 336
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 360,
                                            "end": 368
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 369,
                                              "end": 373
                                            }
                                          ],
                                          "optional": false,
                                          "start": 360,
                                          "end": 374
                                        },
                                        "start": 353,
                                        "end": 375
                                      }
                                    ],
                                    "start": 304,
                                    "end": 389
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 298,
                                  "end": 389
                                },
                                "id": null,
                                "generator": false,
                                "start": 284,
                                "end": 389
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 275,
                              "end": 389
                            }
                          ],
                          "start": 261,
                          "end": 399
                        },
                        "definite": false,
                        "start": 256,
                        "end": 399
                      }
                    ],
                    "declare": false,
                    "start": 252,
                    "end": 399
                  }
                ],
                "start": 242,
                "end": 406
              },
              "expression": false,
              "start": 228,
              "end": 406
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 223,
            "end": 406
          }
        ],
        "start": 13,
        "end": 408
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 408
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 422
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 438,
                  "end": 444
                },
                "start": 436,
                "end": 444
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
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 464
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 467,
                          "end": 468
                        },
                        "definite": false,
                        "start": 459,
                        "end": 468
                      }
                    ],
                    "declare": false,
                    "start": 455,
                    "end": 469
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 484
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 501,
                                "end": 508
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 511,
                                    "end": 519
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 555,
                                            "end": 563
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 564,
                                              "end": 568
                                            }
                                          ],
                                          "optional": false,
                                          "start": 555,
                                          "end": 569
                                        },
                                        "start": 548,
                                        "end": 570
                                      }
                                    ],
                                    "start": 530,
                                    "end": 584
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 524,
                                  "end": 584
                                },
                                "id": null,
                                "generator": false,
                                "start": 510,
                                "end": 584
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 501,
                              "end": 584
                            }
                          ],
                          "start": 487,
                          "end": 594
                        },
                        "definite": false,
                        "start": 482,
                        "end": 594
                      }
                    ],
                    "declare": false,
                    "start": 478,
                    "end": 594
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 611,
                      "end": 613
                    },
                    "start": 604,
                    "end": 614
                  }
                ],
                "start": 445,
                "end": 620
              },
              "expression": false,
              "start": 434,
              "end": 620
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 429,
            "end": 620
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
              "start": 629,
              "end": 630
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
                      "start": 636,
                      "end": 642
                    },
                    "start": 634,
                    "end": 642
                  },
                  "start": 631,
                  "end": 642
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
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 663
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 666,
                          "end": 667
                        },
                        "definite": false,
                        "start": 658,
                        "end": 667
                      }
                    ],
                    "declare": false,
                    "start": 654,
                    "end": 668
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 681,
                          "end": 683
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 700,
                                "end": 707
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 710,
                                    "end": 718
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 754,
                                            "end": 762
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 763,
                                              "end": 767
                                            }
                                          ],
                                          "optional": false,
                                          "start": 754,
                                          "end": 768
                                        },
                                        "start": 747,
                                        "end": 769
                                      }
                                    ],
                                    "start": 729,
                                    "end": 783
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 723,
                                  "end": 783
                                },
                                "id": null,
                                "generator": false,
                                "start": 709,
                                "end": 783
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 700,
                              "end": 783
                            }
                          ],
                          "start": 686,
                          "end": 793
                        },
                        "definite": false,
                        "start": 681,
                        "end": 793
                      }
                    ],
                    "declare": false,
                    "start": 677,
                    "end": 793
                  }
                ],
                "start": 644,
                "end": 800
              },
              "expression": false,
              "start": 630,
              "end": 800
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 625,
            "end": 800
          }
        ],
        "start": 423,
        "end": 802
      },
      "abstract": false,
      "declare": false,
      "start": 410,
      "end": 802
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 802
}
```
