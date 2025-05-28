__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 535,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 55,
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 55,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 30,
                "end": 55,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 30,
                    "end": 43,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 32,
                        "end": 41,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 103,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 102,
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 102,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 82,
                "end": 102,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 82,
                    "end": 95,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 84,
                        "end": 93,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 85,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 87,
                            "end": 93
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 98,
                    "end": 102
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 132,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 131,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 131,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 113,
                "end": 131,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 113,
                    "end": 115,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 118,
                    "end": 131,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 120,
                        "end": 129,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 121,
                          "end": 129,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 123,
                            "end": 129
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 164,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 142,
            "end": 163,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 144,
                "end": 161,
                "argument": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 161,
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 192,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 192,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 174,
                "end": 192,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 174,
                    "end": 176,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 179,
                    "end": 192,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 181,
                        "end": 190,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 182,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 182,
                          "end": 190,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 184,
                            "end": 190
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 220,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 203,
            "end": 219,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 205,
                "end": 217,
                "argument": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 217,
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 291,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 291,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 230,
                "end": 291,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 230,
                    "end": 232,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 235,
                    "end": 248,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 237,
                        "end": 246,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 238,
                          "end": 246,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 240,
                            "end": 246
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 251,
                    "end": 264,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 253,
                        "end": 262,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 253,
                          "end": 254,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 254,
                          "end": 262,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 256,
                            "end": 262
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 267,
                    "end": 291,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 269,
                        "end": 279,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 270,
                          "end": 278,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 272,
                            "end": 278
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 280,
                        "end": 289,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 281,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 281,
                          "end": 289,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 283,
                            "end": 289
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 299,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 302,
            "end": 337,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 304,
                "end": 321,
                "argument": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 321,
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 323,
                "end": 335,
                "argument": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 335,
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 384,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 348,
            "end": 383,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 350,
                "end": 362,
                "argument": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 362,
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 364,
                "end": 381,
                "argument": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 381,
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 413,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 412,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 412,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 394,
                "end": 412,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 394,
                    "end": 396,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 399,
                    "end": 412,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 401,
                        "end": 410,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 402,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 402,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 404,
                            "end": 410
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 464,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 463,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 420,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 423,
            "end": 463,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 425,
                "end": 442,
                "argument": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 442,
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 444,
                "end": 461,
                "argument": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 461,
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 493,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 492,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 492,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 474,
                "end": 492,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 474,
                    "end": 476,
                    "members": []
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 479,
                    "end": 492,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 481,
                        "end": 490,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 481,
                          "end": 482,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 482,
                          "end": 490,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 484,
                            "end": 490
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 534,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 503,
            "end": 533,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 505,
                "end": 517,
                "argument": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 517,
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 519,
                "end": 531,
                "argument": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 531,
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
