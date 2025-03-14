__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "global",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 24,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 20,
                  "end": 24,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 36,
      "expression": {
        "type": "MemberExpression",
        "start": 27,
        "end": 36,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 27,
          "end": 34,
          "decorators": [],
          "name": "globals",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
