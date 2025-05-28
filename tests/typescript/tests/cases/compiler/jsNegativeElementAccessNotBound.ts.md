__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "indexMap",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 15,
            "end": 17,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 36,
      "expression": {
        "type": "AssignmentExpression",
        "start": 19,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 19,
          "end": 31,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 27,
            "decorators": [],
            "name": "indexMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "UnaryExpression",
            "start": 28,
            "end": 30,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 35,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
