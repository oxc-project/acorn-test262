__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "name": "text",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
