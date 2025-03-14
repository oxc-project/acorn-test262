__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    134
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./op'",
        "value": "./op",
        "range": [
          15,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            9
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Op",
            "optional": false,
            "range": [
              7,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
        "raw": "'./po'",
        "value": "./po",
        "range": [
          42,
          48
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "range": [
              32,
              34
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Po",
            "optional": false,
            "range": [
              32,
              34
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            32,
            34
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        23,
        49
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
      "type": "ExportDefaultDeclaration",
      "range": [
        51,
        133
      ],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Op",
                        "optional": false,
                        "range": [
                          99,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 6
                          },
                          "start": {
                            "column": 5,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "or",
                        "optional": false,
                        "range": [
                          102,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        99,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 6
                        },
                        "start": {
                          "column": 5,
                          "line": 6
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        107,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 6
                        },
                        "start": {
                          "column": 13,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      98,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Po",
                        "optional": false,
                        "range": [
                          116,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 7
                          },
                          "start": {
                            "column": 5,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "range": [
                          119,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        116,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 7
                        },
                        "start": {
                          "column": 5,
                          "line": 7
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        124,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      115,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
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
                  92,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              },
              "range": [
                85,
                131
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            81,
            133
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            75,
            78
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "params": [],
        "range": [
          66,
          133
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
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
    73
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
            "name": "Op",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                51
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "or",
                      "optional": false,
                      "range": [
                        31,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      },
                      "range": [
                        33,
                        48
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "range": [
                            42,
                            48
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          35,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      22,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                  18,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              51
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            51
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        52
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Op",
        "optional": false,
        "range": [
          69,
          71
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "range": [
        54,
        72
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
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
    60
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        59
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Po",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                },
                "range": [
                  23,
                  58
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "range": [
                          38,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 11,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "readonly": true,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 2
                          },
                          "start": {
                            "column": 13,
                            "line": 2
                          }
                        },
                        "range": [
                          40,
                          55
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "range": [
                              49,
                              55
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 2
                              },
                              "start": {
                                "column": 22,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            42,
                            55
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 2
                            },
                            "start": {
                              "column": 15,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        29,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
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
                    25,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                21,
                58
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              21,
              58
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          7,
          59
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
