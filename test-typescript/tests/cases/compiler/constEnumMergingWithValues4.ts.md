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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 17,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 32,
                "end": 33,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 30,
              "end": 35,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 32,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 39,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
