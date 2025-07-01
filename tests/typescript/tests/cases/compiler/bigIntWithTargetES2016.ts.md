__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 7,
              "end": 8
            }
          ],
          "optional": false,
          "start": 0,
          "end": 9
        },
        "operator": "**",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 19
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 20,
              "end": 21
            }
          ],
          "optional": false,
          "start": 13,
          "end": 22
        },
        "start": 0,
        "end": 22
      },
      "directive": null,
      "start": 0,
      "end": 23
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 52
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 62,
                "end": 63
              }
            ],
            "optional": false,
            "start": 55,
            "end": 64
          },
          "definite": false,
          "start": 49,
          "end": 64
        }
      ],
      "declare": false,
      "start": 45,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 69
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 81,
              "end": 82
            }
          ],
          "optional": false,
          "start": 74,
          "end": 83
        },
        "start": 66,
        "end": 83
      },
      "directive": null,
      "start": 66,
      "end": 84
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
