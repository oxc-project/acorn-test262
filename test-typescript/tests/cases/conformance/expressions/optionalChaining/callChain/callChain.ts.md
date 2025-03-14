__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 917,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 58,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 58,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 58,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 31,
                    "end": 57,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 32,
                        "end": 46,
                        "argument": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 39,
                          "decorators": [],
                          "name": "args",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 46,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 41,
                            "end": 46,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 41,
                              "end": 44
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
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
      "start": 60,
      "end": 67,
      "expression": {
        "type": "ChainExpression",
        "start": 60,
        "end": 66,
        "expression": {
          "type": "CallExpression",
          "start": 60,
          "end": 66,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "optional": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 76,
      "expression": {
        "type": "ChainExpression",
        "start": 68,
        "end": 75,
        "expression": {
          "type": "CallExpression",
          "start": 68,
          "end": 75,
          "arguments": [
            {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "optional": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 93,
      "expression": {
        "type": "ChainExpression",
        "start": 77,
        "end": 92,
        "expression": {
          "type": "CallExpression",
          "start": 77,
          "end": 92,
          "arguments": [
            {
              "type": "SpreadElement",
              "start": 82,
              "end": 91,
              "argument": {
                "type": "ArrayExpression",
                "start": 85,
                "end": 91,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 86,
                    "end": 87,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 89,
                    "end": 90,
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "optional": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 116,
      "expression": {
        "type": "ChainExpression",
        "start": 94,
        "end": 115,
        "expression": {
          "type": "CallExpression",
          "start": 94,
          "end": 115,
          "arguments": [
            {
              "type": "Literal",
              "start": 99,
              "end": 100,
              "raw": "1",
              "value": 1
            },
            {
              "type": "SpreadElement",
              "start": 102,
              "end": 111,
              "argument": {
                "type": "ArrayExpression",
                "start": 105,
                "end": 111,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 106,
                    "end": 107,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "raw": "3",
                    "value": 3
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "raw": "4",
              "value": 4
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "optional": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 181,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 181,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 136,
                "end": 181,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 136,
                    "end": 145
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 148,
                    "end": 181,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 150,
                        "end": 179,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 153,
                            "end": 179,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 154,
                                "end": 168,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 157,
                                  "end": 161,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 161,
                                  "end": 168,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 163,
                                    "end": 168,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 163,
                                      "end": 166
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 170,
                              "end": 179,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 173,
                                "end": 179
                              }
                            }
                          }
                        }
                      }
                    ]
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
      "start": 183,
      "end": 191,
      "expression": {
        "type": "ChainExpression",
        "start": 183,
        "end": 190,
        "expression": {
          "type": "CallExpression",
          "start": 183,
          "end": 190,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 183,
            "end": 188,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 201,
      "expression": {
        "type": "ChainExpression",
        "start": 192,
        "end": 200,
        "expression": {
          "type": "CallExpression",
          "start": 192,
          "end": 200,
          "arguments": [
            {
              "type": "Literal",
              "start": 198,
              "end": 199,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 192,
            "end": 197,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 194,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 219,
      "expression": {
        "type": "ChainExpression",
        "start": 202,
        "end": 218,
        "expression": {
          "type": "CallExpression",
          "start": 202,
          "end": 218,
          "arguments": [
            {
              "type": "SpreadElement",
              "start": 208,
              "end": 217,
              "argument": {
                "type": "ArrayExpression",
                "start": 211,
                "end": 217,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 212,
                    "end": 213,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 202,
            "end": 207,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 204,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 243,
      "expression": {
        "type": "ChainExpression",
        "start": 220,
        "end": 242,
        "expression": {
          "type": "CallExpression",
          "start": 220,
          "end": 242,
          "arguments": [
            {
              "type": "Literal",
              "start": 226,
              "end": 227,
              "raw": "1",
              "value": 1
            },
            {
              "type": "SpreadElement",
              "start": 229,
              "end": 238,
              "argument": {
                "type": "ArrayExpression",
                "start": 232,
                "end": 238,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 233,
                    "end": 234,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "raw": "3",
                    "value": 3
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 240,
              "end": 241,
              "raw": "4",
              "value": 4
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 220,
            "end": 225,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 220,
              "end": 222,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 256,
      "expression": {
        "type": "ChainExpression",
        "start": 244,
        "end": 255,
        "expression": {
          "type": "CallExpression",
          "start": 244,
          "end": 255,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 244,
            "end": 253,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 249,
              "end": 252,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 270,
      "expression": {
        "type": "ChainExpression",
        "start": 257,
        "end": 269,
        "expression": {
          "type": "CallExpression",
          "start": 257,
          "end": 269,
          "arguments": [
            {
              "type": "Literal",
              "start": 267,
              "end": 268,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 257,
            "end": 266,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 262,
              "end": 265,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 292,
      "expression": {
        "type": "ChainExpression",
        "start": 271,
        "end": 291,
        "expression": {
          "type": "CallExpression",
          "start": 271,
          "end": 291,
          "arguments": [
            {
              "type": "SpreadElement",
              "start": 281,
              "end": 290,
              "argument": {
                "type": "ArrayExpression",
                "start": 284,
                "end": 290,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 285,
                    "end": 286,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 288,
                    "end": 289,
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 271,
            "end": 280,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 271,
              "end": 273,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 276,
              "end": 279,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 320,
      "expression": {
        "type": "ChainExpression",
        "start": 293,
        "end": 319,
        "expression": {
          "type": "CallExpression",
          "start": 293,
          "end": 319,
          "arguments": [
            {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "raw": "1",
              "value": 1
            },
            {
              "type": "SpreadElement",
              "start": 306,
              "end": 315,
              "argument": {
                "type": "ArrayExpression",
                "start": 309,
                "end": 315,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 310,
                    "end": 311,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 313,
                    "end": 314,
                    "raw": "3",
                    "value": 3
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 317,
              "end": 318,
              "raw": "4",
              "value": 4
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 293,
            "end": 302,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "decorators": [],
              "name": "o2",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Literal",
              "start": 298,
              "end": 301,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 394,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 340,
                "end": 394,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 342,
                    "end": 392,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 392,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 345,
                        "end": 392,
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "start": 346,
                            "end": 379,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 347,
                                "end": 361,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 350,
                                  "end": 354,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 354,
                                  "end": 361,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 356,
                                    "end": 361,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 356,
                                      "end": 359
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 363,
                              "end": 379,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 366,
                                "end": 379,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 368,
                                    "end": 377,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 368,
                                      "end": 369,
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 369,
                                      "end": 377,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 371,
                                        "end": 377
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 383,
                            "end": 392
                          }
                        ]
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
      "start": 396,
      "end": 407,
      "expression": {
        "type": "ChainExpression",
        "start": 396,
        "end": 406,
        "expression": {
          "type": "MemberExpression",
          "start": 396,
          "end": 406,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 396,
            "end": 404,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 396,
              "end": 400,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 408,
      "end": 420,
      "expression": {
        "type": "ChainExpression",
        "start": 408,
        "end": 419,
        "expression": {
          "type": "MemberExpression",
          "start": 408,
          "end": 419,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 408,
            "end": 417,
            "arguments": [
              {
                "type": "Literal",
                "start": 415,
                "end": 416,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 408,
              "end": 412,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 408,
                "end": 410,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 441,
      "expression": {
        "type": "ChainExpression",
        "start": 421,
        "end": 440,
        "expression": {
          "type": "MemberExpression",
          "start": 421,
          "end": 440,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 421,
            "end": 438,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 428,
                "end": 437,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 431,
                  "end": 437,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 432,
                      "end": 433,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "raw": "2",
                      "value": 2
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 421,
              "end": 425,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 439,
            "end": 440,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 468,
      "expression": {
        "type": "ChainExpression",
        "start": 442,
        "end": 467,
        "expression": {
          "type": "MemberExpression",
          "start": 442,
          "end": 467,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 442,
            "end": 465,
            "arguments": [
              {
                "type": "Literal",
                "start": 449,
                "end": 450,
                "raw": "1",
                "value": 1
              },
              {
                "type": "SpreadElement",
                "start": 452,
                "end": 461,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 455,
                  "end": 461,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 456,
                      "end": 457,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 459,
                      "end": 460,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 463,
                "end": 464,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 446,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 444,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 467,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 483,
      "expression": {
        "type": "ChainExpression",
        "start": 469,
        "end": 482,
        "expression": {
          "type": "MemberExpression",
          "start": 469,
          "end": 482,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 469,
            "end": 477,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 473,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 471,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 472,
                "end": 473,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 478,
            "end": 481,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 484,
      "end": 499,
      "expression": {
        "type": "ChainExpression",
        "start": 484,
        "end": 498,
        "expression": {
          "type": "MemberExpression",
          "start": 484,
          "end": 498,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 484,
            "end": 493,
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 492,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 484,
              "end": 488,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 484,
                "end": 486,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 494,
            "end": 497,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 500,
      "end": 523,
      "expression": {
        "type": "ChainExpression",
        "start": 500,
        "end": 522,
        "expression": {
          "type": "MemberExpression",
          "start": 500,
          "end": 522,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 500,
            "end": 517,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 507,
                "end": 516,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 510,
                  "end": 516,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 511,
                      "end": 512,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 514,
                      "end": 515,
                      "raw": "2",
                      "value": 2
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 504,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 502,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 518,
            "end": 521,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 553,
      "expression": {
        "type": "ChainExpression",
        "start": 524,
        "end": 552,
        "expression": {
          "type": "MemberExpression",
          "start": 524,
          "end": 552,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 524,
            "end": 547,
            "arguments": [
              {
                "type": "Literal",
                "start": 531,
                "end": 532,
                "raw": "1",
                "value": 1
              },
              {
                "type": "SpreadElement",
                "start": 534,
                "end": 543,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 537,
                  "end": 543,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 538,
                      "end": 539,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 541,
                      "end": 542,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 545,
                "end": 546,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 524,
              "end": 528,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 524,
                "end": 526,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 548,
            "end": 551,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 568,
      "expression": {
        "type": "ChainExpression",
        "start": 554,
        "end": 567,
        "expression": {
          "type": "MemberExpression",
          "start": 554,
          "end": 567,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 554,
            "end": 565,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 554,
              "end": 561,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 556,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 557,
                "end": 560,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 566,
            "end": 567,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 584,
      "expression": {
        "type": "ChainExpression",
        "start": 569,
        "end": 583,
        "expression": {
          "type": "MemberExpression",
          "start": 569,
          "end": 583,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 569,
            "end": 581,
            "arguments": [
              {
                "type": "Literal",
                "start": 579,
                "end": 580,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 569,
              "end": 576,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 569,
                "end": 571,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 572,
                "end": 575,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 608,
      "expression": {
        "type": "ChainExpression",
        "start": 585,
        "end": 607,
        "expression": {
          "type": "MemberExpression",
          "start": 585,
          "end": 607,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 585,
            "end": 605,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 595,
                "end": 604,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 598,
                  "end": 604,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 599,
                      "end": 600,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
                      "raw": "2",
                      "value": 2
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 585,
              "end": 592,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 588,
                "end": 591,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 609,
      "end": 638,
      "expression": {
        "type": "ChainExpression",
        "start": 609,
        "end": 637,
        "expression": {
          "type": "MemberExpression",
          "start": 609,
          "end": 637,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 609,
            "end": 635,
            "arguments": [
              {
                "type": "Literal",
                "start": 619,
                "end": 620,
                "raw": "1",
                "value": 1
              },
              {
                "type": "SpreadElement",
                "start": 622,
                "end": 631,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 625,
                  "end": 631,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 626,
                      "end": 627,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 629,
                      "end": 630,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 634,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 609,
              "end": 616,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 609,
                "end": 611,
                "decorators": [],
                "name": "o3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 612,
                "end": 615,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            "optional": true
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 636,
            "end": 637,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 640,
      "end": 697,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 696,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 696,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 656,
              "end": 696,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 658,
                "end": 696,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 658,
                    "end": 667
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 671,
                    "end": 695,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 675,
                        "end": 689,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 676,
                          "end": 689,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 678,
                            "end": 689,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 679,
                                "end": 683,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 680,
                                  "end": 683,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 682,
                                    "end": 683,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 682,
                                      "end": 683,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 685,
                              "end": 689,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 688,
                                "end": 689,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 688,
                                  "end": 689,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 691,
                      "end": 695,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 694,
                        "end": 695,
                        "typeName": {
                          "type": "Identifier",
                          "start": 694,
                          "end": 695,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 671,
                      "end": 674,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 672,
                          "end": 673,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 673,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
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
      "type": "TSDeclareFunction",
      "start": 698,
      "end": 739,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 719,
        "decorators": [],
        "name": "incr",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 720,
          "end": 729,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 729,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 723,
              "end": 729
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 730,
        "end": 738,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 732,
          "end": 738
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 740,
      "end": 781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 780,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 767,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 747,
              "end": 767,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 749,
                "end": 767,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 749,
                    "end": 755
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 758,
                    "end": 767
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "start": 770,
            "end": 780,
            "expression": {
              "type": "CallExpression",
              "start": 770,
              "end": 780,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 779,
                  "decorators": [],
                  "name": "incr",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 770,
                "end": 772,
                "decorators": [],
                "name": "o4",
                "optional": false
              },
              "optional": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 847,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 809,
          "end": 846,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 809,
            "end": 846,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 846,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 813,
                "end": 846,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 819,
                  "end": 846,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 822,
                    "end": 846,
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 822,
                        "end": 831
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 835,
                        "end": 845,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 838,
                          "end": 845,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 841,
                            "end": 845
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 813,
                  "end": 816,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 814,
                      "end": 815,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
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
      "start": 848,
      "end": 865,
      "expression": {
        "type": "ChainExpression",
        "start": 848,
        "end": 864,
        "expression": {
          "type": "CallExpression",
          "start": 848,
          "end": 864,
          "arguments": [],
          "callee": {
            "type": "CallExpression",
            "start": 848,
            "end": 860,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 848,
              "end": 850,
              "decorators": [],
              "name": "o5",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 850,
              "end": 858,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 851,
                  "end": 857
                }
              ]
            }
          },
          "optional": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 879,
      "end": 897,
      "expression": {
        "type": "ChainExpression",
        "start": 879,
        "end": 896,
        "expression": {
          "type": "MemberExpression",
          "start": 879,
          "end": 896,
          "computed": false,
          "object": {
            "type": "TSNonNullExpression",
            "start": 879,
            "end": 887,
            "expression": {
              "type": "CallExpression",
              "start": 879,
              "end": 886,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 879,
                "end": 884,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 881,
                  "decorators": [],
                  "name": "o2",
                  "optional": false
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 884,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 888,
            "end": 896,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 898,
      "end": 917,
      "expression": {
        "type": "ChainExpression",
        "start": 898,
        "end": 916,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 898,
          "end": 916,
          "expression": {
            "type": "MemberExpression",
            "start": 898,
            "end": 915,
            "computed": false,
            "object": {
              "type": "TSNonNullExpression",
              "start": 898,
              "end": 906,
              "expression": {
                "type": "CallExpression",
                "start": 898,
                "end": 905,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 898,
                  "end": 903,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 900,
                    "decorators": [],
                    "name": "o2",
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 902,
                    "end": 903,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 907,
              "end": 915,
              "decorators": [],
              "name": "toString",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
