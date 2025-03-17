__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 192,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 22,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 25,
            "end": 52,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 52,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 37,
                  "end": 50,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 37,
                    "end": 50,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 37,
                      "end": 45,
                      "object": {
                        "type": "ThisExpression",
                        "start": 37,
                        "end": 41
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 45,
                        "name": "age",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 48,
                      "end": 50,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 100,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 79,
              "end": 100,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 98,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 85,
                    "end": 98,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 94,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 94,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 134,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 134,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 121,
              "end": 134,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 127,
                  "end": 134
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 138,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 190,
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 142,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 143,
            "end": 189,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 189,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 155,
                  "end": 170,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 155,
                    "end": 169,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "name": "age",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 166,
                      "end": 169,
                      "value": 100,
                      "raw": "100"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 175,
                  "end": 187,
                  "argument": {
                    "type": "Literal",
                    "start": 182,
                    "end": 186,
                    "value": true,
                    "raw": "true"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
