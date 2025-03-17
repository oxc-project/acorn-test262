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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 33,
        "decorators": [],
        "name": "declare",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            }
          }
        },
        {
          "type": "RestElement",
          "start": 42,
          "end": 54,
          "argument": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 61,
        "end": 88,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 69,
          "end": 88,
          "expressions": [
            {
              "type": "Literal",
              "start": 78,
              "end": 79,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 69,
              "end": 78,
              "tail": false,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              }
            },
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 88,
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
          "start": 61,
          "end": 68,
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
