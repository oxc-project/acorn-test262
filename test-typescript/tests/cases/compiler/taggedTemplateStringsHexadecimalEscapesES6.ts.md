__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 68,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 32,
        "end": 67,
        "tag": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 34,
          "end": 67,
          "expressions": [
            {
              "type": "Literal",
              "start": 42,
              "end": 60,
              "value": "Interrupted CRLF",
              "raw": "\"Interrupted CRLF\""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 34,
              "end": 41,
              "value": {
                "cooked": "\r",
                "raw": "\\x0D"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 61,
              "end": 67,
              "value": {
                "cooked": "\n",
                "raw": "\\x0A"
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
