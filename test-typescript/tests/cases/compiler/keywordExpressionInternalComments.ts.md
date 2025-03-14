__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 6,
  "end": 132,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 6,
      "end": 28,
      "expression": {
        "type": "NewExpression",
        "start": 6,
        "end": 21,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "Array",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 60,
      "expression": {
        "type": "UnaryExpression",
        "start": 35,
        "end": 53,
        "argument": {
          "type": "Identifier",
          "start": 48,
          "end": 53,
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 90,
      "expression": {
        "type": "UnaryExpression",
        "start": 67,
        "end": 83,
        "argument": {
          "type": "Identifier",
          "start": 78,
          "end": 83,
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 131,
      "expression": {
        "type": "UnaryExpression",
        "start": 97,
        "end": 124,
        "argument": {
          "type": "MemberExpression",
          "start": 110,
          "end": 124,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 115,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 124,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
