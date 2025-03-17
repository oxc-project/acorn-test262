__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 22,
        "left": {
          "type": "CallExpression",
          "start": 0,
          "end": 9,
          "callee": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "name": "BigInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "operator": "**",
        "right": {
          "type": "CallExpression",
          "start": 13,
          "end": 22,
          "callee": {
            "type": "Identifier",
            "start": 13,
            "end": 19,
            "name": "BigInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 55,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "name": "BigInt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 84,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 83,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 74,
          "end": 83,
          "callee": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "name": "BigInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
