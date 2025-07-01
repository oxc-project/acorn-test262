__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "declare",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 20,
              "end": 23
            },
            "start": 18,
            "end": 23
          },
          "start": 17,
          "end": 23
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 30
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 32,
              "end": 37
            },
            "start": 30,
            "end": 37
          },
          "value": null,
          "start": 25,
          "end": 37
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 39,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "declare",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 51
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "Hello ",
                "cooked": "Hello "
              },
              "tail": false,
              "start": 52,
              "end": 61
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " world!",
                "cooked": " world!"
              },
              "tail": true,
              "start": 62,
              "end": 71
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 61,
              "end": 62
            }
          ],
          "start": 52,
          "end": 71
        },
        "start": 44,
        "end": 71
      },
      "directive": null,
      "start": 44,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
