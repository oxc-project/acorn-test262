__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 929,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 412,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 28,
        "end": 412,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 37,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 38,
          "end": 412,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 66,
              "end": 87,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 73,
                "end": 87,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 77,
                    "end": 86,
                    "id": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 86,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 80,
                          "end": 86
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "FunctionDeclaration",
              "start": 116,
              "end": 156,
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 128,
                "name": "foo",
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
                "start": 131,
                "end": 156,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 141,
                    "end": 150,
                    "argument": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 183,
              "end": 320,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 190,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 199,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 200,
                  "end": 320,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 239,
                      "end": 265,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 246,
                        "end": 265,
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 254,
                          "end": 265,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 265,
                      "end": 266
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 291,
                      "end": 314,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 298,
                        "end": 314,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 302,
                            "end": 313,
                            "id": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 306,
                              "end": 313,
                              "callee": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 311,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    }
                  ]
                },
                "kind": "module",
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
              "start": 353,
              "end": 410,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 360,
                "end": 410,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 378,
                  "name": "fooExport",
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
                  "start": 381,
                  "end": 410,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 391,
                      "end": 404,
                      "argument": {
                        "type": "CallExpression",
                        "start": 398,
                        "end": 403,
                        "callee": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 401,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 428,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 427,
        "callee": {
          "type": "MemberExpression",
          "start": 413,
          "end": 425,
          "object": {
            "type": "Identifier",
            "start": 413,
            "end": 415,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 425,
            "name": "fooExport",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 438,
            "name": "myvar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 441,
            "end": 454,
            "callee": {
              "type": "MemberExpression",
              "start": 445,
              "end": 452,
              "object": {
                "type": "MemberExpression",
                "start": 445,
                "end": 450,
                "object": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 447,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 479,
      "end": 884,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 486,
        "end": 884,
        "id": {
          "type": "Identifier",
          "start": 493,
          "end": 495,
          "name": "m4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 496,
          "end": 884,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 525,
              "end": 546,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 532,
                "end": 546,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 536,
                    "end": 545,
                    "id": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 545,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 537,
                        "end": 545,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 539,
                          "end": 545
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "FunctionDeclaration",
              "start": 580,
              "end": 620,
              "id": {
                "type": "Identifier",
                "start": 589,
                "end": 592,
                "name": "foo",
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
                "start": 595,
                "end": 620,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 605,
                    "end": 614,
                    "argument": {
                      "type": "Identifier",
                      "start": 612,
                      "end": 613,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 652,
              "end": 791,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 659,
                "end": 791,
                "id": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 668,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 669,
                  "end": 791,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 709,
                      "end": 735,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 716,
                        "end": 735,
                        "id": {
                          "type": "Identifier",
                          "start": 722,
                          "end": 723,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 724,
                          "end": 735,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 735,
                      "end": 736
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 762,
                      "end": 785,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 769,
                        "end": 785,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 773,
                            "end": 784,
                            "id": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 777,
                              "end": 784,
                              "callee": {
                                "type": "Identifier",
                                "start": 781,
                                "end": 782,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    }
                  ]
                },
                "kind": "module",
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
              "start": 825,
              "end": 882,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 832,
                "end": 882,
                "id": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 850,
                  "name": "fooExport",
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
                  "start": 853,
                  "end": 882,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 863,
                      "end": 876,
                      "argument": {
                        "type": "CallExpression",
                        "start": 870,
                        "end": 875,
                        "callee": {
                          "type": "Identifier",
                          "start": 870,
                          "end": 873,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 885,
      "end": 900,
      "expression": {
        "type": "CallExpression",
        "start": 885,
        "end": 899,
        "callee": {
          "type": "MemberExpression",
          "start": 885,
          "end": 897,
          "object": {
            "type": "Identifier",
            "start": 885,
            "end": 887,
            "name": "m4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 888,
            "end": 897,
            "name": "fooExport",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 928,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 927,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 911,
            "name": "myvar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 914,
            "end": 927,
            "callee": {
              "type": "MemberExpression",
              "start": 918,
              "end": 925,
              "object": {
                "type": "MemberExpression",
                "start": 918,
                "end": 923,
                "object": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 920,
                  "name": "m4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 923,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 924,
                "end": 925,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 243,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "name": "extMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 51,
        "end": 88,
        "expression": {
          "type": "Literal",
          "start": 59,
          "end": 87,
          "value": "commentsExternalModules2_0",
          "raw": "\"commentsExternalModules2_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 112,
        "end": 133,
        "callee": {
          "type": "MemberExpression",
          "start": 112,
          "end": 131,
          "object": {
            "type": "MemberExpression",
            "start": 112,
            "end": 121,
            "object": {
              "type": "Identifier",
              "start": 112,
              "end": 118,
              "name": "extMod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 121,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 131,
            "name": "fooExport",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 176,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 142,
        "end": 176,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 146,
            "end": 175,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 152,
              "name": "newVar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 155,
              "end": 175,
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 173,
                "object": {
                  "type": "MemberExpression",
                  "start": 159,
                  "end": 171,
                  "object": {
                    "type": "MemberExpression",
                    "start": 159,
                    "end": 168,
                    "object": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 165,
                      "name": "extMod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 168,
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 171,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 199,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 198,
        "callee": {
          "type": "MemberExpression",
          "start": 177,
          "end": 196,
          "object": {
            "type": "MemberExpression",
            "start": 177,
            "end": 186,
            "object": {
              "type": "Identifier",
              "start": 177,
              "end": 183,
              "name": "extMod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 196,
            "name": "fooExport",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 242,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 207,
        "end": 242,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "name": "newVar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 221,
              "end": 241,
              "callee": {
                "type": "MemberExpression",
                "start": 225,
                "end": 239,
                "object": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 237,
                  "object": {
                    "type": "MemberExpression",
                    "start": 225,
                    "end": 234,
                    "object": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 231,
                      "name": "extMod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 234,
                      "name": "m4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 237,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
