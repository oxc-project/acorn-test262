__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "declare",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 23,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 20,
              "end": 23
            }
          }
        },
        {
          "type": "RestElement",
          "start": 25,
          "end": 37,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 37,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 32,
              "end": 37,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 72,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 44,
        "end": 71,
        "tag": {
          "type": "Identifier",
          "start": 44,
          "end": 51,
          "decorators": [],
          "name": "declare",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 52,
          "end": 71,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 52,
              "end": 61,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 62,
              "end": 71,
              "value": {
                "cooked": " world!",
                "raw": " world!"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "value": 0,
              "raw": "0"
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
