__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 28,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 27,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 20,
          "object": {
            "type": "TemplateLiteral",
            "start": 0,
            "end": 12,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 0,
                "end": 6,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 7,
                "end": 12,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 6,
                "end": 7,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 13,
            "end": 20,
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 21,
            "end": 26,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 21,
                "end": 26,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
