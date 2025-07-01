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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 35
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 38,
            "end": 40
          },
          "definite": false,
          "start": 32,
          "end": 40
        }
      ],
      "declare": false,
      "start": 28,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 45
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 46,
                "end": 47
              },
              "optional": false,
              "computed": true,
              "start": 42,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 53
            },
            "optional": false,
            "computed": false,
            "start": 42,
            "end": 53
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 54,
            "end": 55
          },
          "optional": false,
          "computed": true,
          "start": 42,
          "end": 56
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 59,
          "end": 61
        },
        "start": 42,
        "end": 61
      },
      "directive": null,
      "start": 42,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 62
}
```
