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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 54,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 53,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 45,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 55,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "decorators": [],
        "name": "before",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 110,
        "decorators": [],
        "name": "after",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 141,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 143,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 143,
            "end": 150,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
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
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 212,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 172,
            "expression": {
              "type": "CallExpression",
              "start": 163,
              "end": 171,
              "callee": {
                "type": "Identifier",
                "start": 163,
                "end": 169,
                "decorators": [],
                "name": "before",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 197,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 196,
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
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 202,
            "end": 210,
            "expression": {
              "type": "CallExpression",
              "start": 202,
              "end": 209,
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 207,
                "decorators": [],
                "name": "after",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
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
