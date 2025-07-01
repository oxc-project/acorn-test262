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
        "name": "CharacterInfo",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 58
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
              "name": "isDecimalDigit",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 93
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  "start": 94,
                  "end": 103
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 106,
                  "end": 113
                },
                "start": 104,
                "end": 113
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "operator": ">=",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 153
                          },
                          "optional": false,
                          "computed": false,
                          "start": 136,
                          "end": 153
                        },
                        "start": 131,
                        "end": 153
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 158
                        },
                        "operator": "<=",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 176
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_9",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 179
                          },
                          "optional": false,
                          "computed": false,
                          "start": 162,
                          "end": 179
                        },
                        "start": 157,
                        "end": 179
                      },
                      "start": 131,
                      "end": 179
                    },
                    "start": 124,
                    "end": 180
                  }
                ],
                "start": 114,
                "end": 186
              },
              "expression": false,
              "start": 93,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 65,
            "end": 186
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isHexDigit",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 216
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 220,
                      "end": 226
                    },
                    "start": 218,
                    "end": 226
                  },
                  "start": 217,
                  "end": 226
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 229,
                  "end": 236
                },
                "start": 227,
                "end": 236
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isDecimalDigit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 268
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 270
                            }
                          ],
                          "optional": false,
                          "start": 254,
                          "end": 271
                        },
                        "operator": "||",
                        "right": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 291,
                              "end": 292
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 310
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 311,
                                "end": 312
                              },
                              "optional": false,
                              "computed": false,
                              "start": 296,
                              "end": 312
                            },
                            "start": 291,
                            "end": 312
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 316,
                              "end": 317
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 321,
                                "end": 335
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 336,
                                "end": 337
                              },
                              "optional": false,
                              "computed": false,
                              "start": 321,
                              "end": 337
                            },
                            "start": 316,
                            "end": 337
                          },
                          "start": 291,
                          "end": 337
                        },
                        "start": 254,
                        "end": 338
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 358,
                            "end": 359
                          },
                          "operator": ">=",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 377
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 379
                            },
                            "optional": false,
                            "computed": false,
                            "start": 363,
                            "end": 379
                          },
                          "start": 358,
                          "end": 379
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 384
                          },
                          "operator": "<=",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 402
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 403,
                              "end": 404
                            },
                            "optional": false,
                            "computed": false,
                            "start": 388,
                            "end": 404
                          },
                          "start": 383,
                          "end": 404
                        },
                        "start": 358,
                        "end": 404
                      },
                      "start": 254,
                      "end": 405
                    },
                    "start": 247,
                    "end": 406
                  }
                ],
                "start": 237,
                "end": 412
              },
              "expression": false,
              "start": 216,
              "end": 412
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 192,
            "end": 412
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hexValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 440
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 444,
                      "end": 450
                    },
                    "start": 442,
                    "end": 450
                  },
                  "start": 441,
                  "end": 450
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 453,
                  "end": 459
                },
                "start": 451,
                "end": 459
              },
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
                          "name": "Debug",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 470,
                          "end": 475
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 482
                        },
                        "optional": false,
                        "computed": false,
                        "start": 470,
                        "end": 482
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isHexDigit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 493
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 495
                            }
                          ],
                          "optional": false,
                          "start": 483,
                          "end": 496
                        }
                      ],
                      "optional": false,
                      "start": 470,
                      "end": 497
                    },
                    "directive": null,
                    "start": 470,
                    "end": 498
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isDecimalDigit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 528
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 530
                          }
                        ],
                        "optional": false,
                        "start": 514,
                        "end": 531
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 548
                        },
                        "operator": "-",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 565
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 568
                          },
                          "optional": false,
                          "computed": false,
                          "start": 551,
                          "end": 568
                        },
                        "start": 547,
                        "end": 568
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 586
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 590,
                                "end": 604
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 605,
                                "end": 606
                              },
                              "optional": false,
                              "computed": false,
                              "start": 590,
                              "end": 606
                            },
                            "start": 585,
                            "end": 606
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 611
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 615,
                                "end": 629
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 631
                              },
                              "optional": false,
                              "computed": false,
                              "start": 615,
                              "end": 631
                            },
                            "start": 610,
                            "end": 631
                          },
                          "start": 585,
                          "end": 631
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 651,
                              "end": 652
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 655,
                                "end": 669
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 670,
                                "end": 671
                              },
                              "optional": false,
                              "computed": false,
                              "start": 655,
                              "end": 671
                            },
                            "start": 651,
                            "end": 671
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 674,
                            "end": 676
                          },
                          "start": 651,
                          "end": 676
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 695,
                              "end": 696
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 699,
                                "end": 713
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 714,
                                "end": 715
                              },
                              "optional": false,
                              "computed": false,
                              "start": 699,
                              "end": 715
                            },
                            "start": 695,
                            "end": 715
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 718,
                            "end": 720
                          },
                          "start": 695,
                          "end": 720
                        },
                        "start": 584,
                        "end": 720
                      },
                      "start": 514,
                      "end": 720
                    },
                    "start": 507,
                    "end": 721
                  }
                ],
                "start": 460,
                "end": 727
              },
              "expression": false,
              "start": 440,
              "end": 727
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 418,
            "end": 727
          }
        ],
        "start": 59,
        "end": 729
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 729
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 730
}
```
