__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "oops",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "start": 21,
            "end": 33
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          },
          "start": 34,
          "end": 39
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15,
    "range": [
      7,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "oops",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  }
]
```
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
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 24,
                "end": 26
              },
              "start": 22,
              "end": 26
            },
            "start": 14,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 51
      },
      "exportKind": "value",
      "start": 28,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "value": "_default",
    "start": 14,
    "end": 22,
    "range": [
      14,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34,
    "range": [
      28,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 43,
    "end": 51,
    "range": [
      43,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "not.json",
        "raw": "\"not.json\"",
        "start": 21,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moreOops",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
          },
          "start": 46,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json",
        "raw": "\"actually-json\"",
        "start": 60,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 76
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typed",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 110
          },
          "start": 105,
          "end": 110
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json/typed",
        "raw": "\"actually-json/typed\"",
        "start": 116,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 98,
      "end": 138
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 174
          },
          "start": 168,
          "end": 174
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 180,
        "end": 195
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 209,
            "end": 215
          },
          "start": 203,
          "end": 215
        }
      ],
      "importKind": "value",
      "start": 161,
      "end": 218
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 241
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config1",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 252
          },
          "importKind": "value",
          "start": 234,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 260,
        "end": 275
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 287
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 289,
            "end": 295
          },
          "start": 283,
          "end": 295
        }
      ],
      "importKind": "value",
      "start": 225,
      "end": 298
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 319
          },
          "start": 312,
          "end": 319
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 325,
        "end": 340
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 305,
      "end": 341
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 400
          },
          "start": 389,
          "end": 400
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 406,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 377,
      "end": 422
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type2",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 464
          },
          "start": 452,
          "end": 464
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 470,
        "end": 485
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 497
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 499,
            "end": 505
          },
          "start": 493,
          "end": 505
        }
      ],
      "importKind": "type",
      "start": 440,
      "end": 508
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "importKind": "value",
          "start": 579,
          "end": 586
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 594,
        "end": 609
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 621
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 623,
            "end": 629
          },
          "start": 617,
          "end": 629
        }
      ],
      "importKind": "value",
      "start": 570,
      "end": 632
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 675
          },
          "start": 663,
          "end": 675
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 681,
        "end": 696
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 708
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 710,
            "end": 716
          },
          "start": 704,
          "end": 716
        }
      ],
      "importKind": "value",
      "start": 656,
      "end": 719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 727
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 728,
          "end": 735
        },
        "optional": false,
        "computed": false,
        "start": 720,
        "end": 735
      },
      "directive": null,
      "start": 720,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 753
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 761
        },
        "optional": false,
        "computed": false,
        "start": 746,
        "end": 761
      },
      "directive": null,
      "start": 746,
      "end": 762
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 769
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "oops",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"not.json\"",
    "start": 21,
    "end": 31,
    "range": [
      21,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "moreOops",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 55,
    "end": 59,
    "range": [
      55,
      59
    ]
  },
  {
    "type": "String",
    "value": "\"actually-json\"",
    "start": 60,
    "end": 75,
    "range": [
      60,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 98,
    "end": 104,
    "range": [
      98,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "typed",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "String",
    "value": "\"actually-json/typed\"",
    "start": 116,
    "end": 137,
    "range": [
      116,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 161,
    "end": 167,
    "range": [
      161,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 175,
    "end": 179,
    "range": [
      175,
      179
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 180,
    "end": 195,
    "range": [
      180,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
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
    "value": "import",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 234,
    "end": 241,
    "range": [
      234,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 242,
    "end": 244,
    "range": [
      242,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "config1",
    "start": 245,
    "end": 252,
    "range": [
      245,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 255,
    "end": 259,
    "range": [
      255,
      259
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 260,
    "end": 275,
    "range": [
      260,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 283,
    "end": 287,
    "range": [
      283,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "config2",
    "start": 312,
    "end": 319,
    "range": [
      312,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 325,
    "end": 340,
    "range": [
      325,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 377,
    "end": 383,
    "range": [
      377,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 384,
    "end": 388,
    "range": [
      384,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "config2Type",
    "start": 389,
    "end": 400,
    "range": [
      389,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 401,
    "end": 405,
    "range": [
      401,
      405
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 406,
    "end": 421,
    "range": [
      406,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451,
    "range": [
      447,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "config2Type2",
    "start": 452,
    "end": 464,
    "range": [
      452,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 465,
    "end": 469,
    "range": [
      465,
      469
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 470,
    "end": 485,
    "range": [
      470,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 486,
    "end": 490,
    "range": [
      486,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 499,
    "end": 505,
    "range": [
      499,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 579,
    "end": 586,
    "range": [
      579,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 589,
    "end": 593,
    "range": [
      589,
      593
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 594,
    "end": 609,
    "range": [
      594,
      609
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621,
    "range": [
      617,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 623,
    "end": 629,
    "range": [
      623,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 656,
    "end": 662,
    "range": [
      656,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 668,
    "end": 675,
    "range": [
      668,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 676,
    "end": 680,
    "range": [
      676,
      680
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 681,
    "end": 696,
    "range": [
      681,
      696
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 697,
    "end": 701,
    "range": [
      697,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 710,
    "end": 716,
    "range": [
      710,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 720,
    "end": 727,
    "range": [
      720,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 728,
    "end": 735,
    "range": [
      728,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 746,
    "end": 753,
    "range": [
      746,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 754,
    "end": 761,
    "range": [
      754,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 19,
        "end": 34
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 48,
            "end": 54
          },
          "start": 42,
          "end": 54
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 81
          },
          "start": 74,
          "end": 81
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 87,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 103
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "importKind": "value",
          "start": 119,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 134,
        "end": 149
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 150
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "start": 164,
          "end": 176
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 182,
        "end": 197
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 157,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 206
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 214
        },
        "optional": false,
        "computed": false,
        "start": 199,
        "end": 214
      },
      "directive": null,
      "start": 199,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 222,
        "end": 237
      },
      "directive": null,
      "start": 222,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 7,
    "end": 13,
    "range": [
      7,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18,
    "range": [
      14,
      18
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 19,
    "end": 34,
    "range": [
      19,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "config2",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 82,
    "end": 86,
    "range": [
      82,
      86
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 87,
    "end": 102,
    "range": [
      87,
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
    "value": "import",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 119,
    "end": 126,
    "range": [
      119,
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
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 134,
    "end": 149,
    "range": [
      134,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 166,
    "end": 168,
    "range": [
      166,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 169,
    "end": 176,
    "range": [
      169,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 182,
    "end": 197,
    "range": [
      182,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 199,
    "end": 206,
    "range": [
      199,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 207,
    "end": 214,
    "range": [
      207,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 222,
    "end": 229,
    "range": [
      222,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 230,
    "end": 237,
    "range": [
      230,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  }
]
```
