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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 53,
            "name": "p",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "before",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 80,
        "end": 86,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 82,
          "end": 86
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 110,
        "name": "after",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 118,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 114,
          "end": 118
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "name": "before",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
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
                "name": "after",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
