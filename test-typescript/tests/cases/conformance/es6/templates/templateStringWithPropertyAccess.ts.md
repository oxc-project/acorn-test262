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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 27,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 21,
            "end": 26,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 21,
                "end": 26,
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
          "start": 0,
          "end": 20,
          "computed": false,
          "object": {
            "type": "TemplateLiteral",
            "start": 0,
            "end": 12,
            "expressions": [
              {
                "type": "Literal",
                "start": 6,
                "end": 7,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 0,
                "end": 6,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 7,
                "end": 12,
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
            "start": 13,
            "end": 20,
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
