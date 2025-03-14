typeOfThisInInstanceMember.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 227,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 227,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "start": 18,
              "end": 22
            }
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 62,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 62,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 56,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 51,
                      "end": 55
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
            "start": 67,
            "end": 183,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 183,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 183,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 100,
                    "end": 113,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 112,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "decorators": [],
                          "name": "t",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 126,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 125,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 135,
                    "end": 139,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 135,
                      "end": 138,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 152,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 151,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 161,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 165,
                        "end": 176,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 176,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 174,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "decorators": [],
                              "name": "t",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 174,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 189,
            "end": 225,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 225,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 225,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 237,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 257,
            "end": 260,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 268,
            "decorators": [],
            "name": "ra",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 271,
            "end": 278,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 271,
              "end": 276,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 271,
                "end": 274,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 292,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 286,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 292,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 310,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 308,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "decorators": [],
            "name": "rs",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 321,
            "end": 332,
            "elements": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "decorators": [],
                "name": "r2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 329,
                "end": 331,
                "decorators": [],
                "name": "r3",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 335,
      "end": 385,
      "expression": {
        "type": "CallExpression",
        "start": 335,
        "end": 384,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 346,
            "end": 383,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 351,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 363,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 357,
                    "end": 362,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 362,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 368,
                  "end": 372,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 368,
                    "end": 371,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 371,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 377,
                  "end": 381,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 377,
                    "end": 380,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
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
                "start": 346,
                "end": 347,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 335,
          "end": 345,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 335,
            "end": 337,
            "decorators": [],
            "name": "rs",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "decorators": [],
            "name": "forEach",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
