__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    47
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "range": [
          17,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            },
            "range": [
              31,
              39
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          },
          "range": [
            25,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 40,
            "line": 1
          }
        },
        "range": [
          40,
          45
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            42,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    404
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts",
        "range": [
          26,
          36
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "specifiers": [],
      "range": [
        11,
        37
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"../foo.mts\"",
        "value": "../foo.mts",
        "range": [
          53,
          65
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "specifiers": [],
      "range": [
        38,
        66
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"../../foo.cts\"",
        "value": "../../foo.cts",
        "range": [
          82,
          97
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "specifiers": [],
      "range": [
        67,
        98
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "raw": "\"./foo.tsx\"",
        "value": "./foo.tsx",
        "range": [
          114,
          125
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "specifiers": [],
      "range": [
        99,
        126
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          134,
          137
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts",
          "range": [
            148,
            158
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 6
            }
          }
        },
        "range": [
          140,
          159
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 6
          },
          "start": {
            "column": 13,
            "line": 6
          }
        }
      },
      "range": [
        127,
        160
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts",
        "range": [
          168,
          178
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "specifiers": [],
      "range": [
        161,
        179
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts",
        "range": [
          194,
          204
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "range": [
        180,
        205
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "Literal",
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts",
          "range": [
            220,
            230
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        },
        "range": [
          213,
          231
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        213,
        232
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                263,
                265
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 30,
                  "line": 11
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              257,
              265
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "Literal",
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts",
              "range": [
                240,
                250
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              }
            },
            "range": [
              233,
              251
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              252,
              256
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          "range": [
            233,
            256
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          233,
          266
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        233,
        267
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          297,
          299
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 12
          },
          "start": {
            "column": 29,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptAny",
        "optional": false,
        "range": [
          277,
          286
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            },
            "range": [
              290,
              295
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                292,
                295
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            }
          },
          "range": [
            287,
            295
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 12
            },
            "start": {
              "column": 19,
              "line": 12
            }
          }
        }
      ],
      "range": [
        268,
        299
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "Literal",
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts",
              "range": [
                317,
                327
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "range": [
              310,
              328
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptAny",
          "optional": false,
          "range": [
            300,
            309
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          300,
          329
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        300,
        330
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "range": [
                  352,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "range": [
                        360,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 29,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"value\"",
                      "value": "value",
                      "range": [
                        366,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 14
                        },
                        "start": {
                          "column": 35,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      360,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  358,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              },
              "range": [
                352,
                375
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            350,
            377
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 14
            },
            "start": {
              "column": 19,
              "line": 14
            }
          }
        },
        "source": {
          "type": "Literal",
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts",
          "range": [
            338,
            348
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 14
            },
            "start": {
              "column": 7,
              "line": 14
            }
          }
        },
        "range": [
          331,
          378
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        331,
        379
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              387,
              389
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 7,
                "line": 15
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"./foo.ts\"",
            "value": "./foo.ts",
            "range": [
              392,
              402
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "range": [
            387,
            402
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 15
            },
            "start": {
              "column": 7,
              "line": 15
            }
          }
        },
        "range": [
          380,
          403
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        380,
        404
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 24,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    337
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.ts/foo.js\"",
        "value": "./foo.ts/foo.js",
        "range": [
          15,
          32
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "specifiers": [],
      "range": [
        0,
        33
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"foo.ts\"",
        "value": "foo.ts",
        "range": [
          49,
          57
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "specifiers": [],
      "range": [
        34,
        58
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"pkg/foo.ts\"",
        "value": "pkg/foo.ts",
        "range": [
          74,
          86
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "specifiers": [],
      "range": [
        59,
        87
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\".foo.ts\"",
        "value": ".foo.ts",
        "range": [
          103,
          112
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "specifiers": [],
      "range": [
        88,
        113
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "raw": "\"./foo.d.ts\"",
        "value": "./foo.d.ts",
        "range": [
          129,
          141
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "specifiers": [],
      "range": [
        114,
        142
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.d.mts\"",
        "value": "./foo.d.mts",
        "range": [
          158,
          171
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "specifiers": [],
      "range": [
        143,
        172
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo.d.css.ts\"",
        "value": "./foo.d.css.ts",
        "range": [
          188,
          204
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "specifiers": [],
      "range": [
        173,
        205
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"#internal/foo.ts\"",
        "value": "#internal/foo.ts",
        "range": [
          221,
          239
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "specifiers": [],
      "range": [
        206,
        240
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "raw": "\"node:foo.ts\"",
        "value": "node:foo.ts",
        "range": [
          256,
          269
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "specifiers": [],
      "range": [
        241,
        270
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"./foo.ts\"",
            "value": "./foo.ts",
            "range": [
              281,
              291
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "range": [
            272,
            279
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 10
            },
            "start": {
              "column": 1,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          271,
          292
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        271,
        293
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "Literal",
          "raw": "\"node:path\"",
          "value": "node:path",
          "range": [
            301,
            312
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 7,
              "line": 11
            }
          }
        },
        "range": [
          294,
          313
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        294,
        314
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"node:path\"",
            "value": "node:path",
            "range": [
              323,
              334
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "range": [
            315,
            322
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          315,
          335
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        315,
        336
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    136,
    136
  ],
  "body": [],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
