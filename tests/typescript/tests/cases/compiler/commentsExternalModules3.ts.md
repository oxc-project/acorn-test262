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
          "start": 35,
          "end": 37
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
                          "start": 80,
                          "end": 86
                        },
                        "start": 78,
                        "end": 86
                      },
                      "start": 77,
                      "end": 86
                    },
                    "init": null,
                    "definite": false,
                    "start": 77,
                    "end": 86
                  }
                ],
                "declare": false,
                "start": 73,
                "end": 87
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 66,
              "end": 87
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 128
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
                      "start": 148,
                      "end": 149
                    },
                    "start": 141,
                    "end": 150
                  }
                ],
                "start": 131,
                "end": 156
              },
              "expression": false,
              "start": 116,
              "end": 156
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
                  "start": 197,
                  "end": 199
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
                          "start": 252,
                          "end": 253
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 254,
                          "end": 265
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 246,
                        "end": 265
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 239,
                      "end": 265
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 265,
                      "end": 266
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
                              "start": 302,
                              "end": 303
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 311
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 306,
                              "end": 313
                            },
                            "definite": false,
                            "start": 302,
                            "end": 313
                          }
                        ],
                        "declare": false,
                        "start": 298,
                        "end": 314
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 291,
                      "end": 314
                    }
                  ],
                  "start": 200,
                  "end": 320
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 190,
                "end": 320
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 183,
              "end": 320
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
                  "start": 369,
                  "end": 378
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
                          "start": 398,
                          "end": 401
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 398,
                        "end": 403
                      },
                      "start": 391,
                      "end": 404
                    }
                  ],
                  "start": 381,
                  "end": 410
                },
                "expression": false,
                "start": 360,
                "end": 410
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 353,
              "end": 410
            }
          ],
          "start": 38,
          "end": 412
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 28,
        "end": 412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 21,
      "end": 412
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
            "start": 413,
            "end": 415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 425
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 413,
        "end": 427
      },
      "directive": null,
      "start": 413,
      "end": 428
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
            "start": 433,
            "end": 438
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
                  "start": 445,
                  "end": 447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 450
                },
                "optional": false,
                "computed": false,
                "start": 445,
                "end": 450
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 452
              },
              "optional": false,
              "computed": false,
              "start": 445,
              "end": 452
            },
            "typeArguments": null,
            "arguments": [],
            "start": 441,
            "end": 454
          },
          "definite": false,
          "start": 433,
          "end": 454
        }
      ],
      "declare": false,
      "start": 429,
      "end": 455
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
          "start": 493,
          "end": 495
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
                          "start": 539,
                          "end": 545
                        },
                        "start": 537,
                        "end": 545
                      },
                      "start": 536,
                      "end": 545
                    },
                    "init": null,
                    "definite": false,
                    "start": 536,
                    "end": 545
                  }
                ],
                "declare": false,
                "start": 532,
                "end": 546
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 525,
              "end": 546
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 592
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
                      "start": 612,
                      "end": 613
                    },
                    "start": 605,
                    "end": 614
                  }
                ],
                "start": 595,
                "end": 620
              },
              "expression": false,
              "start": 580,
              "end": 620
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
                  "start": 666,
                  "end": 668
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
                          "start": 722,
                          "end": 723
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 724,
                          "end": 735
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 716,
                        "end": 735
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 709,
                      "end": 735
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 735,
                      "end": 736
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
                              "start": 773,
                              "end": 774
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 781,
                                "end": 782
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 777,
                              "end": 784
                            },
                            "definite": false,
                            "start": 773,
                            "end": 784
                          }
                        ],
                        "declare": false,
                        "start": 769,
                        "end": 785
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 762,
                      "end": 785
                    }
                  ],
                  "start": 669,
                  "end": 791
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 659,
                "end": 791
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 652,
              "end": 791
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
                  "start": 841,
                  "end": 850
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
                          "start": 870,
                          "end": 873
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 870,
                        "end": 875
                      },
                      "start": 863,
                      "end": 876
                    }
                  ],
                  "start": 853,
                  "end": 882
                },
                "expression": false,
                "start": 832,
                "end": 882
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 825,
              "end": 882
            }
          ],
          "start": 496,
          "end": 884
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 486,
        "end": 884
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 479,
      "end": 884
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
            "start": 885,
            "end": 887
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 897
          },
          "optional": false,
          "computed": false,
          "start": 885,
          "end": 897
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 885,
        "end": 899
      },
      "directive": null,
      "start": 885,
      "end": 900
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
            "start": 905,
            "end": 911
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
                  "start": 918,
                  "end": 920
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 923
                },
                "optional": false,
                "computed": false,
                "start": 918,
                "end": 923
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 924,
                "end": 925
              },
              "optional": false,
              "computed": false,
              "start": 918,
              "end": 925
            },
            "typeArguments": null,
            "arguments": [],
            "start": 914,
            "end": 927
          },
          "definite": false,
          "start": 905,
          "end": 927
        }
      ],
      "declare": false,
      "start": 901,
      "end": 928
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 929
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
          "value": "./commentsExternalModules2_0",
          "raw": "\"./commentsExternalModules2_0\"",
          "start": 59,
          "end": 89
        },
        "start": 51,
        "end": 90
      },
      "importKind": "value",
      "start": 35,
      "end": 91
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
              "start": 114,
              "end": 120
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 114,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 114,
        "end": 135
      },
      "directive": null,
      "start": 114,
      "end": 136
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
              "start": 148,
              "end": 154
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
                      "start": 161,
                      "end": 167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 170
                    },
                    "optional": false,
                    "computed": false,
                    "start": 161,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 173
                  },
                  "optional": false,
                  "computed": false,
                  "start": 161,
                  "end": 173
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "optional": false,
                "computed": false,
                "start": 161,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [],
              "start": 157,
              "end": 177
            },
            "definite": false,
            "start": 148,
            "end": 177
          }
        ],
        "declare": false,
        "start": 144,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 178
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
              "start": 179,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 188
            },
            "optional": false,
            "computed": false,
            "start": 179,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 198
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 198
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 179,
        "end": 200
      },
      "directive": null,
      "start": 179,
      "end": 201
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
              "start": 213,
              "end": 220
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
                      "start": 227,
                      "end": 233
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 236
                    },
                    "optional": false,
                    "computed": false,
                    "start": 227,
                    "end": 236
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 227,
                  "end": 239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "optional": false,
                "computed": false,
                "start": 227,
                "end": 241
              },
              "typeArguments": null,
              "arguments": [],
              "start": 223,
              "end": 243
            },
            "definite": false,
            "start": 213,
            "end": 243
          }
        ],
        "declare": false,
        "start": 209,
        "end": 244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 202,
      "end": 244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 244
}
```
