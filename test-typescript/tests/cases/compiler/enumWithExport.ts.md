__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 34,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 34,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 34,
                    "raw": "123",
                    "value": 123
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 37,
      "end": 55,
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
