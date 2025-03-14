asyncFunctionContextuallyTypedReturns.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 942,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 69,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 61,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 61,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 23,
              "end": 61,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 34,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 27,
                      "end": 34
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 39,
                  "end": 61,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 39,
                      "end": 42,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 40,
                          "end": 41,
                          "literal": {
                            "type": "Literal",
                            "start": 40,
                            "end": 41,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 45,
                      "end": 61,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 56,
                        "end": 61,
                        "params": [
                          {
                            "type": "TSTupleType",
                            "start": 57,
                            "end": 60,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 58,
                                "end": 59,
                                "literal": {
                                  "type": "Literal",
                                  "start": 58,
                                  "end": 59,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 56,
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 62,
        "end": 68,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 64,
          "end": 68
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 104,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 72,
            "end": 103,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 77,
              "end": 103,
              "alternate": {
                "type": "CallExpression",
                "start": 87,
                "end": 103,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 101,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 94,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 101,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "ArrayExpression",
                "start": 81,
                "end": 84,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 82,
                    "end": 83,
                    "raw": "0",
                    "value": 0
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 147,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 146,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 108,
            "end": 145,
            "async": true,
            "body": {
              "type": "ConditionalExpression",
              "start": 119,
              "end": 145,
              "alternate": {
                "type": "CallExpression",
                "start": 129,
                "end": 145,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 129,
                  "end": 143,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 136,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 143,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "ArrayExpression",
                "start": 123,
                "end": 126,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "raw": "0",
                    "value": 0
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 149,
      "end": 254,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 246,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 246,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 172,
              "end": 246,
              "params": [
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 183,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 176,
                      "end": 183
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 185,
                "end": 246,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 188,
                  "end": 246,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 188,
                      "end": 209,
                      "literal": {
                        "type": "Literal",
                        "start": 188,
                        "end": 209,
                        "raw": "\"contextuallyTypable\"",
                        "value": "contextuallyTypable"
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 246,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 223,
                        "end": 246,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 224,
                            "end": 245,
                            "literal": {
                              "type": "Literal",
                              "start": 224,
                              "end": 245,
                              "raw": "\"contextuallyTypable\"",
                              "value": "contextuallyTypable"
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 223,
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 247,
        "end": 253,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 249,
          "end": 253
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 308,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 307,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 306,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 262,
              "end": 306,
              "alternate": {
                "type": "CallExpression",
                "start": 290,
                "end": 306,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 290,
                  "end": 304,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 297,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 304,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "Literal",
                "start": 266,
                "end": 287,
                "raw": "\"contextuallyTypable\"",
                "value": "contextuallyTypable"
              },
              "test": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 368,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 367,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 366,
            "async": true,
            "body": {
              "type": "ConditionalExpression",
              "start": 322,
              "end": 366,
              "alternate": {
                "type": "CallExpression",
                "start": 350,
                "end": 366,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 350,
                  "end": 364,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 357,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 364,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "Literal",
                "start": 326,
                "end": 347,
                "raw": "\"contextuallyTypable\"",
                "value": "contextuallyTypable"
              },
              "test": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 309,
          "end": 310,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 370,
      "end": 412,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 385,
        "decorators": [],
        "name": "MyCallback",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 388,
        "end": 411,
        "params": [
          {
            "type": "Identifier",
            "start": 389,
            "end": 402,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 402,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 396,
                "end": 402
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 404,
          "end": 411,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 407,
            "end": 411
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 413,
      "end": 496,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 431,
        "decorators": [],
        "name": "h",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 432,
          "end": 488,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 488,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 436,
              "end": 488,
              "params": [
                {
                  "type": "Identifier",
                  "start": 437,
                  "end": 447,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 438,
                    "end": 447,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 440,
                      "end": 447
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 449,
                "end": 488,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 452,
                  "end": 488,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 462,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 462,
                        "decorators": [],
                        "name": "MyCallback",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 465,
                      "end": 488,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 476,
                        "end": 488,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 477,
                            "end": 487,
                            "typeName": {
                              "type": "Identifier",
                              "start": 477,
                              "end": 487,
                              "decorators": [],
                              "name": "MyCallback",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 476,
                        "decorators": [],
                        "name": "PromiseLike",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 489,
        "end": 495,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 491,
          "end": 495
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 497,
      "end": 541,
      "expression": {
        "type": "CallExpression",
        "start": 497,
        "end": 540,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 499,
            "end": 539,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 504,
              "end": 539,
              "alternate": {
                "type": "CallExpression",
                "start": 523,
                "end": 539,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 523,
                  "end": 537,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 530,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 537,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "start": 508,
                "end": 520,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 517,
                  "end": 520,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 509,
                    "end": 512,
                    "decorators": [],
                    "name": "abc",
                    "optional": false
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 497,
          "end": 498,
          "decorators": [],
          "name": "h",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 542,
      "end": 592,
      "expression": {
        "type": "CallExpression",
        "start": 542,
        "end": 591,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 544,
            "end": 590,
            "async": true,
            "body": {
              "type": "ConditionalExpression",
              "start": 555,
              "end": 590,
              "alternate": {
                "type": "CallExpression",
                "start": 574,
                "end": 590,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 574,
                  "end": 588,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 581,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 588,
                    "decorators": [],
                    "name": "reject",
                    "optional": false
                  }
                },
                "optional": false
              },
              "consequent": {
                "type": "ArrowFunctionExpression",
                "start": 559,
                "end": 571,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 568,
                  "end": 571,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 560,
                    "end": 563,
                    "decorators": [],
                    "name": "def",
                    "optional": false
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 551,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 542,
          "end": 543,
          "decorators": [],
          "name": "h",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 615,
      "end": 781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 781,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 715,
            "decorators": [],
            "name": "increment",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 630,
              "end": 715,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 632,
                "end": 715,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 636,
                    "end": 647,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 639,
                      "end": 647,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 641,
                        "end": 647
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 651,
                    "end": 662,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 654,
                      "end": 662,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 656,
                        "end": 662
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 665,
                  "end": 715,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 668,
                    "end": 715,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 668,
                        "end": 706,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 675,
                          "end": 706,
                          "params": [
                            {
                              "type": "TSUnionType",
                              "start": 676,
                              "end": 705,
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "start": 677,
                                  "end": 695,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 678,
                                      "end": 687,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 679,
                                        "end": 687,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 681,
                                          "end": 687
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 689,
                                    "end": 695,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 692,
                                      "end": 695
                                    }
                                  }
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 699,
                                  "end": 705
                                }
                              ]
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 668,
                          "end": 675,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 709,
                        "end": 715
                      }
                    ]
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 718,
            "end": 781,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 738,
              "end": 781,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 742,
                  "end": 779,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 749,
                    "end": 779,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 754,
                      "end": 779,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 760,
                          "end": 775,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 767,
                            "end": 775,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 767,
                              "end": 768,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 769,
                              "end": 775,
                              "decorators": [],
                              "name": "length",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 749,
                        "end": 750,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 725,
                "end": 728,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 730,
                "end": 733,
                "decorators": [],
                "name": "str",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 783,
      "end": 941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 941,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 875,
            "decorators": [],
            "name": "increment2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 799,
              "end": 875,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 801,
                "end": 875,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 805,
                    "end": 816,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 808,
                      "end": 816,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 810,
                        "end": 816
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 820,
                    "end": 831,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 823,
                      "end": 831,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 825,
                        "end": 831
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 834,
                  "end": 875,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 837,
                    "end": 875,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 844,
                      "end": 875,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 845,
                          "end": 874,
                          "types": [
                            {
                              "type": "TSFunctionType",
                              "start": 846,
                              "end": 864,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 847,
                                  "end": 856,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 848,
                                    "end": 856,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 850,
                                      "end": 856
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 858,
                                "end": 864,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 861,
                                  "end": 864
                                }
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 868,
                              "end": 874
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 844,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 878,
            "end": 941,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 898,
              "end": 941,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 902,
                  "end": 939,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 909,
                    "end": 939,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 914,
                      "end": 939,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 920,
                          "end": 935,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 927,
                            "end": 935,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 927,
                              "end": 928,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 929,
                              "end": 935,
                              "decorators": [],
                              "name": "length",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 909,
                        "end": 910,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 885,
                "end": 888,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 890,
                "end": 893,
                "decorators": [],
                "name": "str",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
