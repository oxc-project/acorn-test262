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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 34,
          "end": 92,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 34,
              "end": 48,
              "value": {
                "raw": "'\\u{1f4a9}'",
                "cooked": "'💩'"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 76,
              "end": 92,
              "value": {
                "raw": "'\\uD83D\\uDCA9'",
                "cooked": "'💩'"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 49,
              "end": 75,
              "value": " should be converted to ",
              "raw": "\" should be converted to \""
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
