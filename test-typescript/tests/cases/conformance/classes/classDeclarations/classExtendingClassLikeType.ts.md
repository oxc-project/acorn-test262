__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
          }
        ]
      },
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 42,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 85,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "name": "D0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 126,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 153,
        "name": "BaseConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 319,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 160,
            "end": 209,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 165,
                "end": 174,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 176,
                "end": 185,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  }
                },
                "decorators": [],
                "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 214,
            "end": 240,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 218,
              "end": 221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 219,
                  "end": 220,
                  "name": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 222,
                "end": 226,
                "name": "x",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 233,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 245,
            "end": 277,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 249,
              "end": 252,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 250,
                  "end": 251,
                  "name": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 257,
                "name": "x",
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
              {
                "type": "Identifier",
                "start": 259,
                "end": 263,
                "name": "y",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 274,
                      "end": 275,
                      "typeName": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 282,
            "end": 317,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 286,
              "end": 292,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 287,
                  "end": 288,
                  "name": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
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
                  "start": 290,
                  "end": 291,
                  "name": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 297,
                "name": "x",
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
              {
                "type": "Identifier",
                "start": 299,
                "end": 303,
                "name": "y",
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
                      "name": "U",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 316,
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 310,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 314,
                      "end": 315,
                      "typeName": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 321,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 345,
        "name": "getBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "BaseConstructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 367,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 375,
        "name": "D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 384,
        "end": 393,
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 391,
          "name": "getBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 394,
        "end": 496,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 400,
            "end": 494,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 411,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 411,
              "end": 494,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Super",
                        "start": 424,
                        "end": 429
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 430,
                          "end": 435,
                          "value": "abc",
                          "raw": "\"abc\""
                        },
                        {
                          "type": "Literal",
                          "start": 437,
                          "end": 442,
                          "value": "def",
                          "raw": "\"def\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 453,
                          "end": 457
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 459,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 462,
                        "end": 465,
                        "value": "x",
                        "raw": "\"x\""
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 475,
                          "end": 479
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 484,
                        "end": 487,
                        "value": "y",
                        "raw": "\"y\""
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 498,
      "end": 645,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 506,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 515,
        "end": 524,
        "callee": {
          "type": "Identifier",
          "start": 515,
          "end": 522,
          "name": "getBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 534,
        "end": 645,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 540,
            "end": 643,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 551,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 551,
              "end": 643,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Super",
                        "start": 564,
                        "end": 569
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 570,
                          "end": 572,
                          "value": 10,
                          "raw": "10"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 583,
                    "end": 597,
                    "expression": {
                      "type": "CallExpression",
                      "start": 583,
                      "end": 596,
                      "callee": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 589,
                          "end": 591,
                          "value": 10,
                          "raw": "10"
                        },
                        {
                          "type": "Literal",
                          "start": 593,
                          "end": 595,
                          "value": 20,
                          "raw": "20"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 606,
                          "end": 610
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 612,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 615,
                        "end": 616,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 626,
                          "end": 630
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 632,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 635,
                        "end": 636,
                        "value": 2,
                        "raw": "2"
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 653,
        "end": 655,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 664,
        "end": 673,
        "callee": {
          "type": "Identifier",
          "start": 664,
          "end": 671,
          "name": "getBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 691,
        "end": 788,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 697,
            "end": 786,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 708,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 708,
              "end": 786,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Super",
                        "start": 721,
                        "end": 726
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 727,
                          "end": 732,
                          "value": "abc",
                          "raw": "\"abc\""
                        },
                        {
                          "type": "Literal",
                          "start": 734,
                          "end": 736,
                          "value": 42,
                          "raw": "42"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 747,
                          "end": 751
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 752,
                          "end": 753,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 756,
                        "end": 759,
                        "value": "x",
                        "raw": "\"x\""
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 775,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 778,
                        "end": 779,
                        "value": 2,
                        "raw": "2"
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 850,
        "name": "D4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 859,
        "end": 868,
        "callee": {
          "type": "Identifier",
          "start": 859,
          "end": 866,
          "name": "getBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 894,
        "end": 897,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 927,
        "name": "BadBaseConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 928,
        "end": 1017,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 934,
            "end": 972,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 939,
                "end": 948,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 940,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 942,
                    "end": 948
                  }
                },
                "decorators": [],
                "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 955,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 977,
            "end": 1015,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 982,
                "end": 991,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 983,
                  "end": 991,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 985,
                    "end": 991
                  }
                },
                "decorators": [],
                "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 998,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1019,
      "end": 1069,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1046,
        "name": "getBadBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "BadBaseConstructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1113,
      "end": 1146,
      "id": {
        "type": "Identifier",
        "start": 1119,
        "end": 1121,
        "name": "D5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1130,
        "end": 1142,
        "callee": {
          "type": "Identifier",
          "start": 1130,
          "end": 1140,
          "name": "getBadBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 1143,
        "end": 1146,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
