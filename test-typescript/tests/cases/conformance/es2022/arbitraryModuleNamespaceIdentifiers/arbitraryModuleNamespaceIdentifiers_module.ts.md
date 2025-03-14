__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1467
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "range": [
              6,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"someValue\"",
            "value": "someValue",
            "range": [
              18,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            6,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "someType",
        "optional": false,
        "range": [
          36,
          44
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "raw": "\"someType\"",
          "value": "someType",
          "range": [
            47,
            57
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "range": [
          47,
          57
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        31,
        58
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"<X>\"",
            "value": "<X>",
            "range": [
              82,
              87
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someValue",
            "optional": false,
            "range": [
              69,
              78
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            69,
            87
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        }
      ],
      "range": [
        60,
        90
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          123,
          169
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 5
          },
          "start": {
            "column": 32,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<X>\"",
            "value": "<X>",
            "range": [
              100,
              105
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueX",
            "optional": false,
            "range": [
              109,
              115
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          },
          "range": [
            100,
            115
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        }
      ],
      "range": [
        91,
        170
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "range": [
            205,
            226
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 6
            },
            "start": {
              "column": 34,
              "line": 6
            }
          }
        },
        "range": [
          199,
          227
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 6
          },
          "start": {
            "column": 28,
            "line": 6
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueX",
          "optional": false,
          "range": [
            175,
            181
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"someValue\"",
          "value": "someValue",
          "range": [
            186,
            197
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 6
            },
            "start": {
              "column": 15,
              "line": 6
            }
          }
        },
        "range": [
          175,
          197
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 4,
            "line": 6
          }
        }
      },
      "range": [
        171,
        227
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          260,
          306
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 8
          },
          "start": {
            "column": 31,
            "line": 8
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "range": [
              247,
              252
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 18,
                "line": 8
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Literal",
            "raw": "\"<X>\"",
            "value": "<X>",
            "range": [
              238,
              243
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          },
          "range": [
            238,
            252
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 9,
              "line": 8
            }
          }
        }
      ],
      "range": [
        229,
        307
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          340,
          386
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 9
          },
          "start": {
            "column": 32,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "range": [
              317,
              322
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueY",
            "optional": false,
            "range": [
              326,
              332
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            }
          },
          "range": [
            317,
            332
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 9,
              "line": 9
            }
          }
        }
      ],
      "range": [
        308,
        387
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "range": [
            422,
            443
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 10
            },
            "start": {
              "column": 34,
              "line": 10
            }
          }
        },
        "range": [
          416,
          444
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueY",
          "optional": false,
          "range": [
            392,
            398
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"someValue\"",
          "value": "someValue",
          "range": [
            403,
            414
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          392,
          414
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        388,
        444
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": {
        "type": "Literal",
        "raw": "\"<Z>\"",
        "value": "<Z>",
        "range": [
          458,
          463
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 12,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          469,
          515
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 12
          },
          "start": {
            "column": 23,
            "line": 12
          }
        }
      },
      "range": [
        446,
        516
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          549,
          595
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 13
          },
          "start": {
            "column": 32,
            "line": 13
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<Z>\"",
            "value": "<Z>",
            "range": [
              526,
              531
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "range": [
              535,
              541
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          },
          "range": [
            526,
            541
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 13
            },
            "start": {
              "column": 9,
              "line": 13
            }
          }
        }
      ],
      "range": [
        517,
        596
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "range": [
            638,
            659
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 14
            },
            "start": {
              "column": 41,
              "line": 14
            }
          }
        },
        "range": [
          632,
          660
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 14
          },
          "start": {
            "column": 35,
            "line": 14
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "range": [
              601,
              607
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"<X>\"",
            "value": "<X>",
            "range": [
              608,
              613
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            601,
            614
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"someValue\"",
          "value": "someValue",
          "range": [
            619,
            630
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 14
            },
            "start": {
              "column": 22,
              "line": 14
            }
          }
        },
        "range": [
          601,
          630
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 14
          },
          "start": {
            "column": 4,
            "line": 14
          }
        }
      },
      "range": [
        597,
        660
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "raw": "\"should be someValue\"",
          "value": "should be someValue",
          "range": [
            702,
            723
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 15
            },
            "start": {
              "column": 41,
              "line": 15
            }
          }
        },
        "range": [
          696,
          724
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 15
          },
          "start": {
            "column": 35,
            "line": 15
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "range": [
              665,
              671
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"<Y>\"",
            "value": "<Y>",
            "range": [
              672,
              677
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          "range": [
            665,
            678
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"someValue\"",
          "value": "someValue",
          "range": [
            683,
            694
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 15
            },
            "start": {
              "column": 22,
              "line": 15
            }
          }
        },
        "range": [
          665,
          694
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 15
          }
        }
      },
      "range": [
        661,
        724
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ThrowStatement",
        "argument": {
          "type": "Literal",
          "raw": "\"should be export namespace\"",
          "value": "should be export namespace",
          "range": [
            761,
            789
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 16
            },
            "start": {
              "column": 36,
              "line": 16
            }
          }
        },
        "range": [
          755,
          790
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 16
          },
          "start": {
            "column": 30,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueZ",
            "optional": false,
            "range": [
              729,
              735
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"<Z>\"",
            "value": "<Z>",
            "range": [
              736,
              741
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          },
          "range": [
            729,
            742
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "valueZ",
          "optional": false,
          "range": [
            747,
            753
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 16
            },
            "start": {
              "column": 22,
              "line": 16
            }
          }
        },
        "range": [
          729,
          753
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        725,
        790
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"<A>\"",
            "value": "<A>",
            "range": [
              818,
              823
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 26,
                "line": 18
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "range": [
              806,
              814
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "range": [
            801,
            823
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 9,
              "line": 18
            }
          }
        }
      ],
      "range": [
        792,
        826
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          863,
          909
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 19
          },
          "start": {
            "column": 36,
            "line": 19
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<A>\"",
            "value": "<A>",
            "range": [
              841,
              846
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeA",
            "optional": false,
            "range": [
              850,
              855
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
              }
            }
          },
          "range": [
            836,
            855
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 19
            },
            "start": {
              "column": 9,
              "line": 19
            }
          }
        }
      ],
      "range": [
        827,
        910
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "importTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              },
              "range": [
                927,
                934
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeA",
                  "optional": false,
                  "range": [
                    929,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                },
                "range": [
                  929,
                  934
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              917,
              934
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"expect error about someType\"",
            "value": "expect error about someType",
            "range": [
              937,
              966
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 20
              },
              "start": {
                "column": 26,
                "line": 20
              }
            }
          },
          "range": [
            917,
            966
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        911,
        967
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          1005,
          1051
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 22
          },
          "start": {
            "column": 36,
            "line": 22
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Literal",
            "raw": "\"<B>\"",
            "value": "<B>",
            "range": [
              992,
              997
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Literal",
            "raw": "\"<A>\"",
            "value": "<A>",
            "range": [
              983,
              988
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          "range": [
            978,
            997
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 22
            },
            "start": {
              "column": 9,
              "line": 22
            }
          }
        }
      ],
      "range": [
        969,
        1052
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          1089,
          1135
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 23
          },
          "start": {
            "column": 36,
            "line": 23
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<B>\"",
            "value": "<B>",
            "range": [
              1067,
              1072
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 14,
                "line": 23
              }
            }
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeB",
            "optional": false,
            "range": [
              1076,
              1081
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            1062,
            1081
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 23
            },
            "start": {
              "column": 9,
              "line": 23
            }
          }
        }
      ],
      "range": [
        1053,
        1136
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "reimportTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 18,
                  "line": 24
                }
              },
              "range": [
                1155,
                1162
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeB",
                  "optional": false,
                  "range": [
                    1157,
                    1162
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  }
                },
                "range": [
                  1157,
                  1162
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              1143,
              1162
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"expect error about someType\"",
            "value": "expect error about someType",
            "range": [
              1165,
              1194
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 24
              },
              "start": {
                "column": 28,
                "line": 24
              }
            }
          },
          "range": [
            1143,
            1194
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1137,
        1195
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": {
        "type": "Literal",
        "raw": "\"<C>\"",
        "value": "<C>",
        "range": [
          1214,
          1219
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          1225,
          1271
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 26
          },
          "start": {
            "column": 28,
            "line": 26
          }
        }
      },
      "range": [
        1197,
        1272
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_module\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_module",
        "range": [
          1309,
          1355
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 27
          },
          "start": {
            "column": 36,
            "line": 27
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "raw": "\"<C>\"",
            "value": "<C>",
            "range": [
              1287,
              1292
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 27
              },
              "start": {
                "column": 14,
                "line": 27
              }
            }
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeC",
            "optional": false,
            "range": [
              1296,
              1301
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            1282,
            1301
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 27
            },
            "start": {
              "column": 9,
              "line": 27
            }
          }
        }
      ],
      "range": [
        1273,
        1356
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1357,
        1393
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "otherType",
          "optional": false,
          "range": [
            1369,
            1378
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 28
            },
            "start": {
              "column": 12,
              "line": 28
            }
          }
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"otherType\"",
            "value": "otherType",
            "range": [
              1381,
              1392
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
              }
            }
          },
          "range": [
            1381,
            1392
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 28
            },
            "start": {
              "column": 24,
              "line": 28
            }
          }
        },
        "range": [
          1364,
          1393
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "importStarTestA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 29
                }
              },
              "range": [
                1415,
                1432
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "typeC",
                    "optional": false,
                    "range": [
                      1417,
                      1422
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherType",
                    "optional": false,
                    "range": [
                      1423,
                      1432
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 29
                      },
                      "start": {
                        "column": 29,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    1417,
                    1432
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 23,
                      "line": 29
                    }
                  }
                },
                "range": [
                  1417,
                  1432
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1400,
              1432
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"expect error about otherType\"",
            "value": "expect error about otherType",
            "range": [
              1435,
              1465
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 29
              },
              "start": {
                "column": 41,
                "line": 29
              }
            }
          },
          "range": [
            1400,
            1465
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1394,
        1466
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
