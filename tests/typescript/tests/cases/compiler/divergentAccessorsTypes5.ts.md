__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 694,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 206,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 150,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                }
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 163,
                  "end": 181,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 195,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 372,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 217,
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 262,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 231,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 262,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 299,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 274,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 299,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 275,
                  "end": 294,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 299,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 303,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 312,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 337,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 322,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 316,
                  "end": 322
                }
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 369,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 349,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 369,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 364,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 366,
                "end": 369,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 374,
      "end": 554,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 385,
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 386,
        "end": 554,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 430,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 399,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 430,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 433,
            "end": 468,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 442,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 442,
              "end": 468,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 443,
                  "end": 463,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 506,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 481,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 481,
              "end": 506,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 483,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 485,
                  "end": 491
                }
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 509,
            "end": 552,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 518,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 518,
              "end": 552,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 519,
                  "end": 547,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 549,
                "end": 552,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 591,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 590,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 606,
            "end": 611,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 629,
            "end": 634,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 655,
            "end": 660,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 674,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
