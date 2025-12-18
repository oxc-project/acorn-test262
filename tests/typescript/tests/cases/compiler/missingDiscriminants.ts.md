__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 69
      },
      "typeParameters": null,
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 81
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 83,
                      "end": 86
                    },
                    "start": 83,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "accessibility": null,
                "static": false,
                "start": 78,
                "end": 87
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 93,
                      "end": 94
                    },
                    "start": 93,
                    "end": 94
                  },
                  "start": 91,
                  "end": 94
                },
                "accessibility": null,
                "static": false,
                "start": 88,
                "end": 94
              }
            ],
            "start": 76,
            "end": 96
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 106
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 108,
                      "end": 111
                    },
                    "start": 108,
                    "end": 111
                  },
                  "start": 106,
                  "end": 111
                },
                "accessibility": null,
                "static": false,
                "start": 103,
                "end": 111
              }
            ],
            "start": 101,
            "end": 113
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
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 123
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 125,
                      "end": 126
                    },
                    "start": 125,
                    "end": 126
                  },
                  "start": 123,
                  "end": 126
                },
                "accessibility": null,
                "static": false,
                "start": 120,
                "end": 126
              }
            ],
            "start": 118,
            "end": 128
          }
        ],
        "start": 74,
        "end": 128
      },
      "declare": false,
      "start": 59,
      "end": 128
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
            "name": "thing1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 149
                },
                "typeArguments": null,
                "start": 144,
                "end": 149
              },
              "start": 142,
              "end": 149
            },
            "start": 136,
            "end": 149
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 159,
                  "end": 162
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 162
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 167
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 169,
                  "end": 170
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 164,
                "end": 170
              }
            ],
            "start": 152,
            "end": 172
          },
          "definite": false,
          "start": 136,
          "end": 172
        }
      ],
      "declare": false,
      "start": 130,
      "end": 172
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
            "name": "thing2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 192
                },
                "typeArguments": null,
                "start": 187,
                "end": 192
              },
              "start": 185,
              "end": 192
            },
            "start": 179,
            "end": 192
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 200
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 202,
                  "end": 205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 197,
                "end": 205
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 210
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 212,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 213
              }
            ],
            "start": 195,
            "end": 215
          },
          "definite": false,
          "start": 179,
          "end": 215
        }
      ],
      "declare": false,
      "start": 173,
      "end": 215
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
            "name": "thing3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 257
                },
                "typeArguments": null,
                "start": 252,
                "end": 257
              },
              "start": 250,
              "end": 257
            },
            "start": 244,
            "end": 257
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 265
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 267,
                  "end": 268
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 268
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 273
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 275,
                  "end": 278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 278
              }
            ],
            "start": 260,
            "end": 280
          },
          "definite": false,
          "start": 244,
          "end": 280
        }
      ],
      "declare": false,
      "start": 238,
      "end": 280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 313
      },
      "typeParameters": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 326
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 328,
                      "end": 331
                    },
                    "start": 328,
                    "end": 331
                  },
                  "start": 326,
                  "end": 331
                },
                "accessibility": null,
                "static": false,
                "start": 322,
                "end": 332
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subkind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 340
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 342,
                      "end": 343
                    },
                    "start": 342,
                    "end": 343
                  },
                  "start": 340,
                  "end": 343
                },
                "accessibility": null,
                "static": false,
                "start": 333,
                "end": 344
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 350
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 352,
                    "end": 358
                  },
                  "start": 350,
                  "end": 358
                },
                "accessibility": null,
                "static": false,
                "start": 345,
                "end": 358
              }
            ],
            "start": 320,
            "end": 360
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 371
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 373,
                      "end": 376
                    },
                    "start": 373,
                    "end": 376
                  },
                  "start": 371,
                  "end": 376
                },
                "accessibility": null,
                "static": false,
                "start": 367,
                "end": 377
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subkind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 385
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 387,
                      "end": 388
                    },
                    "start": 387,
                    "end": 388
                  },
                  "start": 385,
                  "end": 388
                },
                "accessibility": null,
                "static": false,
                "start": 378,
                "end": 389
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 395
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 397,
                    "end": 403
                  },
                  "start": 395,
                  "end": 403
                },
                "accessibility": null,
                "static": false,
                "start": 390,
                "end": 403
              }
            ],
            "start": 365,
            "end": 405
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 416
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 418,
                      "end": 421
                    },
                    "start": 418,
                    "end": 421
                  },
                  "start": 416,
                  "end": 421
                },
                "accessibility": null,
                "static": false,
                "start": 412,
                "end": 421
              }
            ],
            "start": 410,
            "end": 423
          }
        ],
        "start": 318,
        "end": 423
      },
      "declare": false,
      "start": 304,
      "end": 423
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
            "name": "item1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 442
                },
                "typeArguments": null,
                "start": 438,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "start": 431,
            "end": 442
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subkind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 454
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 456,
                  "end": 457
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 447,
                "end": 457
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 463
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 465,
                  "end": 468
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 459,
                "end": 468
              }
            ],
            "start": 445,
            "end": 470
          },
          "definite": false,
          "start": 431,
          "end": 470
        }
      ],
      "declare": false,
      "start": 425,
      "end": 470
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
            "name": "item2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 534
                },
                "typeArguments": null,
                "start": 530,
                "end": 534
              },
              "start": 528,
              "end": 534
            },
            "start": 523,
            "end": 534
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 543
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 545,
                  "end": 548
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 539,
                "end": 548
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subkind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 557
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 559,
                  "end": 560
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 550,
                "end": 560
              }
            ],
            "start": 537,
            "end": 562
          },
          "definite": false,
          "start": 523,
          "end": 562
        }
      ],
      "declare": false,
      "start": 517,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 64,
    "end": 69,
    "range": [
      64,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 78,
    "end": 81,
    "range": [
      78,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
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
    "value": "num",
    "start": 120,
    "end": 123,
    "range": [
      120,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "thing1",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "thing2",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 202,
    "end": 205,
    "range": [
      202,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "thing3",
    "start": 244,
    "end": 250,
    "range": [
      244,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 252,
    "end": 257,
    "range": [
      252,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 304,
    "end": 308,
    "range": [
      304,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 309,
    "end": 313,
    "range": [
      309,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "subkind",
    "start": 333,
    "end": 340,
    "range": [
      333,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 367,
    "end": 371,
    "range": [
      367,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 373,
    "end": 376,
    "range": [
      373,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "subkind",
    "start": 378,
    "end": 385,
    "range": [
      378,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 390,
    "end": 395,
    "range": [
      390,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 412,
    "end": 416,
    "range": [
      412,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 418,
    "end": 421,
    "range": [
      418,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 425,
    "end": 430,
    "range": [
      425,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "item1",
    "start": 431,
    "end": 436,
    "range": [
      431,
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
    "value": "Item",
    "start": 438,
    "end": 442,
    "range": [
      438,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "subkind",
    "start": 447,
    "end": 454,
    "range": [
      447,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 459,
    "end": 463,
    "range": [
      459,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 517,
    "end": 522,
    "range": [
      517,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "item2",
    "start": 523,
    "end": 528,
    "range": [
      523,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 539,
    "end": 543,
    "range": [
      539,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 545,
    "end": 548,
    "range": [
      545,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "subkind",
    "start": 550,
    "end": 557,
    "range": [
      550,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  }
]
```
