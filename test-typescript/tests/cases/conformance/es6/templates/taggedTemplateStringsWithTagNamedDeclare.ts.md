__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 19,
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
          "start": 20,
          "end": 26,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 28,
          "end": 40,
          "argument": {
            "type": "Identifier",
            "start": 31,
            "end": 33,
            "name": "ys",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 75,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 47,
        "end": 74,
        "tag": {
          "type": "Identifier",
          "start": 47,
          "end": 54,
          "name": "declare",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 55,
          "end": 74,
          "expressions": [
            {
              "type": "Literal",
              "start": 64,
              "end": 65,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 55,
              "end": 64,
              "value": {
                "cooked": "Hello ",
                "raw": "Hello "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 65,
              "end": 74,
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
