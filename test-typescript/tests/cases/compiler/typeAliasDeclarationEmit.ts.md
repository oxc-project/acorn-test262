typeAliasDeclarationEmit.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 34,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "callback",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 26,
          "end": 33,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 20,
          "end": 23,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 22,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 43,
        "end": 92,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 61,
          "decorators": [],
          "name": "CallbackArray",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 84,
          "end": 91,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 61,
          "end": 81,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 62,
              "end": 80,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 80,
                  "decorators": [],
                  "name": "callback",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
