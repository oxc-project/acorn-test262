__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 54,
            "end": 55,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
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
