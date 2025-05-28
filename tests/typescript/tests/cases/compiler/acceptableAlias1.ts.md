__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 38,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 38,
                "body": []
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 63,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 50,
              "end": 63,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 78,
        "end": 81,
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
