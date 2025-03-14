__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 29,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 28,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "const": true,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 48,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 45,
              "end": 48,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "X",
                "optional": false
              }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
