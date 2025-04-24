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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 19,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 19,
          "end": 31,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 27,
            "decorators": [],
            "name": "indexMap",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "UnaryExpression",
            "start": 28,
            "end": 30,
            "argument": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "1",
              "value": 1
            },
            "operator": "-",
            "prefix": true
          }
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 35,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
