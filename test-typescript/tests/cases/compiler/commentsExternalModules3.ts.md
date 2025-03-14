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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 28,
        "end": 412,
        "body": {
          "type": "TSModuleBlock",
          "start": 38,
          "end": 412,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 66,
              "end": 87,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 73,
                "end": 87,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 77,
                    "end": 86,
                    "definite": false,
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
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "FunctionDeclaration",
              "start": 116,
              "end": 156,
              "async": false,
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
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 128,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 183,
              "end": 320,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 190,
                "end": 320,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 200,
                  "end": 320,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 239,
                      "end": 265,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 246,
                        "end": 265,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 254,
                          "end": 265,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": null
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
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
                      "attributes": [],
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 298,
                        "end": 314,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 302,
                            "end": 313,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "decorators": [],
                              "name": "i",
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 306,
                              "end": 313,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 311,
                                "decorators": [],
                                "name": "c",
                                "optional": false
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 199,
                  "decorators": [],
                  "name": "m2",
                  "optional": false
                },
                "kind": "module"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 353,
              "end": 410,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 360,
                "end": 410,
                "async": false,
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
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 401,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 378,
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false
                },
                "params": []
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 37,
          "decorators": [],
          "name": "m1",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 428,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 427,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 413,
          "end": 425,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 413,
            "end": 415,
            "decorators": [],
            "name": "m1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 425,
            "decorators": [],
            "name": "fooExport",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 438,
            "decorators": [],
            "name": "myvar",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 441,
            "end": 454,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 445,
              "end": 452,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 445,
                "end": 450,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 447,
                  "decorators": [],
                  "name": "m1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "m2",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 479,
      "end": 884,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 486,
        "end": 884,
        "body": {
          "type": "TSModuleBlock",
          "start": 496,
          "end": 884,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 525,
              "end": 546,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 532,
                "end": 546,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 536,
                    "end": 545,
                    "definite": false,
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
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "FunctionDeclaration",
              "start": 580,
              "end": 620,
              "async": false,
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
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 589,
                "end": 592,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 652,
              "end": 791,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 659,
                "end": 791,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 669,
                  "end": 791,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 709,
                      "end": 735,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 716,
                        "end": 735,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 724,
                          "end": 735,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 722,
                          "end": 723,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": null
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
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
                      "attributes": [],
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 769,
                        "end": 785,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 773,
                            "end": 784,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
                              "decorators": [],
                              "name": "i",
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 777,
                              "end": 784,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 781,
                                "end": 782,
                                "decorators": [],
                                "name": "c",
                                "optional": false
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      "exportKind": "value",
                      "source": null,
                      "specifiers": []
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 668,
                  "decorators": [],
                  "name": "m2",
                  "optional": false
                },
                "kind": "module"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 825,
              "end": 882,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 832,
                "end": 882,
                "async": false,
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
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 870,
                          "end": 873,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 850,
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false
                },
                "params": []
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 493,
          "end": 495,
          "decorators": [],
          "name": "m4",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 885,
      "end": 900,
      "expression": {
        "type": "CallExpression",
        "start": 885,
        "end": 899,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 885,
          "end": 897,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 885,
            "end": 887,
            "decorators": [],
            "name": "m4",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 888,
            "end": 897,
            "decorators": [],
            "name": "fooExport",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 911,
            "decorators": [],
            "name": "myvar2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 914,
            "end": 927,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 918,
              "end": 925,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 918,
                "end": 923,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 920,
                  "decorators": [],
                  "name": "m4",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 923,
                  "decorators": [],
                  "name": "m2",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 924,
                "end": 925,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 245,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "extMod",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 51,
        "end": 90,
        "expression": {
          "type": "Literal",
          "start": 59,
          "end": 89,
          "raw": "\"./commentsExternalModules2_0\"",
          "value": "./commentsExternalModules2_0"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 135,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 114,
          "end": 133,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 114,
            "end": 123,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 114,
              "end": 120,
              "decorators": [],
              "name": "extMod",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 121,
              "end": 123,
              "decorators": [],
              "name": "m1",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 133,
            "decorators": [],
            "name": "fooExport",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 178,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 144,
        "end": 178,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 177,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "decorators": [],
              "name": "newVar",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 157,
              "end": 177,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 161,
                "end": 175,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 161,
                  "end": 173,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 170,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 167,
                      "decorators": [],
                      "name": "extMod",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 170,
                      "decorators": [],
                      "name": "m1",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 173,
                    "decorators": [],
                    "name": "m2",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 179,
        "end": 200,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 179,
          "end": 198,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 179,
            "end": 188,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "extMod",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 188,
              "decorators": [],
              "name": "m4",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 198,
            "decorators": [],
            "name": "fooExport",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 244,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 209,
        "end": 244,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 213,
            "end": 243,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 220,
              "decorators": [],
              "name": "newVar2",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 223,
              "end": 243,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 227,
                "end": 241,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 227,
                  "end": 239,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 227,
                    "end": 236,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 233,
                      "decorators": [],
                      "name": "extMod",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 236,
                      "decorators": [],
                      "name": "m4",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 239,
                    "decorators": [],
                    "name": "m2",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
