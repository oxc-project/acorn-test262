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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 91,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "AsyncGenerator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
