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
  "end": 324,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 239,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 187,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 239,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 239,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 233,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 206,
                        "end": 232,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 215,
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ImportExpression",
                          "start": 218,
                          "end": 232,
                          "options": null,
                          "source": {
                            "type": "Literal",
                            "start": 226,
                            "end": 231,
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
        "start": 173,
        "end": 174,
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
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 324,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 250,
        "end": 324,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 258,
          "end": 324,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 264,
              "end": 322,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 264,
                "end": 270,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 270,
                "end": 322,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 273,
                  "end": 322,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 283,
                      "end": 316,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 289,
                          "end": 315,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 289,
                            "end": 298,
                            "decorators": [],
                            "name": "loadAsync",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ImportExpression",
                            "start": 301,
                            "end": 315,
                            "options": null,
                            "source": {
                              "type": "Literal",
                              "start": 309,
                              "end": 314,
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
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
