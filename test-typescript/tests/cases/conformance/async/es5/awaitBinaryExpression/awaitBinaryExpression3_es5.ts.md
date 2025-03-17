__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 53,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 53,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 45,
                  "end": 53,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 45,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 55,
      "end": 87,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "decorators": [],
        "name": "before",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 80,
        "end": 86,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 82,
          "end": 86
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 119,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 110,
        "decorators": [],
        "name": "after",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 118,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 114,
          "end": 118
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 212,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 212,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 172,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 163,
              "end": 171,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 163,
                "end": 169,
                "decorators": [],
                "name": "before",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 196,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 185,
                  "end": 196,
                  "operator": "+",
                  "left": {
                    "type": "AwaitExpression",
                    "start": 185,
                    "end": 192,
                    "argument": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 202,
            "end": 210,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 202,
              "end": 209,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 207,
                "decorators": [],
                "name": "after",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 141,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 143,
          "end": 156,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 150,
            "end": 156,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 151,
                "end": 155
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 143,
            "end": 150,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
