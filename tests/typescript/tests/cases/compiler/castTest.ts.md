__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 506,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 36,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 25,
            "end": 35,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            },
            "expression": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 51,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 45,
            "end": 50,
            "left": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 68,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 61,
            "end": 67,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 62,
              "end": 65
            },
            "expression": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 91,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 77,
            "end": 90,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 78,
              "end": 85
            },
            "expression": {
              "type": "Literal",
              "start": 86,
              "end": 90,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 100,
            "end": 110,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 101,
              "end": 107
            },
            "expression": {
              "type": "Literal",
              "start": 108,
              "end": 110,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "decorators": [],
            "name": "ar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 122,
            "end": 133,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 123,
              "end": 128,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              }
            },
            "expression": {
              "type": "Literal",
              "start": 129,
              "end": 133,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 173,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 144,
            "end": 172,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 145,
              "end": 167,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 158,
                  "decorators": [],
                  "name": "res",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 160,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 163,
                  "end": 167
                }
              }
            },
            "expression": {
              "type": "Literal",
              "start": 168,
              "end": 172,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 175,
      "end": 334,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 194,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 334,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
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
          },
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 225,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
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
          },
          {
            "type": "MethodDefinition",
            "start": 231,
            "end": 266,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 234,
              "end": 266,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 235,
                  "end": 245,
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 257,
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 251,
                      "end": 257
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 258,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 260,
                  "end": 265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 265,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "decorators": [],
              "name": "mult",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 275,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 284,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 279,
                      "end": 284,
                      "typeName": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 284,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 292,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 332,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 309,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 309,
              "end": 332,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 319,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 311,
                    "end": 319,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 313,
                      "end": 319
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 330,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 505,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 346,
            "decorators": [],
            "name": "p_cast",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 349,
            "end": 505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 355,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 355,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 358,
              "end": 504,
              "properties": [
                {
                  "type": "Property",
                  "start": 364,
                  "end": 368,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 367,
                    "end": 368,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 374,
                  "end": 378,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 377,
                    "end": 378,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 384,
                  "end": 465,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 387,
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 389,
                    "end": 465,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 400,
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 402,
                        "end": 404,
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 406,
                      "end": 465,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 416,
                          "end": 459,
                          "argument": {
                            "type": "NewExpression",
                            "start": 423,
                            "end": 458,
                            "callee": {
                              "type": "Identifier",
                              "start": 427,
                              "end": 432,
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 433,
                                "end": 444,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 433,
                                  "end": 439,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 433,
                                    "end": 437
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 438,
                                    "end": 439,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 442,
                                  "end": 444,
                                  "decorators": [],
                                  "name": "dx",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "BinaryExpression",
                                "start": 446,
                                "end": 457,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 446,
                                  "end": 452,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 446,
                                    "end": 450
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 451,
                                    "end": 452,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 455,
                                  "end": 457,
                                  "decorators": [],
                                  "name": "dy",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 471,
                  "end": 502,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 475,
                    "decorators": [],
                    "name": "mult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 477,
                    "end": 502,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 489,
                      "end": 502,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 491,
                          "end": 500,
                          "argument": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 499,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
