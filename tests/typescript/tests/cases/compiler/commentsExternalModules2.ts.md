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
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 77,
                    "end": 86,
                    "id": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 86,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 80,
                          "end": 86
                        }
                      }
                    },
                    "init": null,
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
              "type": "FunctionDeclaration",
              "start": 116,
              "end": 156,
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 128,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
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
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 254,
                          "end": 265,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
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
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 302,
                            "end": 313,
                            "id": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 306,
                              "end": 313,
                              "callee": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 311,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
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
                "kind": "module",
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
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 425,
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 438,
            "decorators": [],
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 536,
                    "end": 545,
                    "id": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 545,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 537,
                        "end": 545,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 539,
                          "end": 545
                        }
                      }
                    },
                    "init": null,
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
              "type": "FunctionDeclaration",
              "start": 580,
              "end": 620,
              "id": {
                "type": "Identifier",
                "start": 589,
                "end": 592,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
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
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 722,
                          "end": 723,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 724,
                          "end": 735,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
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
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 773,
                            "end": 784,
                            "id": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 777,
                              "end": 784,
                              "callee": {
                                "type": "Identifier",
                                "start": 781,
                                "end": 782,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
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
                "kind": "module",
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
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 888,
            "end": 897,
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 928,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 927,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 911,
            "decorators": [],
            "name": "myvar2",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 923,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 924,
                "end": 925,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
  "end": 242,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "extMod",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 121,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 131,
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 146,
            "end": 175,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 152,
              "decorators": [],
              "name": "newVar",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 168,
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 171,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
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
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 196,
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 211,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "decorators": [],
              "name": "newVar2",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 234,
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 237,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
