__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 27,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 20,
        "end": 26,
        "tag": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 26,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 23,
              "end": 26,
              "value": {
                "cooked": "b",
                "raw": "b"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 41,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 29,
        "end": 40,
        "tag": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 32,
          "end": 40,
          "expressions": [
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 1,
              "raw": "1"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 36,
              "value": {
                "cooked": "b",
                "raw": "b"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 37,
              "end": 40,
              "value": {
                "cooked": "c",
                "raw": "c"
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
