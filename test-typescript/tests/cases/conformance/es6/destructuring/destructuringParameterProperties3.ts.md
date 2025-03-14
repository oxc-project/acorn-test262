destructuringParameterProperties3.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 773,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 227,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 227,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 227,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 89,
                    "end": 221,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 221,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 195,
                          "end": 211,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 195,
                            "end": 210,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 195,
                              "end": 201,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 195,
                                "end": 199
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 201,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 204,
                              "end": 210,
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 205,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 210,
                                "decorators": [],
                                "name": "k",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 93,
                      "end": 179,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 94,
                        "end": 128,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 94,
                          "end": 109,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 95,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 113,
                          "end": 128,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 128,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 134,
                        "end": 178,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 134,
                          "end": 154,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 134,
                            "end": 140,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 154,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 158,
                          "end": 178,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 158,
                            "end": 164,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 158,
                              "end": 162
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 178,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
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
                  "start": 37,
                  "end": 49,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 48,
                        "end": 49,
                        "typeName": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 51,
                  "end": 77,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 59,
                    "end": 77,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 70,
                        "end": 77,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 71,
                            "end": 72,
                            "typeName": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "decorators": [],
                              "name": "V",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 276,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 244,
              "decorators": [],
              "name": "getA",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 276,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 270,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 264,
                      "end": 270,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 264,
                        "end": 268
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 325,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 293,
              "decorators": [],
              "name": "getB",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 293,
              "end": 325,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 325,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 306,
                    "end": 319,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 313,
                      "end": 319,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 313,
                        "end": 317
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 331,
            "end": 375,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 342,
              "decorators": [],
              "name": "getC",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 375,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 369,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 362,
                      "end": 368,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 362,
                        "end": 366
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 387,
            "end": 419,
            "arguments": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 403,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 405,
                "end": 418,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 406,
                    "end": 407,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 409,
                    "end": 413,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 415,
                    "end": 417,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 391,
              "end": 393,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 473,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 425,
            "end": 440,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 426,
                "end": 429,
                "decorators": [],
                "name": "x_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 431,
                "end": 434,
                "decorators": [],
                "name": "x_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 436,
                "end": 439,
                "decorators": [],
                "name": "x_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 443,
            "end": 473,
            "elements": [
              {
                "type": "CallExpression",
                "start": 444,
                "end": 452,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 444,
                  "end": 450,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 450,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 454,
                "end": 462,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 454,
                  "end": 460,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 460,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 464,
                "end": 472,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 464,
                  "end": 470,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 470,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
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
      "start": 476,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 511,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 481,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 484,
            "end": 511,
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 493,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 495,
                "end": 510,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 496,
                    "end": 497,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 499,
                    "end": 503,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 505,
                    "end": 509,
                    "raw": "true",
                    "value": true
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 488,
              "end": 490,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 565,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 517,
            "end": 532,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 518,
                "end": 521,
                "decorators": [],
                "name": "y_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 523,
                "end": 526,
                "decorators": [],
                "name": "y_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 528,
                "end": 531,
                "decorators": [],
                "name": "y_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 535,
            "end": 565,
            "elements": [
              {
                "type": "CallExpression",
                "start": 536,
                "end": 544,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 536,
                  "end": 542,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 542,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 546,
                "end": 554,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 546,
                  "end": 552,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 547,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 552,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 556,
                "end": 564,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 556,
                  "end": 562,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 562,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
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
      "start": 568,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 607,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 573,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 576,
            "end": 607,
            "arguments": [
              {
                "type": "Literal",
                "start": 583,
                "end": 585,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 587,
                "end": 606,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 588,
                    "end": 597,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 599,
                    "end": 601,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 605,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 580,
              "end": 582,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 662,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 661,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 613,
            "end": 628,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 614,
                "end": 617,
                "decorators": [],
                "name": "z_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 619,
                "end": 622,
                "decorators": [],
                "name": "z_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 624,
                "end": 627,
                "decorators": [],
                "name": "z_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 631,
            "end": 661,
            "elements": [
              {
                "type": "CallExpression",
                "start": 632,
                "end": 640,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 632,
                  "end": 638,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 638,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 642,
                "end": 650,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 642,
                  "end": 648,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 648,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 652,
                "end": 660,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 652,
                  "end": 658,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 658,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
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
      "start": 664,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 668,
          "end": 717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 668,
            "end": 669,
            "decorators": [],
            "name": "w",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 672,
            "end": 717,
            "arguments": [
              {
                "type": "Literal",
                "start": 679,
                "end": 681,
                "raw": "10",
                "value": 10
              },
              {
                "type": "ArrayExpression",
                "start": 683,
                "end": 716,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 684,
                    "end": 693,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 695,
                    "end": 704,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 706,
                    "end": 715,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 676,
              "end": 678,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 719,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 771,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 723,
            "end": 738,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 724,
                "end": 727,
                "decorators": [],
                "name": "z_a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 729,
                "end": 732,
                "decorators": [],
                "name": "z_b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 734,
                "end": 737,
                "decorators": [],
                "name": "z_c",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 741,
            "end": 771,
            "elements": [
              {
                "type": "CallExpression",
                "start": 742,
                "end": 750,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 742,
                  "end": 748,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 748,
                    "decorators": [],
                    "name": "getA",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 752,
                "end": 760,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 752,
                  "end": 758,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 758,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 762,
                "end": 770,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 762,
                  "end": 768,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 763,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 768,
                    "decorators": [],
                    "name": "getC",
                    "optional": false
                  }
                },
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
