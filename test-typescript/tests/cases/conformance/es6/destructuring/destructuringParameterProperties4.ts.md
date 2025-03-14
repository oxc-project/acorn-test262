destructuringParameterProperties4.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 547,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 396,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 396,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 246,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
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
              "start": 53,
              "end": 246,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 246,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 108,
                    "end": 240,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 200,
                      "end": 240,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 214,
                          "end": 230,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 214,
                            "end": 229,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 214,
                              "end": 220,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 223,
                              "end": 229,
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 229,
                                "decorators": [],
                                "name": "k",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 112,
                      "end": 198,
                      "operator": "||",
                      "left": {
                        "type": "LogicalExpression",
                        "start": 113,
                        "end": 147,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 113,
                          "end": 128,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 128,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 132,
                          "end": 147,
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 147,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 153,
                        "end": 197,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 153,
                          "end": 173,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 153,
                            "end": 159,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 153,
                              "end": 157
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 159,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 173,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 177,
                          "end": 197,
                          "operator": "===",
                          "left": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 183,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 177,
                              "end": 181
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 183,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 197,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
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
                  "start": 54,
                  "end": 66,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 63,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 65,
                        "end": 66,
                        "typeName": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 68,
                  "end": 96,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 78,
                    "end": 96,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 96,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 89,
                        "end": 96,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 90,
                            "end": 91,
                            "typeName": {
                              "type": "Identifier",
                              "start": 90,
                              "end": 91,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 94,
                            "end": 95,
                            "typeName": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "decorators": [],
                              "name": "V",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 252,
            "end": 295,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "decorators": [],
              "name": "getA",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 295,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 295,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 276,
                    "end": 289,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 283,
                      "end": 289,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 283,
                        "end": 287
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 301,
            "end": 344,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 312,
              "decorators": [],
              "name": "getB",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 315,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 325,
                    "end": 338,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 332,
                      "end": 338,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 332,
                        "end": 336
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 350,
            "end": 394,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "decorators": [],
              "name": "getC",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 394,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 394,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 388,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 381,
                      "end": 387,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 381,
                        "end": 385
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 26,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 398,
      "end": 546,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 546,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 449,
            "end": 544,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 486,
              "decorators": [],
              "name": "doSomethingWithSuperProperties",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 544,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 489,
                "end": 544,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 499,
                    "end": 538,
                    "argument": {
                      "type": "TemplateLiteral",
                      "start": 506,
                      "end": 537,
                      "expressions": [
                        {
                          "type": "MemberExpression",
                          "start": 509,
                          "end": 515,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 509,
                            "end": 513
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 515,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 519,
                          "end": 525,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 519,
                            "end": 523
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 524,
                            "end": 525,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 529,
                          "end": 535,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 529,
                            "end": 533
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 534,
                            "end": 535,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 506,
                          "end": 509,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 515,
                          "end": 519,
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 525,
                          "end": 529,
                          "tail": false,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 535,
                          "end": 537,
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 406,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 417,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 417,
        "end": 442,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 418,
            "end": 424
          },
          {
            "type": "TSStringKeyword",
            "start": 426,
            "end": 432
          },
          {
            "type": "TSBooleanKeyword",
            "start": 434,
            "end": 441
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
