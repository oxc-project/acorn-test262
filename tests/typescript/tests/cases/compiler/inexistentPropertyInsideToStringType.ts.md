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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "toString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 63,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 36,
            "expression": {
              "type": "MemberExpression",
              "start": 26,
              "end": 36,
              "object": {
                "type": "ThisExpression",
                "start": 26,
                "end": 30
              },
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 41,
            "end": 61,
            "expression": {
              "type": "AssignmentExpression",
              "start": 41,
              "end": 60,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 41,
                "end": 55,
                "object": {
                  "type": "ThisExpression",
                  "start": 41,
                  "end": 45
                },
                "property": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "someValue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 58,
                "end": 60,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
