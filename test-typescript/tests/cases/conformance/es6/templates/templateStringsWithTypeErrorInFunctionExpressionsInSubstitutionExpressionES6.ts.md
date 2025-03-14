templateStringsWithTypeErrorInFunctionExpressionsInSubstitutionExpressionES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 59,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 59,
      "expression": {
        "type": "TemplateLiteral",
        "start": 17,
        "end": 58,
        "expressions": [
          {
            "type": "FunctionExpression",
            "start": 20,
            "end": 55,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 41,
              "end": 55,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 43,
                  "end": 53,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 43,
                    "end": 52,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 47,
                      "end": 52,
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
                "start": 30,
                "end": 39,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 33,
                    "end": 39
                  }
                }
              }
            ]
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 20,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 56,
            "end": 58,
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
