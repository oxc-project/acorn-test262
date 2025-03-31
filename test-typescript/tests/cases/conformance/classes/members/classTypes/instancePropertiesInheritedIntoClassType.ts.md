__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 774,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 385,
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
        "end": 385,
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
            "type": "ClassDeclaration",
            "start": 226,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 244,
              "end": 258,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 246,
                  "end": 256,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "name": "e",
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
                    "start": 247,
                    "end": 255,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
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
            "type": "VariableDeclaration",
            "start": 264,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 283,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 272,
                  "end": 283,
                  "callee": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 278,
                      "end": 279,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 281,
                      "end": 282,
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
            "start": 289,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 297,
                  "end": 303,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 297,
                    "end": 301,
                    "object": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 301,
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
            "start": 309,
            "end": 322,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 315,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 318,
                  "end": 321,
                  "object": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
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
            "start": 327,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 339,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 336,
                  "end": 339,
                  "object": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
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
            "start": 345,
            "end": 353,
            "expression": {
              "type": "AssignmentExpression",
              "start": 345,
              "end": 352,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 345,
                "end": 348,
                "object": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
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
                "start": 351,
                "end": 352,
                "value": 4,
                "raw": "4"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 358,
            "end": 373,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 364,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 372,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 370,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
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
      "start": 387,
      "end": 774,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 401,
        "name": "Generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 402,
        "end": 774,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 408,
            "end": 601,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 422,
              "end": 601,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 432,
                  "end": 437,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
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
                    "start": 433,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 435,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
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
                  "start": 446,
                  "end": 490,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 451,
                    "end": 490,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 454,
                      "end": 490,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 468,
                          "end": 480,
                          "argument": {
                            "type": "Literal",
                            "start": 475,
                            "end": 479,
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
                  "start": 499,
                  "end": 514,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 504,
                    "end": 514,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 505,
                        "end": 509,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 506,
                          "end": 509,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 508,
                            "end": 509,
                            "typeName": {
                              "type": "Identifier",
                              "start": 508,
                              "end": 509,
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
                      "start": 511,
                      "end": 514,
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
                  "start": 523,
                  "end": 544,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 525,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 525,
                    "end": 544,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 528,
                      "end": 544,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 530,
                          "end": 542,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 537,
                            "end": 541
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
                  "start": 553,
                  "end": 595,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 564,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 564,
                    "end": 595,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 565,
                        "end": 576,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 576,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 573,
                            "end": 576,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 575,
                              "end": 576,
                              "typeName": {
                                "type": "Identifier",
                                "start": 575,
                                "end": 576,
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
                        "start": 578,
                        "end": 590,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 590,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 587,
                            "end": 590,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 589,
                              "end": 590,
                              "typeName": {
                                "type": "Identifier",
                                "start": 589,
                                "end": 590,
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
                      "start": 592,
                      "end": 595,
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
              "start": 415,
              "end": 421,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 416,
                  "end": 417,
                  "name": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
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
                  "start": 419,
                  "end": 420,
                  "name": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
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
            "type": "ClassDeclaration",
            "start": 607,
            "end": 646,
            "id": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 637,
              "end": 646,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 639,
                  "end": 644,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "name": "e",
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
                    "start": 640,
                    "end": 643,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 642,
                      "end": 643,
                      "typeName": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 643,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 614,
              "end": 620,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 615,
                  "end": 616,
                  "name": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
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
                  "start": 618,
                  "end": 619,
                  "name": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 619,
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
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 630,
              "end": 636,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 631,
                  "end": 632,
                  "typeName": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 634,
                  "end": 635,
                  "typeName": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 652,
            "end": 673,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 656,
                "end": 672,
                "id": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 660,
                  "end": 672,
                  "callee": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 665,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 666,
                      "end": 667,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 669,
                      "end": 671,
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
            "start": 678,
            "end": 693,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 686,
                  "end": 692,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 686,
                    "end": 690,
                    "object": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 687,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 688,
                      "end": 690,
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
            "start": 698,
            "end": 711,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 710,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 707,
                  "end": 710,
                  "object": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 710,
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
            "start": 716,
            "end": 729,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 720,
                "end": 728,
                "id": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 722,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 725,
                  "end": 728,
                  "object": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 726,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 728,
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
            "start": 734,
            "end": 743,
            "expression": {
              "type": "AssignmentExpression",
              "start": 734,
              "end": 742,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 734,
                "end": 737,
                "object": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
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
                "start": 740,
                "end": 742,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 748,
            "end": 763,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 752,
                "end": 762,
                "id": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 757,
                  "end": 762,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 757,
                    "end": 760,
                    "object": {
                      "type": "Identifier",
                      "start": 757,
                      "end": 758,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 760,
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
