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
        "callee": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 60,
      "expression": {
        "type": "UnaryExpression",
        "start": 35,
        "end": 53,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 48,
          "end": 53,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 90,
      "expression": {
        "type": "UnaryExpression",
        "start": 67,
        "end": 83,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 78,
          "end": 83,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 131,
      "expression": {
        "type": "UnaryExpression",
        "start": 97,
        "end": 124,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 110,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 115,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 124,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
