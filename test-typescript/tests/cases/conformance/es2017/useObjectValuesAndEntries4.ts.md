__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 22,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 16,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "raw": "2",
                  "value": 2
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
      "type": "ForOfStatement",
      "start": 25,
      "end": 75,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 72,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 35,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "CallExpression",
        "start": 39,
        "end": 55,
        "arguments": [
          {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 52,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "Object",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "values",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "entries",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 108,
            "arguments": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "o",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 105,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "decorators": [],
                "name": "entries",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
