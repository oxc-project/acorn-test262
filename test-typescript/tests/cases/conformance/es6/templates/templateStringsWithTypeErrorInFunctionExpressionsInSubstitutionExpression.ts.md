__ESTREE_TEST__:PASS:
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
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 25,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 25,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 33,
                      "end": 38,
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
            "start": 3,
            "end": 6,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 42,
            "end": 44,
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
