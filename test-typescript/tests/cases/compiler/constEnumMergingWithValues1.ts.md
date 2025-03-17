__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 29,
        "end": 55,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 35,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 50,
                "end": 51,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
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
              "start": 48,
              "end": 53,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 50,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
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
      "type": "TSExportAssignment",
      "start": 57,
      "end": 69,
      "expression": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
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
