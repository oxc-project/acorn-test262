__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
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
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false
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
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 65,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 55,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 74,
          "end": 83,
          "callee": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
