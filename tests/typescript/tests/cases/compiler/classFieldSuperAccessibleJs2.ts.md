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
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 96,
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
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 96,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 96,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 32,
                    "end": 92,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 32,
                      "end": 91,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 32,
                        "end": 40,
                        "object": {
                          "type": "ThisExpression",
                          "start": 32,
                          "end": 36
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 40,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 43,
                        "end": 91,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 49,
                          "end": 91,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 57,
                              "end": 85,
                              "expression": {
                                "type": "CallExpression",
                                "start": 57,
                                "end": 84,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 57,
                                  "end": 68,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 57,
                                    "end": 64,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 65,
                                    "end": 68,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 69,
                                    "end": 83,
                                    "value": "called arrow",
                                    "raw": "\"called arrow\""
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
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
            "start": 99,
            "end": 144,
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
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 144,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 144,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 111,
                    "end": 140,
                    "expression": {
                      "type": "CallExpression",
                      "start": 111,
                      "end": 139,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 111,
                        "end": 122,
                        "object": {
                          "type": "Identifier",
                          "start": 111,
                          "end": 118,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 123,
                          "end": 138,
                          "value": "called method",
                          "raw": "\"called method\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 148,
      "end": 269,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 269,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 267,
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
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 267,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 267,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 182,
                      "end": 203,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 193,
                        "object": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 189,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 193,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 194,
                          "end": 202,
                          "value": "SUPER:",
                          "raw": "\"SUPER:\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 209,
                    "end": 221,
                    "expression": {
                      "type": "CallExpression",
                      "start": 209,
                      "end": 220,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 209,
                        "end": 218,
                        "object": {
                          "type": "Super",
                          "start": 209,
                          "end": 214
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 218,
                          "decorators": [],
                          "name": "foo",
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
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 226,
                    "end": 247,
                    "expression": {
                      "type": "CallExpression",
                      "start": 226,
                      "end": 246,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 226,
                        "end": 237,
                        "object": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 233,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 237,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 238,
                          "end": 245,
                          "value": "THIS:",
                          "raw": "\"THIS:\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 252,
                    "end": 263,
                    "expression": {
                      "type": "CallExpression",
                      "start": 252,
                      "end": 262,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 252,
                        "end": 260,
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
                          "decorators": [],
                          "name": "foo",
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
                    "directive": null
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
      "type": "VariableDeclaration",
      "start": 271,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 290,
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
            "callee": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 302,
      "expression": {
        "type": "CallExpression",
        "start": 292,
        "end": 301,
        "callee": {
          "type": "MemberExpression",
          "start": 292,
          "end": 299,
          "object": {
            "type": "Identifier",
            "start": 292,
            "end": 295,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 296,
            "end": 299,
            "decorators": [],
            "name": "foo",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 329,
      "expression": {
        "type": "CallExpression",
        "start": 303,
        "end": 328,
        "callee": {
          "type": "MemberExpression",
          "start": 303,
          "end": 323,
          "object": {
            "type": "MemberExpression",
            "start": 303,
            "end": 318,
            "object": {
              "type": "MemberExpression",
              "start": 303,
              "end": 314,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 314,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 315,
              "end": 318,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 323,
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
