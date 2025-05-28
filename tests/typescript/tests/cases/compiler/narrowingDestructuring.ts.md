__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1025,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 60,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 9,
            "end": 33,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 11,
                "end": 21,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 15,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 15,
                  "end": 20,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 17,
                    "end": 20,
                    "literal": {
                      "type": "Literal",
                      "start": 17,
                      "end": 20,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 22,
                "end": 31,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 36,
            "end": 60,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 38,
                "end": 48,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 44,
                    "end": 47,
                    "literal": {
                      "type": "Literal",
                      "start": 44,
                      "end": 47,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 49,
                "end": 58,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
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
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 97,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 243,
        "body": [
          {
            "type": "IfStatement",
            "start": 105,
            "end": 241,
            "test": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 127,
              "left": {
                "type": "MemberExpression",
                "start": 109,
                "end": 119,
                "object": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 114,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 124,
                "end": 127,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 129,
              "end": 182,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 139,
                  "end": 147,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 139,
                    "end": 146,
                    "object": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 144,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 156,
                  "end": 176,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 162,
                      "end": 175,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 162,
                        "end": 167,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 164,
                            "end": 165,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 175,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 188,
              "end": 241,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 198,
                  "end": 206,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 198,
                    "end": 205,
                    "object": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 215,
                  "end": 235,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 221,
                      "end": 234,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 221,
                        "end": 226,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 223,
                            "end": 224,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 224,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 223,
                              "end": 224,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 234,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 245,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 254,
        "end": 366,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 254,
            "end": 307,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 256,
                "end": 266,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 262,
                    "end": 265,
                    "literal": {
                      "type": "Literal",
                      "start": 262,
                      "end": 265,
                      "value": "f",
                      "raw": "\"f\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 267,
                "end": 305,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 270,
                    "end": 305,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 272,
                        "end": 282,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 273,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 273,
                          "end": 281,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 275,
                            "end": 281
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 283,
                        "end": 293,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 284,
                          "end": 292,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 286,
                            "end": 292
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 294,
                        "end": 303,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 295,
                          "end": 303,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 297,
                            "end": 303
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
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 314,
            "end": 366,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 316,
                "end": 326,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 320,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 322,
                    "end": 325,
                    "literal": {
                      "type": "Literal",
                      "start": 322,
                      "end": 325,
                      "value": "g",
                      "raw": "\"g\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 327,
                "end": 365,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 365,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 330,
                    "end": 365,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 332,
                        "end": 342,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 333,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 333,
                          "end": 341,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 335,
                            "end": 341
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 343,
                        "end": 353,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 343,
                          "end": 344,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 344,
                          "end": 352,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 346,
                            "end": 352
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 354,
                        "end": 363,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 355,
                          "end": 363,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 357,
                            "end": 363
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
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 620,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 383,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 383,
        "end": 396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 384,
            "end": 395,
            "name": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 394,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 397,
          "end": 405,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 405,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 405,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 407,
        "end": 620,
        "body": [
          {
            "type": "IfStatement",
            "start": 413,
            "end": 618,
            "test": {
              "type": "BinaryExpression",
              "start": 417,
              "end": 435,
              "left": {
                "type": "MemberExpression",
                "start": 417,
                "end": 427,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 422,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 427,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 432,
                "end": 435,
                "value": "f",
                "raw": "\"f\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 437,
              "end": 541,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 447,
                  "end": 471,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 453,
                      "end": 470,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 453,
                        "end": 462,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 455,
                            "end": 460,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 455,
                              "end": 456,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 458,
                              "end": 460,
                              "decorators": [],
                              "name": "f1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 470,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 480,
                  "end": 518,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 486,
                      "end": 517,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 486,
                        "end": 509,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 488,
                            "end": 507,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 489,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 491,
                              "end": 507,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 493,
                                  "end": 494,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 493,
                                    "end": 494,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 493,
                                    "end": 494,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "RestElement",
                                  "start": 496,
                                  "end": 505,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 499,
                                    "end": 505,
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 517,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 527,
                  "end": 535,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 527,
                    "end": 534,
                    "object": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 532,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 534,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 547,
              "end": 618,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 557,
                  "end": 595,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 563,
                      "end": 594,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 563,
                        "end": 586,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 565,
                            "end": 584,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 566,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 568,
                              "end": 584,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 570,
                                  "end": 571,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 570,
                                    "end": 571,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 570,
                                    "end": 571,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "RestElement",
                                  "start": 573,
                                  "end": 582,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 576,
                                    "end": 582,
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 594,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 604,
                  "end": 612,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 604,
                    "end": 611,
                    "object": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 609,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 611,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 622,
      "end": 829,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 636,
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 636,
        "end": 699,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 637,
            "end": 698,
            "name": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 647,
              "end": 698,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 647,
                  "end": 671,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 649,
                      "end": 659,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 653,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 653,
                        "end": 658,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 655,
                          "end": 658,
                          "literal": {
                            "type": "Literal",
                            "start": 655,
                            "end": 658,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 660,
                      "end": 669,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 661,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 661,
                        "end": 669,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 663,
                          "end": 669
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 674,
                  "end": 698,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 676,
                      "end": 686,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 676,
                        "end": 680,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 680,
                        "end": 685,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 682,
                          "end": 685,
                          "literal": {
                            "type": "Literal",
                            "start": 682,
                            "end": 685,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 687,
                      "end": 696,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 687,
                        "end": 688,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 688,
                        "end": 696,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 690,
                          "end": 696
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 700,
          "end": 704,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 701,
            "end": 704,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 703,
              "end": 704,
              "typeName": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 706,
        "end": 829,
        "body": [
          {
            "type": "IfStatement",
            "start": 712,
            "end": 827,
            "test": {
              "type": "BinaryExpression",
              "start": 716,
              "end": 730,
              "left": {
                "type": "MemberExpression",
                "start": 716,
                "end": 722,
                "object": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 717,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 722,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 727,
                "end": 730,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 732,
              "end": 827,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 742,
                  "end": 768,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 748,
                      "end": 767,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 748,
                        "end": 763,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 750,
                            "end": 754,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 754,
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 754,
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "RestElement",
                            "start": 756,
                            "end": 761,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 759,
                              "end": 761,
                              "decorators": [],
                              "name": "r1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 766,
                        "end": 767,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 777,
                  "end": 821,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 783,
                      "end": 820,
                      "id": {
                        "type": "Identifier",
                        "start": 783,
                        "end": 785,
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 788,
                        "end": 820,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 789,
                          "end": 816,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ObjectPattern",
                              "start": 790,
                              "end": 807,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 792,
                                  "end": 796,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 792,
                                    "end": 796,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 792,
                                    "end": 796,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "RestElement",
                                  "start": 798,
                                  "end": 805,
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 801,
                                    "end": 805,
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 816,
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "id": null,
                          "generator": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 818,
                            "end": 819,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 831,
      "end": 1025,
      "id": {
        "type": "Identifier",
        "start": 840,
        "end": 844,
        "decorators": [],
        "name": "farr",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 844,
        "end": 907,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 845,
            "end": 906,
            "name": {
              "type": "Identifier",
              "start": 845,
              "end": 846,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 855,
              "end": 906,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 855,
                  "end": 879,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 856,
                      "end": 862
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 864,
                      "end": 870
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 882,
                  "end": 906,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 883,
                      "end": 889
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 891,
                      "end": 897
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 908,
          "end": 912,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 909,
            "end": 912,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 911,
              "end": 912,
              "typeName": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 1025,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 920,
            "end": 946,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 926,
                "end": 945,
                "id": {
                  "type": "ArrayPattern",
                  "start": 926,
                  "end": 941,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 927,
                      "end": 931,
                      "decorators": [],
                      "name": "head",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "RestElement",
                      "start": 933,
                      "end": 940,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 936,
                        "end": 940,
                        "decorators": [],
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 945,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 951,
            "end": 1023,
            "test": {
              "type": "BinaryExpression",
              "start": 955,
              "end": 979,
              "left": {
                "type": "UnaryExpression",
                "start": 955,
                "end": 966,
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "start": 962,
                  "end": 966,
                  "object": {
                    "type": "Identifier",
                    "start": 962,
                    "end": 963,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 964,
                    "end": 965,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "computed": true
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 971,
                "end": 979,
                "value": "number",
                "raw": "'number'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 981,
              "end": 1023,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 991,
                  "end": 1017,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 997,
                      "end": 1016,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 997,
                        "end": 1012,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 998,
                            "end": 1002,
                            "decorators": [],
                            "name": "head",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "RestElement",
                            "start": 1004,
                            "end": 1011,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 1007,
                              "end": 1011,
                              "decorators": [],
                              "name": "tail",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1015,
                        "end": 1016,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
