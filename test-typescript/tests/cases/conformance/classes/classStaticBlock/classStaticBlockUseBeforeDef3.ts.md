__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 558,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "expression": {
                  "type": "CallExpression",
                  "start": 31,
                  "end": 46,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 31,
                    "end": 44,
                    "object": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 44,
                      "name": "doSomething",
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
                "directive": null
              }
            ]
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 138,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 132,
                    "expression": {
                      "type": "CallExpression",
                      "start": 109,
                      "end": 131,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 120,
                        "object": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 116,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 120,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 121,
                          "end": 130,
                          "value": "gotcha!",
                          "raw": "\"gotcha!\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "expression": {
                  "type": "CallExpression",
                  "start": 176,
                  "end": 192,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 187,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 183,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 187,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 188,
                      "end": 191,
                      "name": "FOO",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 230,
            "name": "FOO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 233,
            "end": 238,
            "value": "FOO",
            "raw": "\"FOO\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 240,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "expression": {
                  "type": "CallExpression",
                  "start": 273,
                  "end": 289,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 273,
                    "end": 284,
                    "object": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 280,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 288,
                      "name": "FOO",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "name": "u",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 328,
            "end": 350,
            "expression": {
              "type": "Literal",
              "start": 328,
              "end": 333,
              "value": "FOO",
              "raw": "\"FOO\""
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
                    "value": "FOO",
                    "raw": "\"FOO\""
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
                    "value": "BAR",
                    "raw": "\"BAR\""
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 353,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 362,
        "name": "CFA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 386,
                  "end": 395,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 390,
                    "end": 395,
                    "value": "BAR",
                    "raw": "\"BAR\""
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 405,
                "end": 407,
                "expression": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "name": "u",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 439,
            "end": 452,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 450,
              "end": 451,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 458,
            "end": 481,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 465,
              "end": 476,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 476,
              "end": 481,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 479,
                "end": 481,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
                "expression": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "name": "u",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 536,
      "end": 538,
      "expression": {
        "type": "Identifier",
        "start": 536,
        "end": 537,
        "name": "u",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
