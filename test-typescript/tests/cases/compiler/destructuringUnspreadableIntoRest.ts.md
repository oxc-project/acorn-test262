__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1801,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1067,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 1067,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "publicProp",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
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
                  "start": 70,
                  "end": 97,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 97,
                    "name": "privateProp",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
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
                  "start": 107,
                  "end": 138,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 138,
                    "name": "protectedProp",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
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
                "start": 146,
                "end": 148,
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
            "start": 154,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 164,
              "name": "getter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 166,
                "end": 174,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 168,
                  "end": 174
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
            "start": 206,
            "end": 231,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 216,
              "name": "setter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 231,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 227,
                  "name": "_v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 227,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 221,
                      "end": 227
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 231,
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
            "start": 237,
            "end": 1065,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 243,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 1065,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 1065,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 256,
                    "end": 298,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 262,
                        "end": 297,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 262,
                          "end": 290,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 280,
                              "end": 288,
                              "argument": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 288,
                                "name": "rest1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
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
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 307,
                    "end": 354,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 313,
                        "end": 353,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 313,
                          "end": 341,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 331,
                              "end": 339,
                              "argument": {
                                "type": "Identifier",
                                "start": 334,
                                "end": 339,
                                "name": "rest2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
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
                              "name": "A",
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
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 363,
                    "end": 405,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 369,
                        "end": 404,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 369,
                          "end": 397,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 371,
                              "end": 385,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 371,
                                "end": 381,
                                "name": "publicProp",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 385,
                                "name": "_1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "RestElement",
                              "start": 387,
                              "end": 395,
                              "argument": {
                                "type": "Identifier",
                                "start": 390,
                                "end": 395,
                                "name": "rest3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
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
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 414,
                    "end": 461,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 420,
                        "end": 460,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 420,
                          "end": 448,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 422,
                              "end": 436,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 422,
                                "end": 432,
                                "name": "publicProp",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 434,
                                "end": 436,
                                "name": "_2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "RestElement",
                              "start": 438,
                              "end": 446,
                              "argument": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 446,
                                "name": "rest4",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
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
                              "name": "A",
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
                    "kind": "const",
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 487,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 513,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 529,
                        "end": 539,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 565,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 593,
                        "name": "privateProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 620,
                        "name": "privateProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 647,
                        "name": "privateProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 674,
                        "name": "privateProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 704,
                        "name": "protectedProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 733,
                        "name": "protectedProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 762,
                        "name": "protectedProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 778,
                        "end": 791,
                        "name": "protectedProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 814,
                        "name": "getter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 830,
                        "end": 836,
                        "name": "getter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 858,
                        "name": "getter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 880,
                        "name": "getter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 897,
                        "end": 903,
                        "name": "setter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 925,
                        "name": "setter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 947,
                        "name": "setter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 969,
                        "name": "setter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 992,
                        "name": "method",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1014,
                        "name": "method",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1036,
                        "name": "method",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1058,
                        "name": "method",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "type": "FunctionDeclaration",
      "start": 1069,
      "end": 1800,
      "id": {
        "type": "Identifier",
        "start": 1078,
        "end": 1089,
        "name": "destructure",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1103,
          "end": 1107,
          "name": "x",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1109,
        "end": 1800,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1115,
            "end": 1154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1121,
                "end": 1153,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1121,
                  "end": 1149,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1139,
                      "end": 1147,
                      "argument": {
                        "type": "Identifier",
                        "start": 1142,
                        "end": 1147,
                        "name": "rest1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1152,
                  "end": 1153,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1159,
            "end": 1203,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1165,
                "end": 1202,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1165,
                  "end": 1193,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 1183,
                      "end": 1191,
                      "argument": {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1191,
                        "name": "rest2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1201,
                    "end": 1202,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1201,
                      "end": 1202,
                      "name": "A",
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
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1208,
            "end": 1247,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1214,
                "end": 1246,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1214,
                  "end": 1242,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1216,
                      "end": 1230,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1216,
                        "end": 1226,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1228,
                        "end": 1230,
                        "name": "_1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1232,
                      "end": 1240,
                      "argument": {
                        "type": "Identifier",
                        "start": 1235,
                        "end": 1240,
                        "name": "rest3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1246,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1252,
            "end": 1296,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1258,
                "end": 1295,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1258,
                  "end": 1286,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1260,
                      "end": 1274,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1260,
                        "end": 1270,
                        "name": "publicProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1272,
                        "end": 1274,
                        "name": "_2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 1276,
                      "end": 1284,
                      "argument": {
                        "type": "Identifier",
                        "start": 1279,
                        "end": 1284,
                        "name": "rest4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1294,
                    "end": 1295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1295,
                      "name": "A",
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
            "kind": "const",
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1308,
                "end": 1318,
                "name": "publicProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1330,
                "end": 1340,
                "name": "publicProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1352,
                "end": 1362,
                "name": "publicProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1374,
                "end": 1384,
                "name": "publicProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1397,
                "end": 1408,
                "name": "privateProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1420,
                "end": 1431,
                "name": "privateProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1443,
                "end": 1454,
                "name": "privateProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1466,
                "end": 1477,
                "name": "privateProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1490,
                "end": 1503,
                "name": "protectedProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1515,
                "end": 1528,
                "name": "protectedProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1540,
                "end": 1553,
                "name": "protectedProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1565,
                "end": 1578,
                "name": "protectedProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1591,
                "end": 1597,
                "name": "getter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1609,
                "end": 1615,
                "name": "getter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1627,
                "end": 1633,
                "name": "getter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1645,
                "end": 1651,
                "name": "getter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1664,
                "end": 1670,
                "name": "setter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1682,
                "end": 1688,
                "name": "setter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1700,
                "end": 1706,
                "name": "setter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1718,
                "end": 1724,
                "name": "setter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1737,
                "end": 1743,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1755,
                "end": 1761,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1773,
                "end": 1779,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "rest4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1791,
                "end": 1797,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1100,
              "end": 1101,
              "typeName": {
                "type": "Identifier",
                "start": 1100,
                "end": 1101,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
