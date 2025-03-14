__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 131,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 46,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 29,
          "end": 40,
          "argument": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
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
      "start": 48,
      "end": 131,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 48,
        "end": 131,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 50,
          "end": 131,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 50,
              "end": 131,
              "tail": true,
              "value": {
                "cooked": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n",
                "raw": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
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
