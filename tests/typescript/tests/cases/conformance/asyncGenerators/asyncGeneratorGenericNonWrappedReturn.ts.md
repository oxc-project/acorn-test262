__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 174,
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
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": true,
        "async": true,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "typeName": {
              "type": "Identifier",
              "start": 49,
              "end": 63,
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
