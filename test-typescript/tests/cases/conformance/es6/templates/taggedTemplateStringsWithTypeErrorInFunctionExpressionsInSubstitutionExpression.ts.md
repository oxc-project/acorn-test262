__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 15,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 16,
          "end": 30,
          "argument": {
            "type": "Identifier",
            "start": 19,
            "end": 23,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 83,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 37,
        "end": 82,
        "tag": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 41,
          "end": 82,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 44,
              "end": 79,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 63,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 76,
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
              "start": 41,
              "end": 44,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 80,
              "end": 82,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
