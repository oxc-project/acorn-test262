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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "otherValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 19,
            "end": 29,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "value": true,
              "raw": "true"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 85,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 70,
            "decorators": [],
            "name": "value",
            "optional": false,
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
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 113,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 113,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 110,
              "end": 113
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
      },
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
      "expression": false
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
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 219,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "prefix": true
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 253,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 257,
                  "end": 268,
                  "object": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 262,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 268,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 284,
            "end": 330,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 290,
                "end": 329,
                "id": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 299,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 291,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 293,
                      "end": 299
                    }
                  }
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
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 322,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 329,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
          "decorators": [],
          "name": "isNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 409,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 411,
              "end": 416,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 431,
                "end": 446,
                "id": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 435,
                  "end": 446,
                  "object": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 440,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 446,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 462,
            "end": 508,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 507,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 477,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 471,
                      "end": 477
                    }
                  }
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
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 495,
                        "end": 500,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 507,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
