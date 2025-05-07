__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1441,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 55,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
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
              "start": 106,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 121,
                        "end": 132,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 129,
                          "end": 132,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 131,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 131,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 129,
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            "start": 141,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 152,
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 199,
                    "directive": null,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 165,
                      "end": 199,
                      "operator": "&&",
                      "left": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 179,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 165,
                          "end": 175,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 165,
                            "end": 169
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 175,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 179,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 183,
                        "end": 199,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 197,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 183,
                            "end": 193,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 183,
                              "end": 187
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 188,
                              "end": 193,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 197,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 87,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 87,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 82,
                "end": 87,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 83,
                    "end": 86,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 86,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 82,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 231,
      "end": 272,
      "body": {
        "type": "TSInterfaceBody",
        "start": 248,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 270,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 259,
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'yellow'",
                  "value": "yellow",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 247,
        "decorators": [],
        "name": "Banana",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 274,
      "end": 431,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 431,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 323,
            "end": 350,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 334,
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
              "start": 334,
              "end": 350,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 350,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 345,
                        "end": 346,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
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
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 361,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 429,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 429,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 374,
                    "end": 423,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 386,
                      "end": 423,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 400,
                          "end": 413,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 400,
                            "end": 412,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 400,
                              "end": 406,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 400,
                                "end": 404
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 406,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 412,
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 384,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 378,
                        "end": 382
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 383,
                        "end": 384,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 286,
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 315,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 297,
              "end": 315,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 297,
                  "end": 303,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 303,
                    "decorators": [],
                    "name": "Banana",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 433,
      "end": 471,
      "body": {
        "type": "TSInterfaceBody",
        "start": 468,
        "end": 471,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 461,
          "end": 467,
          "expression": {
            "type": "Identifier",
            "start": 461,
            "end": 467,
            "decorators": [],
            "name": "Banana",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 452,
        "decorators": [],
        "name": "BigBanana",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 473,
      "end": 597,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 515,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 521,
            "end": 595,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 527,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 527,
              "end": 595,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 595,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 540,
                    "end": 589,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 552,
                      "end": 589,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 566,
                          "end": 579,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 566,
                            "end": 578,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 566,
                              "end": 572,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 566,
                                "end": 570
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 572,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 573,
                              "end": 578,
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 544,
                      "end": 550,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 544,
                        "end": 548
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 550,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 488,
        "decorators": [],
        "name": "BigMonkey",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 497,
        "end": 503,
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 503,
        "end": 514,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 504,
            "end": 513,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 504,
              "end": 513,
              "decorators": [],
              "name": "BigBanana",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 617,
      "end": 663,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 626,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 629,
        "end": 663,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 635,
            "end": 646,
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
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 651,
            "end": 661,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 660,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 654,
                "end": 660
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 665,
      "end": 785,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 713,
        "end": 785,
        "body": [
          {
            "type": "IfStatement",
            "start": 719,
            "end": 783,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 728,
              "end": 783,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 738,
                  "end": 744,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 738,
                    "end": 743,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 741,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 742,
                      "end": 743,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 753,
                  "end": 762,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 753,
                    "end": 761,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 753,
                      "end": 756,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 757,
                      "end": 760,
                      "raw": "\"x\"",
                      "value": "x",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 771,
                  "end": 777,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 771,
                    "end": 776,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 771,
                      "end": 774,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 723,
              "end": 726,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 676,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 705,
          "end": 711,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 711,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 710,
              "end": 711,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 710,
                "end": 711,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 676,
        "end": 704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 677,
            "end": 703,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 687,
              "end": 703,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 687,
                  "end": 691,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 691,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
            "name": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 787,
      "end": 919,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 847,
        "end": 919,
        "body": [
          {
            "type": "IfStatement",
            "start": 853,
            "end": 917,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 862,
              "end": 917,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 872,
                  "end": 878,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 872,
                    "end": 877,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 875,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 877,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 887,
                  "end": 896,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 887,
                    "end": 895,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 887,
                      "end": 890,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 891,
                      "end": 894,
                      "raw": "\"x\"",
                      "value": "x",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 905,
                  "end": 911,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 905,
                    "end": 910,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 908,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 857,
              "end": 860,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 796,
        "end": 798,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 827,
          "end": 845,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 833,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 836,
                  "end": 845
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 798,
        "end": 826,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 799,
            "end": 825,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 809,
              "end": 825,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 809,
                  "end": 813,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 813,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
            "name": {
              "type": "Identifier",
              "start": 799,
              "end": 800,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 921,
      "end": 1048,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 976,
        "end": 1048,
        "body": [
          {
            "type": "IfStatement",
            "start": 982,
            "end": 1046,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 991,
              "end": 1046,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1001,
                  "end": 1007,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1001,
                    "end": 1006,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1004,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1005,
                      "end": 1006,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1016,
                  "end": 1025,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1016,
                    "end": 1024,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 1016,
                      "end": 1019,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 1020,
                      "end": 1023,
                      "raw": "\"x\"",
                      "value": "x",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1034,
                  "end": 1040,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1034,
                    "end": 1039,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1037,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 986,
              "end": 989,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 932,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 961,
          "end": 974,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 967,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 970,
                  "end": 974
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 932,
        "end": 960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 933,
            "end": 959,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 943,
              "end": 959,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 943,
                  "end": 947,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 947,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
            "name": {
              "type": "Identifier",
              "start": 933,
              "end": 934,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1050,
      "end": 1172,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1125,
        "end": 1172,
        "body": [
          {
            "type": "IfStatement",
            "start": 1131,
            "end": 1170,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1140,
              "end": 1170,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1150,
                  "end": 1164,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1150,
                    "end": 1163,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1150,
                      "end": 1156,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1153,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1154,
                        "end": 1155,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1163,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1135,
              "end": 1138,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1061,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1094,
          "end": 1112,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1100,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1103,
                  "end": 1112
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1114,
          "end": 1123,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1115,
            "end": 1123,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1117,
              "end": 1123
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1061,
        "end": 1093,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1062,
            "end": 1092,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1174,
      "end": 1278,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1236,
        "end": 1278,
        "body": [
          {
            "type": "IfStatement",
            "start": 1242,
            "end": 1276,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1251,
              "end": 1276,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1261,
                  "end": 1270,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1261,
                    "end": 1269,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 1261,
                      "end": 1264,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1268,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1246,
              "end": 1249,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1183,
        "end": 1185,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1208,
          "end": 1226,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1217,
                  "end": 1226
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1228,
          "end": 1234,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1231,
            "end": 1234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1233,
              "end": 1234,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1185,
        "end": 1207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1186,
            "end": 1187,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1186,
              "end": 1187,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1189,
            "end": 1206,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1199,
              "end": 1206,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1205,
                "end": 1206,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1206,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1189,
              "end": 1190,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1337,
      "end": 1441,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1390,
        "end": 1441,
        "body": [
          {
            "type": "IfStatement",
            "start": 1394,
            "end": 1439,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1421,
              "end": 1439,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1427,
                  "end": 1435,
                  "directive": null,
                  "expression": {
                    "type": "NewExpression",
                    "start": 1427,
                    "end": 1434,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1431,
                      "end": 1432,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1398,
              "end": 1419,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 1398,
                "end": 1406,
                "argument": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1411,
                "end": 1419,
                "raw": "\"string\"",
                "value": "string",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1346,
        "end": 1348,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1384,
          "end": 1388,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1385,
            "end": 1388,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1387,
              "end": 1388,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1348,
        "end": 1383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1349,
            "end": 1382,
            "const": false,
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
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1349,
              "end": 1350,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
