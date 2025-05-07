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
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 41,
        "expressions": [
          {
            "type": "FunctionExpression",
            "start": 3,
            "end": 38,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 24,
              "end": 38,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 26,
                  "end": 36,
                  "directive": null,
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
                      "raw": "\"bad\"",
                      "value": "bad",
                      "regex": null,
                      "bigint": null
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
            "typeParameters": null
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 3,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 39,
            "end": 41,
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
  "sourceType": "script",
  "hashbang": null
}
```
