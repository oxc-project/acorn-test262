__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 3900,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 42,
        "decorators": [],
        "name": "truePromise",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
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
      },
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 88,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 89,
                  "end": 93,
                  "value": true,
                  "raw": "true"
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
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
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
      "type": "FunctionDeclaration",
      "start": 136,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 149,
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 153,
          "end": 161,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                "decorators": [],
                "name": "T",
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
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 192,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 192,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
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
      "start": 199,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 218,
        "decorators": [],
        "name": "wrappedFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null
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
      },
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
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 252,
                  "end": 257,
                  "value": "foo",
                  "raw": "'foo'"
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
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 279,
        "decorators": [],
        "name": "wrapBar",
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
          "start": 280,
          "end": 292,
          "decorators": [],
          "name": "value",
          "optional": false,
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
          }
        }
      ],
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
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null
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
      },
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 327,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 327,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
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
      "start": 334,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 353,
        "decorators": [],
        "name": "wrappedBar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 576,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 395,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 386,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 432,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 406,
                "end": 431,
                "id": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 414,
                  "decorators": [],
                  "name": "inferred",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 417,
                  "end": 431,
                  "callee": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 424,
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 425,
                      "end": 430,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 468,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 443,
                "end": 467,
                "id": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 450,
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 453,
                  "end": 467,
                  "callee": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 460,
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 461,
                      "end": 466,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 473,
            "end": 502,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 493,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 485,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 487,
                      "end": 493
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 507,
            "end": 540,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 513,
                "end": 539,
                "id": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 521,
                  "decorators": [],
                  "name": "literal2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 524,
                  "end": 539,
                  "callee": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 531,
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 532,
                      "end": 538,
                      "decorators": [],
                      "name": "value2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 567,
                  "end": 572,
                  "decorators": [],
                  "name": "value",
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
      "type": "FunctionDeclaration",
      "start": 578,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 597,
        "decorators": [],
        "name": "wrappedBaz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 613,
        "end": 672,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 619,
            "end": 646,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 625,
                "end": 645,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 637,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                  }
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
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 663,
                  "end": 668,
                  "decorators": [],
                  "name": "value",
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
      "type": "TSInterfaceDeclaration",
      "start": 696,
      "end": 756,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 723,
        "decorators": [],
        "name": "FolderContentItem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 789,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 784,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "decorators": [],
                    "name": "FolderContentItem",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrowFunctionExpression",
              "start": 815,
              "end": 840,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "ObjectExpression",
                "start": 821,
                "end": 839,
                "properties": [
                  {
                    "type": "Property",
                    "start": 823,
                    "end": 837,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 827,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 829,
                      "end": 837,
                      "value": "folder",
                      "raw": "'folder'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "id": null,
              "generator": false
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 909,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 909,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 898,
            "decorators": [],
            "name": "arr",
            "optional": false,
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
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 995,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 915,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 915,
            "end": 949,
            "decorators": [],
            "name": "mappedArr",
            "optional": false,
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
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
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
            }
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
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 956,
                "end": 959,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 960,
                "end": 994,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 961,
                    "end": 967,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 962,
                        "end": 963,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 965,
                        "end": 966,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 989,
                            "end": 990,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1071,
                    "end": 1080,
                    "id": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1076,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1083,
              "end": 1108,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1090,
                "end": 1108,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1096,
                    "end": 1107,
                    "id": {
                      "type": "Identifier",
                      "start": 1096,
                      "end": 1103,
                      "decorators": [],
                      "name": "Warning",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1110,
              "end": 1139,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1117,
                "end": 1139,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1123,
                    "end": 1138,
                    "id": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1134,
                      "decorators": [],
                      "name": "Information",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1141,
              "end": 1163,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1148,
                "end": 1163,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1154,
                    "end": 1162,
                    "id": {
                      "type": "Identifier",
                      "start": 1154,
                      "end": 1158,
                      "decorators": [],
                      "name": "Hint",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Diagnostic",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "severity",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "DiagnosticSeverity",
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
              "start": 1279,
              "end": 1302,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1279,
                "end": 1283,
                "decorators": [],
                "name": "code",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "source",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1342,
      "end": 1512,
      "id": {
        "type": "Identifier",
        "start": 1351,
        "end": 1354,
        "decorators": [],
        "name": "bug",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
              "decorators": [],
              "name": "Diagnostic",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1371,
        "end": 1512,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1374,
            "end": 1397,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1378,
                "end": 1396,
                "id": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1391,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
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
                  }
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
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1416,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1417,
                  "end": 1508,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1418,
                      "end": 1423,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1444,
                                "end": 1452,
                                "decorators": [],
                                "name": "severity",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 1454,
                                "end": 1478,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1454,
                                  "end": 1472,
                                  "decorators": [],
                                  "name": "DiagnosticSeverity",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1473,
                                  "end": 1478,
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1483,
                              "end": 1501,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1483,
                                "end": 1490,
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1492,
                                "end": 1501,
                                "value": "message",
                                "raw": "'message'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
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
      "type": "FunctionDeclaration",
      "start": 1536,
      "end": 1633,
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1556,
        "decorators": [],
        "name": "objectToMap",
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
          "start": 1557,
          "end": 1565,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1560,
            "end": 1565,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1562,
              "end": 1565
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1592,
                          "end": 1596,
                          "decorators": [],
                          "name": "keys",
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
                          "start": 1597,
                          "end": 1600,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1602,
                      "end": 1605,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1606,
                      "end": 1628,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1606,
                          "end": 1609,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 1613,
                        "end": 1628,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 1614,
                            "end": 1617,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "MemberExpression",
                            "start": 1619,
                            "end": 1627,
                            "object": {
                              "type": "Identifier",
                              "start": 1619,
                              "end": 1622,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1623,
                              "end": 1626,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
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
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "phoneNumbers",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "__typename",
                        "optional": false,
                        "typeAnnotation": null
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
        "decorators": [],
        "name": "createPerson",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1785,
                    "end": 1797,
                    "decorators": [],
                    "name": "phoneNumbers",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1807,
                        "end": 1854,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ObjectExpression",
                          "start": 1814,
                          "end": 1853,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1822,
                              "end": 1847,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1822,
                                "end": 1832,
                                "decorators": [],
                                "name": "__typename",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1834,
                                "end": 1847,
                                "value": "PhoneNumber",
                                "raw": "'PhoneNumber'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1886,
      "end": 1913,
      "id": {
        "type": "Identifier",
        "start": 1891,
        "end": 1894,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
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
      "type": "TSDeclareFunction",
      "start": 1914,
      "end": 1956,
      "id": {
        "type": "Identifier",
        "start": 1931,
        "end": 1934,
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 1938,
          "end": 1946,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                "decorators": [],
                "name": "T",
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
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1958,
      "end": 2039,
      "id": {
        "type": "Identifier",
        "start": 1963,
        "end": 1975,
        "decorators": [],
        "name": "WinCondition",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "player",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2045,
          "end": 2090,
          "id": {
            "type": "Identifier",
            "start": 2045,
            "end": 2066,
            "decorators": [],
            "name": "zz",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "WinCondition",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 2069,
            "end": 2090,
            "callee": {
              "type": "Identifier",
              "start": 2069,
              "end": 2072,
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2075,
                      "end": 2079,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2081,
                      "end": 2087,
                      "value": "draw",
                      "raw": "'draw'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "WinType",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2129,
          "end": 2159,
          "id": {
            "type": "Identifier",
            "start": 2129,
            "end": 2145,
            "decorators": [],
            "name": "yy",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "WinType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 2148,
            "end": 2159,
            "callee": {
              "type": "Identifier",
              "start": 2148,
              "end": 2151,
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2152,
                "end": 2158,
                "value": "draw",
                "raw": "'draw'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "OK",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
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
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 2256,
            "end": 2264,
            "decorators": [],
            "name": "value",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
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
              "decorators": [],
              "name": "OK",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2296,
                      "end": 2300,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2302,
                      "end": 2306,
                      "value": "OK",
                      "raw": "\"OK\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2316,
                    "end": 2328,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2316,
                      "end": 2321,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2323,
                      "end": 2328,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
    },
    {
      "type": "VariableDeclaration",
      "start": 2339,
      "end": 2392,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2343,
          "end": 2391,
          "id": {
            "type": "Identifier",
            "start": 2343,
            "end": 2371,
            "decorators": [],
            "name": "result",
            "optional": false,
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
                  "decorators": [],
                  "name": "OK",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 2374,
            "end": 2391,
            "callee": {
              "type": "Identifier",
              "start": 2374,
              "end": 2376,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2477,
          "end": 2571,
          "id": {
            "type": "Identifier",
            "start": 2477,
            "end": 2484,
            "decorators": [],
            "name": "a3",
            "optional": false,
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
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2502,
                "end": 2570,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2502,
                    "end": 2506,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2533,
                              "end": 2537,
                              "decorators": [],
                              "name": "code",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2539,
                              "end": 2547,
                              "value": "mapped",
                              "raw": "'mapped'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2557,
                            "end": 2561,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2557,
                              "end": 2561,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2557,
                              "end": 2561,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Player",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "position",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Player",
                          "optional": false,
                          "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2812,
          "end": 3078,
          "id": {
            "type": "Identifier",
            "start": 2812,
            "end": 2817,
            "decorators": [],
            "name": "f1",
            "optional": false,
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
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2820,
            "end": 3078,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2847,
                        "end": 2850,
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 2875,
                                  "end": 2879,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2881,
                                  "end": 2894,
                                  "value": "David Gomes",
                                  "raw": "\"David Gomes\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 2908,
                                "end": 2915,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 2908,
                                  "end": 2911,
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2913,
                                  "end": 2915,
                                  "value": 23,
                                  "raw": "23"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 2929,
                                "end": 2951,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 2929,
                                  "end": 2937,
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2939,
                                  "end": 2951,
                                  "value": "GOALKEEPER",
                                  "raw": "\"GOALKEEPER\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 2978,
                                  "end": 2982,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 2984,
                                  "end": 3003,
                                  "value": "Cristiano Ronaldo",
                                  "raw": "\"Cristiano Ronaldo\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 3017,
                                "end": 3024,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 3017,
                                  "end": 3020,
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 3022,
                                  "end": 3024,
                                  "value": 33,
                                  "raw": "33"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 3038,
                                "end": 3057,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 3038,
                                  "end": 3046,
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 3048,
                                  "end": 3057,
                                  "value": "STRIKER",
                                  "raw": "\"STRIKER\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "foldLeft",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 3149,
          "end": 3153,
          "decorators": [],
          "name": "z",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3155,
          "end": 3183,
          "decorators": [],
          "name": "f",
          "optional": false,
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
                  "decorators": [],
                  "name": "acc",
                  "optional": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3177,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3168,
                    "end": 3177,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3170,
                      "end": 3177
                    }
                  }
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3189,
      "end": 3245,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3193,
          "end": 3244,
          "id": {
            "type": "Identifier",
            "start": 3193,
            "end": 3205,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3196,
              "end": 3205,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3198,
                "end": 3205
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3208,
            "end": 3244,
            "callee": {
              "type": "Identifier",
              "start": 3208,
              "end": 3216,
              "decorators": [],
              "name": "foldLeft",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3224,
                    "end": 3227,
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3229,
                    "end": 3230,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "LogicalExpression",
                  "start": 3235,
                  "end": 3243,
                  "left": {
                    "type": "Identifier",
                    "start": 3235,
                    "end": 3238,
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 3242,
                    "end": 3243,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3277,
      "end": 3304,
      "id": {
        "type": "Identifier",
        "start": 3282,
        "end": 3285,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "State",
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
      "type": "TSDeclareFunction",
      "start": 3305,
      "end": 3348,
      "id": {
        "type": "Identifier",
        "start": 3322,
        "end": 3325,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 3329,
          "end": 3341,
          "decorators": [],
          "name": "f",
          "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3349,
      "end": 3428,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3353,
          "end": 3427,
          "id": {
            "type": "Identifier",
            "start": 3353,
            "end": 3361,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3364,
            "end": 3427,
            "callee": {
              "type": "Identifier",
              "start": 3364,
              "end": 3367,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3368,
                "end": 3426,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 3374,
                  "end": 3426,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 3374,
                    "end": 3380,
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 3375,
                      "end": 3380,
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "start": 3376,
                        "end": 3380,
                        "value": true,
                        "raw": "true"
                      },
                      "prefix": true
                    },
                    "prefix": true
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 3386,
                              "end": 3391,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 3393,
                              "end": 3400,
                              "object": {
                                "type": "Identifier",
                                "start": 3393,
                                "end": 3398,
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3399,
                                "end": 3400,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 3409,
                              "end": 3414,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 3416,
                              "end": 3423,
                              "object": {
                                "type": "Identifier",
                                "start": 3416,
                                "end": 3421,
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3422,
                                "end": 3423,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 3483,
      "end": 3585,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3489,
        "end": 3505,
        "decorators": [],
        "name": "ClassWithConvert",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3509,
        "end": 3585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3513,
            "end": 3536,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3513,
              "end": 3524,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3524,
              "end": 3536,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3525,
                  "end": 3531,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
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
                "start": 3533,
                "end": 3536,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3539,
            "end": 3583,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3539,
              "end": 3546,
              "decorators": [],
              "name": "convert",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3546,
              "end": 3583,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3547,
                  "end": 3578,
                  "decorators": [],
                  "name": "converter",
                  "optional": false,
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
                            "decorators": [],
                            "name": "to",
                            "optional": false,
                            "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
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
                                        "decorators": [],
                                        "name": "T",
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3580,
                "end": 3583,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3587,
      "end": 3661,
      "id": {
        "type": "Identifier",
        "start": 3596,
        "end": 3598,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 3602,
          "end": 3626,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3628,
          "end": 3656,
          "decorators": [],
          "name": "f",
          "optional": false,
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
                    "decorators": [],
                    "name": "ClassWithConvert",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3658,
        "end": 3661,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 3665,
            "end": 3693,
            "callee": {
              "type": "Identifier",
              "start": 3669,
              "end": 3685,
              "decorators": [],
              "name": "ClassWithConvert",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3686,
                "end": 3692,
                "object": {
                  "type": "Identifier",
                  "start": 3686,
                  "end": 3690,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3691,
                  "end": 3692,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 3695,
            "end": 3729,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "start": 3701,
              "end": 3729,
              "callee": {
                "type": "Identifier",
                "start": 3705,
                "end": 3721,
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 3722,
                  "end": 3728,
                  "object": {
                    "type": "Identifier",
                    "start": 3722,
                    "end": 3726,
                    "decorators": [],
                    "name": "Enum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3727,
                    "end": 3728,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "makeFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 3790,
          "end": 3794,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
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
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3806,
      "end": 3860,
      "id": {
        "type": "Identifier",
        "start": 3823,
        "end": 3826,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 3830,
          "end": 3840,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3842,
          "end": 3852,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3853,
        "end": 3859,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3855,
          "end": 3859
        }
      },
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 3866,
            "end": 3881,
            "callee": {
              "type": "Identifier",
              "start": 3866,
              "end": 3873,
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3874,
                "end": 3880,
                "object": {
                  "type": "Identifier",
                  "start": 3874,
                  "end": 3878,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3879,
                  "end": 3880,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          },
          {
            "type": "CallExpression",
            "start": 3883,
            "end": 3898,
            "callee": {
              "type": "Identifier",
              "start": 3883,
              "end": 3890,
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 3891,
                "end": 3897,
                "object": {
                  "type": "Identifier",
                  "start": 3891,
                  "end": 3895,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3896,
                  "end": 3897,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
