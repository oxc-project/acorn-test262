__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 470,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 469,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 468,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 116,
          "end": 465,
          "async": true,
          "body": {
            "type": "BlockStatement",
            "start": 128,
            "end": 465,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 132,
                "end": 217,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 138,
                    "end": 216,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 146,
                      "decorators": [],
                      "name": "response",
                      "optional": false
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "start": 149,
                      "end": 216,
                      "argument": {
                        "type": "CallExpression",
                        "start": 155,
                        "end": 216,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 161,
                            "end": 215,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 161,
                              "end": 213,
                              "computed": false,
                              "object": {
                                "type": "NewExpression",
                                "start": 161,
                                "end": 204,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 169,
                                    "end": 186,
                                    "raw": "\"../hamsters.jpg\"",
                                    "value": "../hamsters.jpg"
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 188,
                                    "end": 203,
                                    "computed": false,
                                    "object": {
                                      "type": "MetaProperty",
                                      "start": 188,
                                      "end": 199,
                                      "meta": {
                                        "type": "Identifier",
                                        "start": 188,
                                        "end": 194,
                                        "decorators": [],
                                        "name": "import",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 195,
                                        "end": 199,
                                        "decorators": [],
                                        "name": "meta",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 200,
                                      "end": 203,
                                      "decorators": [],
                                      "name": "url",
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 165,
                                  "end": 168,
                                  "decorators": [],
                                  "name": "URL",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 205,
                                "end": 213,
                                "decorators": [],
                                "name": "toString",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 160,
                          "decorators": [],
                          "name": "fetch",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "VariableDeclaration",
                "start": 220,
                "end": 255,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 226,
                    "end": 254,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 230,
                      "decorators": [],
                      "name": "blob",
                      "optional": false
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "start": 233,
                      "end": 254,
                      "argument": {
                        "type": "CallExpression",
                        "start": 239,
                        "end": 254,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 239,
                          "end": 252,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 247,
                            "decorators": [],
                            "name": "response",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 252,
                            "decorators": [],
                            "name": "blob",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "VariableDeclaration",
                "start": 259,
                "end": 318,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 265,
                    "end": 317,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 269,
                      "decorators": [],
                      "name": "size",
                      "optional": false
                    },
                    "init": {
                      "type": "LogicalExpression",
                      "start": 272,
                      "end": 317,
                      "operator": "||",
                      "left": {
                        "type": "MemberExpression",
                        "start": 272,
                        "end": 310,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 272,
                          "end": 305,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 272,
                            "end": 297,
                            "computed": false,
                            "object": {
                              "type": "MetaProperty",
                              "start": 272,
                              "end": 283,
                              "meta": {
                                "type": "Identifier",
                                "start": 272,
                                "end": 278,
                                "decorators": [],
                                "name": "import",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 279,
                                "end": 283,
                                "decorators": [],
                                "name": "meta",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 284,
                              "end": 297,
                              "decorators": [],
                              "name": "scriptElement",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 298,
                            "end": 305,
                            "decorators": [],
                            "name": "dataset",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 310,
                          "decorators": [],
                          "name": "size",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 314,
                        "end": 317,
                        "raw": "300",
                        "value": 300
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "VariableDeclaration",
                "start": 322,
                "end": 348,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 328,
                    "end": 347,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 333,
                      "decorators": [],
                      "name": "image",
                      "optional": false
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 336,
                      "end": 347,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 345,
                        "decorators": [],
                        "name": "Image",
                        "optional": false
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "ExpressionStatement",
                "start": 351,
                "end": 389,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 351,
                  "end": 388,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 351,
                    "end": 360,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 356,
                      "decorators": [],
                      "name": "image",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 360,
                      "decorators": [],
                      "name": "src",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 363,
                    "end": 388,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 387,
                        "decorators": [],
                        "name": "blob",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 363,
                      "end": 382,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 366,
                        "decorators": [],
                        "name": "URL",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 382,
                        "decorators": [],
                        "name": "createObjectURL",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 392,
                "end": 426,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 392,
                  "end": 425,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 392,
                    "end": 403,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 397,
                      "decorators": [],
                      "name": "image",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 403,
                      "decorators": [],
                      "name": "width",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 406,
                    "end": 425,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 406,
                      "end": 418,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 411,
                        "decorators": [],
                        "name": "image",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 418,
                        "decorators": [],
                        "name": "height",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 425,
                      "decorators": [],
                      "name": "size",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 430,
                "end": 463,
                "expression": {
                  "type": "CallExpression",
                  "start": 430,
                  "end": 462,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 461,
                      "decorators": [],
                      "name": "image",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 430,
                    "end": 455,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 430,
                      "end": 443,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 438,
                        "decorators": [],
                        "name": "document",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 443,
                        "decorators": [],
                        "name": "body",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 455,
                      "decorators": [],
                      "name": "appendChild",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
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
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "MetaProperty",
              "start": 15,
              "end": 26,
              "meta": {
                "type": "Identifier",
                "start": 15,
                "end": 21,
                "decorators": [],
                "name": "import",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "meta",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 56,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 55,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "MetaProperty",
              "start": 43,
              "end": 55,
              "meta": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "decorators": [],
                "name": "import",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "decorators": [],
                "name": "metal",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 102,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 72,
              "end": 102,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 72,
                "end": 92,
                "computed": false,
                "object": {
                  "type": "MetaProperty",
                  "start": 72,
                  "end": 85,
                  "meta": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 78,
                    "decorators": [],
                    "name": "import",
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 85,
                    "decorators": [],
                    "name": "import",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 92,
                  "decorators": [],
                  "name": "import",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 102,
                "decorators": [],
                "name": "malkovich",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "globalA",
            "optional": false
          },
          "init": {
            "type": "MetaProperty",
            "start": 14,
            "end": 25,
            "meta": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "import",
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "meta",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 38,
            "decorators": [],
            "name": "globalB",
            "optional": false
          },
          "init": {
            "type": "MetaProperty",
            "start": 41,
            "end": 53,
            "meta": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "import",
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "decorators": [],
              "name": "metal",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "globalC",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 69,
            "end": 99,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 69,
              "end": 89,
              "computed": false,
              "object": {
                "type": "MetaProperty",
                "start": 69,
                "end": 82,
                "meta": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 75,
                  "decorators": [],
                  "name": "import",
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "import",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "import",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 99,
              "decorators": [],
              "name": "malkovich",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 81,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 81,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 80,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18,
                  "end": 28,
                  "typeName": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 28,
                    "decorators": [],
                    "name": "ImportMeta",
                    "optional": false
                  }
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 31,
              "end": 80,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 31,
                "end": 47,
                "computed": false,
                "object": {
                  "type": "MetaProperty",
                  "start": 31,
                  "end": 42,
                  "meta": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 37,
                    "decorators": [],
                    "name": "import",
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 42,
                    "decorators": [],
                    "name": "meta",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "blah",
                  "optional": false
                }
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 50,
                "end": 80,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 50,
                  "end": 66,
                  "computed": false,
                  "object": {
                    "type": "MetaProperty",
                    "start": 50,
                    "end": 61,
                    "meta": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 56,
                      "decorators": [],
                      "name": "import",
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 61,
                      "decorators": [],
                      "name": "meta",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "decorators": [],
                    "name": "blue",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MetaProperty",
                  "start": 69,
                  "end": 80,
                  "meta": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 75,
                    "decorators": [],
                    "name": "import",
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 80,
                    "decorators": [],
                    "name": "meta",
                    "optional": false
                  }
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 99,
        "operator": "=",
        "left": {
          "type": "MetaProperty",
          "start": 82,
          "end": 93,
          "meta": {
            "type": "Identifier",
            "start": 82,
            "end": 88,
            "decorators": [],
            "name": "import",
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 93,
            "decorators": [],
            "name": "meta",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 132,
      "end": 240,
      "body": {
        "type": "TSModuleBlock",
        "start": 147,
        "end": 240,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 151,
            "end": 238,
            "body": {
              "type": "TSInterfaceBody",
              "start": 172,
              "end": 238,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 178,
                  "end": 234,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 195,
                    "decorators": [],
                    "name": "wellKnownProperty",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 197,
                      "end": 233,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 199,
                          "end": 209,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 199,
                            "end": 200,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 200,
                            "end": 208,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 202,
                              "end": 208
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 210,
                          "end": 220,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 211,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 211,
                            "end": 219,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 213,
                              "end": 219
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 221,
                          "end": 231,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 222,
                            "end": 231,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 224,
                              "end": 231
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 161,
              "end": 171,
              "decorators": [],
              "name": "ImportMeta",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 146,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 291,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 248,
            "end": 259,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 250,
                "end": 251,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 253,
                "end": 254,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 256,
                "end": 257,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "MemberExpression",
            "start": 262,
            "end": 291,
            "computed": false,
            "object": {
              "type": "MetaProperty",
              "start": 262,
              "end": 273,
              "meta": {
                "type": "Identifier",
                "start": 262,
                "end": 268,
                "decorators": [],
                "name": "import",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "decorators": [],
                "name": "meta",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 274,
              "end": 291,
              "decorators": [],
              "name": "wellKnownProperty",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
