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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "declare",
        "optional": false,
        "typeAnnotation": null
      },
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
          "argument": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 44,
        "end": 71,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 52,
          "end": 71,
          "expressions": [
            {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 52,
              "end": 61,
              "tail": false,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              }
            },
            {
              "type": "TemplateElement",
              "start": 62,
              "end": 71,
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
          "start": 44,
          "end": 51,
          "decorators": [],
          "name": "declare",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
