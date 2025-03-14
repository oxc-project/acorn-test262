__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 360,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 276,
        "body": [
          {
            "type": "StaticBlock",
            "start": 72,
            "end": 105,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 81,
                "end": 103,
                "expression": {
                  "type": "CallExpression",
                  "start": 81,
                  "end": 103,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 93,
                      "end": 97
                    },
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 81,
                    "end": 92,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 88,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 153,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 121,
              "end": 153,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 151,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 151,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 141,
                          "end": 145
                        },
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 140,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 136,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 219,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 219,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 217,
                    "expression": {
                      "type": "CallExpression",
                      "start": 195,
                      "end": 217,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 216,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 206,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 202,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 206,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 191,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 184,
                      "end": 191
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 251,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 225,
              "end": 227,
              "name": "x"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 251,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 249,
                    "expression": {
                      "type": "CallExpression",
                      "start": 232,
                      "end": 248,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 243,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 239,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 274,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 274,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 274,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 262,
                    "end": 272,
                    "expression": {
                      "type": "CallExpression",
                      "start": 262,
                      "end": 271,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 262,
                        "end": 269,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 262,
                          "end": 266
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 267,
                          "end": 269,
                          "name": "x"
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 290,
            "decorators": [],
            "name": "oldFoo",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 318,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "TSAsExpression",
          "start": 299,
          "end": 309,
          "expression": {
            "type": "Identifier",
            "start": 299,
            "end": 302,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 306,
            "end": 309
          }
        },
        "right": {
          "type": "Literal",
          "start": 313,
          "end": 317,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 329,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 319,
          "end": 327,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 319,
            "end": 325,
            "decorators": [],
            "name": "oldFoo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 342,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 341,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 331,
          "end": 339,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
            "decorators": [],
            "name": "oldFoo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 360,
      "expression": {
        "type": "CallExpression",
        "start": 343,
        "end": 359,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 343,
          "end": 357,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 343,
            "end": 355,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 353,
              "decorators": [],
              "name": "oldFoo",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
