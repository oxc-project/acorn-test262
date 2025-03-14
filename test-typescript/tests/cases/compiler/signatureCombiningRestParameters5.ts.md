__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 577,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 155,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 155,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 155,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 26,
                    "end": 86,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 27,
                        "end": 77,
                        "argument": {
                          "type": "Identifier",
                          "start": 30,
                          "end": 34,
                          "decorators": [],
                          "name": "args",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 77,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 36,
                            "end": 77,
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "start": 37,
                                "end": 55,
                                "elementType": {
                                  "type": "TSUnionType",
                                  "start": 40,
                                  "end": 55,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 40,
                                      "end": 46
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 49,
                                      "end": 55
                                    }
                                  ]
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 37,
                                  "end": 38,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "start": 57,
                                "end": 76,
                                "elementType": {
                                  "type": "TSUnionType",
                                  "start": 60,
                                  "end": 76,
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 60,
                                      "end": 66
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 69,
                                      "end": 76
                                    }
                                  ]
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 58,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                },
                                "optional": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 93,
                    "end": 154,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 94,
                        "end": 145,
                        "argument": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 101,
                          "decorators": [],
                          "name": "args",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 101,
                          "end": 145,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 103,
                            "end": 145,
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "start": 104,
                                "end": 123,
                                "elementType": {
                                  "type": "TSUnionType",
                                  "start": 107,
                                  "end": 123,
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 107,
                                      "end": 113
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 116,
                                      "end": 123
                                    }
                                  ]
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 104,
                                  "end": 105,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false
                                },
                                "optional": false
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "start": 125,
                                "end": 144,
                                "elementType": {
                                  "type": "TSUnionType",
                                  "start": 128,
                                  "end": 144,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 128,
                                      "end": 134
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 137,
                                      "end": 144
                                    }
                                  ]
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 125,
                                  "end": 126,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false
                                },
                                "optional": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 150,
                        "end": 154
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 174,
      "expression": {
        "type": "CallExpression",
        "start": 158,
        "end": 173,
        "arguments": [
          {
            "type": "Literal",
            "start": 164,
            "end": 166,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 168,
            "end": 172,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 158,
          "end": 163,
          "decorators": [],
          "name": "test1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 192,
        "arguments": [
          {
            "type": "Literal",
            "start": 181,
            "end": 183,
            "raw": "42",
            "value": 42
          },
          {
            "type": "ArrayExpression",
            "start": 185,
            "end": 191,
            "elements": [
              {
                "type": "Literal",
                "start": 186,
                "end": 190,
                "raw": "true",
                "value": true
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 175,
          "end": 180,
          "decorators": [],
          "name": "test1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 204,
      "end": 398,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 226,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 320,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 320,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 300,
              "end": 320,
              "params": [
                {
                  "type": "RestElement",
                  "start": 301,
                  "end": 311,
                  "argument": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 308,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 310,
                      "end": 311,
                      "typeName": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 313,
                "end": 320,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 324,
          "end": 347,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 325,
            "end": 347,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 327,
              "end": 347,
              "params": [
                {
                  "type": "RestElement",
                  "start": 328,
                  "end": 338,
                  "argument": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 335,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 347,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 351,
          "end": 388,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 352,
            "end": 388,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 354,
              "end": 388,
              "params": [
                {
                  "type": "Identifier",
                  "start": 355,
                  "end": 379,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 358,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 360,
                      "end": 379,
                      "types": [
                        {
                          "type": "TSTypeQuery",
                          "start": 360,
                          "end": 368,
                          "exprName": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 368,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeQuery",
                          "start": 371,
                          "end": 379,
                          "exprName": {
                            "type": "Identifier",
                            "start": 378,
                            "end": 379,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 381,
                "end": 388,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 384,
                  "end": 388
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 391,
        "end": 397,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 393,
          "end": 397
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 293,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 258,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 240,
              "end": 258,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 249,
                "end": 258,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 249,
                  "end": 256
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 290,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 272,
              "end": 290,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 281,
                "end": 290,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 281,
                  "end": 288
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 576,
      "expression": {
        "type": "CallExpression",
        "start": 400,
        "end": 575,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 409,
            "end": 456,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 454,
              "end": 456,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 410,
                "end": 429,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 429,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 413,
                    "end": 429,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 413,
                        "end": 419
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 422,
                        "end": 429
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 431,
                "end": 449,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 432,
                  "end": 449,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 434,
                    "end": 449,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 434,
                        "end": 440
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 443,
                        "end": 449
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 460,
            "end": 508,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 506,
              "end": 508,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 480,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 462,
                  "end": 480,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 464,
                    "end": 480,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 464,
                        "end": 470
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 473,
                        "end": 480
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 482,
                "end": 501,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 483,
                  "end": 501,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 485,
                    "end": 501,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 494,
                        "end": 501
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 512,
            "end": 572,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 572,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 526,
                  "end": 539,
                  "expression": {
                    "type": "CallExpression",
                    "start": 526,
                    "end": 538,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 529,
                        "end": 533,
                        "raw": "true",
                        "value": true
                      },
                      {
                        "type": "Literal",
                        "start": 535,
                        "end": 537,
                        "raw": "42",
                        "value": 42
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 528,
                      "decorators": [],
                      "name": "cb",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 544,
                  "end": 559,
                  "expression": {
                    "type": "CallExpression",
                    "start": 544,
                    "end": 558,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 547,
                        "end": 551,
                        "raw": "true",
                        "value": true
                      },
                      {
                        "type": "ArrayExpression",
                        "start": 553,
                        "end": 557,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 554,
                            "end": 556,
                            "raw": "42",
                            "value": 42
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 546,
                      "decorators": [],
                      "name": "cb",
                      "optional": false
                    },
                    "optional": false
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
                "start": 513,
                "end": 515,
                "decorators": [],
                "name": "cb",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 400,
          "end": 405,
          "decorators": [],
          "name": "test2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
