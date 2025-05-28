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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 54,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 53,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 41,
                  "decorators": [],
                  "name": "ArrayLike",
                  "optional": false,
                  "typeAnnotation": null
                },
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
