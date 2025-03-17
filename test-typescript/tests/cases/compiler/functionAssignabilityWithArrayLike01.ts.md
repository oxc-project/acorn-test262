__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 46,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 46,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 41,
                  "end": 46,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 42,
                      "end": 45
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 41,
                  "decorators": [],
                  "name": "ArrayLike",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
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
