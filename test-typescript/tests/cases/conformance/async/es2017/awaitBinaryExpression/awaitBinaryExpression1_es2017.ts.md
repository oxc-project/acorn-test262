__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 22,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
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
      "start": 24,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 55,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 46,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 55,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
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
      "start": 57,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 80,
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
        "start": 82,
        "end": 88,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 84,
          "end": 88
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 112,
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
        "start": 114,
        "end": 120,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 116,
          "end": 120
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
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
        "start": 159,
        "end": 215,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 165,
            "end": 174,
            "expression": {
              "type": "CallExpression",
              "start": 165,
              "end": 173,
              "callee": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
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
            "start": 179,
            "end": 200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 199,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 187,
                  "end": 199,
                  "left": {
                    "type": "AwaitExpression",
                    "start": 187,
                    "end": 194,
                    "argument": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
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
            "start": 205,
            "end": 213,
            "expression": {
              "type": "CallExpression",
              "start": 205,
              "end": 212,
              "callee": {
                "type": "Identifier",
                "start": 205,
                "end": 210,
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
        "start": 143,
        "end": 158,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 158,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 152,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 152,
            "end": 158,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
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
