taggedTemplateStringsWithTypeErrorInFunctionExpressionsInSubstitutionExpressionES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 30,
          "end": 44,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 44,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 39,
              "end": 44,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 97,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 51,
        "end": 96,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 55,
          "end": 96,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 58,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 91,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 81,
                      "end": 90,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 85,
                        "end": 90,
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
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                }
              ]
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 55,
              "end": 58,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 94,
              "end": 96,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
