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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 55,
      "body": {
        "type": "TSModuleBlock",
        "start": 29,
        "end": 55,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 35,
            "end": 53,
            "body": {
              "type": "TSEnumBody",
              "start": 48,
              "end": 53,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 50,
                  "end": 51,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 57,
      "end": 69,
      "expression": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
