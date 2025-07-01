__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 15,
        "end": 20
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 41,
                        "end": 47
                      },
                      "start": 39,
                      "end": 47
                    },
                    "start": 38,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 38,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 34,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 48
          }
        ],
        "start": 21,
        "end": 50
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "exportKind": "value",
                "start": 87,
                "end": 88
              }
            ],
            "source": {
              "type": "Literal",
              "value": "mod",
              "raw": "\"mod\"",
              "start": 96,
              "end": 101
            },
            "exportKind": "value",
            "attributes": [],
            "start": 78,
            "end": 102
          }
        ],
        "start": 72,
        "end": 113
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 52,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
