__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2960,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
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
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 38,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 37,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 29,
                "end": 37,
                "literal": {
                  "type": "Literal",
                  "start": 29,
                  "end": 37,
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
            "start": 43,
            "end": 56,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
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
      "start": 60,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 79,
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 145,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 103,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 92,
                "end": 103,
                "literal": {
                  "type": "Literal",
                  "start": 92,
                  "end": 103,
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
            "start": 109,
            "end": 123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 116,
                "end": 122
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 128,
            "end": 143,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 134,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
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
      "start": 147,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 207,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 185,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 174,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 184,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 176,
                "end": 184,
                "literal": {
                  "type": "Literal",
                  "start": 176,
                  "end": 184,
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
            "start": 190,
            "end": 205,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 196,
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
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
      "start": 209,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 219,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 222,
        "end": 249,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 222,
            "end": 228,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 228,
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 231,
            "end": 240,
            "typeName": {
              "type": "Identifier",
              "start": 231,
              "end": 240,
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 243,
            "end": 249,
            "typeName": {
              "type": "Identifier",
              "start": 243,
              "end": 249,
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
      "type": "FunctionDeclaration",
      "start": 252,
      "end": 552,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 266,
        "decorators": [],
        "name": "area1",
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
          "start": 267,
          "end": 275,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 268,
            "end": 275,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 270,
              "end": 275,
              "typeName": {
                "type": "Identifier",
                "start": 270,
                "end": 275,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 552,
        "body": [
          {
            "type": "IfStatement",
            "start": 283,
            "end": 550,
            "test": {
              "type": "BinaryExpression",
              "start": 287,
              "end": 306,
              "left": {
                "type": "MemberExpression",
                "start": 287,
                "end": 293,
                "object": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 293,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 298,
                "end": 306,
                "value": "square",
                "raw": "\"square\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 308,
              "end": 347,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 318,
                  "end": 341,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 325,
                    "end": 340,
                    "left": {
                      "type": "MemberExpression",
                      "start": 325,
                      "end": 331,
                      "object": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 331,
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "MemberExpression",
                      "start": 334,
                      "end": 340,
                      "object": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 335,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 340,
                        "decorators": [],
                        "name": "size",
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
            "alternate": {
              "type": "IfStatement",
              "start": 357,
              "end": 550,
              "test": {
                "type": "BinaryExpression",
                "start": 361,
                "end": 380,
                "left": {
                  "type": "MemberExpression",
                  "start": 361,
                  "end": 367,
                  "object": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 367,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 372,
                  "end": 380,
                  "value": "circle",
                  "raw": "\"circle\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 382,
                "end": 435,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 392,
                    "end": 429,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 399,
                      "end": 428,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 399,
                        "end": 417,
                        "left": {
                          "type": "MemberExpression",
                          "start": 399,
                          "end": 406,
                          "object": {
                            "type": "Identifier",
                            "start": 399,
                            "end": 403,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 406,
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
                          "start": 409,
                          "end": 417,
                          "object": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 410,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 411,
                            "end": 417,
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
                        "start": 420,
                        "end": 428,
                        "object": {
                          "type": "Identifier",
                          "start": 420,
                          "end": 421,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 428,
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
              },
              "alternate": {
                "type": "IfStatement",
                "start": 445,
                "end": 550,
                "test": {
                  "type": "BinaryExpression",
                  "start": 449,
                  "end": 471,
                  "left": {
                    "type": "MemberExpression",
                    "start": 449,
                    "end": 455,
                    "object": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 455,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 460,
                    "end": 471,
                    "value": "rectangle",
                    "raw": "\"rectangle\""
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 473,
                  "end": 515,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 483,
                      "end": 509,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 490,
                        "end": 508,
                        "left": {
                          "type": "MemberExpression",
                          "start": 490,
                          "end": 497,
                          "object": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 491,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 497,
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
                          "start": 500,
                          "end": 508,
                          "object": {
                            "type": "Identifier",
                            "start": 500,
                            "end": 501,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 502,
                            "end": 508,
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
                "alternate": {
                  "type": "BlockStatement",
                  "start": 525,
                  "end": 550,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 535,
                      "end": 544,
                      "argument": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 554,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 563,
        "end": 568,
        "decorators": [],
        "name": "area2",
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
          "start": 569,
          "end": 577,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 570,
            "end": 577,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 572,
              "end": 577,
              "typeName": {
                "type": "Identifier",
                "start": 572,
                "end": 577,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 771,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 585,
            "end": 769,
            "discriminant": {
              "type": "MemberExpression",
              "start": 593,
              "end": 599,
              "object": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 595,
                "end": 599,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 611,
                "end": 649,
                "test": {
                  "type": "Literal",
                  "start": 616,
                  "end": 624,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 626,
                    "end": 649,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 633,
                      "end": 648,
                      "left": {
                        "type": "MemberExpression",
                        "start": 633,
                        "end": 639,
                        "object": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 634,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 635,
                          "end": 639,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 642,
                        "end": 648,
                        "object": {
                          "type": "Identifier",
                          "start": 642,
                          "end": 643,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 648,
                          "decorators": [],
                          "name": "size",
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
                "start": 658,
                "end": 702,
                "test": {
                  "type": "Literal",
                  "start": 663,
                  "end": 674,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 676,
                    "end": 702,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 683,
                      "end": 701,
                      "left": {
                        "type": "MemberExpression",
                        "start": 683,
                        "end": 690,
                        "object": {
                          "type": "Identifier",
                          "start": 683,
                          "end": 684,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 685,
                          "end": 690,
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
                        "start": 693,
                        "end": 701,
                        "object": {
                          "type": "Identifier",
                          "start": 693,
                          "end": 694,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 695,
                          "end": 701,
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
                "start": 711,
                "end": 763,
                "test": {
                  "type": "Literal",
                  "start": 716,
                  "end": 724,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 726,
                    "end": 763,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 733,
                      "end": 762,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 733,
                        "end": 751,
                        "left": {
                          "type": "MemberExpression",
                          "start": 733,
                          "end": 740,
                          "object": {
                            "type": "Identifier",
                            "start": 733,
                            "end": 737,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 738,
                            "end": 740,
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
                          "start": 743,
                          "end": 751,
                          "object": {
                            "type": "Identifier",
                            "start": 743,
                            "end": 744,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 745,
                            "end": 751,
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
                        "start": 754,
                        "end": 762,
                        "object": {
                          "type": "Identifier",
                          "start": 754,
                          "end": 755,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 762,
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
      "start": 773,
      "end": 862,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 793,
        "decorators": [],
        "name": "assertNever",
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
          "start": 794,
          "end": 802,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 795,
            "end": 802,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 797,
              "end": 802
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 803,
        "end": 810,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 805,
          "end": 810
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 811,
        "end": 862,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 817,
            "end": 860,
            "argument": {
              "type": "NewExpression",
              "start": 823,
              "end": 859,
              "callee": {
                "type": "Identifier",
                "start": 827,
                "end": 832,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 833,
                  "end": 858,
                  "left": {
                    "type": "Literal",
                    "start": 833,
                    "end": 854,
                    "value": "Unexpected object: ",
                    "raw": "\"Unexpected object: \""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 857,
                    "end": 858,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 864,
      "end": 1121,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 878,
        "decorators": [],
        "name": "area3",
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
          "start": 879,
          "end": 887,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 880,
            "end": 887,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 882,
              "end": 887,
              "typeName": {
                "type": "Identifier",
                "start": 882,
                "end": 887,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 889,
        "end": 1121,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 895,
            "end": 1119,
            "discriminant": {
              "type": "MemberExpression",
              "start": 903,
              "end": 909,
              "object": {
                "type": "Identifier",
                "start": 903,
                "end": 904,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 905,
                "end": 909,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 921,
                "end": 959,
                "test": {
                  "type": "Literal",
                  "start": 926,
                  "end": 934,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 936,
                    "end": 959,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 943,
                      "end": 958,
                      "left": {
                        "type": "MemberExpression",
                        "start": 943,
                        "end": 949,
                        "object": {
                          "type": "Identifier",
                          "start": 943,
                          "end": 944,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 949,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 952,
                        "end": 958,
                        "object": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 953,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 954,
                          "end": 958,
                          "decorators": [],
                          "name": "size",
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
                "start": 968,
                "end": 1012,
                "test": {
                  "type": "Literal",
                  "start": 973,
                  "end": 984,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 986,
                    "end": 1012,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 993,
                      "end": 1011,
                      "left": {
                        "type": "MemberExpression",
                        "start": 993,
                        "end": 1000,
                        "object": {
                          "type": "Identifier",
                          "start": 993,
                          "end": 994,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 995,
                          "end": 1000,
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
                        "start": 1003,
                        "end": 1011,
                        "object": {
                          "type": "Identifier",
                          "start": 1003,
                          "end": 1004,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1005,
                          "end": 1011,
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
                "start": 1021,
                "end": 1073,
                "test": {
                  "type": "Literal",
                  "start": 1026,
                  "end": 1034,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1036,
                    "end": 1073,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1043,
                      "end": 1072,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1043,
                        "end": 1061,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1043,
                          "end": 1050,
                          "object": {
                            "type": "Identifier",
                            "start": 1043,
                            "end": 1047,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1048,
                            "end": 1050,
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
                          "start": 1053,
                          "end": 1061,
                          "object": {
                            "type": "Identifier",
                            "start": 1053,
                            "end": 1054,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1055,
                            "end": 1061,
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
                        "start": 1064,
                        "end": 1072,
                        "object": {
                          "type": "Identifier",
                          "start": 1064,
                          "end": 1065,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1066,
                          "end": 1072,
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
              },
              {
                "type": "SwitchCase",
                "start": 1082,
                "end": 1113,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1091,
                    "end": 1113,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1098,
                      "end": 1112,
                      "callee": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1109,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1111,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
      "start": 1123,
      "end": 1367,
      "id": {
        "type": "Identifier",
        "start": 1132,
        "end": 1137,
        "decorators": [],
        "name": "area4",
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
          "start": 1138,
          "end": 1146,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1139,
            "end": 1146,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1141,
              "end": 1146,
              "typeName": {
                "type": "Identifier",
                "start": 1141,
                "end": 1146,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1148,
        "end": 1367,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1154,
            "end": 1338,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1162,
              "end": 1168,
              "object": {
                "type": "Identifier",
                "start": 1162,
                "end": 1163,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1164,
                "end": 1168,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1180,
                "end": 1218,
                "test": {
                  "type": "Literal",
                  "start": 1185,
                  "end": 1193,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1195,
                    "end": 1218,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1202,
                      "end": 1217,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1202,
                        "end": 1208,
                        "object": {
                          "type": "Identifier",
                          "start": 1202,
                          "end": 1203,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1204,
                          "end": 1208,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1211,
                        "end": 1217,
                        "object": {
                          "type": "Identifier",
                          "start": 1211,
                          "end": 1212,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1213,
                          "end": 1217,
                          "decorators": [],
                          "name": "size",
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
                "start": 1227,
                "end": 1271,
                "test": {
                  "type": "Literal",
                  "start": 1232,
                  "end": 1243,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1245,
                    "end": 1271,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1252,
                      "end": 1270,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1252,
                        "end": 1259,
                        "object": {
                          "type": "Identifier",
                          "start": 1252,
                          "end": 1253,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1254,
                          "end": 1259,
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
                        "start": 1262,
                        "end": 1270,
                        "object": {
                          "type": "Identifier",
                          "start": 1262,
                          "end": 1263,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1270,
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
                "start": 1280,
                "end": 1332,
                "test": {
                  "type": "Literal",
                  "start": 1285,
                  "end": 1293,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1295,
                    "end": 1332,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1302,
                      "end": 1331,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1302,
                        "end": 1320,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1302,
                          "end": 1309,
                          "object": {
                            "type": "Identifier",
                            "start": 1302,
                            "end": 1306,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1307,
                            "end": 1309,
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
                          "start": 1312,
                          "end": 1320,
                          "object": {
                            "type": "Identifier",
                            "start": 1312,
                            "end": 1313,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1314,
                            "end": 1320,
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
                        "start": 1323,
                        "end": 1331,
                        "object": {
                          "type": "Identifier",
                          "start": 1323,
                          "end": 1324,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1325,
                          "end": 1331,
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
          },
          {
            "type": "ReturnStatement",
            "start": 1343,
            "end": 1365,
            "argument": {
              "type": "CallExpression",
              "start": 1350,
              "end": 1364,
              "callee": {
                "type": "Identifier",
                "start": 1350,
                "end": 1361,
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1363,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1369,
      "end": 1470,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1381,
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1388,
        "end": 1469,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1388,
            "end": 1412,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1390,
                "end": 1400,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1390,
                  "end": 1394,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1394,
                  "end": 1399,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1396,
                    "end": 1399,
                    "literal": {
                      "type": "Literal",
                      "start": 1396,
                      "end": 1399,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1401,
                "end": 1410,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1402,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1402,
                  "end": 1410,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1404,
                    "end": 1410
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1419,
            "end": 1449,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1421,
                "end": 1437,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1425,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1425,
                  "end": 1436,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1427,
                    "end": 1436,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1427,
                        "end": 1430,
                        "literal": {
                          "type": "Literal",
                          "start": 1427,
                          "end": 1430,
                          "value": "B",
                          "raw": "\"B\""
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1433,
                        "end": 1436,
                        "literal": {
                          "type": "Literal",
                          "start": 1433,
                          "end": 1436,
                          "value": "C",
                          "raw": "\"C\""
                        }
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1438,
                "end": 1447,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1439,
                  "end": 1447,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1441,
                    "end": 1447
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1456,
            "end": 1469,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1458,
                "end": 1467,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1458,
                  "end": 1462,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1462,
                  "end": 1467,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1464,
                    "end": 1467,
                    "literal": {
                      "type": "Literal",
                      "start": 1464,
                      "end": 1467,
                      "value": "D",
                      "raw": "\"D\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1472,
      "end": 1700,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1483,
        "decorators": [],
        "name": "f1",
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
          "start": 1484,
          "end": 1494,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1485,
            "end": 1494,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1487,
              "end": 1494,
              "typeName": {
                "type": "Identifier",
                "start": 1487,
                "end": 1494,
                "decorators": [],
                "name": "Message",
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
        "start": 1496,
        "end": 1700,
        "body": [
          {
            "type": "IfStatement",
            "start": 1502,
            "end": 1698,
            "test": {
              "type": "BinaryExpression",
              "start": 1506,
              "end": 1520,
              "left": {
                "type": "MemberExpression",
                "start": 1506,
                "end": 1512,
                "object": {
                  "type": "Identifier",
                  "start": 1506,
                  "end": 1507,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1512,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1517,
                "end": 1520,
                "value": "A",
                "raw": "\"A\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1522,
              "end": 1569,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1532,
                  "end": 1534,
                  "expression": {
                    "type": "Identifier",
                    "start": 1532,
                    "end": 1533,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1579,
              "end": 1698,
              "test": {
                "type": "BinaryExpression",
                "start": 1583,
                "end": 1597,
                "left": {
                  "type": "MemberExpression",
                  "start": 1583,
                  "end": 1589,
                  "object": {
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1584,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1585,
                    "end": 1589,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1594,
                  "end": 1597,
                  "value": "D",
                  "raw": "\"D\""
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1599,
                "end": 1635,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1609,
                    "end": 1611,
                    "expression": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1610,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 1645,
                "end": 1698,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1655,
                    "end": 1657,
                    "expression": {
                      "type": "Identifier",
                      "start": 1655,
                      "end": 1656,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1702,
      "end": 1835,
      "id": {
        "type": "Identifier",
        "start": 1711,
        "end": 1713,
        "decorators": [],
        "name": "f2",
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
          "start": 1714,
          "end": 1724,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1715,
            "end": 1724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1717,
              "end": 1724,
              "typeName": {
                "type": "Identifier",
                "start": 1717,
                "end": 1724,
                "decorators": [],
                "name": "Message",
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
        "start": 1726,
        "end": 1835,
        "body": [
          {
            "type": "IfStatement",
            "start": 1732,
            "end": 1775,
            "test": {
              "type": "BinaryExpression",
              "start": 1736,
              "end": 1750,
              "left": {
                "type": "MemberExpression",
                "start": 1736,
                "end": 1742,
                "object": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1737,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1742,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1747,
                "end": 1750,
                "value": "A",
                "raw": "\"A\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1752,
              "end": 1775,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1762,
                  "end": 1769,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1780,
            "end": 1782,
            "expression": {
              "type": "Identifier",
              "start": 1780,
              "end": 1781,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1837,
      "end": 1917,
      "id": {
        "type": "Identifier",
        "start": 1846,
        "end": 1848,
        "decorators": [],
        "name": "f3",
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
          "start": 1849,
          "end": 1859,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1850,
            "end": 1859,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1852,
              "end": 1859,
              "typeName": {
                "type": "Identifier",
                "start": 1852,
                "end": 1859,
                "decorators": [],
                "name": "Message",
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
        "start": 1861,
        "end": 1917,
        "body": [
          {
            "type": "IfStatement",
            "start": 1867,
            "end": 1915,
            "test": {
              "type": "BinaryExpression",
              "start": 1871,
              "end": 1885,
              "left": {
                "type": "MemberExpression",
                "start": 1871,
                "end": 1877,
                "object": {
                  "type": "Identifier",
                  "start": 1871,
                  "end": 1872,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1877,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1882,
                "end": 1885,
                "value": "X",
                "raw": "\"X\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1887,
              "end": 1915,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1897,
                  "end": 1899,
                  "expression": {
                    "type": "Identifier",
                    "start": 1897,
                    "end": 1898,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1919,
      "end": 2045,
      "id": {
        "type": "Identifier",
        "start": 1928,
        "end": 1930,
        "decorators": [],
        "name": "f4",
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
          "start": 1931,
          "end": 1941,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1932,
            "end": 1941,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1934,
              "end": 1941,
              "typeName": {
                "type": "Identifier",
                "start": 1934,
                "end": 1941,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1943,
          "end": 1955,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1944,
            "end": 1955,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1946,
              "end": 1955,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1946,
                  "end": 1949,
                  "literal": {
                    "type": "Literal",
                    "start": 1946,
                    "end": 1949,
                    "value": "A",
                    "raw": "\"A\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1952,
                  "end": 1955,
                  "literal": {
                    "type": "Literal",
                    "start": 1952,
                    "end": 1955,
                    "value": "D",
                    "raw": "\"D\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1957,
        "end": 2045,
        "body": [
          {
            "type": "IfStatement",
            "start": 1963,
            "end": 2043,
            "test": {
              "type": "BinaryExpression",
              "start": 1967,
              "end": 1978,
              "left": {
                "type": "MemberExpression",
                "start": 1967,
                "end": 1973,
                "object": {
                  "type": "Identifier",
                  "start": 1967,
                  "end": 1968,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1969,
                  "end": 1973,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 1977,
                "end": 1978,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1980,
              "end": 2043,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1990,
                  "end": 1992,
                  "expression": {
                    "type": "Identifier",
                    "start": 1990,
                    "end": 1991,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2047,
      "end": 2320,
      "id": {
        "type": "Identifier",
        "start": 2056,
        "end": 2058,
        "decorators": [],
        "name": "f5",
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
          "start": 2059,
          "end": 2069,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2060,
            "end": 2069,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2062,
              "end": 2069,
              "typeName": {
                "type": "Identifier",
                "start": 2062,
                "end": 2069,
                "decorators": [],
                "name": "Message",
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
        "start": 2071,
        "end": 2320,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2077,
            "end": 2318,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2085,
              "end": 2091,
              "object": {
                "type": "Identifier",
                "start": 2085,
                "end": 2086,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2087,
                "end": 2091,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2103,
                "end": 2175,
                "test": {
                  "type": "Literal",
                  "start": 2108,
                  "end": 2111,
                  "value": "A",
                  "raw": "\"A\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2125,
                    "end": 2127,
                    "expression": {
                      "type": "Identifier",
                      "start": 2125,
                      "end": 2126,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2169,
                    "end": 2175,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2184,
                "end": 2245,
                "test": {
                  "type": "Literal",
                  "start": 2189,
                  "end": 2192,
                  "value": "D",
                  "raw": "\"D\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2206,
                    "end": 2208,
                    "expression": {
                      "type": "Identifier",
                      "start": 2206,
                      "end": 2207,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2239,
                    "end": 2245,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2254,
                "end": 2277,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2275,
                    "end": 2277,
                    "expression": {
                      "type": "Identifier",
                      "start": 2275,
                      "end": 2276,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
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
      "start": 2322,
      "end": 2603,
      "id": {
        "type": "Identifier",
        "start": 2331,
        "end": 2333,
        "decorators": [],
        "name": "f6",
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
          "start": 2334,
          "end": 2344,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2335,
            "end": 2344,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2337,
              "end": 2344,
              "typeName": {
                "type": "Identifier",
                "start": 2337,
                "end": 2344,
                "decorators": [],
                "name": "Message",
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
        "start": 2346,
        "end": 2603,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2352,
            "end": 2601,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2360,
              "end": 2366,
              "object": {
                "type": "Identifier",
                "start": 2360,
                "end": 2361,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2362,
                "end": 2366,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2378,
                "end": 2402,
                "test": {
                  "type": "Literal",
                  "start": 2383,
                  "end": 2386,
                  "value": "A",
                  "raw": "\"A\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2400,
                    "end": 2402,
                    "expression": {
                      "type": "Identifier",
                      "start": 2400,
                      "end": 2401,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2440,
                "end": 2528,
                "test": {
                  "type": "Literal",
                  "start": 2445,
                  "end": 2448,
                  "value": "D",
                  "raw": "\"D\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2462,
                    "end": 2464,
                    "expression": {
                      "type": "Identifier",
                      "start": 2462,
                      "end": 2463,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2522,
                    "end": 2528,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2537,
                "end": 2560,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2558,
                    "end": 2560,
                    "expression": {
                      "type": "Identifier",
                      "start": 2558,
                      "end": 2559,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
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
      "start": 2605,
      "end": 2774,
      "id": {
        "type": "Identifier",
        "start": 2614,
        "end": 2616,
        "decorators": [],
        "name": "f7",
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
          "start": 2617,
          "end": 2627,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2618,
            "end": 2627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2620,
              "end": 2627,
              "typeName": {
                "type": "Identifier",
                "start": 2620,
                "end": 2627,
                "decorators": [],
                "name": "Message",
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
        "start": 2629,
        "end": 2774,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2635,
            "end": 2714,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2643,
              "end": 2649,
              "object": {
                "type": "Identifier",
                "start": 2643,
                "end": 2644,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2645,
                "end": 2649,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2661,
                "end": 2670,
                "test": {
                  "type": "Literal",
                  "start": 2666,
                  "end": 2669,
                  "value": "A",
                  "raw": "\"A\""
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 2679,
                "end": 2708,
                "test": {
                  "type": "Literal",
                  "start": 2684,
                  "end": 2687,
                  "value": "B",
                  "raw": "\"B\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2701,
                    "end": 2708,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 2719,
            "end": 2721,
            "expression": {
              "type": "Identifier",
              "start": 2719,
              "end": 2720,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2776,
      "end": 2960,
      "id": {
        "type": "Identifier",
        "start": 2785,
        "end": 2787,
        "decorators": [],
        "name": "f8",
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
          "start": 2788,
          "end": 2798,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2789,
            "end": 2798,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2791,
              "end": 2798,
              "typeName": {
                "type": "Identifier",
                "start": 2791,
                "end": 2798,
                "decorators": [],
                "name": "Message",
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
        "start": 2800,
        "end": 2960,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2806,
            "end": 2916,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2814,
              "end": 2820,
              "object": {
                "type": "Identifier",
                "start": 2814,
                "end": 2815,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2816,
                "end": 2820,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2832,
                "end": 2861,
                "test": {
                  "type": "Literal",
                  "start": 2837,
                  "end": 2840,
                  "value": "A",
                  "raw": "\"A\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2854,
                    "end": 2861,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2870,
                "end": 2910,
                "test": {
                  "type": "Literal",
                  "start": 2875,
                  "end": 2878,
                  "value": "D",
                  "raw": "\"D\""
                },
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "start": 2892,
                    "end": 2910,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2898,
                      "end": 2909,
                      "callee": {
                        "type": "Identifier",
                        "start": 2902,
                        "end": 2907,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 2921,
            "end": 2923,
            "expression": {
              "type": "Identifier",
              "start": 2921,
              "end": 2922,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
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
