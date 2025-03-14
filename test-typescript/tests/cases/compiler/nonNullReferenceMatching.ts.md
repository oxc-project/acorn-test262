nonNullReferenceMatching.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "ElementRef",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 18,
        "end": 55,
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
                      "optional": false
                    }
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 58,
      "end": 108,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 73,
        "decorators": [],
        "name": "ThumbProps",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 92,
              "decorators": [],
              "name": "elementRef",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 194,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 129,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 149,
              "decorators": [],
              "name": "thumbYProps",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 192,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 179,
              "decorators": [],
              "name": "thumbXProps",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 1321,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 1321,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 241,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 223,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 246,
            "end": 1319,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 269,
              "decorators": [],
              "name": "thumbYElementRef",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 272,
              "end": 1318,
              "async": false,
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
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 311,
                        "end": 367,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 311,
                          "end": 352,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 318,
                            "end": 352,
                            "computed": false,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 318,
                              "end": 341,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 318,
                                "end": 340,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 318,
                                  "end": 328,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 318,
                                    "end": 322
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 323,
                                    "end": 328,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 329,
                                  "end": 340,
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 352,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 357,
                          "end": 367,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 371,
                        "end": 410,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 406,
                            "end": 409,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 371,
                          "end": 405,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 371,
                            "end": 394,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 371,
                              "end": 393,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 371,
                                "end": 381,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 371,
                                  "end": 375
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 376,
                                  "end": 381,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 382,
                                "end": 393,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 405,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 523,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 421,
                      "end": 522,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 421,
                        "end": 479,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 421,
                          "end": 464,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 429,
                            "end": 463,
                            "computed": false,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 429,
                              "end": 452,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 429,
                                "end": 451,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 429,
                                  "end": 439,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 429,
                                    "end": 433
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 434,
                                    "end": 439,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 440,
                                  "end": 451,
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 453,
                              "end": 463,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 469,
                          "end": 479,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 483,
                        "end": 522,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 518,
                            "end": 521,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 483,
                          "end": 517,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 483,
                            "end": 506,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 483,
                              "end": 505,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 483,
                                "end": 493,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 483,
                                  "end": 487
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 493,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 494,
                                "end": 505,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 507,
                            "end": 517,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 533,
                    "end": 638,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 533,
                      "end": 637,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 533,
                        "end": 594,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 533,
                          "end": 579,
                          "argument": {
                            "type": "TSNonNullExpression",
                            "start": 540,
                            "end": 579,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 541,
                              "end": 577,
                              "computed": false,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 541,
                                "end": 566,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 541,
                                  "end": 565,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 542,
                                    "end": 552,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 542,
                                      "end": 546
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 547,
                                      "end": 552,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 554,
                                    "end": 565,
                                    "decorators": [],
                                    "name": "thumbYProps",
                                    "optional": false
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 567,
                                "end": 577,
                                "decorators": [],
                                "name": "elementRef",
                                "optional": false
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 584,
                          "end": 594,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 598,
                        "end": 637,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 633,
                            "end": 636,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 598,
                          "end": 632,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 598,
                            "end": 621,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 598,
                              "end": 620,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 598,
                                "end": 608,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 598,
                                  "end": 602
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 603,
                                  "end": 608,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 609,
                                "end": 620,
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 632,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 648,
                    "end": 746,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 648,
                      "end": 745,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 648,
                        "end": 703,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 648,
                          "end": 688,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 655,
                            "end": 688,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 655,
                              "end": 677,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 655,
                                "end": 665,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 655,
                                  "end": 659
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 665,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 666,
                                "end": 677,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 688,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 693,
                          "end": 703,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 707,
                        "end": 745,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 741,
                            "end": 744,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 707,
                          "end": 740,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 707,
                            "end": 729,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 707,
                              "end": 717,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 707,
                                "end": 711
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 712,
                                "end": 717,
                                "decorators": [],
                                "name": "props",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 718,
                              "end": 729,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 730,
                            "end": 740,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 756,
                    "end": 856,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 756,
                      "end": 855,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 756,
                        "end": 811,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 756,
                          "end": 796,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 763,
                            "end": 796,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 763,
                              "end": 785,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 763,
                                "end": 773,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 763,
                                  "end": 767
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 768,
                                  "end": 773,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 774,
                                "end": 785,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 796,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 801,
                          "end": 811,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 815,
                        "end": 855,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 851,
                            "end": 854,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 815,
                          "end": 850,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 815,
                            "end": 839,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 816,
                              "end": 826,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 816,
                                "end": 820
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 821,
                                "end": 826,
                                "decorators": [],
                                "name": "props",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 828,
                              "end": 839,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 840,
                            "end": 850,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 866,
                    "end": 966,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 866,
                      "end": 965,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 866,
                        "end": 921,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 866,
                          "end": 906,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 873,
                            "end": 906,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 873,
                              "end": 895,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 873,
                                "end": 883,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 873,
                                  "end": 877
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 878,
                                  "end": 883,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 884,
                                "end": 895,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 896,
                              "end": 906,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 911,
                          "end": 921,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 925,
                        "end": 965,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 961,
                            "end": 964,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 925,
                          "end": 960,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 926,
                            "end": 948,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 926,
                              "end": 936,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 926,
                                "end": 930
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 931,
                                "end": 936,
                                "decorators": [],
                                "name": "props",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 948,
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 950,
                            "end": 960,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 976,
                    "end": 1080,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 976,
                      "end": 1079,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 976,
                        "end": 1031,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 976,
                          "end": 1016,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 983,
                            "end": 1016,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 983,
                              "end": 1005,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 983,
                                "end": 993,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 983,
                                  "end": 987
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 988,
                                  "end": 993,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 994,
                                "end": 1005,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1016,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1021,
                          "end": 1031,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1035,
                        "end": 1079,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1078,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1035,
                          "end": 1074,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1035,
                            "end": 1063,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1036,
                              "end": 1061,
                              "computed": false,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1036,
                                "end": 1049,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1037,
                                  "end": 1047,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1037,
                                    "end": 1041
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1042,
                                    "end": 1047,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1050,
                                "end": 1061,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1074,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1090,
                    "end": 1196,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 1090,
                      "end": 1195,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1090,
                        "end": 1147,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1090,
                          "end": 1132,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1097,
                            "end": 1132,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1098,
                              "end": 1120,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1098,
                                "end": 1108,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1098,
                                  "end": 1102
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1103,
                                  "end": 1108,
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1109,
                                "end": 1120,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1122,
                              "end": 1132,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1137,
                          "end": 1147,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1151,
                        "end": 1195,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1191,
                            "end": 1194,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1151,
                          "end": 1190,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1151,
                            "end": 1179,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1152,
                              "end": 1177,
                              "computed": false,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1152,
                                "end": 1165,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1153,
                                  "end": 1163,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1153,
                                    "end": 1157
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1158,
                                    "end": 1163,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1166,
                                "end": 1177,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1180,
                            "end": 1190,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1206,
                    "end": 1312,
                    "expression": {
                      "type": "LogicalExpression",
                      "start": 1206,
                      "end": 1311,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1206,
                        "end": 1263,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1206,
                          "end": 1248,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1213,
                            "end": 1248,
                            "computed": false,
                            "object": {
                              "type": "TSNonNullExpression",
                              "start": 1213,
                              "end": 1237,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1213,
                                "end": 1236,
                                "computed": false,
                                "object": {
                                  "type": "TSNonNullExpression",
                                  "start": 1213,
                                  "end": 1224,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 1213,
                                    "end": 1223,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1213,
                                      "end": 1217
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1218,
                                      "end": 1223,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1225,
                                  "end": 1236,
                                  "decorators": [],
                                  "name": "thumbXProps",
                                  "optional": false
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1238,
                              "end": 1248,
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1253,
                          "end": 1263,
                          "raw": "'function'",
                          "value": "function"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1267,
                        "end": 1311,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1307,
                            "end": 1310,
                            "decorators": [],
                            "name": "ref",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1267,
                          "end": 1306,
                          "computed": false,
                          "object": {
                            "type": "TSNonNullExpression",
                            "start": 1267,
                            "end": 1295,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 1268,
                              "end": 1293,
                              "computed": false,
                              "object": {
                                "type": "TSNonNullExpression",
                                "start": 1268,
                                "end": 1281,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 1269,
                                  "end": 1279,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1269,
                                    "end": 1273
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1274,
                                    "end": 1279,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1293,
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1296,
                            "end": 1306,
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
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
                            "optional": false
                          }
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 211,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
