__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 29,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 28,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 12,
              "end": 22,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 12,
                "end": 18,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 19,
                "end": 22,
                "decorators": [],
                "name": "for",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 61,
            "properties": [
              {
                "type": "Property",
                "start": 43,
                "end": 59,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 59,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
