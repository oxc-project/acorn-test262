__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 6,
  "end": 131,
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
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
        "argument": {
          "type": "Identifier",
          "start": 48,
          "end": 53,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 78,
          "end": 83,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 110,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 115,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 124,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
