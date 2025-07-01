__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "exportKind": "value",
      "start": 30,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:PASS:
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 14,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
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
            "start": 36,
            "end": 43
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 36,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 56,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 27,
      "end": 68
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 76,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "importKind": "value",
          "start": 81,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 101,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 69,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "start": 121,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b.mjs",
        "raw": "\"./b.mjs\"",
        "start": 136,
        "end": 145
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 146
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 163
          },
          "exportKind": "value",
          "start": 156,
          "end": 163
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 171,
        "end": 182
      },
      "exportKind": "value",
      "attributes": [],
      "start": 147,
      "end": 183
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 200
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 207
          },
          "exportKind": "value",
          "start": 193,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\"",
        "start": 215,
        "end": 226
      },
      "exportKind": "value",
      "attributes": [],
      "start": 184,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 236
        },
        "start": 229,
        "end": 236
      },
      "directive": null,
      "start": 229,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 245
        },
        "start": 238,
        "end": 245
      },
      "directive": null,
      "start": 238,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 248
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "start": 247,
        "end": 254
      },
      "directive": null,
      "start": 247,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 266
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 274
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 274
        },
        "start": 256,
        "end": 274
      },
      "directive": null,
      "start": 256,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 288
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 288
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 293,
          "end": 301
        },
        "start": 276,
        "end": 301
      },
      "directive": null,
      "start": 276,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 323,
        "end": 326
      },
      "directive": null,
      "start": 323,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 328,
        "end": 331
      },
      "directive": null,
      "start": 328,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 334
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 333,
        "end": 336
      },
      "directive": null,
      "start": 333,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 338,
          "end": 339
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 338,
        "end": 341
      },
      "directive": null,
      "start": 338,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 343,
          "end": 355
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 343,
        "end": 357
      },
      "directive": null,
      "start": 343,
      "end": 358
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "optional": false,
          "computed": false,
          "start": 359,
          "end": 367
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 359,
        "end": 369
      },
      "directive": null,
      "start": 359,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 400
          },
          "optional": false,
          "computed": false,
          "start": 391,
          "end": 400
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 391,
        "end": 402
      },
      "directive": null,
      "start": 391,
      "end": 403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 413
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 404,
        "end": 415
      },
      "directive": null,
      "start": 404,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 418
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 426
          },
          "optional": false,
          "computed": false,
          "start": 417,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 417,
        "end": 428
      },
      "directive": null,
      "start": 417,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 430,
          "end": 439
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 430,
        "end": 441
      },
      "directive": null,
      "start": 430,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 455
            },
            "optional": false,
            "computed": false,
            "start": 443,
            "end": 455
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 463
          },
          "optional": false,
          "computed": false,
          "start": 443,
          "end": 463
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 443,
        "end": 465
      },
      "directive": null,
      "start": 443,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 475
            },
            "optional": false,
            "computed": false,
            "start": 467,
            "end": 475
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 483
          },
          "optional": false,
          "computed": false,
          "start": 467,
          "end": 483
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 467,
        "end": 485
      },
      "directive": null,
      "start": 467,
      "end": 486
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 486
}
```
