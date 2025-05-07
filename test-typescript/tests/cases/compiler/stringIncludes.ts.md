__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 21,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 14,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 23,
        "end": 56,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 23,
          "end": 31,
          "decorators": [],
          "name": "includes",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 34,
          "end": 56,
          "arguments": [
            {
              "type": "Literal",
              "start": 51,
              "end": 55,
              "raw": "\"cd\"",
              "value": "cd",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 34,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 34,
              "end": 41,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "includes",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 69,
          "end": 94,
          "arguments": [
            {
              "type": "Literal",
              "start": 86,
              "end": 90,
              "raw": "\"cd\"",
              "value": "cd",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 69,
            "end": 85,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 69,
              "end": 76,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null
            }
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
