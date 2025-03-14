templateStringWithPropertyAccess.ts
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
          "start": 1,
          "end": 21,
          "computed": false,
          "object": {
            "type": "TemplateLiteral",
            "start": 1,
            "end": 13,
            "expressions": [
              {
                "type": "Literal",
                "start": 7,
                "end": 8,
                "raw": "0",
                "value": 0
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 1,
                "end": 7,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 13,
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
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "indexOf",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
