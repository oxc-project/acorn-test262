__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 550,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 182,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 143,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 23,
                "end": 143,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 33,
                    "end": 96,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 36,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 96,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 40,
                        "end": 96,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 54,
                            "end": 86,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 57,
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 57,
                              "end": 86,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 59,
                                "end": 86,
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "start": 59,
                                    "end": 60,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 59,
                                      "end": 60,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "start": 63,
                                    "end": 64,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 63,
                                      "end": 64,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "start": 67,
                                    "end": 69,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 67,
                                      "end": 69,
                                      "value": 42,
                                      "raw": "42"
                                    }
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 72,
                                    "end": 81
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "start": 84,
                                    "end": 86,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 84,
                                      "end": 86,
                                      "value": "",
                                      "raw": "''"
                                    }
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 105,
                    "end": 137,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 108,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 110,
                        "end": 137,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 110,
                            "end": 111,
                            "literal": {
                              "type": "Literal",
                              "start": 110,
                              "end": 111,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 114,
                            "end": 115,
                            "literal": {
                              "type": "Literal",
                              "start": 114,
                              "end": 115,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 118,
                            "end": 120,
                            "literal": {
                              "type": "Literal",
                              "start": 118,
                              "end": 120,
                              "value": 42,
                              "raw": "42"
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 123,
                            "end": 132
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 135,
                            "end": 137,
                            "literal": {
                              "type": "Literal",
                              "start": 135,
                              "end": 137,
                              "value": "",
                              "raw": "''"
                            }
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 180,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 180,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 153,
                "end": 180,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 153,
                    "end": 154,
                    "literal": {
                      "type": "Literal",
                      "start": 153,
                      "end": 154,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 157,
                    "end": 158,
                    "literal": {
                      "type": "Literal",
                      "start": 157,
                      "end": 158,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 161,
                    "end": 163,
                    "literal": {
                      "type": "Literal",
                      "start": 161,
                      "end": 163,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 166,
                    "end": 175
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 178,
                    "end": 180,
                    "literal": {
                      "type": "Literal",
                      "start": 178,
                      "end": 180,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 207,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 207,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 207,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 226,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 245,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 264,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 264,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 286,
      "expression": {
        "type": "AssignmentExpression",
        "start": 266,
        "end": 286,
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "start": 266,
          "end": 271,
          "object": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 268,
            "end": 271,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 276,
          "end": 286,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 307,
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "start": 287,
          "end": 292,
          "object": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 289,
            "end": 292,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 297,
          "end": 307,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 303,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 304,
            "end": 307,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 328,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 328,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 308,
          "end": 313,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 310,
            "end": 313,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 318,
          "end": 328,
          "object": {
            "type": "Identifier",
            "start": 318,
            "end": 324,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 328,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 361,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 361,
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "start": 330,
          "end": 342,
          "object": {
            "type": "MemberExpression",
            "start": 330,
            "end": 335,
            "object": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 336,
            "end": 341,
            "value": "baz",
            "raw": "\"baz\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 347,
          "end": 361,
          "object": {
            "type": "MemberExpression",
            "start": 347,
            "end": 357,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 353,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 393,
      "expression": {
        "type": "AssignmentExpression",
        "start": 362,
        "end": 393,
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "start": 362,
          "end": 374,
          "object": {
            "type": "MemberExpression",
            "start": 362,
            "end": 367,
            "object": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 364,
              "end": 367,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 368,
            "end": 373,
            "value": "baz",
            "raw": "\"baz\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 379,
          "end": 393,
          "object": {
            "type": "MemberExpression",
            "start": 379,
            "end": 389,
            "object": {
              "type": "Identifier",
              "start": 379,
              "end": 385,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 386,
              "end": 389,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 390,
            "end": 393,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 425,
      "expression": {
        "type": "AssignmentExpression",
        "start": 394,
        "end": 425,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 394,
          "end": 406,
          "object": {
            "type": "MemberExpression",
            "start": 394,
            "end": 399,
            "object": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 399,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 400,
            "end": 405,
            "value": "baz",
            "raw": "\"baz\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 411,
          "end": 425,
          "object": {
            "type": "MemberExpression",
            "start": 411,
            "end": 421,
            "object": {
              "type": "Identifier",
              "start": 411,
              "end": 417,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 418,
              "end": 421,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 467,
      "expression": {
        "type": "AssignmentExpression",
        "start": 427,
        "end": 467,
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "start": 427,
          "end": 442,
          "object": {
            "type": "CallExpression",
            "start": 427,
            "end": 438,
            "callee": {
              "type": "MemberExpression",
              "start": 427,
              "end": 436,
              "object": {
                "type": "MemberExpression",
                "start": 427,
                "end": 432,
                "object": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 432,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 433,
                "end": 436,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 439,
            "end": 442,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 447,
          "end": 467,
          "object": {
            "type": "CallExpression",
            "start": 447,
            "end": 463,
            "callee": {
              "type": "MemberExpression",
              "start": 447,
              "end": 461,
              "object": {
                "type": "MemberExpression",
                "start": 447,
                "end": 457,
                "object": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 453,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 457,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 458,
                "end": 461,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 464,
            "end": 467,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 508,
      "expression": {
        "type": "AssignmentExpression",
        "start": 468,
        "end": 508,
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "start": 468,
          "end": 483,
          "object": {
            "type": "CallExpression",
            "start": 468,
            "end": 479,
            "callee": {
              "type": "MemberExpression",
              "start": 468,
              "end": 477,
              "object": {
                "type": "MemberExpression",
                "start": 468,
                "end": 473,
                "object": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 473,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 480,
            "end": 483,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 488,
          "end": 508,
          "object": {
            "type": "CallExpression",
            "start": 488,
            "end": 504,
            "callee": {
              "type": "MemberExpression",
              "start": 488,
              "end": 502,
              "object": {
                "type": "MemberExpression",
                "start": 488,
                "end": 498,
                "object": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 494,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 498,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 499,
                "end": 502,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 509,
      "end": 549,
      "expression": {
        "type": "AssignmentExpression",
        "start": 509,
        "end": 549,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 509,
          "end": 524,
          "object": {
            "type": "CallExpression",
            "start": 509,
            "end": 520,
            "callee": {
              "type": "MemberExpression",
              "start": 509,
              "end": 518,
              "object": {
                "type": "MemberExpression",
                "start": 509,
                "end": 514,
                "object": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 510,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 514,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 515,
                "end": 518,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 521,
            "end": 524,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 529,
          "end": 549,
          "object": {
            "type": "CallExpression",
            "start": 529,
            "end": 545,
            "callee": {
              "type": "MemberExpression",
              "start": 529,
              "end": 543,
              "object": {
                "type": "MemberExpression",
                "start": 529,
                "end": 539,
                "object": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 535,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 539,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 543,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 546,
            "end": 549,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
