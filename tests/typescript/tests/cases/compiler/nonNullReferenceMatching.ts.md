__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1321,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "ElementRef",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 18,
        "end": 55,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 19,
            "end": 46,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 46,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 28,
                "end": 46,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 28,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 39,
                      "decorators": [],
                      "name": "HTMLElement",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 42,
                    "end": 46
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 48,
          "end": 55,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 51,
            "end": 55
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 58,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 73,
        "decorators": [],
        "name": "ThumbProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 76,
        "end": 108,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 106,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 92,
              "decorators": [],
              "name": "elementRef",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 105,
                  "decorators": [],
                  "name": "ElementRef",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 129,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 132,
        "end": 194,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 138,
            "end": 163,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 149,
              "decorators": [],
              "name": "thumbYProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 162,
                  "decorators": [],
                  "name": "ThumbProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 192,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 179,
              "decorators": [],
              "name": "thumbXProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 191,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 191,
                  "decorators": [],
                  "name": "ThumbProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 196,
      "end": 1321,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 211,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 1321,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 241,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 223,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 240,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 240,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 240,
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 246,
            "end": 1319,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 269,
              "decorators": [],
              "name": "thumbYElementRef",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 272,
              "end": 1318,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 296,
                  "decorators": [],
                  "name": "ref",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 296,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 278,
                      "end": 296,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 278,
                          "end": 289,
                          "typeName": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 289,
                            "decorators": [],
                            "name": "HTMLElement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 292,
                          "end": 296
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 1318,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 411,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 311,
                      "end": 410,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 311,
                        "end": 367,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 311,
                          "end": 352,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 318,
                            "end": 352,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 318,
                              "end": 341,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 318,
                                "end": 340,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 318,
                                  "end": 328,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 318,
                                    "end": 322
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 323,
                                    "end": 328,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 329,
                                  "end": 340,
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 352,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 357,
                          "end": 367,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 371,
                        "end": 410,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 371,
                          "end": 405,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 371,
                            "end": 394,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 371,
                              "end": 393,
                              "object": {
                                "type": "MemberExpression",
                                "start": 371,
                                "end": 381,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 371,
                                  "end": 375
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 376,
                                  "end": 381,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 382,
                                "end": 393,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 405,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 406,
                            "end": 409,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 523,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 421,
                      "end": 522,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 421,
                        "end": 479,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 421,
                          "end": 464,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 429,
                            "end": 463,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 429,
                              "end": 452,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 429,
                                "end": 451,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 429,
                                  "end": 439,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 429,
                                    "end": 433
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 434,
                                    "end": 439,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 440,
                                  "end": 451,
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 453,
                              "end": 463,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 469,
                          "end": 479,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 483,
                        "end": 522,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 483,
                          "end": 517,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 483,
                            "end": 506,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 483,
                              "end": 505,
                              "object": {
                                "type": "MemberExpression",
                                "start": 483,
                                "end": 493,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 483,
                                  "end": 487
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 493,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 494,
                                "end": 505,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 507,
                            "end": 517,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 518,
                            "end": 521,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 533,
                    "end": 638,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 533,
                      "end": 637,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 533,
                        "end": 594,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 533,
                          "end": 579,
                          "operator": "typeof",
                          "argument": {
                            "type": "TSNonNullExpression",
                            "start": 540,
                            "end": 579,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 541,
                              "end": 577,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 541,
                                "end": 566,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 541,
                                  "end": 565,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 542,
                                    "end": 552,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 542,
                                      "end": 546
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 547,
                                      "end": 552,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 554,
                                    "end": 565,
                                    "decorators": [],
                                    "name": "thumbYProps",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 567,
                                "end": 577,
                                "decorators": [],
                                "name": "elementRef",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 584,
                          "end": 594,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 598,
                        "end": 637,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 598,
                          "end": 632,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 598,
                            "end": 621,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 598,
                              "end": 620,
                              "object": {
                                "type": "MemberExpression",
                                "start": 598,
                                "end": 608,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 598,
                                  "end": 602
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 603,
                                  "end": 608,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 609,
                                "end": 620,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 632,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 633,
                            "end": 636,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 648,
                    "end": 746,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 648,
                      "end": 745,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 648,
                        "end": 703,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 648,
                          "end": 688,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 655,
                            "end": 688,
                            "object": {
                              "type": "MemberExpression",
                              "start": 655,
                              "end": 677,
                              "object": {
                                "type": "MemberExpression",
                                "start": 655,
                                "end": 665,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 655,
                                  "end": 659
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 665,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 666,
                                "end": 677,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 688,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 693,
                          "end": 703,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 707,
                        "end": 745,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 707,
                          "end": 740,
                          "object": {
                            "type": "MemberExpression",
                            "start": 707,
                            "end": 729,
                            "object": {
                              "type": "MemberExpression",
                              "start": 707,
                              "end": 717,
                              "object": {
                                "type": "ThisExpression",
                                "start": 707,
                                "end": 711
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 712,
                                "end": 717,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 718,
                              "end": 729,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 730,
                            "end": 740,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 741,
                            "end": 744,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 756,
                    "end": 856,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 756,
                      "end": 855,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 756,
                        "end": 811,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 756,
                          "end": 796,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 763,
                            "end": 796,
                            "object": {
                              "type": "MemberExpression",
                              "start": 763,
                              "end": 785,
                              "object": {
                                "type": "MemberExpression",
                                "start": 763,
                                "end": 773,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 763,
                                  "end": 767
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 768,
                                  "end": 773,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 774,
                                "end": 785,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 796,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 801,
                          "end": 811,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 815,
                        "end": 855,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 815,
                          "end": 850,
                          "object": {
                            "type": "MemberExpression",
                            "start": 815,
                            "end": 839,
                            "object": {
                              "type": "MemberExpression",
                              "start": 816,
                              "end": 826,
                              "object": {
                                "type": "ThisExpression",
                                "start": 816,
                                "end": 820
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 821,
                                "end": 826,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 828,
                              "end": 839,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 840,
                            "end": 850,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 851,
                            "end": 854,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 866,
                    "end": 966,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 866,
                      "end": 965,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 866,
                        "end": 921,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 866,
                          "end": 906,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 873,
                            "end": 906,
                            "object": {
                              "type": "MemberExpression",
                              "start": 873,
                              "end": 895,
                              "object": {
                                "type": "MemberExpression",
                                "start": 873,
                                "end": 883,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 873,
                                  "end": 877
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 878,
                                  "end": 883,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 884,
                                "end": 895,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 896,
                              "end": 906,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 911,
                          "end": 921,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 925,
                        "end": 965,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 925,
                          "end": 960,
                          "object": {
                            "type": "MemberExpression",
                            "start": 926,
                            "end": 948,
                            "object": {
                              "type": "MemberExpression",
                              "start": 926,
                              "end": 936,
                              "object": {
                                "type": "ThisExpression",
                                "start": 926,
                                "end": 930
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 931,
                                "end": 936,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 948,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 950,
                            "end": 960,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 961,
                            "end": 964,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 976,
                    "end": 1080,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 976,
                      "end": 1079,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 976,
                        "end": 1031,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 976,
                          "end": 1016,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 983,
                            "end": 1016,
                            "object": {
                              "type": "MemberExpression",
                              "start": 983,
                              "end": 1005,
                              "object": {
                                "type": "MemberExpression",
                                "start": 983,
                                "end": 993,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 983,
                                  "end": 987
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 988,
                                  "end": 993,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 994,
                                "end": 1005,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1016,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1021,
                          "end": 1031,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 1035,
                        "end": 1079,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1035,
                          "end": 1074,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1035,
                            "end": 1063,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1036,
                              "end": 1061,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1036,
                                "end": 1049,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1037,
                                  "end": 1047,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1037,
                                    "end": 1041
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1042,
                                    "end": 1047,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1050,
                                "end": 1061,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1074,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1078,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1090,
                    "end": 1196,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 1090,
                      "end": 1195,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1090,
                        "end": 1147,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1090,
                          "end": 1132,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1097,
                            "end": 1132,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1098,
                              "end": 1120,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1098,
                                "end": 1108,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1098,
                                  "end": 1102
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1103,
                                  "end": 1108,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1109,
                                "end": 1120,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1122,
                              "end": 1132,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1137,
                          "end": 1147,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 1151,
                        "end": 1195,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1151,
                          "end": 1190,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1151,
                            "end": 1179,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1152,
                              "end": 1177,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1152,
                                "end": 1165,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1153,
                                  "end": 1163,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1153,
                                    "end": 1157
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1158,
                                    "end": 1163,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1166,
                                "end": 1177,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1180,
                            "end": 1190,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1191,
                            "end": 1194,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1206,
                    "end": 1312,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 1206,
                      "end": 1311,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1206,
                        "end": 1263,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1206,
                          "end": 1248,
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1213,
                            "end": 1248,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 1213,
                              "end": 1237,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1213,
                                "end": 1236,
                                "object": {
                                  "type": "TSNonNullExpression",
                                  "start": 1213,
                                  "end": 1224,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 1213,
                                    "end": 1223,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1213,
                                      "end": 1217
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1218,
                                      "end": 1223,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1225,
                                  "end": 1236,
                                  "decorators": [],
                                  "name": "thumbXProps",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1238,
                              "end": 1248,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1253,
                          "end": 1263,
                          "value": "function",
                          "raw": "'function'"
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "start": 1267,
                        "end": 1311,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1267,
                          "end": 1306,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1267,
                            "end": 1295,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1268,
                              "end": 1293,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1268,
                                "end": 1281,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1269,
                                  "end": 1279,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1269,
                                    "end": 1273
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1274,
                                    "end": 1279,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1293,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1296,
                            "end": 1306,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1307,
                            "end": 1310,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
