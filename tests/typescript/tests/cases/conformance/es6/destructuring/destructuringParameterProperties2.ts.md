__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 390,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 240,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 240,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 102,
                    "end": 234,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 194,
                      "end": 234,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 208,
                          "end": 224,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 208,
                            "end": 223,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 208,
                              "end": 214,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 214,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 217,
                              "end": 223,
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 222,
                                "end": 223,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 106,
                      "end": 192,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 107,
                        "end": 141,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 107,
                          "end": 122,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 122,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 126,
                          "end": 141,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 127,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 141,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 147,
                        "end": 191,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 147,
                          "end": 167,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 147,
                            "end": 153,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 147,
                              "end": 151
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 152,
                              "end": 153,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 167,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 171,
                          "end": 191,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 171,
                            "end": 177,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 171,
                              "end": 175
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 191,
                            "decorators": [],
                            "name": "undefined",
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
                  "type": "TSParameterProperty",
                  "start": 27,
                  "end": 44,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 44,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 46,
                  "end": 90,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 54,
                    "end": 90,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 63,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 65,
                        "end": 90,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 66,
                            "end": 72
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 74,
                            "end": 80
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 82,
                            "end": 89
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 289,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 257,
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 289,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 289,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 270,
                    "end": 283,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 277,
                      "end": 283,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 277,
                        "end": 281
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 283,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 338,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 306,
              "decorators": [],
              "name": "getB",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 338,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 319,
                    "end": 332,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 326,
                      "end": 332,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 326,
                        "end": 330
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 332,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 388,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 355,
              "decorators": [],
              "name": "getC",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 355,
              "end": 388,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 388,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 368,
                    "end": 382,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 375,
                      "end": 381,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 375,
                        "end": 379
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 400,
            "end": 437,
            "arguments": [
              {
                "type": "Identifier",
                "start": 407,
                "end": 416,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 418,
                "end": 436,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 419,
                    "end": 420,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Identifier",
                    "start": 422,
                    "end": 431,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 433,
                    "end": 435,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 404,
              "end": 406,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 491,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 443,
            "end": 458,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 444,
                "end": 447,
                "decorators": [],
                "name": "x_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "x_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 454,
                "end": 457,
                "decorators": [],
                "name": "x_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 461,
            "end": 491,
            "elements": [
              {
                "type": "CallExpression",
                "start": 462,
                "end": 470,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 462,
                  "end": 468,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 468,
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 472,
                "end": 480,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 472,
                  "end": 478,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 478,
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 482,
                "end": 490,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 488,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 527,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 499,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 502,
            "end": 527,
            "arguments": [
              {
                "type": "Literal",
                "start": 509,
                "end": 511,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 513,
                "end": 526,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 514,
                    "end": 515,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 517,
                    "end": 519,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 521,
                    "end": 525,
                    "raw": "true",
                    "value": true
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 581,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 533,
            "end": 548,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 534,
                "end": 537,
                "decorators": [],
                "name": "y_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 539,
                "end": 542,
                "decorators": [],
                "name": "y_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 544,
                "end": 547,
                "decorators": [],
                "name": "y_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 551,
            "end": 581,
            "elements": [
              {
                "type": "CallExpression",
                "start": 552,
                "end": 560,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 552,
                  "end": 558,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 558,
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 562,
                "end": 570,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 562,
                  "end": 568,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 568,
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 572,
                "end": 580,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 572,
                  "end": 578,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 573,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 578,
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 626,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 625,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 592,
            "end": 625,
            "arguments": [
              {
                "type": "Literal",
                "start": 599,
                "end": 601,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 603,
                "end": 624,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 604,
                    "end": 613,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 615,
                    "end": 617,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 619,
                    "end": 623,
                    "raw": "null",
                    "value": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 596,
              "end": 598,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 679,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 631,
            "end": 646,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 632,
                "end": 635,
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 637,
                "end": 640,
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 642,
                "end": 645,
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 649,
            "end": 679,
            "elements": [
              {
                "type": "CallExpression",
                "start": 650,
                "end": 658,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 650,
                  "end": 656,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 656,
                    "decorators": [],
                    "name": "getA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 660,
                "end": 668,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 660,
                  "end": 666,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 661,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 666,
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 670,
                "end": 678,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 670,
                  "end": 676,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 671,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 676,
                    "decorators": [],
                    "name": "getC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
