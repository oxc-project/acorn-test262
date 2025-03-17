__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
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
      "start": 41,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 51,
            "end": 60,
            "callee": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "name": "BigInt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 58,
                "end": 59,
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
      "start": 62,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 79,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 70,
          "end": 79,
          "callee": {
            "type": "Identifier",
            "start": 70,
            "end": 76,
            "name": "BigInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
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
