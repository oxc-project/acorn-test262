typeAliasDeclarationEmit2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 32,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 19,
          "end": 31,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 29,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 29,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 13,
          "end": 16,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 14,
              "end": 15,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "a",
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
