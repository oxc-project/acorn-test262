__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 118,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "m",
        "raw": "\"m\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 118,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 34,
              "end": 73,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 44,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 56,
                    "end": 67,
                    "body": []
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 100,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 85,
              "end": 100,
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 96,
                "end": 99,
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 105,
            "end": 116,
            "expression": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
