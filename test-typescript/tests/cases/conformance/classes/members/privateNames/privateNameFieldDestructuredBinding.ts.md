__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 627,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 627,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 627,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 20,
              "name": "field"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 41,
              "decorators": [],
              "name": "otherObject",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 44,
              "end": 51,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 109,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 67,
              "decorators": [],
              "name": "testObject",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 109,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 80,
                    "end": 103,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 87,
                      "end": 102,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 89,
                          "end": 94,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 92,
                            "end": 94,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 96,
                          "end": 100,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 99,
                            "end": 100,
                            "raw": "6",
                            "value": 6,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
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
            "start": 114,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "testArray",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 158,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 136,
                    "end": 152,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 143,
                      "end": 151,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 144,
                          "end": 146,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "Literal",
                          "start": 148,
                          "end": 150,
                          "raw": "11",
                          "value": 11,
                          "regex": null,
                          "bigint": null
                        }
                      ]
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
            "start": 163,
            "end": 567,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 174,
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
              "start": 174,
              "end": 567,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 567,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 187,
                    "end": 201,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 191,
                        "end": 200,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 200,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 192,
                            "end": 200,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 194,
                              "end": 200
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 210,
                    "end": 254,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 211,
                      "end": 252,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 211,
                        "end": 232,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 213,
                            "end": 227,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 216,
                              "end": 227,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 216,
                                "end": 220
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 221,
                                "end": 227,
                                "name": "field"
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "start": 229,
                            "end": 230,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 235,
                        "end": 252,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 235,
                          "end": 250,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 235,
                            "end": 239
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 250,
                            "decorators": [],
                            "name": "testObject",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 263,
                    "end": 301,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 264,
                      "end": 299,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 264,
                        "end": 280,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 265,
                            "end": 276,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 265,
                              "end": 269
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 270,
                              "end": 276,
                              "name": "field"
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 278,
                            "end": 279,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 283,
                        "end": 299,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 283,
                          "end": 297,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 283,
                            "end": 287
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 297,
                            "decorators": [],
                            "name": "testArray",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 368,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 366,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 311,
                        "end": 347,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 313,
                            "end": 327,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 313,
                              "end": 314,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 316,
                              "end": 327,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 316,
                                "end": 320
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 321,
                                "end": 327,
                                "name": "field"
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "start": 329,
                            "end": 345,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 330,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "start": 332,
                              "end": 345,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "start": 333,
                                  "end": 344,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 333,
                                    "end": 337
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 338,
                                    "end": 344,
                                    "name": "field"
                                  }
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 350,
                        "end": 366,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 352,
                            "end": 356,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 355,
                              "end": 356,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 358,
                            "end": 364,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 358,
                              "end": 359,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "start": 361,
                              "end": 364,
                              "elements": [
                                {
                                  "type": "Literal",
                                  "start": 362,
                                  "end": 363,
                                  "raw": "2",
                                  "value": 2,
                                  "regex": null,
                                  "bigint": null
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 377,
                    "end": 417,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 377,
                      "end": 416,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 377,
                        "end": 405,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 378,
                            "end": 389,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 378,
                              "end": 382
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 383,
                              "end": 389,
                              "name": "field"
                            }
                          },
                          {
                            "type": "ArrayPattern",
                            "start": 391,
                            "end": 404,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "start": 392,
                                "end": 403,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 392,
                                  "end": 396
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 397,
                                  "end": 403,
                                  "name": "field"
                                }
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 408,
                        "end": 416,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 409,
                            "end": 410,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "ArrayExpression",
                            "start": 412,
                            "end": 415,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 413,
                                "end": 414,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 426,
                    "end": 485,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 427,
                      "end": 483,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 427,
                        "end": 471,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 429,
                            "end": 447,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 429,
                              "end": 430,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 432,
                              "end": 447,
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "start": 432,
                                "end": 443,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 432,
                                  "end": 436
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 437,
                                  "end": 443,
                                  "name": "field"
                                }
                              },
                              "optional": false,
                              "right": {
                                "type": "Literal",
                                "start": 446,
                                "end": 447,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 449,
                            "end": 469,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "start": 452,
                              "end": 469,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "start": 453,
                                  "end": 468,
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 453,
                                    "end": 464,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 453,
                                      "end": 457
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 458,
                                      "end": 464,
                                      "name": "field"
                                    }
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "Literal",
                                    "start": 467,
                                    "end": 468,
                                    "raw": "1",
                                    "value": 1,
                                    "regex": null,
                                    "bigint": null
                                  },
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 474,
                        "end": 483,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 476,
                            "end": 481,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 476,
                              "end": 477,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "start": 479,
                              "end": 481,
                              "elements": []
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 494,
                    "end": 517,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 494,
                      "end": 516,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 494,
                        "end": 511,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 495,
                            "end": 510,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 495,
                              "end": 506,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 495,
                                "end": 499
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 500,
                                "end": 506,
                                "name": "field"
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 509,
                              "end": 510,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 514,
                        "end": 516,
                        "elements": []
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 526,
                    "end": 561,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 526,
                      "end": 560,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 526,
                        "end": 555,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 527,
                            "end": 554,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 527,
                              "end": 550,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 527,
                                "end": 543,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 527,
                                  "end": 531
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 532,
                                  "end": 543,
                                  "decorators": [],
                                  "name": "otherObject",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 544,
                                "end": 550,
                                "name": "field"
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 553,
                              "end": 554,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 558,
                        "end": 560,
                        "elements": []
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
            "start": 572,
            "end": 625,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 583,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 583,
              "end": 625,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 591,
                "end": 625,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 601,
                    "end": 619,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 601,
                      "end": 618,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 601,
                        "end": 612,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 602,
                            "end": 611,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 602,
                              "end": 604,
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 605,
                              "end": 611,
                              "name": "field"
                            }
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 615,
                        "end": 618,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 616,
                            "end": 617,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ]
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
                  "start": 584,
                  "end": 589,
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 586,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 588,
                      "end": 589,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 589,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "end": 7,
        "decorators": [],
        "name": "A",
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
