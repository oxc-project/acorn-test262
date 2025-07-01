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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod",
          "raw": "\"./mod\"",
          "start": 21,
          "end": 28
        },
        "start": 13,
        "end": 29
      },
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "start": 31,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
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
        "value": "./a",
        "raw": "\"./a\"",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 20
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
            "start": 30,
            "end": 37
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "importKind": "value",
          "start": 30,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 50,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 21,
      "end": 56
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
            "start": 64,
            "end": 65
          },
          "start": 64,
          "end": 65
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "importKind": "value",
          "start": 69,
          "end": 81
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 89,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 95
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
            "start": 108,
            "end": 112
          },
          "start": 103,
          "end": 112
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 118,
        "end": 123
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 124
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
            "start": 134,
            "end": 141
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 141
          },
          "exportKind": "value",
          "start": 134,
          "end": 141
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 149,
        "end": 154
      },
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 155
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
            "start": 165,
            "end": 172
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 179
          },
          "exportKind": "value",
          "start": 165,
          "end": 179
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 187,
        "end": 192
      },
      "exportKind": "value",
      "attributes": [],
      "start": 156,
      "end": 193
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
          "start": 195,
          "end": 196
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 202
        },
        "start": 195,
        "end": 202
      },
      "directive": null,
      "start": 195,
      "end": 203
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
          "start": 204,
          "end": 205
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 211
        },
        "start": 204,
        "end": 211
      },
      "directive": null,
      "start": 204,
      "end": 212
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
          "start": 213,
          "end": 214
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "start": 213,
        "end": 220
      },
      "directive": null,
      "start": 213,
      "end": 221
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
          "start": 222,
          "end": 223
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
            "start": 228,
            "end": 232
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 240
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 240
        },
        "start": 222,
        "end": 240
      },
      "directive": null,
      "start": 222,
      "end": 241
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
            "start": 242,
            "end": 246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 242,
          "end": 254
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
            "start": 259,
            "end": 263
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 267
          },
          "optional": false,
          "computed": false,
          "start": 259,
          "end": 267
        },
        "start": 242,
        "end": 267
      },
      "directive": null,
      "start": 242,
      "end": 268
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
          "start": 289,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 289,
        "end": 292
      },
      "directive": null,
      "start": 289,
      "end": 293
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
          "start": 294,
          "end": 295
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 294,
        "end": 297
      },
      "directive": null,
      "start": 294,
      "end": 298
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
          "start": 299,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 299,
        "end": 302
      },
      "directive": null,
      "start": 299,
      "end": 303
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
          "start": 304,
          "end": 305
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 304,
        "end": 307
      },
      "directive": null,
      "start": 304,
      "end": 308
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
            "start": 309,
            "end": 313
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 321
          },
          "optional": false,
          "computed": false,
          "start": 309,
          "end": 321
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 309,
        "end": 323
      },
      "directive": null,
      "start": 309,
      "end": 324
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
            "start": 325,
            "end": 329
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 325,
          "end": 333
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 325,
        "end": 335
      },
      "directive": null,
      "start": 325,
      "end": 336
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
            "start": 357,
            "end": 358
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 366
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 366
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 357,
        "end": 368
      },
      "directive": null,
      "start": 357,
      "end": 369
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
            "start": 370,
            "end": 371
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 379
          },
          "optional": false,
          "computed": false,
          "start": 370,
          "end": 379
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 370,
        "end": 381
      },
      "directive": null,
      "start": 370,
      "end": 382
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
            "start": 383,
            "end": 384
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 383,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 383,
        "end": 394
      },
      "directive": null,
      "start": 383,
      "end": 395
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
            "start": 396,
            "end": 397
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 405
          },
          "optional": false,
          "computed": false,
          "start": 396,
          "end": 405
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 396,
        "end": 407
      },
      "directive": null,
      "start": 396,
      "end": 408
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
              "start": 409,
              "end": 413
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 421
            },
            "optional": false,
            "computed": false,
            "start": 409,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 409,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 409,
        "end": 431
      },
      "directive": null,
      "start": 409,
      "end": 432
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
              "start": 433,
              "end": 437
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 441
            },
            "optional": false,
            "computed": false,
            "start": 433,
            "end": 441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 449
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 451
      },
      "directive": null,
      "start": 433,
      "end": 452
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 452
}
```
