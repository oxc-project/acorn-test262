__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 34
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 46
          },
          "right": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fg",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 78
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 81,
                      "end": 82
                    },
                    "start": 77,
                    "end": 82
                  },
                  "start": 70,
                  "end": 82
                }
              ],
              "start": 64,
              "end": 84
            },
            "expression": false,
            "start": 49,
            "end": 84
          },
          "start": 37,
          "end": 84
        },
        "start": 25,
        "end": 84
      },
      "directive": null,
      "start": 25,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 126
            },
            "optional": false,
            "computed": false,
            "start": 112,
            "end": 126
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 128
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 145
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 147
          },
          "right": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 161
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mom",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 165
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "hi, ",
                          "cooked": "hi, "
                        },
                        "tail": false,
                        "start": 180,
                        "end": 187
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "!",
                          "cooked": "!"
                        },
                        "tail": true,
                        "start": 190,
                        "end": 193
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mom",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 190
                      }
                    ],
                    "start": 180,
                    "end": 193
                  },
                  "start": 173,
                  "end": 194
                }
              ],
              "start": 167,
              "end": 196
            },
            "expression": false,
            "start": 150,
            "end": 196
          },
          "start": 131,
          "end": 196
        },
        "start": 112,
        "end": 196
      },
      "directive": null,
      "start": 112,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 197
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 18,
                "end": 25
              }
            ],
            "optional": false,
            "start": 10,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 33
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "no",
            "raw": "'no'",
            "start": 34,
            "end": 38
          }
        ],
        "optional": false,
        "start": 28,
        "end": 39
      },
      "directive": null,
      "start": 28,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "optional": false,
          "computed": false,
          "start": 40,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "also no",
            "raw": "'also no'",
            "start": 46,
            "end": 55
          }
        ],
        "optional": false,
        "start": 40,
        "end": 56
      },
      "directive": null,
      "start": 40,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 62
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 63,
            "end": 64
          }
        ],
        "optional": false,
        "start": 57,
        "end": 65
      },
      "directive": null,
      "start": 57,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 66,
          "end": 71
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 72,
            "end": 73
          }
        ],
        "optional": false,
        "start": 66,
        "end": 74
      },
      "directive": null,
      "start": 66,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
