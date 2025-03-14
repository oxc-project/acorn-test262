__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 33,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 31,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
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
        "end": 14,
        "decorators": [],
        "name": "Item",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 61,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 55,
                "end": 61,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 59,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 59,
                    "decorators": [],
                    "name": "Item",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 63,
      "end": 78,
      "expression": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "items",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
