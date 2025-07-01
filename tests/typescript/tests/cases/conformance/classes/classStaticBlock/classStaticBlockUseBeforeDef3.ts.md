__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 44
                    },
                    "optional": false,
                    "computed": false,
                    "start": 31,
                    "end": 44
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 31,
                  "end": 46
                },
                "directive": null,
                "start": 31,
                "end": 47
              }
            ],
            "start": 14,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 116
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 120
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "gotcha!",
                          "raw": "\"gotcha!\"",
                          "start": 121,
                          "end": 130
                        }
                      ],
                      "optional": false,
                      "start": 109,
                      "end": 131
                    },
                    "directive": null,
                    "start": 109,
                    "end": 132
                  }
                ],
                "start": 100,
                "end": 138
              },
              "expression": false,
              "start": 97,
              "end": 138
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 138
          }
        ],
        "start": 8,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 187
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 187
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 191
                    }
                  ],
                  "optional": false,
                  "start": 176,
                  "end": 192
                },
                "directive": null,
                "start": 176,
                "end": 193
              }
            ],
            "start": 159,
            "end": 217
          }
        ],
        "start": 153,
        "end": 219
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 219
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
            "name": "FOO",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 230
          },
          "init": {
            "type": "Literal",
            "value": "FOO",
            "raw": "\"FOO\"",
            "start": 233,
            "end": 238
          },
          "definite": false,
          "start": 227,
          "end": 238
        }
      ],
      "declare": false,
      "start": 221,
      "end": 239
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 280
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 273,
                    "end": 284
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 288
                    }
                  ],
                  "optional": false,
                  "start": 273,
                  "end": 289
                },
                "directive": null,
                "start": 273,
                "end": 290
              }
            ],
            "start": 256,
            "end": 316
          }
        ],
        "start": 250,
        "end": 318
      },
      "abstract": false,
      "declare": false,
      "start": 240,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "FOO",
              "raw": "\"FOO\"",
              "start": 328,
              "end": 333
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "FOO",
                    "raw": "\"FOO\"",
                    "start": 337,
                    "end": 342
                  },
                  "start": 337,
                  "end": 342
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "BAR",
                    "raw": "\"BAR\"",
                    "start": 345,
                    "end": 350
                  },
                  "start": 345,
                  "end": 350
                }
              ],
              "start": 337,
              "end": 350
            },
            "start": 328,
            "end": 350
          },
          "definite": false,
          "start": 324,
          "end": 350
        }
      ],
      "declare": false,
      "start": 320,
      "end": 351
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CFA",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 362
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "right": {
                    "type": "Literal",
                    "value": "BAR",
                    "raw": "\"BAR\"",
                    "start": 390,
                    "end": 395
                  },
                  "start": 386,
                  "end": 395
                },
                "directive": null,
                "start": 386,
                "end": 396
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "directive": null,
                "start": 405,
                "end": 407
              }
            ],
            "start": 369,
            "end": 433
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 447
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 450,
              "end": 451
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 439,
            "end": 452
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 476
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 479,
                "end": 481
              },
              "expression": false,
              "start": 476,
              "end": 481
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 458,
            "end": 481
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "directive": null,
                "start": 504,
                "end": 506
              }
            ],
            "start": 487,
            "end": 532
          }
        ],
        "start": 363,
        "end": 534
      },
      "abstract": false,
      "declare": false,
      "start": 353,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "u",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 537
      },
      "directive": null,
      "start": 536,
      "end": 538
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 557
}
```
