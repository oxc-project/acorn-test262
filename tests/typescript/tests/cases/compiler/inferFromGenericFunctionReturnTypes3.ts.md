__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "truePromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 42
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 54,
                  "end": 58
                },
                "start": 54,
                "end": 58
              }
            ],
            "start": 53,
            "end": 59
          },
          "start": 46,
          "end": 59
        },
        "start": 44,
        "end": 59
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 80
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 88
                },
                "optional": false,
                "computed": false,
                "start": 73,
                "end": 88
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 89,
                  "end": 93
                }
              ],
              "optional": false,
              "start": 73,
              "end": 94
            },
            "start": 66,
            "end": 95
          }
        ],
        "start": 60,
        "end": 97
      },
      "expression": false,
      "start": 22,
      "end": 97
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "typeArguments": null,
                "start": 130,
                "end": 131
              },
              "start": 128,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 132
          }
        ],
        "start": 117,
        "end": 134
      },
      "declare": false,
      "start": 99,
      "end": 134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 149,
        "end": 152
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "typeArguments": null,
              "start": 160,
              "end": 161
            },
            "start": 158,
            "end": 161
          },
          "start": 153,
          "end": 161
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 168
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              }
            ],
            "start": 168,
            "end": 171
          },
          "start": 164,
          "end": 171
        },
        "start": 162,
        "end": 171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 192
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 192
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 187,
                  "end": 192
                }
              ],
              "start": 185,
              "end": 194
            },
            "start": 178,
            "end": 195
          }
        ],
        "start": 172,
        "end": 197
      },
      "expression": false,
      "start": 136,
      "end": 197
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 218
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 227,
                  "end": 232
                },
                "start": 227,
                "end": 232
              }
            ],
            "start": 226,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        "start": 220,
        "end": 233
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 251
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 252,
                  "end": 257
                }
              ],
              "optional": false,
              "start": 247,
              "end": 258
            },
            "start": 240,
            "end": 259
          }
        ],
        "start": 234,
        "end": 261
      },
      "expression": false,
      "start": 199,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 279
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 287,
                "end": 292
              },
              "start": 287,
              "end": 292
            },
            "start": 285,
            "end": 292
          },
          "start": 280,
          "end": 292
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 300,
                  "end": 305
                },
                "start": 300,
                "end": 305
              }
            ],
            "start": 299,
            "end": 306
          },
          "start": 295,
          "end": 306
        },
        "start": 293,
        "end": 306
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 327
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 327
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 322,
                  "end": 327
                }
              ],
              "start": 320,
              "end": 329
            },
            "start": 313,
            "end": 330
          }
        ],
        "start": 307,
        "end": 332
      },
      "expression": false,
      "start": 263,
      "end": 332
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 353
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 361
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 362,
                  "end": 367
                },
                "start": 362,
                "end": 367
              }
            ],
            "start": 361,
            "end": 368
          },
          "start": 357,
          "end": 368
        },
        "start": 355,
        "end": 368
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 386
                },
                "init": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 389,
                  "end": 394
                },
                "definite": false,
                "start": 381,
                "end": 394
              }
            ],
            "declare": false,
            "start": 375,
            "end": 395
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inferred",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 414
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 424
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 430
                    }
                  ],
                  "optional": false,
                  "start": 417,
                  "end": 431
                },
                "definite": false,
                "start": 406,
                "end": 431
              }
            ],
            "declare": false,
            "start": 400,
            "end": 432
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 450
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 460
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 461,
                      "end": 466
                    }
                  ],
                  "optional": false,
                  "start": 453,
                  "end": 467
                },
                "definite": false,
                "start": 443,
                "end": 467
              }
            ],
            "declare": false,
            "start": 437,
            "end": 468
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 487,
                      "end": 493
                    },
                    "start": 485,
                    "end": 493
                  },
                  "start": 479,
                  "end": 493
                },
                "init": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 496,
                  "end": 501
                },
                "definite": false,
                "start": 479,
                "end": 501
              }
            ],
            "declare": false,
            "start": 473,
            "end": 502
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 521
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 531
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 538
                    }
                  ],
                  "optional": false,
                  "start": 524,
                  "end": 539
                },
                "definite": false,
                "start": 513,
                "end": 539
              }
            ],
            "declare": false,
            "start": 507,
            "end": 540
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 566
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 572
                }
              ],
              "optional": false,
              "start": 562,
              "end": 573
            },
            "start": 555,
            "end": 574
          }
        ],
        "start": 369,
        "end": 576
      },
      "expression": false,
      "start": 334,
      "end": 576
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedBaz",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 597
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 605
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "'baz'",
                  "start": 606,
                  "end": 611
                },
                "start": 606,
                "end": 611
              }
            ],
            "start": 605,
            "end": 612
          },
          "start": 601,
          "end": 612
        },
        "start": 599,
        "end": 612
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "baz",
                        "raw": "'baz'",
                        "start": 632,
                        "end": 637
                      },
                      "start": 632,
                      "end": 637
                    },
                    "start": 630,
                    "end": 637
                  },
                  "start": 625,
                  "end": 637
                },
                "init": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "'baz'",
                  "start": 640,
                  "end": 645
                },
                "definite": false,
                "start": 625,
                "end": 645
              }
            ],
            "declare": false,
            "start": 619,
            "end": 646
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 662
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 668
                }
              ],
              "optional": false,
              "start": 658,
              "end": 669
            },
            "start": 651,
            "end": 670
          }
        ],
        "start": 613,
        "end": 672
      },
      "expression": false,
      "start": 578,
      "end": 672
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FolderContentItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 723
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 734
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "folder",
                      "raw": "'folder'",
                      "start": 736,
                      "end": 744
                    },
                    "start": 736,
                    "end": 744
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "file",
                      "raw": "'file'",
                      "start": 747,
                      "end": 753
                    },
                    "start": 747,
                    "end": 753
                  }
                ],
                "start": 736,
                "end": 753
              },
              "start": 734,
              "end": 753
            },
            "accessibility": null,
            "static": false,
            "start": 730,
            "end": 754
          }
        ],
        "start": 724,
        "end": 756
      },
      "declare": false,
      "start": 696,
      "end": 756
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FolderContentItem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 765,
                    "end": 782
                  },
                  "typeArguments": null,
                  "start": 765,
                  "end": 782
                },
                "start": 765,
                "end": 784
              },
              "start": 763,
              "end": 784
            },
            "start": 762,
            "end": 784
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 787,
            "end": 789
          },
          "definite": false,
          "start": 762,
          "end": 789
        }
      ],
      "declare": false,
      "start": 758,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 792
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 796,
                  "end": 797
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 799,
                  "end": 800
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 802,
                  "end": 803
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 805,
                  "end": 806
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 808,
                  "end": 809
                }
              ],
              "start": 795,
              "end": 810
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 814
            },
            "optional": false,
            "computed": false,
            "start": 795,
            "end": 814
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 816
                }
              ],
              "returnType": null,
              "body": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 827
                    },
                    "value": {
                      "type": "Literal",
                      "value": "folder",
                      "raw": "'folder'",
                      "start": 829,
                      "end": 837
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 823,
                    "end": 837
                  }
                ],
                "start": 821,
                "end": 839
              },
              "id": null,
              "generator": false,
              "start": 815,
              "end": 840
            }
          ],
          "optional": false,
          "start": 795,
          "end": 841
        },
        "start": 791,
        "end": 841
      },
      "directive": null,
      "start": 791,
      "end": 842
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 880
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
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
                      ],
                      "start": 881,
                      "end": 897
                    }
                  ],
                  "start": 880,
                  "end": 898
                },
                "start": 875,
                "end": 898
              },
              "start": 873,
              "end": 898
            },
            "start": 870,
            "end": 898
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 903,
                    "end": 904
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 906,
                    "end": 907
                  }
                ],
                "start": 902,
                "end": 908
              }
            ],
            "start": 901,
            "end": 909
          },
          "definite": false,
          "start": 870,
          "end": 909
        }
      ],
      "declare": false,
      "start": 866,
      "end": 909
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedArr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 931
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
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
                      ],
                      "start": 932,
                      "end": 948
                    }
                  ],
                  "start": 931,
                  "end": 949
                },
                "start": 926,
                "end": 949
              },
              "start": 924,
              "end": 949
            },
            "start": 915,
            "end": 949
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 955
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 959
              },
              "optional": false,
              "computed": false,
              "start": 952,
              "end": 959
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 962,
                        "end": 963
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 966
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 961,
                    "end": 967
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 986,
                            "end": 987
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 989,
                            "end": 990
                          }
                        ],
                        "start": 985,
                        "end": 991
                      },
                      "start": 978,
                      "end": 992
                    }
                  ],
                  "start": 972,
                  "end": 994
                },
                "id": null,
                "generator": false,
                "start": 960,
                "end": 994
              }
            ],
            "optional": false,
            "start": 952,
            "end": 995
          },
          "definite": false,
          "start": 915,
          "end": 995
        }
      ],
      "declare": false,
      "start": 911,
      "end": 995
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1054
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1076
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1079,
                      "end": 1080
                    },
                    "definite": false,
                    "start": 1071,
                    "end": 1080
                  }
                ],
                "declare": false,
                "start": 1065,
                "end": 1081
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1058,
              "end": 1081
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1096,
                      "end": 1103
                    },
                    "init": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1106,
                      "end": 1107
                    },
                    "definite": false,
                    "start": 1096,
                    "end": 1107
                  }
                ],
                "declare": false,
                "start": 1090,
                "end": 1108
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1083,
              "end": 1108
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1123,
                      "end": 1134
                    },
                    "init": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1137,
                      "end": 1138
                    },
                    "definite": false,
                    "start": 1123,
                    "end": 1138
                  }
                ],
                "declare": false,
                "start": 1117,
                "end": 1139
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1110,
              "end": 1139
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Hint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1154,
                      "end": 1158
                    },
                    "init": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1161,
                      "end": 1162
                    },
                    "definite": false,
                    "start": 1154,
                    "end": 1162
                  }
                ],
                "declare": false,
                "start": 1148,
                "end": 1163
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1141,
              "end": 1163
            }
          ],
          "start": 1055,
          "end": 1165
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 1026,
        "end": 1165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1019,
      "end": 1165
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1197
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1200,
                "end": 1201
              },
              "start": 1200,
              "end": 1201
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1204,
                "end": 1205
              },
              "start": 1204,
              "end": 1205
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1208,
                "end": 1209
              },
              "start": 1208,
              "end": 1209
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1212,
                "end": 1213
              },
              "start": 1212,
              "end": 1213
            }
          ],
          "start": 1200,
          "end": 1213
        },
        "declare": false,
        "start": 1174,
        "end": 1214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1167,
      "end": 1214
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Diagnostic",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1243
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "severity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1247,
                "end": 1255
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiagnosticSeverity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1276
                  },
                  "typeArguments": null,
                  "start": 1258,
                  "end": 1276
                },
                "start": 1256,
                "end": 1276
              },
              "accessibility": null,
              "static": false,
              "start": 1247,
              "end": 1277
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "code",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1283
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 1286,
                  "end": 1301
                },
                "start": 1284,
                "end": 1301
              },
              "accessibility": null,
              "static": false,
              "start": 1279,
              "end": 1302
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "source",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1310
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1313,
                  "end": 1319
                },
                "start": 1311,
                "end": 1319
              },
              "accessibility": null,
              "static": false,
              "start": 1304,
              "end": 1320
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1322,
                "end": 1329
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1331,
                  "end": 1337
                },
                "start": 1329,
                "end": 1337
              },
              "accessibility": null,
              "static": false,
              "start": 1322,
              "end": 1338
            }
          ],
          "start": 1244,
          "end": 1340
        },
        "declare": false,
        "start": 1223,
        "end": 1340
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1216,
      "end": 1340
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bug",
        "optional": false,
        "typeAnnotation": null,
        "start": 1351,
        "end": 1354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Diagnostic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1358,
              "end": 1368
            },
            "typeArguments": null,
            "start": 1358,
            "end": 1368
          },
          "start": 1358,
          "end": 1370
        },
        "start": 1356,
        "end": 1370
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1386,
                        "end": 1389
                      },
                      "start": 1386,
                      "end": 1391
                    },
                    "start": 1384,
                    "end": 1391
                  },
                  "start": 1378,
                  "end": 1391
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1394,
                  "end": 1396
                },
                "definite": false,
                "start": 1378,
                "end": 1396
              }
            ],
            "declare": false,
            "start": 1374,
            "end": 1397
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1412
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1416
                },
                "optional": false,
                "computed": false,
                "start": 1406,
                "end": 1416
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1418,
                      "end": 1423
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "severity",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1444,
                                "end": 1452
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "DiagnosticSeverity",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1454,
                                  "end": 1472
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1473,
                                  "end": 1478
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1454,
                                "end": 1478
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1444,
                              "end": 1478
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1483,
                                "end": 1490
                              },
                              "value": {
                                "type": "Literal",
                                "value": "message",
                                "raw": "'message'",
                                "start": 1492,
                                "end": 1501
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1483,
                              "end": 1501
                            }
                          ],
                          "start": 1439,
                          "end": 1505
                        },
                        "start": 1432,
                        "end": 1505
                      }
                    ],
                    "start": 1428,
                    "end": 1508
                  },
                  "id": null,
                  "generator": false,
                  "start": 1417,
                  "end": 1508
                }
              ],
              "optional": false,
              "start": 1406,
              "end": 1509
            },
            "start": 1399,
            "end": 1510
          }
        ],
        "start": 1371,
        "end": 1512
      },
      "expression": false,
      "start": 1342,
      "end": 1512
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectToMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1562,
              "end": 1565
            },
            "start": 1560,
            "end": 1565
          },
          "start": 1557,
          "end": 1565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1584
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1585,
                          "end": 1591
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "keys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1592,
                          "end": 1596
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1585,
                        "end": 1596
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1597,
                          "end": 1600
                        }
                      ],
                      "optional": false,
                      "start": 1585,
                      "end": 1601
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1602,
                      "end": 1605
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1585,
                    "end": 1605
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1609
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1614,
                            "end": 1617
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1619,
                              "end": 1622
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1623,
                              "end": 1626
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1619,
                            "end": 1627
                          }
                        ],
                        "start": 1613,
                        "end": 1628
                      },
                      "id": null,
                      "generator": false,
                      "start": 1606,
                      "end": 1628
                    }
                  ],
                  "optional": false,
                  "start": 1585,
                  "end": 1629
                }
              ],
              "start": 1577,
              "end": 1630
            },
            "start": 1570,
            "end": 1631
          }
        ],
        "start": 1567,
        "end": 1633
      },
      "expression": false,
      "start": 1536,
      "end": 1633
    },
    {
      "type": "EmptyStatement",
      "start": 1633,
      "end": 1634
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 1668,
        "end": 1674
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "phoneNumbers",
              "optional": false,
              "typeAnnotation": null,
              "start": 1679,
              "end": 1691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__typename",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1699,
                        "end": 1709
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "PhoneNumber",
                            "raw": "'PhoneNumber'",
                            "start": 1711,
                            "end": 1724
                          },
                          "start": 1711,
                          "end": 1724
                        },
                        "start": 1709,
                        "end": 1724
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1699,
                      "end": 1725
                    }
                  ],
                  "start": 1693,
                  "end": 1729
                },
                "start": 1693,
                "end": 1731
              },
              "start": 1691,
              "end": 1731
            },
            "accessibility": null,
            "static": false,
            "start": 1679,
            "end": 1732
          }
        ],
        "start": 1675,
        "end": 1734
      },
      "declare": false,
      "start": 1658,
      "end": 1734
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPerson",
        "optional": false,
        "typeAnnotation": null,
        "start": 1745,
        "end": 1757
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null,
            "start": 1761,
            "end": 1767
          },
          "typeArguments": null,
          "start": 1761,
          "end": 1767
        },
        "start": 1759,
        "end": 1767
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "phoneNumbers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1785,
                    "end": 1797
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1800,
                            "end": 1801
                          }
                        ],
                        "start": 1799,
                        "end": 1802
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1806
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1799,
                      "end": 1806
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "__typename",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1822,
                                "end": 1832
                              },
                              "value": {
                                "type": "Literal",
                                "value": "PhoneNumber",
                                "raw": "'PhoneNumber'",
                                "start": 1834,
                                "end": 1847
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1822,
                              "end": 1847
                            }
                          ],
                          "start": 1814,
                          "end": 1853
                        },
                        "id": null,
                        "generator": false,
                        "start": 1807,
                        "end": 1854
                      }
                    ],
                    "optional": false,
                    "start": 1799,
                    "end": 1855
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1785,
                  "end": 1855
                }
              ],
              "start": 1779,
              "end": 1859
            },
            "start": 1772,
            "end": 1860
          }
        ],
        "start": 1768,
        "end": 1862
      },
      "expression": false,
      "start": 1736,
      "end": 1862
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 1891,
        "end": 1894
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1895,
              "end": 1896
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1895,
            "end": 1896
          }
        ],
        "start": 1894,
        "end": 1897
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1902,
              "end": 1907
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1909,
                  "end": 1910
                },
                "typeArguments": null,
                "start": 1909,
                "end": 1910
              },
              "start": 1907,
              "end": 1910
            },
            "accessibility": null,
            "static": false,
            "start": 1902,
            "end": 1910
          }
        ],
        "start": 1900,
        "end": 1912
      },
      "declare": false,
      "start": 1886,
      "end": 1913
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null,
        "start": 1931,
        "end": 1934
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1935,
              "end": 1936
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1935,
            "end": 1936
          }
        ],
        "start": 1934,
        "end": 1937
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1945,
                "end": 1946
              },
              "typeArguments": null,
              "start": 1945,
              "end": 1946
            },
            "start": 1943,
            "end": 1946
          },
          "start": 1938,
          "end": 1946
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1952
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1953,
                  "end": 1954
                },
                "typeArguments": null,
                "start": 1953,
                "end": 1954
              }
            ],
            "start": 1952,
            "end": 1955
          },
          "start": 1949,
          "end": 1955
        },
        "start": 1947,
        "end": 1955
      },
      "body": null,
      "expression": false,
      "start": 1914,
      "end": 1956
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WinCondition",
        "optional": false,
        "typeAnnotation": null,
        "start": 1963,
        "end": 1975
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1986,
                  "end": 1990
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "win",
                      "raw": "'win'",
                      "start": 1992,
                      "end": 1997
                    },
                    "start": 1992,
                    "end": 1997
                  },
                  "start": 1990,
                  "end": 1997
                },
                "accessibility": null,
                "static": false,
                "start": 1986,
                "end": 1998
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "player",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1999,
                  "end": 2005
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2007,
                    "end": 2013
                  },
                  "start": 2005,
                  "end": 2013
                },
                "accessibility": null,
                "static": false,
                "start": 1999,
                "end": 2013
              }
            ],
            "start": 1984,
            "end": 2015
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2024,
                  "end": 2028
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "draw",
                      "raw": "'draw'",
                      "start": 2030,
                      "end": 2036
                    },
                    "start": 2030,
                    "end": 2036
                  },
                  "start": 2028,
                  "end": 2036
                },
                "accessibility": null,
                "static": false,
                "start": 2024,
                "end": 2036
              }
            ],
            "start": 2022,
            "end": 2038
          }
        ],
        "start": 1982,
        "end": 2038
      },
      "declare": false,
      "start": 1958,
      "end": 2039
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2049,
                  "end": 2052
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WinCondition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2053,
                        "end": 2065
                      },
                      "typeArguments": null,
                      "start": 2053,
                      "end": 2065
                    }
                  ],
                  "start": 2052,
                  "end": 2066
                },
                "start": 2049,
                "end": 2066
              },
              "start": 2047,
              "end": 2066
            },
            "start": 2045,
            "end": 2066
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2072
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2075,
                      "end": 2079
                    },
                    "value": {
                      "type": "Literal",
                      "value": "draw",
                      "raw": "'draw'",
                      "start": 2081,
                      "end": 2087
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2075,
                    "end": 2087
                  }
                ],
                "start": 2073,
                "end": 2089
              }
            ],
            "optional": false,
            "start": 2069,
            "end": 2090
          },
          "definite": false,
          "start": 2045,
          "end": 2090
        }
      ],
      "declare": false,
      "start": 2041,
      "end": 2091
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WinType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2098,
        "end": 2105
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "win",
              "raw": "'win'",
              "start": 2108,
              "end": 2113
            },
            "start": 2108,
            "end": 2113
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "draw",
              "raw": "'draw'",
              "start": 2116,
              "end": 2122
            },
            "start": 2116,
            "end": 2122
          }
        ],
        "start": 2108,
        "end": 2122
      },
      "declare": false,
      "start": 2093,
      "end": 2123
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2133,
                  "end": 2136
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WinType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2144
                      },
                      "typeArguments": null,
                      "start": 2137,
                      "end": 2144
                    }
                  ],
                  "start": 2136,
                  "end": 2145
                },
                "start": 2133,
                "end": 2145
              },
              "start": 2131,
              "end": 2145
            },
            "start": 2129,
            "end": 2145
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": null,
              "start": 2148,
              "end": 2151
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "draw",
                "raw": "'draw'",
                "start": 2152,
                "end": 2158
              }
            ],
            "optional": false,
            "start": 2148,
            "end": 2159
          },
          "definite": false,
          "start": 2129,
          "end": 2159
        }
      ],
      "declare": false,
      "start": 2125,
      "end": 2160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OK",
        "optional": false,
        "typeAnnotation": null,
        "start": 2194,
        "end": 2196
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2198
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2197,
            "end": 2198
          }
        ],
        "start": 2196,
        "end": 2199
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2206,
              "end": 2210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "OK",
                  "raw": "\"OK\"",
                  "start": 2212,
                  "end": 2216
                },
                "start": 2212,
                "end": 2216
              },
              "start": 2210,
              "end": 2216
            },
            "accessibility": null,
            "static": false,
            "start": 2206,
            "end": 2217
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2222,
              "end": 2227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2229,
                  "end": 2230
                },
                "typeArguments": null,
                "start": 2229,
                "end": 2230
              },
              "start": 2227,
              "end": 2230
            },
            "accessibility": null,
            "static": false,
            "start": 2222,
            "end": 2231
          }
        ],
        "start": 2200,
        "end": 2233
      },
      "declare": false,
      "start": 2184,
      "end": 2233
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null,
          "start": 2250,
          "end": 2252
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2253,
                "end": 2254
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2253,
              "end": 2254
            }
          ],
          "start": 2252,
          "end": 2255
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2264
                },
                "typeArguments": null,
                "start": 2263,
                "end": 2264
              },
              "start": 2261,
              "end": 2264
            },
            "start": 2256,
            "end": 2264
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OK",
              "optional": false,
              "typeAnnotation": null,
              "start": 2267,
              "end": 2269
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2270,
                    "end": 2271
                  },
                  "typeArguments": null,
                  "start": 2270,
                  "end": 2271
                }
              ],
              "start": 2269,
              "end": 2272
            },
            "start": 2267,
            "end": 2272
          },
          "start": 2265,
          "end": 2272
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2296,
                      "end": 2300
                    },
                    "value": {
                      "type": "Literal",
                      "value": "OK",
                      "raw": "\"OK\"",
                      "start": 2302,
                      "end": 2306
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2296,
                    "end": 2306
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2316,
                      "end": 2321
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2323,
                      "end": 2328
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2316,
                    "end": 2328
                  }
                ],
                "start": 2286,
                "end": 2334
              },
              "start": 2279,
              "end": 2335
            }
          ],
          "start": 2273,
          "end": 2337
        },
        "expression": false,
        "start": 2241,
        "end": 2337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2234,
      "end": 2337
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OK",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
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
                      ],
                      "start": 2354,
                      "end": 2370
                    }
                  ],
                  "start": 2353,
                  "end": 2371
                },
                "start": 2351,
                "end": 2371
              },
              "start": 2349,
              "end": 2371
            },
            "start": 2343,
            "end": 2371
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 2374,
              "end": 2376
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 2378,
                    "end": 2385
                  },
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 2387,
                    "end": 2389
                  }
                ],
                "start": 2377,
                "end": 2390
              }
            ],
            "optional": false,
            "start": 2374,
            "end": 2391
          },
          "definite": false,
          "start": 2343,
          "end": 2391
        }
      ],
      "declare": false,
      "start": 2339,
      "end": 2392
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 2426,
        "end": 2427
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null,
              "start": 2434,
              "end": 2438
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "mapped",
                  "raw": "'mapped'",
                  "start": 2440,
                  "end": 2448
                },
                "start": 2440,
                "end": 2448
              },
              "start": 2438,
              "end": 2448
            },
            "accessibility": null,
            "static": false,
            "start": 2434,
            "end": 2449
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2454,
              "end": 2458
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2460,
                "end": 2466
              },
              "start": 2458,
              "end": 2466
            },
            "accessibility": null,
            "static": false,
            "start": 2454,
            "end": 2467
          }
        ],
        "start": 2428,
        "end": 2469
      },
      "declare": false,
      "start": 2416,
      "end": 2469
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2481,
                    "end": 2482
                  },
                  "typeArguments": null,
                  "start": 2481,
                  "end": 2482
                },
                "start": 2481,
                "end": 2484
              },
              "start": 2479,
              "end": 2484
            },
            "start": 2477,
            "end": 2484
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 2488,
                    "end": 2491
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 2493,
                    "end": 2496
                  }
                ],
                "start": 2487,
                "end": 2497
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2498,
                "end": 2501
              },
              "optional": false,
              "computed": false,
              "start": 2487,
              "end": 2501
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2502,
                    "end": 2506
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "code",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2533,
                              "end": 2537
                            },
                            "value": {
                              "type": "Literal",
                              "value": "mapped",
                              "raw": "'mapped'",
                              "start": 2539,
                              "end": 2547
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2533,
                            "end": 2547
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2557,
                              "end": 2561
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2557,
                              "end": 2561
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 2557,
                            "end": 2561
                          }
                        ],
                        "start": 2523,
                        "end": 2568
                      },
                      "start": 2516,
                      "end": 2568
                    }
                  ],
                  "start": 2510,
                  "end": 2570
                },
                "id": null,
                "generator": false,
                "start": 2502,
                "end": 2570
              }
            ],
            "optional": false,
            "start": 2487,
            "end": 2571
          },
          "definite": false,
          "start": 2477,
          "end": 2571
        }
      ],
      "declare": false,
      "start": 2471,
      "end": 2572
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Player",
        "optional": false,
        "typeAnnotation": null,
        "start": 2674,
        "end": 2680
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2689,
              "end": 2693
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2695,
                "end": 2701
              },
              "start": 2693,
              "end": 2701
            },
            "accessibility": null,
            "static": false,
            "start": 2689,
            "end": 2702
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 2707,
              "end": 2710
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2712,
                "end": 2718
              },
              "start": 2710,
              "end": 2718
            },
            "accessibility": null,
            "static": false,
            "start": 2707,
            "end": 2719
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "position",
              "optional": false,
              "typeAnnotation": null,
              "start": 2724,
              "end": 2732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "STRIKER",
                      "raw": "\"STRIKER\"",
                      "start": 2734,
                      "end": 2743
                    },
                    "start": 2734,
                    "end": 2743
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "GOALKEEPER",
                      "raw": "\"GOALKEEPER\"",
                      "start": 2746,
                      "end": 2758
                    },
                    "start": 2746,
                    "end": 2758
                  }
                ],
                "start": 2734,
                "end": 2758
              },
              "start": 2732,
              "end": 2758
            },
            "accessibility": null,
            "static": false,
            "start": 2724,
            "end": 2759
          }
        ],
        "start": 2683,
        "end": 2761
      },
      "declare": false,
      "start": 2669,
      "end": 2762
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2770,
        "end": 2771
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 2780,
              "end": 2787
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2788,
                    "end": 2793
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Player",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2794,
                          "end": 2800
                        },
                        "typeArguments": null,
                        "start": 2794,
                        "end": 2800
                      }
                    ],
                    "start": 2793,
                    "end": 2801
                  },
                  "start": 2788,
                  "end": 2801
                }
              ],
              "start": 2787,
              "end": 2802
            },
            "start": 2780,
            "end": 2802
          },
          "start": 2777,
          "end": 2802
        },
        "start": 2774,
        "end": 2802
      },
      "declare": false,
      "start": 2765,
      "end": 2803
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2816,
                  "end": 2817
                },
                "typeArguments": null,
                "start": 2816,
                "end": 2817
              },
              "start": 2814,
              "end": 2817
            },
            "start": 2812,
            "end": 2817
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2839,
                        "end": 2846
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2847,
                        "end": 2850
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2839,
                      "end": 2850
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2875,
                                  "end": 2879
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "David Gomes",
                                  "raw": "\"David Gomes\"",
                                  "start": 2881,
                                  "end": 2894
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 2875,
                                "end": 2894
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2908,
                                  "end": 2911
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 23,
                                  "raw": "23",
                                  "start": 2913,
                                  "end": 2915
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 2908,
                                "end": 2915
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2929,
                                  "end": 2937
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "GOALKEEPER",
                                  "raw": "\"GOALKEEPER\"",
                                  "start": 2939,
                                  "end": 2951
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 2929,
                                "end": 2951
                              }
                            ],
                            "start": 2861,
                            "end": 2962
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2978,
                                  "end": 2982
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "Cristiano Ronaldo",
                                  "raw": "\"Cristiano Ronaldo\"",
                                  "start": 2984,
                                  "end": 3003
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 2978,
                                "end": 3003
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3017,
                                  "end": 3020
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 33,
                                  "raw": "33",
                                  "start": 3022,
                                  "end": 3024
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 3017,
                                "end": 3024
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3038,
                                  "end": 3046
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "STRIKER",
                                  "raw": "\"STRIKER\"",
                                  "start": 3048,
                                  "end": 3057
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 3038,
                                "end": 3057
                              }
                            ],
                            "start": 2964,
                            "end": 3068
                          }
                        ],
                        "start": 2851,
                        "end": 3074
                      }
                    ],
                    "optional": false,
                    "start": 2839,
                    "end": 3075
                  },
                  "start": 2832,
                  "end": 3076
                }
              ],
              "start": 2826,
              "end": 3078
            },
            "id": null,
            "generator": false,
            "start": 2820,
            "end": 3078
          },
          "definite": false,
          "start": 2812,
          "end": 3078
        }
      ],
      "declare": false,
      "start": 2806,
      "end": 3079
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foldLeft",
        "optional": false,
        "typeAnnotation": null,
        "start": 3137,
        "end": 3145
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3146,
              "end": 3147
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3146,
            "end": 3147
          }
        ],
        "start": 3145,
        "end": 3148
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3153
              },
              "typeArguments": null,
              "start": 3152,
              "end": 3153
            },
            "start": 3150,
            "end": 3153
          },
          "start": 3149,
          "end": 3153
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "acc",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3164,
                        "end": 3165
                      },
                      "typeArguments": null,
                      "start": 3164,
                      "end": 3165
                    },
                    "start": 3162,
                    "end": 3165
                  },
                  "start": 3159,
                  "end": 3165
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3170,
                      "end": 3177
                    },
                    "start": 3168,
                    "end": 3177
                  },
                  "start": 3167,
                  "end": 3177
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3182,
                    "end": 3183
                  },
                  "typeArguments": null,
                  "start": 3182,
                  "end": 3183
                },
                "start": 3179,
                "end": 3183
              },
              "start": 3158,
              "end": 3183
            },
            "start": 3156,
            "end": 3183
          },
          "start": 3155,
          "end": 3183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3186,
            "end": 3187
          },
          "typeArguments": null,
          "start": 3186,
          "end": 3187
        },
        "start": 3184,
        "end": 3187
      },
      "body": null,
      "expression": false,
      "start": 3120,
      "end": 3188
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3198,
                "end": 3205
              },
              "start": 3196,
              "end": 3205
            },
            "start": 3193,
            "end": 3205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foldLeft",
              "optional": false,
              "typeAnnotation": null,
              "start": 3208,
              "end": 3216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 3217,
                "end": 3221
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3224,
                    "end": 3227
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3229,
                    "end": 3230
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3235,
                    "end": 3238
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3242,
                    "end": 3243
                  },
                  "start": 3235,
                  "end": 3243
                },
                "id": null,
                "generator": false,
                "start": 3223,
                "end": 3243
              }
            ],
            "optional": false,
            "start": 3208,
            "end": 3244
          },
          "definite": false,
          "start": 3193,
          "end": 3244
        }
      ],
      "declare": false,
      "start": 3189,
      "end": 3245
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 3262,
        "end": 3267
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3270,
              "end": 3271
            },
            "initializer": null,
            "computed": false,
            "start": 3270,
            "end": 3271
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3273,
              "end": 3274
            },
            "initializer": null,
            "computed": false,
            "start": 3273,
            "end": 3274
          }
        ],
        "start": 3268,
        "end": 3276
      },
      "const": false,
      "declare": false,
      "start": 3257,
      "end": 3276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3282,
        "end": 3285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 3290,
              "end": 3295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3297,
                  "end": 3302
                },
                "typeArguments": null,
                "start": 3297,
                "end": 3302
              },
              "start": 3295,
              "end": 3302
            },
            "accessibility": null,
            "static": false,
            "start": 3290,
            "end": 3302
          }
        ],
        "start": 3288,
        "end": 3304
      },
      "declare": false,
      "start": 3277,
      "end": 3304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 3322,
        "end": 3325
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3326,
              "end": 3327
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3326,
            "end": 3327
          }
        ],
        "start": 3325,
        "end": 3328
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3338,
                      "end": 3339
                    },
                    "typeArguments": null,
                    "start": 3338,
                    "end": 3339
                  },
                  "start": 3338,
                  "end": 3341
                },
                "start": 3335,
                "end": 3341
              },
              "start": 3332,
              "end": 3341
            },
            "start": 3330,
            "end": 3341
          },
          "start": 3329,
          "end": 3341
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3344,
              "end": 3345
            },
            "typeArguments": null,
            "start": 3344,
            "end": 3345
          },
          "start": 3344,
          "end": 3347
        },
        "start": 3342,
        "end": 3347
      },
      "body": null,
      "expression": false,
      "start": 3305,
      "end": 3348
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3356,
                    "end": 3359
                  },
                  "typeArguments": null,
                  "start": 3356,
                  "end": 3359
                },
                "start": 3356,
                "end": 3361
              },
              "start": 3354,
              "end": 3361
            },
            "start": 3353,
            "end": 3361
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3364,
              "end": 3367
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 3376,
                        "end": 3380
                      },
                      "prefix": true,
                      "start": 3375,
                      "end": 3380
                    },
                    "prefix": true,
                    "start": 3374,
                    "end": 3380
                  },
                  "consequent": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3386,
                              "end": 3391
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3393,
                                "end": 3398
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3399,
                                "end": 3400
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3393,
                              "end": 3400
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3386,
                            "end": 3400
                          }
                        ],
                        "start": 3384,
                        "end": 3402
                      }
                    ],
                    "start": 3383,
                    "end": 3403
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3409,
                              "end": 3414
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3416,
                                "end": 3421
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3422,
                                "end": 3423
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3416,
                              "end": 3423
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3409,
                            "end": 3423
                          }
                        ],
                        "start": 3407,
                        "end": 3425
                      }
                    ],
                    "start": 3406,
                    "end": 3426
                  },
                  "start": 3374,
                  "end": 3426
                },
                "id": null,
                "generator": false,
                "start": 3368,
                "end": 3426
              }
            ],
            "optional": false,
            "start": 3364,
            "end": 3427
          },
          "definite": false,
          "start": 3353,
          "end": 3427
        }
      ],
      "declare": false,
      "start": 3349,
      "end": 3428
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 3468,
        "end": 3472
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3475,
              "end": 3476
            },
            "initializer": null,
            "computed": false,
            "start": 3475,
            "end": 3476
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3478,
              "end": 3479
            },
            "initializer": null,
            "computed": false,
            "start": 3478,
            "end": 3479
          }
        ],
        "start": 3473,
        "end": 3481
      },
      "const": false,
      "declare": false,
      "start": 3463,
      "end": 3481
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithConvert",
        "optional": false,
        "typeAnnotation": null,
        "start": 3489,
        "end": 3505
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3506,
              "end": 3507
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3506,
            "end": 3507
          }
        ],
        "start": 3505,
        "end": 3508
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3513,
              "end": 3524
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3530,
                        "end": 3531
                      },
                      "typeArguments": null,
                      "start": 3530,
                      "end": 3531
                    },
                    "start": 3528,
                    "end": 3531
                  },
                  "start": 3525,
                  "end": 3531
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3533,
                "end": 3536
              },
              "expression": false,
              "start": 3524,
              "end": 3536
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3513,
            "end": 3536
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "convert",
              "optional": false,
              "typeAnnotation": null,
              "start": 3539,
              "end": 3546
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "converter",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "to",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3560,
                            "end": 3562
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3568,
                                        "end": 3569
                                      },
                                      "typeArguments": null,
                                      "start": 3568,
                                      "end": 3569
                                    },
                                    "start": 3566,
                                    "end": 3569
                                  },
                                  "start": 3565,
                                  "end": 3569
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3574,
                                    "end": 3575
                                  },
                                  "typeArguments": null,
                                  "start": 3574,
                                  "end": 3575
                                },
                                "start": 3571,
                                "end": 3575
                              },
                              "start": 3564,
                              "end": 3575
                            },
                            "start": 3562,
                            "end": 3575
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3560,
                          "end": 3576
                        }
                      ],
                      "start": 3558,
                      "end": 3578
                    },
                    "start": 3556,
                    "end": 3578
                  },
                  "start": 3547,
                  "end": 3578
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3580,
                "end": 3583
              },
              "expression": false,
              "start": 3546,
              "end": 3583
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3539,
            "end": 3583
          }
        ],
        "start": 3509,
        "end": 3585
      },
      "abstract": false,
      "declare": false,
      "start": 3483,
      "end": 3585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3596,
        "end": 3598
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3599,
              "end": 3600
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3599,
            "end": 3600
          }
        ],
        "start": 3598,
        "end": 3601
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3607,
                "end": 3623
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3624,
                      "end": 3625
                    },
                    "typeArguments": null,
                    "start": 3624,
                    "end": 3625
                  }
                ],
                "start": 3623,
                "end": 3626
              },
              "start": 3607,
              "end": 3626
            },
            "start": 3605,
            "end": 3626
          },
          "start": 3602,
          "end": 3626
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassWithConvert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3637,
                    "end": 3653
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3654,
                          "end": 3655
                        },
                        "typeArguments": null,
                        "start": 3654,
                        "end": 3655
                      }
                    ],
                    "start": 3653,
                    "end": 3656
                  },
                  "start": 3637,
                  "end": 3656
                },
                "start": 3634,
                "end": 3656
              },
              "start": 3631,
              "end": 3656
            },
            "start": 3629,
            "end": 3656
          },
          "start": 3628,
          "end": 3656
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3658,
        "end": 3661
      },
      "expression": false,
      "start": 3587,
      "end": 3661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 3662,
          "end": 3664
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassWithConvert",
              "optional": false,
              "typeAnnotation": null,
              "start": 3669,
              "end": 3685
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3686,
                  "end": 3690
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3691,
                  "end": 3692
                },
                "optional": false,
                "computed": false,
                "start": 3686,
                "end": 3692
              }
            ],
            "start": 3665,
            "end": 3693
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3705,
                "end": 3721
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3722,
                    "end": 3726
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3727,
                    "end": 3728
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3722,
                  "end": 3728
                }
              ],
              "start": 3701,
              "end": 3729
            },
            "id": null,
            "generator": false,
            "start": 3695,
            "end": 3729
          }
        ],
        "optional": false,
        "start": 3662,
        "end": 3730
      },
      "directive": null,
      "start": 3662,
      "end": 3731
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 3738,
        "end": 3742
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3743,
              "end": 3744
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3743,
            "end": 3744
          }
        ],
        "start": 3742,
        "end": 3745
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3752,
                  "end": 3753
                },
                "typeArguments": null,
                "start": 3752,
                "end": 3753
              },
              "start": 3750,
              "end": 3753
            },
            "start": 3749,
            "end": 3753
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3758,
              "end": 3759
            },
            "typeArguments": null,
            "start": 3758,
            "end": 3759
          },
          "start": 3755,
          "end": 3759
        },
        "start": 3748,
        "end": 3759
      },
      "declare": false,
      "start": 3733,
      "end": 3760
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3779,
        "end": 3786
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3787,
              "end": 3788
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3787,
            "end": 3788
          }
        ],
        "start": 3786,
        "end": 3789
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3793,
                "end": 3794
              },
              "typeArguments": null,
              "start": 3793,
              "end": 3794
            },
            "start": 3791,
            "end": 3794
          },
          "start": 3790,
          "end": 3794
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 3797,
            "end": 3801
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3802,
                  "end": 3803
                },
                "typeArguments": null,
                "start": 3802,
                "end": 3803
              }
            ],
            "start": 3801,
            "end": 3804
          },
          "start": 3797,
          "end": 3804
        },
        "start": 3795,
        "end": 3804
      },
      "body": null,
      "expression": false,
      "start": 3762,
      "end": 3805
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 3823,
        "end": 3826
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3827,
              "end": 3828
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3827,
            "end": 3828
          }
        ],
        "start": 3826,
        "end": 3829
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 3833,
                "end": 3837
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3838,
                      "end": 3839
                    },
                    "typeArguments": null,
                    "start": 3838,
                    "end": 3839
                  }
                ],
                "start": 3837,
                "end": 3840
              },
              "start": 3833,
              "end": 3840
            },
            "start": 3831,
            "end": 3840
          },
          "start": 3830,
          "end": 3840
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 3845,
                "end": 3849
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3850,
                      "end": 3851
                    },
                    "typeArguments": null,
                    "start": 3850,
                    "end": 3851
                  }
                ],
                "start": 3849,
                "end": 3852
              },
              "start": 3845,
              "end": 3852
            },
            "start": 3843,
            "end": 3852
          },
          "start": 3842,
          "end": 3852
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3855,
          "end": 3859
        },
        "start": 3853,
        "end": 3859
      },
      "body": null,
      "expression": false,
      "start": 3806,
      "end": 3860
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 3862,
          "end": 3865
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3866,
              "end": 3873
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3874,
                  "end": 3878
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3879,
                  "end": 3880
                },
                "optional": false,
                "computed": false,
                "start": 3874,
                "end": 3880
              }
            ],
            "optional": false,
            "start": 3866,
            "end": 3881
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3883,
              "end": 3890
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3891,
                  "end": 3895
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3896,
                  "end": 3897
                },
                "optional": false,
                "computed": false,
                "start": 3891,
                "end": 3897
              }
            ],
            "optional": false,
            "start": 3883,
            "end": 3898
          }
        ],
        "optional": false,
        "start": 3862,
        "end": 3899
      },
      "directive": null,
      "start": 3862,
      "end": 3900
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 3900
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30,
    "range": [
      22,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "truePromise",
    "start": 31,
    "end": 42,
    "range": [
      31,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 46,
    "end": 53,
    "range": [
      46,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 54,
    "end": 58,
    "range": [
      54,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 73,
    "end": 80,
    "range": [
      73,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 81,
    "end": 88,
    "range": [
      81,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 89,
    "end": 93,
    "range": [
      89,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108,
    "range": [
      99,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144,
    "range": [
      136,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207,
    "range": [
      199,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "wrappedFoo",
    "start": 208,
    "end": 218,
    "range": [
      208,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 222,
    "end": 226,
    "range": [
      222,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 247,
    "end": 251,
    "range": [
      247,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 252,
    "end": 257,
    "range": [
      252,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 263,
    "end": 271,
    "range": [
      263,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapBar",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 280,
    "end": 285,
    "range": [
      280,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 287,
    "end": 292,
    "range": [
      287,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 295,
    "end": 299,
    "range": [
      295,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 300,
    "end": 305,
    "range": [
      300,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319,
    "range": [
      313,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 334,
    "end": 342,
    "range": [
      334,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "wrappedBar",
    "start": 343,
    "end": 353,
    "range": [
      343,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 362,
    "end": 367,
    "range": [
      362,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380,
    "range": [
      375,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 389,
    "end": 394,
    "range": [
      389,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 400,
    "end": 405,
    "range": [
      400,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "inferred",
    "start": 406,
    "end": 414,
    "range": [
      406,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapBar",
    "start": 417,
    "end": 424,
    "range": [
      417,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 425,
    "end": 430,
    "range": [
      425,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442,
    "range": [
      437,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapBar",
    "start": 453,
    "end": 460,
    "range": [
      453,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 473,
    "end": 478,
    "range": [
      473,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 479,
    "end": 485,
    "range": [
      479,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493,
    "range": [
      487,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 496,
    "end": 501,
    "range": [
      496,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 507,
    "end": 512,
    "range": [
      507,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "literal2",
    "start": 513,
    "end": 521,
    "range": [
      513,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapBar",
    "start": 524,
    "end": 531,
    "range": [
      524,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 532,
    "end": 538,
    "range": [
      532,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 555,
    "end": 561,
    "range": [
      555,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 562,
    "end": 566,
    "range": [
      562,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 567,
    "end": 572,
    "range": [
      567,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 578,
    "end": 586,
    "range": [
      578,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "wrappedBaz",
    "start": 587,
    "end": 597,
    "range": [
      587,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 601,
    "end": 605,
    "range": [
      601,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 619,
    "end": 624,
    "range": [
      619,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 625,
    "end": 630,
    "range": [
      625,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 640,
    "end": 645,
    "range": [
      640,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 651,
    "end": 657,
    "range": [
      651,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 658,
    "end": 662,
    "range": [
      658,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 663,
    "end": 668,
    "range": [
      663,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 696,
    "end": 705,
    "range": [
      696,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "FolderContentItem",
    "start": 706,
    "end": 723,
    "range": [
      706,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734,
    "range": [
      730,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 736,
    "end": 744,
    "range": [
      736,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "String",
    "value": "'file'",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 758,
    "end": 761,
    "range": [
      758,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "FolderContentItem",
    "start": 765,
    "end": 782,
    "range": [
      765,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 817,
    "end": 819,
    "range": [
      817,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 823,
    "end": 827,
    "range": [
      823,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "String",
    "value": "'folder'",
    "start": 829,
    "end": 837,
    "range": [
      829,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 866,
    "end": 869,
    "range": [
      866,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 870,
    "end": 873,
    "range": [
      870,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 875,
    "end": 880,
    "range": [
      875,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 882,
    "end": 888,
    "range": [
      882,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 911,
    "end": 914,
    "range": [
      911,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "mappedArr",
    "start": 915,
    "end": 924,
    "range": [
      915,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 926,
    "end": 931,
    "range": [
      926,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 933,
    "end": 939,
    "range": [
      933,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 941,
    "end": 947,
    "range": [
      941,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 952,
    "end": 955,
    "range": [
      952,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 969,
    "end": 971,
    "range": [
      969,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 978,
    "end": 984,
    "range": [
      978,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1026,
    "end": 1035,
    "range": [
      1026,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "DiagnosticSeverity",
    "start": 1036,
    "end": 1054,
    "range": [
      1036,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1058,
    "end": 1064,
    "range": [
      1058,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1065,
    "end": 1070,
    "range": [
      1065,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1071,
    "end": 1076,
    "range": [
      1071,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1083,
    "end": 1089,
    "range": [
      1083,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1090,
    "end": 1095,
    "range": [
      1090,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "Warning",
    "start": 1096,
    "end": 1103,
    "range": [
      1096,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1110,
    "end": 1116,
    "range": [
      1110,
      1116
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1117,
    "end": 1122,
    "range": [
      1117,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "Information",
    "start": 1123,
    "end": 1134,
    "range": [
      1123,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1141,
    "end": 1147,
    "range": [
      1141,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1148,
    "end": 1153,
    "range": [
      1148,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "Hint",
    "start": 1154,
    "end": 1158,
    "range": [
      1154,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1167,
    "end": 1173,
    "range": [
      1167,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1174,
    "end": 1178,
    "range": [
      1174,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "DiagnosticSeverity",
    "start": 1179,
    "end": 1197,
    "range": [
      1179,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1223,
    "end": 1232,
    "range": [
      1223,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 1233,
    "end": 1243,
    "range": [
      1233,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "severity",
    "start": 1247,
    "end": 1255,
    "range": [
      1247,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "DiagnosticSeverity",
    "start": 1258,
    "end": 1276,
    "range": [
      1258,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 1279,
    "end": 1283,
    "range": [
      1279,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1286,
    "end": 1292,
    "range": [
      1286,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1295,
    "end": 1301,
    "range": [
      1295,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 1304,
    "end": 1310,
    "range": [
      1304,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1322,
    "end": 1329,
    "range": [
      1322,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1331,
    "end": 1337,
    "range": [
      1331,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1342,
    "end": 1350,
    "range": [
      1342,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "bug",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 1358,
    "end": 1368,
    "range": [
      1358,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1374,
    "end": 1377,
    "range": [
      1374,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1378,
    "end": 1384,
    "range": [
      1378,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1399,
    "end": 1405,
    "range": [
      1399,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1406,
    "end": 1412,
    "range": [
      1406,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1413,
    "end": 1416,
    "range": [
      1413,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1418,
    "end": 1423,
    "range": [
      1418,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1425,
    "end": 1427,
    "range": [
      1425,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1432,
    "end": 1438,
    "range": [
      1432,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "severity",
    "start": 1444,
    "end": 1452,
    "range": [
      1444,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "DiagnosticSeverity",
    "start": 1454,
    "end": 1472,
    "range": [
      1454,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1473,
    "end": 1478,
    "range": [
      1473,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1483,
    "end": 1490,
    "range": [
      1483,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "String",
    "value": "'message'",
    "start": 1492,
    "end": 1501,
    "range": [
      1492,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1536,
    "end": 1544,
    "range": [
      1536,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "objectToMap",
    "start": 1545,
    "end": 1556,
    "range": [
      1545,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1557,
    "end": 1560,
    "range": [
      1557,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1562,
    "end": 1565,
    "range": [
      1562,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1570,
    "end": 1576,
    "range": [
      1570,
      1576
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1577,
    "end": 1580,
    "range": [
      1577,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1585,
    "end": 1591,
    "range": [
      1585,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1592,
    "end": 1596,
    "range": [
      1592,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1597,
    "end": 1600,
    "range": [
      1597,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1602,
    "end": 1605,
    "range": [
      1602,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1606,
    "end": 1609,
    "range": [
      1606,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1610,
    "end": 1612,
    "range": [
      1610,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1614,
    "end": 1617,
    "range": [
      1614,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1658,
    "end": 1667,
    "range": [
      1658,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1668,
    "end": 1674,
    "range": [
      1668,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "phoneNumbers",
    "start": 1679,
    "end": 1691,
    "range": [
      1679,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "__typename",
    "start": 1699,
    "end": 1709,
    "range": [
      1699,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "String",
    "value": "'PhoneNumber'",
    "start": 1711,
    "end": 1724,
    "range": [
      1711,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1736,
    "end": 1744,
    "range": [
      1736,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "createPerson",
    "start": 1745,
    "end": 1757,
    "range": [
      1745,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1761,
    "end": 1767,
    "range": [
      1761,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1772,
    "end": 1778,
    "range": [
      1772,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "phoneNumbers",
    "start": 1785,
    "end": 1797,
    "range": [
      1785,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1803,
    "end": 1806,
    "range": [
      1803,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1810,
    "end": 1812,
    "range": [
      1810,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "__typename",
    "start": 1822,
    "end": 1832,
    "range": [
      1822,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "String",
    "value": "'PhoneNumber'",
    "start": 1834,
    "end": 1847,
    "range": [
      1834,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1886,
    "end": 1890,
    "range": [
      1886,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1891,
    "end": 1894,
    "range": [
      1891,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1902,
    "end": 1907,
    "range": [
      1902,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1914,
    "end": 1921,
    "range": [
      1914,
      1921
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1922,
    "end": 1930,
    "range": [
      1922,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 1931,
    "end": 1934,
    "range": [
      1931,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1938,
    "end": 1943,
    "range": [
      1938,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1949,
    "end": 1952,
    "range": [
      1949,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1958,
    "end": 1962,
    "range": [
      1958,
      1962
    ]
  },
  {
    "type": "Identifier",
    "value": "WinCondition",
    "start": 1963,
    "end": 1975,
    "range": [
      1963,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1986,
    "end": 1990,
    "range": [
      1986,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "String",
    "value": "'win'",
    "start": 1992,
    "end": 1997,
    "range": [
      1992,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "player",
    "start": 1999,
    "end": 2005,
    "range": [
      1999,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2007,
    "end": 2013,
    "range": [
      2007,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2024,
    "end": 2028,
    "range": [
      2024,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "String",
    "value": "'draw'",
    "start": 2030,
    "end": 2036,
    "range": [
      2030,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2041,
    "end": 2044,
    "range": [
      2041,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 2045,
    "end": 2047,
    "range": [
      2045,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 2049,
    "end": 2052,
    "range": [
      2049,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "WinCondition",
    "start": 2053,
    "end": 2065,
    "range": [
      2053,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2069,
    "end": 2072,
    "range": [
      2069,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2075,
    "end": 2079,
    "range": [
      2075,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "String",
    "value": "'draw'",
    "start": 2081,
    "end": 2087,
    "range": [
      2081,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2093,
    "end": 2097,
    "range": [
      2093,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "WinType",
    "start": 2098,
    "end": 2105,
    "range": [
      2098,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "String",
    "value": "'win'",
    "start": 2108,
    "end": 2113,
    "range": [
      2108,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "String",
    "value": "'draw'",
    "start": 2116,
    "end": 2122,
    "range": [
      2116,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2125,
    "end": 2128,
    "range": [
      2125,
      2128
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 2129,
    "end": 2131,
    "range": [
      2129,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 2133,
    "end": 2136,
    "range": [
      2133,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "WinType",
    "start": 2137,
    "end": 2144,
    "range": [
      2137,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 2148,
    "end": 2151,
    "range": [
      2148,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "String",
    "value": "'draw'",
    "start": 2152,
    "end": 2158,
    "range": [
      2152,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2184,
    "end": 2193,
    "range": [
      2184,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "OK",
    "start": 2194,
    "end": 2196,
    "range": [
      2194,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2206,
    "end": 2210,
    "range": [
      2206,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "String",
    "value": "\"OK\"",
    "start": 2212,
    "end": 2216,
    "range": [
      2212,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2222,
    "end": 2227,
    "range": [
      2222,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2234,
    "end": 2240,
    "range": [
      2234,
      2240
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2241,
    "end": 2249,
    "range": [
      2241,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 2250,
    "end": 2252,
    "range": [
      2250,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2256,
    "end": 2261,
    "range": [
      2256,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "OK",
    "start": 2267,
    "end": 2269,
    "range": [
      2267,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2279,
    "end": 2285,
    "range": [
      2279,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2296,
    "end": 2300,
    "range": [
      2296,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "String",
    "value": "\"OK\"",
    "start": 2302,
    "end": 2306,
    "range": [
      2302,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2316,
    "end": 2321,
    "range": [
      2316,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2323,
    "end": 2328,
    "range": [
      2323,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2339,
    "end": 2342,
    "range": [
      2339,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 2343,
    "end": 2349,
    "range": [
      2343,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Identifier",
    "value": "OK",
    "start": 2351,
    "end": 2353,
    "range": [
      2351,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2355,
    "end": 2361,
    "range": [
      2355,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2363,
    "end": 2369,
    "range": [
      2363,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 2374,
    "end": 2376,
    "range": [
      2374,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2378,
    "end": 2385,
    "range": [
      2378,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2387,
    "end": 2389,
    "range": [
      2387,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2416,
    "end": 2425,
    "range": [
      2416,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 2434,
    "end": 2438,
    "range": [
      2434,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "String",
    "value": "'mapped'",
    "start": 2440,
    "end": 2448,
    "range": [
      2440,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2454,
    "end": 2458,
    "range": [
      2454,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2460,
    "end": 2466,
    "range": [
      2460,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2471,
    "end": 2476,
    "range": [
      2471,
      2476
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2477,
    "end": 2479,
    "range": [
      2477,
      2479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2488,
    "end": 2491,
    "range": [
      2488,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2493,
    "end": 2496,
    "range": [
      2493,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2498,
    "end": 2501,
    "range": [
      2498,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2502,
    "end": 2506,
    "range": [
      2502,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2507,
    "end": 2509,
    "range": [
      2507,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2516,
    "end": 2522,
    "range": [
      2516,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 2533,
    "end": 2537,
    "range": [
      2533,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "String",
    "value": "'mapped'",
    "start": 2539,
    "end": 2547,
    "range": [
      2539,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2557,
    "end": 2561,
    "range": [
      2557,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2669,
    "end": 2673,
    "range": [
      2669,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "Player",
    "start": 2674,
    "end": 2680,
    "range": [
      2674,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2689,
    "end": 2693,
    "range": [
      2689,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2695,
    "end": 2701,
    "range": [
      2695,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 2707,
    "end": 2710,
    "range": [
      2707,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2712,
    "end": 2718,
    "range": [
      2712,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 2724,
    "end": 2732,
    "range": [
      2724,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "String",
    "value": "\"STRIKER\"",
    "start": 2734,
    "end": 2743,
    "range": [
      2734,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "String",
    "value": "\"GOALKEEPER\"",
    "start": 2746,
    "end": 2758,
    "range": [
      2746,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2765,
    "end": 2769,
    "range": [
      2765,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2777,
    "end": 2779,
    "range": [
      2777,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2780,
    "end": 2787,
    "range": [
      2780,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2788,
    "end": 2793,
    "range": [
      2788,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Identifier",
    "value": "Player",
    "start": 2794,
    "end": 2800,
    "range": [
      2794,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2806,
    "end": 2811,
    "range": [
      2806,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2812,
    "end": 2814,
    "range": [
      2812,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2823,
    "end": 2825,
    "range": [
      2823,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2832,
    "end": 2838,
    "range": [
      2832,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2839,
    "end": 2846,
    "range": [
      2839,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2847,
    "end": 2850,
    "range": [
      2847,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2875,
    "end": 2879,
    "range": [
      2875,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "String",
    "value": "\"David Gomes\"",
    "start": 2881,
    "end": 2894,
    "range": [
      2881,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 2908,
    "end": 2911,
    "range": [
      2908,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 2913,
    "end": 2915,
    "range": [
      2913,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 2929,
    "end": 2937,
    "range": [
      2929,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "String",
    "value": "\"GOALKEEPER\"",
    "start": 2939,
    "end": 2951,
    "range": [
      2939,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2978,
    "end": 2982,
    "range": [
      2978,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "String",
    "value": "\"Cristiano Ronaldo\"",
    "start": 2984,
    "end": 3003,
    "range": [
      2984,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 3017,
    "end": 3020,
    "range": [
      3017,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Numeric",
    "value": "33",
    "start": 3022,
    "end": 3024,
    "range": [
      3022,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 3038,
    "end": 3046,
    "range": [
      3038,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "String",
    "value": "\"STRIKER\"",
    "start": 3048,
    "end": 3057,
    "range": [
      3048,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3120,
    "end": 3127,
    "range": [
      3120,
      3127
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3128,
    "end": 3136,
    "range": [
      3128,
      3136
    ]
  },
  {
    "type": "Identifier",
    "value": "foldLeft",
    "start": 3137,
    "end": 3145,
    "range": [
      3137,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 3159,
    "end": 3162,
    "range": [
      3159,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3170,
    "end": 3177,
    "range": [
      3170,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3179,
    "end": 3181,
    "range": [
      3179,
      3181
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3184,
    "end": 3185,
    "range": [
      3184,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3189,
    "end": 3192,
    "range": [
      3189,
      3192
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 3193,
    "end": 3196,
    "range": [
      3193,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3198,
    "end": 3205,
    "range": [
      3198,
      3205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Identifier",
    "value": "foldLeft",
    "start": 3208,
    "end": 3216,
    "range": [
      3208,
      3216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3216,
    "end": 3217,
    "range": [
      3216,
      3217
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3217,
    "end": 3221,
    "range": [
      3217,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 3224,
    "end": 3227,
    "range": [
      3224,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3232,
    "end": 3234,
    "range": [
      3232,
      3234
    ]
  },
  {
    "type": "Identifier",
    "value": "acc",
    "start": 3235,
    "end": 3238,
    "range": [
      3235,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3239,
    "end": 3241,
    "range": [
      3239,
      3241
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3257,
    "end": 3261,
    "range": [
      3257,
      3261
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 3262,
    "end": 3267,
    "range": [
      3262,
      3267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3270,
    "end": 3271,
    "range": [
      3270,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3277,
    "end": 3281,
    "range": [
      3277,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3282,
    "end": 3285,
    "range": [
      3282,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3288,
    "end": 3289,
    "range": [
      3288,
      3289
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3290,
    "end": 3295,
    "range": [
      3290,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 3297,
    "end": 3302,
    "range": [
      3297,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3305,
    "end": 3312,
    "range": [
      3305,
      3312
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3313,
    "end": 3321,
    "range": [
      3313,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3322,
    "end": 3325,
    "range": [
      3322,
      3325
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3335,
    "end": 3337,
    "range": [
      3335,
      3337
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3339,
    "end": 3340,
    "range": [
      3339,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3341,
    "end": 3342,
    "range": [
      3341,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3349,
    "end": 3352,
    "range": [
      3349,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3356,
    "end": 3359,
    "range": [
      3356,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3360,
    "end": 3361,
    "range": [
      3360,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3364,
    "end": 3367,
    "range": [
      3364,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3371,
    "end": 3373,
    "range": [
      3371,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3376,
    "end": 3380,
    "range": [
      3376,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3386,
    "end": 3391,
    "range": [
      3386,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 3393,
    "end": 3398,
    "range": [
      3393,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3409,
    "end": 3414,
    "range": [
      3409,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 3416,
    "end": 3421,
    "range": [
      3416,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3463,
    "end": 3467,
    "range": [
      3463,
      3467
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 3468,
    "end": 3472,
    "range": [
      3468,
      3472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3483,
    "end": 3488,
    "range": [
      3483,
      3488
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithConvert",
    "start": 3489,
    "end": 3505,
    "range": [
      3489,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3513,
    "end": 3524,
    "range": [
      3513,
      3524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3524,
    "end": 3525,
    "range": [
      3524,
      3525
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3525,
    "end": 3528,
    "range": [
      3525,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3533,
    "end": 3534,
    "range": [
      3533,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Identifier",
    "value": "convert",
    "start": 3539,
    "end": 3546,
    "range": [
      3539,
      3546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3546,
    "end": 3547,
    "range": [
      3546,
      3547
    ]
  },
  {
    "type": "Identifier",
    "value": "converter",
    "start": 3547,
    "end": 3556,
    "range": [
      3547,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 3560,
    "end": 3562,
    "range": [
      3560,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3564,
    "end": 3565,
    "range": [
      3564,
      3565
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3571,
    "end": 3573,
    "range": [
      3571,
      3573
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3587,
    "end": 3595,
    "range": [
      3587,
      3595
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3596,
    "end": 3598,
    "range": [
      3596,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3602,
    "end": 3605,
    "range": [
      3602,
      3605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithConvert",
    "start": 3607,
    "end": 3623,
    "range": [
      3607,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3624,
    "end": 3625,
    "range": [
      3624,
      3625
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3626,
    "end": 3627,
    "range": [
      3626,
      3627
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3628,
    "end": 3629,
    "range": [
      3628,
      3629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3629,
    "end": 3630,
    "range": [
      3629,
      3630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3634,
    "end": 3636,
    "range": [
      3634,
      3636
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithConvert",
    "start": 3637,
    "end": 3653,
    "range": [
      3637,
      3653
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3653,
    "end": 3654,
    "range": [
      3653,
      3654
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3662,
    "end": 3664,
    "range": [
      3662,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3665,
    "end": 3668,
    "range": [
      3665,
      3668
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithConvert",
    "start": 3669,
    "end": 3685,
    "range": [
      3669,
      3685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 3686,
    "end": 3690,
    "range": [
      3686,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3691,
    "end": 3692,
    "range": [
      3691,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3698,
    "end": 3700,
    "range": [
      3698,
      3700
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3701,
    "end": 3704,
    "range": [
      3701,
      3704
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithConvert",
    "start": 3705,
    "end": 3721,
    "range": [
      3705,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 3722,
    "end": 3726,
    "range": [
      3722,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3733,
    "end": 3737,
    "range": [
      3733,
      3737
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 3738,
    "end": 3742,
    "range": [
      3738,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3744,
    "end": 3745,
    "range": [
      3744,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3746,
    "end": 3747,
    "range": [
      3746,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3748,
    "end": 3749,
    "range": [
      3748,
      3749
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3755,
    "end": 3757,
    "range": [
      3755,
      3757
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3759,
    "end": 3760,
    "range": [
      3759,
      3760
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3762,
    "end": 3769,
    "range": [
      3762,
      3769
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3770,
    "end": 3778,
    "range": [
      3770,
      3778
    ]
  },
  {
    "type": "Identifier",
    "value": "makeFoo",
    "start": 3779,
    "end": 3786,
    "range": [
      3779,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3786,
    "end": 3787,
    "range": [
      3786,
      3787
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3790,
    "end": 3791,
    "range": [
      3790,
      3791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 3797,
    "end": 3801,
    "range": [
      3797,
      3801
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3801,
    "end": 3802,
    "range": [
      3801,
      3802
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3802,
    "end": 3803,
    "range": [
      3802,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3804,
    "end": 3805,
    "range": [
      3804,
      3805
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3806,
    "end": 3813,
    "range": [
      3806,
      3813
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3814,
    "end": 3822,
    "range": [
      3814,
      3822
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 3823,
    "end": 3826,
    "range": [
      3823,
      3826
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3826,
    "end": 3827,
    "range": [
      3826,
      3827
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3827,
    "end": 3828,
    "range": [
      3827,
      3828
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3828,
    "end": 3829,
    "range": [
      3828,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 3833,
    "end": 3837,
    "range": [
      3833,
      3837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3838,
    "end": 3839,
    "range": [
      3838,
      3839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 3845,
    "end": 3849,
    "range": [
      3845,
      3849
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3849,
    "end": 3850,
    "range": [
      3849,
      3850
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3850,
    "end": 3851,
    "range": [
      3850,
      3851
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3851,
    "end": 3852,
    "range": [
      3851,
      3852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3853,
    "end": 3854,
    "range": [
      3853,
      3854
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3855,
    "end": 3859,
    "range": [
      3855,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 3862,
    "end": 3865,
    "range": [
      3862,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3865,
    "end": 3866,
    "range": [
      3865,
      3866
    ]
  },
  {
    "type": "Identifier",
    "value": "makeFoo",
    "start": 3866,
    "end": 3873,
    "range": [
      3866,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 3874,
    "end": 3878,
    "range": [
      3874,
      3878
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3878,
    "end": 3879,
    "range": [
      3878,
      3879
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3879,
    "end": 3880,
    "range": [
      3879,
      3880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3880,
    "end": 3881,
    "range": [
      3880,
      3881
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3881,
    "end": 3882,
    "range": [
      3881,
      3882
    ]
  },
  {
    "type": "Identifier",
    "value": "makeFoo",
    "start": 3883,
    "end": 3890,
    "range": [
      3883,
      3890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 3891,
    "end": 3895,
    "range": [
      3891,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3896,
    "end": 3897,
    "range": [
      3896,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3899,
    "end": 3900,
    "range": [
      3899,
      3900
    ]
  }
]
```
