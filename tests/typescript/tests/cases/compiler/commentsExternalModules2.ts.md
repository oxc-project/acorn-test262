__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 40
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 83,
                          "end": 89
                        },
                        "start": 81,
                        "end": 89
                      },
                      "start": 80,
                      "end": 89
                    },
                    "init": null,
                    "definite": false,
                    "start": 80,
                    "end": 89
                  }
                ],
                "declare": false,
                "start": 76,
                "end": 90
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 69,
              "end": 90
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 131
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 134,
                "end": 159
              },
              "expression": false,
              "start": 119,
              "end": 159
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 205
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 258,
                          "end": 259
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 260,
                          "end": 271
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 252,
                        "end": 271
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 245,
                      "end": 271
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 271,
                      "end": 272
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 308,
                              "end": 309
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 312,
                              "end": 319
                            },
                            "definite": false,
                            "start": 308,
                            "end": 319
                          }
                        ],
                        "declare": false,
                        "start": 304,
                        "end": 320
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 297,
                      "end": 320
                    }
                  ],
                  "start": 206,
                  "end": 326
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 193,
                "end": 326
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 186,
              "end": 326
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 384
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 407
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 404,
                        "end": 409
                      },
                      "start": 397,
                      "end": 410
                    }
                  ],
                  "start": 387,
                  "end": 416
                },
                "expression": false,
                "start": 366,
                "end": 416
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 359,
              "end": 416
            }
          ],
          "start": 41,
          "end": 418
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 28,
        "end": 418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 21,
      "end": 418
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 431
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 419,
        "end": 433
      },
      "directive": null,
      "start": 419,
      "end": 434
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
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 444
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 453
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 456
                },
                "optional": false,
                "computed": false,
                "start": 451,
                "end": 456
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 451,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [],
            "start": 447,
            "end": 460
          },
          "definite": false,
          "start": 439,
          "end": 460
        }
      ],
      "declare": false,
      "start": 435,
      "end": 461
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 504
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 548,
                          "end": 554
                        },
                        "start": 546,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "init": null,
                    "definite": false,
                    "start": 545,
                    "end": 554
                  }
                ],
                "declare": false,
                "start": 541,
                "end": 555
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 534,
              "end": 555
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 601
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "start": 614,
                    "end": 623
                  }
                ],
                "start": 604,
                "end": 629
              },
              "expression": false,
              "start": 589,
              "end": 629
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 680
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 734,
                          "end": 735
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 736,
                          "end": 747
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 728,
                        "end": 747
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 721,
                      "end": 747
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 747,
                      "end": 748
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 785,
                              "end": 786
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 793,
                                "end": 794
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 789,
                              "end": 796
                            },
                            "definite": false,
                            "start": 785,
                            "end": 796
                          }
                        ],
                        "declare": false,
                        "start": 781,
                        "end": 797
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 774,
                      "end": 797
                    }
                  ],
                  "start": 681,
                  "end": 803
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 668,
                "end": 803
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 661,
              "end": 803
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 862
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 885
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 882,
                        "end": 887
                      },
                      "start": 875,
                      "end": 888
                    }
                  ],
                  "start": 865,
                  "end": 894
                },
                "expression": false,
                "start": 844,
                "end": 894
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 837,
              "end": 894
            }
          ],
          "start": 505,
          "end": 896
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 492,
        "end": 896
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 485,
      "end": 896
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
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 899
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 909
          },
          "optional": false,
          "computed": false,
          "start": 897,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 897,
        "end": 911
      },
      "directive": null,
      "start": 897,
      "end": 912
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
            "name": "myvar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 917,
            "end": 923
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 932
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 933,
                  "end": 935
                },
                "optional": false,
                "computed": false,
                "start": 930,
                "end": 935
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 936,
                "end": 937
              },
              "optional": false,
              "computed": false,
              "start": 930,
              "end": 937
            },
            "typeArguments": null,
            "arguments": [],
            "start": 926,
            "end": 939
          },
          "definite": false,
          "start": 917,
          "end": 939
        }
      ],
      "declare": false,
      "start": 913,
      "end": 940
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 941
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "commentsExternalModules2_0",
          "raw": "\"commentsExternalModules2_0\"",
          "start": 59,
          "end": 87
        },
        "start": 51,
        "end": 88
      },
      "importKind": "value",
      "start": 35,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 121
            },
            "optional": false,
            "computed": false,
            "start": 112,
            "end": 121
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 112,
        "end": 133
      },
      "directive": null,
      "start": 112,
      "end": 134
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "newVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 152
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 165
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 168
                    },
                    "optional": false,
                    "computed": false,
                    "start": 159,
                    "end": 168
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 171
                  },
                  "optional": false,
                  "computed": false,
                  "start": 159,
                  "end": 171
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [],
              "start": 155,
              "end": 175
            },
            "definite": false,
            "start": 146,
            "end": 175
          }
        ],
        "declare": false,
        "start": 142,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 183
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 186
            },
            "optional": false,
            "computed": false,
            "start": 177,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 196
          },
          "optional": false,
          "computed": false,
          "start": 177,
          "end": 196
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 177,
        "end": 198
      },
      "directive": null,
      "start": 177,
      "end": 199
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "newVar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 218
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 231
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 234
                    },
                    "optional": false,
                    "computed": false,
                    "start": 225,
                    "end": 234
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 237
                  },
                  "optional": false,
                  "computed": false,
                  "start": 225,
                  "end": 237
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
                },
                "optional": false,
                "computed": false,
                "start": 225,
                "end": 239
              },
              "typeArguments": null,
              "arguments": [],
              "start": 221,
              "end": 241
            },
            "definite": false,
            "start": 211,
            "end": 241
          }
        ],
        "declare": false,
        "start": 207,
        "end": 242
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 200,
      "end": 242
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 242
}
```
