__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 22,
        "operator": "**",
        "left": {
          "type": "CallExpression",
          "start": 0,
          "end": 9,
          "arguments": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "right": {
          "type": "CallExpression",
          "start": 13,
          "end": 22,
          "arguments": [
            {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 13,
            "end": 19,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 51,
            "end": 60,
            "arguments": [
              {
                "type": "Literal",
                "start": 58,
                "end": 59,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 79,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 70,
          "end": 79,
          "arguments": [
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 70,
            "end": 76,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
