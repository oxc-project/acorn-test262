__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 22,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 21,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 18,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 10,
                "end": 12,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 13,
                "end": 18,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 24,
        "end": 34,
        "operator": "&&",
        "left": {
          "type": "TSNonNullExpression",
          "start": 24,
          "end": 26,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 30,
          "end": 34,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 32,
            "end": 33,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 36,
        "end": 51,
        "operator": "&&",
        "left": {
          "type": "ChainExpression",
          "start": 36,
          "end": 43,
          "expression": {
            "type": "TSNonNullExpression",
            "start": 36,
            "end": 43,
            "expression": {
              "type": "MemberExpression",
              "start": 36,
              "end": 42,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 47,
          "end": 51,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
