__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
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
      "end": 93,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 32,
        "end": 92,
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
          "end": 92,
          "expressions": [
            {
              "type": "Literal",
              "start": 49,
              "end": 75,
              "value": " should be converted to ",
              "raw": "\" should be converted to \""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 34,
              "end": 48,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\u{1f4a9}'"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 76,
              "end": 92,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\uD83D\\uDCA9'"
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
