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
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "thing1",
    "start": 12,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 24,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "thing2",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 80,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Template",
    "value": "`a`",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "thing3",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 133,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 138,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "RegularExpression",
    "value": "/a/g",
    "regex": {
      "flags": "g",
      "pattern": "a"
    },
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "thing4",
    "start": 185,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 192,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 197,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "thing5",
    "start": 245,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 252,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 257,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 305,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "thing6",
    "start": 308,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 315,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"./mod.mjs\"",
    "start": 320,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "0.",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 364,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  }
]
```
