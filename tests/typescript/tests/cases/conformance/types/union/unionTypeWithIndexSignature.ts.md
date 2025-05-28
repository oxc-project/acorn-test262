__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 814,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 70,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 11,
            "end": 44,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 13,
                "end": 32,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 16,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 18,
                    "end": 31,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 20,
                        "end": 29,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 20,
                          "end": 23,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 23,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 25,
                            "end": 29,
                            "literal": {
                              "type": "Literal",
                              "start": 25,
                              "end": 29,
                              "value": true,
                              "raw": "true"
                            }
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
                "start": 33,
                "end": 42,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 36,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 42,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 42,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 47,
            "end": 70,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 49,
                "end": 68,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 50,
                    "end": 59,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 51,
                      "end": 59,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 53,
                        "end": 59
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 90,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "decorators": [],
                  "name": "Two",
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
      "start": 91,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 99,
          "end": 104,
          "value": "bye",
          "raw": "'bye'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 117,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 105,
          "end": 110,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 113,
          "end": 117,
          "value": "hi",
          "raw": "'hi'"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 128,
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 131,
        "end": 199,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 131,
            "end": 146,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 133,
                "end": 144,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 136,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 138,
                    "end": 144
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 149,
            "end": 172,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 151,
                "end": 170,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 161,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 155,
                        "end": 161
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 175,
            "end": 199,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 177,
                "end": 197,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 178,
                    "end": 187,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 190,
                    "end": 197
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 221,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 221,
                  "decorators": [],
                  "name": "Three",
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
      "start": 222,
      "end": 235,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 222,
          "end": 227,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 230,
          "end": 235,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 236,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 248,
        "decorators": [],
        "name": "Missing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 251,
        "end": 322,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 251,
            "end": 277,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 253,
                "end": 265,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 256,
                  "end": 264,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 266,
                "end": 275,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 269,
                  "end": 275,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 271,
                    "end": 275,
                    "literal": {
                      "type": "Literal",
                      "start": 271,
                      "end": 275,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 280,
            "end": 303,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 282,
                "end": 301,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 283,
                    "end": 292,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 284,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 293,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 306,
            "end": 322,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 308,
                "end": 320,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 311,
                  "end": 320,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 313,
                    "end": 320
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 345,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 345,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 338,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 345,
                  "decorators": [],
                  "name": "Missing",
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
      "start": 346,
      "end": 358,
      "expression": {
        "type": "AssignmentExpression",
        "start": 346,
        "end": 358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 346,
          "end": 351,
          "object": {
            "type": "Identifier",
            "start": 346,
            "end": 347,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 348,
            "end": 351,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 354,
          "end": 358,
          "value": "hi",
          "raw": "'hi'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 364,
      "expression": {
        "type": "MemberExpression",
        "start": 359,
        "end": 364,
        "object": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 361,
          "end": 364,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 365,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 372,
        "decorators": [],
        "name": "RO",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 375,
        "end": 425,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 375,
            "end": 390,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 377,
                "end": 388,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 380,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 380,
                  "end": 388,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 382,
                    "end": 388
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 393,
            "end": 425,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 395,
                "end": 423,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 405,
                    "end": 414,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 414,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 415,
                  "end": 423,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 417,
                    "end": 423
                  }
                },
                "readonly": true,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 444,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 444,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 444,
            "decorators": [],
            "name": "ro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 444,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 442,
                "end": 444,
                "typeName": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 444,
                  "decorators": [],
                  "name": "RO",
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
      "start": 445,
      "end": 467,
      "expression": {
        "type": "AssignmentExpression",
        "start": 445,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 445,
          "end": 451,
          "object": {
            "type": "Identifier",
            "start": 445,
            "end": 447,
            "decorators": [],
            "name": "ro",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 448,
            "end": 451,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 454,
          "end": 467,
          "value": "not allowed",
          "raw": "'not allowed'"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 520,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "decorators": [],
        "name": "Num",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 479,
        "end": 520,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 479,
            "end": 494,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 481,
                "end": 492,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Literal",
                  "start": 481,
                  "end": 484,
                  "value": "0",
                  "raw": "'0'"
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 484,
                  "end": 492,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 497,
            "end": 520,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 499,
                "end": 518,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 500,
                    "end": 509,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 509,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 503,
                        "end": 509
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 510,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 512,
                    "end": 518
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 521,
      "end": 541,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 541,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 538,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 541,
                  "decorators": [],
                  "name": "Num",
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
      "start": 542,
      "end": 552,
      "expression": {
        "type": "AssignmentExpression",
        "start": 542,
        "end": 552,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 542,
          "end": 548,
          "object": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 546,
            "end": 547,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 551,
          "end": 552,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 568,
      "expression": {
        "type": "AssignmentExpression",
        "start": 553,
        "end": 568,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 553,
          "end": 561,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 556,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 557,
            "end": 560,
            "value": "0",
            "raw": "'0'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 564,
          "end": 568,
          "value": "ok",
          "raw": "'ok'"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 589,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 581,
            "end": 589,
            "callee": {
              "type": "Identifier",
              "start": 581,
              "end": 587,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 590,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 599,
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 602,
        "end": 700,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 602,
            "end": 644,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 604,
                "end": 614,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 605,
                  "end": 613,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 607,
                    "end": 613
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 615,
                "end": 627,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Literal",
                  "start": 615,
                  "end": 618,
                  "value": "0",
                  "raw": "'0'"
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 618,
                  "end": 626,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 620,
                    "end": 626
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 628,
                "end": 642,
                "computed": true,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 632,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 633,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 635,
                    "end": 642
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 647,
            "end": 700,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 649,
                "end": 669,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 650,
                    "end": 659,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 651,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 653,
                        "end": 659
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 660,
                  "end": 668,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 662,
                    "end": 668
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              },
              {
                "type": "TSIndexSignature",
                "start": 670,
                "end": 698,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 671,
                    "end": 680,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 672,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 674,
                        "end": 680
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 681,
                  "end": 698,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 683,
                    "end": 698,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 683,
                        "end": 689
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 692,
                        "end": 698
                      }
                    ]
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 723,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 723,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 723,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 719,
                "end": 723,
                "typeName": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 723,
                  "decorators": [],
                  "name": "Both",
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
      "start": 724,
      "end": 740,
      "expression": {
        "type": "AssignmentExpression",
        "start": 724,
        "end": 740,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 724,
          "end": 733,
          "object": {
            "type": "Identifier",
            "start": 724,
            "end": 728,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 729,
            "end": 732,
            "value": "s",
            "raw": "'s'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 736,
          "end": 740,
          "value": "ok",
          "raw": "'ok'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 741,
      "end": 752,
      "expression": {
        "type": "AssignmentExpression",
        "start": 741,
        "end": 752,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 741,
          "end": 748,
          "object": {
            "type": "Identifier",
            "start": 741,
            "end": 745,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 746,
            "end": 747,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 751,
          "end": 752,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 764,
      "expression": {
        "type": "AssignmentExpression",
        "start": 753,
        "end": 764,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 753,
          "end": 760,
          "object": {
            "type": "Identifier",
            "start": 753,
            "end": 757,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 758,
            "end": 759,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 763,
          "end": 764,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 775,
      "end": 793,
      "expression": {
        "type": "AssignmentExpression",
        "start": 775,
        "end": 793,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 775,
          "end": 782,
          "object": {
            "type": "Identifier",
            "start": 775,
            "end": 779,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 780,
            "end": 781,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 785,
          "end": 793,
          "value": "not ok",
          "raw": "'not ok'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 814,
      "expression": {
        "type": "AssignmentExpression",
        "start": 794,
        "end": 814,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 794,
          "end": 803,
          "object": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 799,
            "end": 802,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 806,
          "end": 814,
          "value": "not ok",
          "raw": "'not ok'"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
