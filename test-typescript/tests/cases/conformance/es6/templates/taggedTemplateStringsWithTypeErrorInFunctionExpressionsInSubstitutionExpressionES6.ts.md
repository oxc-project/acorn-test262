__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 27,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 27,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 22,
              "end": 27,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 34,
        "end": 79,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 38,
          "end": 79,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 41,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 76,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 64,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 64,
                      "end": 73,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 68,
                        "end": 73,
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
                  "start": 51,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
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
              "start": 38,
              "end": 41,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 77,
              "end": 79,
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
          "start": 34,
          "end": 37,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
