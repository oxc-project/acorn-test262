__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 29,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 28,
                "raw": "\"postfix\"",
                "value": "postfix"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 18,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8,
                "end": 14,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 15,
                "end": 18,
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
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 35,
      "expression": {
        "type": "UpdateExpression",
        "start": 31,
        "end": 34,
        "argument": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 40,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 39,
        "argument": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "operator": "--",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
