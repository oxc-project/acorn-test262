__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 3901,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 42,
        "name": "truePromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 66,
            "end": 95,
            "argument": {
              "type": "CallExpression",
              "start": 73,
              "end": 94,
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 80,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 88,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 89,
                  "end": 93,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 59,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 59,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 53,
            "end": 59,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 54,
                "end": 58,
                "literal": {
                  "type": "Literal",
                  "start": 54,
                  "end": 58,
                  "value": true,
                  "raw": "true"
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "name": "Wrap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 134,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 128,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 136,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 149,
        "name": "wrap",
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
          "start": 153,
          "end": 161,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
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
        "start": 172,
        "end": 197,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 195,
            "argument": {
              "type": "ObjectExpression",
              "start": 185,
              "end": 194,
              "properties": [
                {
                  "type": "Property",
                  "start": 187,
                  "end": 192,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 192,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 192,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 171,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 164,
          "end": 171,
          "typeName": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "name": "Wrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 168,
            "end": 171,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
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
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 218,
        "name": "wrappedFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 261,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 240,
            "end": 259,
            "argument": {
              "type": "CallExpression",
              "start": 247,
              "end": 258,
              "callee": {
                "type": "Identifier",
                "start": 247,
                "end": 251,
                "name": "wrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 252,
                  "end": 257,
                  "value": "foo",
                  "raw": "'foo'"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 220,
        "end": 233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 222,
          "end": 233,
          "typeName": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "name": "Wrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 226,
            "end": 233,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 227,
                "end": 232,
                "literal": {
                  "type": "Literal",
                  "start": 227,
                  "end": 232,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 279,
        "name": "wrapBar",
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
          "start": 280,
          "end": 292,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 292,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 287,
              "end": 292,
              "literal": {
                "type": "Literal",
                "start": 287,
                "end": 292,
                "value": "bar",
                "raw": "'bar'"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 307,
        "end": 332,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 313,
            "end": 330,
            "argument": {
              "type": "ObjectExpression",
              "start": 320,
              "end": 329,
              "properties": [
                {
                  "type": "Property",
                  "start": 322,
                  "end": 327,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 327,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 327,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 293,
        "end": 306,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 295,
          "end": 306,
          "typeName": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
            "name": "Wrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 299,
            "end": 306,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 300,
                "end": 305,
                "literal": {
                  "type": "Literal",
                  "start": 300,
                  "end": 305,
                  "value": "bar",
                  "raw": "'bar'"
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 334,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 353,
        "name": "wrappedBar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 576,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 386,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 389,
                  "end": 394,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 432,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 406,
                "end": 431,
                "id": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 414,
                  "name": "inferred",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 417,
                  "end": 431,
                  "callee": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 424,
                    "name": "wrapBar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 425,
                      "end": 430,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 468,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 443,
                "end": 467,
                "id": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 450,
                  "name": "literal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 453,
                  "end": 467,
                  "callee": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 460,
                    "name": "wrapBar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 461,
                      "end": 466,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 473,
            "end": 502,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 493,
                  "name": "value2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 485,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 487,
                      "end": 493
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 496,
                  "end": 501,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 507,
            "end": 540,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 513,
                "end": 539,
                "id": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 521,
                  "name": "literal2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 524,
                  "end": 539,
                  "callee": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 531,
                    "name": "wrapBar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 532,
                      "end": 538,
                      "name": "value2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 555,
            "end": 574,
            "argument": {
              "type": "CallExpression",
              "start": 562,
              "end": 573,
              "callee": {
                "type": "Identifier",
                "start": 562,
                "end": 566,
                "name": "wrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 567,
                  "end": 572,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 355,
        "end": 368,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 357,
          "end": 368,
          "typeName": {
            "type": "Identifier",
            "start": 357,
            "end": 361,
            "name": "Wrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 361,
            "end": 368,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 362,
                "end": 367,
                "literal": {
                  "type": "Literal",
                  "start": 362,
                  "end": 367,
                  "value": "bar",
                  "raw": "'bar'"
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 578,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 597,
        "name": "wrappedBaz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 613,
        "end": 672,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 619,
            "end": 646,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 625,
                "end": 645,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 637,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 630,
                    "end": 637,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 632,
                      "end": 637,
                      "literal": {
                        "type": "Literal",
                        "start": 632,
                        "end": 637,
                        "value": "baz",
                        "raw": "'baz'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 640,
                  "end": 645,
                  "value": "baz",
                  "raw": "'baz'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 651,
            "end": 670,
            "argument": {
              "type": "CallExpression",
              "start": 658,
              "end": 669,
              "callee": {
                "type": "Identifier",
                "start": 658,
                "end": 662,
                "name": "wrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 663,
                  "end": 668,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 599,
        "end": 612,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 601,
          "end": 612,
          "typeName": {
            "type": "Identifier",
            "start": 601,
            "end": 605,
            "name": "Wrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 605,
            "end": 612,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 606,
                "end": 611,
                "literal": {
                  "type": "Literal",
                  "start": 606,
                  "end": 611,
                  "value": "baz",
                  "raw": "'baz'"
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 696,
      "end": 756,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 723,
        "name": "FolderContentItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 724,
        "end": 756,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 730,
            "end": 754,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 730,
              "end": 734,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 734,
              "end": 753,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 736,
                "end": 753,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 736,
                    "end": 744,
                    "literal": {
                      "type": "Literal",
                      "start": 736,
                      "end": 744,
                      "value": "folder",
                      "raw": "'folder'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 747,
                    "end": 753,
                    "literal": {
                      "type": "Literal",
                      "start": 747,
                      "end": 753,
                      "value": "file",
                      "raw": "'file'"
                    }
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
      "type": "VariableDeclaration",
      "start": 758,
      "end": 790,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 789,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 784,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 763,
              "end": 784,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 765,
                "end": 784,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 765,
                  "end": 782,
                  "typeName": {
                    "type": "Identifier",
                    "start": 765,
                    "end": 782,
                    "name": "FolderContentItem",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 787,
            "end": 789,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 791,
      "end": 842,
      "expression": {
        "type": "AssignmentExpression",
        "start": 791,
        "end": 841,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 791,
          "end": 792,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 795,
          "end": 841,
          "callee": {
            "type": "MemberExpression",
            "start": 795,
            "end": 814,
            "object": {
              "type": "ArrayExpression",
              "start": 795,
              "end": 810,
              "elements": [
                {
                  "type": "Literal",
                  "start": 796,
                  "end": 797,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 799,
                  "end": 800,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 802,
                  "end": 803,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 805,
                  "end": 806,
                  "value": 4,
                  "raw": "4"
                },
                {
                  "type": "Literal",
                  "start": 808,
                  "end": 809,
                  "value": 5,
                  "raw": "5"
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 811,
              "end": 814,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "ArrowFunctionExpression",
              "start": 815,
              "end": 840,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ObjectExpression",
                "start": 821,
                "end": 839,
                "properties": [
                  {
                    "type": "Property",
                    "start": 823,
                    "end": 837,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 827,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 829,
                      "end": 837,
                      "value": "folder",
                      "raw": "'folder'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 909,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 898,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 873,
              "end": 898,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 875,
                "end": 898,
                "typeName": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 880,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 880,
                  "end": 898,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 881,
                      "end": 897,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 882,
                          "end": 888
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 890,
                          "end": 896
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 901,
            "end": 909,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 902,
                "end": 908,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 903,
                    "end": 904,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 906,
                    "end": 907,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 995,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 915,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 915,
            "end": 949,
            "name": "mappedArr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 924,
              "end": 949,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 926,
                "end": 949,
                "typeName": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 931,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 931,
                  "end": 949,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 932,
                      "end": 948,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 933,
                          "end": 939
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 941,
                          "end": 947
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 952,
            "end": 995,
            "callee": {
              "type": "MemberExpression",
              "start": 952,
              "end": 959,
              "object": {
                "type": "Identifier",
                "start": 952,
                "end": 955,
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 956,
                "end": 959,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 960,
                "end": 994,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 961,
                    "end": 967,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 962,
                        "end": 963,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 965,
                        "end": 966,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 972,
                  "end": 994,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 978,
                      "end": 992,
                      "argument": {
                        "type": "ArrayExpression",
                        "start": 985,
                        "end": 991,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 986,
                            "end": 987,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 989,
                            "end": 990,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1019,
      "end": 1165,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 1026,
        "end": 1165,
        "id": {
          "type": "Identifier",
          "start": 1036,
          "end": 1054,
          "name": "DiagnosticSeverity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 1055,
          "end": 1165,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 1058,
              "end": 1081,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1065,
                "end": 1081,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1071,
                    "end": 1080,
                    "id": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1076,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1079,
                      "end": 1080,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1083,
              "end": 1108,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1090,
                "end": 1108,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1096,
                    "end": 1107,
                    "id": {
                      "type": "Identifier",
                      "start": 1096,
                      "end": 1103,
                      "name": "Warning",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1106,
                      "end": 1107,
                      "value": 2,
                      "raw": "2"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1110,
              "end": 1139,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1117,
                "end": 1139,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1123,
                    "end": 1138,
                    "id": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1134,
                      "name": "Information",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1137,
                      "end": 1138,
                      "value": 3,
                      "raw": "3"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1141,
              "end": 1163,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1148,
                "end": 1163,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1154,
                    "end": 1162,
                    "id": {
                      "type": "Identifier",
                      "start": 1154,
                      "end": 1158,
                      "name": "Hint",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1161,
                      "end": 1162,
                      "value": 4,
                      "raw": "4"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1167,
      "end": 1214,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1174,
        "end": 1214,
        "id": {
          "type": "Identifier",
          "start": 1179,
          "end": 1197,
          "name": "DiagnosticSeverity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1200,
          "end": 1213,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 1200,
              "end": 1201,
              "literal": {
                "type": "Literal",
                "start": 1200,
                "end": 1201,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1204,
              "end": 1205,
              "literal": {
                "type": "Literal",
                "start": 1204,
                "end": 1205,
                "value": 2,
                "raw": "2"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1208,
              "end": 1209,
              "literal": {
                "type": "Literal",
                "start": 1208,
                "end": 1209,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1212,
              "end": 1213,
              "literal": {
                "type": "Literal",
                "start": 1212,
                "end": 1213,
                "value": 4,
                "raw": "4"
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1216,
      "end": 1340,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1223,
        "end": 1340,
        "id": {
          "type": "Identifier",
          "start": 1233,
          "end": 1243,
          "name": "Diagnostic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1244,
          "end": 1340,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1247,
              "end": 1277,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1247,
                "end": 1255,
                "name": "severity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1256,
                "end": 1276,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1258,
                  "end": 1276,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1258,
                    "end": 1276,
                    "name": "DiagnosticSeverity",
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
              "start": 1279,
              "end": 1302,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1279,
                "end": 1283,
                "name": "code",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1284,
                "end": 1301,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 1286,
                  "end": 1301,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1286,
                      "end": 1292
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1295,
                      "end": 1301
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1304,
              "end": 1320,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1304,
                "end": 1310,
                "name": "source",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1311,
                "end": 1319,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1313,
                  "end": 1319
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1322,
              "end": 1338,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1322,
                "end": 1329,
                "name": "message",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1329,
                "end": 1337,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1331,
                  "end": 1337
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1342,
      "end": 1512,
      "id": {
        "type": "Identifier",
        "start": 1351,
        "end": 1354,
        "name": "bug",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1371,
        "end": 1512,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1374,
            "end": 1397,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1378,
                "end": 1396,
                "id": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1391,
                  "name": "values",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1384,
                    "end": 1391,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1386,
                      "end": 1391,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1386,
                        "end": 1389
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1394,
                  "end": 1396,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1399,
            "end": 1510,
            "argument": {
              "type": "CallExpression",
              "start": 1406,
              "end": 1509,
              "callee": {
                "type": "MemberExpression",
                "start": 1406,
                "end": 1416,
                "object": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1412,
                  "name": "values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1416,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1417,
                  "end": 1508,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1418,
                      "end": 1423,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1428,
                    "end": 1508,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1432,
                        "end": 1505,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 1439,
                          "end": 1505,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1444,
                              "end": 1478,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1444,
                                "end": 1452,
                                "name": "severity",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 1454,
                                "end": 1478,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1454,
                                  "end": 1472,
                                  "name": "DiagnosticSeverity",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1473,
                                  "end": 1478,
                                  "name": "Error",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1483,
                              "end": 1501,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1483,
                                "end": 1490,
                                "name": "message",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1492,
                                "end": 1501,
                                "value": "message",
                                "raw": "'message'"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1356,
        "end": 1370,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 1358,
          "end": 1370,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1358,
            "end": 1368,
            "typeName": {
              "type": "Identifier",
              "start": 1358,
              "end": 1368,
              "name": "Diagnostic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1536,
      "end": 1633,
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1556,
        "name": "objectToMap",
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
          "start": 1557,
          "end": 1565,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1560,
            "end": 1565,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1562,
              "end": 1565
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1567,
        "end": 1633,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1570,
            "end": 1631,
            "argument": {
              "type": "NewExpression",
              "start": 1577,
              "end": 1630,
              "callee": {
                "type": "Identifier",
                "start": 1581,
                "end": 1584,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 1585,
                  "end": 1629,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1585,
                    "end": 1605,
                    "object": {
                      "type": "CallExpression",
                      "start": 1585,
                      "end": 1601,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1585,
                        "end": 1596,
                        "object": {
                          "type": "Identifier",
                          "start": 1585,
                          "end": 1591,
                          "name": "Object",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1592,
                          "end": 1596,
                          "name": "keys",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1597,
                          "end": 1600,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1602,
                      "end": 1605,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1606,
                      "end": 1628,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1606,
                          "end": 1609,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "ArrayExpression",
                        "start": 1613,
                        "end": 1628,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 1614,
                            "end": 1617,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 1619,
                            "end": 1627,
                            "object": {
                              "type": "Identifier",
                              "start": 1619,
                              "end": 1622,
                              "name": "obj",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1623,
                              "end": 1626,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 1633,
      "end": 1634
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1658,
      "end": 1734,
      "id": {
        "type": "Identifier",
        "start": 1668,
        "end": 1674,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1675,
        "end": 1734,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1679,
            "end": 1732,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1679,
              "end": 1691,
              "name": "phoneNumbers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1691,
              "end": 1731,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1693,
                "end": 1731,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 1693,
                  "end": 1729,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1699,
                      "end": 1725,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1699,
                        "end": 1709,
                        "name": "__typename",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1709,
                        "end": 1724,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1711,
                          "end": 1724,
                          "literal": {
                            "type": "Literal",
                            "start": 1711,
                            "end": 1724,
                            "value": "PhoneNumber",
                            "raw": "'PhoneNumber'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
      "type": "FunctionDeclaration",
      "start": 1736,
      "end": 1862,
      "id": {
        "type": "Identifier",
        "start": 1745,
        "end": 1757,
        "name": "createPerson",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1768,
        "end": 1862,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1772,
            "end": 1860,
            "argument": {
              "type": "ObjectExpression",
              "start": 1779,
              "end": 1859,
              "properties": [
                {
                  "type": "Property",
                  "start": 1785,
                  "end": 1855,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1785,
                    "end": 1797,
                    "name": "phoneNumbers",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 1799,
                    "end": 1855,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1799,
                      "end": 1806,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 1799,
                        "end": 1802,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 1800,
                            "end": 1801,
                            "value": 1,
                            "raw": "1"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1803,
                        "end": 1806,
                        "name": "map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1807,
                        "end": 1854,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "ObjectExpression",
                          "start": 1814,
                          "end": 1853,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1822,
                              "end": 1847,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1822,
                                "end": 1832,
                                "name": "__typename",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1834,
                                "end": 1847,
                                "value": "PhoneNumber",
                                "raw": "'PhoneNumber'"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1759,
        "end": 1767,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1761,
          "end": 1767,
          "typeName": {
            "type": "Identifier",
            "start": 1761,
            "end": 1767,
            "name": "Person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1886,
      "end": 1913,
      "id": {
        "type": "Identifier",
        "start": 1891,
        "end": 1894,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1894,
        "end": 1897,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1895,
            "end": 1896,
            "name": {
              "type": "Identifier",
              "start": 1895,
              "end": 1896,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1900,
        "end": 1912,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1902,
            "end": 1910,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1902,
              "end": 1907,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1907,
              "end": 1910,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1909,
                "end": 1910,
                "typeName": {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1910,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1914,
      "end": 1956,
      "id": {
        "type": "Identifier",
        "start": 1931,
        "end": 1934,
        "name": "box",
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
          "start": 1938,
          "end": 1946,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1943,
            "end": 1946,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1945,
              "end": 1946,
              "typeName": {
                "type": "Identifier",
                "start": 1945,
                "end": 1946,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1934,
        "end": 1937,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1935,
            "end": 1936,
            "name": {
              "type": "Identifier",
              "start": 1935,
              "end": 1936,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1947,
        "end": 1955,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1949,
          "end": 1955,
          "typeName": {
            "type": "Identifier",
            "start": 1949,
            "end": 1952,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1952,
            "end": 1955,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1953,
                "end": 1954,
                "typeName": {
                  "type": "Identifier",
                  "start": 1953,
                  "end": 1954,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1958,
      "end": 2039,
      "id": {
        "type": "Identifier",
        "start": 1963,
        "end": 1975,
        "name": "WinCondition",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1982,
        "end": 2038,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1984,
            "end": 2015,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1986,
                "end": 1998,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1986,
                  "end": 1990,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1990,
                  "end": 1997,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1992,
                    "end": 1997,
                    "literal": {
                      "type": "Literal",
                      "start": 1992,
                      "end": 1997,
                      "value": "win",
                      "raw": "'win'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1999,
                "end": 2013,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1999,
                  "end": 2005,
                  "name": "player",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2005,
                  "end": 2013,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2007,
                    "end": 2013
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2022,
            "end": 2038,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2024,
                "end": 2036,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2024,
                  "end": 2028,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2028,
                  "end": 2036,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2030,
                    "end": 2036,
                    "literal": {
                      "type": "Literal",
                      "start": 2030,
                      "end": 2036,
                      "value": "draw",
                      "raw": "'draw'"
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
      "type": "VariableDeclaration",
      "start": 2041,
      "end": 2091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2045,
          "end": 2090,
          "id": {
            "type": "Identifier",
            "start": 2045,
            "end": 2066,
            "name": "zz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2047,
              "end": 2066,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2049,
                "end": 2066,
                "typeName": {
                  "type": "Identifier",
                  "start": 2049,
                  "end": 2052,
                  "name": "Box",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2052,
                  "end": 2066,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2053,
                      "end": 2065,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2053,
                        "end": 2065,
                        "name": "WinCondition",
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
          "init": {
            "type": "CallExpression",
            "start": 2069,
            "end": 2090,
            "callee": {
              "type": "Identifier",
              "start": 2069,
              "end": 2072,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2073,
                "end": 2089,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2075,
                    "end": 2087,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2075,
                      "end": 2079,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2081,
                      "end": 2087,
                      "value": "draw",
                      "raw": "'draw'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2093,
      "end": 2123,
      "id": {
        "type": "Identifier",
        "start": 2098,
        "end": 2105,
        "name": "WinType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2108,
        "end": 2122,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2108,
            "end": 2113,
            "literal": {
              "type": "Literal",
              "start": 2108,
              "end": 2113,
              "value": "win",
              "raw": "'win'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2116,
            "end": 2122,
            "literal": {
              "type": "Literal",
              "start": 2116,
              "end": 2122,
              "value": "draw",
              "raw": "'draw'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2125,
      "end": 2160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2129,
          "end": 2159,
          "id": {
            "type": "Identifier",
            "start": 2129,
            "end": 2145,
            "name": "yy",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2131,
              "end": 2145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2133,
                "end": 2145,
                "typeName": {
                  "type": "Identifier",
                  "start": 2133,
                  "end": 2136,
                  "name": "Box",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2136,
                  "end": 2145,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2137,
                      "end": 2144,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2137,
                        "end": 2144,
                        "name": "WinType",
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
          "init": {
            "type": "CallExpression",
            "start": 2148,
            "end": 2159,
            "callee": {
              "type": "Identifier",
              "start": 2148,
              "end": 2151,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2152,
                "end": 2158,
                "value": "draw",
                "raw": "'draw'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2184,
      "end": 2233,
      "id": {
        "type": "Identifier",
        "start": 2194,
        "end": 2196,
        "name": "OK",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2196,
        "end": 2199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2197,
            "end": 2198,
            "name": {
              "type": "Identifier",
              "start": 2197,
              "end": 2198,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 2200,
        "end": 2233,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2206,
            "end": 2217,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2206,
              "end": 2210,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2210,
              "end": 2216,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2212,
                "end": 2216,
                "literal": {
                  "type": "Literal",
                  "start": 2212,
                  "end": 2216,
                  "value": "OK",
                  "raw": "\"OK\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2222,
            "end": 2231,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2222,
              "end": 2227,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2227,
              "end": 2230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2229,
                "end": 2230,
                "typeName": {
                  "type": "Identifier",
                  "start": 2229,
                  "end": 2230,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2234,
      "end": 2337,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2241,
        "end": 2337,
        "id": {
          "type": "Identifier",
          "start": 2250,
          "end": 2252,
          "name": "ok",
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
            "start": 2256,
            "end": 2264,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2261,
              "end": 2264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2263,
                "end": 2264,
                "typeName": {
                  "type": "Identifier",
                  "start": 2263,
                  "end": 2264,
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
          "start": 2273,
          "end": 2337,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 2279,
              "end": 2335,
              "argument": {
                "type": "ObjectExpression",
                "start": 2286,
                "end": 2334,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2296,
                    "end": 2306,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2296,
                      "end": 2300,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2302,
                      "end": 2306,
                      "value": "OK",
                      "raw": "\"OK\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2316,
                    "end": 2328,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2316,
                      "end": 2321,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2323,
                      "end": 2328,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2252,
          "end": 2255,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2253,
              "end": 2254,
              "name": {
                "type": "Identifier",
                "start": 2253,
                "end": 2254,
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2265,
          "end": 2272,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2267,
            "end": 2272,
            "typeName": {
              "type": "Identifier",
              "start": 2267,
              "end": 2269,
              "name": "OK",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2269,
              "end": 2272,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2270,
                  "end": 2271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2270,
                    "end": 2271,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 2339,
      "end": 2392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2343,
          "end": 2391,
          "id": {
            "type": "Identifier",
            "start": 2343,
            "end": 2371,
            "name": "result",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2349,
              "end": 2371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2351,
                "end": 2371,
                "typeName": {
                  "type": "Identifier",
                  "start": 2351,
                  "end": 2353,
                  "name": "OK",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2353,
                  "end": 2371,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 2354,
                      "end": 2370,
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2355,
                          "end": 2361
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2363,
                          "end": 2369
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2374,
            "end": 2391,
            "callee": {
              "type": "Identifier",
              "start": 2374,
              "end": 2376,
              "name": "ok",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 2377,
                "end": 2390,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2378,
                    "end": 2385,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  {
                    "type": "Literal",
                    "start": 2387,
                    "end": 2389,
                    "value": 12,
                    "raw": "12"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2416,
      "end": 2469,
      "id": {
        "type": "Identifier",
        "start": 2426,
        "end": 2427,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2428,
        "end": 2469,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2434,
            "end": 2449,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2434,
              "end": 2438,
              "name": "code",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2438,
              "end": 2448,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2440,
                "end": 2448,
                "literal": {
                  "type": "Literal",
                  "start": 2440,
                  "end": 2448,
                  "value": "mapped",
                  "raw": "'mapped'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2454,
            "end": 2467,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2454,
              "end": 2458,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2458,
              "end": 2466,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2460,
                "end": 2466
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
      "type": "VariableDeclaration",
      "start": 2471,
      "end": 2572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2477,
          "end": 2571,
          "id": {
            "type": "Identifier",
            "start": 2477,
            "end": 2484,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2479,
              "end": 2484,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2481,
                "end": 2484,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2481,
                  "end": 2482,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2481,
                    "end": 2482,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2487,
            "end": 2571,
            "callee": {
              "type": "MemberExpression",
              "start": 2487,
              "end": 2501,
              "object": {
                "type": "ArrayExpression",
                "start": 2487,
                "end": 2497,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2488,
                    "end": 2491,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "Literal",
                    "start": 2493,
                    "end": 2496,
                    "value": "b",
                    "raw": "'b'"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 2498,
                "end": 2501,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2502,
                "end": 2570,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2502,
                    "end": 2506,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 2510,
                  "end": 2570,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2516,
                      "end": 2568,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 2523,
                        "end": 2568,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2533,
                            "end": 2547,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2533,
                              "end": 2537,
                              "name": "code",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2539,
                              "end": 2547,
                              "value": "mapped",
                              "raw": "'mapped'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2557,
                            "end": 2561,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2557,
                              "end": 2561,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2557,
                              "end": 2561,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2669,
      "end": 2762,
      "id": {
        "type": "Identifier",
        "start": 2674,
        "end": 2680,
        "name": "Player",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2683,
        "end": 2761,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2689,
            "end": 2702,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2689,
              "end": 2693,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2693,
              "end": 2701,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2695,
                "end": 2701
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2707,
            "end": 2719,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2707,
              "end": 2710,
              "name": "age",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2710,
              "end": 2718,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2712,
                "end": 2718
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2724,
            "end": 2759,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2724,
              "end": 2732,
              "name": "position",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2732,
              "end": 2758,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2734,
                "end": 2758,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 2734,
                    "end": 2743,
                    "literal": {
                      "type": "Literal",
                      "start": 2734,
                      "end": 2743,
                      "value": "STRIKER",
                      "raw": "\"STRIKER\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2746,
                    "end": 2758,
                    "literal": {
                      "type": "Literal",
                      "start": 2746,
                      "end": 2758,
                      "value": "GOALKEEPER",
                      "raw": "\"GOALKEEPER\""
                    }
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
      "type": "TSTypeAliasDeclaration",
      "start": 2765,
      "end": 2803,
      "id": {
        "type": "Identifier",
        "start": 2770,
        "end": 2771,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2774,
        "end": 2802,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2777,
          "end": 2802,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2780,
            "end": 2802,
            "typeName": {
              "type": "Identifier",
              "start": 2780,
              "end": 2787,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2787,
              "end": 2802,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2788,
                  "end": 2801,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2788,
                    "end": 2793,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2793,
                    "end": 2801,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2794,
                        "end": 2800,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2794,
                          "end": 2800,
                          "name": "Player",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2806,
      "end": 3079,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2812,
          "end": 3078,
          "id": {
            "type": "Identifier",
            "start": 2812,
            "end": 2817,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2814,
              "end": 2817,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2816,
                "end": 2817,
                "typeName": {
                  "type": "Identifier",
                  "start": 2816,
                  "end": 2817,
                  "name": "F",
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
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2820,
            "end": 3078,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 2826,
              "end": 3078,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2832,
                  "end": 3076,
                  "argument": {
                    "type": "CallExpression",
                    "start": 2839,
                    "end": 3075,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2839,
                      "end": 2850,
                      "object": {
                        "type": "Identifier",
                        "start": 2839,
                        "end": 2846,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2847,
                        "end": 2850,
                        "name": "all",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 2851,
                        "end": 3074,
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "start": 2861,
                            "end": 2962,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 2875,
                                "end": 2894,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2875,
                                  "end": 2879,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2881,
                                  "end": 2894,
                                  "value": "David Gomes",
                                  "raw": "\"David Gomes\""
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 2908,
                                "end": 2915,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2908,
                                  "end": 2911,
                                  "name": "age",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2913,
                                  "end": 2915,
                                  "value": 23,
                                  "raw": "23"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 2929,
                                "end": 2951,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2929,
                                  "end": 2937,
                                  "name": "position",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2939,
                                  "end": 2951,
                                  "value": "GOALKEEPER",
                                  "raw": "\"GOALKEEPER\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 2964,
                            "end": 3068,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 2978,
                                "end": 3003,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2978,
                                  "end": 2982,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2984,
                                  "end": 3003,
                                  "value": "Cristiano Ronaldo",
                                  "raw": "\"Cristiano Ronaldo\""
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 3017,
                                "end": 3024,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 3017,
                                  "end": 3020,
                                  "name": "age",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 3022,
                                  "end": 3024,
                                  "value": 33,
                                  "raw": "33"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 3038,
                                "end": 3057,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 3038,
                                  "end": 3046,
                                  "name": "position",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 3048,
                                  "end": 3057,
                                  "value": "STRIKER",
                                  "raw": "\"STRIKER\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3120,
      "end": 3188,
      "id": {
        "type": "Identifier",
        "start": 3137,
        "end": 3145,
        "name": "foldLeft",
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
          "start": 3149,
          "end": 3153,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3150,
            "end": 3153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3152,
              "end": 3153,
              "typeName": {
                "type": "Identifier",
                "start": 3152,
                "end": 3153,
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
        },
        {
          "type": "Identifier",
          "start": 3155,
          "end": 3183,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3156,
            "end": 3183,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3158,
              "end": 3183,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3159,
                  "end": 3165,
                  "name": "acc",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3162,
                    "end": 3165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3164,
                      "end": 3165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3164,
                        "end": 3165,
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
                },
                {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3177,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3168,
                    "end": 3177,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3170,
                      "end": 3177
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3179,
                "end": 3183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3182,
                  "end": 3183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3182,
                    "end": 3183,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3145,
        "end": 3148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3146,
            "end": 3147,
            "name": {
              "type": "Identifier",
              "start": 3146,
              "end": 3147,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3184,
        "end": 3187,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3186,
          "end": 3187,
          "typeName": {
            "type": "Identifier",
            "start": 3186,
            "end": 3187,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3189,
      "end": 3245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3193,
          "end": 3244,
          "id": {
            "type": "Identifier",
            "start": 3193,
            "end": 3205,
            "name": "res",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3196,
              "end": 3205,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3198,
                "end": 3205
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3208,
            "end": 3244,
            "callee": {
              "type": "Identifier",
              "start": 3208,
              "end": 3216,
              "name": "foldLeft",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 3217,
                "end": 3221,
                "value": true,
                "raw": "true"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3223,
                "end": 3243,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3224,
                    "end": 3227,
                    "name": "acc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3229,
                    "end": 3230,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "LogicalExpression",
                  "start": 3235,
                  "end": 3243,
                  "left": {
                    "type": "Identifier",
                    "start": 3235,
                    "end": 3238,
                    "name": "acc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 3242,
                    "end": 3243,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 3257,
      "end": 3276,
      "id": {
        "type": "Identifier",
        "start": 3262,
        "end": 3267,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 3270,
          "end": 3271,
          "id": {
            "type": "Identifier",
            "start": 3270,
            "end": 3271,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 3273,
          "end": 3274,
          "id": {
            "type": "Identifier",
            "start": 3273,
            "end": 3274,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 3268,
        "end": 3276,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 3270,
            "end": 3271,
            "id": {
              "type": "Identifier",
              "start": 3270,
              "end": 3271,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 3273,
            "end": 3274,
            "id": {
              "type": "Identifier",
              "start": 3273,
              "end": 3274,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3277,
      "end": 3304,
      "id": {
        "type": "Identifier",
        "start": 3282,
        "end": 3285,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3288,
        "end": 3304,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3290,
            "end": 3302,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3290,
              "end": 3295,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3295,
              "end": 3302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3297,
                "end": 3302,
                "typeName": {
                  "type": "Identifier",
                  "start": 3297,
                  "end": 3302,
                  "name": "State",
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
      "type": "TSDeclareFunction",
      "start": 3305,
      "end": 3348,
      "id": {
        "type": "Identifier",
        "start": 3322,
        "end": 3325,
        "name": "bar",
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
          "start": 3329,
          "end": 3341,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3330,
            "end": 3341,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3332,
              "end": 3341,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3335,
                "end": 3341,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 3338,
                  "end": 3341,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 3338,
                    "end": 3339,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3338,
                      "end": 3339,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3325,
        "end": 3328,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3326,
            "end": 3327,
            "name": {
              "type": "Identifier",
              "start": 3326,
              "end": 3327,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3342,
        "end": 3347,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3344,
          "end": 3347,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3344,
            "end": 3345,
            "typeName": {
              "type": "Identifier",
              "start": 3344,
              "end": 3345,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3349,
      "end": 3428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3353,
          "end": 3427,
          "id": {
            "type": "Identifier",
            "start": 3353,
            "end": 3361,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3354,
              "end": 3361,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3356,
                "end": 3361,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3356,
                  "end": 3359,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3356,
                    "end": 3359,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3364,
            "end": 3427,
            "callee": {
              "type": "Identifier",
              "start": 3364,
              "end": 3367,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3368,
                "end": 3426,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ConditionalExpression",
                  "start": 3374,
                  "end": 3426,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 3374,
                    "end": 3380,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 3375,
                      "end": 3380,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 3376,
                        "end": 3380,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "ArrayExpression",
                    "start": 3383,
                    "end": 3403,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 3384,
                        "end": 3402,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 3386,
                            "end": 3400,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3386,
                              "end": 3391,
                              "name": "state",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 3393,
                              "end": 3400,
                              "object": {
                                "type": "Identifier",
                                "start": 3393,
                                "end": 3398,
                                "name": "State",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3399,
                                "end": 3400,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ]
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "start": 3406,
                    "end": 3426,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 3407,
                        "end": 3425,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 3409,
                            "end": 3423,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3409,
                              "end": 3414,
                              "name": "state",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 3416,
                              "end": 3423,
                              "object": {
                                "type": "Identifier",
                                "start": 3416,
                                "end": 3421,
                                "name": "State",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3422,
                                "end": 3423,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 3463,
      "end": 3481,
      "id": {
        "type": "Identifier",
        "start": 3468,
        "end": 3472,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 3475,
          "end": 3476,
          "id": {
            "type": "Identifier",
            "start": 3475,
            "end": 3476,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 3478,
          "end": 3479,
          "id": {
            "type": "Identifier",
            "start": 3478,
            "end": 3479,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 3473,
        "end": 3481,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 3475,
            "end": 3476,
            "id": {
              "type": "Identifier",
              "start": 3475,
              "end": 3476,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 3478,
            "end": 3479,
            "id": {
              "type": "Identifier",
              "start": 3478,
              "end": 3479,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3483,
      "end": 3585,
      "id": {
        "type": "Identifier",
        "start": 3489,
        "end": 3505,
        "name": "ClassWithConvert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3509,
        "end": 3585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3513,
            "end": 3536,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3513,
              "end": 3524,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 3524,
              "end": 3536,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3525,
                  "end": 3531,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3528,
                    "end": 3531,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3530,
                      "end": 3531,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3530,
                        "end": 3531,
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
                "start": 3533,
                "end": 3536,
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
            "start": 3539,
            "end": 3583,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3539,
              "end": 3546,
              "name": "convert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3546,
              "end": 3583,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3547,
                  "end": 3578,
                  "name": "converter",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3556,
                    "end": 3578,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3558,
                      "end": 3578,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3560,
                          "end": 3576,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3560,
                            "end": 3562,
                            "name": "to",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3562,
                            "end": 3575,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 3564,
                              "end": 3575,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 3565,
                                  "end": 3569,
                                  "name": "v",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3566,
                                    "end": 3569,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3568,
                                      "end": 3569,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3568,
                                        "end": 3569,
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
                                "start": 3571,
                                "end": 3575,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3574,
                                  "end": 3575,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3574,
                                    "end": 3575,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
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
                "start": 3580,
                "end": 3583,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3505,
        "end": 3508,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3506,
            "end": 3507,
            "name": {
              "type": "Identifier",
              "start": 3506,
              "end": 3507,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3587,
      "end": 3661,
      "id": {
        "type": "Identifier",
        "start": 3596,
        "end": 3598,
        "name": "fn",
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
          "start": 3602,
          "end": 3626,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3605,
            "end": 3626,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3607,
              "end": 3626,
              "typeName": {
                "type": "Identifier",
                "start": 3607,
                "end": 3623,
                "name": "ClassWithConvert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3623,
                "end": 3626,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3624,
                    "end": 3625,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3624,
                      "end": 3625,
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3628,
          "end": 3656,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3629,
            "end": 3656,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3631,
              "end": 3656,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3634,
                "end": 3656,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3637,
                  "end": 3656,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3637,
                    "end": 3653,
                    "name": "ClassWithConvert",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3653,
                    "end": 3656,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3654,
                        "end": 3655,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3654,
                          "end": 3655,
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3658,
        "end": 3661,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3598,
        "end": 3601,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3599,
            "end": 3600,
            "name": {
              "type": "Identifier",
              "start": 3599,
              "end": 3600,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3662,
      "end": 3731,
      "expression": {
        "type": "CallExpression",
        "start": 3662,
        "end": 3730,
        "callee": {
          "type": "Identifier",
          "start": 3662,
          "end": 3664,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 3665,
            "end": 3693,
            "callee": {
              "type": "Identifier",
              "start": 3669,
              "end": 3685,
              "name": "ClassWithConvert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3686,
                "end": 3692,
                "object": {
                  "type": "Identifier",
                  "start": 3686,
                  "end": 3690,
                  "name": "Enum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3691,
                  "end": 3692,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "typeArguments": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 3695,
            "end": 3729,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "NewExpression",
              "start": 3701,
              "end": 3729,
              "callee": {
                "type": "Identifier",
                "start": 3705,
                "end": 3721,
                "name": "ClassWithConvert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 3722,
                  "end": 3728,
                  "object": {
                    "type": "Identifier",
                    "start": 3722,
                    "end": 3726,
                    "name": "Enum",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3727,
                    "end": 3728,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3733,
      "end": 3760,
      "id": {
        "type": "Identifier",
        "start": 3738,
        "end": 3742,
        "name": "Func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3742,
        "end": 3745,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3743,
            "end": 3744,
            "name": {
              "type": "Identifier",
              "start": 3743,
              "end": 3744,
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 3748,
        "end": 3759,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 3749,
            "end": 3753,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3750,
              "end": 3753,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3752,
                "end": 3753,
                "typeName": {
                  "type": "Identifier",
                  "start": 3752,
                  "end": 3753,
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
          "start": 3755,
          "end": 3759,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3758,
            "end": 3759,
            "typeName": {
              "type": "Identifier",
              "start": 3758,
              "end": 3759,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3762,
      "end": 3805,
      "id": {
        "type": "Identifier",
        "start": 3779,
        "end": 3786,
        "name": "makeFoo",
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
          "start": 3790,
          "end": 3794,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3791,
            "end": 3794,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3793,
              "end": 3794,
              "typeName": {
                "type": "Identifier",
                "start": 3793,
                "end": 3794,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3786,
        "end": 3789,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3787,
            "end": 3788,
            "name": {
              "type": "Identifier",
              "start": 3787,
              "end": 3788,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3795,
        "end": 3804,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3797,
          "end": 3804,
          "typeName": {
            "type": "Identifier",
            "start": 3797,
            "end": 3801,
            "name": "Func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3801,
            "end": 3804,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3802,
                "end": 3803,
                "typeName": {
                  "type": "Identifier",
                  "start": 3802,
                  "end": 3803,
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
      "type": "TSDeclareFunction",
      "start": 3806,
      "end": 3860,
      "id": {
        "type": "Identifier",
        "start": 3823,
        "end": 3826,
        "name": "baz",
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
          "start": 3830,
          "end": 3840,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3831,
            "end": 3840,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3833,
              "end": 3840,
              "typeName": {
                "type": "Identifier",
                "start": 3833,
                "end": 3837,
                "name": "Func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3837,
                "end": 3840,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3838,
                    "end": 3839,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3838,
                      "end": 3839,
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3842,
          "end": 3852,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3843,
            "end": 3852,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3845,
              "end": 3852,
              "typeName": {
                "type": "Identifier",
                "start": 3845,
                "end": 3849,
                "name": "Func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3849,
                "end": 3852,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3850,
                    "end": 3851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3850,
                      "end": 3851,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3826,
        "end": 3829,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3827,
            "end": 3828,
            "name": {
              "type": "Identifier",
              "start": 3827,
              "end": 3828,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3853,
        "end": 3859,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3855,
          "end": 3859
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3862,
      "end": 3900,
      "expression": {
        "type": "CallExpression",
        "start": 3862,
        "end": 3899,
        "callee": {
          "type": "Identifier",
          "start": 3862,
          "end": 3865,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 3866,
            "end": 3881,
            "callee": {
              "type": "Identifier",
              "start": 3866,
              "end": 3873,
              "name": "makeFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3874,
                "end": 3880,
                "object": {
                  "type": "Identifier",
                  "start": 3874,
                  "end": 3878,
                  "name": "Enum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3879,
                  "end": 3880,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "CallExpression",
            "start": 3883,
            "end": 3898,
            "callee": {
              "type": "Identifier",
              "start": 3883,
              "end": 3890,
              "name": "makeFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3891,
                "end": 3897,
                "object": {
                  "type": "Identifier",
                  "start": 3891,
                  "end": 3895,
                  "name": "Enum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3896,
                  "end": 3897,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
