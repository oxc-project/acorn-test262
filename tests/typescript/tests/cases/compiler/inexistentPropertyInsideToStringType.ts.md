__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toString",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 26,
                "end": 30
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              "optional": false,
              "computed": false,
              "start": 26,
              "end": 36
            },
            "directive": null,
            "start": 26,
            "end": 36
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 41,
                  "end": 45
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 55
                },
                "optional": false,
                "computed": false,
                "start": 41,
                "end": 55
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 58,
                "end": 60
              },
              "start": 41,
              "end": 60
            },
            "directive": null,
            "start": 41,
            "end": 61
          }
        ],
        "start": 20,
        "end": 63
      },
      "expression": false,
      "start": 0,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
