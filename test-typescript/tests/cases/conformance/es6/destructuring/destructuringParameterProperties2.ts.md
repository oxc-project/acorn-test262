__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 682,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 391,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 241,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 45,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 45,
                    "name": "k",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 47,
                  "end": 91,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 55,
                    "end": 91,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 66,
                        "end": 91,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 67,
                            "end": 73
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 83,
                            "end": 90
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 241,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 103,
                    "end": 235,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 107,
                      "end": 193,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 108,
                        "end": 142,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 108,
                          "end": 123,
                          "left": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 123,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 127,
                          "end": 142,
                          "left": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 128,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 142,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 148,
                        "end": 192,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 148,
                          "end": 168,
                          "left": {
                            "type": "MemberExpression",
                            "start": 148,
                            "end": 154,
                            "object": {
                              "type": "ThisExpression",
                              "start": 148,
                              "end": 152
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 168,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 172,
                          "end": 192,
                          "left": {
                            "type": "MemberExpression",
                            "start": 172,
                            "end": 178,
                            "object": {
                              "type": "ThisExpression",
                              "start": 172,
                              "end": 176
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 192,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 195,
                      "end": 235,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 209,
                          "end": 225,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 209,
                            "end": 224,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 209,
                              "end": 215,
                              "object": {
                                "type": "ThisExpression",
                                "start": 209,
                                "end": 213
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 215,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 218,
                              "end": 224,
                              "left": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 219,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 290,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
              "name": "getA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 290,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 290,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 271,
                    "end": 284,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 278,
                      "end": 284,
                      "object": {
                        "type": "ThisExpression",
                        "start": 278,
                        "end": 282
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 296,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "name": "getB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 307,
              "end": 339,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 339,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 333,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 333,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 345,
            "end": 389,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 356,
              "name": "getC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 356,
              "end": 389,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 359,
                "end": 389,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 369,
                    "end": 383,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 376,
                      "end": 382,
                      "object": {
                        "type": "ThisExpression",
                        "start": 376,
                        "end": 380
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 401,
            "end": 438,
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 407,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 408,
                "end": 417,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 419,
                "end": 437,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Identifier",
                    "start": 423,
                    "end": 432,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 434,
                    "end": 436,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 492,
          "id": {
            "type": "ArrayPattern",
            "start": 444,
            "end": 459,
            "elements": [
              {
                "type": "Identifier",
                "start": 445,
                "end": 448,
                "name": "x_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 450,
                "end": 453,
                "name": "x_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "name": "x_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 462,
            "end": 492,
            "elements": [
              {
                "type": "CallExpression",
                "start": 463,
                "end": 471,
                "callee": {
                  "type": "MemberExpression",
                  "start": 463,
                  "end": 469,
                  "object": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 469,
                    "name": "getA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 473,
                "end": 481,
                "callee": {
                  "type": "MemberExpression",
                  "start": 473,
                  "end": 479,
                  "object": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 479,
                    "name": "getB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 483,
                "end": 491,
                "callee": {
                  "type": "MemberExpression",
                  "start": 483,
                  "end": 489,
                  "object": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "name": "getC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 528,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 503,
            "end": 528,
            "callee": {
              "type": "Identifier",
              "start": 507,
              "end": 509,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 510,
                "end": 512,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 514,
                "end": 527,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 515,
                    "end": 516,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 518,
                    "end": 520,
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "start": 522,
                    "end": 526,
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 582,
          "id": {
            "type": "ArrayPattern",
            "start": 534,
            "end": 549,
            "elements": [
              {
                "type": "Identifier",
                "start": 535,
                "end": 538,
                "name": "y_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 540,
                "end": 543,
                "name": "y_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 545,
                "end": 548,
                "name": "y_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 552,
            "end": 582,
            "elements": [
              {
                "type": "CallExpression",
                "start": 553,
                "end": 561,
                "callee": {
                  "type": "MemberExpression",
                  "start": 553,
                  "end": 559,
                  "object": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 554,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 559,
                    "name": "getA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 563,
                "end": 571,
                "callee": {
                  "type": "MemberExpression",
                  "start": 563,
                  "end": 569,
                  "object": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 569,
                    "name": "getB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 573,
                "end": 581,
                "callee": {
                  "type": "MemberExpression",
                  "start": 573,
                  "end": 579,
                  "object": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 579,
                    "name": "getC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 590,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 593,
            "end": 626,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 600,
                "end": 602,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 604,
                "end": 625,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 605,
                    "end": 614,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 616,
                    "end": 618,
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "start": 620,
                    "end": 624,
                    "value": null,
                    "raw": "null"
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 680,
          "id": {
            "type": "ArrayPattern",
            "start": 632,
            "end": 647,
            "elements": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 636,
                "name": "z_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 638,
                "end": 641,
                "name": "z_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "name": "z_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 650,
            "end": 680,
            "elements": [
              {
                "type": "CallExpression",
                "start": 651,
                "end": 659,
                "callee": {
                  "type": "MemberExpression",
                  "start": 651,
                  "end": 657,
                  "object": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 657,
                    "name": "getA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 661,
                "end": 669,
                "callee": {
                  "type": "MemberExpression",
                  "start": 661,
                  "end": 667,
                  "object": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 662,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 667,
                    "name": "getB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 671,
                "end": 679,
                "callee": {
                  "type": "MemberExpression",
                  "start": 671,
                  "end": 677,
                  "object": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 677,
                    "name": "getC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
