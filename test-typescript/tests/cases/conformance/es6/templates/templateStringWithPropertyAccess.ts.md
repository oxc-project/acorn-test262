__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 29,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 29,
      "expression": {
        "type": "CallExpression",
        "start": 1,
        "end": 28,
        "callee": {
          "type": "MemberExpression",
          "start": 1,
          "end": 21,
          "object": {
            "type": "TemplateLiteral",
            "start": 1,
            "end": 13,
            "expressions": [
              {
                "type": "Literal",
                "start": 7,
                "end": 8,
                "value": 0,
                "raw": "0"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 1,
                "end": 7,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 13,
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
            "start": 14,
            "end": 21,
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
            "start": 22,
            "end": 27,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 22,
                "end": 27,
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
