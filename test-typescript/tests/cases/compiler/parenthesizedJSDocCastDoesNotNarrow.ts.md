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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
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
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "start": 17,
      "end": 180,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 67,
          "end": 100,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 83,
              "end": 89,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 83,
                "end": 88,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 94,
              "end": 100,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 72,
            "end": 77,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 104,
          "end": 137,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 120,
              "end": 126,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 131,
              "end": 137,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 109,
            "end": 114,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 141,
          "end": 178,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 161,
              "end": 167,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 172,
              "end": 178,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 146,
            "end": 155,
            "raw": "\"invalid\"",
            "value": "invalid",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
