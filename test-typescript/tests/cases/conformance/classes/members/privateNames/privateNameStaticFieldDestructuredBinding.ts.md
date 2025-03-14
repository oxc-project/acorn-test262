privateNameStaticFieldDestructuredBinding.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 607,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 606,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 606,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 27,
              "name": "field"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 47,
              "decorators": [],
              "name": "otherClass",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 109,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 67,
              "decorators": [],
              "name": "testObject",
              "optional": false
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
                            "optional": false
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
                            "value": 10
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
                            "optional": false
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
                            "value": 6
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 158,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "testArray",
              "optional": false
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
                          "value": 10
                        },
                        {
                          "type": "Literal",
                          "start": 148,
                          "end": 150,
                          "raw": "11",
                          "value": 11
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 539,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 174,
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
              "start": 174,
              "end": 539,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 177,
                "end": 539,
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
                    "end": 251,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 211,
                      "end": 249,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 211,
                        "end": 229,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 213,
                            "end": 224,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 216,
                              "end": 224,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 216,
                                "end": 217,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 218,
                                "end": 224,
                                "name": "field"
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "start": 226,
                            "end": 227,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 227,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 227,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 232,
                        "end": 249,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 232,
                          "end": 247,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 232,
                            "end": 236
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 247,
                            "decorators": [],
                            "name": "testObject",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 295,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 261,
                      "end": 293,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 261,
                        "end": 274,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 262,
                            "end": 270,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 263,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 264,
                              "end": 270,
                              "name": "field"
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 272,
                            "end": 273,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        ],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 277,
                        "end": 293,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 277,
                          "end": 291,
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
                            "end": 291,
                            "decorators": [],
                            "name": "testArray",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 304,
                    "end": 356,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 305,
                      "end": 354,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 305,
                        "end": 335,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 307,
                            "end": 318,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 308,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 310,
                              "end": 318,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 311,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 312,
                                "end": 318,
                                "name": "field"
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "start": 320,
                            "end": 333,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 320,
                              "end": 321,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "start": 323,
                              "end": 333,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "start": 324,
                                  "end": 332,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 324,
                                    "end": 325,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 326,
                                    "end": 332,
                                    "name": "field"
                                  }
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 338,
                        "end": 354,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 340,
                            "end": 344,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 341,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 343,
                              "end": 344,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "Property",
                            "start": 346,
                            "end": 352,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 346,
                              "end": 347,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "start": 349,
                              "end": 352,
                              "elements": [
                                {
                                  "type": "Literal",
                                  "start": 350,
                                  "end": 351,
                                  "raw": "2",
                                  "value": 2
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
                    "start": 365,
                    "end": 399,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 365,
                      "end": 398,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 365,
                        "end": 387,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 366,
                            "end": 374,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 366,
                              "end": 367,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 368,
                              "end": 374,
                              "name": "field"
                            }
                          },
                          {
                            "type": "ArrayPattern",
                            "start": 376,
                            "end": 386,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "MemberExpression",
                                "start": 377,
                                "end": 385,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 377,
                                  "end": 378,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 379,
                                  "end": 385,
                                  "name": "field"
                                }
                              }
                            ],
                            "optional": false
                          }
                        ],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 390,
                        "end": 398,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 391,
                            "end": 392,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "ArrayExpression",
                            "start": 394,
                            "end": 397,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 395,
                                "end": 396,
                                "raw": "2",
                                "value": 2
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 408,
                    "end": 461,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 409,
                      "end": 459,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 409,
                        "end": 447,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 411,
                            "end": 426,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 412,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "AssignmentPattern",
                              "start": 414,
                              "end": 426,
                              "decorators": [],
                              "left": {
                                "type": "MemberExpression",
                                "start": 414,
                                "end": 422,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 414,
                                  "end": 415,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 416,
                                  "end": 422,
                                  "name": "field"
                                }
                              },
                              "optional": false,
                              "right": {
                                "type": "Literal",
                                "start": 425,
                                "end": 426,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "start": 428,
                            "end": 445,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 428,
                              "end": 429,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "start": 431,
                              "end": 445,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "AssignmentPattern",
                                  "start": 432,
                                  "end": 444,
                                  "decorators": [],
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 432,
                                    "end": 440,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 432,
                                      "end": 433,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 434,
                                      "end": 440,
                                      "name": "field"
                                    }
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "Literal",
                                    "start": 443,
                                    "end": 444,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 450,
                        "end": 459,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 452,
                            "end": 457,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 452,
                              "end": 453,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayExpression",
                              "start": 455,
                              "end": 457,
                              "elements": []
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 490,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 470,
                      "end": 489,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 470,
                        "end": 484,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 471,
                            "end": 483,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 471,
                              "end": 479,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 471,
                                "end": 472,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 473,
                                "end": 479,
                                "name": "field"
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 482,
                              "end": 483,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 487,
                        "end": 489,
                        "elements": []
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 499,
                    "end": 533,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 499,
                      "end": 532,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 499,
                        "end": 527,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "AssignmentPattern",
                            "start": 500,
                            "end": 526,
                            "decorators": [],
                            "left": {
                              "type": "MemberExpression",
                              "start": 500,
                              "end": 522,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 500,
                                "end": 515,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 500,
                                  "end": 504
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 515,
                                  "decorators": [],
                                  "name": "otherClass",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 516,
                                "end": 522,
                                "name": "field"
                              }
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 525,
                              "end": 526,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 530,
                        "end": 532,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 544,
            "end": 604,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 551,
              "end": 555,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 604,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 570,
                "end": 604,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 580,
                    "end": 598,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 580,
                      "end": 597,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 580,
                        "end": 591,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 581,
                            "end": 590,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 583,
                              "decorators": [],
                              "name": "_a",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 584,
                              "end": 590,
                              "name": "field"
                            }
                          }
                        ],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 594,
                        "end": 597,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 595,
                            "end": 596,
                            "raw": "2",
                            "value": 2
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
                  "start": 556,
                  "end": 568,
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 558,
                    "end": 568,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 560,
                      "end": 568,
                      "exprName": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 568,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ]
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
