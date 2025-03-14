__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1530,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 69,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 69,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 24,
                "end": 27,
                "literal": {
                  "type": "Literal",
                  "start": 24,
                  "end": 27,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 52,
            "end": 67,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 66,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 62,
                "end": 66
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 149,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 149,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 99,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 98,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 95,
                "end": 98,
                "literal": {
                  "type": "Literal",
                  "start": 95,
                  "end": 98,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 127,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 126,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 111,
                "end": 126,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 111,
                    "end": 117,
                    "literal": {
                      "type": "Literal",
                      "start": 111,
                      "end": 117,
                      "raw": "'none'",
                      "value": "none"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 120,
                    "end": 126,
                    "literal": {
                      "type": "Literal",
                      "start": 120,
                      "end": 126,
                      "raw": "'done'",
                      "value": "done"
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 132,
            "end": 147,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 138,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 146,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 179,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 179,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 163,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 164,
          "end": 174,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 174,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 169,
              "end": 174,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 173,
                  "end": 174,
                  "typeName": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "decorators": [],
                    "name": "Y",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 298,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 297,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 185,
            "end": 296,
            "properties": [
              {
                "type": "Property",
                "start": 191,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 200,
                  "raw": "'y'",
                  "value": "y"
                }
              },
              {
                "type": "Property",
                "start": 206,
                "end": 219,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 211,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 213,
                  "end": 219,
                  "raw": "'done'",
                  "value": "done"
                }
              },
              {
                "type": "Property",
                "start": 225,
                "end": 294,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 231,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 231,
                  "end": 294,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 234,
                    "end": 294,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 244,
                        "end": 249,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 258,
                        "end": 268,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 258,
                          "end": 267,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 258,
                            "end": 262
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 267,
                            "decorators": [],
                            "name": "type",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 277,
                        "end": 288,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 277,
                          "end": 287,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 287,
                            "decorators": [],
                            "name": "value",
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 300,
      "end": 371,
      "body": {
        "type": "TSInterfaceBody",
        "start": 313,
        "end": 371,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 319,
            "end": 330,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 324,
              "decorators": [],
              "name": "type1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 329,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 326,
                "end": 329,
                "literal": {
                  "type": "Literal",
                  "start": 326,
                  "end": 329,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 335,
            "end": 349,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 340,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 354,
            "end": 369,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 360,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 368,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 364,
                "end": 368
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "X2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 453,
      "body": {
        "type": "TSInterfaceBody",
        "start": 386,
        "end": 453,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 392,
            "end": 403,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 397,
              "decorators": [],
              "name": "type2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 402,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 399,
                "end": 402,
                "literal": {
                  "type": "Literal",
                  "start": 399,
                  "end": 402,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 408,
            "end": 431,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 413,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 413,
              "end": 430,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 415,
                "end": 430,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 415,
                    "end": 421,
                    "literal": {
                      "type": "Literal",
                      "start": 415,
                      "end": 421,
                      "raw": "'none'",
                      "value": "none"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 424,
                    "end": 430,
                    "literal": {
                      "type": "Literal",
                      "start": 424,
                      "end": 430,
                      "raw": "'done'",
                      "value": "done"
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 436,
            "end": 451,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 442,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 450,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 446,
                "end": 450
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 385,
        "decorators": [],
        "name": "Y2",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 455,
      "end": 486,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 486,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 468,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 469,
          "end": 481,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 472,
            "end": 481,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 474,
              "end": 481,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 476,
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 476,
                    "decorators": [],
                    "name": "X2",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 479,
                  "end": 481,
                  "typeName": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 481,
                    "decorators": [],
                    "name": "Y2",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 588,
      "expression": {
        "type": "CallExpression",
        "start": 488,
        "end": 587,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 493,
            "end": 586,
            "properties": [
              {
                "type": "Property",
                "start": 499,
                "end": 509,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 504,
                  "decorators": [],
                  "name": "type2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 509,
                  "raw": "'y'",
                  "value": "y"
                }
              },
              {
                "type": "Property",
                "start": 515,
                "end": 528,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 520,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 522,
                  "end": 528,
                  "raw": "'done'",
                  "value": "done"
                }
              },
              {
                "type": "Property",
                "start": 534,
                "end": 584,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 540,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 540,
                  "end": 584,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 543,
                    "end": 584,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 553,
                        "end": 558,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 553,
                          "end": 557
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 567,
                        "end": 578,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 567,
                          "end": 577,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 577,
                            "decorators": [],
                            "name": "value",
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 488,
          "end": 492,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 590,
      "end": 661,
      "body": {
        "type": "TSInterfaceBody",
        "start": 603,
        "end": 661,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 609,
            "end": 619,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 613,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 618,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 615,
                "end": 618,
                "literal": {
                  "type": "Literal",
                  "start": 615,
                  "end": 618,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 624,
            "end": 641,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 629,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 640,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 631,
                "end": 640,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 631,
                    "end": 632,
                    "literal": {
                      "type": "Literal",
                      "start": 631,
                      "end": 632,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 635,
                    "end": 636,
                    "literal": {
                      "type": "Literal",
                      "start": 635,
                      "end": 636,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 639,
                    "end": 640,
                    "literal": {
                      "type": "Literal",
                      "start": 639,
                      "end": 640,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 646,
            "end": 659,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 646,
              "end": 650,
              "decorators": [],
              "name": "xtra",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 658,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 652,
                "end": 658
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 600,
        "end": 602,
        "decorators": [],
        "name": "X3",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 663,
      "end": 737,
      "body": {
        "type": "TSInterfaceBody",
        "start": 676,
        "end": 737,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 682,
            "end": 692,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 682,
              "end": 686,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 691,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 688,
                "end": 691,
                "literal": {
                  "type": "Literal",
                  "start": 688,
                  "end": 691,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 697,
            "end": 717,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 702,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 716,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 704,
                "end": 716,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 704,
                    "end": 706,
                    "literal": {
                      "type": "Literal",
                      "start": 704,
                      "end": 706,
                      "raw": "11",
                      "value": 11
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 709,
                    "end": 711,
                    "literal": {
                      "type": "Literal",
                      "start": 709,
                      "end": 711,
                      "raw": "12",
                      "value": 12
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 714,
                    "end": 716,
                    "literal": {
                      "type": "Literal",
                      "start": 714,
                      "end": 716,
                      "raw": "13",
                      "value": 13
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 722,
            "end": 735,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 726,
              "decorators": [],
              "name": "ytra",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 726,
              "end": 734,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 728,
                "end": 734
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "decorators": [],
        "name": "Y3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 803,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 754,
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 745,
              "end": 754,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 747,
                "end": 754,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 747,
                    "end": 749,
                    "typeName": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 749,
                      "decorators": [],
                      "name": "X3",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 752,
                    "end": 754,
                    "typeName": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 754,
                      "decorators": [],
                      "name": "Y3",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 757,
            "end": 803,
            "properties": [
              {
                "type": "Property",
                "start": 763,
                "end": 772,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 767,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 769,
                  "end": 772,
                  "raw": "'y'",
                  "value": "y"
                }
              },
              {
                "type": "Property",
                "start": 778,
                "end": 787,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 783,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 785,
                  "end": 787,
                  "raw": "11",
                  "value": 11
                }
              },
              {
                "type": "Property",
                "start": 793,
                "end": 801,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 797,
                  "decorators": [],
                  "name": "ytra",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 799,
                  "end": 801,
                  "raw": "12",
                  "value": 12
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 806,
      "end": 809,
      "expression": {
        "type": "Identifier",
        "start": 806,
        "end": 808,
        "decorators": [],
        "name": "xy",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 812,
      "end": 894,
      "body": {
        "type": "TSInterfaceBody",
        "start": 828,
        "end": 894,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 834,
            "end": 841,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 835,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 835,
              "end": 840,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 837,
                "end": 840,
                "literal": {
                  "type": "Literal",
                  "start": 837,
                  "end": 840,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 846,
            "end": 853,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 846,
              "end": 847,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 847,
              "end": 852,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 849,
                "end": 852,
                "literal": {
                  "type": "Literal",
                  "start": 849,
                  "end": 852,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 858,
            "end": 872,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 863,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 871,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 865,
                "end": 871
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 877,
            "end": 892,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 877,
              "end": 883,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 885,
              "end": 891,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 887,
                "end": 891
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 822,
        "end": 827,
        "decorators": [],
        "name": "LikeA",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 896,
      "end": 980,
      "body": {
        "type": "TSInterfaceBody",
        "start": 912,
        "end": 980,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 918,
            "end": 926,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 918,
              "end": 919,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 919,
              "end": 925,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 921,
                "end": 925,
                "literal": {
                  "type": "Literal",
                  "start": 921,
                  "end": 925,
                  "raw": "'xx'",
                  "value": "xx"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 931,
            "end": 939,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 931,
              "end": 932,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 938,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 934,
                "end": 938,
                "literal": {
                  "type": "Literal",
                  "start": 934,
                  "end": 938,
                  "raw": "'yy'",
                  "value": "yy"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 944,
            "end": 958,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 949,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 957,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 951,
                "end": 957
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 963,
            "end": 978,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 963,
              "end": 969,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 971,
              "end": 977,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 973,
                "end": 977
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 906,
        "end": 911,
        "decorators": [],
        "name": "LikeB",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 982,
      "end": 1140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 986,
          "end": 1139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 986,
            "end": 1004,
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 989,
              "end": 1004,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 991,
                "end": 1004,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 991,
                    "end": 996,
                    "typeName": {
                      "type": "Identifier",
                      "start": 991,
                      "end": 996,
                      "decorators": [],
                      "name": "LikeA",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 999,
                    "end": 1004,
                    "typeName": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1004,
                      "decorators": [],
                      "name": "LikeB",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1007,
            "end": 1139,
            "properties": [
              {
                "type": "Property",
                "start": 1013,
                "end": 1019,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1016,
                  "end": 1019,
                  "raw": "'x'",
                  "value": "x"
                }
              },
              {
                "type": "Property",
                "start": 1025,
                "end": 1031,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1026,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1028,
                  "end": 1031,
                  "raw": "'y'",
                  "value": "y"
                }
              },
              {
                "type": "Property",
                "start": 1037,
                "end": 1049,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1037,
                  "end": 1042,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1044,
                  "end": 1049,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              },
              {
                "type": "Property",
                "start": 1055,
                "end": 1137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1061,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1061,
                  "end": 1137,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1064,
                    "end": 1137,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1074,
                        "end": 1079,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1074,
                          "end": 1078
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1088,
                        "end": 1095,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1088,
                          "end": 1094,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1088,
                            "end": 1092
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1093,
                            "end": 1094,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1104,
                        "end": 1111,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1104,
                          "end": 1110,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1104,
                            "end": 1108
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1109,
                            "end": 1110,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1120,
                        "end": 1131,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1120,
                          "end": 1130,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1120,
                            "end": 1124
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1125,
                            "end": 1130,
                            "decorators": [],
                            "name": "value",
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1142,
      "end": 1146,
      "expression": {
        "type": "Identifier",
        "start": 1142,
        "end": 1145,
        "decorators": [],
        "name": "xyz",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1170,
      "end": 1259,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1191,
        "end": 1259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1195,
            "end": 1211,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1195,
              "end": 1199,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1200,
              "end": 1210,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1202,
                "end": 1210,
                "literal": {
                  "type": "Literal",
                  "start": 1202,
                  "end": 1210,
                  "raw": "'object'",
                  "value": "object"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1214,
            "end": 1257,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1219,
              "decorators": [],
              "name": "items",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1219,
              "end": 1256,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1221,
                "end": 1256,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1227,
                    "end": 1252,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1228,
                        "end": 1237,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1229,
                          "end": 1237,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1231,
                            "end": 1237
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1238,
                      "end": 1251,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1240,
                        "end": 1251,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1240,
                          "end": 1251,
                          "decorators": [],
                          "name": "TestGeneric",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1190,
        "decorators": [],
        "name": "TestObject",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1261,
      "end": 1303,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1282,
        "end": 1303,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1286,
            "end": 1301,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1286,
              "end": 1290,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1290,
              "end": 1300,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1292,
                "end": 1300,
                "literal": {
                  "type": "Literal",
                  "start": 1292,
                  "end": 1300,
                  "raw": "'string'",
                  "value": "string"
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
        "start": 1271,
        "end": 1281,
        "decorators": [],
        "name": "TestString",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1305,
      "end": 1374,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1310,
        "end": 1321,
        "decorators": [],
        "name": "TestGeneric",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1324,
        "end": 1373,
        "types": [
          {
            "type": "TSUnionType",
            "start": 1325,
            "end": 1348,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1325,
                "end": 1335,
                "typeName": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1335,
                  "decorators": [],
                  "name": "TestString",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1338,
                "end": 1348,
                "typeName": {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1348,
                  "decorators": [],
                  "name": "TestObject",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1352,
            "end": 1373,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 1354,
                "end": 1371,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1364,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1356,
                      "end": 1364,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1358,
                        "end": 1364
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1365,
                  "end": 1370,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1367,
                    "end": 1370
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1376,
      "end": 1529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1382,
          "end": 1528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1382,
            "end": 1399,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1386,
              "end": 1399,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1388,
                "end": 1399,
                "typeName": {
                  "type": "Identifier",
                  "start": 1388,
                  "end": 1399,
                  "decorators": [],
                  "name": "TestGeneric",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1402,
            "end": 1528,
            "properties": [
              {
                "type": "Property",
                "start": 1406,
                "end": 1526,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1411,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1413,
                  "end": 1526,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1419,
                      "end": 1444,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1419,
                        "end": 1424,
                        "decorators": [],
                        "name": "hello",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1426,
                        "end": 1444,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1428,
                            "end": 1442,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1428,
                              "end": 1432,
                              "decorators": [],
                              "name": "type",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1434,
                              "end": 1442,
                              "raw": "'string'",
                              "value": "string"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1450,
                      "end": 1522,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1455,
                        "decorators": [],
                        "name": "world",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1457,
                        "end": 1522,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1465,
                            "end": 1516,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1465,
                              "end": 1470,
                              "decorators": [],
                              "name": "items",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 1472,
                              "end": 1516,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1482,
                                  "end": 1508,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1482,
                                    "end": 1488,
                                    "decorators": [],
                                    "name": "nested",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 1490,
                                    "end": 1508,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1492,
                                        "end": 1506,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1492,
                                          "end": 1496,
                                          "decorators": [],
                                          "name": "type",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Literal",
                                          "start": 1498,
                                          "end": 1506,
                                          "raw": "'string'",
                                          "value": "string"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
