__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 25,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 20,
              "end": 25,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 49,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 32,
        "end": 48,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 34,
          "end": 48,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 34,
              "end": 48,
              "tail": true,
              "value": {
                "cooked": "\t\n\u000b\f\r\\",
                "raw": "\\t\\n\\v\\f\\r\\\\"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
