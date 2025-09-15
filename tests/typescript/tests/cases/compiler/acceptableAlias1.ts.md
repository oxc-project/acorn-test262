__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 37,
                "end": 44
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 44
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 44
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "importKind": "value",
              "start": 56,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 49,
            "end": 69
          }
        ],
        "start": 12,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "start": 84,
        "end": 87
      },
      "importKind": "value",
      "start": 73,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
