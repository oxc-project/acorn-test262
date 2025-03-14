__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 35,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 35,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 34,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 29,
                    "decorators": [],
                    "name": "m1",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 34,
                    "raw": "10",
                    "value": 10
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 50,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 50,
                  "decorators": [],
                  "name": "m1",
                  "optional": false
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
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 69,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 66,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "m1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
