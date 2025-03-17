__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 26,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 396,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "k",
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
                  "start": 68,
                  "end": 96,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 78,
                    "end": 96,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 94,
                            "end": 95,
                            "typeName": {
                              "type": "Identifier",
                              "start": 94,
                              "end": 95,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 246,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 108,
                    "end": 240,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 112,
                      "end": 198,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 113,
                        "end": 147,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 113,
                          "end": 128,
                          "left": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 128,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 132,
                          "end": 147,
                          "left": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 147,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 153,
                        "end": 197,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 153,
                          "end": 173,
                          "left": {
                            "type": "MemberExpression",
                            "start": 153,
                            "end": 159,
                            "object": {
                              "type": "ThisExpression",
                              "start": 153,
                              "end": 157
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 159,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 173,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 177,
                          "end": 197,
                          "left": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 183,
                            "object": {
                              "type": "ThisExpression",
                              "start": 177,
                              "end": 181
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 183,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 197,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    },
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
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 223,
                              "end": 229,
                              "left": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "start": 228,
                                "end": 229,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
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
            "start": 252,
            "end": 295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "name": "getA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 295,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 283,
                        "end": 287
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 301,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 312,
              "name": "getB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 332,
                        "end": 336
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 350,
            "end": 394,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "name": "getC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 394,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 381,
                        "end": 385
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
            "start": 30,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "V",
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
      "start": 398,
      "end": 546,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 406,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 417,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 546,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 449,
            "end": 544,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 486,
              "name": "doSomethingWithSuperProperties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 544,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 509,
                            "end": 513
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 515,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 519,
                          "end": 525,
                          "object": {
                            "type": "ThisExpression",
                            "start": 519,
                            "end": 523
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 524,
                            "end": 525,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 529,
                          "end": 535,
                          "object": {
                            "type": "ThisExpression",
                            "start": 529,
                            "end": 533
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 534,
                            "end": 535,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 506,
                          "end": 509,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 515,
                          "end": 519,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 525,
                          "end": 529,
                          "value": {
                            "cooked": " ",
                            "raw": " "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 535,
                          "end": 537,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ]
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
  "sourceType": "script",
  "hashbang": null
}
```
