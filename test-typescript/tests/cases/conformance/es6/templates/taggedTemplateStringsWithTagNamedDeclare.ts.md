taggedTemplateStringsWithTagNamedDeclare.ts
```json
{
  "type": "Program",
  "start": 3,
  "end": 75,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 3,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 19,
        "decorators": [],
        "name": "declare",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          }
        },
        {
          "type": "RestElement",
          "start": 28,
          "end": 40,
          "argument": {
            "type": "Identifier",
            "start": 31,
            "end": 33,
            "decorators": [],
            "name": "ys",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 40,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 35,
              "end": 40,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 75,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 47,
        "end": 74,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 55,
          "end": 74,
          "expressions": [
            {
              "type": "Literal",
              "start": 64,
              "end": 65,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 55,
              "end": 64,
              "tail": false,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              }
            },
            {
              "type": "TemplateElement",
              "start": 65,
              "end": 74,
              "tail": true,
              "value": {
                "cooked": " world!",
                "raw": " world!"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 47,
          "end": 54,
          "decorators": [],
          "name": "declare",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
