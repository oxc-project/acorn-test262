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
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "definite": false,
                "start": 26,
                "end": 31
              }
            ],
            "declare": false,
            "start": 22,
            "end": 32
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "init": null,
                "definite": false,
                "start": 41,
                "end": 42
              }
            ],
            "declare": false,
            "start": 37,
            "end": 43
          }
        ],
        "start": 16,
        "end": 45
      },
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 60
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "id": null,
                  "generator": false,
                  "start": 77,
                  "end": 84
                },
                "definite": false,
                "start": 73,
                "end": 84
              }
            ],
            "declare": false,
            "start": 69,
            "end": 85
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 95
              }
            ],
            "declare": false,
            "start": 90,
            "end": 96
          }
        ],
        "start": 63,
        "end": 98
      },
      "expression": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "init": {
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "start": 144,
                        "end": 153
                      }
                    ],
                    "start": 142,
                    "end": 155
                  },
                  "expression": false,
                  "start": 130,
                  "end": 155
                },
                "definite": false,
                "start": 126,
                "end": 155
              }
            ],
            "declare": false,
            "start": 122,
            "end": 155
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "init": null,
                "definite": false,
                "start": 164,
                "end": 165
              }
            ],
            "declare": false,
            "start": 160,
            "end": 166
          }
        ],
        "start": 116,
        "end": 168
      },
      "expression": false,
      "start": 100,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 183
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 224
                          },
                          "start": 216,
                          "end": 225
                        }
                      ],
                      "start": 214,
                      "end": 226
                    },
                    "expression": false,
                    "start": 211,
                    "end": 226
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 210,
                  "end": 226
                }
              ],
              "start": 200,
              "end": 232
            },
            "abstract": false,
            "declare": false,
            "start": 192,
            "end": 232
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 242
                },
                "init": null,
                "definite": false,
                "start": 241,
                "end": 242
              }
            ],
            "declare": false,
            "start": 237,
            "end": 243
          }
        ],
        "start": 186,
        "end": 245
      },
      "expression": false,
      "start": 170,
      "end": 245
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 260
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
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
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
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 294
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 306,
                                  "end": 307
                                },
                                "start": 299,
                                "end": 308
                              }
                            ],
                            "start": 297,
                            "end": 310
                          },
                          "expression": false,
                          "start": 294,
                          "end": 310
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 293,
                        "end": 310
                      }
                    ],
                    "start": 283,
                    "end": 316
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 277,
                  "end": 316
                },
                "definite": false,
                "start": 273,
                "end": 316
              }
            ],
            "declare": false,
            "start": 269,
            "end": 317
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 327
              }
            ],
            "declare": false,
            "start": 322,
            "end": 328
          }
        ],
        "start": 263,
        "end": 330
      },
      "expression": false,
      "start": 247,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 345
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 359
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "id": null,
                  "generator": false,
                  "start": 362,
                  "end": 369
                },
                "definite": false,
                "start": 358,
                "end": 369
              }
            ],
            "declare": false,
            "start": 354,
            "end": 370
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
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 390
                  },
                  "id": null,
                  "generator": false,
                  "start": 383,
                  "end": 390
                },
                "definite": false,
                "start": 379,
                "end": 390
              }
            ],
            "declare": false,
            "start": 375,
            "end": 391
          }
        ],
        "start": 348,
        "end": 393
      },
      "expression": false,
      "start": 332,
      "end": 393
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "start": 440,
                  "end": 449
                }
              ],
              "start": 430,
              "end": 455
            },
            "expression": false,
            "start": 417,
            "end": 455
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 465
                },
                "init": null,
                "definite": false,
                "start": 464,
                "end": 465
              }
            ],
            "declare": false,
            "start": 460,
            "end": 466
          }
        ],
        "start": 411,
        "end": 468
      },
      "expression": false,
      "start": 395,
      "end": 468
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 483
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 515
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 510,
                  "end": 516
                }
              ],
              "start": 500,
              "end": 522
            },
            "abstract": false,
            "declare": false,
            "start": 492,
            "end": 522
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 532
                },
                "init": null,
                "definite": false,
                "start": 531,
                "end": 532
              }
            ],
            "declare": false,
            "start": 527,
            "end": 533
          }
        ],
        "start": 486,
        "end": 535
      },
      "expression": false,
      "start": 470,
      "end": 535
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 550
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
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 564
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
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 583,
                          "end": 584
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 588
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 583,
                        "end": 589
                      }
                    ],
                    "start": 573,
                    "end": 595
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 567,
                  "end": 595
                },
                "definite": false,
                "start": 563,
                "end": 595
              }
            ],
            "declare": false,
            "start": 559,
            "end": 595
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "init": null,
                "definite": false,
                "start": 604,
                "end": 605
              }
            ],
            "declare": false,
            "start": 600,
            "end": 606
          }
        ],
        "start": 553,
        "end": 608
      },
      "expression": false,
      "start": 537,
      "end": 608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 623
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
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 637
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
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 663,
                          "end": 664
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 667,
                          "end": 668
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 656,
                        "end": 669
                      }
                    ],
                    "start": 646,
                    "end": 675
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 640,
                  "end": 675
                },
                "definite": false,
                "start": 636,
                "end": 675
              }
            ],
            "declare": false,
            "start": 632,
            "end": 675
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 685
                },
                "init": null,
                "definite": false,
                "start": 684,
                "end": 685
              }
            ],
            "declare": false,
            "start": 680,
            "end": 686
          }
        ],
        "start": 626,
        "end": 688
      },
      "expression": false,
      "start": 610,
      "end": 688
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 704
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 720
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 739
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 731,
                  "end": 744
                }
              ],
              "start": 721,
              "end": 750
            },
            "abstract": false,
            "declare": false,
            "start": 713,
            "end": 750
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "init": null,
                "definite": false,
                "start": 759,
                "end": 760
              }
            ],
            "declare": false,
            "start": 755,
            "end": 761
          }
        ],
        "start": 707,
        "end": 763
      },
      "expression": false,
      "start": 690,
      "end": 763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 779
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 798
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
                        "typeAnnotation": null,
                        "start": 816,
                        "end": 817
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
                              "type": "PropertyDefinition",
                              "decorators": [],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 847,
                                "end": 848
                              },
                              "typeAnnotation": null,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 851,
                                "end": 852
                              },
                              "computed": false,
                              "static": true,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 840,
                              "end": 853
                            }
                          ],
                          "start": 826,
                          "end": 863
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 820,
                        "end": 863
                      },
                      "definite": false,
                      "start": 816,
                      "end": 863
                    }
                  ],
                  "declare": false,
                  "start": 812,
                  "end": 863
                }
              ],
              "start": 802,
              "end": 869
            },
            "expression": false,
            "start": 788,
            "end": 869
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 879
                },
                "init": null,
                "definite": false,
                "start": 878,
                "end": 879
              }
            ],
            "declare": false,
            "start": 874,
            "end": 880
          }
        ],
        "start": 782,
        "end": 882
      },
      "expression": false,
      "start": 765,
      "end": 882
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 898
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
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
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 936
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
                              "type": "PropertyDefinition",
                              "decorators": [],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 959,
                                "end": 960
                              },
                              "typeAnnotation": null,
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 959,
                              "end": 961
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
                                "start": 974,
                                "end": 985
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
                                            "type": "ThisExpression",
                                            "start": 1006,
                                            "end": 1010
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1011,
                                            "end": 1012
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1006,
                                          "end": 1012
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1015,
                                          "end": 1016
                                        },
                                        "start": 1006,
                                        "end": 1016
                                      },
                                      "directive": null,
                                      "start": 1006,
                                      "end": 1017
                                    }
                                  ],
                                  "start": 988,
                                  "end": 1031
                                },
                                "expression": false,
                                "start": 985,
                                "end": 1031
                              },
                              "kind": "constructor",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": null,
                              "start": 974,
                              "end": 1031
                            }
                          ],
                          "start": 945,
                          "end": 1041
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 939,
                        "end": 1041
                      },
                      "definite": false,
                      "start": 935,
                      "end": 1041
                    }
                  ],
                  "declare": false,
                  "start": 931,
                  "end": 1041
                }
              ],
              "start": 921,
              "end": 1047
            },
            "expression": false,
            "start": 907,
            "end": 1047
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1057
                },
                "init": null,
                "definite": false,
                "start": 1056,
                "end": 1057
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1058
          }
        ],
        "start": 901,
        "end": 1060
      },
      "expression": false,
      "start": 884,
      "end": 1060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1076
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1107,
                        "end": 1108
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1120,
                                "end": 1121
                              },
                              "start": 1113,
                              "end": 1121
                            }
                          ],
                          "start": 1111,
                          "end": 1123
                        },
                        "expression": false,
                        "start": 1108,
                        "end": 1123
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1103,
                      "end": 1123
                    }
                  ],
                  "start": 1093,
                  "end": 1130
                },
                "definite": false,
                "start": 1089,
                "end": 1130
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1130
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1140
                },
                "init": null,
                "definite": false,
                "start": 1139,
                "end": 1140
              }
            ],
            "declare": false,
            "start": 1135,
            "end": 1140
          }
        ],
        "start": 1079,
        "end": 1142
      },
      "expression": false,
      "start": 1062,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1158
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1172
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1185,
                        "end": 1186
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1188,
                        "end": 1189
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1185,
                      "end": 1189
                    }
                  ],
                  "start": 1175,
                  "end": 1196
                },
                "definite": false,
                "start": 1171,
                "end": 1196
              }
            ],
            "declare": false,
            "start": 1167,
            "end": 1196
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1206
                },
                "init": null,
                "definite": false,
                "start": 1205,
                "end": 1206
              }
            ],
            "declare": false,
            "start": 1201,
            "end": 1206
          }
        ],
        "start": 1161,
        "end": 1208
      },
      "expression": false,
      "start": 1144,
      "end": 1208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1224
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1309,
                      "end": 1310
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1320,
                      "end": 1321
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1328
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1337,
                            "end": 1343
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1345,
                            "end": 1351
                          }
                        ],
                        "start": 1336,
                        "end": 1352
                      },
                      "start": 1334,
                      "end": 1352
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1373,
                                    "end": 1380
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1381,
                                    "end": 1384
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1373,
                                  "end": 1384
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1385,
                                    "end": 1386
                                  }
                                ],
                                "optional": false,
                                "start": 1373,
                                "end": 1387
                              },
                              "id": null,
                              "generator": false,
                              "start": 1367,
                              "end": 1387
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1366,
                            "end": 1390
                          },
                          "directive": null,
                          "start": 1366,
                          "end": 1391
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
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1417,
                                "end": 1424
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1425,
                                "end": 1428
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1417,
                              "end": 1428
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1429,
                                "end": 1430
                              }
                            ],
                            "optional": false,
                            "start": 1417,
                            "end": 1431
                          },
                          "directive": null,
                          "start": 1417,
                          "end": 1432
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1474,
                                "end": 1475
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1484,
                                  "end": 1485
                                },
                                "id": null,
                                "generator": false,
                                "start": 1478,
                                "end": 1485
                              },
                              "definite": false,
                              "start": 1474,
                              "end": 1485
                            }
                          ],
                          "declare": false,
                          "start": 1468,
                          "end": 1486
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1540,
                                "end": 1541
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1555,
                                "end": 1556
                              }
                            ],
                            "start": 1526,
                            "end": 1567
                          },
                          "start": 1519,
                          "end": 1568
                        }
                      ],
                      "start": 1356,
                      "end": 1574
                    },
                    "id": null,
                    "generator": false,
                    "start": 1332,
                    "end": 1574
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1331,
                  "end": 1577
                },
                "definite": false,
                "start": 1299,
                "end": 1577
              }
            ],
            "declare": false,
            "start": 1293,
            "end": 1578
          }
        ],
        "start": 1227,
        "end": 1584
      },
      "expression": false,
      "start": 1210,
      "end": 1584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1600
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1615
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1616
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1627
                    },
                    "id": null,
                    "generator": false,
                    "start": 1620,
                    "end": 1627
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1619,
                  "end": 1630
                },
                "definite": false,
                "start": 1613,
                "end": 1630
              }
            ],
            "declare": false,
            "start": 1609,
            "end": 1631
          }
        ],
        "start": 1603,
        "end": 1633
      },
      "expression": false,
      "start": 1586,
      "end": 1633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1649
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1671
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
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
                            "name": "promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1697,
                            "end": 1704
                          },
                          "directive": null,
                          "start": 1697,
                          "end": 1704
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1716
                          },
                          "directive": null,
                          "start": 1713,
                          "end": 1716
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 1731,
                              "end": 1735
                            },
                            "start": 1725,
                            "end": 1735
                          },
                          "directive": null,
                          "start": 1725,
                          "end": 1735
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1744,
                            "end": 1751
                          },
                          "directive": null,
                          "start": 1744,
                          "end": 1751
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1760,
                            "end": 1763
                          },
                          "directive": null,
                          "start": 1760,
                          "end": 1763
                        }
                      ],
                      "start": 1687,
                      "end": 1769
                    },
                    "id": null,
                    "generator": false,
                    "start": 1675,
                    "end": 1769
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1674,
                  "end": 1772
                },
                "definite": false,
                "start": 1664,
                "end": 1772
              }
            ],
            "declare": false,
            "start": 1658,
            "end": 1772
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1787
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1790,
                  "end": 1791
                },
                "definite": false,
                "start": 1784,
                "end": 1791
              }
            ],
            "declare": false,
            "start": 1778,
            "end": 1792
          }
        ],
        "start": 1652,
        "end": 1794
      },
      "expression": false,
      "start": 1635,
      "end": 1794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapI1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1815,
        "end": 1821
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "FunctionExpression",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1854,
                      "end": 1857
                    },
                    "generator": true,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1870,
                            "end": 1874
                          },
                          "directive": null,
                          "start": 1870,
                          "end": 1875
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1890,
                              "end": 1891
                            },
                            "start": 1884,
                            "end": 1891
                          },
                          "directive": null,
                          "start": 1884,
                          "end": 1892
                        }
                      ],
                      "start": 1860,
                      "end": 1898
                    },
                    "expression": false,
                    "start": 1844,
                    "end": 1898
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1843,
                  "end": 1901
                },
                "definite": false,
                "start": 1836,
                "end": 1901
              }
            ],
            "declare": false,
            "start": 1830,
            "end": 1902
          }
        ],
        "start": 1824,
        "end": 1904
      },
      "expression": false,
      "start": 1806,
      "end": 1904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapI2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1921
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1940
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "FunctionExpression",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1960,
                      "end": 1963
                    },
                    "generator": true,
                    "async": true,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1976,
                            "end": 1980
                          },
                          "directive": null,
                          "start": 1976,
                          "end": 1981
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1996,
                              "end": 1997
                            },
                            "start": 1990,
                            "end": 1997
                          },
                          "directive": null,
                          "start": 1990,
                          "end": 1998
                        }
                      ],
                      "start": 1966,
                      "end": 2004
                    },
                    "expression": false,
                    "start": 1944,
                    "end": 2004
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1943,
                  "end": 2007
                },
                "definite": false,
                "start": 1936,
                "end": 2007
              }
            ],
            "declare": false,
            "start": 1930,
            "end": 2008
          }
        ],
        "start": 1924,
        "end": 2010
      },
      "expression": false,
      "start": 1906,
      "end": 2010
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2021,
        "end": 2026
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2039,
                  "end": 2040
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2054
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2055,
                        "end": 2058
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2050,
                      "end": 2058
                    },
                    "id": null,
                    "generator": false,
                    "start": 2044,
                    "end": 2058
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2043,
                  "end": 2061
                },
                "definite": false,
                "start": 2039,
                "end": 2061
              }
            ],
            "declare": false,
            "start": 2035,
            "end": 2062
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 2072,
              "end": 2076
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2087,
                    "end": 2089
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2092,
                    "end": 2093
                  },
                  "computed": false,
                  "start": 2087,
                  "end": 2093
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2103,
                    "end": 2106
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2109,
                    "end": 2110
                  },
                  "computed": false,
                  "start": 2103,
                  "end": 2110
                }
              ],
              "start": 2077,
              "end": 2117
            },
            "const": false,
            "declare": false,
            "start": 2067,
            "end": 2117
          }
        ],
        "start": 2029,
        "end": 2119
      },
      "expression": false,
      "start": 2012,
      "end": 2119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2119
}
```
