__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 59,
        "name": "getItems",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 69,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 63,
          "end": 69,
          "elementType": {
            "type": "TSTypeReference",
            "start": 63,
            "end": 67,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 89,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "name": "getItems",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
