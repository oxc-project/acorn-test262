__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 34,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 28,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "d",
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
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 75,
      "id": {
        "type": "TSQualifiedName",
        "start": 44,
        "end": 49,
        "left": {
          "type": "TSQualifiedName",
          "start": 44,
          "end": 47,
          "left": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 75,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 58,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 69,
              "end": 72,
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
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
