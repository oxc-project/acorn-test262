__ESTREE_TEST__:PASS:
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
