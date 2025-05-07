__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 557,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "StaticBlock",
            "start": 14,
            "end": 73,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 31,
                "end": 47,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 31,
                  "end": 46,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 31,
                    "end": 44,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 44,
                      "decorators": [],
                      "name": "doSomething",
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
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 132,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 109,
                      "end": 131,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 121,
                          "end": 130,
                          "raw": "\"gotcha!\"",
                          "value": "gotcha!",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 120,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 116,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 120,
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
        "name": "A",
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
      "start": 143,
      "end": 219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 219,
        "body": [
          {
            "type": "StaticBlock",
            "start": 159,
            "end": 217,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 176,
                "end": 193,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 176,
                  "end": 192,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 188,
                      "end": 191,
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 187,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 183,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 187,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 230,
            "decorators": [],
            "name": "FOO",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 233,
            "end": 238,
            "raw": "\"FOO\"",
            "value": "FOO",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 240,
      "end": 318,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 318,
        "body": [
          {
            "type": "StaticBlock",
            "start": 256,
            "end": 316,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 273,
                "end": 290,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 273,
                  "end": 289,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 288,
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 273,
                    "end": 284,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 280,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 328,
            "end": 350,
            "expression": {
              "type": "Literal",
              "start": 328,
              "end": 333,
              "raw": "\"FOO\"",
              "value": "FOO",
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 337,
              "end": 350,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 337,
                  "end": 342,
                  "literal": {
                    "type": "Literal",
                    "start": 337,
                    "end": 342,
                    "raw": "\"FOO\"",
                    "value": "FOO",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 345,
                  "end": 350,
                  "literal": {
                    "type": "Literal",
                    "start": 345,
                    "end": 350,
                    "raw": "\"BAR\"",
                    "value": "BAR",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 353,
      "end": 534,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 363,
        "end": 534,
        "body": [
          {
            "type": "StaticBlock",
            "start": 369,
            "end": 433,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 386,
                "end": 396,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 386,
                  "end": 395,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 390,
                    "end": 395,
                    "raw": "\"BAR\"",
                    "value": "BAR",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 405,
                "end": 407,
                "directive": null,
                "expression": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 439,
            "end": 452,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 450,
              "end": 451,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 458,
            "end": 481,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 465,
              "end": 476,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 476,
              "end": 481,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 479,
                "end": 481,
                "body": []
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
            "type": "StaticBlock",
            "start": 487,
            "end": 532,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 504,
                "end": 506,
                "directive": null,
                "expression": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 362,
        "decorators": [],
        "name": "CFA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 536,
      "end": 538,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 536,
        "end": 537,
        "decorators": [],
        "name": "u",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
