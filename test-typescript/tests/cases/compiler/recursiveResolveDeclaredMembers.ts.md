types.ts
```json
{
  "type": "Program",
  "start": 10,
  "end": 83,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 10,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 17,
        "end": 43,
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 43,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 35,
              "end": 41,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 39,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "F",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 51,
        "end": 82,
        "body": {
          "type": "TSInterfaceBody",
          "start": 80,
          "end": 82,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 62,
          "end": 79,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 63,
              "end": 78,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "F",
                  "optional": false
                }
              },
              "default": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "F",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
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
  "sourceType": "module"
}
```
