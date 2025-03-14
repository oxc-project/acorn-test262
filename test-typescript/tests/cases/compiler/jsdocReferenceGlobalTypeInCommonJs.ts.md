__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "decorators": [],
        "name": "Puppeteer",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 76,
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 76,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 74,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 74,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "Keyboard",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 84,
        "end": 121,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "connect",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 101,
            "end": 113,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 114,
          "end": 120,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 116,
            "end": 120
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 22,
          "end": 28
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
