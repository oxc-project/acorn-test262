__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 9,
      "expression": {
        "type": "TSInstantiationExpression",
        "start": 0,
        "end": 9,
        "expression": {
          "type": "TSImportKeyword",
          "start": 0,
          "end": 6,
          "id": 0
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6,
          "end": 9,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 7,
              "end": 8,
              "typeName": {
                "type": "Identifier",
                "start": 7,
                "end": 8,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 20,
            "end": 42,
            "expression": {
              "type": "TSImportKeyword",
              "start": 20,
              "end": 26,
              "id": 0
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 26,
              "end": 42,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
