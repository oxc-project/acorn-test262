__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
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
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
      "directive": null,
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
            "optional": false,
            "typeAnnotation": null
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
      "end": 83,
      "directive": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 76,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 115,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 114,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 98,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ImportExpression",
              "start": 101,
              "end": 114,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 108,
                "end": 113,
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
      "start": 117,
      "end": 165,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 165,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 138,
            "end": 163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 144,
                "end": 162,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 146,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ImportExpression",
                  "start": 149,
                  "end": 162,
                  "options": null,
                  "source": {
                    "type": "Literal",
                    "start": 156,
                    "end": 161,
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
        "start": 126,
        "end": 129,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
