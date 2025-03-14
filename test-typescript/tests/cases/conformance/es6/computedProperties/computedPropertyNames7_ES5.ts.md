__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 21,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 21,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 19,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "member",
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
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 30,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 49,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 37,
                  "end": 45,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 45,
                    "decorators": [],
                    "name": "member",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
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
