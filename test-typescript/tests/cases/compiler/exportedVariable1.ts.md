__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 17,
              "end": 31,
              "properties": [
                {
                  "type": "Property",
                  "start": 18,
                  "end": 30,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 22,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 30,
                    "raw": "\"Bill\"",
                    "value": "Bill"
                  }
                }
              ]
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
      "start": 33,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 42,
            "decorators": [],
            "name": "upper",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 45,
            "end": 67,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 45,
              "end": 65,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 45,
                "end": 53,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 53,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 65,
                "decorators": [],
                "name": "toUpperCase",
                "optional": false
              }
            },
            "optional": false
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
