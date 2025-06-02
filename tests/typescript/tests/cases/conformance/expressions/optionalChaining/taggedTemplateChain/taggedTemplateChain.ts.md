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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 26,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 23,
              "end": 26,
              "value": {
                "raw": "b",
                "cooked": "b"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 32,
          "end": 40,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 36,
              "value": {
                "raw": "b",
                "cooked": "b"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 37,
              "end": 40,
              "value": {
                "raw": "c",
                "cooked": "c"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 1,
              "raw": "1"
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
