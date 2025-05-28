__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 39,
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 40,
        "end": 45,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 42,
          "end": 45
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 404,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 11,
      "end": 37,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 66,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "value": "../foo.mts",
        "raw": "\"../foo.mts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 98,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 97,
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 126,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 125,
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 127,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 140,
        "end": 159,
        "expression": {
          "type": "Literal",
          "start": 148,
          "end": 158,
          "value": "./foo.ts",
          "raw": "\"./foo.ts\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 161,
      "end": 179,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 168,
        "end": 178,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 180,
      "end": 205,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 194,
        "end": 204,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 232,
      "expression": {
        "type": "ImportExpression",
        "start": 213,
        "end": 231,
        "source": {
          "type": "Literal",
          "start": 220,
          "end": 230,
          "value": "./foo.ts",
          "raw": "\"./foo.ts\""
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 233,
        "end": 266,
        "callee": {
          "type": "MemberExpression",
          "start": 233,
          "end": 256,
          "object": {
            "type": "ImportExpression",
            "start": 233,
            "end": 251,
            "source": {
              "type": "Literal",
              "start": 240,
              "end": 250,
              "value": "./foo.ts",
              "raw": "\"./foo.ts\""
            },
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 265,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 263,
              "end": 265,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 286,
        "decorators": [],
        "name": "acceptAny",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 295,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 290,
            "end": 295,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 292,
              "end": 295
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 299,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 329,
        "callee": {
          "type": "Identifier",
          "start": 300,
          "end": 309,
          "decorators": [],
          "name": "acceptAny",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 310,
            "end": 328,
            "source": {
              "type": "Literal",
              "start": 317,
              "end": 327,
              "value": "./foo.ts",
              "raw": "\"./foo.ts\""
            },
            "options": null,
            "phase": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 379,
      "expression": {
        "type": "ImportExpression",
        "start": 331,
        "end": 378,
        "source": {
          "type": "Literal",
          "start": 338,
          "end": 348,
          "value": "./foo.ts",
          "raw": "\"./foo.ts\""
        },
        "options": {
          "type": "ObjectExpression",
          "start": 350,
          "end": 377,
          "properties": [
            {
              "type": "Property",
              "start": 352,
              "end": 375,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 352,
                "end": 356,
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 358,
                "end": 375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 360,
                    "end": 373,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 373,
                      "value": "value",
                      "raw": "\"value\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 404,
      "expression": {
        "type": "ImportExpression",
        "start": 380,
        "end": 403,
        "source": {
          "type": "BinaryExpression",
          "start": 387,
          "end": 402,
          "left": {
            "type": "Literal",
            "start": 387,
            "end": 389,
            "value": "",
            "raw": "\"\""
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "start": 392,
            "end": 402,
            "value": "./foo.ts",
            "raw": "\"./foo.ts\""
          }
        },
        "options": null,
        "phase": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 341,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 11,
      "end": 37,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 66,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "value": "../foo.mts",
        "raw": "\"../foo.mts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 98,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 97,
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 126,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 125,
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 127,
      "end": 145,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 134,
        "end": 144,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 146,
      "end": 171,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 160,
        "end": 170,
        "value": "./foo.ts",
        "raw": "\"./foo.ts\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 199,
      "expression": {
        "type": "ImportExpression",
        "start": 180,
        "end": 198,
        "source": {
          "type": "Literal",
          "start": 187,
          "end": 197,
          "value": "./foo.ts",
          "raw": "\"./foo.ts\""
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 248,
      "expression": {
        "type": "ImportExpression",
        "start": 200,
        "end": 247,
        "source": {
          "type": "Literal",
          "start": 207,
          "end": 217,
          "value": "./foo.ts",
          "raw": "\"./foo.ts\""
        },
        "options": {
          "type": "ObjectExpression",
          "start": 219,
          "end": 246,
          "properties": [
            {
              "type": "Property",
              "start": 221,
              "end": 244,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 225,
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 227,
                "end": 244,
                "properties": [
                  {
                    "type": "Property",
                    "start": 229,
                    "end": 242,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 233,
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 235,
                      "end": 242,
                      "value": "value",
                      "raw": "\"value\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        },
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 269,
      "expression": {
        "type": "CallExpression",
        "start": 249,
        "end": 268,
        "callee": {
          "type": "Identifier",
          "start": 249,
          "end": 256,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 257,
            "end": 267,
            "value": "./foo.ts",
            "raw": "\"./foo.ts\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "BlockStatement",
      "start": 270,
      "end": 318,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 274,
          "end": 294,
          "expression": {
            "type": "CallExpression",
            "start": 274,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 281,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 282,
                "end": 292,
                "value": "./foo.ts",
                "raw": "\"./foo.ts\""
              }
            ],
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 297,
          "end": 316,
          "expression": {
            "type": "CallExpression",
            "start": 297,
            "end": 315,
            "callee": {
              "type": "Identifier",
              "start": 297,
              "end": 304,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 305,
                "end": 314,
                "callee": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 312,
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 32,
        "value": "./foo.ts/foo.js",
        "raw": "\"./foo.ts/foo.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 58,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 57,
        "value": "foo.ts",
        "raw": "\"foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 59,
      "end": 87,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 86,
        "value": "pkg/foo.ts",
        "raw": "\"pkg/foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 88,
      "end": 113,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 112,
        "value": ".foo.ts",
        "raw": "\".foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 142,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 141,
        "value": "./foo.d.ts",
        "raw": "\"./foo.d.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 143,
      "end": 172,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 158,
        "end": 171,
        "value": "./foo.d.mts",
        "raw": "\"./foo.d.mts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 173,
      "end": 205,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 188,
        "end": 204,
        "value": "./foo.d.css.ts",
        "raw": "\"./foo.d.css.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 240,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 221,
        "end": 239,
        "value": "#internal/foo.ts",
        "raw": "\"#internal/foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 241,
      "end": 270,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 256,
        "end": 269,
        "value": "node:foo.ts",
        "raw": "\"node:foo.ts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 272,
          "end": 279,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 281,
            "end": 291,
            "value": "./foo.ts",
            "raw": "\"./foo.ts\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 314,
      "expression": {
        "type": "ImportExpression",
        "start": 294,
        "end": 313,
        "source": {
          "type": "Literal",
          "start": 301,
          "end": 312,
          "value": "node:path",
          "raw": "\"node:path\""
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 336,
      "expression": {
        "type": "CallExpression",
        "start": 315,
        "end": 335,
        "callee": {
          "type": "Identifier",
          "start": 315,
          "end": 322,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 323,
            "end": 334,
            "value": "node:path",
            "raw": "\"node:path\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 135,
  "end": 135,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
