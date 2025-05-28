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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
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
                "decorators": [],
                "name": "match",
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
                "start": 19,
                "end": 21,
                "value": "",
                "raw": "''"
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
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 32,
            "end": 33,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 0,
                "raw": "0"
              },
              "optional": true,
              "computed": true
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
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
