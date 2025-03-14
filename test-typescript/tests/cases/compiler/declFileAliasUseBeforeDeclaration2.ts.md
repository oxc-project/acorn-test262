__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 124,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 124,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 28,
            "end": 72,
            "body": {
              "type": "TSModuleBlock",
              "start": 37,
              "end": 72,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 47,
                  "end": 66,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 55,
                    "end": 66,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ClassDeclaration",
            "start": 77,
            "end": 102,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 95,
              "end": 102,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 107,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 118,
              "end": 121,
              "left": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"test\"",
        "value": "test"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
