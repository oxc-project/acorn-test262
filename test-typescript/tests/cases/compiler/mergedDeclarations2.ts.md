__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 19,
      "end": 41,
      "body": {
        "type": "TSEnumBody",
        "start": 28,
        "end": 41,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 39,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 78,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 60,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 67,
              "end": 76,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 76,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
