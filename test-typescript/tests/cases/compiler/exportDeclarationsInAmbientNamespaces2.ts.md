exportDeclarationsInAmbientNamespaces2.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 48,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 47,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 39,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 41,
                        "end": 47
                      }
                    }
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"mod\"",
        "value": "mod"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 113,
      "body": {
        "type": "TSModuleBlock",
        "start": 72,
        "end": 113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 102,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 96,
              "end": 101,
              "raw": "\"mod\"",
              "value": "mod"
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 87,
                "end": 88,
                "exported": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
