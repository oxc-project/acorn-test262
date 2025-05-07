__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 32,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 94,
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 94,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 52,
            "end": 67,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 63,
              "end": 66,
              "left": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 92,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 79,
              "end": 92,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 91,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 87,
                    "decorators": [],
                    "name": "bVal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
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
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
