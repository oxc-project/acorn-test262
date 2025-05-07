__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 730,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 729,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 729,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 186,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 93,
              "decorators": [],
              "name": "isDecimalDigit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 124,
                    "end": 180,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 131,
                      "end": 179,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 131,
                        "end": 153,
                        "operator": ">=",
                        "left": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 136,
                          "end": 153,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 150,
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 153,
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 157,
                        "end": 179,
                        "operator": "<=",
                        "left": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 162,
                          "end": 179,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 176,
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 179,
                            "decorators": [],
                            "name": "_9",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 94,
                  "end": 103,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 106,
                  "end": 113
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 412,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 216,
              "decorators": [],
              "name": "isHexDigit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 412,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 237,
                "end": 412,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 247,
                    "end": 406,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 254,
                      "end": 405,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 254,
                        "end": 338,
                        "operator": "||",
                        "left": {
                          "type": "CallExpression",
                          "start": 254,
                          "end": 271,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 269,
                              "end": 270,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 268,
                            "decorators": [],
                            "name": "isDecimalDigit",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "start": 291,
                          "end": 337,
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 291,
                            "end": 312,
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 296,
                              "end": 312,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 310,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 312,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 316,
                            "end": 337,
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "start": 316,
                              "end": 317,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 321,
                              "end": 337,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 321,
                                "end": 335,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 336,
                                "end": 337,
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 358,
                        "end": 404,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 358,
                          "end": 379,
                          "operator": ">=",
                          "left": {
                            "type": "Identifier",
                            "start": 358,
                            "end": 359,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 363,
                            "end": 379,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 377,
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 379,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 383,
                          "end": 404,
                          "operator": "<=",
                          "left": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 384,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 388,
                            "end": 404,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 402,
                              "decorators": [],
                              "name": "CharacterCodes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 226,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 220,
                      "end": 226
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 229,
                  "end": 236
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 727,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 440,
              "decorators": [],
              "name": "hexValue",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 440,
              "end": 727,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 460,
                "end": 727,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 498,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 470,
                      "end": 497,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 483,
                          "end": 496,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 494,
                              "end": 495,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 493,
                            "decorators": [],
                            "name": "isHexDigit",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 470,
                        "end": 482,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 475,
                          "decorators": [],
                          "name": "Debug",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 482,
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 507,
                    "end": 721,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 514,
                      "end": 720,
                      "alternate": {
                        "type": "ConditionalExpression",
                        "start": 584,
                        "end": 720,
                        "alternate": {
                          "type": "BinaryExpression",
                          "start": 695,
                          "end": 720,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 695,
                            "end": 715,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 695,
                              "end": 696,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 699,
                              "end": 715,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 699,
                                "end": 713,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 714,
                                "end": 715,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 718,
                            "end": 720,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "start": 651,
                          "end": 676,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 651,
                            "end": 671,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 651,
                              "end": 652,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 655,
                              "end": 671,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 655,
                                "end": 669,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 670,
                                "end": 671,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 674,
                            "end": 676,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 585,
                          "end": 631,
                          "operator": "&&",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 585,
                            "end": 606,
                            "operator": ">=",
                            "left": {
                              "type": "Identifier",
                              "start": 585,
                              "end": 586,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 590,
                              "end": 606,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 590,
                                "end": 604,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 605,
                                "end": 606,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 610,
                            "end": 631,
                            "operator": "<=",
                            "left": {
                              "type": "Identifier",
                              "start": 610,
                              "end": 611,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 615,
                              "end": 631,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 615,
                                "end": 629,
                                "decorators": [],
                                "name": "CharacterCodes",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 630,
                                "end": 631,
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "start": 547,
                        "end": 568,
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 548,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 551,
                          "end": 568,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 551,
                            "end": 565,
                            "decorators": [],
                            "name": "CharacterCodes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 568,
                            "decorators": [],
                            "name": "_0",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "start": 514,
                        "end": 531,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 529,
                            "end": 530,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 528,
                          "decorators": [],
                          "name": "isDecimalDigit",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 441,
                  "end": 450,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 444,
                      "end": 450
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 451,
                "end": 459,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 453,
                  "end": 459
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 58,
        "decorators": [],
        "name": "CharacterInfo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
