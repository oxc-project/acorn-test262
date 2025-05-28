__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 14,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 17,
      "end": 180,
      "discriminant": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 67,
          "end": 100,
          "test": {
            "type": "Literal",
            "start": 72,
            "end": 77,
            "value": "bar",
            "raw": "\"bar\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 83,
              "end": 89,
              "expression": {
                "type": "Identifier",
                "start": 83,
                "end": 88,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 94,
              "end": 100,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 104,
          "end": 137,
          "test": {
            "type": "Literal",
            "start": 109,
            "end": 114,
            "value": "foo",
            "raw": "\"foo\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 120,
              "end": 126,
              "expression": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 131,
              "end": 137,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 141,
          "end": 178,
          "test": {
            "type": "Literal",
            "start": 146,
            "end": 155,
            "value": "invalid",
            "raw": "\"invalid\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 161,
              "end": 167,
              "expression": {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 172,
              "end": 178,
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
