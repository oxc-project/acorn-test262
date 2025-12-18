__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 64
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 67,
                            "end": 69
                          },
                          "definite": false,
                          "start": 63,
                          "end": 69
                        }
                      ],
                      "declare": false,
                      "start": 59,
                      "end": 70
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 52,
                    "end": 70
                  }
                ],
                "start": 42,
                "end": 76
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 28,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 102
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 115
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 117,
                        "end": 123
                      },
                      "start": 115,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 103,
                "end": 130
              },
              "declare": false,
              "start": 89,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 82,
            "end": 130
          }
        ],
        "start": 15,
        "end": 132
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 132
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "init": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 194,
                          "end": 196
                        },
                        "definite": false,
                        "start": 190,
                        "end": 196
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 197
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 179,
                  "end": 197
                }
              ],
              "start": 169,
              "end": 203
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 155,
            "end": 203
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 229
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 243,
                        "end": 249
                      },
                      "start": 241,
                      "end": 249
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 240,
                    "end": 250
                  }
                ],
                "start": 230,
                "end": 256
              },
              "declare": false,
              "start": 216,
              "end": 256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 209,
            "end": 256
          }
        ],
        "start": 149,
        "end": 258
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 134,
      "end": 258
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 266
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 277
              },
              "optional": false,
              "computed": false,
              "start": 269,
              "end": 277
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 279
          },
          "definite": false,
          "start": 264,
          "end": 279
        }
      ],
      "declare": false,
      "start": 260,
      "end": 280
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 342
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 392
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 395,
                            "end": 397
                          },
                          "definite": false,
                          "start": 391,
                          "end": 397
                        }
                      ],
                      "declare": false,
                      "start": 387,
                      "end": 398
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 380,
                    "end": 398
                  }
                ],
                "start": 370,
                "end": 404
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 356,
              "end": 404
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 349,
            "end": 404
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 423
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 438,
                      "end": 444
                    },
                    "start": 436,
                    "end": 444
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 435,
                  "end": 445
                }
              ],
              "start": 424,
              "end": 451
            },
            "declare": false,
            "start": 410,
            "end": 451
          }
        ],
        "start": 343,
        "end": 453
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 328,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 28,
    "end": 37,
    "range": [
      28,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 38,
    "end": 41,
    "range": [
      38,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 59,
    "end": 62,
    "range": [
      59,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 89,
    "end": 98,
    "range": [
      89,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 99,
    "end": 102,
    "range": [
      99,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 134,
    "end": 143,
    "range": [
      134,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 155,
    "end": 164,
    "range": [
      155,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 194,
    "end": 196,
    "range": [
      194,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 216,
    "end": 225,
    "range": [
      216,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 226,
    "end": 229,
    "range": [
      226,
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
    "type": "Identifier",
    "value": "y",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 264,
    "end": 266,
    "range": [
      264,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 269,
    "end": 273,
    "range": [
      269,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 328,
    "end": 337,
    "range": [
      328,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 338,
    "end": 342,
    "range": [
      338,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 349,
    "end": 355,
    "range": [
      349,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 356,
    "end": 365,
    "range": [
      356,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 380,
    "end": 386,
    "range": [
      380,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 395,
    "end": 397,
    "range": [
      395,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 410,
    "end": 419,
    "range": [
      410,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 420,
    "end": 423,
    "range": [
      420,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 438,
    "end": 444,
    "range": [
      438,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  }
]
```
