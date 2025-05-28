__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1800,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1067,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 1067,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 148,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 35,
                  "end": 60,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 60,
                    "decorators": [],
                    "name": "publicProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 70,
                  "end": 97,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 97,
                    "decorators": [],
                    "name": "privateProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 107,
                  "end": 138,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 138,
                    "decorators": [],
                    "name": "protectedProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 148,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 200,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 164,
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 200,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 166,
                "end": 174,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 168,
                  "end": 174
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 200,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 185,
                    "end": 194,
                    "argument": {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "value": 1,
                      "raw": "1"
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
            "start": 206,
            "end": 231,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 216,
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 231,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 227,
                  "decorators": [],
                  "name": "_v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 227,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 221,
                      "end": 227
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 231,
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
            "start": 237,
            "end": 1065,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 243,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 1065,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 1065,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 256,
                    "end": 298,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 262,
                        "end": 297,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 262,
                          "end": 290,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 280,
                              "end": 288,
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 288,
                                "decorators": [],
                                "name": "rest1",
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
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 307,
                    "end": 354,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 313,
                        "end": 353,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 313,
                          "end": 341,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 331,
                              "end": 339,
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "start": 334,
                                "end": 339,
                                "decorators": [],
                                "name": "rest2",
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
                          "type": "TSAsExpression",
                          "start": 344,
                          "end": 353,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 344,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 352,
                            "end": 353,
                            "typeName": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 363,
                    "end": 405,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 369,
                        "end": 404,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 369,
                          "end": 397,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 371,
                              "end": 385,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 371,
                                "end": 381,
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 385,
                                "decorators": [],
                                "name": "_1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "RestElement",
                              "start": 387,
                              "end": 395,
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "start": 390,
                                "end": 395,
                                "decorators": [],
                                "name": "rest3",
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
                          "type": "ThisExpression",
                          "start": 400,
                          "end": 404
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 414,
                    "end": 461,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 420,
                        "end": 460,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 420,
                          "end": 448,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 422,
                              "end": 436,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 422,
                                "end": 432,
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 434,
                                "end": 436,
                                "decorators": [],
                                "name": "_2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "RestElement",
                              "start": 438,
                              "end": 446,
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 446,
                                "decorators": [],
                                "name": "rest4",
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
                          "type": "TSAsExpression",
                          "start": 451,
                          "end": 460,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 451,
                            "end": 455
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 459,
                            "end": 460,
                            "typeName": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 460,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 471,
                    "end": 488,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 471,
                      "end": 487,
                      "object": {
                        "type": "Identifier",
                        "start": 471,
                        "end": 476,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 487,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 497,
                    "end": 514,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 497,
                      "end": 513,
                      "object": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 502,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 513,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 523,
                    "end": 540,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 523,
                      "end": 539,
                      "object": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 528,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 529,
                        "end": 539,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 549,
                    "end": 566,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 549,
                      "end": 565,
                      "object": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 554,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 565,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 576,
                    "end": 594,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 576,
                      "end": 593,
                      "object": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 581,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 593,
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 603,
                    "end": 621,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 603,
                      "end": 620,
                      "object": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 608,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 620,
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 630,
                    "end": 648,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 630,
                      "end": 647,
                      "object": {
                        "type": "Identifier",
                        "start": 630,
                        "end": 635,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 647,
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 657,
                    "end": 675,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 657,
                      "end": 674,
                      "object": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 662,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 674,
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 685,
                    "end": 705,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 685,
                      "end": 704,
                      "object": {
                        "type": "Identifier",
                        "start": 685,
                        "end": 690,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 704,
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 714,
                    "end": 734,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 714,
                      "end": 733,
                      "object": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 719,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 733,
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 743,
                    "end": 763,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 743,
                      "end": 762,
                      "object": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 748,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 762,
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 772,
                    "end": 792,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 772,
                      "end": 791,
                      "object": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 777,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 778,
                        "end": 791,
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 802,
                    "end": 815,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 802,
                      "end": 814,
                      "object": {
                        "type": "Identifier",
                        "start": 802,
                        "end": 807,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 814,
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 824,
                    "end": 837,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 824,
                      "end": 836,
                      "object": {
                        "type": "Identifier",
                        "start": 824,
                        "end": 829,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 830,
                        "end": 836,
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 846,
                    "end": 859,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 846,
                      "end": 858,
                      "object": {
                        "type": "Identifier",
                        "start": 846,
                        "end": 851,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 858,
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 868,
                    "end": 881,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 868,
                      "end": 880,
                      "object": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 873,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 880,
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 891,
                    "end": 904,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 891,
                      "end": 903,
                      "object": {
                        "type": "Identifier",
                        "start": 891,
                        "end": 896,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 897,
                        "end": 903,
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 913,
                    "end": 926,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 913,
                      "end": 925,
                      "object": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 918,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 925,
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 935,
                    "end": 948,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 935,
                      "end": 947,
                      "object": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 940,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 947,
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 957,
                    "end": 970,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 957,
                      "end": 969,
                      "object": {
                        "type": "Identifier",
                        "start": 957,
                        "end": 962,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 969,
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 980,
                    "end": 993,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 980,
                      "end": 992,
                      "object": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 985,
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 992,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1002,
                    "end": 1015,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1002,
                      "end": 1014,
                      "object": {
                        "type": "Identifier",
                        "start": 1002,
                        "end": 1007,
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1014,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1024,
                    "end": 1037,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1024,
                      "end": 1036,
                      "object": {
                        "type": "Identifier",
                        "start": 1024,
                        "end": 1029,
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1036,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1046,
                    "end": 1059,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1046,
                      "end": 1058,
                      "object": {
                        "type": "Identifier",
                        "start": 1046,
                        "end": 1051,
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1058,
                        "decorators": [],
                        "name": "method",
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
              "expression": false
            },
            "kind": "method",
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
      "type": "FunctionDeclaration",
      "start": 1069,
      "end": 1800,
      "id": {
        "type": "Identifier",
        "start": 1078,
        "end": 1089,
        "decorators": [],
        "name": "destructure",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1089,
        "end": 1102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1090,
            "end": 1101,
            "name": {
              "type": "Identifier",
              "start": 1090,
              "end": 1091,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1100,
              "end": 1101,
              "typeName": {
                "type": "Identifier",
                "start": 1100,
                "end": 1101,
                "decorators": [],
                "name": "A",
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
          "start": 1103,
          "end": 1107,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1104,
            "end": 1107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1106,
              "end": 1107,
              "typeName": {
                "type": "Identifier",
                "start": 1106,
                "end": 1107,
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
        "start": 1109,
        "end": 1800,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1115,
            "end": 1154,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1121,
                "end": 1153,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1121,
                  "end": 1149,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1139,
                      "end": 1147,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1142,
                        "end": 1147,
                        "decorators": [],
                        "name": "rest1",
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
                  "start": 1152,
                  "end": 1153,
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
            "type": "VariableDeclaration",
            "start": 1159,
            "end": 1203,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1165,
                "end": 1202,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1165,
                  "end": 1193,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1183,
                      "end": 1191,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1191,
                        "decorators": [],
                        "name": "rest2",
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
                  "type": "TSAsExpression",
                  "start": 1196,
                  "end": 1202,
                  "expression": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1197,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1201,
                    "end": 1202,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1201,
                      "end": 1202,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1208,
            "end": 1247,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1214,
                "end": 1246,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1214,
                  "end": 1242,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1216,
                      "end": 1230,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1216,
                        "end": 1226,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1228,
                        "end": 1230,
                        "decorators": [],
                        "name": "_1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1232,
                      "end": 1240,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1235,
                        "end": 1240,
                        "decorators": [],
                        "name": "rest3",
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
                  "start": 1245,
                  "end": 1246,
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
            "type": "VariableDeclaration",
            "start": 1252,
            "end": 1296,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1258,
                "end": 1295,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1258,
                  "end": 1286,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1260,
                      "end": 1274,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1260,
                        "end": 1270,
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1272,
                        "end": 1274,
                        "decorators": [],
                        "name": "_2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1276,
                      "end": 1284,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1279,
                        "end": 1284,
                        "decorators": [],
                        "name": "rest4",
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
                  "type": "TSAsExpression",
                  "start": 1289,
                  "end": 1295,
                  "expression": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1290,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1294,
                    "end": 1295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1295,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1302,
            "end": 1319,
            "expression": {
              "type": "MemberExpression",
              "start": 1302,
              "end": 1318,
              "object": {
                "type": "Identifier",
                "start": 1302,
                "end": 1307,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1308,
                "end": 1318,
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1324,
            "end": 1341,
            "expression": {
              "type": "MemberExpression",
              "start": 1324,
              "end": 1340,
              "object": {
                "type": "Identifier",
                "start": 1324,
                "end": 1329,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1330,
                "end": 1340,
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1346,
            "end": 1363,
            "expression": {
              "type": "MemberExpression",
              "start": 1346,
              "end": 1362,
              "object": {
                "type": "Identifier",
                "start": 1346,
                "end": 1351,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1352,
                "end": 1362,
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1368,
            "end": 1385,
            "expression": {
              "type": "MemberExpression",
              "start": 1368,
              "end": 1384,
              "object": {
                "type": "Identifier",
                "start": 1368,
                "end": 1373,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1374,
                "end": 1384,
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1391,
            "end": 1409,
            "expression": {
              "type": "MemberExpression",
              "start": 1391,
              "end": 1408,
              "object": {
                "type": "Identifier",
                "start": 1391,
                "end": 1396,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1397,
                "end": 1408,
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1414,
            "end": 1432,
            "expression": {
              "type": "MemberExpression",
              "start": 1414,
              "end": 1431,
              "object": {
                "type": "Identifier",
                "start": 1414,
                "end": 1419,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1420,
                "end": 1431,
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1437,
            "end": 1455,
            "expression": {
              "type": "MemberExpression",
              "start": 1437,
              "end": 1454,
              "object": {
                "type": "Identifier",
                "start": 1437,
                "end": 1442,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1443,
                "end": 1454,
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1460,
            "end": 1478,
            "expression": {
              "type": "MemberExpression",
              "start": 1460,
              "end": 1477,
              "object": {
                "type": "Identifier",
                "start": 1460,
                "end": 1465,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1466,
                "end": 1477,
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1484,
            "end": 1504,
            "expression": {
              "type": "MemberExpression",
              "start": 1484,
              "end": 1503,
              "object": {
                "type": "Identifier",
                "start": 1484,
                "end": 1489,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1490,
                "end": 1503,
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1509,
            "end": 1529,
            "expression": {
              "type": "MemberExpression",
              "start": 1509,
              "end": 1528,
              "object": {
                "type": "Identifier",
                "start": 1509,
                "end": 1514,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1515,
                "end": 1528,
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1534,
            "end": 1554,
            "expression": {
              "type": "MemberExpression",
              "start": 1534,
              "end": 1553,
              "object": {
                "type": "Identifier",
                "start": 1534,
                "end": 1539,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1540,
                "end": 1553,
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1559,
            "end": 1579,
            "expression": {
              "type": "MemberExpression",
              "start": 1559,
              "end": 1578,
              "object": {
                "type": "Identifier",
                "start": 1559,
                "end": 1564,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1565,
                "end": 1578,
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1585,
            "end": 1598,
            "expression": {
              "type": "MemberExpression",
              "start": 1585,
              "end": 1597,
              "object": {
                "type": "Identifier",
                "start": 1585,
                "end": 1590,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1591,
                "end": 1597,
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1603,
            "end": 1616,
            "expression": {
              "type": "MemberExpression",
              "start": 1603,
              "end": 1615,
              "object": {
                "type": "Identifier",
                "start": 1603,
                "end": 1608,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1609,
                "end": 1615,
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1621,
            "end": 1634,
            "expression": {
              "type": "MemberExpression",
              "start": 1621,
              "end": 1633,
              "object": {
                "type": "Identifier",
                "start": 1621,
                "end": 1626,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1627,
                "end": 1633,
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1639,
            "end": 1652,
            "expression": {
              "type": "MemberExpression",
              "start": 1639,
              "end": 1651,
              "object": {
                "type": "Identifier",
                "start": 1639,
                "end": 1644,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1645,
                "end": 1651,
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1658,
            "end": 1671,
            "expression": {
              "type": "MemberExpression",
              "start": 1658,
              "end": 1670,
              "object": {
                "type": "Identifier",
                "start": 1658,
                "end": 1663,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1664,
                "end": 1670,
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1676,
            "end": 1689,
            "expression": {
              "type": "MemberExpression",
              "start": 1676,
              "end": 1688,
              "object": {
                "type": "Identifier",
                "start": 1676,
                "end": 1681,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1682,
                "end": 1688,
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1694,
            "end": 1707,
            "expression": {
              "type": "MemberExpression",
              "start": 1694,
              "end": 1706,
              "object": {
                "type": "Identifier",
                "start": 1694,
                "end": 1699,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1700,
                "end": 1706,
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1712,
            "end": 1725,
            "expression": {
              "type": "MemberExpression",
              "start": 1712,
              "end": 1724,
              "object": {
                "type": "Identifier",
                "start": 1712,
                "end": 1717,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1718,
                "end": 1724,
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1731,
            "end": 1744,
            "expression": {
              "type": "MemberExpression",
              "start": 1731,
              "end": 1743,
              "object": {
                "type": "Identifier",
                "start": 1731,
                "end": 1736,
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1737,
                "end": 1743,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1749,
            "end": 1762,
            "expression": {
              "type": "MemberExpression",
              "start": 1749,
              "end": 1761,
              "object": {
                "type": "Identifier",
                "start": 1749,
                "end": 1754,
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1755,
                "end": 1761,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1767,
            "end": 1780,
            "expression": {
              "type": "MemberExpression",
              "start": 1767,
              "end": 1779,
              "object": {
                "type": "Identifier",
                "start": 1767,
                "end": 1772,
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1773,
                "end": 1779,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1785,
            "end": 1798,
            "expression": {
              "type": "MemberExpression",
              "start": 1785,
              "end": 1797,
              "object": {
                "type": "Identifier",
                "start": 1785,
                "end": 1790,
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1791,
                "end": 1797,
                "decorators": [],
                "name": "method",
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
