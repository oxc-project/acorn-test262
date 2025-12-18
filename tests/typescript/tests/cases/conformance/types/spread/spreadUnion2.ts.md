__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ],
                "start": 30,
                "end": 55
              },
              "start": 28,
              "end": 55
            },
            "start": 14,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 55
        }
      ],
      "declare": true,
      "start": 0,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 85
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 87,
                            "end": 93
                          },
                          "start": 85,
                          "end": 93
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 84,
                        "end": 93
                      }
                    ],
                    "start": 82,
                    "end": 95
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 98,
                    "end": 102
                  }
                ],
                "start": 82,
                "end": 102
              },
              "start": 80,
              "end": 102
            },
            "start": 71,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 102
        }
      ],
      "declare": true,
      "start": 57,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 113,
                    "end": 115
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 121
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "start": 121,
                          "end": 129
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 120,
                        "end": 129
                      }
                    ],
                    "start": 118,
                    "end": 131
                  }
                ],
                "start": 113,
                "end": 131
              },
              "start": 111,
              "end": 131
            },
            "start": 109,
            "end": 131
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 131
        }
      ],
      "declare": false,
      "start": 105,
      "end": 132
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 139
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 161
                },
                "start": 144,
                "end": 161
              }
            ],
            "start": 142,
            "end": 163
          },
          "definite": false,
          "start": 137,
          "end": 163
        }
      ],
      "declare": false,
      "start": 133,
      "end": 164
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 174,
                    "end": 176
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 182
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 184,
                            "end": 190
                          },
                          "start": 182,
                          "end": 190
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 181,
                        "end": 190
                      }
                    ],
                    "start": 179,
                    "end": 192
                  }
                ],
                "start": 174,
                "end": 192
              },
              "start": 172,
              "end": 192
            },
            "start": 170,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 192
        }
      ],
      "declare": false,
      "start": 166,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 200
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 217
                },
                "start": 205,
                "end": 217
              }
            ],
            "start": 203,
            "end": 219
          },
          "definite": false,
          "start": 198,
          "end": 219
        }
      ],
      "declare": false,
      "start": 194,
      "end": 220
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 230,
                    "end": 232
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 238
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 240,
                            "end": 246
                          },
                          "start": 238,
                          "end": 246
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 237,
                        "end": 246
                      }
                    ],
                    "start": 235,
                    "end": 248
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 254
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 256,
                            "end": 262
                          },
                          "start": 254,
                          "end": 262
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 253,
                        "end": 262
                      }
                    ],
                    "start": 251,
                    "end": 264
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 272,
                            "end": 278
                          },
                          "start": 270,
                          "end": 278
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 269,
                        "end": 279
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 281
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 283,
                            "end": 289
                          },
                          "start": 281,
                          "end": 289
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 280,
                        "end": 289
                      }
                    ],
                    "start": 267,
                    "end": 291
                  }
                ],
                "start": 230,
                "end": 291
              },
              "start": 228,
              "end": 291
            },
            "start": 226,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 291
        }
      ],
      "declare": false,
      "start": 222,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 299
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 321
                },
                "start": 304,
                "end": 321
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 335
                },
                "start": 323,
                "end": 335
              }
            ],
            "start": 302,
            "end": 337
          },
          "definite": false,
          "start": 297,
          "end": 337
        }
      ],
      "declare": false,
      "start": 293,
      "end": 338
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 345
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 362
                },
                "start": 350,
                "end": 362
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 381
                },
                "start": 364,
                "end": 381
              }
            ],
            "start": 348,
            "end": 383
          },
          "definite": false,
          "start": 343,
          "end": 383
        }
      ],
      "declare": false,
      "start": 339,
      "end": 384
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 394,
                    "end": 396
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 401,
                          "end": 402
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 404,
                            "end": 410
                          },
                          "start": 402,
                          "end": 410
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 401,
                        "end": 410
                      }
                    ],
                    "start": 399,
                    "end": 412
                  }
                ],
                "start": 394,
                "end": 412
              },
              "start": 392,
              "end": 412
            },
            "start": 390,
            "end": 412
          },
          "init": null,
          "definite": false,
          "start": 390,
          "end": 412
        }
      ],
      "declare": false,
      "start": 386,
      "end": 413
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 420
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 442
                },
                "start": 425,
                "end": 442
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefinedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 461
                },
                "start": 444,
                "end": 461
              }
            ],
            "start": 423,
            "end": 463
          },
          "definite": false,
          "start": 418,
          "end": 463
        }
      ],
      "declare": false,
      "start": 414,
      "end": 464
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 474,
                    "end": 476
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 482
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 484,
                            "end": 490
                          },
                          "start": 482,
                          "end": 490
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 481,
                        "end": 490
                      }
                    ],
                    "start": 479,
                    "end": 492
                  }
                ],
                "start": 474,
                "end": 492
              },
              "start": 472,
              "end": 492
            },
            "start": 470,
            "end": 492
          },
          "init": null,
          "definite": false,
          "start": 470,
          "end": 492
        }
      ],
      "declare": false,
      "start": 466,
      "end": 493
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 500
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 517
                },
                "start": 505,
                "end": 517
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nullUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 531
                },
                "start": 519,
                "end": 531
              }
            ],
            "start": 503,
            "end": 533
          },
          "definite": false,
          "start": 498,
          "end": 533
        }
      ],
      "declare": false,
      "start": 494,
      "end": 534
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 535
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 14,
    "end": 28,
    "range": [
      14,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 46,
    "end": 55,
    "range": [
      46,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 71,
    "end": 80,
    "range": [
      71,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 98,
    "end": 102,
    "range": [
      98,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 109,
    "end": 111,
    "range": [
      109,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136,
    "range": [
      133,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 137,
    "end": 139,
    "range": [
      137,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 144,
    "end": 147,
    "range": [
      144,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 147,
    "end": 161,
    "range": [
      147,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 170,
    "end": 172,
    "range": [
      170,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 184,
    "end": 190,
    "range": [
      184,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 205,
    "end": 208,
    "range": [
      205,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 208,
    "end": 217,
    "range": [
      208,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 256,
    "end": 262,
    "range": [
      256,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296,
    "range": [
      293,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 307,
    "end": 321,
    "range": [
      307,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 323,
    "end": 326,
    "range": [
      323,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 326,
    "end": 335,
    "range": [
      326,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342,
    "range": [
      339,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 353,
    "end": 362,
    "range": [
      353,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 367,
    "end": 381,
    "range": [
      367,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389,
    "range": [
      386,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 390,
    "end": 392,
    "range": [
      390,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 428,
    "end": 442,
    "range": [
      428,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "undefinedUnion",
    "start": 447,
    "end": 461,
    "range": [
      447,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 508,
    "end": 517,
    "range": [
      508,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "nullUnion",
    "start": 522,
    "end": 531,
    "range": [
      522,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  }
]
```
