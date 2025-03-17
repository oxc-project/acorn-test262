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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 27,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 25,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 25,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 24,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 38,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 45,
      "end": 57,
      "expression": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
