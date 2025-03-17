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
          "id": 0,
          "emitNode": null
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
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
              "id": 0,
              "emitNode": null
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
