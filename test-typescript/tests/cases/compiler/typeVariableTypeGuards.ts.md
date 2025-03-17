__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1442,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 55,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 53,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 53,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 49,
                "end": 53
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 107,
                  "end": 132,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 132,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 121,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 129,
                          "name": "Readonly",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 129,
                          "end": 132,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 131,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 131,
                                "name": "P",
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
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
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
            "start": 141,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 152,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 199,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 165,
                      "end": 199,
                      "left": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 179,
                        "object": {
                          "type": "MemberExpression",
                          "start": 165,
                          "end": 175,
                          "object": {
                            "type": "ThisExpression",
                            "start": 165,
                            "end": 169
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 175,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 179,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 183,
                        "end": 199,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 197,
                          "object": {
                            "type": "MemberExpression",
                            "start": 183,
                            "end": 193,
                            "object": {
                              "type": "ThisExpression",
                              "start": 183,
                              "end": 187
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 188,
                              "end": 193,
                              "name": "props",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 197,
                            "name": "foo",
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
                      }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 82,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 82,
                "end": 87,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 83,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 86,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
      "type": "TSInterfaceDeclaration",
      "start": 231,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 247,
        "name": "Banana",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 248,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 270,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "name": "color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 269,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 261,
                "end": 269,
                "literal": {
                  "type": "Literal",
                  "start": 261,
                  "end": 269,
                  "value": "yellow",
                  "raw": "'yellow'"
                }
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
      "type": "ClassDeclaration",
      "start": 274,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 286,
        "name": "Monkey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 431,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 323,
            "end": 350,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 334,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 334,
              "end": 350,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 335,
                  "end": 346,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 346,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 345,
                        "end": 346,
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 350,
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
            "start": 355,
            "end": 429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 361,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 429,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 429,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 374,
                    "end": 423,
                    "test": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 384,
                      "object": {
                        "type": "ThisExpression",
                        "start": 378,
                        "end": 382
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 383,
                        "end": 384,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 386,
                      "end": 423,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 400,
                          "end": 413,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 400,
                            "end": 412,
                            "object": {
                              "type": "MemberExpression",
                              "start": 400,
                              "end": 406,
                              "object": {
                                "type": "ThisExpression",
                                "start": 400,
                                "end": 404
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 406,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 412,
                              "name": "color",
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 315,
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 297,
              "end": 315,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 297,
                  "end": 303,
                  "typeName": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 303,
                    "name": "Banana",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 306,
                  "end": 315
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 433,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 452,
        "name": "BigBanana",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 461,
          "end": 467,
          "expression": {
            "type": "Identifier",
            "start": 461,
            "end": 467,
            "name": "Banana",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 468,
        "end": 471,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 473,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 488,
        "name": "BigMonkey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 497,
        "end": 503,
        "name": "Monkey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 515,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 521,
            "end": 595,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 527,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 595,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 595,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 540,
                    "end": 589,
                    "test": {
                      "type": "MemberExpression",
                      "start": 544,
                      "end": 550,
                      "object": {
                        "type": "ThisExpression",
                        "start": 544,
                        "end": 548
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 550,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 552,
                      "end": 589,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 566,
                          "end": 579,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 566,
                            "end": 578,
                            "object": {
                              "type": "MemberExpression",
                              "start": 566,
                              "end": 572,
                              "object": {
                                "type": "ThisExpression",
                                "start": 566,
                                "end": 570
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 572,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 573,
                              "end": 578,
                              "name": "color",
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
        "start": 503,
        "end": 514,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 504,
            "end": 513,
            "typeName": {
              "type": "Identifier",
              "start": 504,
              "end": 513,
              "name": "BigBanana",
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
      "type": "TSTypeAliasDeclaration",
      "start": 617,
      "end": 663,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 626,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 629,
        "end": 663,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 635,
            "end": 646,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 645,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 639,
                "end": 645
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 651,
            "end": 661,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 660,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 654,
                "end": 660
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
      "type": "FunctionDeclaration",
      "start": 665,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 676,
        "name": "f1",
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
          "start": 705,
          "end": 711,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 711,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 710,
              "end": 711,
              "typeName": {
                "type": "Identifier",
                "start": 710,
                "end": 711,
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
        "start": 713,
        "end": 785,
        "body": [
          {
            "type": "IfStatement",
            "start": 719,
            "end": 783,
            "test": {
              "type": "Identifier",
              "start": 723,
              "end": 726,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 728,
              "end": 783,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 738,
                  "end": 744,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 738,
                    "end": 743,
                    "object": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 741,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 742,
                      "end": 743,
                      "name": "x",
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
                  "start": 753,
                  "end": 762,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 753,
                    "end": 761,
                    "object": {
                      "type": "Identifier",
                      "start": 753,
                      "end": 756,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 757,
                      "end": 760,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 771,
                  "end": 777,
                  "expression": {
                    "type": "CallExpression",
                    "start": 771,
                    "end": 776,
                    "callee": {
                      "type": "Identifier",
                      "start": 771,
                      "end": 774,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 676,
        "end": 704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 677,
            "end": 703,
            "name": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 687,
              "end": 703,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 687,
                  "end": 691,
                  "typeName": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 691,
                    "name": "Item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 694,
                  "end": 703
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 787,
      "end": 919,
      "id": {
        "type": "Identifier",
        "start": 796,
        "end": 798,
        "name": "f2",
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
          "start": 827,
          "end": 845,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 830,
            "end": 845,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 832,
              "end": 845,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 832,
                  "end": 833,
                  "typeName": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 836,
                  "end": 845
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 847,
        "end": 919,
        "body": [
          {
            "type": "IfStatement",
            "start": 853,
            "end": 917,
            "test": {
              "type": "Identifier",
              "start": 857,
              "end": 860,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 862,
              "end": 917,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 872,
                  "end": 878,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 872,
                    "end": 877,
                    "object": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 875,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 877,
                      "name": "x",
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
                  "start": 887,
                  "end": 896,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 887,
                    "end": 895,
                    "object": {
                      "type": "Identifier",
                      "start": 887,
                      "end": 890,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 891,
                      "end": 894,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 905,
                  "end": 911,
                  "expression": {
                    "type": "CallExpression",
                    "start": 905,
                    "end": 910,
                    "callee": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 908,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 798,
        "end": 826,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 799,
            "end": 825,
            "name": {
              "type": "Identifier",
              "start": 799,
              "end": 800,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 809,
              "end": 825,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 809,
                  "end": 813,
                  "typeName": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 813,
                    "name": "Item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 816,
                  "end": 825
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 921,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 932,
        "name": "f3",
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
          "start": 961,
          "end": 974,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 964,
            "end": 974,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 966,
              "end": 974,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 966,
                  "end": 967,
                  "typeName": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 967,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 970,
                  "end": 974
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 976,
        "end": 1048,
        "body": [
          {
            "type": "IfStatement",
            "start": 982,
            "end": 1046,
            "test": {
              "type": "Identifier",
              "start": 986,
              "end": 989,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 991,
              "end": 1046,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1001,
                  "end": 1007,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1001,
                    "end": 1006,
                    "object": {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1004,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1005,
                      "end": 1006,
                      "name": "x",
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
                  "start": 1016,
                  "end": 1025,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1016,
                    "end": 1024,
                    "object": {
                      "type": "Identifier",
                      "start": 1016,
                      "end": 1019,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 1020,
                      "end": 1023,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1034,
                  "end": 1040,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1034,
                    "end": 1039,
                    "callee": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1037,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 932,
        "end": 960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 933,
            "end": 959,
            "name": {
              "type": "Identifier",
              "start": 933,
              "end": 934,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 943,
              "end": 959,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 943,
                  "end": 947,
                  "typeName": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 947,
                    "name": "Item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 950,
                  "end": 959
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1050,
      "end": 1172,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1061,
        "name": "f4",
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
          "start": 1094,
          "end": 1112,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1097,
            "end": 1112,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1099,
              "end": 1112,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1099,
                  "end": 1100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1100,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1103,
                  "end": 1112
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1114,
          "end": 1123,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1115,
            "end": 1123,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1117,
              "end": 1123
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1125,
        "end": 1172,
        "body": [
          {
            "type": "IfStatement",
            "start": 1131,
            "end": 1170,
            "test": {
              "type": "Identifier",
              "start": 1135,
              "end": 1138,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1140,
              "end": 1170,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1150,
                  "end": 1164,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1150,
                    "end": 1163,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1150,
                      "end": 1156,
                      "object": {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1153,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1154,
                        "end": 1155,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1163,
                      "name": "length",
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
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1061,
        "end": 1093,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1062,
            "end": 1092,
            "name": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1072,
              "end": 1092,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 1072,
                  "end": 1080,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1072,
                    "end": 1078
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1083,
                  "end": 1092
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1174,
      "end": 1278,
      "id": {
        "type": "Identifier",
        "start": 1183,
        "end": 1185,
        "name": "f5",
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
          "start": 1208,
          "end": 1226,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1226,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1213,
              "end": 1226,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1213,
                  "end": 1214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1217,
                  "end": 1226
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1228,
          "end": 1234,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1231,
            "end": 1234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1233,
              "end": 1234,
              "typeName": {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "name": "K",
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
        "start": 1236,
        "end": 1278,
        "body": [
          {
            "type": "IfStatement",
            "start": 1242,
            "end": 1276,
            "test": {
              "type": "Identifier",
              "start": 1246,
              "end": 1249,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1251,
              "end": 1276,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1261,
                  "end": 1270,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1261,
                    "end": 1269,
                    "object": {
                      "type": "Identifier",
                      "start": 1261,
                      "end": 1264,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1268,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1185,
        "end": 1207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1186,
            "end": 1187,
            "name": {
              "type": "Identifier",
              "start": 1186,
              "end": 1187,
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
            "start": 1189,
            "end": 1206,
            "name": {
              "type": "Identifier",
              "start": 1189,
              "end": 1190,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1199,
              "end": 1206,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1205,
                "end": 1206,
                "typeName": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1206,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1337,
      "end": 1441,
      "id": {
        "type": "Identifier",
        "start": 1346,
        "end": 1348,
        "name": "f6",
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
          "start": 1384,
          "end": 1388,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1385,
            "end": 1388,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1387,
              "end": 1388,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
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
        "start": 1390,
        "end": 1441,
        "body": [
          {
            "type": "IfStatement",
            "start": 1394,
            "end": 1439,
            "test": {
              "type": "BinaryExpression",
              "start": 1398,
              "end": 1419,
              "left": {
                "type": "UnaryExpression",
                "start": 1398,
                "end": 1406,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 1411,
                "end": 1419,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1421,
              "end": 1439,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1427,
                  "end": 1435,
                  "expression": {
                    "type": "NewExpression",
                    "start": 1427,
                    "end": 1434,
                    "callee": {
                      "type": "Identifier",
                      "start": 1431,
                      "end": 1432,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1348,
        "end": 1383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1349,
            "end": 1382,
            "name": {
              "type": "Identifier",
              "start": 1349,
              "end": 1350,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1359,
              "end": 1382,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1359,
                  "end": 1365
                },
                {
                  "type": "TSConstructorType",
                  "start": 1369,
                  "end": 1381,
                  "abstract": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1376,
                    "end": 1381,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1379,
                      "end": 1381,
                      "members": []
                    }
                  }
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
