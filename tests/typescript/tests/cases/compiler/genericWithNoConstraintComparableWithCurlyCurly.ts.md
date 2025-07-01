__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 32,
                  "end": 34
                },
                "definite": false,
                "start": 28,
                "end": 34
              }
            ],
            "declare": false,
            "start": 24,
            "end": 35
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "typeArguments": null,
                "start": 45,
                "end": 46
              },
              "start": 40,
              "end": 46
            },
            "directive": null,
            "start": 40,
            "end": 47
          }
        ],
        "start": 18,
        "end": 49
      },
      "expression": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 74,
              "end": 81
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 81
          }
        ],
        "start": 63,
        "end": 82
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 99,
                  "end": 101
                },
                "definite": false,
                "start": 95,
                "end": 101
              }
            ],
            "declare": false,
            "start": 91,
            "end": 102
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "typeArguments": null,
                "start": 112,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "directive": null,
            "start": 107,
            "end": 114
          }
        ],
        "start": 85,
        "end": 116
      },
      "expression": false,
      "start": 51,
      "end": 116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 141,
              "end": 143
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 143
          }
        ],
        "start": 130,
        "end": 144
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 161,
                  "end": 163
                },
                "definite": false,
                "start": 157,
                "end": 163
              }
            ],
            "declare": false,
            "start": 153,
            "end": 164
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "typeArguments": null,
                "start": 174,
                "end": 175
              },
              "start": 169,
              "end": 175
            },
            "directive": null,
            "start": 169,
            "end": 176
          }
        ],
        "start": 147,
        "end": 178
      },
      "expression": false,
      "start": 118,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bat",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 203,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 209
          }
        ],
        "start": 192,
        "end": 210
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 227,
                  "end": 229
                },
                "definite": false,
                "start": 223,
                "end": 229
              }
            ],
            "declare": false,
            "start": 219,
            "end": 230
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "typeArguments": null,
                "start": 240,
                "end": 241
              },
              "start": 235,
              "end": 241
            },
            "directive": null,
            "start": 235,
            "end": 242
          }
        ],
        "start": 213,
        "end": 244
      },
      "expression": false,
      "start": 180,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "no",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 257
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 268,
                  "end": 272
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 275,
                  "end": 284
                }
              ],
              "start": 268,
              "end": 284
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 258,
            "end": 284
          }
        ],
        "start": 257,
        "end": 285
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 302,
                  "end": 304
                },
                "definite": false,
                "start": 298,
                "end": 304
              }
            ],
            "declare": false,
            "start": 294,
            "end": 305
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 311
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "typeArguments": null,
                "start": 315,
                "end": 316
              },
              "start": 310,
              "end": 316
            },
            "directive": null,
            "start": 310,
            "end": 317
          }
        ],
        "start": 288,
        "end": 335
      },
      "expression": false,
      "start": 246,
      "end": 335
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yes",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 349
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 360,
                  "end": 366
                },
                {
                  "type": "TSNullKeyword",
                  "start": 369,
                  "end": 373
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 376,
                  "end": 385
                }
              ],
              "start": 360,
              "end": 385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 385
          }
        ],
        "start": 349,
        "end": 386
      },
      "params": [],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 400
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 403,
                  "end": 405
                },
                "definite": false,
                "start": 399,
                "end": 405
              }
            ],
            "declare": false,
            "start": 395,
            "end": 406
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "typeArguments": null,
                "start": 416,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "directive": null,
            "start": 411,
            "end": 418
          }
        ],
        "start": 389,
        "end": 420
      },
      "expression": false,
      "start": 337,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
