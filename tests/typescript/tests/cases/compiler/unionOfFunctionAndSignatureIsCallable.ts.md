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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 24
              },
              "typeArguments": null,
              "start": 16,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "start": 12,
          "end": 24
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 36,
                  "end": 42
                },
                "start": 33,
                "end": 42
              },
              "start": 30,
              "end": 42
            },
            "start": 28,
            "end": 42
          },
          "start": 26,
          "end": 42
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 64
                  },
                  "typeArguments": null,
                  "start": 55,
                  "end": 64
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 76
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 76
                }
              ],
              "start": 55,
              "end": 76
            },
            "start": 53,
            "end": 76
          },
          "start": 45,
          "end": 76
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 96
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 94,
                  "end": 98
                },
                "definite": false,
                "start": 90,
                "end": 98
              }
            ],
            "declare": false,
            "start": 84,
            "end": 99
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 111
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 116
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 114,
                  "end": 118
                },
                "definite": false,
                "start": 110,
                "end": 118
              }
            ],
            "declare": false,
            "start": 104,
            "end": 119
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 142
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 134,
                  "end": 144
                },
                "definite": false,
                "start": 130,
                "end": 144
              }
            ],
            "declare": false,
            "start": 124,
            "end": 145
          }
        ],
        "start": 78,
        "end": 147
      },
      "expression": false,
      "start": 0,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fetcherParams",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 176,
                  "end": 182
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 192,
                      "end": 198
                    },
                    "start": 189,
                    "end": 198
                  },
                  "start": 186,
                  "end": 198
                }
              ],
              "start": 176,
              "end": 199
            },
            "start": 174,
            "end": 199
          },
          "start": 161,
          "end": 199
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 217
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fetcherParams",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 240
                      },
                      "prefix": true,
                      "start": 220,
                      "end": 240
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "'function'",
                      "start": 245,
                      "end": 255
                    },
                    "start": 220,
                    "end": 255
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fetcherParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 281
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fetcherParams",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 305
                  },
                  "start": 220,
                  "end": 305
                },
                "definite": false,
                "start": 213,
                "end": 305
              }
            ],
            "declare": false,
            "start": 207,
            "end": 305
          }
        ],
        "start": 201,
        "end": 307
      },
      "expression": false,
      "start": 149,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
