destructuringParameterProperties5.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 427,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "ObjType1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 17,
        "end": 53,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 40,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 98,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 69,
        "decorators": [],
        "name": "TupleType1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 72,
        "end": 98,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 73,
            "end": 81,
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 81,
              "decorators": [],
              "name": "ObjType1",
              "optional": false
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 83,
            "end": 89
          },
          {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 302,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 300,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 126,
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
              "start": 126,
              "end": 300,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 300,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 180,
                    "end": 220,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 184,
                        "end": 219,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 192,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 187,
                            "end": 192,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 189,
                              "end": 192
                            }
                          }
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 195,
                          "end": 219,
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "start": 195,
                            "end": 214,
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 195,
                              "end": 209,
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 195,
                                "end": 203,
                                "operator": "||",
                                "left": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 197,
                                  "decorators": [],
                                  "name": "x1",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 201,
                                  "end": 203,
                                  "decorators": [],
                                  "name": "x2",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 207,
                                "end": 209,
                                "decorators": [],
                                "name": "x3",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 219,
                            "decorators": [],
                            "name": "z",
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
                    "start": 229,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 233,
                        "end": 293,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 241,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 236,
                            "end": 241,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 238,
                              "end": 241
                            }
                          }
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 244,
                          "end": 293,
                          "operator": "||",
                          "left": {
                            "type": "LogicalExpression",
                            "start": 244,
                            "end": 283,
                            "operator": "||",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 244,
                              "end": 273,
                              "operator": "||",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 244,
                                "end": 262,
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 244,
                                  "end": 251,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 244,
                                    "end": 248
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 251,
                                    "decorators": [],
                                    "name": "x1",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 262,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 255,
                                    "end": 259
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 260,
                                    "end": 262,
                                    "decorators": [],
                                    "name": "x2",
                                    "optional": false
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 266,
                                "end": 273,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 266,
                                  "end": 270
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 273,
                                  "decorators": [],
                                  "name": "x3",
                                  "optional": false
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 277,
                              "end": 283,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 277,
                                "end": 281
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 283,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 293,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 287,
                              "end": 291
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
                              "decorators": [],
                              "name": "z",
                              "optional": false
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
                  "start": 127,
                  "end": 168,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 134,
                    "end": 168,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "start": 135,
                        "end": 149,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 137,
                            "end": 139,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 139,
                              "decorators": [],
                              "name": "x1",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 139,
                              "decorators": [],
                              "name": "x1",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 141,
                            "end": 143,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 143,
                              "decorators": [],
                              "name": "x2",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 143,
                              "decorators": [],
                              "name": "x2",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 145,
                            "end": 147,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "decorators": [],
                              "name": "x3",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "decorators": [],
                              "name": "x3",
                              "optional": false
                            }
                          }
                        ]
                      },
                      {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 158,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 168,
                          "decorators": [],
                          "name": "TupleType1",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 312,
            "end": 361,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 319,
                "end": 360,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 320,
                    "end": 348,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 322,
                        "end": 328,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 324,
                          "decorators": [],
                          "name": "x1",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 326,
                          "end": 328,
                          "raw": "10",
                          "value": 10
                        }
                      },
                      {
                        "type": "Property",
                        "start": 330,
                        "end": 336,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 332,
                          "decorators": [],
                          "name": "x2",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 334,
                          "end": 336,
                          "raw": "\"\"",
                          "value": ""
                        }
                      },
                      {
                        "type": "Property",
                        "start": 338,
                        "end": 346,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 340,
                          "decorators": [],
                          "name": "x3",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 342,
                          "end": 346,
                          "raw": "true",
                          "value": true
                        }
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 350,
                    "end": 352,
                    "raw": "\"\"",
                    "value": ""
                  },
                  {
                    "type": "Literal",
                    "start": 354,
                    "end": 359,
                    "raw": "false",
                    "value": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 318,
              "decorators": [],
              "name": "C1",
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
      "start": 363,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 426,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 367,
            "end": 395,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 372,
                "decorators": [],
                "name": "a_x1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 374,
                "end": 378,
                "decorators": [],
                "name": "a_x2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 380,
                "end": 384,
                "decorators": [],
                "name": "a_x3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 386,
                "end": 389,
                "decorators": [],
                "name": "a_y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 391,
                "end": 394,
                "decorators": [],
                "name": "a_z",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 398,
            "end": 426,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 399,
                "end": 403,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 403,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                }
              },
              {
                "type": "MemberExpression",
                "start": 405,
                "end": 409,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 409,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                }
              },
              {
                "type": "MemberExpression",
                "start": 411,
                "end": 415,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 415,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                }
              },
              {
                "type": "MemberExpression",
                "start": 417,
                "end": 420,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              {
                "type": "MemberExpression",
                "start": 422,
                "end": 425,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "z",
                  "optional": false
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
  "sourceType": "script"
}
```
