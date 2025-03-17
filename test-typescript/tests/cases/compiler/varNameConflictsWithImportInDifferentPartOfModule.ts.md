__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 33,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 32,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "value": 5,
                    "raw": "5"
                  },
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 56,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 55,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 53,
                    "end": 55,
                    "value": "",
                    "raw": "''"
                  },
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
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 132,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 98,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 82,
              "end": 98,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 93,
                "end": 97,
                "left": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 95,
                  "name": "M1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "s",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
