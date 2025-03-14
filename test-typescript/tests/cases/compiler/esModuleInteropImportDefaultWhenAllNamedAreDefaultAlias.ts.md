__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 44,
        "raw": "\"m\"",
        "value": "m"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 53,
      "expression": {
        "type": "UnaryExpression",
        "start": 46,
        "end": 52,
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 61,
      "expression": {
        "type": "UnaryExpression",
        "start": 54,
        "end": 60,
        "argument": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
