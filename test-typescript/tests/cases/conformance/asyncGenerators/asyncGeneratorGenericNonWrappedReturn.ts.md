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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 18,
        "end": 174,
        "async": true,
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": true,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 38,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 72,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 49,
            "end": 72,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 63,
              "end": 72,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 65,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 71,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 38,
          "end": 41,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 39,
              "end": 40,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
