__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSInstantiationExpression",
        "expression": {
          "type": "TSImportKeyword",
          "id": 0,
          "emitNode": null,
          "start": 0,
          "end": 6
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 7,
                "end": 8
              },
              "typeArguments": null,
              "start": 7,
              "end": 8
            }
          ],
          "start": 6,
          "end": 9
        },
        "start": 0,
        "end": 9
      },
      "directive": null,
      "start": 0,
      "end": 9
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "TSImportKeyword",
              "id": 0,
              "emitNode": null,
              "start": 20,
              "end": 26
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 26,
              "end": 42
            },
            "start": 20,
            "end": 42
          },
          "definite": false,
          "start": 16,
          "end": 42
        }
      ],
      "declare": false,
      "start": 10,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
