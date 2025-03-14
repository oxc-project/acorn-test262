__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 17,
            "end": 35,
            "body": {
              "type": "TSEnumBody",
              "start": 30,
              "end": 35,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 32,
                  "end": 33,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 39,
      "end": 68,
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
