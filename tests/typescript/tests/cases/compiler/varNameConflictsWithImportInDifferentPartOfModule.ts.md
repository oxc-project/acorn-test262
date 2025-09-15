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
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 31
                  },
                  "init": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 34,
                    "end": 35
                  },
                  "definite": false,
                  "start": 30,
                  "end": 35
                }
              ],
              "declare": false,
              "start": 26,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 36
          },
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 56,
                    "end": 58
                  },
                  "definite": false,
                  "start": 52,
                  "end": 58
                }
              ],
              "declare": false,
              "start": 48,
              "end": 59
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 41,
            "end": 59
          }
        ],
        "start": 13,
        "end": 61
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 101
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "start": 99,
                "end": 103
              },
              "importKind": "value",
              "start": 88,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 104
          }
        ],
        "start": 75,
        "end": 138
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 62,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
