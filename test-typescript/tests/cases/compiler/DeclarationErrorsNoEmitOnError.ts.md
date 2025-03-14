__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 23,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 21,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 31,
        "end": 59,
        "body": {
          "type": "TSInterfaceBody",
          "start": 43,
          "end": 59,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 49,
              "end": 54,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "T",
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
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "I",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
