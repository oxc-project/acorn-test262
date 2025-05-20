__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 378,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 378,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
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
              "start": 35,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 228,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 90,
                    "end": 222,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 182,
                      "end": 222,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 196,
                          "end": 212,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 196,
                            "end": 211,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 196,
                              "end": 202,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 196,
                                "end": 200
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 202,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 205,
                              "end": 211,
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 205,
                                "end": 206,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 210,
                                "end": 211,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 94,
                      "end": 180,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 95,
                        "end": 129,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 95,
                          "end": 110,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 114,
                          "end": 129,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 129,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 135,
                        "end": 179,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 135,
                          "end": 155,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 135,
                            "end": 141,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 135,
                              "end": 139
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 141,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 155,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 159,
                          "end": 179,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 159,
                            "end": 165,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 159,
                              "end": 163
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 179,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
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
                  "start": 36,
                  "end": 48,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 50,
                  "end": 78,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 60,
                    "end": 78,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 71,
                        "end": 78,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 72,
                            "end": 73,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 73,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 76,
                            "end": 77,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 76,
                              "end": 77,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 277,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 245,
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 277,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 248,
                "end": 277,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 258,
                    "end": 271,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 265,
                      "end": 271,
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
                        "end": 271,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 283,
            "end": 326,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 294,
              "decorators": [],
              "name": "getB",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 326,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 326,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 307,
                    "end": 320,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 314,
                      "end": 320,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 314,
                        "end": 318
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 320,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 332,
            "end": 376,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 343,
              "decorators": [],
              "name": "getC",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 343,
              "end": 376,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 346,
                "end": 376,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 356,
                    "end": 370,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 363,
                      "end": 369,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 363,
                        "end": 367
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 369,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 380,
      "end": 528,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 425,
        "end": 528,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 526,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 468,
              "decorators": [],
              "name": "doSomethingWithSuperProperties",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 468,
              "end": 526,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 471,
                "end": 526,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 481,
                    "end": 520,
                    "argument": {
                      "type": "TemplateLiteral",
                      "start": 488,
                      "end": 519,
                      "expressions": [
                        {
                          "type": "MemberExpression",
                          "start": 491,
                          "end": 497,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 491,
                            "end": 495
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 496,
                            "end": 497,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 501,
                          "end": 507,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 501,
                            "end": 505
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 506,
                            "end": 507,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 511,
                          "end": 517,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 511,
                            "end": 515
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 517,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 488,
                          "end": 491,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 497,
                          "end": 501,
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 507,
                          "end": 511,
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 517,
                          "end": 519,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 386,
        "end": 388,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 397,
        "end": 399,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 399,
        "end": 424,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 400,
            "end": 406
          },
          {
            "type": "TSStringKeyword",
            "start": 408,
            "end": 414
          },
          {
            "type": "TSBooleanKeyword",
            "start": 416,
            "end": 423
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
