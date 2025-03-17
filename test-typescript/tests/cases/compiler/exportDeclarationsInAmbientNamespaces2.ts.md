__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "mod",
        "raw": "\"mod\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 48,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 39,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 41,
                        "end": 47
                      }
                    },
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
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 72,
        "end": 113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 102,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 87,
                "end": 88,
                "local": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 96,
              "end": 101,
              "value": "mod",
              "raw": "\"mod\""
            },
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
