__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 13,
      "end": 50,
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 50,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 30,
            "end": 48,
            "body": {
              "type": "TSEnumBody",
              "start": 43,
              "end": 48,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 45,
                  "end": 46,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
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
              "start": 41,
              "end": 42,
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
        "start": 20,
        "end": 23,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 52,
      "end": 64,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
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
