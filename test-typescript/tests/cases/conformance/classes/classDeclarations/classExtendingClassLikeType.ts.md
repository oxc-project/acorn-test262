classExtendingClassLikeType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1147,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 44,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "U",
                  "optional": false
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
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 126,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "D0",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 106,
        "end": 122,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 107,
            "end": 113
          },
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 128,
      "end": 319,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 319,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 160,
            "end": 209,
            "params": [
              {
                "type": "Identifier",
                "start": 165,
                "end": 174,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 176,
                "end": 185,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 208,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 192,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 193,
                      "end": 199
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 214,
            "end": 240,
            "params": [
              {
                "type": "Identifier",
                "start": 222,
                "end": 226,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 223,
                  "end": 226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 239,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 233,
                  "end": 239,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 234,
                      "end": 235,
                      "typeName": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 233,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 218,
              "end": 221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 219,
                  "end": 220,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 245,
            "end": 277,
            "params": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 257,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 259,
                "end": 263,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 263,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 262,
                    "end": 263,
                    "typeName": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 263,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 276,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 270,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 274,
                      "end": 275,
                      "typeName": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 249,
              "end": 252,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 250,
                  "end": 251,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 282,
            "end": 317,
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 297,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 297,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 296,
                    "end": 297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 299,
                "end": 303,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 300,
                  "end": 303,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 302,
                    "end": 303,
                    "typeName": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 316,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 310,
                  "end": 316,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 311,
                      "end": 312,
                      "typeName": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 312,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 314,
                      "end": 315,
                      "typeName": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 310,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 286,
              "end": 292,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 287,
                  "end": 288,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 290,
                  "end": 291,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 153,
        "decorators": [],
        "name": "BaseConstructor",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 321,
      "end": 365,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 345,
        "decorators": [],
        "name": "getBase",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 364,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 349,
          "end": 364,
          "typeName": {
            "type": "Identifier",
            "start": 349,
            "end": 364,
            "decorators": [],
            "name": "BaseConstructor",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 367,
      "end": 496,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 394,
        "end": 496,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 494,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 411,
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
              "start": 411,
              "end": 494,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 414,
                "end": 494,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 424,
                    "end": 444,
                    "expression": {
                      "type": "CallExpression",
                      "start": 424,
                      "end": 443,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 430,
                          "end": 435,
                          "raw": "\"abc\"",
                          "value": "abc"
                        },
                        {
                          "type": "Literal",
                          "start": 437,
                          "end": 442,
                          "raw": "\"def\"",
                          "value": "def"
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 424,
                        "end": 429
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 453,
                    "end": 466,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 453,
                      "end": 465,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 453,
                        "end": 459,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 453,
                          "end": 457
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 459,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 462,
                        "end": 465,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 475,
                    "end": 488,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 475,
                      "end": 487,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 475,
                        "end": 481,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 475,
                          "end": 479
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 484,
                        "end": 487,
                        "raw": "\"y\"",
                        "value": "y"
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
        "start": 373,
        "end": 375,
        "decorators": [],
        "name": "D1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 384,
        "end": 393,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 391,
          "decorators": [],
          "name": "getBase",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 498,
      "end": 645,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 534,
        "end": 645,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 540,
            "end": 643,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 551,
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
              "start": 551,
              "end": 643,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 554,
                "end": 643,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 564,
                    "end": 574,
                    "expression": {
                      "type": "CallExpression",
                      "start": 564,
                      "end": 573,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 570,
                          "end": 572,
                          "raw": "10",
                          "value": 10
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 564,
                        "end": 569
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 583,
                    "end": 597,
                    "expression": {
                      "type": "CallExpression",
                      "start": 583,
                      "end": 596,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 589,
                          "end": 591,
                          "raw": "10",
                          "value": 10
                        },
                        {
                          "type": "Literal",
                          "start": 593,
                          "end": 595,
                          "raw": "20",
                          "value": 20
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 606,
                    "end": 617,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 606,
                      "end": 616,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 606,
                        "end": 612,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 606,
                          "end": 610
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 612,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 615,
                        "end": 616,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 626,
                    "end": 637,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 626,
                      "end": 636,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 626,
                        "end": 632,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 626,
                          "end": 630
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 632,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 635,
                        "end": 636,
                        "raw": "2",
                        "value": 2
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
        "start": 504,
        "end": 506,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 515,
        "end": 524,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 515,
          "end": 522,
          "decorators": [],
          "name": "getBase",
          "optional": false
        },
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 525,
        "end": 533,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 526,
            "end": 532
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 647,
      "end": 788,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 691,
        "end": 788,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 697,
            "end": 786,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 708,
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
              "start": 708,
              "end": 786,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 711,
                "end": 786,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 721,
                    "end": 738,
                    "expression": {
                      "type": "CallExpression",
                      "start": 721,
                      "end": 737,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 727,
                          "end": 732,
                          "raw": "\"abc\"",
                          "value": "abc"
                        },
                        {
                          "type": "Literal",
                          "start": 734,
                          "end": 736,
                          "raw": "42",
                          "value": 42
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 721,
                        "end": 726
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 747,
                    "end": 760,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 747,
                      "end": 759,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 747,
                        "end": 753,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 747,
                          "end": 751
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 752,
                          "end": 753,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 756,
                        "end": 759,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 769,
                    "end": 780,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 769,
                      "end": 779,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 769,
                        "end": 775,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 775,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 778,
                        "end": 779,
                        "raw": "2",
                        "value": 2
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
        "start": 653,
        "end": 655,
        "decorators": [],
        "name": "D3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 664,
        "end": 673,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 664,
          "end": 671,
          "decorators": [],
          "name": "getBase",
          "optional": false
        },
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 674,
        "end": 690,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 675,
            "end": 681
          },
          {
            "type": "TSNumberKeyword",
            "start": 683,
            "end": 689
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 842,
      "end": 897,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 894,
        "end": 897,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 850,
        "decorators": [],
        "name": "D4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 859,
        "end": 868,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 859,
          "end": 866,
          "decorators": [],
          "name": "getBase",
          "optional": false
        },
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 869,
        "end": 893,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 870,
            "end": 876
          },
          {
            "type": "TSStringKeyword",
            "start": 878,
            "end": 884
          },
          {
            "type": "TSStringKeyword",
            "start": 886,
            "end": 892
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 899,
      "end": 1017,
      "body": {
        "type": "TSInterfaceBody",
        "start": 928,
        "end": 1017,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 934,
            "end": 972,
            "params": [
              {
                "type": "Identifier",
                "start": 939,
                "end": 948,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 940,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 942,
                    "end": 948
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 971,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 971,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 955,
                  "end": 971,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 956,
                      "end": 962
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 964,
                      "end": 970
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 955,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 977,
            "end": 1015,
            "params": [
              {
                "type": "Identifier",
                "start": 982,
                "end": 991,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 983,
                  "end": 991,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 985,
                    "end": 991
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 992,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 994,
                "end": 1014,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 998,
                  "end": 1014,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 999,
                      "end": 1005
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1007,
                      "end": 1013
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 998,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
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
        "start": 909,
        "end": 927,
        "decorators": [],
        "name": "BadBaseConstructor",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1019,
      "end": 1069,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1046,
        "decorators": [],
        "name": "getBadBase",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1048,
        "end": 1068,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1050,
          "end": 1068,
          "typeName": {
            "type": "Identifier",
            "start": 1050,
            "end": 1068,
            "decorators": [],
            "name": "BadBaseConstructor",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1113,
      "end": 1146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1143,
        "end": 1146,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1119,
        "end": 1121,
        "decorators": [],
        "name": "D5",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 1130,
        "end": 1142,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1130,
          "end": 1140,
          "decorators": [],
          "name": "getBadBase",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
