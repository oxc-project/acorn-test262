__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 63,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 36,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 26,
              "end": 36,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 26,
                "end": 30
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 41,
            "end": 61,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 41,
              "end": 60,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 41,
                "end": 55,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 41,
                  "end": 45
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "someValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 58,
                "end": 60,
                "raw": "\"\"",
                "value": ""
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "toString",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
