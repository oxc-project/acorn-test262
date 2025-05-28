__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 38,
            "end": 40,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 42,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 42,
          "end": 56,
          "object": {
            "type": "MemberExpression",
            "start": 42,
            "end": 53,
            "object": {
              "type": "MemberExpression",
              "start": 42,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 54,
            "end": 55,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ObjectExpression",
          "start": 59,
          "end": 61,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
