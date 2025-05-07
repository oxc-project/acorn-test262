__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 23,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 96,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 32,
                    "end": 92,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 32,
                      "end": 91,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 32,
                        "end": 40,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 32,
                          "end": 36
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 40,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 43,
                        "end": 91,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 49,
                          "end": 91,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 57,
                              "end": 85,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 57,
                                "end": 84,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 69,
                                    "end": 83,
                                    "raw": "\"called arrow\"",
                                    "value": "called arrow",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 57,
                                  "end": 68,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 57,
                                    "end": 64,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 65,
                                    "end": 68,
                                    "decorators": [],
                                    "name": "log",
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
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 144,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 144,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 144,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 111,
                    "end": 140,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 111,
                      "end": 139,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 123,
                          "end": 138,
                          "raw": "\"called method\"",
                          "value": "called method",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 111,
                        "end": 122,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 118,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "decorators": [],
                          "name": "log",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 269,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 269,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 267,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 173,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 267,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 267,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 204,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 182,
                      "end": 203,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 194,
                          "end": 202,
                          "raw": "\"SUPER:\"",
                          "value": "SUPER:",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 193,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 189,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 193,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 209,
                    "end": 221,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 209,
                      "end": 220,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 209,
                        "end": 218,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 209,
                          "end": 214
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 218,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 226,
                    "end": 247,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 226,
                      "end": 246,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 238,
                          "end": 245,
                          "raw": "\"THIS:\"",
                          "value": "THIS:",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 226,
                        "end": 237,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 233,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 237,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 252,
                    "end": 263,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 252,
                      "end": 262,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 252,
                        "end": 260,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 280,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 283,
            "end": 290,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 302,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 292,
        "end": 301,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 292,
          "end": 299,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 292,
            "end": 295,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 296,
            "end": 299,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 303,
        "end": 328,
        "arguments": [
          {
            "type": "Identifier",
            "start": 324,
            "end": 327,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 303,
          "end": 323,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 303,
            "end": 318,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 303,
              "end": 314,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 314,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 323,
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
