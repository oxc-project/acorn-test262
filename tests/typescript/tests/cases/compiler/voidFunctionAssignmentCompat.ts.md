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
            "name": "fa",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
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
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 34,
                    "end": 35
                  },
                  "start": 27,
                  "end": 36
                }
              ],
              "start": 25,
              "end": 38
            },
            "expression": false,
            "start": 9,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 41
        },
        "right": {
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
            "start": 55,
            "end": 58
          },
          "expression": false,
          "start": 44,
          "end": 58
        },
        "start": 39,
        "end": 58
      },
      "directive": null,
      "start": 39,
      "end": 58
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
            "name": "fv",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
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
                "type": "TSVoidKeyword",
                "start": 100,
                "end": 104
              },
              "start": 98,
              "end": 104
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 105,
              "end": 107
            },
            "expression": false,
            "start": 88,
            "end": 107
          },
          "definite": false,
          "start": 83,
          "end": 107
        }
      ],
      "declare": false,
      "start": 79,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fv",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 110
        },
        "right": {
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
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 133,
                  "end": 134
                },
                "start": 126,
                "end": 135
              }
            ],
            "start": 124,
            "end": 137
          },
          "expression": false,
          "start": 113,
          "end": 137
        },
        "start": 108,
        "end": 137
      },
      "directive": null,
      "start": 108,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "execAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 185,
                      "end": 188
                    },
                    "start": 184,
                    "end": 188
                  },
                  "start": 181,
                  "end": 188
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 191,
                  "end": 194
                },
                "start": 189,
                "end": 194
              },
              "start": 180,
              "end": 194
            },
            "start": 179,
            "end": 194
          },
          "start": 171,
          "end": 194
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
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 213
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 214,
                  "end": 215
                }
              ],
              "optional": false,
              "start": 205,
              "end": 216
            },
            "start": 198,
            "end": 216
          }
        ],
        "start": 196,
        "end": 218
      },
      "expression": false,
      "start": 154,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "execAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [
          {
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
              "start": 239,
              "end": 241
            },
            "expression": false,
            "start": 227,
            "end": 241
          }
        ],
        "optional": false,
        "start": 219,
        "end": 242
      },
      "directive": null,
      "start": 219,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "execVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 292,
                      "end": 295
                    },
                    "start": 291,
                    "end": 295
                  },
                  "start": 288,
                  "end": 295
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 298,
                  "end": 302
                },
                "start": 296,
                "end": 302
              },
              "start": 287,
              "end": 302
            },
            "start": 286,
            "end": 302
          },
          "start": 278,
          "end": 302
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
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 314
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 315,
                  "end": 316
                }
              ],
              "optional": false,
              "start": 306,
              "end": 317
            },
            "directive": null,
            "start": 306,
            "end": 318
          }
        ],
        "start": 304,
        "end": 320
      },
      "expression": false,
      "start": 260,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "execVoid",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 350,
                    "end": 351
                  },
                  "start": 343,
                  "end": 352
                }
              ],
              "start": 342,
              "end": 353
            },
            "expression": false,
            "start": 330,
            "end": 353
          }
        ],
        "optional": false,
        "start": 321,
        "end": 354
      },
      "directive": null,
      "start": 321,
      "end": 355
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
            "name": "fra",
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 384,
                        "end": 387
                      },
                      "start": 383,
                      "end": 387
                    },
                    "start": 382,
                    "end": 387
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 390,
                    "end": 393
                  },
                  "start": 388,
                  "end": 393
                },
                "start": 381,
                "end": 393
              },
              "start": 379,
              "end": 393
            },
            "start": 376,
            "end": 393
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
                      "start": 428,
                      "end": 430
                    },
                    "expression": false,
                    "start": 416,
                    "end": 430
                  },
                  "start": 409,
                  "end": 431
                }
              ],
              "start": 407,
              "end": 433
            },
            "expression": false,
            "start": 396,
            "end": 433
          },
          "definite": false,
          "start": 376,
          "end": 433
        }
      ],
      "declare": false,
      "start": 372,
      "end": 433
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
            "name": "frv",
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 461,
                        "end": 464
                      },
                      "start": 460,
                      "end": 464
                    },
                    "start": 459,
                    "end": 464
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 467,
                    "end": 471
                  },
                  "start": 465,
                  "end": 471
                },
                "start": 458,
                "end": 471
              },
              "start": 456,
              "end": 471
            },
            "start": 453,
            "end": 471
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
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 515,
                            "end": 516
                          },
                          "start": 508,
                          "end": 517
                        }
                      ],
                      "start": 506,
                      "end": 519
                    },
                    "expression": false,
                    "start": 494,
                    "end": 519
                  },
                  "start": 487,
                  "end": 519
                }
              ],
              "start": 485,
              "end": 521
            },
            "expression": false,
            "start": 474,
            "end": 521
          },
          "definite": false,
          "start": 453,
          "end": 521
        }
      ],
      "declare": false,
      "start": 449,
      "end": 521
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
            "name": "fra3",
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 551,
                        "end": 554
                      },
                      "start": 550,
                      "end": 554
                    },
                    "start": 549,
                    "end": 554
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  },
                  "start": 555,
                  "end": 563
                },
                "start": 548,
                "end": 563
              },
              "start": 546,
              "end": 563
            },
            "start": 542,
            "end": 563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
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
                              "type": "TSStringKeyword",
                              "start": 599,
                              "end": 605
                            },
                            "start": 598,
                            "end": 605
                          },
                          "start": 597,
                          "end": 605
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 615,
                              "end": 616
                            },
                            "start": 608,
                            "end": 617
                          }
                        ],
                        "start": 607,
                        "end": 618
                      },
                      "expression": false,
                      "start": 587,
                      "end": 618
                    },
                    "start": 580,
                    "end": 619
                  }
                ],
                "start": 578,
                "end": 621
              },
              "expression": false,
              "start": 567,
              "end": 621
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 566,
            "end": 624
          },
          "definite": false,
          "start": 542,
          "end": 624
        }
      ],
      "declare": false,
      "start": 538,
      "end": 624
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
            "name": "frv3",
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 653,
                        "end": 656
                      },
                      "start": 652,
                      "end": 656
                    },
                    "start": 651,
                    "end": 656
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  },
                  "start": 657,
                  "end": 665
                },
                "start": 650,
                "end": 665
              },
              "start": 648,
              "end": 665
            },
            "start": 644,
            "end": 665
          },
          "init": {
            "type": "CallExpression",
            "callee": {
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
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 710,
                              "end": 711
                            },
                            "start": 703,
                            "end": 712
                          }
                        ],
                        "start": 701,
                        "end": 714
                      },
                      "expression": false,
                      "start": 689,
                      "end": 714
                    },
                    "start": 682,
                    "end": 714
                  }
                ],
                "start": 680,
                "end": 716
              },
              "expression": false,
              "start": 669,
              "end": 716
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 668,
            "end": 719
          },
          "definite": false,
          "start": 644,
          "end": 719
        }
      ],
      "declare": false,
      "start": 640,
      "end": 719
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 735
}
```
