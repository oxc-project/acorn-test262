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
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 46,
            "name": "array",
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
                  "name": "ArrayLike",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
