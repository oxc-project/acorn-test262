__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
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
            "start": 179,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 190
        }
      ],
      "declare": false,
      "start": 175,
      "end": 191
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 202,
                    "end": 208
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 211,
                    "end": 217
                  }
                ],
                "start": 202,
                "end": 217
              },
              "start": 200,
              "end": 217
            },
            "start": 196,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 217
        }
      ],
      "declare": false,
      "start": 192,
      "end": 218
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 234
          },
          "prefix": true,
          "start": 223,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 239,
          "end": 247
        },
        "start": 223,
        "end": 247
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 258
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "var1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 272
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 272
              },
              "start": 255,
              "end": 272
            },
            "directive": null,
            "start": 255,
            "end": 273
          }
        ],
        "start": 249,
        "end": 285
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 300
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 307
              },
              "start": 297,
              "end": 307
            },
            "directive": null,
            "start": 297,
            "end": 308
          }
        ],
        "start": 291,
        "end": 320
      },
      "start": 219,
      "end": 320
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 376,
                    "end": 382
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 385,
                    "end": 391
                  }
                ],
                "start": 376,
                "end": 391
              },
              "start": 374,
              "end": 391
            },
            "start": 366,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 391
        }
      ],
      "declare": false,
      "start": 362,
      "end": 392
    },
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
              "name": "var2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 410,
                      "end": 416
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 419,
                      "end": 425
                    }
                  ],
                  "start": 410,
                  "end": 425
                },
                "start": 408,
                "end": 425
              },
              "start": 404,
              "end": 425
            },
            "init": null,
            "definite": false,
            "start": 404,
            "end": 425
          }
        ],
        "declare": false,
        "start": 400,
        "end": 426
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 393,
      "end": 426
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 442
          },
          "prefix": true,
          "start": 431,
          "end": 442
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 447,
          "end": 455
        },
        "start": 431,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 525
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 532
              },
              "start": 517,
              "end": 532
            },
            "directive": null,
            "start": 517,
            "end": 533
          }
        ],
        "start": 457,
        "end": 554
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 574
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 581
              },
              "start": 566,
              "end": 581
            },
            "directive": null,
            "start": 566,
            "end": 582
          }
        ],
        "start": 560,
        "end": 603
      },
      "start": 427,
      "end": 603
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 175,
  "end": 603
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 179,
    "end": 182,
    "range": [
      179,
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
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 196,
    "end": 200,
    "range": [
      196,
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
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 223,
    "end": 229,
    "range": [
      223,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 239,
    "end": 247,
    "range": [
      239,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 286,
    "end": 290,
    "range": [
      286,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 362,
    "end": 365,
    "range": [
      362,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 366,
    "end": 374,
    "range": [
      366,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 385,
    "end": 391,
    "range": [
      385,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 393,
    "end": 399,
    "range": [
      393,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 404,
    "end": 408,
    "range": [
      404,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 419,
    "end": 425,
    "range": [
      419,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 427,
    "end": 429,
    "range": [
      427,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 438,
    "end": 442,
    "range": [
      438,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 443,
    "end": 446,
    "range": [
      443,
      446
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 447,
    "end": 455,
    "range": [
      447,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 517,
    "end": 525,
    "range": [
      517,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 528,
    "end": 532,
    "range": [
      528,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 566,
    "end": 574,
    "range": [
      566,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 577,
    "end": 581,
    "range": [
      577,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  }
]
```
