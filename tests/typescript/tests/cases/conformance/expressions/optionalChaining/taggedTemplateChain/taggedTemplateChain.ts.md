__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 21
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "b",
                "cooked": "b"
              },
              "tail": true,
              "start": 23,
              "end": 26
            }
          ],
          "expressions": [],
          "start": 23,
          "end": 26
        },
        "start": 20,
        "end": 26
      },
      "directive": null,
      "start": 20,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "b",
                "cooked": "b"
              },
              "tail": false,
              "start": 32,
              "end": 36
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "c",
                "cooked": "c"
              },
              "tail": true,
              "start": 37,
              "end": 40
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 36,
              "end": 37
            }
          ],
          "start": 32,
          "end": 40
        },
        "start": 29,
        "end": 40
      },
      "directive": null,
      "start": 29,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
