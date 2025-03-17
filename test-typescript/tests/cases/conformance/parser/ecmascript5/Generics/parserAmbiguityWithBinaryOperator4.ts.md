__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 62,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 62,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 62,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 28,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 31,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 37,
            "end": 60,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 57,
              "end": 60,
              "body": []
            },
            "test": {
              "type": "CallExpression",
              "start": 41,
              "end": 55,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 49,
                  "end": 54,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 42,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 44,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
