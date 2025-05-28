__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1905,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 45,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 24,
              "end": 33,
              "value": "dash-ok",
              "raw": "\"dash-ok\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 36,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 36,
                  "end": 44,
                  "value": "square",
                  "raw": "\"square\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 74,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 51,
              "end": 64,
              "value": "square-size",
              "raw": "\"square-size\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
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
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 97,
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 170,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 129,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 105,
              "end": 114,
              "value": "dash-ok",
              "raw": "\"dash-ok\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 128,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 117,
                "end": 128,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 128,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 134,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 139,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 168,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 167,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 161,
                "end": 167
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
      "type": "TSInterfaceDeclaration",
      "start": 172,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 188,
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 189,
        "end": 239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 195,
            "end": 217,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 196,
              "end": 205,
              "value": "dash-ok",
              "raw": "\"dash-ok\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 216,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 208,
                "end": 216,
                "literal": {
                  "type": "Literal",
                  "start": 208,
                  "end": 216,
                  "value": "circle",
                  "raw": "\"circle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 237,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 228,
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
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
      "start": 241,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 251,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 254,
        "end": 281,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 254,
            "end": 260,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 260,
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 263,
            "end": 272,
            "typeName": {
              "type": "Identifier",
              "start": 263,
              "end": 272,
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 275,
            "end": 281,
            "typeName": {
              "type": "Identifier",
              "start": 275,
              "end": 281,
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 283,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 301,
        "decorators": [],
        "name": "Subshape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 412,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 308,
            "end": 410,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 308,
              "end": 311,
              "value": "0",
              "raw": "\"0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 410,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 313,
                "end": 410,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 323,
                    "end": 404,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 326,
                      "decorators": [],
                      "name": "sub",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 326,
                      "end": 404,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 328,
                        "end": 404,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 342,
                            "end": 394,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 347,
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 347,
                              "end": 394,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 349,
                                "end": 394,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 367,
                                    "end": 380,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 367,
                                      "end": 372,
                                      "decorators": [],
                                      "name": "shape",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 372,
                                      "end": 379,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 374,
                                        "end": 379,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 374,
                                          "end": 379,
                                          "decorators": [],
                                          "name": "Shape",
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
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 413,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 426,
        "decorators": [],
        "name": "area",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 435,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 435,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 436,
        "end": 444,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 438,
          "end": 444
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 668,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 451,
            "end": 666,
            "discriminant": {
              "type": "MemberExpression",
              "start": 458,
              "end": 470,
              "object": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 460,
                "end": 469,
                "value": "dash-ok",
                "raw": "'dash-ok'"
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 482,
                "end": 540,
                "test": {
                  "type": "Literal",
                  "start": 487,
                  "end": 495,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 497,
                    "end": 540,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 504,
                      "end": 539,
                      "left": {
                        "type": "MemberExpression",
                        "start": 504,
                        "end": 520,
                        "object": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 505,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 506,
                          "end": 519,
                          "value": "square-size",
                          "raw": "'square-size'"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 523,
                        "end": 539,
                        "object": {
                          "type": "Identifier",
                          "start": 523,
                          "end": 524,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 525,
                          "end": 538,
                          "value": "square-size",
                          "raw": "'square-size'"
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 549,
                "end": 596,
                "test": {
                  "type": "Literal",
                  "start": 554,
                  "end": 565,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 567,
                    "end": 596,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 574,
                      "end": 595,
                      "left": {
                        "type": "MemberExpression",
                        "start": 574,
                        "end": 581,
                        "object": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 575,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 581,
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 595,
                        "object": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 585,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 586,
                          "end": 594,
                          "value": "height",
                          "raw": "'height'"
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 605,
                "end": 660,
                "test": {
                  "type": "Literal",
                  "start": 610,
                  "end": 618,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 620,
                    "end": 660,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 627,
                      "end": 659,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 627,
                        "end": 648,
                        "left": {
                          "type": "MemberExpression",
                          "start": 627,
                          "end": 634,
                          "object": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 631,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 632,
                            "end": 634,
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 637,
                          "end": 648,
                          "object": {
                            "type": "Identifier",
                            "start": 637,
                            "end": 638,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 639,
                            "end": 647,
                            "value": "radius",
                            "raw": "'radius'"
                          },
                          "optional": false,
                          "computed": true
                        }
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 651,
                        "end": 659,
                        "object": {
                          "type": "Identifier",
                          "start": 651,
                          "end": 652,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 659,
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 669,
      "end": 1093,
      "id": {
        "type": "Identifier",
        "start": 678,
        "end": 685,
        "decorators": [],
        "name": "subarea",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 686,
          "end": 697,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 687,
            "end": 697,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 689,
              "end": 697,
              "typeName": {
                "type": "Identifier",
                "start": 689,
                "end": 697,
                "decorators": [],
                "name": "Subshape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 698,
        "end": 706,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 700,
          "end": 706
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 1093,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 713,
            "end": 1091,
            "discriminant": {
              "type": "MemberExpression",
              "start": 720,
              "end": 757,
              "object": {
                "type": "MemberExpression",
                "start": 720,
                "end": 746,
                "object": {
                  "type": "MemberExpression",
                  "start": 720,
                  "end": 737,
                  "object": {
                    "type": "MemberExpression",
                    "start": 720,
                    "end": 731,
                    "object": {
                      "type": "MemberExpression",
                      "start": 720,
                      "end": 724,
                      "object": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 722,
                        "end": 723,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "property": {
                      "type": "Literal",
                      "start": 725,
                      "end": 730,
                      "value": "sub",
                      "raw": "\"sub\""
                    },
                    "optional": false,
                    "computed": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 737,
                    "decorators": [],
                    "name": "under",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Literal",
                  "start": 738,
                  "end": 745,
                  "value": "shape",
                  "raw": "\"shape\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Literal",
                "start": 747,
                "end": 756,
                "value": "dash-ok",
                "raw": "\"dash-ok\""
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 769,
                "end": 865,
                "test": {
                  "type": "Literal",
                  "start": 774,
                  "end": 782,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 784,
                    "end": 865,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 791,
                      "end": 864,
                      "left": {
                        "type": "MemberExpression",
                        "start": 791,
                        "end": 826,
                        "object": {
                          "type": "MemberExpression",
                          "start": 791,
                          "end": 811,
                          "object": {
                            "type": "MemberExpression",
                            "start": 791,
                            "end": 805,
                            "object": {
                              "type": "MemberExpression",
                              "start": 791,
                              "end": 799,
                              "object": {
                                "type": "MemberExpression",
                                "start": 791,
                                "end": 795,
                                "object": {
                                  "type": "Identifier",
                                  "start": 791,
                                  "end": 792,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 793,
                                  "end": 794,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 796,
                                "end": 799,
                                "decorators": [],
                                "name": "sub",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 800,
                              "end": 805,
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 806,
                            "end": 811,
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 812,
                          "end": 825,
                          "value": "square-size",
                          "raw": "\"square-size\""
                        },
                        "optional": false,
                        "computed": true
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 829,
                        "end": 864,
                        "object": {
                          "type": "MemberExpression",
                          "start": 829,
                          "end": 849,
                          "object": {
                            "type": "MemberExpression",
                            "start": 829,
                            "end": 843,
                            "object": {
                              "type": "MemberExpression",
                              "start": 829,
                              "end": 837,
                              "object": {
                                "type": "MemberExpression",
                                "start": 829,
                                "end": 833,
                                "object": {
                                  "type": "Identifier",
                                  "start": 829,
                                  "end": 830,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 831,
                                  "end": 832,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 834,
                                "end": 837,
                                "decorators": [],
                                "name": "sub",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 838,
                              "end": 843,
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 844,
                            "end": 849,
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 850,
                          "end": 863,
                          "value": "square-size",
                          "raw": "\"square-size\""
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 874,
                "end": 977,
                "test": {
                  "type": "Literal",
                  "start": 879,
                  "end": 890,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 892,
                    "end": 977,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 899,
                      "end": 976,
                      "left": {
                        "type": "MemberExpression",
                        "start": 899,
                        "end": 937,
                        "object": {
                          "type": "MemberExpression",
                          "start": 899,
                          "end": 928,
                          "object": {
                            "type": "MemberExpression",
                            "start": 899,
                            "end": 919,
                            "object": {
                              "type": "MemberExpression",
                              "start": 899,
                              "end": 910,
                              "object": {
                                "type": "MemberExpression",
                                "start": 899,
                                "end": 903,
                                "object": {
                                  "type": "Identifier",
                                  "start": 899,
                                  "end": 900,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 901,
                                  "end": 902,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Literal",
                                "start": 904,
                                "end": 909,
                                "value": "sub",
                                "raw": "\"sub\""
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Literal",
                              "start": 911,
                              "end": 918,
                              "value": "under",
                              "raw": "\"under\""
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Literal",
                            "start": 920,
                            "end": 927,
                            "value": "shape",
                            "raw": "\"shape\""
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Literal",
                          "start": 929,
                          "end": 936,
                          "value": "width",
                          "raw": "\"width\""
                        },
                        "optional": false,
                        "computed": true
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 940,
                        "end": 976,
                        "object": {
                          "type": "MemberExpression",
                          "start": 940,
                          "end": 969,
                          "object": {
                            "type": "MemberExpression",
                            "start": 940,
                            "end": 960,
                            "object": {
                              "type": "MemberExpression",
                              "start": 940,
                              "end": 951,
                              "object": {
                                "type": "MemberExpression",
                                "start": 940,
                                "end": 944,
                                "object": {
                                  "type": "Identifier",
                                  "start": 940,
                                  "end": 941,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 942,
                                  "end": 943,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Literal",
                                "start": 945,
                                "end": 950,
                                "value": "sub",
                                "raw": "\"sub\""
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Literal",
                              "start": 952,
                              "end": 959,
                              "value": "under",
                              "raw": "\"under\""
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Literal",
                            "start": 961,
                            "end": 968,
                            "value": "shape",
                            "raw": "\"shape\""
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 970,
                          "end": 976,
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 986,
                "end": 1085,
                "test": {
                  "type": "Literal",
                  "start": 991,
                  "end": 999,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1001,
                    "end": 1085,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1008,
                      "end": 1084,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1008,
                        "end": 1048,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1008,
                          "end": 1015,
                          "object": {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1012,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1013,
                            "end": 1015,
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1018,
                          "end": 1048,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1018,
                            "end": 1041,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1018,
                              "end": 1032,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1018,
                                "end": 1026,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1018,
                                  "end": 1022,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1018,
                                    "end": 1019,
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "start": 1020,
                                    "end": 1021,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1023,
                                  "end": 1026,
                                  "decorators": [],
                                  "name": "sub",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1027,
                                "end": 1032,
                                "decorators": [],
                                "name": "under",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 1033,
                              "end": 1040,
                              "value": "shape",
                              "raw": "\"shape\""
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1042,
                            "end": 1048,
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1051,
                        "end": 1084,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1051,
                          "end": 1074,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1051,
                            "end": 1068,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1051,
                              "end": 1062,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1051,
                                "end": 1055,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1051,
                                  "end": 1052,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 1053,
                                  "end": 1054,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "optional": false,
                                "computed": true
                              },
                              "property": {
                                "type": "Literal",
                                "start": 1056,
                                "end": 1061,
                                "value": "sub",
                                "raw": "\"sub\""
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1063,
                              "end": 1068,
                              "decorators": [],
                              "name": "under",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1069,
                            "end": 1074,
                            "decorators": [],
                            "name": "shape",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1075,
                          "end": 1083,
                          "value": "radius",
                          "raw": "\"radius\""
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1095,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1105,
        "end": 1106,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1107,
        "end": 1137,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1113,
            "end": 1121,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1113,
              "end": 1114,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1114,
              "end": 1120,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1116,
                "end": 1120,
                "literal": {
                  "type": "Literal",
                  "start": 1116,
                  "end": 1120,
                  "value": "xx",
                  "raw": "\"xx\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1126,
            "end": 1135,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1126,
              "end": 1127,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1127,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1129,
                "end": 1135
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
      "type": "TSInterfaceDeclaration",
      "start": 1139,
      "end": 1181,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1150,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1151,
        "end": 1181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1157,
            "end": 1165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1157,
              "end": 1158,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1158,
              "end": 1164,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1160,
                "end": 1164,
                "literal": {
                  "type": "Literal",
                  "start": 1160,
                  "end": 1164,
                  "value": "yy",
                  "raw": "\"yy\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1170,
            "end": 1179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1170,
              "end": 1171,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1171,
              "end": 1179,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1173,
                "end": 1179
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
      "start": 1183,
      "end": 1207,
      "id": {
        "type": "Identifier",
        "start": 1188,
        "end": 1189,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1192,
        "end": 1206,
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "start": 1193,
            "end": 1197,
            "literal": {
              "type": "Literal",
              "start": 1193,
              "end": 1197,
              "value": "aa",
              "raw": "\"aa\""
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 1199,
            "end": 1205
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1208,
      "end": 1232,
      "id": {
        "type": "Identifier",
        "start": 1213,
        "end": 1214,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1217,
        "end": 1231,
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "start": 1218,
            "end": 1222,
            "literal": {
              "type": "Literal",
              "start": 1218,
              "end": 1222,
              "value": "bb",
              "raw": "\"bb\""
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 1224,
            "end": 1230
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1234,
      "end": 1249,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1240,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1243,
        "end": 1248,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1243,
            "end": 1244,
            "typeName": {
              "type": "Identifier",
              "start": 1243,
              "end": 1244,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1247,
            "end": 1248,
            "typeName": {
              "type": "Identifier",
              "start": 1247,
              "end": 1248,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1251,
      "end": 1266,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1257,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1260,
        "end": 1265,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1260,
            "end": 1261,
            "typeName": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1264,
            "end": 1265,
            "typeName": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1268,
      "end": 1810,
      "id": {
        "type": "Identifier",
        "start": 1277,
        "end": 1282,
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1283,
          "end": 1287,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1284,
            "end": 1287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1286,
              "end": 1287,
              "typeName": {
                "type": "Identifier",
                "start": 1286,
                "end": 1287,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1289,
          "end": 1293,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1290,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1292,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
                "decorators": [],
                "name": "C",
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
        "start": 1295,
        "end": 1810,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1301,
            "end": 1305,
            "expression": {
              "type": "MemberExpression",
              "start": 1301,
              "end": 1305,
              "object": {
                "type": "Identifier",
                "start": 1301,
                "end": 1302,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 1303,
                "end": 1304,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          },
          {
            "type": "SwitchStatement",
            "start": 1347,
            "end": 1552,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1355,
              "end": 1359,
              "object": {
                "type": "Identifier",
                "start": 1355,
                "end": 1356,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 1357,
                "end": 1358,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1371,
                "end": 1454,
                "test": {
                  "type": "Literal",
                  "start": 1376,
                  "end": 1380,
                  "value": "xx",
                  "raw": "\"xx\""
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1394,
                    "end": 1415,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1398,
                        "end": 1415,
                        "id": {
                          "type": "Identifier",
                          "start": 1398,
                          "end": 1408,
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1400,
                            "end": 1408,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1402,
                              "end": 1408
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1411,
                          "end": 1415,
                          "object": {
                            "type": "Identifier",
                            "start": 1411,
                            "end": 1412,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1413,
                            "end": 1414,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1448,
                    "end": 1454,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1463,
                "end": 1546,
                "test": {
                  "type": "Literal",
                  "start": 1468,
                  "end": 1472,
                  "value": "yy",
                  "raw": "\"yy\""
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1486,
                    "end": 1507,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1490,
                        "end": 1507,
                        "id": {
                          "type": "Identifier",
                          "start": 1490,
                          "end": 1500,
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1492,
                            "end": 1500,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1494,
                              "end": 1500
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1503,
                          "end": 1507,
                          "object": {
                            "type": "Identifier",
                            "start": 1503,
                            "end": 1504,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1505,
                            "end": 1506,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1540,
                    "end": 1546,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1557,
            "end": 1561,
            "expression": {
              "type": "MemberExpression",
              "start": 1557,
              "end": 1561,
              "object": {
                "type": "Identifier",
                "start": 1557,
                "end": 1558,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 1559,
                "end": 1560,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          },
          {
            "type": "SwitchStatement",
            "start": 1603,
            "end": 1808,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1611,
              "end": 1615,
              "object": {
                "type": "Identifier",
                "start": 1611,
                "end": 1612,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 1613,
                "end": 1614,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1627,
                "end": 1710,
                "test": {
                  "type": "Literal",
                  "start": 1632,
                  "end": 1636,
                  "value": "aa",
                  "raw": "\"aa\""
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1650,
                    "end": 1671,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1654,
                        "end": 1671,
                        "id": {
                          "type": "Identifier",
                          "start": 1654,
                          "end": 1664,
                          "decorators": [],
                          "name": "aa",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1656,
                            "end": 1664,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1658,
                              "end": 1664
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1667,
                          "end": 1671,
                          "object": {
                            "type": "Identifier",
                            "start": 1667,
                            "end": 1668,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1669,
                            "end": 1670,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1704,
                    "end": 1710,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1719,
                "end": 1802,
                "test": {
                  "type": "Literal",
                  "start": 1724,
                  "end": 1728,
                  "value": "bb",
                  "raw": "\"bb\""
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1742,
                    "end": 1763,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1746,
                        "end": 1763,
                        "id": {
                          "type": "Identifier",
                          "start": 1746,
                          "end": 1756,
                          "decorators": [],
                          "name": "bb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1748,
                            "end": 1756,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1750,
                              "end": 1756
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1759,
                          "end": 1763,
                          "object": {
                            "type": "Identifier",
                            "start": 1759,
                            "end": 1760,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1761,
                            "end": 1762,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1796,
                    "end": 1802,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1812,
      "end": 1905,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1819,
        "end": 1905,
        "id": {
          "type": "Identifier",
          "start": 1828,
          "end": 1829,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 1830,
            "end": 1853,
            "decorators": [],
            "name": "pair",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1834,
              "end": 1853,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1836,
                "end": 1853,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1837,
                    "end": 1843
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 1845,
                    "end": 1852,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1845,
                      "end": 1851
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1854,
          "end": 1862,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 1856,
            "end": 1862
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 1863,
          "end": 1905,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1869,
              "end": 1903,
              "argument": {
                "type": "ConditionalExpression",
                "start": 1876,
                "end": 1902,
                "test": {
                  "type": "MemberExpression",
                  "start": 1876,
                  "end": 1883,
                  "object": {
                    "type": "Identifier",
                    "start": 1876,
                    "end": 1880,
                    "decorators": [],
                    "name": "pair",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 1881,
                    "end": 1882,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": {
                  "type": "MemberExpression",
                  "start": 1886,
                  "end": 1893,
                  "object": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1890,
                    "decorators": [],
                    "name": "pair",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 1891,
                    "end": 1892,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "computed": true
                },
                "alternate": {
                  "type": "Literal",
                  "start": 1896,
                  "end": 1902,
                  "value": "nope",
                  "raw": "'nope'"
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
