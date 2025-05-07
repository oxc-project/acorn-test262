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
                "value": "foo",
                "regex": null,
                "bigint": null
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
  "end": 132,
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
          "value": "./0",
          "regex": null,
          "bigint": null
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
              "value": "./0",
              "regex": null,
              "bigint": null
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
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 132,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 111,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 113,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ImportExpression",
                  "start": 116,
                  "end": 129,
                  "options": null,
                  "source": {
                    "type": "Literal",
                    "start": 123,
                    "end": 128,
                    "raw": "\"./0\"",
                    "value": "./0",
                    "regex": null,
                    "bigint": null
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
        "start": 93,
        "end": 96,
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
