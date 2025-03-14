__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 92,
      "expression": {
        "type": "MemberExpression",
        "start": 68,
        "end": 91,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 72,
          "end": 90,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 78,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 79,
            "end": 89,
            "raw": "\"nonsense\"",
            "value": "nonsense"
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
