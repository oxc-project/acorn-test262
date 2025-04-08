__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "ObjType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 40,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
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
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 69,
        "name": "TupleType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "name": "ObjType1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 300,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 126,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 300,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "start": 135,
                        "end": 149,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 137,
                            "end": 139,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 139,
                              "name": "x1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 139,
                              "name": "x1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 141,
                            "end": 143,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 143,
                              "name": "x2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 143,
                              "name": "x2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 145,
                            "end": 147,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "name": "x3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 147,
                              "name": "x3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
                          "name": "TupleType1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 192,
                          "name": "foo",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 187,
                            "end": 192,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 189,
                              "end": 192
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 195,
                          "end": 219,
                          "left": {
                            "type": "LogicalExpression",
                            "start": 195,
                            "end": 214,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 195,
                              "end": 209,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 195,
                                "end": 203,
                                "left": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 197,
                                  "name": "x1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Identifier",
                                  "start": 201,
                                  "end": 203,
                                  "name": "x2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "start": 207,
                                "end": 209,
                                "name": "x3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "||",
                            "right": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "||",
                          "right": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 219,
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
                    "start": 229,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 233,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 241,
                          "name": "bar",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 236,
                            "end": 241,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 238,
                              "end": 241
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 244,
                          "end": 293,
                          "left": {
                            "type": "LogicalExpression",
                            "start": 244,
                            "end": 283,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 244,
                              "end": 273,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 244,
                                "end": 262,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 244,
                                  "end": 251,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 244,
                                    "end": 248
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 251,
                                    "name": "x1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "||",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 262,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 255,
                                    "end": 259
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 260,
                                    "end": 262,
                                    "name": "x2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              },
                              "operator": "||",
                              "right": {
                                "type": "MemberExpression",
                                "start": 266,
                                "end": 273,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 266,
                                  "end": 270
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 273,
                                  "name": "x3",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "operator": "||",
                            "right": {
                              "type": "MemberExpression",
                              "start": 277,
                              "end": 283,
                              "object": {
                                "type": "ThisExpression",
                                "start": 277,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 283,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "||",
                          "right": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 293,
                            "object": {
                              "type": "ThisExpression",
                              "start": 287,
                              "end": 291
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
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
      "start": 304,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 312,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 318,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 324,
                          "name": "x1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 326,
                          "end": 328,
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 330,
                        "end": 336,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 332,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 334,
                          "end": 336,
                          "value": "",
                          "raw": "\"\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 338,
                        "end": 346,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 340,
                          "name": "x3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 342,
                          "end": 346,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 350,
                    "end": 352,
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "start": 354,
                    "end": 359,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 367,
            "end": 395,
            "elements": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 372,
                "name": "a_x1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 374,
                "end": 378,
                "name": "a_x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 380,
                "end": 384,
                "name": "a_x3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 386,
                "end": 389,
                "name": "a_y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 391,
                "end": 394,
                "name": "a_z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "object": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 403,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 405,
                "end": 409,
                "object": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 409,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 411,
                "end": 415,
                "object": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 415,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 417,
                "end": 420,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 422,
                "end": 425,
                "object": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ]
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
