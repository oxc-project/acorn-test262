taggedTemplateStringsWithTypeErrorInFunctionExpressionsInSubstitutionExpression.ts
```json
{
  "type": "Program",
  "start": 3,
  "end": 83,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 3,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 15,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 16,
          "end": 30,
          "argument": {
            "type": "Identifier",
            "start": 19,
            "end": 23,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 30,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 25,
              "end": 30,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 83,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 37,
        "end": 82,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 41,
          "end": 82,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 44,
              "end": 79,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 79,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 77,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 67,
                      "end": 76,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 76,
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
                  "start": 54,
                  "end": 63,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  }
                }
              ]
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 41,
              "end": 44,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 80,
              "end": 82,
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
          "start": 37,
          "end": 40,
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
