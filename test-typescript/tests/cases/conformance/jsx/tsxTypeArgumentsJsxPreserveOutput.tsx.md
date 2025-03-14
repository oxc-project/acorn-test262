__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    688
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeProps",
        "optional": false,
        "range": [
          39,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                53,
                56
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              },
              "range": [
                57,
                66
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  59,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              53,
              67
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ],
        "range": [
          51,
          69
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "range": [
        34,
        70
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          96,
          114
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                98,
                101
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              },
              "range": [
                102,
                111
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  104,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              98,
              112
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 4
          },
          "start": {
            "column": 25,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceProps",
        "optional": false,
        "range": [
          81,
          95
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        71,
        114
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                147,
                151
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              140,
              152
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          134,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 18,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          125,
          128
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        },
        "range": [
          128,
          131
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              129,
              130
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        116,
        154
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "children": [
          {
            "type": "JSXText",
            "range": [
              158,
              163
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "range": [
                164,
                191
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              }
            },
            "range": [
              163,
              192
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              192,
              197
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                197,
                213
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  198,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  201,
                  210
                ],
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      202,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              197,
              213
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              213,
              218
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 12
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                218,
                233
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  219,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  222,
                  230
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      223,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              218,
              233
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              233,
              238
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                238,
                254
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  239,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 5,
                    "line": 14
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  242,
                  251
                ],
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      243,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              238,
              254
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              254,
              259
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 14
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                259,
                274
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  260,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  263,
                  271
                ],
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "range": [
                      264,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              259,
              274
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              274,
              279
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 16
              },
              "start": {
                "column": 19,
                "line": 15
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                279,
                292
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  280,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  283,
                  289
                ],
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      284,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              279,
              292
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              292,
              297
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 16
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                297,
                309
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  298,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 5,
                    "line": 17
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  301,
                  306
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      302,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              297,
              309
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              309,
              314
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                314,
                328
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  315,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 5,
                    "line": 18
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  318,
                  325
                ],
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      319,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              314,
              328
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              328,
              333
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 19
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                333,
                351
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  334,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  337,
                  348
                ],
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      338,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              333,
              351
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              351,
              356
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 20
              },
              "start": {
                "column": 22,
                "line": 19
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                356,
                374
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  357,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  360,
                  371
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "range": [
                        361,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      361,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              356,
              374
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              374,
              379
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                379,
                402
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  380,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 21
                  },
                  "start": {
                    "column": 5,
                    "line": 21
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  383,
                  399
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "range": [
                        384,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 21
                        },
                        "start": {
                          "column": 9,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      384,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 27,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              379,
              402
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              402,
              408
            ],
            "raw": "\n\n    ",
            "value": "\n\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 23
              },
              "start": {
                "column": 27,
                "line": 21
              }
            }
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "range": [
                409,
                432
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              }
            },
            "range": [
              408,
              433
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              433,
              438
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 24
              },
              "start": {
                "column": 29,
                "line": 23
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  454,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "range": [
                452,
                458
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 18,
                  "line": 24
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  439,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 24
                  },
                  "start": {
                    "column": 5,
                    "line": 24
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  442,
                  451
                ],
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      443,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                438,
                452
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              438,
              458
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              458,
              463
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 24
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  478,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 25
                  }
                }
              },
              "range": [
                476,
                482
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  464,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  467,
                  475
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      468,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              "range": [
                463,
                476
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              463,
              482
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              482,
              487
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 26
              },
              "start": {
                "column": 23,
                "line": 25
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  503,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                }
              },
              "range": [
                501,
                507
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 18,
                  "line": 26
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  488,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 5,
                    "line": 26
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  491,
                  500
                ],
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      492,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "range": [
                487,
                501
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              487,
              507
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              507,
              512
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 27
              },
              "start": {
                "column": 24,
                "line": 26
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  527,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              },
              "range": [
                525,
                531
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  513,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 27
                  },
                  "start": {
                    "column": 5,
                    "line": 27
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  516,
                  524
                ],
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "range": [
                      517,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              "range": [
                512,
                525
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              512,
              531
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              531,
              536
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 28
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  549,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              },
              "range": [
                547,
                553
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  537,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  540,
                  546
                ],
                "params": [
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      541,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "range": [
                536,
                547
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              536,
              553
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              553,
              558
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 29
              },
              "start": {
                "column": 21,
                "line": 28
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  570,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 29
                  },
                  "start": {
                    "column": 16,
                    "line": 29
                  }
                }
              },
              "range": [
                568,
                574
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  559,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 29
                  },
                  "start": {
                    "column": 5,
                    "line": 29
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  562,
                  567
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      563,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              },
              "range": [
                558,
                568
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              558,
              574
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              574,
              579
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 30
              },
              "start": {
                "column": 20,
                "line": 29
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  593,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              },
              "range": [
                591,
                597
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  580,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 30
                  },
                  "start": {
                    "column": 5,
                    "line": 30
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  583,
                  590
                ],
                "params": [
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      584,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 30
                      },
                      "start": {
                        "column": 9,
                        "line": 30
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              "range": [
                579,
                591
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              579,
              597
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              597,
              602
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 31
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  620,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 22,
                    "line": 31
                  }
                }
              },
              "range": [
                618,
                624
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  603,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 31
                  },
                  "start": {
                    "column": 5,
                    "line": 31
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  606,
                  617
                ],
                "params": [
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      607,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              },
              "range": [
                602,
                618
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              602,
              624
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              624,
              629
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 32
              },
              "start": {
                "column": 26,
                "line": 31
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  647,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 32
                  }
                }
              },
              "range": [
                645,
                651
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 32
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  630,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 32
                  },
                  "start": {
                    "column": 5,
                    "line": 32
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  633,
                  644
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeProps",
                      "optional": false,
                      "range": [
                        634,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 32
                        },
                        "start": {
                          "column": 9,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      634,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "range": [
                629,
                645
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              629,
              651
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              651,
              656
            ],
            "raw": "\n    ",
            "value": "\n    ",
            "loc": {
              "end": {
                "column": 4,
                "line": 33
              },
              "start": {
                "column": 26,
                "line": 32
              }
            }
          },
          {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  679,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 27,
                    "line": 33
                  }
                }
              },
              "range": [
                677,
                683
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 33
                },
                "start": {
                  "column": 25,
                  "line": 33
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  657,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              "selfClosing": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  660,
                  676
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceProps",
                      "optional": false,
                      "range": [
                        661,
                        675
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 33
                        },
                        "start": {
                          "column": 9,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      661,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 33
                      },
                      "start": {
                        "column": 9,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "range": [
                656,
                677
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              656,
              683
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              683,
              684
            ],
            "raw": "\n",
            "value": "\n",
            "loc": {
              "end": {
                "column": 0,
                "line": 34
              },
              "start": {
                "column": 31,
                "line": 33
              }
            }
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "range": [
            684,
            687
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "range": [
            156,
            158
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "range": [
          156,
          687
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        156,
        687
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
