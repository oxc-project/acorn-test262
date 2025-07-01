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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 72,
            "end": 77
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 88
              },
              "directive": null,
              "start": 83,
              "end": 89
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 94,
              "end": 100
            }
          ],
          "start": 67,
          "end": 100
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 109,
            "end": 114
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
              },
              "directive": null,
              "start": 120,
              "end": 126
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 131,
              "end": 137
            }
          ],
          "start": 104,
          "end": 137
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "invalid",
            "raw": "\"invalid\"",
            "start": 146,
            "end": 155
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 166
              },
              "directive": null,
              "start": 161,
              "end": 167
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 172,
              "end": 178
            }
          ],
          "start": 141,
          "end": 178
        }
      ],
      "start": 17,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
