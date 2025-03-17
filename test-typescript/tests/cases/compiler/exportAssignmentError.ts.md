__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 27,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 25,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 25,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 24,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 38,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 45,
      "end": 57,
      "expression": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
