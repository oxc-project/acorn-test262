__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 24,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 24,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 22,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 22,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 22,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "decorators": [],
                  "name": "B",
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 50,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "A",
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
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 64,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 59,
          "end": 60,
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 63,
          "exported": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
