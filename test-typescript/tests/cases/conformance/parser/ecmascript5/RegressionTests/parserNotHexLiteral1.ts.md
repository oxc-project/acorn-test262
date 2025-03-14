__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 9,
                "end": 18,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 11,
                  "decorators": [],
                  "name": "e0",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 18,
                  "raw": "'cat'",
                  "value": "cat"
                }
              },
              {
                "type": "Property",
                "start": 20,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 22,
                  "decorators": [],
                  "name": "x0",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 29,
                  "raw": "'dog'",
                  "value": "dog"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 51,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 46,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "x0",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 32,
          "end": 44,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 39,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "info",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 192,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 191,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 191,
              "decorators": [],
              "name": "e0",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 173,
          "end": 185,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 181,
            "end": 185,
            "decorators": [],
            "name": "info",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
