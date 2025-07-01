__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 91
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 92,
                    "end": 97
                  }
                ],
                "start": 91,
                "end": 98
              },
              "start": 84,
              "end": 98
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 98
          }
        ],
        "start": 73,
        "end": 99
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 117
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              {
                "type": "TSVoidKeyword",
                "start": 121,
                "end": 125
              },
              {
                "type": "TSVoidKeyword",
                "start": 127,
                "end": 131
              }
            ],
            "start": 117,
            "end": 132
          },
          "start": 103,
          "end": 132
        },
        "start": 101,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 133,
        "end": 136
      },
      "expression": false,
      "start": 56,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 136
}
```
