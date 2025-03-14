__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 26,
      "end": 108,
      "await": false,
      "body": {
        "type": "ForOfStatement",
        "start": 49,
        "end": 108,
        "await": false,
        "body": {
          "type": "ExpressionStatement",
          "start": 86,
          "end": 108,
          "expression": {
            "type": "CallExpression",
            "start": 86,
            "end": 107,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 98,
                "end": 106,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 106,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "doSomething",
              "optional": false
            },
            "optional": false
          }
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 54,
          "end": 60,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 58,
              "end": 60,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 60,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "right": {
          "type": "MemberExpression",
          "start": 64,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "someArray",
            "optional": false
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 37,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 41,
        "end": 43,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
