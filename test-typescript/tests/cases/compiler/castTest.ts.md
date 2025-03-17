__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 507,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 25,
            "end": 35,
            "expression": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 45,
            "end": 50,
            "left": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 61,
            "end": 67,
            "expression": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 62,
              "end": 65
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 77,
            "end": 90,
            "expression": {
              "type": "Literal",
              "start": 86,
              "end": 90,
              "value": true,
              "raw": "true"
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 78,
              "end": 85
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 100,
            "end": 110,
            "expression": {
              "type": "Literal",
              "start": 108,
              "end": 110,
              "value": "",
              "raw": "\"\""
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 101,
              "end": 107
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "name": "ar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 122,
            "end": 133,
            "expression": {
              "type": "Literal",
              "start": 129,
              "end": 133,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 123,
              "end": 128,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 144,
            "end": 172,
            "expression": {
              "type": "Literal",
              "start": 168,
              "end": 172,
              "value": null,
              "raw": "null"
            },
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
                  "name": "res",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 175,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 194,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 334,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "x",
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
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "y",
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
              "start": 217,
              "end": 225,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 231,
            "end": 266,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 234,
              "end": 266,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 235,
                  "end": 245,
                  "name": "dx",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 239,
                      "end": 245
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 257,
                  "name": "dy",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 251,
                      "end": 257
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 271,
            "end": 293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "name": "mult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 275,
              "end": 293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 284,
                  "name": "p",
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
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 298,
            "end": 332,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 309,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 309,
              "end": 332,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 319,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 311,
                    "end": 319,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 313,
                      "end": 319
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 330,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 346,
            "name": "p_cast",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 349,
            "end": 505,
            "expression": {
              "type": "ObjectExpression",
              "start": 358,
              "end": 504,
              "properties": [
                {
                  "type": "Property",
                  "start": 364,
                  "end": 368,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 367,
                    "end": 368,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 374,
                  "end": 378,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 377,
                    "end": 378,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 384,
                  "end": 465,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 387,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 389,
                    "end": 465,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 400,
                        "name": "dx",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 402,
                        "end": 404,
                        "name": "dy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                              "name": "Point",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 442,
                                  "end": 444,
                                  "name": "dx",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 455,
                                  "end": 457,
                                  "name": "dy",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 471,
                  "end": 502,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 475,
                    "name": "mult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 477,
                    "end": 502,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 355,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 355,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
