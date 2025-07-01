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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 7,
                  "end": 12
                },
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 21,
                      "end": 26
                    },
                    "start": 21,
                    "end": 26
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 29,
                      "end": 34
                    },
                    "start": 29,
                    "end": 34
                  }
                ],
                "start": 21,
                "end": 34
              },
              "start": 19,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 60,
            "end": 65
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 75,
              "end": 81
            }
          ],
          "start": 55,
          "end": 81
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 91,
            "end": 96
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 106,
              "end": 112
            }
          ],
          "start": 86,
          "end": 112
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "directive": null,
              "start": 133,
              "end": 135
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 144,
              "end": 150
            }
          ],
          "start": 117,
          "end": 150
        }
      ],
      "start": 38,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
