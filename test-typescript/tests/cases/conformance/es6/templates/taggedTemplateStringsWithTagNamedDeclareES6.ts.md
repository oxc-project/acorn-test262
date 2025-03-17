__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 89,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 33,
        "name": "declare",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 42,
          "end": 54,
          "argument": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "name": "ys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 54,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 49,
              "end": 54,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 49,
                "end": 52
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 89,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 61,
        "end": 88,
        "tag": {
          "type": "Identifier",
          "start": 61,
          "end": 68,
          "name": "declare",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 69,
          "end": 88,
          "expressions": [
            {
              "type": "Literal",
              "start": 78,
              "end": 79,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 69,
              "end": 78,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 88,
              "value": {
                "cooked": " world!",
                "raw": " world!"
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
