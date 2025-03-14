/types/lib/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 17,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 15,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "$",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/app.ts
```json
{
  "type": "Program",
  "start": 46,
  "end": 70,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 70,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 70,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 68,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "$",
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
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
