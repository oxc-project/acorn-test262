__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 690,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "name": "NonGeneric",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 347,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 220,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 52,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 61,
                  "end": 102,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 102,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 69,
                      "end": 102,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 83,
                          "end": 92,
                          "argument": {
                            "type": "Literal",
                            "start": 90,
                            "end": 91,
                            "value": 1,
                            "raw": "1"
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 111,
                  "end": 123,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 116,
                    "end": 123,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 123,
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
                  "start": 132,
                  "end": 153,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 134,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 153,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 153,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 139,
                          "end": 151,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 162,
                  "end": 214,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 173,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 173,
                    "end": 214,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 174,
                        "end": 190,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 192,
                        "end": 209,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 209,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 203,
                              "end": 209
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 211,
                      "end": 214,
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
            "start": 226,
            "end": 246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 245,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 234,
                  "end": 245,
                  "callee": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 240,
                      "end": 241,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 243,
                      "end": 244,
                      "value": 2,
                      "raw": "2"
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
            "start": 251,
            "end": 266,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 255,
                "end": 265,
                "id": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 256,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 259,
                  "end": 265,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 263,
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 263,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
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
            "start": 271,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 275,
                "end": 283,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 277,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 280,
                  "end": 283,
                  "object": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 289,
            "end": 302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 301,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 295,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 298,
                  "end": 301,
                  "object": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 301,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 315,
            "expression": {
              "type": "AssignmentExpression",
              "start": 307,
              "end": 314,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 307,
                "end": 310,
                "object": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 4,
                "raw": "4"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 335,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 334,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 326,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 329,
                  "end": 334,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 329,
                    "end": 332,
                    "object": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 349,
      "end": 690,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 363,
        "name": "Generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 364,
        "end": 690,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 370,
            "end": 562,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 383,
              "end": 562,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 393,
                  "end": 398,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
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
                    "start": 394,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 396,
                      "end": 397,
                      "typeName": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 407,
                  "end": 451,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 412,
                    "end": 451,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 415,
                      "end": 451,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 429,
                          "end": 441,
                          "argument": {
                            "type": "Literal",
                            "start": 436,
                            "end": 440,
                            "value": null,
                            "raw": "null"
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 460,
                  "end": 475,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 465,
                    "end": 475,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 466,
                        "end": 470,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 467,
                          "end": 470,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 469,
                            "end": 470,
                            "typeName": {
                              "type": "Identifier",
                              "start": 469,
                              "end": 470,
                              "name": "U",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 472,
                      "end": 475,
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
                  "start": 484,
                  "end": 505,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 486,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 486,
                    "end": 505,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 489,
                      "end": 505,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 491,
                          "end": 503,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 498,
                            "end": 502
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 514,
                  "end": 556,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 525,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 525,
                    "end": 556,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 526,
                        "end": 537,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 537,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 534,
                            "end": 537,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 536,
                              "end": 537,
                              "typeName": {
                                "type": "Identifier",
                                "start": 536,
                                "end": 537,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 539,
                        "end": 551,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 551,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 548,
                            "end": 551,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 550,
                              "end": 551,
                              "typeName": {
                                "type": "Identifier",
                                "start": 550,
                                "end": 551,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 553,
                      "end": 556,
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 377,
              "end": 382,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 378,
                  "end": 379,
                  "name": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 380,
                  "end": 381,
                  "name": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 568,
            "end": 589,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 588,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 576,
                  "end": 588,
                  "callee": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 581,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 582,
                      "end": 583,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 585,
                      "end": 587,
                      "value": "",
                      "raw": "''"
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
            "start": 594,
            "end": 609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 598,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 602,
                  "end": 608,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 602,
                    "end": 606,
                    "object": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 603,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 606,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
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
            "start": 614,
            "end": 627,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 618,
                "end": 626,
                "id": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 620,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 623,
                  "end": 626,
                  "object": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 624,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 632,
            "end": 645,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 636,
                "end": 644,
                "id": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 638,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 641,
                  "end": 644,
                  "object": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 642,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 650,
            "end": 659,
            "expression": {
              "type": "AssignmentExpression",
              "start": 650,
              "end": 658,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 650,
                "end": 653,
                "object": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 653,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 656,
                "end": 658,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 679,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 678,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 670,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 673,
                  "end": 678,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 673,
                    "end": 676,
                    "object": {
                      "type": "Identifier",
                      "start": 673,
                      "end": 674,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 676,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
