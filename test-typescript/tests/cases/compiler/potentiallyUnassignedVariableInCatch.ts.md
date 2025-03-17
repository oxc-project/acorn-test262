__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 8,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 7,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
