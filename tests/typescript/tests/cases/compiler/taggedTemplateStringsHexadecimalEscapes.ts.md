__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              },
              "start": 20,
              "end": 25
            },
            "start": 18,
            "end": 25
          },
          "value": null,
          "start": 11,
          "end": 25
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 27,
        "end": 30
      },
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 33
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\x0D",
                "cooked": "\r"
              },
              "tail": false,
              "start": 34,
              "end": 41
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\x0A",
                "cooked": "\n"
              },
              "tail": true,
              "start": 61,
              "end": 67
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "Interrupted CRLF",
              "raw": "\"Interrupted CRLF\"",
              "start": 42,
              "end": 60
            }
          ],
          "start": 34,
          "end": 67
        },
        "start": 32,
        "end": 67
      },
      "directive": null,
      "start": 32,
      "end": 68
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
