__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 9,
                "end": 25,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 9,
                  "end": 17,
                  "value": "text",
                  "raw": "'text\\\n'"
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 25,
                  "value": "hello",
                  "raw": "'hello'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 41,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 41,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 33,
          "object": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 41,
          "value": "bar",
          "raw": "\"bar\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
