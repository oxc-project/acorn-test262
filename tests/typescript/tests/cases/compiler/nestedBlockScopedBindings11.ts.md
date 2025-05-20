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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "ExpressionStatement",
          "start": 24,
          "end": 32,
          "directive": null,
          "expression": {
            "type": "ArrowFunctionExpression",
            "start": 24,
            "end": 31,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "SwitchStatement",
      "start": 43,
      "end": 116,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 91,
              "end": 99,
              "directive": null,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 91,
                "end": 98,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
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
            "raw": "1",
            "value": 1
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 51,
        "end": 52,
        "raw": "1",
        "value": 1
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
