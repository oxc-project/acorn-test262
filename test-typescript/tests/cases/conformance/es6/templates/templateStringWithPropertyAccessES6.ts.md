__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 45,
      "expression": {
        "type": "CallExpression",
        "start": 17,
        "end": 44,
        "callee": {
          "type": "MemberExpression",
          "start": 17,
          "end": 37,
          "object": {
            "type": "TemplateLiteral",
            "start": 17,
            "end": 29,
            "expressions": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 17,
                "end": 23,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 24,
                "end": 29,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "name": "indexOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 38,
            "end": 43,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 38,
                "end": 43,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
