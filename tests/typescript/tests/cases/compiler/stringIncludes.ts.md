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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 57,
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
          "callee": {
            "type": "MemberExpression",
            "start": 34,
            "end": 50,
            "object": {
              "type": "Literal",
              "start": 34,
              "end": 41,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 51,
              "end": 55,
              "value": "cd",
              "raw": "\"cd\""
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 95,
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
          "callee": {
            "type": "MemberExpression",
            "start": 69,
            "end": 85,
            "object": {
              "type": "Literal",
              "start": 69,
              "end": 76,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "includes",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 86,
              "end": 90,
              "value": "cd",
              "raw": "\"cd\""
            },
            {
              "type": "Literal",
              "start": 92,
              "end": 93,
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
