__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 42,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 41,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 3,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 39,
            "end": 41,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "FunctionExpression",
            "start": 3,
            "end": 38,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 13,
                "end": 22,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 22,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 24,
              "end": 38,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 26,
                  "end": 36,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 26,
                    "end": 35,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
                      "value": "bad",
                      "raw": "\"bad\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
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
