__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 27,
        "end": 59,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 42,
          "end": 59,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 44,
              "end": 57,
              "argument": {
                "type": "Literal",
                "start": 51,
                "end": 56,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "ImportExpression",
        "start": 0,
        "end": 13,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 7,
          "end": 12,
          "raw": "\"./0\"",
          "value": "./0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 21,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 24,
            "end": 37,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 31,
              "end": 36,
              "raw": "\"./0\"",
              "value": "./0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 82,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 47,
            "end": 81,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 81,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 61,
                  "end": 79,
                  "argument": {
                    "type": "CallExpression",
                    "start": 68,
                    "end": 78,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 68,
                      "end": 76,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "zero",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 76,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "decorators": [],
                "name": "zero",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 41,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 91,
        "end": 114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 95,
            "end": 113,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "init": {
              "type": "ImportExpression",
              "start": 100,
              "end": 113,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 107,
                "end": 112,
                "raw": "\"./0\"",
                "value": "./0"
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 164,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 161,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 145,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "init": {
                  "type": "ImportExpression",
                  "start": 148,
                  "end": 161,
                  "options": null,
                  "source": {
                    "type": "Literal",
                    "start": 155,
                    "end": 160,
                    "raw": "\"./0\"",
                    "value": "./0"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
