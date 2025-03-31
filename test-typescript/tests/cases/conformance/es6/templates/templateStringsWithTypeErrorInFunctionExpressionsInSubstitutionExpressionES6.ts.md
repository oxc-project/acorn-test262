__ESTREE_TEST__:PASS:
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
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 39,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 33,
                    "end": 39
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 47,
                      "end": 52,
                      "value": "bad",
                      "raw": "\"bad\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 20,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 56,
            "end": 58,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
