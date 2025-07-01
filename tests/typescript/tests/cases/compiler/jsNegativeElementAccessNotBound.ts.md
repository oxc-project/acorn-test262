__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 15,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 27
          },
          "property": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 29,
              "end": 30
            },
            "prefix": true,
            "start": 28,
            "end": 30
          },
          "optional": false,
          "computed": true,
          "start": 19,
          "end": 31
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 34,
          "end": 35
        },
        "start": 19,
        "end": 35
      },
      "directive": null,
      "start": 19,
      "end": 36
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
