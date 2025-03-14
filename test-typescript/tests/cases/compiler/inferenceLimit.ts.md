__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    716
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          0,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        13
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "raw": "\"./mymodule\"",
        "value": "./mymodule",
        "range": [
          40,
          52
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 2
          },
          "start": {
            "column": 26,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyModule",
            "optional": false,
            "range": [
              26,
              34
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            21,
            34
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        14,
        53
      ],
      "loc": {
        "end": {
          "column": 39,
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
      "range": [
        55,
        715
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            80,
            715
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  85,
                  96
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  96,
                  101
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    99,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                }
              },
              "range": [
                85,
                101
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "brokenMethod",
                "optional": false,
                "range": [
                  112,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  124,
                  659
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
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
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "loc": {
                                            "end": {
                                              "column": 39,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 14,
                                              "line": 11
                                            }
                                          },
                                          "range": [
                                            241,
                                            266
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "range": [
                                                248,
                                                266
                                              ],
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "MyModule",
                                                      "optional": false,
                                                      "range": [
                                                        249,
                                                        257
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 30,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 22,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "MyModel",
                                                      "optional": false,
                                                      "range": [
                                                        258,
                                                        265
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 38,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 31,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      249,
                                                      265
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 38,
                                                        "line": 11
                                                      },
                                                      "start": {
                                                        "column": 22,
                                                        "line": 11
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    249,
                                                    265
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 38,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 22,
                                                      "line": 11
                                                    }
                                                  }
                                                }
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 39,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 21,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Array",
                                              "optional": false,
                                              "range": [
                                                243,
                                                248
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 21,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "range": [
                                              243,
                                              266
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 11
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          235,
                                          266
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 8,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "ArrayExpression",
                                        "elements": [],
                                        "range": [
                                          269,
                                          271
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        235,
                                        271
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 11
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    231,
                                    272
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 11
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
                                        "name": "populateItems",
                                        "optional": false,
                                        "range": [
                                          282,
                                          295
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 8,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "argument": {
                                                "type": "NewExpression",
                                                "arguments": [
                                                  {
                                                    "type": "ArrowFunctionExpression",
                                                    "async": false,
                                                    "body": {
                                                      "type": "BlockStatement",
                                                      "body": [
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
                                                                  "body": [
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "expression": {
                                                                        "type": "AssignmentExpression",
                                                                        "operator": "=",
                                                                        "left": {
                                                                          "type": "MemberExpression",
                                                                          "computed": false,
                                                                          "object": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "order",
                                                                            "optional": false,
                                                                            "range": [
                                                                              431,
                                                                              436
                                                                            ],
                                                                            "loc": {
                                                                              "end": {
                                                                                "column": 17,
                                                                                "line": 17
                                                                              },
                                                                              "start": {
                                                                                "column": 12,
                                                                                "line": 17
                                                                              }
                                                                            }
                                                                          },
                                                                          "optional": false,
                                                                          "property": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "items",
                                                                            "optional": false,
                                                                            "range": [
                                                                              437,
                                                                              442
                                                                            ],
                                                                            "loc": {
                                                                              "end": {
                                                                                "column": 23,
                                                                                "line": 17
                                                                              },
                                                                              "start": {
                                                                                "column": 18,
                                                                                "line": 17
                                                                              }
                                                                            }
                                                                          },
                                                                          "range": [
                                                                            431,
                                                                            442
                                                                          ],
                                                                          "loc": {
                                                                            "end": {
                                                                              "column": 23,
                                                                              "line": 17
                                                                            },
                                                                            "start": {
                                                                              "column": 12,
                                                                              "line": 17
                                                                            }
                                                                          }
                                                                        },
                                                                        "right": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "items",
                                                                          "optional": false,
                                                                          "range": [
                                                                            445,
                                                                            450
                                                                          ],
                                                                          "loc": {
                                                                            "end": {
                                                                              "column": 31,
                                                                              "line": 17
                                                                            },
                                                                            "start": {
                                                                              "column": 26,
                                                                              "line": 17
                                                                            }
                                                                          }
                                                                        },
                                                                        "range": [
                                                                          431,
                                                                          450
                                                                        ],
                                                                        "loc": {
                                                                          "end": {
                                                                            "column": 31,
                                                                            "line": 17
                                                                          },
                                                                          "start": {
                                                                            "column": 12,
                                                                            "line": 17
                                                                          }
                                                                        }
                                                                      },
                                                                      "range": [
                                                                        431,
                                                                        451
                                                                      ],
                                                                      "loc": {
                                                                        "end": {
                                                                          "column": 32,
                                                                          "line": 17
                                                                        },
                                                                        "start": {
                                                                          "column": 12,
                                                                          "line": 17
                                                                        }
                                                                      }
                                                                    },
                                                                    {
                                                                      "type": "ExpressionStatement",
                                                                      "expression": {
                                                                        "type": "CallExpression",
                                                                        "arguments": [
                                                                          {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "order",
                                                                            "optional": false,
                                                                            "range": [
                                                                              472,
                                                                              477
                                                                            ],
                                                                            "loc": {
                                                                              "end": {
                                                                                "column": 25,
                                                                                "line": 18
                                                                              },
                                                                              "start": {
                                                                                "column": 20,
                                                                                "line": 18
                                                                              }
                                                                            }
                                                                          }
                                                                        ],
                                                                        "callee": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "resolve",
                                                                          "optional": false,
                                                                          "range": [
                                                                            464,
                                                                            471
                                                                          ],
                                                                          "loc": {
                                                                            "end": {
                                                                              "column": 19,
                                                                              "line": 18
                                                                            },
                                                                            "start": {
                                                                              "column": 12,
                                                                              "line": 18
                                                                            }
                                                                          }
                                                                        },
                                                                        "optional": false,
                                                                        "range": [
                                                                          464,
                                                                          478
                                                                        ],
                                                                        "loc": {
                                                                          "end": {
                                                                            "column": 26,
                                                                            "line": 18
                                                                          },
                                                                          "start": {
                                                                            "column": 12,
                                                                            "line": 18
                                                                          }
                                                                        }
                                                                      },
                                                                      "range": [
                                                                        464,
                                                                        479
                                                                      ],
                                                                      "loc": {
                                                                        "end": {
                                                                          "column": 27,
                                                                          "line": 18
                                                                        },
                                                                        "start": {
                                                                          "column": 12,
                                                                          "line": 18
                                                                        }
                                                                      }
                                                                    }
                                                                  ],
                                                                  "range": [
                                                                    417,
                                                                    491
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 11,
                                                                      "line": 19
                                                                    },
                                                                    "start": {
                                                                      "column": 27,
                                                                      "line": 16
                                                                    }
                                                                  }
                                                                },
                                                                "expression": false,
                                                                "generator": false,
                                                                "id": null,
                                                                "params": [
                                                                  {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "items",
                                                                    "optional": false,
                                                                    "range": [
                                                                      407,
                                                                      412
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 22,
                                                                        "line": 16
                                                                      },
                                                                      "start": {
                                                                        "column": 17,
                                                                        "line": 16
                                                                      }
                                                                    }
                                                                  }
                                                                ],
                                                                "range": [
                                                                  406,
                                                                  491
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 11,
                                                                    "line": 19
                                                                  },
                                                                  "start": {
                                                                    "column": 16,
                                                                    "line": 16
                                                                  }
                                                                }
                                                              }
                                                            ],
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "CallExpression",
                                                                "arguments": [
                                                                  {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "order",
                                                                      "optional": false,
                                                                      "range": [
                                                                        380,
                                                                        385
                                                                      ],
                                                                      "loc": {
                                                                        "end": {
                                                                          "column": 26,
                                                                          "line": 15
                                                                        },
                                                                        "start": {
                                                                          "column": 21,
                                                                          "line": 15
                                                                        }
                                                                      }
                                                                    },
                                                                    "optional": false,
                                                                    "property": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "id",
                                                                      "optional": false,
                                                                      "range": [
                                                                        386,
                                                                        388
                                                                      ],
                                                                      "loc": {
                                                                        "end": {
                                                                          "column": 29,
                                                                          "line": 15
                                                                        },
                                                                        "start": {
                                                                          "column": 27,
                                                                          "line": 15
                                                                        }
                                                                      }
                                                                    },
                                                                    "range": [
                                                                      380,
                                                                      388
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 29,
                                                                        "line": 15
                                                                      },
                                                                      "start": {
                                                                        "column": 21,
                                                                        "line": 15
                                                                      }
                                                                    }
                                                                  }
                                                                ],
                                                                "callee": {
                                                                  "type": "MemberExpression",
                                                                  "computed": false,
                                                                  "object": {
                                                                    "type": "ThisExpression",
                                                                    "range": [
                                                                      367,
                                                                      371
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 12,
                                                                        "line": 15
                                                                      },
                                                                      "start": {
                                                                        "column": 8,
                                                                        "line": 15
                                                                      }
                                                                    }
                                                                  },
                                                                  "optional": false,
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "doStuff",
                                                                    "optional": false,
                                                                    "range": [
                                                                      372,
                                                                      379
                                                                    ],
                                                                    "loc": {
                                                                      "end": {
                                                                        "column": 20,
                                                                        "line": 15
                                                                      },
                                                                      "start": {
                                                                        "column": 13,
                                                                        "line": 15
                                                                      }
                                                                    }
                                                                  },
                                                                  "range": [
                                                                    367,
                                                                    379
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 20,
                                                                      "line": 15
                                                                    },
                                                                    "start": {
                                                                      "column": 8,
                                                                      "line": 15
                                                                    }
                                                                  }
                                                                },
                                                                "optional": false,
                                                                "range": [
                                                                  367,
                                                                  389
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 30,
                                                                    "line": 15
                                                                  },
                                                                  "start": {
                                                                    "column": 8,
                                                                    "line": 15
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
                                                                  401,
                                                                  405
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 15,
                                                                    "line": 16
                                                                  },
                                                                  "start": {
                                                                    "column": 11,
                                                                    "line": 16
                                                                  }
                                                                }
                                                              },
                                                              "range": [
                                                                367,
                                                                405
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 15,
                                                                  "line": 16
                                                                },
                                                                "start": {
                                                                  "column": 8,
                                                                  "line": 15
                                                                }
                                                              }
                                                            },
                                                            "optional": false,
                                                            "range": [
                                                              367,
                                                              492
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 12,
                                                                "line": 19
                                                              },
                                                              "start": {
                                                                "column": 8,
                                                                "line": 15
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            367,
                                                            493
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 13,
                                                              "line": 19
                                                            },
                                                            "start": {
                                                              "column": 8,
                                                              "line": 15
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "range": [
                                                        357,
                                                        501
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 7,
                                                          "line": 20
                                                        },
                                                        "start": {
                                                          "column": 46,
                                                          "line": 14
                                                        }
                                                      }
                                                    },
                                                    "expression": false,
                                                    "generator": false,
                                                    "id": null,
                                                    "params": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "resolve",
                                                        "optional": false,
                                                        "range": [
                                                          337,
                                                          344
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 33,
                                                            "line": 14
                                                          },
                                                          "start": {
                                                            "column": 26,
                                                            "line": 14
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "reject",
                                                        "optional": false,
                                                        "range": [
                                                          346,
                                                          352
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 41,
                                                            "line": 14
                                                          },
                                                          "start": {
                                                            "column": 35,
                                                            "line": 14
                                                          }
                                                        }
                                                      }
                                                    ],
                                                    "range": [
                                                      336,
                                                      501
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 7,
                                                        "line": 20
                                                      },
                                                      "start": {
                                                        "column": 25,
                                                        "line": 14
                                                      }
                                                    }
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Promise",
                                                  "optional": false,
                                                  "range": [
                                                    328,
                                                    335
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 24,
                                                      "line": 14
                                                    },
                                                    "start": {
                                                      "column": 17,
                                                      "line": 14
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  324,
                                                  502
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 8,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 13,
                                                    "line": 14
                                                  }
                                                }
                                              },
                                              "range": [
                                                317,
                                                503
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 9,
                                                  "line": 20
                                                },
                                                "start": {
                                                  "column": 6,
                                                  "line": 14
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            309,
                                            509
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 5,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "expression": false,
                                        "generator": false,
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "order",
                                            "optional": false,
                                            "range": [
                                              299,
                                              304
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 13
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 13
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          298,
                                          509
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 5,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        282,
                                        509
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 5,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    278,
                                    510
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 6,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 13
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "ArrowFunctionExpression",
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "orders",
                                                    "optional": false,
                                                    "range": [
                                                      629,
                                                      635
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 22,
                                                        "line": 25
                                                      },
                                                      "start": {
                                                        "column": 16,
                                                        "line": 25
                                                      }
                                                    }
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "resolve",
                                                  "optional": false,
                                                  "range": [
                                                    621,
                                                    628
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 15,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 8,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "range": [
                                                  621,
                                                  636
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 23,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 25
                                                  }
                                                }
                                              },
                                              "range": [
                                                621,
                                                637
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 24,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 8,
                                                  "line": 25
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            611,
                                            645
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 7,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 24
                                            }
                                          }
                                        },
                                        "expression": false,
                                        "generator": false,
                                        "id": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "orders",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "loc": {
                                                "end": {
                                                  "column": 44,
                                                  "line": 24
                                                },
                                                "start": {
                                                  "column": 19,
                                                  "line": 24
                                                }
                                              },
                                              "range": [
                                                581,
                                                606
                                              ],
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "range": [
                                                    588,
                                                    606
                                                  ],
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "MyModule",
                                                          "optional": false,
                                                          "range": [
                                                            589,
                                                            597
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 35,
                                                              "line": 24
                                                            },
                                                            "start": {
                                                              "column": 27,
                                                              "line": 24
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "MyModel",
                                                          "optional": false,
                                                          "range": [
                                                            598,
                                                            605
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 43,
                                                              "line": 24
                                                            },
                                                            "start": {
                                                              "column": 36,
                                                              "line": 24
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          589,
                                                          605
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 43,
                                                            "line": 24
                                                          },
                                                          "start": {
                                                            "column": 27,
                                                            "line": 24
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        589,
                                                        605
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 43,
                                                          "line": 24
                                                        },
                                                        "start": {
                                                          "column": 27,
                                                          "line": 24
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 44,
                                                      "line": 24
                                                    },
                                                    "start": {
                                                      "column": 26,
                                                      "line": 24
                                                    }
                                                  }
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Array",
                                                  "optional": false,
                                                  "range": [
                                                    583,
                                                    588
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 26,
                                                      "line": 24
                                                    },
                                                    "start": {
                                                      "column": 21,
                                                      "line": 24
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  583,
                                                  606
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 44,
                                                    "line": 24
                                                  },
                                                  "start": {
                                                    "column": 21,
                                                    "line": 24
                                                  }
                                                }
                                              }
                                            },
                                            "range": [
                                              575,
                                              606
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 44,
                                                "line": 24
                                              },
                                              "start": {
                                                "column": 13,
                                                "line": 24
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          574,
                                          645
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 7,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 24
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "populateItems",
                                                "optional": false,
                                                "range": [
                                                  546,
                                                  559
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 47,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 34,
                                                    "line": 23
                                                  }
                                                }
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "result",
                                                "optional": false,
                                                "range": [
                                                  535,
                                                  541
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 29,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 23,
                                                    "line": 23
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "map",
                                                "optional": false,
                                                "range": [
                                                  542,
                                                  545
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 33,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 30,
                                                    "line": 23
                                                  }
                                                }
                                              },
                                              "range": [
                                                535,
                                                545
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 33,
                                                  "line": 23
                                                },
                                                "start": {
                                                  "column": 23,
                                                  "line": 23
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              535,
                                              560
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 48,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 23
                                              }
                                            }
                                          }
                                        ],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Promise",
                                            "optional": false,
                                            "range": [
                                              523,
                                              530
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 18,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 11,
                                                "line": 23
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "all",
                                            "optional": false,
                                            "range": [
                                              531,
                                              534
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 22,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 19,
                                                "line": 23
                                              }
                                            }
                                          },
                                          "range": [
                                            523,
                                            534
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 22,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 11,
                                              "line": 23
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          523,
                                          561
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 11,
                                            "line": 23
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
                                          569,
                                          573
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 11,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 7,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "range": [
                                        523,
                                        573
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 11,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 23
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      523,
                                      646
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    516,
                                    647
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 23
                                    }
                                  }
                                }
                              ],
                              "range": [
                                224,
                                653
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 27
                                },
                                "start": {
                                  "column": 67,
                                  "line": 9
                                }
                              }
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "range": [
                                  204,
                                  211
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reject",
                                "optional": false,
                                "range": [
                                  213,
                                  219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              203,
                              653
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 27
                              },
                              "start": {
                                "column": 46,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            170,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            177,
                            202
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  183,
                                  201
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MyModule",
                                        "optional": false,
                                        "range": [
                                          184,
                                          192
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MyModel",
                                        "optional": false,
                                        "range": [
                                          193,
                                          200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        184,
                                        200
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      184,
                                      200
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 9
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "range": [
                                  178,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                178,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 9
                                },
                                "start": {
                                  "column": 21,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          166,
                          654
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 27
                          },
                          "start": {
                            "column": 9,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        159,
                        655
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 27
                        },
                        "start": {
                          "column": 2,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    155,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 28
                    },
                    "start": {
                      "column": 52,
                      "line": 8
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      },
                      "range": [
                        130,
                        138
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          132,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 8
                          },
                          "start": {
                            "column": 29,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      125,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 42,
                          "line": 8
                        }
                      },
                      "range": [
                        145,
                        153
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          147,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 8
                          },
                          "start": {
                            "column": 44,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      140,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 8
                      },
                      "start": {
                        "column": 37,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              "range": [
                105,
                659
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "range": [
                  676,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  683,
                  713
                ],
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": null,
                      "range": [
                        702,
                        709
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 31
                        },
                        "start": {
                          "column": 4,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    696,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 32
                    },
                    "start": {
                      "column": 35,
                      "line": 30
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 30
                        },
                        "start": {
                          "column": 25,
                          "line": 30
                        }
                      },
                      "range": [
                        686,
                        694
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          688,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 30
                          },
                          "start": {
                            "column": 27,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      684,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 30
                      },
                      "start": {
                        "column": 23,
                        "line": 30
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 30
                  }
                }
              },
              "range": [
                663,
                713
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BrokenClass",
          "optional": false,
          "range": [
            68,
            79
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          62,
          715
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
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
      "line": 34
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
    44
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        44
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            25,
            44
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  31,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                },
                "range": [
                  33,
                  41
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    35,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                31,
                42
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
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
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyModel",
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
        "range": [
          7,
          44
        ],
        "loc": {
          "end": {
            "column": 1,
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
          "column": 1,
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
      "column": 1,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
