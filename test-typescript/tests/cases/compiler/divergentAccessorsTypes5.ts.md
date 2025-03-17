__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 695,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "name": "One",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 150,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 150,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 148,
                    "argument": {
                      "type": "Literal",
                      "start": 145,
                      "end": 147,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 186,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 186,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 163,
                  "end": 181,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 166,
                      "end": 181,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 166,
                          "end": 172
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
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
            "type": "PropertyDefinition",
            "start": 190,
            "end": 204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 195,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
              }
            },
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
      "start": 208,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 217,
        "name": "Two",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 231,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 262,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 262,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 245,
                    "end": 260,
                    "argument": {
                      "type": "Literal",
                      "start": 252,
                      "end": 259,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 233,
                "end": 242,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 235,
                  "end": 242,
                  "literal": {
                    "type": "Literal",
                    "start": 235,
                    "end": 242,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 274,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 299,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 275,
                  "end": 294,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 278,
                      "end": 294,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 278,
                          "end": 285,
                          "literal": {
                            "type": "Literal",
                            "start": 278,
                            "end": 285,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 288,
                          "end": 294
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 299,
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
            "type": "MethodDefinition",
            "start": 303,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 312,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 323,
                "end": 337,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 325,
                    "end": 335,
                    "argument": {
                      "type": "Literal",
                      "start": 332,
                      "end": 334,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 322,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 316,
                  "end": 322
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 369,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 349,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 369,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 364,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 364,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 353,
                      "end": 364,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 353,
                          "end": 359
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 362,
                          "end": 364,
                          "literal": {
                            "type": "Literal",
                            "start": 362,
                            "end": 364,
                            "value": 42,
                            "raw": "42"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 366,
                "end": 369,
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
      "start": 374,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 385,
        "name": "Three",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 386,
        "end": 554,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 430,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 399,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 430,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 430,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 413,
                    "end": 428,
                    "argument": {
                      "type": "Literal",
                      "start": 420,
                      "end": 427,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 401,
                "end": 410,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 403,
                  "end": 410,
                  "literal": {
                    "type": "Literal",
                    "start": 403,
                    "end": 410,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 433,
            "end": 468,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 442,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 442,
              "end": 468,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 443,
                  "end": 463,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 446,
                      "end": 463,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 446,
                          "end": 453,
                          "literal": {
                            "type": "Literal",
                            "start": 446,
                            "end": 453,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 456,
                          "end": 463
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
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
            "type": "MethodDefinition",
            "start": 472,
            "end": 506,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 481,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 481,
              "end": 506,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 492,
                "end": 506,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 494,
                    "end": 504,
                    "argument": {
                      "type": "Literal",
                      "start": 501,
                      "end": 503,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 483,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 485,
                  "end": 491
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 509,
            "end": 552,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 518,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 518,
              "end": 552,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 519,
                  "end": 547,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 520,
                    "end": 547,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 522,
                      "end": 547,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 522,
                          "end": 528
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 531,
                          "end": 537
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 540,
                          "end": 547
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 549,
                "end": 552,
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
      "start": 556,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 590,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 590,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 573,
                "end": 590,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 573,
                    "end": 576,
                    "typeName": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 576,
                      "name": "One",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 579,
                    "end": 582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 579,
                      "end": 582,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 585,
                    "end": 590,
                    "typeName": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 590,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 604,
      "end": 617,
      "expression": {
        "type": "AssignmentExpression",
        "start": 604,
        "end": 616,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 604,
          "end": 611,
          "object": {
            "type": "Identifier",
            "start": 604,
            "end": 605,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 606,
            "end": 611,
            "name": "prop1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 614,
          "end": 616,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 627,
      "end": 645,
      "expression": {
        "type": "AssignmentExpression",
        "start": 627,
        "end": 644,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 627,
          "end": 634,
          "object": {
            "type": "Identifier",
            "start": 627,
            "end": 628,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 629,
            "end": 634,
            "name": "prop1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 637,
          "end": 644,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 653,
      "end": 666,
      "expression": {
        "type": "AssignmentExpression",
        "start": 653,
        "end": 665,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 653,
          "end": 660,
          "object": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 655,
            "end": 660,
            "name": "prop2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 663,
          "end": 665,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 685,
      "expression": {
        "type": "AssignmentExpression",
        "start": 667,
        "end": 684,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 667,
          "end": 674,
          "object": {
            "type": "Identifier",
            "start": 667,
            "end": 668,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 674,
            "name": "prop2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 677,
          "end": 684,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
