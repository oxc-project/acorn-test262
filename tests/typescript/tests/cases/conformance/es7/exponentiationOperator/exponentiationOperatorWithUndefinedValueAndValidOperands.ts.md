__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 120
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "initializer": null,
            "computed": false,
            "start": 127,
            "end": 128
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "initializer": null,
            "computed": false,
            "start": 134,
            "end": 135
          }
        ],
        "start": 121,
        "end": 137
      },
      "const": false,
      "declare": false,
      "start": 114,
      "end": 137
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 146,
                "end": 149
              },
              "start": 144,
              "end": 149
            },
            "start": 143,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 149
        }
      ],
      "declare": false,
      "start": 139,
      "end": 150
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "start": 155,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 164
        }
      ],
      "declare": false,
      "start": 151,
      "end": 165
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
            "name": "rk1",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 188
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 200
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "start": 191,
            "end": 205
          },
          "definite": false,
          "start": 185,
          "end": 205
        }
      ],
      "declare": false,
      "start": 181,
      "end": 206
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
            "name": "rk2",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 214
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 226
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "start": 217,
            "end": 231
          },
          "definite": false,
          "start": 211,
          "end": 231
        }
      ],
      "declare": false,
      "start": 207,
      "end": 232
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
            "name": "rk3",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 240
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 252
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 256,
              "end": 257
            },
            "start": 243,
            "end": 257
          },
          "definite": false,
          "start": 237,
          "end": 257
        }
      ],
      "declare": false,
      "start": 233,
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
            "name": "rk4",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 278
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 283
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "optional": false,
              "computed": false,
              "start": 282,
              "end": 285
            },
            "start": 269,
            "end": 285
          },
          "definite": false,
          "start": 263,
          "end": 285
        }
      ],
      "declare": false,
      "start": 259,
      "end": 286
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
            "name": "rk5",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 294
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 311
            },
            "start": 297,
            "end": 311
          },
          "definite": false,
          "start": 291,
          "end": 311
        }
      ],
      "declare": false,
      "start": 287,
      "end": 312
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
            "name": "rk6",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 320
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 337
            },
            "start": 323,
            "end": 337
          },
          "definite": false,
          "start": 317,
          "end": 337
        }
      ],
      "declare": false,
      "start": 313,
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
            "name": "rk7",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 346
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 349,
              "end": 350
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 363
            },
            "start": 349,
            "end": 363
          },
          "definite": false,
          "start": 343,
          "end": 363
        }
      ],
      "declare": false,
      "start": 339,
      "end": 364
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
            "name": "rk8",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 372
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 378
              },
              "optional": false,
              "computed": false,
              "start": 375,
              "end": 378
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 391
            },
            "start": 375,
            "end": 391
          },
          "definite": false,
          "start": 369,
          "end": 391
        }
      ],
      "declare": false,
      "start": 365,
      "end": 392
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 392
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 114,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "rk1",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "rk2",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 217,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "rk3",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 243,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 253,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "rk4",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 269,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "rk5",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "rk6",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 325,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 328,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "rk7",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 354,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "rk8",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 382,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  }
]
```
