__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 7,
      "end": 34,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 13,
          "end": 19,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 17,
              "end": 18,
              "id": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 24,
          "end": 32,
          "expression": {
            "type": "ArrowFunctionExpression",
            "start": 24,
            "end": 31,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 43,
      "end": 116,
      "discriminant": {
        "type": "Literal",
        "start": 51,
        "end": 52,
        "value": 1,
        "raw": "1"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 60,
          "end": 114,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 76,
              "end": 82,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 80,
                  "end": 81,
                  "id": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 91,
              "end": 99,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 91,
                "end": 98,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 108,
              "end": 114,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 65,
            "end": 66,
            "value": 1,
            "raw": "1"
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
