__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 136,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 98,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 91,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 91,
                "end": 98,
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "start": 92,
                    "end": 97
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 103,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 103,
            "end": 117,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 117,
            "end": 132,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 118,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
