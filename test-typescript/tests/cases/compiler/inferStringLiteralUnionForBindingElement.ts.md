__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 107,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 58,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 45,
              "end": 58,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 47,
                  "end": 56,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 51,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 51,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 53,
                      "end": 56,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 53,
                        "end": 54,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 106,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 61,
          "end": 106,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 82,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 78,
                  "end": 81,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 78,
                    "end": 79,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 83,
              "end": 104,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 100,
                "decorators": [],
                "name": "firstKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 103,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 38,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 32,
              "end": 38
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 304,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 304,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 132,
            "end": 179,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 138,
                "end": 179,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 138,
                  "end": 150,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 140,
                      "end": 148,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 148,
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 148,
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 153,
                  "end": 179,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 158,
                      "end": 178,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 159,
                          "end": 177,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 163,
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 165,
                            "end": 177,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 166,
                                "end": 170,
                                "raw": "\"aa\"",
                                "value": "aa",
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 172,
                                "end": 176,
                                "raw": "\"bb\"",
                                "value": "bb",
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 184,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 190,
                "end": 215,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 204,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 193,
                      "end": 204,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 193,
                          "end": 197,
                          "literal": {
                            "type": "Literal",
                            "start": 193,
                            "end": 197,
                            "raw": "\"aa\"",
                            "value": "aa",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 200,
                          "end": 204,
                          "literal": {
                            "type": "Literal",
                            "start": 200,
                            "end": 204,
                            "raw": "\"bb\"",
                            "value": "bb",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 222,
            "end": 265,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 228,
                "end": 265,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 228,
                  "end": 236,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 230,
                      "end": 234,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 234,
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 234,
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 239,
                  "end": 265,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 244,
                      "end": 264,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 245,
                          "end": 263,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 249,
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 251,
                            "end": 263,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 252,
                                "end": 256,
                                "raw": "\"aa\"",
                                "value": "aa",
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 258,
                                "end": 262,
                                "raw": "\"bb\"",
                                "value": "bb",
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 243,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 270,
            "end": 302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 276,
                "end": 301,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 294,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 279,
                      "end": 294,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 280,
                        "end": 291,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 280,
                            "end": 284,
                            "literal": {
                              "type": "Literal",
                              "start": 280,
                              "end": 284,
                              "raw": "\"aa\"",
                              "value": "aa",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 287,
                            "end": 291,
                            "literal": {
                              "type": "Literal",
                              "start": 287,
                              "end": 291,
                              "raw": "\"bb\"",
                              "value": "bb",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 301,
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 123,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 308,
      "end": 460,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 325,
        "end": 460,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 331,
            "end": 384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 384,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 337,
                  "end": 355,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 339,
                      "end": 343,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 343,
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 343,
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 345,
                      "end": 353,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 353,
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 353,
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 358,
                  "end": 384,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 363,
                      "end": 383,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 364,
                          "end": 382,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 368,
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 370,
                            "end": 382,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 371,
                                "end": 375,
                                "raw": "\"aa\"",
                                "value": "aa",
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 377,
                                "end": 381,
                                "raw": "\"bb\"",
                                "value": "bb",
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 362,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 389,
            "end": 421,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 395,
                "end": 420,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 409,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 396,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 398,
                      "end": 409,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 398,
                          "end": 402,
                          "literal": {
                            "type": "Literal",
                            "start": 398,
                            "end": 402,
                            "raw": "\"aa\"",
                            "value": "aa",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 405,
                          "end": 409,
                          "literal": {
                            "type": "Literal",
                            "start": 405,
                            "end": 409,
                            "raw": "\"bb\"",
                            "value": "bb",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 420,
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 426,
            "end": 458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 457,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 450,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 433,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 435,
                      "end": 450,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 436,
                        "end": 447,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 436,
                            "end": 440,
                            "literal": {
                              "type": "Literal",
                              "start": 436,
                              "end": 440,
                              "raw": "\"aa\"",
                              "value": "aa",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 443,
                            "end": 447,
                            "literal": {
                              "type": "Literal",
                              "start": 443,
                              "end": 447,
                              "raw": "\"bb\"",
                              "value": "bb",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 457,
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 322,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 601,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 479,
        "end": 601,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 485,
            "end": 521,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 491,
                "end": 521,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 492,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 495,
                  "end": 521,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 500,
                      "end": 520,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 501,
                          "end": 519,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 505,
                            "decorators": [],
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 507,
                            "end": 519,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 508,
                                "end": 512,
                                "raw": "\"aa\"",
                                "value": "aa",
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 514,
                                "end": 518,
                                "raw": "\"bb\"",
                                "value": "bb",
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 499,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 526,
            "end": 560,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 559,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 546,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 546,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 535,
                      "end": 546,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 535,
                          "end": 539,
                          "literal": {
                            "type": "Literal",
                            "start": 535,
                            "end": 539,
                            "raw": "\"aa\"",
                            "value": "aa",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 542,
                          "end": 546,
                          "literal": {
                            "type": "Literal",
                            "start": 542,
                            "end": 546,
                            "raw": "\"bb\"",
                            "value": "bb",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 549,
                  "end": 559,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 559,
                    "decorators": [],
                    "name": "firstKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 565,
            "end": 599,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 571,
                "end": 598,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 589,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 574,
                      "end": 589,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 575,
                        "end": 586,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 575,
                            "end": 579,
                            "literal": {
                              "type": "Literal",
                              "start": 575,
                              "end": 579,
                              "raw": "\"aa\"",
                              "value": "aa",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 582,
                            "end": 586,
                            "literal": {
                              "type": "Literal",
                              "start": 582,
                              "end": 586,
                              "raw": "\"bb\"",
                              "value": "bb",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 592,
                  "end": 598,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 593,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 598,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 476,
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
