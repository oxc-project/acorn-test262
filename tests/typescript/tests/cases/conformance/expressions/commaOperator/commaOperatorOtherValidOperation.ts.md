__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 42,
              "end": 43
            },
            "definite": false,
            "start": 38,
            "end": 43
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 49,
              "end": 51
            },
            "definite": false,
            "start": 45,
            "end": 51
          }
        ],
        "declare": false,
        "start": 34,
        "end": 51
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 58
        },
        "start": 53,
        "end": 58
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "start": 60,
            "end": 63
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "start": 65,
            "end": 68
          }
        ],
        "start": 60,
        "end": 68
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 70,
        "end": 73
      },
      "start": 29,
      "end": 73
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 141,
              "end": 147
            },
            "start": 139,
            "end": 147
          },
          "start": 138,
          "end": 147
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 152,
              "end": 158
            },
            "start": 150,
            "end": 158
          },
          "start": 149,
          "end": 158
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                }
              ],
              "start": 173,
              "end": 177
            },
            "start": 166,
            "end": 178
          }
        ],
        "start": 160,
        "end": 180
      },
      "expression": false,
      "start": 125,
      "end": 180
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
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 199
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 205
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 206,
                "end": 207
              },
              {
                "type": "Literal",
                "value": "123",
                "raw": "\"123\"",
                "start": 209,
                "end": 214
              }
            ],
            "optional": false,
            "start": 202,
            "end": 215
          },
          "definite": false,
          "start": 185,
          "end": 215
        }
      ],
      "declare": false,
      "start": 181,
      "end": 216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 248
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 251
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 255
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 255
          }
        ],
        "start": 248,
        "end": 256
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 272,
                        "end": 274
                      },
                      "typeArguments": null,
                      "start": 272,
                      "end": 274
                    },
                    "start": 270,
                    "end": 274
                  },
                  "start": 269,
                  "end": 274
                },
                "init": null,
                "definite": false,
                "start": 269,
                "end": 274
              }
            ],
            "declare": false,
            "start": 265,
            "end": 275
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 289
                      },
                      "typeArguments": null,
                      "start": 287,
                      "end": 289
                    },
                    "start": 285,
                    "end": 289
                  },
                  "start": 284,
                  "end": 289
                },
                "init": null,
                "definite": false,
                "start": 284,
                "end": 289
              }
            ],
            "declare": false,
            "start": 280,
            "end": 290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                }
              ],
              "start": 295,
              "end": 299
            },
            "directive": null,
            "start": 295,
            "end": 300
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
                  "name": "resultIsT1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 319
                },
                "init": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    }
                  ],
                  "start": 323,
                  "end": 327
                },
                "definite": false,
                "start": 309,
                "end": 328
              }
            ],
            "declare": false,
            "start": 305,
            "end": 329
          }
        ],
        "start": 259,
        "end": 331
      },
      "expression": false,
      "start": 235,
      "end": 331
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 331
}
```
