__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 8,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 7,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TryStatement",
      "start": 9,
      "end": 77,
      "block": {
        "type": "BlockStatement",
        "start": 13,
        "end": 61,
        "body": [
          {
            "type": "IfStatement",
            "start": 16,
            "end": 59,
            "test": {
              "type": "BinaryExpression",
              "start": 20,
              "end": 39,
              "left": {
                "type": "CallExpression",
                "start": 20,
                "end": 33,
                "callee": {
                  "type": "MemberExpression",
                  "start": 20,
                  "end": 31,
                  "object": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 24,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 36,
                "end": 39,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 41,
              "end": 59,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 45,
                  "end": 56,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 45,
                    "end": 55,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 48,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 51,
                      "end": 55,
                      "value": 1234,
                      "raw": "1234"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 62,
        "end": 77,
        "param": null,
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 77,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 71,
              "end": 75,
              "expression": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
