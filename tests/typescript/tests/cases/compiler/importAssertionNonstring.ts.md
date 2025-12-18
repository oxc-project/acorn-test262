__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 24,
        "end": 35
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "value": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 51,
            "end": 52
          },
          "start": 44,
          "end": 52
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing2",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 74
          },
          "start": 63,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 80,
        "end": 91
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 105
          },
          "value": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": true,
                "start": 107,
                "end": 110
              }
            ],
            "expressions": [],
            "start": 107,
            "end": 110
          },
          "start": 100,
          "end": 110
        }
      ],
      "importKind": "value",
      "start": 56,
      "end": 112
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing3",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 132
          },
          "start": 121,
          "end": 132
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 138,
        "end": 149
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 163
          },
          "value": {
            "type": "Literal",
            "value": null,
            "raw": "/a/g",
            "regex": {
              "pattern": "a",
              "flags": "g"
            },
            "start": 165,
            "end": 169
          },
          "start": 158,
          "end": 169
        }
      ],
      "importKind": "value",
      "start": 114,
      "end": 171
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing4",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 191
          },
          "start": 180,
          "end": 191
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 197,
        "end": 208
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 222
          },
          "value": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 225,
                "end": 228
              }
            ],
            "start": 224,
            "end": 229
          },
          "start": 217,
          "end": 229
        }
      ],
      "importKind": "value",
      "start": 173,
      "end": 231
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing5",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 251
          },
          "start": 240,
          "end": 251
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 257,
        "end": 268
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 282
          },
          "value": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 289,
                  "end": 290
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 286,
                "end": 290
              }
            ],
            "start": 284,
            "end": 292
          },
          "start": 277,
          "end": 292
        }
      ],
      "importKind": "value",
      "start": 233,
      "end": 294
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing6",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 314
          },
          "start": 303,
          "end": 314
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 320,
        "end": 331
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
            "start": 340,
            "end": 344
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 346,
            "end": 352
          },
          "start": 340,
          "end": 352
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 359
          },
          "value": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": 0,
                "raw": "0.",
                "start": 361,
                "end": 363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 372
              },
              "optional": false,
              "computed": false,
              "start": 361,
              "end": 372
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 361,
            "end": 374
          },
          "start": 354,
          "end": 374
        }
      ],
      "importKind": "value",
      "start": 296,
      "end": 375
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 375
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
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "thing1",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 24,
    "end": 35,
    "range": [
      24,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 65,
    "end": 67,
    "range": [
      65,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "thing2",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79,
    "range": [
      75,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 80,
    "end": 91,
    "range": [
      80,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Template",
    "value": "`a`",
    "start": 107,
    "end": 110,
    "range": [
      107,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "thing3",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 138,
    "end": 149,
    "range": [
      138,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/a/g",
    "regex": {
      "flags": "g",
      "pattern": "a"
    },
    "start": 165,
    "end": 169,
    "range": [
      165,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 173,
    "end": 179,
    "range": [
      173,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184,
    "range": [
      182,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "thing4",
    "start": 185,
    "end": 191,
    "range": [
      185,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 192,
    "end": 196,
    "range": [
      192,
      196
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 197,
    "end": 208,
    "range": [
      197,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 217,
    "end": 222,
    "range": [
      217,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 233,
    "end": 239,
    "range": [
      233,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 240,
    "end": 241,
    "range": [
      240,
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
    "value": "thing5",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 252,
    "end": 256,
    "range": [
      252,
      256
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 257,
    "end": 268,
    "range": [
      257,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287,
    "range": [
      286,
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
    "type": "Numeric",
    "value": "0",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 296,
    "end": 302,
    "range": [
      296,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 305,
    "end": 307,
    "range": [
      305,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "thing6",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 315,
    "end": 319,
    "range": [
      315,
      319
    ]
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 320,
    "end": 331,
    "range": [
      320,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344,
    "range": [
      340,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Numeric",
    "value": "0.",
    "start": 361,
    "end": 363,
    "range": [
      361,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 364,
    "end": 372,
    "range": [
      364,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  }
]
```
