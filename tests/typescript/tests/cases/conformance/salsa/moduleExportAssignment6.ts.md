__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 474,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 185,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 185,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 111,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 111,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 111,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 78,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 68,
                      "end": 78,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 74,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 87,
                    "end": 105,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 87,
                      "end": 105,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 87,
                        "end": 99,
                        "object": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 99,
                          "decorators": [],
                          "name": "exports",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 102,
                        "end": 105,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 183,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 183,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 183,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 160,
                    "end": 177,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 167,
                      "end": 177,
                      "left": {
                        "type": "MemberExpression",
                        "start": 167,
                        "end": 173,
                        "object": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 199,
        "decorators": [],
        "name": "exec",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 316,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 208,
            "end": 233,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 214,
                "end": 232,
                "id": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 223,
                  "end": 232,
                  "callee": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 229,
                      "end": 231,
                      "value": 12,
                      "raw": "12"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 238,
            "end": 260,
            "argument": {
              "type": "MemberExpression",
              "start": 245,
              "end": 259,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 318,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 333,
        "decorators": [],
        "name": "tricky",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 336,
        "end": 474,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 391,
            "end": 416,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 397,
                "end": 415,
                "id": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 403,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 406,
                  "end": 415,
                  "callee": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 412,
                      "end": 414,
                      "value": 12,
                      "raw": "12"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 421,
            "end": 472,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 428,
              "end": 472,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 434,
                "end": 472,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 444,
                    "end": 466,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 451,
                      "end": 465,
                      "object": {
                        "type": "Identifier",
                        "start": 451,
                        "end": 457,
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 465,
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
