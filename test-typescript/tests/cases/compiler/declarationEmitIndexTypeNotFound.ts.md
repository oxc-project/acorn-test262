declarationEmitIndexTypeNotFound.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 57,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 57,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 28,
              "end": 55,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 48,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 48,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 48,
                        "decorators": [],
                        "name": "TypeNotFound",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 51,
                  "end": 54
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Test",
          "optional": false
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
