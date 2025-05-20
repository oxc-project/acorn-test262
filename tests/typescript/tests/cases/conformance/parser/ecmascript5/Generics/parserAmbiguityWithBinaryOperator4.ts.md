__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 61,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 24,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 27,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
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
            "start": 36,
            "end": 59,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 56,
              "end": 59,
              "body": []
            },
            "test": {
              "type": "CallExpression",
              "start": 40,
              "end": 54,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 48,
                  "end": 53,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 41,
                "end": 47,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 45,
                    "end": 46,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
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
        "start": 9,
        "end": 10,
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
