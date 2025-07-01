__ESTREE_TEST__:PASS:
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
