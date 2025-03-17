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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 27,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
        "source": {
          "type": "Literal",
          "start": 7,
          "end": 12,
          "value": "./0",
          "raw": "\"./0\""
        },
        "options": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 21,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 24,
            "end": 37,
            "source": {
              "type": "Literal",
              "start": 31,
              "end": 36,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 82,
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 41,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 47,
            "end": 81,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "name": "zero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 68,
                      "end": 76,
                      "object": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "zero",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 76,
                        "name": "foo",
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
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 114,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 91,
        "end": 114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 95,
            "end": 113,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ImportExpression",
              "start": 100,
              "end": 113,
              "source": {
                "type": "Literal",
                "start": 107,
                "end": 112,
                "value": "./0",
                "raw": "\"./0\""
              },
              "options": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 145,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ImportExpression",
                  "start": 148,
                  "end": 161,
                  "source": {
                    "type": "Literal",
                    "start": 155,
                    "end": 160,
                    "value": "./0",
                    "raw": "\"./0\""
                  },
                  "options": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
