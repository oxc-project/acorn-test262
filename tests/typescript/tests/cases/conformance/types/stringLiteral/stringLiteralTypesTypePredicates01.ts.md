__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 12,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 18,
              "end": 21
            },
            "start": 18,
            "end": 21
          }
        ],
        "start": 12,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 49
              },
              "typeArguments": null,
              "start": 45,
              "end": 49
            },
            "start": 43,
            "end": 49
          },
          "start": 39,
          "end": 49
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 55,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "start": 53,
            "end": 58
          },
          "start": 51,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 69,
                "end": 72
              },
              "start": 69,
              "end": 72
            },
            "start": 69,
            "end": 72
          },
          "start": 61,
          "end": 72
        },
        "start": 59,
        "end": 72
      },
      "body": null,
      "expression": false,
      "start": 23,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 100
              },
              "typeArguments": null,
              "start": 96,
              "end": 100
            },
            "start": 94,
            "end": 100
          },
          "start": 90,
          "end": 100
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 106,
                "end": 109
              },
              "start": 106,
              "end": 109
            },
            "start": 104,
            "end": 109
          },
          "start": 102,
          "end": 109
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 116
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 120,
                "end": 123
              },
              "start": 120,
              "end": 123
            },
            "start": 120,
            "end": 123
          },
          "start": 112,
          "end": 123
        },
        "start": 110,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "kindIs",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 140
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 151
              },
              "typeArguments": null,
              "start": 147,
              "end": 151
            },
            "start": 145,
            "end": 151
          },
          "start": 141,
          "end": 151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "is",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 161
              },
              "typeArguments": null,
              "start": 157,
              "end": 161
            },
            "start": 155,
            "end": 161
          },
          "start": 153,
          "end": 161
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 164,
          "end": 171
        },
        "start": 162,
        "end": 171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 189
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 196
              },
              "start": 185,
              "end": 196
            },
            "start": 178,
            "end": 197
          }
        ],
        "start": 172,
        "end": 199
      },
      "expression": false,
      "start": 125,
      "end": 199
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 212
                },
                "typeArguments": null,
                "start": 208,
                "end": 212
              },
              "start": 206,
              "end": 212
            },
            "start": 205,
            "end": 212
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 224
          },
          "definite": false,
          "start": 205,
          "end": 224
        }
      ],
      "declare": false,
      "start": 201,
      "end": 225
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "kindIs",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 241,
            "end": 244
          }
        ],
        "optional": false,
        "start": 231,
        "end": 245
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "definite": false,
                "start": 257,
                "end": 262
              }
            ],
            "declare": false,
            "start": 253,
            "end": 263
          }
        ],
        "start": 247,
        "end": 265
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "definite": false,
                "start": 281,
                "end": 286
              }
            ],
            "declare": false,
            "start": 277,
            "end": 287
          }
        ],
        "start": 271,
        "end": 289
      },
      "start": 227,
      "end": 289
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "kindIs",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 306,
              "end": 309
            }
          ],
          "optional": false,
          "start": 296,
          "end": 310
        },
        "prefix": true,
        "start": 295,
        "end": 310
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 323
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "definite": false,
                "start": 322,
                "end": 327
              }
            ],
            "declare": false,
            "start": 318,
            "end": 328
          }
        ],
        "start": 312,
        "end": 330
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 347
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 351
                },
                "definite": false,
                "start": 346,
                "end": 351
              }
            ],
            "declare": false,
            "start": 342,
            "end": 352
          }
        ],
        "start": 336,
        "end": 354
      },
      "start": 291,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 354
}
```
