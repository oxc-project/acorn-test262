__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
          "start": 12,
          "end": 24,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 16,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 24,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 26,
          "end": 42,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 30,
              "end": 42,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 36,
                  "end": 42
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 76,
          "decorators": [],
          "name": "callable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 76,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 55,
              "end": 76,
              "types": [
                {
                  "type": "TSTypeQuery",
                  "start": 55,
                  "end": 64,
                  "exprName": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 64,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeQuery",
                  "start": 67,
                  "end": 76,
                  "exprName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 76,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 99,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 90,
                "end": 98,
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 94,
                  "end": 98,
                  "callee": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 96,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 104,
            "end": 119,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 110,
                "end": 118,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 114,
                  "end": 118,
                  "callee": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 116,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 124,
            "end": 145,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 130,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 134,
                  "end": 144,
                  "callee": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 142,
                    "decorators": [],
                    "name": "callable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "f2",
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
          "start": 161,
          "end": 199,
          "decorators": [],
          "name": "fetcherParams",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 199,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 176,
              "end": 199,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 176,
                  "end": 182
                },
                {
                  "type": "TSFunctionType",
                  "start": 186,
                  "end": 198,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 192,
                      "end": 198
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 207,
            "end": 305,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 213,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 217,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 220,
                  "end": 305,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 220,
                    "end": 255,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 220,
                      "end": 240,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 240,
                        "decorators": [],
                        "name": "fetcherParams",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 245,
                      "end": 255,
                      "value": "function",
                      "raw": "'function'"
                    }
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 281,
                    "callee": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 279,
                      "decorators": [],
                      "name": "fetcherParams",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 305,
                    "decorators": [],
                    "name": "fetcherParams",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
