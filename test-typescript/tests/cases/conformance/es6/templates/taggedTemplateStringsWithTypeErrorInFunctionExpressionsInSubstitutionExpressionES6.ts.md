__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
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
          "start": 30,
          "end": 44,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 97,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 51,
        "end": 96,
        "tag": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 55,
          "end": 96,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 58,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 85,
                        "end": 90,
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
              "start": 55,
              "end": 58,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 94,
              "end": 96,
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
