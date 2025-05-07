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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 40,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "definite": false,
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
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 51,
        "end": 115,
        "body": {
          "type": "TSModuleBlock",
          "start": 60,
          "end": 115,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 66,
              "end": 88,
              "attributes": [],
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
                "importKind": "value",
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
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 93,
              "end": 113,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 100,
                "end": 113,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 104,
                    "end": 112,
                    "definite": false,
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
                    }
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
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
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
