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
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "init": null,
                  "definite": false,
                  "start": 26,
                  "end": 27
                }
              ],
              "declare": false,
              "start": 22,
              "end": 28
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "importKind": "value",
      "start": 32,
      "end": 46
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 59
      },
      "start": 48,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
