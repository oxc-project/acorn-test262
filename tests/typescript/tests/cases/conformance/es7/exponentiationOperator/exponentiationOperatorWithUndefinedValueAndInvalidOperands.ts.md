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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 121,
                "end": 128
              },
              "start": 119,
              "end": 128
            },
            "start": 118,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 128
        }
      ],
      "declare": false,
      "start": 114,
      "end": 129
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
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "start": 134,
            "end": 143
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 143
        }
      ],
      "declare": false,
      "start": 130,
      "end": 144
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 158
                },
                "typeArguments": null,
                "start": 152,
                "end": 158
              },
              "start": 150,
              "end": 158
            },
            "start": 149,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 158
        }
      ],
      "declare": false,
      "start": 145,
      "end": 159
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
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 184
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 196
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "start": 187,
            "end": 201
          },
          "definite": false,
          "start": 180,
          "end": 201
        }
      ],
      "declare": false,
      "start": 176,
      "end": 202
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
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 211
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 223
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "start": 214,
            "end": 228
          },
          "definite": false,
          "start": 207,
          "end": 228
        }
      ],
      "declare": false,
      "start": 203,
      "end": 229
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
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 238
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 250
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "start": 241,
            "end": 255
          },
          "definite": false,
          "start": 234,
          "end": 255
        }
      ],
      "declare": false,
      "start": 230,
      "end": 256
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 266
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 270
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 283
            },
            "start": 269,
            "end": 283
          },
          "definite": false,
          "start": 262,
          "end": 283
        }
      ],
      "declare": false,
      "start": 258,
      "end": 284
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
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 293
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 310
            },
            "start": 296,
            "end": 310
          },
          "definite": false,
          "start": 289,
          "end": 310
        }
      ],
      "declare": false,
      "start": 285,
      "end": 311
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
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 320
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
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
          "start": 316,
          "end": 337
        }
      ],
      "declare": false,
      "start": 312,
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
            "name": "r1c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 348
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 360
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 364,
              "end": 368
            },
            "start": 351,
            "end": 368
          },
          "definite": false,
          "start": 344,
          "end": 368
        }
      ],
      "declare": false,
      "start": 340,
      "end": 369
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
            "name": "r1c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 378
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 390
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 394,
              "end": 396
            },
            "start": 381,
            "end": 396
          },
          "definite": false,
          "start": 374,
          "end": 396
        }
      ],
      "declare": false,
      "start": 370,
      "end": 397
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
            "name": "r1c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 406
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 418
            },
            "operator": "**",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 422,
              "end": 424
            },
            "start": 409,
            "end": 424
          },
          "definite": false,
          "start": 402,
          "end": 424
        }
      ],
      "declare": false,
      "start": 398,
      "end": 425
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
            "name": "r1d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 435
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 438,
              "end": 442
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 455
            },
            "start": 438,
            "end": 455
          },
          "definite": false,
          "start": 431,
          "end": 455
        }
      ],
      "declare": false,
      "start": 427,
      "end": 456
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
            "name": "r1d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 465
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 468,
              "end": 470
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 483
            },
            "start": 468,
            "end": 483
          },
          "definite": false,
          "start": 461,
          "end": 483
        }
      ],
      "declare": false,
      "start": 457,
      "end": 484
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
            "name": "r1d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 493
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 496,
              "end": 498
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 511
            },
            "start": 496,
            "end": 511
          },
          "definite": false,
          "start": 489,
          "end": 511
        }
      ],
      "declare": false,
      "start": 485,
      "end": 512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 512
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 203,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 241,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 262,
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
    "value": "a",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 271,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 301,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 316,
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
    "value": "c",
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
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 351,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 361,
    "end": 363
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "r1c2",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 381,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 391,
    "end": 393
  },
  {
    "type": "String",
    "value": "''",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "r1c3",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 409,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 443,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 446,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "r1d2",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "''",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 474,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "r1d3",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 502,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  }
]
```
