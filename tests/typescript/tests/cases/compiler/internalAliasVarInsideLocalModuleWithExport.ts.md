__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 40,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 40,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "id": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "value": 10,
                      "raw": "10"
                    },
                    "definite": false
                  }
                ],
                "declare": false
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 115,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 51,
        "end": 115,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 60,
          "end": 115,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 66,
              "end": 88,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 73,
                "end": 88,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 84,
                  "end": 87,
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 93,
              "end": 113,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 100,
                "end": 113,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 104,
                    "end": 112,
                    "id": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 108,
                      "decorators": [],
                      "name": "bVal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
