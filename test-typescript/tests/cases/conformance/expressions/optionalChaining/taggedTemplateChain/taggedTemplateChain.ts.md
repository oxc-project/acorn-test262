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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 27,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 20,
        "end": 26,
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
              "tail": true,
              "value": {
                "cooked": "b",
                "raw": "b"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 41,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 29,
        "end": 40,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 32,
          "end": 40,
          "expressions": [
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "1",
              "value": 1
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 36,
              "tail": false,
              "value": {
                "cooked": "b",
                "raw": "b"
              }
            },
            {
              "type": "TemplateElement",
              "start": 37,
              "end": 40,
              "tail": true,
              "value": {
                "cooked": "c",
                "raw": "c"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
