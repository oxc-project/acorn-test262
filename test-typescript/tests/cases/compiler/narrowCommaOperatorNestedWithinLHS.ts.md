__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "name": "otherValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 19,
            "end": 29,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "value": true,
              "raw": "true"
            },
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
      "type": "VariableDeclaration",
      "start": 31,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 70,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 44,
                "end": 70,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 46,
                    "end": 68,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 51,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 51,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 53,
                        "end": 68,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 53,
                            "end": 59
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 62,
                            "end": 68
                          }
                        ]
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
            "type": "TSAsExpression",
            "start": 73,
            "end": 84,
            "expression": {
              "type": "Literal",
              "start": 73,
              "end": 77,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 104,
        "name": "isNumber",
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
          "start": 105,
          "end": 113,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 113,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 110,
              "end": 113
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 186,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 136,
            "end": 148,
            "argument": {
              "type": "Literal",
              "start": 143,
              "end": 147,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 129,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 116,
          "end": 129,
          "parameterName": {
            "type": "Identifier",
            "start": 116,
            "end": 119,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 129,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 123,
              "end": 129
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 188,
      "end": 374,
      "test": {
        "type": "BinaryExpression",
        "start": 192,
        "end": 239,
        "left": {
          "type": "UnaryExpression",
          "start": 192,
          "end": 226,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 199,
            "end": 226,
            "object": {
              "type": "SequenceExpression",
              "start": 200,
              "end": 219,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 200,
                  "end": 212,
                  "callee": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 210,
                    "name": "otherValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 219,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 239,
          "value": "number",
          "raw": "'number'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 241,
        "end": 374,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 253,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 257,
                  "end": 268,
                  "object": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 262,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 268,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
            "start": 284,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 290,
                "end": 329,
                "id": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 299,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 291,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 293,
                      "end": 299
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 302,
                  "end": 329,
                  "object": {
                    "type": "SequenceExpression",
                    "start": 303,
                    "end": 322,
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "start": 303,
                        "end": 315,
                        "callee": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 313,
                          "name": "otherValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 322,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 329,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
    },
    {
      "type": "IfStatement",
      "start": 376,
      "end": 552,
      "test": {
        "type": "CallExpression",
        "start": 380,
        "end": 417,
        "callee": {
          "type": "Identifier",
          "start": 380,
          "end": 388,
          "name": "isNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 389,
            "end": 416,
            "object": {
              "type": "SequenceExpression",
              "start": 390,
              "end": 409,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 390,
                  "end": 402,
                  "callee": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 400,
                    "name": "otherValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 409,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 411,
              "end": 416,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 419,
        "end": 552,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 425,
            "end": 447,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 431,
                "end": 446,
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 435,
                  "end": 446,
                  "object": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 440,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 446,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
            "start": 462,
            "end": 508,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 507,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 477,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 471,
                      "end": 477
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 480,
                  "end": 507,
                  "object": {
                    "type": "SequenceExpression",
                    "start": 481,
                    "end": 500,
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "start": 481,
                        "end": 493,
                        "callee": {
                          "type": "Identifier",
                          "start": 481,
                          "end": 491,
                          "name": "otherValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      {
                        "type": "Identifier",
                        "start": 495,
                        "end": 500,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 507,
                    "name": "inner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
