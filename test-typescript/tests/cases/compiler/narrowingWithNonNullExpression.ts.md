__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 22,
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 18,
              "object": {
                "type": "Literal",
                "start": 10,
                "end": 12,
                "value": "",
                "raw": "''"
              },
              "property": {
                "type": "Identifier",
                "start": 13,
                "end": 18,
                "name": "match",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 21,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 35,
      "expression": {
        "type": "LogicalExpression",
        "start": 24,
        "end": 34,
        "left": {
          "type": "TSNonNullExpression",
          "start": 24,
          "end": 26,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 30,
          "end": 34,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 32,
            "end": 33,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 52,
      "expression": {
        "type": "LogicalExpression",
        "start": 36,
        "end": 51,
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
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": true
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 47,
          "end": 51,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
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
