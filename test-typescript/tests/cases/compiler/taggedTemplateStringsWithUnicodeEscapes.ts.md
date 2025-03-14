taggedTemplateStringsWithUnicodeEscapes.ts
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
      "end": 93,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 32,
        "end": 92,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 34,
          "end": 92,
          "expressions": [
            {
              "type": "Literal",
              "start": 49,
              "end": 75,
              "raw": "\" should be converted to \"",
              "value": " should be converted to "
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 34,
              "end": 48,
              "tail": false,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\u{1f4a9}'"
              }
            },
            {
              "type": "TemplateElement",
              "start": 76,
              "end": 92,
              "tail": true,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\uD83D\\uDCA9'"
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
  "sourceType": "script"
}
```
