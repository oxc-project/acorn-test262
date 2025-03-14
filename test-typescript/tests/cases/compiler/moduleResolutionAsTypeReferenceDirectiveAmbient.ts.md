/typings/phaser/types/phaser.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 56,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 54,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 37,
              "end": 54,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 43,
                  "end": 53,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 53,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 47,
                        "end": 53
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
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
        "end": 23,
        "raw": "\"phaser\"",
        "value": "phaser"
      }
    }
  ],
  "sourceType": "module"
}
```
/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "\"phaser\"",
        "value": "phaser"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "a2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
