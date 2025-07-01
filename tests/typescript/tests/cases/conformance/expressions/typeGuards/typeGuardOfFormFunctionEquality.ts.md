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
        "name": "isString1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            },
            "start": 28,
            "end": 36
          },
          "start": 27,
          "end": 36
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 41,
                "end": 47
              },
              "typeArguments": null,
              "start": 41,
              "end": 47
            },
            "start": 39,
            "end": 47
          },
          "start": 38,
          "end": 47
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 55,
              "end": 61
            },
            "start": 55,
            "end": 61
          },
          "start": 50,
          "end": 61
        },
        "start": 48,
        "end": 61
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString2",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 94,
                "end": 100
              },
              "typeArguments": null,
              "start": 94,
              "end": 100
            },
            "start": 92,
            "end": 100
          },
          "start": 91,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 108,
              "end": 114
            },
            "start": 108,
            "end": 114
          },
          "start": 103,
          "end": 114
        },
        "start": 101,
        "end": 114
      },
      "body": null,
      "expression": false,
      "start": 64,
      "end": 115
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isString1",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 135,
            "end": 136
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 138,
            "end": 140
          }
        ],
        "optional": false,
        "start": 125,
        "end": 141
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString2",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 163
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 164,
                "end": 166
              }
            ],
            "optional": false,
            "start": 154,
            "end": 167
          },
          "consequent": [],
          "start": 149,
          "end": 168
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [],
          "start": 173,
          "end": 181
        }
      ],
      "start": 117,
      "end": 183
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
            "typeAnnotation": null,
            "start": 189,
            "end": 190
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString1",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 202
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 203,
                  "end": 204
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 206,
                  "end": 208
                }
              ],
              "optional": false,
              "start": 193,
              "end": 209
            },
            "operator": "===",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString2",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 223
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 224,
                  "end": 226
                }
              ],
              "optional": false,
              "start": 214,
              "end": 227
            },
            "start": 193,
            "end": 227
          },
          "definite": false,
          "start": 189,
          "end": 227
        }
      ],
      "declare": false,
      "start": 185,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString3",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 252,
              "end": 258
            },
            "start": 250,
            "end": 258
          },
          "start": 249,
          "end": 258
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 263,
              "end": 269
            },
            "start": 261,
            "end": 269
          },
          "start": 260,
          "end": 269
        },
        {
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
                "start": 274,
                "end": 280
              },
              "typeArguments": null,
              "start": 274,
              "end": 280
            },
            "start": 272,
            "end": 280
          },
          "start": 271,
          "end": 280
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 288,
              "end": 294
            },
            "start": 288,
            "end": 294
          },
          "start": 283,
          "end": 294
        },
        "start": 281,
        "end": 294
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString1",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 317
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 318,
                  "end": 319
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 322
                }
              ],
              "optional": false,
              "start": 308,
              "end": 323
            },
            "start": 301,
            "end": 324
          }
        ],
        "start": 295,
        "end": 326
      },
      "expression": false,
      "start": 230,
      "end": 326
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
