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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "name": "X",
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
          "start": 77,
          "end": 79,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 80,
      "end": 148,
      "test": {
        "type": "CallExpression",
        "start": 84,
        "end": 97,
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 95,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "name": "random",
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
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 126,
                  "name": "X",
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
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 119,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 121,
                              "end": 124
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 129,
                  "end": 131,
                  "properties": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 146,
            "expression": {
              "type": "AssignmentExpression",
              "start": 135,
              "end": 145,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 135,
                "end": 141,
                "object": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 144,
                "end": 145,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 150,
      "end": 172,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 157,
        "end": 172,
        "id": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "name": "Y",
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
          "start": 170,
          "end": 172,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 188,
      "expression": {
        "type": "AssignmentExpression",
        "start": 173,
        "end": 187,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 173,
          "end": 179,
          "object": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 182,
          "end": 187,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 204,
            "name": "aliasTopY",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 210,
      "end": 388,
      "test": {
        "type": "CallExpression",
        "start": 214,
        "end": 227,
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 225,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "name": "random",
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
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 243,
                  "end": 258,
                  "id": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "name": "Y",
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
                    "start": 256,
                    "end": 258,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 261,
            "end": 273,
            "expression": {
              "type": "AssignmentExpression",
              "start": 261,
              "end": 272,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 261,
                "end": 267,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 270,
                "end": 272,
                "value": 42,
                "raw": "42"
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 320,
                  "name": "topYcheck",
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
                          "typeParameters": null,
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
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 306,
                          "end": 318,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 310,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 310,
                            "end": 318,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 312,
                              "end": 318
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 332,
                  "name": "aliasTopY",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 381,
                  "name": "blockYcheck",
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
                          "typeParameters": null,
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
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 367,
                          "end": 379,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 371,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 371,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 373,
                              "end": 379
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
