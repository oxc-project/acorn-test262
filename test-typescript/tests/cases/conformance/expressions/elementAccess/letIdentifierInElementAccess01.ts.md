__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "name": "let",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 13,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 18,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 35,
      "expression": {
        "type": "AssignmentExpression",
        "start": 21,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 21,
          "end": 27,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "name": "let",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 25,
            "end": 26,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 30,
          "end": 33,
          "value": 100,
          "raw": "100"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
