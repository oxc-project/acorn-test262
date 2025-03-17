__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 175,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 174,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 18,
        "end": 174,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 38,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": true,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 73,
          "end": 174,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 77,
              "end": 85,
              "argument": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 38,
          "end": 41,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 39,
              "end": 40,
              "name": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 72,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 49,
            "end": 72,
            "typeName": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "name": "AsyncGenerator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 63,
              "end": 72,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 65,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 71,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
