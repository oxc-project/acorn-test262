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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 17,
        "end": 44,
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
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 17,
          "end": 37,
          "computed": false,
          "object": {
            "type": "TemplateLiteral",
            "start": 17,
            "end": 29,
            "expressions": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 17,
                "end": 23,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 24,
                "end": 29,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
