__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "start": 25,
              "end": 26
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 26
          }
        ],
        "start": 24,
        "end": 27
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialItems",
                "optional": true,
                "typeAnnotation": {
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
                        "start": 61,
                        "end": 62
                      },
                      "typeArguments": null,
                      "start": 61,
                      "end": 62
                    },
                    "start": 61,
                    "end": 64
                  },
                  "start": 59,
                  "end": 64
                },
                "start": 46,
                "end": 64
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 34,
            "end": 66
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 82
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
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
                              "start": 98,
                              "end": 99
                            },
                            "typeArguments": null,
                            "start": 98,
                            "end": 99
                          },
                          "start": 96,
                          "end": 99
                        },
                        "start": 95,
                        "end": 99
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 104,
                            "end": 105
                          },
                          "start": 102,
                          "end": 105
                        },
                        "start": 101,
                        "end": 105
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 107,
                      "end": 116
                    },
                    "start": 94,
                    "end": 116
                  },
                  "start": 92,
                  "end": 116
                },
                "start": 83,
                "end": 116
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
              },
              "start": 117,
              "end": 123
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 71,
            "end": 124
          }
        ],
        "start": 28,
        "end": 126
      },
      "declare": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 151
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
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          }
        ],
        "start": 151,
        "end": 154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialValues",
          "optional": true,
          "typeAnnotation": {
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
                  "start": 171,
                  "end": 172
                },
                "typeArguments": null,
                "start": 171,
                "end": 172
              },
              "start": 171,
              "end": 174
            },
            "start": 169,
            "end": 174
          },
          "start": 155,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 191
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
                  "start": 192,
                  "end": 193
                },
                "typeArguments": null,
                "start": 192,
                "end": 193
              }
            ],
            "start": 191,
            "end": 194
          },
          "start": 177,
          "end": 194
        },
        "start": 175,
        "end": 194
      },
      "body": null,
      "expression": false,
      "start": 128,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 206
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 215
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
                          "start": 219,
                          "end": 223
                        },
                        "value": {
                          "type": "Literal",
                          "value": "bob",
                          "raw": "\"bob\"",
                          "start": 225,
                          "end": 230
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 219,
                        "end": 230
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 234
                        },
                        "value": {
                          "type": "Literal",
                          "value": 24,
                          "raw": "24",
                          "start": 236,
                          "end": 238
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 232,
                        "end": 238
                      }
                    ],
                    "start": 217,
                    "end": 240
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
                          "start": 244,
                          "end": 248
                        },
                        "value": {
                          "type": "Literal",
                          "value": "doug",
                          "raw": "\"doug\"",
                          "start": 250,
                          "end": 256
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 244,
                        "end": 256
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 258,
                          "end": 260
                        },
                        "value": {
                          "type": "Literal",
                          "value": 32,
                          "raw": "32",
                          "start": 262,
                          "end": 264
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 258,
                        "end": 264
                      }
                    ],
                    "start": 242,
                    "end": 266
                  }
                ],
                "start": 216,
                "end": 267
              }
            ],
            "optional": false,
            "start": 209,
            "end": 268
          },
          "definite": false,
          "start": 201,
          "end": 268
        }
      ],
      "declare": false,
      "start": 197,
      "end": 269
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 314
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 317
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 331
                  },
                  "optional": false,
                  "computed": false,
                  "start": 325,
                  "end": 331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 338
                },
                "optional": false,
                "computed": false,
                "start": 325,
                "end": 338
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 339,
                  "end": 340
                }
              ],
              "optional": false,
              "start": 325,
              "end": 341
            },
            "id": null,
            "generator": false,
            "start": 315,
            "end": 341
          }
        ],
        "optional": false,
        "start": 297,
        "end": 342
      },
      "directive": null,
      "start": 297,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 398
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 410
          },
          "optional": false,
          "computed": false,
          "start": 393,
          "end": 410
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 413
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 416
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 425
                  },
                  "optional": false,
                  "computed": false,
                  "start": 421,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 439
                },
                "optional": false,
                "computed": false,
                "start": 421,
                "end": 439
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 440,
                  "end": 441
                }
              ],
              "optional": false,
              "start": 421,
              "end": 442
            },
            "id": null,
            "generator": false,
            "start": 411,
            "end": 442
          }
        ],
        "optional": false,
        "start": 393,
        "end": 443
      },
      "directive": null,
      "start": 393,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 492
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 504
          },
          "optional": false,
          "computed": false,
          "start": 487,
          "end": 504
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 510
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 516
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 521
                  },
                  "optional": false,
                  "computed": false,
                  "start": 515,
                  "end": 521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 528
                },
                "optional": false,
                "computed": false,
                "start": 515,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 529,
                  "end": 530
                }
              ],
              "optional": false,
              "start": 515,
              "end": 531
            },
            "id": null,
            "generator": false,
            "start": 505,
            "end": 531
          }
        ],
        "optional": false,
        "start": 487,
        "end": 532
      },
      "directive": null,
      "start": 487,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 588
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 600
          },
          "optional": false,
          "computed": false,
          "start": 583,
          "end": 600
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 603
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 612
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 613,
                    "end": 615
                  },
                  "optional": false,
                  "computed": false,
                  "start": 611,
                  "end": 615
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 629
                },
                "optional": false,
                "computed": false,
                "start": 611,
                "end": 629
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 630,
                  "end": 631
                }
              ],
              "optional": false,
              "start": 611,
              "end": 632
            },
            "id": null,
            "generator": false,
            "start": 601,
            "end": 632
          }
        ],
        "optional": false,
        "start": 583,
        "end": 633
      },
      "directive": null,
      "start": 583,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 715
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 710,
          "end": 727
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 730
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 739
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 743
              },
              "optional": false,
              "computed": false,
              "start": 738,
              "end": 743
            },
            "id": null,
            "generator": false,
            "start": 728,
            "end": 743
          }
        ],
        "optional": false,
        "start": 710,
        "end": 744
      },
      "directive": null,
      "start": 710,
      "end": 745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 776
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 788
          },
          "optional": false,
          "computed": false,
          "start": 771,
          "end": 788
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 794
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 804
              },
              "optional": false,
              "computed": false,
              "start": 799,
              "end": 804
            },
            "id": null,
            "generator": false,
            "start": 789,
            "end": 804
          }
        ],
        "optional": false,
        "start": 771,
        "end": 805
      },
      "directive": null,
      "start": 771,
      "end": 806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 832,
            "end": 837
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 849
          },
          "optional": false,
          "computed": false,
          "start": 832,
          "end": 849
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 855
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 861
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 864
                  },
                  "optional": false,
                  "computed": false,
                  "start": 860,
                  "end": 864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 871
                },
                "optional": false,
                "computed": false,
                "start": 860,
                "end": 871
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 872,
                  "end": 873
                }
              ],
              "optional": false,
              "start": 860,
              "end": 874
            },
            "id": null,
            "generator": false,
            "start": 850,
            "end": 874
          }
        ],
        "optional": false,
        "start": 832,
        "end": 875
      },
      "directive": null,
      "start": 832,
      "end": 876
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 925,
            "end": 930
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 942
          },
          "optional": false,
          "computed": false,
          "start": 925,
          "end": 942
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 945
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 948
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 953,
                    "end": 954
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 955,
                    "end": 959
                  },
                  "optional": false,
                  "computed": false,
                  "start": 953,
                  "end": 959
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 973
                },
                "optional": false,
                "computed": false,
                "start": 953,
                "end": 973
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 974,
                  "end": 975
                }
              ],
              "optional": false,
              "start": 953,
              "end": 976
            },
            "id": null,
            "generator": false,
            "start": 943,
            "end": 976
          }
        ],
        "optional": false,
        "start": 925,
        "end": 977
      },
      "directive": null,
      "start": 925,
      "end": 978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 1031,
            "end": 1036
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1048
          },
          "optional": false,
          "computed": false,
          "start": 1031,
          "end": 1048
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1054
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1059,
                    "end": 1060
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1063
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1059,
                  "end": 1063
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1070
                },
                "optional": false,
                "computed": false,
                "start": 1059,
                "end": 1070
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1071,
                  "end": 1072
                }
              ],
              "optional": false,
              "start": 1059,
              "end": 1073
            },
            "id": null,
            "generator": false,
            "start": 1049,
            "end": 1073
          }
        ],
        "optional": false,
        "start": 1031,
        "end": 1074
      },
      "directive": null,
      "start": 1031,
      "end": 1075
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1081
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 1082,
            "end": 1093
          },
          "optional": false,
          "computed": false,
          "start": 1076,
          "end": 1093
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1095,
                "end": 1096
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1099
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1104,
                    "end": 1105
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1106,
                    "end": 1110
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1104,
                  "end": 1110
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1111,
                  "end": 1124
                },
                "optional": false,
                "computed": false,
                "start": 1104,
                "end": 1124
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1125,
                  "end": 1126
                }
              ],
              "optional": false,
              "start": 1104,
              "end": 1127
            },
            "id": null,
            "generator": false,
            "start": 1094,
            "end": 1127
          }
        ],
        "optional": false,
        "start": 1076,
        "end": 1128
      },
      "directive": null,
      "start": 1076,
      "end": 1129
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "MyArrayWrapper",
    "start": 10,
    "end": 24,
    "range": [
      10,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 34,
    "end": 45,
    "range": [
      34,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "initialItems",
    "start": 46,
    "end": 58,
    "range": [
      46,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 71,
    "end": 82,
    "range": [
      71,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 83,
    "end": 92,
    "range": [
      83,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 107,
    "end": 109,
    "range": [
      107,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 119,
    "end": 123,
    "range": [
      119,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
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
    "value": "create",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 155,
    "end": 168,
    "range": [
      155,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "MyArrayWrapper",
    "start": 177,
    "end": 191,
    "range": [
      177,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "String",
    "value": "\"bob\"",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 236,
    "end": 238,
    "range": [
      236,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 244,
    "end": 248,
    "range": [
      244,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "String",
    "value": "\"doug\"",
    "start": 250,
    "end": 256,
    "range": [
      250,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 297,
    "end": 302,
    "range": [
      297,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 303,
    "end": 314,
    "range": [
      303,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 322,
    "end": 324,
    "range": [
      322,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 399,
    "end": 410,
    "range": [
      399,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 423,
    "end": 425,
    "range": [
      423,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 426,
    "end": 439,
    "range": [
      426,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 487,
    "end": 492,
    "range": [
      487,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 493,
    "end": 504,
    "range": [
      493,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514,
    "range": [
      512,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 517,
    "end": 521,
    "range": [
      517,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 522,
    "end": 528,
    "range": [
      522,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 583,
    "end": 588,
    "range": [
      583,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 589,
    "end": 600,
    "range": [
      589,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 616,
    "end": 629,
    "range": [
      616,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 710,
    "end": 715,
    "range": [
      710,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 716,
    "end": 727,
    "range": [
      716,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737,
    "range": [
      735,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 740,
    "end": 743,
    "range": [
      740,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 777,
    "end": 788,
    "range": [
      777,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 796,
    "end": 798,
    "range": [
      796,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 832,
    "end": 837,
    "range": [
      832,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 838,
    "end": 849,
    "range": [
      838,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 857,
    "end": 859,
    "range": [
      857,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 862,
    "end": 864,
    "range": [
      862,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 925,
    "end": 930,
    "range": [
      925,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 931,
    "end": 942,
    "range": [
      931,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 950,
    "end": 952,
    "range": [
      950,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 955,
    "end": 959,
    "range": [
      955,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 960,
    "end": 973,
    "range": [
      960,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1031,
    "end": 1036,
    "range": [
      1031,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1037,
    "end": 1048,
    "range": [
      1037,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1056,
    "end": 1058,
    "range": [
      1056,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1061,
    "end": 1063,
    "range": [
      1061,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 1064,
    "end": 1070,
    "range": [
      1064,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 1076,
    "end": 1081,
    "range": [
      1076,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1082,
    "end": 1093,
    "range": [
      1082,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1101,
    "end": 1103,
    "range": [
      1101,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1106,
    "end": 1110,
    "range": [
      1106,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1111,
    "end": 1124,
    "range": [
      1111,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  }
]
```
