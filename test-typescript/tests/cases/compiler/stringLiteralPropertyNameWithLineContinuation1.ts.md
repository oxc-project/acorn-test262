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
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 9,
                  "end": 17,
                  "raw": "'text\\\n'",
                  "value": "text"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 25,
                  "raw": "'hello'",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 41,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 41,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 27,
          "end": 33,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 41,
          "raw": "\"bar\"",
          "value": "bar"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
