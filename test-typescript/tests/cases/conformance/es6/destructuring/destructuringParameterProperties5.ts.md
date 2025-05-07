__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 426,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 52,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "ObjType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 16,
        "end": 52,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 43,
                "end": 50
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 53,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 68,
        "decorators": [],
        "name": "TupleType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 71,
        "end": 97,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 72,
            "end": 80,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 72,
              "end": 80,
              "decorators": [],
              "name": "ObjType1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 82,
            "end": 88
          },
          {
            "type": "TSStringKeyword",
            "start": 90,
            "end": 96
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 301,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 299,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 299,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 299,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 179,
                    "end": 219,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 183,
                        "end": 218,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 183,
                          "end": 191,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 186,
                            "end": 191,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 188,
                              "end": 191
                            }
                          }
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 194,
                          "end": 218,
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "start": 194,
                            "end": 213,
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 194,
                              "end": 208,
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 194,
                                "end": 202,
                                "operator": "||",
                                "left": {
                                  "type": "Identifier",
                                  "start": 194,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "x1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 202,
                                  "decorators": [],
                                  "name": "x2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 206,
                                "end": 208,
                                "decorators": [],
                                "name": "x3",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 213,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 218,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 293,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 232,
                        "end": 292,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 240,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 235,
                            "end": 240,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 237,
                              "end": 240
                            }
                          }
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 243,
                          "end": 292,
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "start": 243,
                            "end": 282,
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 243,
                              "end": 272,
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 243,
                                "end": 261,
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 243,
                                  "end": 250,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 243,
                                    "end": 247
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 250,
                                    "decorators": [],
                                    "name": "x1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 254,
                                  "end": 261,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 254,
                                    "end": 258
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 261,
                                    "decorators": [],
                                    "name": "x2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 265,
                                "end": 272,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 265,
                                  "end": 269
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 270,
                                  "end": 272,
                                  "decorators": [],
                                  "name": "x3",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 276,
                              "end": 282,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 276,
                                "end": 280
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 281,
                                "end": 282,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 286,
                            "end": 292,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 286,
                              "end": 290
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 292,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
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
                  "type": "TSParameterProperty",
                  "start": 126,
                  "end": 167,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 133,
                    "end": 167,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "start": 134,
                        "end": 148,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 136,
                            "end": 138,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 138,
                              "decorators": [],
                              "name": "x1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 138,
                              "decorators": [],
                              "name": "x1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 140,
                            "end": 142,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 142,
                              "decorators": [],
                              "name": "x2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 142,
                              "decorators": [],
                              "name": "x2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 144,
                            "end": 146,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 146,
                              "decorators": [],
                              "name": "x3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 146,
                              "decorators": [],
                              "name": "x3",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 157,
                        "end": 167,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 167,
                          "decorators": [],
                          "name": "TupleType1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "C1",
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
      "start": 303,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 360,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 311,
            "end": 360,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 318,
                "end": 359,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 319,
                    "end": 347,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 321,
                        "end": 327,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 323,
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 325,
                          "end": 327,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 329,
                        "end": 335,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 331,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 333,
                          "end": 335,
                          "raw": "\"\"",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 337,
                        "end": 345,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 339,
                          "decorators": [],
                          "name": "x3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 341,
                          "end": 345,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 349,
                    "end": 351,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 353,
                    "end": 358,
                    "raw": "false",
                    "value": false,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 315,
              "end": 317,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 425,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 366,
            "end": 394,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 371,
                "decorators": [],
                "name": "a_x1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "decorators": [],
                "name": "a_x2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 379,
                "end": 383,
                "decorators": [],
                "name": "a_x3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 385,
                "end": 388,
                "decorators": [],
                "name": "a_y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 390,
                "end": 393,
                "decorators": [],
                "name": "a_z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 397,
            "end": 425,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 398,
                "end": 402,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 402,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "MemberExpression",
                "start": 404,
                "end": 408,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 408,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "MemberExpression",
                "start": 410,
                "end": 414,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 414,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "MemberExpression",
                "start": 416,
                "end": 419,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 417,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 419,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "MemberExpression",
                "start": 421,
                "end": 424,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
