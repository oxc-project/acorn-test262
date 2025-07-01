__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "otherValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 25,
              "end": 29
            },
            "id": null,
            "generator": false,
            "start": 19,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 51
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
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
                        ],
                        "start": 53,
                        "end": 68
                      },
                      "start": 51,
                      "end": 68
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 46,
                    "end": 68
                  }
                ],
                "start": 44,
                "end": 70
              },
              "start": 42,
              "end": 70
            },
            "start": 37,
            "end": 70
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 73,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 81,
              "end": 84
            },
            "start": 73,
            "end": 84
          },
          "definite": false,
          "start": 37,
          "end": 84
        }
      ],
      "declare": false,
      "start": 31,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 110,
              "end": 113
            },
            "start": 108,
            "end": 113
          },
          "start": 105,
          "end": 113
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 119
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 123,
              "end": 129
            },
            "start": 123,
            "end": 129
          },
          "start": 116,
          "end": 129
        },
        "start": 114,
        "end": 129
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 143,
              "end": 147
            },
            "start": 136,
            "end": 148
          }
        ],
        "start": 130,
        "end": 186
      },
      "expression": false,
      "start": 87,
      "end": 186
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 210
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 200,
                  "end": 212
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 219
                }
              ],
              "start": 200,
              "end": 219
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 226
            },
            "optional": false,
            "computed": false,
            "start": 199,
            "end": 226
          },
          "prefix": true,
          "start": 192,
          "end": 226
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "'number'",
          "start": 231,
          "end": 239
        },
        "start": 192,
        "end": 239
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 262
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 268
                  },
                  "optional": false,
                  "computed": false,
                  "start": 257,
                  "end": 268
                },
                "definite": false,
                "start": 253,
                "end": 268
              }
            ],
            "declare": false,
            "start": 247,
            "end": 269
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 293,
                      "end": 299
                    },
                    "start": 291,
                    "end": 299
                  },
                  "start": 290,
                  "end": 299
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 303,
                          "end": 313
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 303,
                        "end": 315
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 322
                      }
                    ],
                    "start": 303,
                    "end": 322
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 329
                  },
                  "optional": false,
                  "computed": false,
                  "start": 302,
                  "end": 329
                },
                "definite": false,
                "start": 290,
                "end": 329
              }
            ],
            "declare": false,
            "start": 284,
            "end": 330
          }
        ],
        "start": 241,
        "end": 374
      },
      "alternate": null,
      "start": 188,
      "end": 374
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 388
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 400
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 390,
                  "end": 402
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 409
                }
              ],
              "start": 390,
              "end": 409
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 416
            },
            "optional": false,
            "computed": false,
            "start": 389,
            "end": 416
          }
        ],
        "optional": false,
        "start": 380,
        "end": 417
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 440
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 446
                  },
                  "optional": false,
                  "computed": false,
                  "start": 435,
                  "end": 446
                },
                "definite": false,
                "start": 431,
                "end": 446
              }
            ],
            "declare": false,
            "start": 425,
            "end": 447
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 471,
                      "end": 477
                    },
                    "start": 469,
                    "end": 477
                  },
                  "start": 468,
                  "end": 477
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 491
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 481,
                        "end": 493
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 500
                      }
                    ],
                    "start": 481,
                    "end": 500
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 507
                  },
                  "optional": false,
                  "computed": false,
                  "start": 480,
                  "end": 507
                },
                "definite": false,
                "start": 468,
                "end": 507
              }
            ],
            "declare": false,
            "start": 462,
            "end": 508
          }
        ],
        "start": 419,
        "end": 552
      },
      "alternate": null,
      "start": 376,
      "end": 552
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 552
}
```
