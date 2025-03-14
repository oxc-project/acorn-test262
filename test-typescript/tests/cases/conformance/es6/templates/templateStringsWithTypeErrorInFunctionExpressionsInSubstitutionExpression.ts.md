templateStringsWithTypeErrorInFunctionExpressionsInSubstitutionExpression.ts
```json
{
  "type": "Program",
  "start": 3,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 3,
      "end": 45,
      "expression": {
        "type": "TemplateLiteral",
        "start": 3,
        "end": 44,
        "expressions": [
          {
            "type": "FunctionExpression",
            "start": 6,
            "end": 41,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 27,
              "end": 41,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 29,
                  "end": 39,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 29,
                    "end": 38,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 33,
                      "end": 38,
                      "raw": "\"bad\"",
                      "value": "bad"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 25,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 25,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  }
                }
              }
            ]
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3,
            "end": 6,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 42,
            "end": 44,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
