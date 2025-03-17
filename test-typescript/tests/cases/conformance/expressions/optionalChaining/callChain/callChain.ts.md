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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 58,
            "name": "o1",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 32,
                        "end": 46,
                        "argument": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 39,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
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
                        },
                        "value": null
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "callee": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 89,
                    "end": 90,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            }
          ],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 99,
              "end": 100,
              "value": 1,
              "raw": "1"
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
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "value": 4,
              "raw": "4"
            }
          ],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 181,
            "name": "o2",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 153,
                            "end": 179,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 154,
                                "end": 168,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 157,
                                  "end": 161,
                                  "name": "args",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                                },
                                "value": null
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
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "callee": {
            "type": "MemberExpression",
            "start": 183,
            "end": 188,
            "object": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 192,
            "end": 197,
            "object": {
              "type": "Identifier",
              "start": 192,
              "end": 194,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 198,
              "end": 199,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 202,
            "end": 207,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 204,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 220,
            "end": 225,
            "object": {
              "type": "Identifier",
              "start": 220,
              "end": 222,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 226,
              "end": 227,
              "value": 1,
              "raw": "1"
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
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 240,
              "end": 241,
              "value": 4,
              "raw": "4"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 244,
            "end": 253,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 249,
              "end": 252,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": true,
            "optional": true
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 257,
            "end": 266,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 262,
              "end": 265,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": true,
            "optional": true
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 267,
              "end": 268,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 271,
            "end": 280,
            "object": {
              "type": "Identifier",
              "start": 271,
              "end": 273,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 276,
              "end": 279,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": true,
            "optional": true
          },
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 288,
                    "end": 289,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "callee": {
            "type": "MemberExpression",
            "start": 293,
            "end": 302,
            "object": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 298,
              "end": 301,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": true,
            "optional": true
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "value": 1,
              "raw": "1"
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
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 313,
                    "end": 314,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            },
            {
              "type": "Literal",
              "start": 317,
              "end": 318,
              "value": 4,
              "raw": "4"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 394,
            "name": "o3",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 347,
                                "end": 361,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 350,
                                  "end": 354,
                                  "name": "args",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                                },
                                "value": null
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 368,
                                      "end": 369,
                                      "name": "c",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 369,
                                      "end": 377,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 371,
                                        "end": 377
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "object": {
            "type": "CallExpression",
            "start": 396,
            "end": 404,
            "callee": {
              "type": "MemberExpression",
              "start": 396,
              "end": 400,
              "object": {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 408,
            "end": 417,
            "callee": {
              "type": "MemberExpression",
              "start": 408,
              "end": 412,
              "object": {
                "type": "Identifier",
                "start": 408,
                "end": 410,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 415,
                "end": 416,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 421,
            "end": 438,
            "callee": {
              "type": "MemberExpression",
              "start": 421,
              "end": 425,
              "object": {
                "type": "Identifier",
                "start": 421,
                "end": 423,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                }
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 439,
            "end": 440,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 442,
            "end": 465,
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 446,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 444,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 449,
                "end": 450,
                "value": 1,
                "raw": "1"
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
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 459,
                      "end": 460,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 463,
                "end": 464,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 467,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 469,
            "end": 477,
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 473,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 471,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 472,
                "end": 473,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Literal",
            "start": 478,
            "end": 481,
            "value": "c",
            "raw": "\"c\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 484,
            "end": 493,
            "callee": {
              "type": "MemberExpression",
              "start": 484,
              "end": 488,
              "object": {
                "type": "Identifier",
                "start": 484,
                "end": 486,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 492,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Literal",
            "start": 494,
            "end": 497,
            "value": "c",
            "raw": "\"c\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 500,
            "end": 517,
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 504,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 502,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 514,
                      "end": 515,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                }
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Literal",
            "start": 518,
            "end": 521,
            "value": "c",
            "raw": "\"c\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 524,
            "end": 547,
            "callee": {
              "type": "MemberExpression",
              "start": 524,
              "end": 528,
              "object": {
                "type": "Identifier",
                "start": 524,
                "end": 526,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 531,
                "end": 532,
                "value": 1,
                "raw": "1"
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
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 541,
                      "end": 542,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 545,
                "end": 546,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Literal",
            "start": 548,
            "end": 551,
            "value": "c",
            "raw": "\"c\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 554,
            "end": 565,
            "callee": {
              "type": "MemberExpression",
              "start": 554,
              "end": 561,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 556,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 557,
                "end": 560,
                "value": "b",
                "raw": "\"b\""
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 566,
            "end": 567,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 569,
            "end": 581,
            "callee": {
              "type": "MemberExpression",
              "start": 569,
              "end": 576,
              "object": {
                "type": "Identifier",
                "start": 569,
                "end": 571,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 572,
                "end": 575,
                "value": "b",
                "raw": "\"b\""
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 579,
                "end": 580,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 585,
            "end": 605,
            "callee": {
              "type": "MemberExpression",
              "start": 585,
              "end": 592,
              "object": {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 588,
                "end": 591,
                "value": "b",
                "raw": "\"b\""
              },
              "computed": true,
              "optional": false
            },
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
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                }
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "CallExpression",
            "start": 609,
            "end": 635,
            "callee": {
              "type": "MemberExpression",
              "start": 609,
              "end": 616,
              "object": {
                "type": "Identifier",
                "start": 609,
                "end": 611,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 612,
                "end": 615,
                "value": "b",
                "raw": "\"b\""
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 619,
                "end": 620,
                "value": 1,
                "raw": "1"
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
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 629,
                      "end": 630,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 634,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 636,
            "end": 637,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 696,
            "name": "o4",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 671,
                      "end": 674,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 672,
                          "end": 673,
                          "name": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 673,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 675,
                        "end": 689,
                        "name": "f",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 676,
                          "end": 689,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 678,
                            "end": 689,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 679,
                                "end": 683,
                                "name": "a",
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 698,
      "end": 739,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 719,
        "name": "incr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 720,
          "end": 729,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 729,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 723,
              "end": 729
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 767,
            "name": "v",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ChainExpression",
            "start": 770,
            "end": 780,
            "expression": {
              "type": "CallExpression",
              "start": 770,
              "end": 780,
              "callee": {
                "type": "Identifier",
                "start": 770,
                "end": 772,
                "name": "o4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 779,
                  "name": "incr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": true,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 809,
            "end": 846,
            "name": "o5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 846,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 813,
                "end": 846,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 813,
                  "end": 816,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 814,
                      "end": 815,
                      "name": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
                        "typeParameters": null,
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "callee": {
            "type": "CallExpression",
            "start": 848,
            "end": 860,
            "callee": {
              "type": "Identifier",
              "start": 848,
              "end": 850,
              "name": "o5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "object": {
            "type": "TSNonNullExpression",
            "start": 879,
            "end": 887,
            "expression": {
              "type": "CallExpression",
              "start": 879,
              "end": 886,
              "callee": {
                "type": "MemberExpression",
                "start": 879,
                "end": 884,
                "object": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 881,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 884,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "property": {
            "type": "Identifier",
            "start": 888,
            "end": 896,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
            "object": {
              "type": "TSNonNullExpression",
              "start": 898,
              "end": 906,
              "expression": {
                "type": "CallExpression",
                "start": 898,
                "end": 905,
                "callee": {
                  "type": "MemberExpression",
                  "start": 898,
                  "end": 903,
                  "object": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 900,
                    "name": "o2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 902,
                    "end": 903,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "property": {
              "type": "Identifier",
              "start": 907,
              "end": 915,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
