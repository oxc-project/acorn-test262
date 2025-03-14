__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "raw": "0",
        "value": 0,
        "range": [
          15,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "range": [
        0,
        17
      ],
      "loc": {
        "end": {
          "column": 17,
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
    0,
    39
  ],
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "range": [
                13,
                20
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  33,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                22,
                35
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              35
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          9,
          37
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
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
      "line": 4
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
    0,
    24
  ],
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "FunctionExpression",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            20,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "range": [
          9,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
    0,
    931
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          21,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            12,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "range": [
          43,
          45
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./a\"",
          "value": "./a",
          "range": [
            56,
            61
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "range": [
          48,
          62
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "range": [
        36,
        63
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "range": [
              82,
              84
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"./a\"",
                "value": "./a",
                "range": [
                  95,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
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
                87,
                94
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              87,
              101
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "range": [
            82,
            101
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        76,
        102
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "a3",
            "optional": false,
            "range": [
              124,
              126
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./a\"",
                "value": "./a",
                "range": [
                  142,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                135,
                148
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "range": [
              129,
              148
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            124,
            148
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        118,
        149
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "range": [
            162,
            164
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            165,
            166
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 5
            },
            "start": {
              "column": 3,
              "line": 5
            }
          }
        },
        "range": [
          162,
          166
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        162,
        167
      ],
      "loc": {
        "end": {
          "column": 5,
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
        "raw": "\"./b\"",
        "value": "./b",
        "range": [
          184,
          189
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            176,
            178
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "range": [
              176,
              178
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 7,
              "line": 7
            }
          }
        }
      ],
      "range": [
        169,
        190
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "range": [
          203,
          205
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./b\"",
          "value": "./b",
          "range": [
            216,
            221
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          208,
          222
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        196,
        223
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "range": [
            242,
            244
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            245,
            252
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        },
        "range": [
          242,
          252
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        242,
        253
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "b3",
            "optional": false,
            "range": [
              260,
              262
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./b\"",
                "value": "./b",
                "range": [
                  278,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              },
              "range": [
                271,
                284
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "range": [
              265,
              284
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          },
          "range": [
            260,
            284
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        254,
        285
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "range": [
            304,
            306
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "name": "default",
          "optional": false,
          "range": [
            307,
            314
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 3,
              "line": 11
            }
          }
        },
        "range": [
          304,
          314
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        304,
        315
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./c\"",
        "value": "./c",
        "range": [
          332,
          337
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 13
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            324,
            326
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "range": [
              324,
              326
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 7,
                "line": 13
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 7,
              "line": 13
            }
          }
        }
      ],
      "range": [
        317,
        338
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "range": [
          382,
          384
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./c\"",
          "value": "./c",
          "range": [
            395,
            400
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 14
            },
            "start": {
              "column": 20,
              "line": 14
            }
          }
        },
        "range": [
          387,
          401
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        }
      },
      "range": [
        375,
        402
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "range": [
            439,
            441
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            442,
            449
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 15
            },
            "start": {
              "column": 3,
              "line": 15
            }
          }
        },
        "range": [
          439,
          449
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        439,
        450
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./d\"",
        "value": "./d",
        "range": [
          466,
          471
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 15,
            "line": 16
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            458,
            460
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "range": [
              458,
              460
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 16
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 7,
              "line": 16
            }
          }
        }
      ],
      "range": [
        451,
        472
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d2",
        "optional": false,
        "range": [
          503,
          505
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./d\"",
          "value": "./d",
          "range": [
            516,
            521
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 20,
              "line": 17
            }
          }
        },
        "range": [
          508,
          522
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "range": [
        496,
        523
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "range": [
            547,
            549
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          547,
          551
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        547,
        552
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              553,
              555
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              556,
              563
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 3,
                "line": 19
              }
            }
          },
          "range": [
            553,
            563
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          553,
          565
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        553,
        566
      ],
      "loc": {
        "end": {
          "column": 13,
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
            "name": "d3",
            "optional": false,
            "range": [
              582,
              584
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./d\"",
                "value": "./d",
                "range": [
                  600,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              "range": [
                593,
                606
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "range": [
              587,
              606
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          },
          "range": [
            582,
            606
          ],
          "loc": {
            "end": {
              "column": 30,
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
        576,
        607
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d3",
            "optional": false,
            "range": [
              644,
              646
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "range": [
              647,
              654
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 3,
                "line": 21
              }
            }
          },
          "range": [
            644,
            654
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          644,
          656
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        644,
        657
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./e.mjs\"",
        "value": "./e.mjs",
        "range": [
          674,
          683
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            666,
            668
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "range": [
              666,
              668
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 7,
                "line": 23
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 23
            },
            "start": {
              "column": 7,
              "line": 23
            }
          }
        }
      ],
      "range": [
        659,
        684
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "range": [
          697,
          699
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./e.mjs\"",
          "value": "./e.mjs",
          "range": [
            710,
            719
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 24
            },
            "start": {
              "column": 20,
              "line": 24
            }
          }
        },
        "range": [
          702,
          720
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 24
          },
          "start": {
            "column": 12,
            "line": 24
          }
        }
      },
      "range": [
        690,
        721
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./f.cjs\"",
        "value": "./f.cjs",
        "range": [
          742,
          751
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 25
          },
          "start": {
            "column": 15,
            "line": 25
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            734,
            736
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              734,
              736
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 25
              },
              "start": {
                "column": 7,
                "line": 25
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 25
            },
            "start": {
              "column": 7,
              "line": 25
            }
          }
        }
      ],
      "range": [
        727,
        752
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          765,
          767
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./f.cjs\"",
          "value": "./f.cjs",
          "range": [
            778,
            787
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 26
            },
            "start": {
              "column": 20,
              "line": 26
            }
          }
        },
        "range": [
          770,
          788
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 26
          },
          "start": {
            "column": 12,
            "line": 26
          }
        }
      },
      "range": [
        758,
        789
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            808,
            810
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            811,
            818
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 27
            },
            "start": {
              "column": 3,
              "line": 27
            }
          }
        },
        "range": [
          808,
          818
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        808,
        819
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./g\"",
        "value": "./g",
        "range": [
          836,
          841
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 29
          },
          "start": {
            "column": 15,
            "line": 29
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            828,
            830
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "range": [
              828,
              830
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 7,
                "line": 29
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 29
            },
            "start": {
              "column": 7,
              "line": 29
            }
          }
        }
      ],
      "range": [
        821,
        842
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "range": [
            861,
            863
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            864,
            871
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 30
            },
            "start": {
              "column": 3,
              "line": 30
            }
          }
        },
        "range": [
          861,
          871
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        861,
        872
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "range": [
          880,
          882
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./g\"",
          "value": "./g",
          "range": [
            893,
            898
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 20,
              "line": 31
            }
          }
        },
        "range": [
          885,
          899
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 31
          }
        }
      },
      "range": [
        873,
        900
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "range": [
            919,
            921
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            922,
            929
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 32
            },
            "start": {
              "column": 3,
              "line": 32
            }
          }
        },
        "range": [
          919,
          929
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        919,
        930
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 33
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
    0,
    33
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
