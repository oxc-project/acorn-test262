__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 731,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 58,
        "name": "CharacterInfo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 729,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 186,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 93,
              "name": "isDecimalDigit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 186,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 94,
                  "end": 103,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 131,
                        "end": 153,
                        "left": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": ">=",
                        "right": {
                          "type": "MemberExpression",
                          "start": 136,
                          "end": 153,
                          "object": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 150,
                            "name": "CharacterCodes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 153,
                            "name": "_0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 157,
                        "end": 179,
                        "left": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<=",
                        "right": {
                          "type": "MemberExpression",
                          "start": 162,
                          "end": 179,
                          "object": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 176,
                            "name": "CharacterCodes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 179,
                            "name": "_9",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 106,
                  "end": 113
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
            "start": 192,
            "end": 412,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 216,
              "name": "isHexDigit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 412,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 226,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 220,
                      "end": 226
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "LogicalExpression",
                        "start": 254,
                        "end": 338,
                        "left": {
                          "type": "CallExpression",
                          "start": 254,
                          "end": 271,
                          "callee": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 268,
                            "name": "isDecimalDigit",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 269,
                              "end": 270,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "operator": "||",
                        "right": {
                          "type": "LogicalExpression",
                          "start": 291,
                          "end": 337,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 291,
                            "end": 312,
                            "left": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "start": 296,
                              "end": 312,
                              "object": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 310,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 312,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 316,
                            "end": 337,
                            "left": {
                              "type": "Identifier",
                              "start": 316,
                              "end": 317,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "start": 321,
                              "end": 337,
                              "object": {
                                "type": "Identifier",
                                "start": 321,
                                "end": 335,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 336,
                                "end": 337,
                                "name": "F",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 358,
                        "end": 404,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 358,
                          "end": 379,
                          "left": {
                            "type": "Identifier",
                            "start": 358,
                            "end": 359,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": ">=",
                          "right": {
                            "type": "MemberExpression",
                            "start": 363,
                            "end": 379,
                            "object": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 377,
                              "name": "CharacterCodes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 379,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 383,
                          "end": 404,
                          "left": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 384,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "<=",
                          "right": {
                            "type": "MemberExpression",
                            "start": 388,
                            "end": 404,
                            "object": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 402,
                              "name": "CharacterCodes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 229,
                  "end": 236
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
            "start": 418,
            "end": 727,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 440,
              "name": "hexValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 440,
              "end": 727,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 441,
                  "end": 450,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 444,
                      "end": 450
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 460,
                "end": 727,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 498,
                    "expression": {
                      "type": "CallExpression",
                      "start": 470,
                      "end": 497,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 470,
                        "end": 482,
                        "object": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 475,
                          "name": "Debug",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 482,
                          "name": "assert",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 483,
                          "end": 496,
                          "callee": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 493,
                            "name": "isHexDigit",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 494,
                              "end": 495,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 507,
                    "end": 721,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 514,
                      "end": 720,
                      "test": {
                        "type": "CallExpression",
                        "start": 514,
                        "end": 531,
                        "callee": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 528,
                          "name": "isDecimalDigit",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 529,
                            "end": 530,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "start": 547,
                        "end": 568,
                        "left": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 548,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "-",
                        "right": {
                          "type": "MemberExpression",
                          "start": 551,
                          "end": 568,
                          "object": {
                            "type": "Identifier",
                            "start": 551,
                            "end": 565,
                            "name": "CharacterCodes",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 568,
                            "name": "_0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "alternate": {
                        "type": "ConditionalExpression",
                        "start": 584,
                        "end": 720,
                        "test": {
                          "type": "LogicalExpression",
                          "start": 585,
                          "end": 631,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 585,
                            "end": 606,
                            "left": {
                              "type": "Identifier",
                              "start": 585,
                              "end": 586,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": ">=",
                            "right": {
                              "type": "MemberExpression",
                              "start": 590,
                              "end": 606,
                              "object": {
                                "type": "Identifier",
                                "start": 590,
                                "end": 604,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 605,
                                "end": 606,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "&&",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 610,
                            "end": 631,
                            "left": {
                              "type": "Identifier",
                              "start": 610,
                              "end": 611,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "<=",
                            "right": {
                              "type": "MemberExpression",
                              "start": 615,
                              "end": 631,
                              "object": {
                                "type": "Identifier",
                                "start": 615,
                                "end": 629,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 630,
                                "end": 631,
                                "name": "F",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        },
                        "consequent": {
                          "type": "BinaryExpression",
                          "start": 651,
                          "end": 676,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 651,
                            "end": 671,
                            "left": {
                              "type": "Identifier",
                              "start": 651,
                              "end": 652,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "start": 655,
                              "end": 671,
                              "object": {
                                "type": "Identifier",
                                "start": 655,
                                "end": 669,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 670,
                                "end": 671,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 674,
                            "end": 676,
                            "value": 10,
                            "raw": "10"
                          }
                        },
                        "alternate": {
                          "type": "BinaryExpression",
                          "start": 695,
                          "end": 720,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 695,
                            "end": 715,
                            "left": {
                              "type": "Identifier",
                              "start": 695,
                              "end": 696,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "start": 699,
                              "end": 715,
                              "object": {
                                "type": "Identifier",
                                "start": 699,
                                "end": 713,
                                "name": "CharacterCodes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 714,
                                "end": 715,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 718,
                            "end": 720,
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 451,
                "end": 459,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 453,
                  "end": 459
                }
              }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
