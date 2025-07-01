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
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 25,
          "end": 39
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 42,
          "end": 45
        },
        "start": 40,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 148,
          "end": 158
        },
        "start": 140,
        "end": 159
      },
      "importKind": "value",
      "start": 127,
      "end": 160
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 168,
        "end": 178
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 161,
      "end": 179
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 194,
        "end": 204
      },
      "attributes": [],
      "exportKind": "value",
      "start": 180,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 220,
          "end": 230
        },
        "options": null,
        "phase": null,
        "start": 213,
        "end": 231
      },
      "directive": null,
      "start": 213,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 240,
              "end": 250
            },
            "options": null,
            "phase": null,
            "start": 233,
            "end": 251
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 233,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 263,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 265
          }
        ],
        "optional": false,
        "start": 233,
        "end": 266
      },
      "directive": null,
      "start": 233,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 292,
              "end": 295
            },
            "start": 290,
            "end": 295
          },
          "start": 287,
          "end": 295
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 297,
        "end": 299
      },
      "expression": false,
      "start": 268,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 317,
              "end": 327
            },
            "options": null,
            "phase": null,
            "start": 310,
            "end": 328
          }
        ],
        "optional": false,
        "start": 300,
        "end": 329
      },
      "directive": null,
      "start": 300,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 338,
          "end": 348
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 356
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
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 366,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 360,
                    "end": 373
                  }
                ],
                "start": 358,
                "end": 375
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 352,
              "end": 375
            }
          ],
          "start": 350,
          "end": 377
        },
        "phase": null,
        "start": 331,
        "end": 378
      },
      "directive": null,
      "start": 331,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 387,
            "end": 389
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 392,
            "end": 402
          },
          "start": 387,
          "end": 402
        },
        "options": null,
        "phase": null,
        "start": 380,
        "end": 403
      },
      "directive": null,
      "start": 380,
      "end": 404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 404
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 134,
        "end": 144
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 127,
      "end": 145
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 160,
        "end": 170
      },
      "attributes": [],
      "exportKind": "value",
      "start": 146,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 187,
          "end": 197
        },
        "options": null,
        "phase": null,
        "start": 180,
        "end": 198
      },
      "directive": null,
      "start": 180,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 207,
          "end": 217
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
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
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 233
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 235,
                      "end": 242
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 229,
                    "end": 242
                  }
                ],
                "start": 227,
                "end": 244
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 221,
              "end": 244
            }
          ],
          "start": 219,
          "end": 246
        },
        "phase": null,
        "start": 200,
        "end": 247
      },
      "directive": null,
      "start": 200,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 257,
            "end": 267
          }
        ],
        "optional": false,
        "start": 249,
        "end": 268
      },
      "directive": null,
      "start": 249,
      "end": 269
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 282,
                "end": 292
              }
            ],
            "optional": false,
            "start": 274,
            "end": 293
          },
          "directive": null,
          "start": 274,
          "end": 294
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 304
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 312
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 305,
                "end": 314
              }
            ],
            "optional": false,
            "start": 297,
            "end": 315
          },
          "directive": null,
          "start": 297,
          "end": 316
        }
      ],
      "start": 270,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 341
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts/foo.js",
        "raw": "\"./foo.ts/foo.js\"",
        "start": 15,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo.ts",
        "raw": "\"foo.ts\"",
        "start": 49,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "pkg/foo.ts",
        "raw": "\"pkg/foo.ts\"",
        "start": 74,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 87
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": ".foo.ts",
        "raw": "\".foo.ts\"",
        "start": 103,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 88,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.ts",
        "raw": "\"./foo.d.ts\"",
        "start": 129,
        "end": 141
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 142
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.mts",
        "raw": "\"./foo.d.mts\"",
        "start": 158,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 143,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.css.ts",
        "raw": "\"./foo.d.css.ts\"",
        "start": 188,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "#internal/foo.ts",
        "raw": "\"#internal/foo.ts\"",
        "start": 221,
        "end": 239
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 240
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "node:foo.ts",
        "raw": "\"node:foo.ts\"",
        "start": 256,
        "end": 269
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 241,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 281,
            "end": 291
          }
        ],
        "optional": false,
        "start": 271,
        "end": 292
      },
      "directive": null,
      "start": 271,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "node:path",
          "raw": "\"node:path\"",
          "start": 301,
          "end": 312
        },
        "options": null,
        "phase": null,
        "start": 294,
        "end": 313
      },
      "directive": null,
      "start": 294,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "node:path",
            "raw": "\"node:path\"",
            "start": 323,
            "end": 334
          }
        ],
        "optional": false,
        "start": 315,
        "end": 335
      },
      "directive": null,
      "start": 315,
      "end": 336
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 135,
  "end": 135
}
```
