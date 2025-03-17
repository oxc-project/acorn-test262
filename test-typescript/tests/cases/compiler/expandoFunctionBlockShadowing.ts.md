__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 388,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 79,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 77,
          "end": 79,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "X",
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
    },
    {
      "type": "IfStatement",
      "start": 80,
      "end": 148,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 99,
        "end": 148,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 132,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 131,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 126,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 112,
                      "end": 126,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 114,
                          "end": 124,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 119,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 121,
                              "end": 124
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 129,
                  "end": 131,
                  "properties": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 146,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 135,
              "end": 145,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 135,
                "end": 141,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 144,
                "end": 145,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 84,
        "end": 97,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "decorators": [],
            "name": "random",
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
      "start": 150,
      "end": 172,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 157,
        "end": 172,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 170,
          "end": 172,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "Y",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 173,
        "end": 187,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 173,
          "end": 179,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 182,
          "end": 187,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 204,
            "decorators": [],
            "name": "aliasTopY",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 210,
      "end": 388,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 229,
        "end": 388,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 233,
            "end": 258,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 239,
                "end": 258,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 243,
                  "end": 258,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 256,
                    "end": 258,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 261,
            "end": 273,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 261,
              "end": 272,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 261,
                "end": 267,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 270,
                "end": 272,
                "raw": "42",
                "value": 42
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 333,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 332,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 320,
                  "decorators": [],
                  "name": "topYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 320,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 294,
                      "end": 320,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 296,
                          "end": 305,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 298,
                            "end": 304,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 300,
                              "end": 304
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 306,
                          "end": 318,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 310,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 310,
                            "end": 318,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 312,
                              "end": 318
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 332,
                  "decorators": [],
                  "name": "aliasTopY",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 336,
            "end": 386,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 342,
                "end": 385,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 381,
                  "decorators": [],
                  "name": "blockYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 381,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 355,
                      "end": 381,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 357,
                          "end": 366,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 359,
                            "end": 365,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 361,
                              "end": 365
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 367,
                          "end": 379,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 371,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 371,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 373,
                              "end": 379
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 214,
        "end": 227,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 225,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "random",
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
