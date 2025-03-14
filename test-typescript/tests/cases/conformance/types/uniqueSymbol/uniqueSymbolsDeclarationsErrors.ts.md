__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1215
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                30
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    24,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "range": [
                  17,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
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
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
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
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          44,
          85
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "range": [
                55,
                67
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 23,
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
                  "column": 50,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              },
              "range": [
                67,
                82
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    76,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  }
                },
                "range": [
                  69,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              46,
              83
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          42,
          43
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        32,
        85
      ],
      "loc": {
        "end": {
          "column": 53,
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
        130,
        294
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
              "name": "obj",
              "optional": false,
              "range": [
                143,
                146
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "range": [
                      155,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      162,
                      211
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "range": [
                              203,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 8
                              },
                              "start": {
                                "column": 15,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            196,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        186,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 9
                        },
                        "start": {
                          "column": 35,
                          "line": 7
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 13,
                              "line": 7
                            }
                          },
                          "range": [
                            164,
                            174
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                173,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              166,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          163,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
                        }
                      },
                      "range": [
                        175,
                        185
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            184,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 7
                            },
                            "start": {
                              "column": 33,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          177,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    155,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "range": [
                      217,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      224,
                      291
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "range": [
                              283,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 11
                              },
                              "start": {
                                "column": 15,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            276,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        266,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 12
                        },
                        "start": {
                          "column": 53,
                          "line": 10
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 10
                            },
                            "start": {
                              "column": 13,
                              "line": 10
                            }
                          },
                          "range": [
                            226,
                            245
                          ],
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"readonlyType\"",
                                "value": "readonlyType",
                                "range": [
                                  230,
                                  244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                230,
                                244
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 10
                                },
                                "start": {
                                  "column": 17,
                                  "line": 10
                                }
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "range": [
                                  228,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                228,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 10
                                },
                                "start": {
                                  "column": 15,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              228,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 10
                              },
                              "start": {
                                "column": 15,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          225,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
                          "line": 10
                        }
                      },
                      "range": [
                        246,
                        265
                      ],
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"readonlyType\"",
                            "value": "readonlyType",
                            "range": [
                              250,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 10
                              },
                              "start": {
                                "column": 37,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            250,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 10
                            },
                            "start": {
                              "column": 37,
                              "line": 10
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "range": [
                              248,
                              249
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 10
                              },
                              "start": {
                                "column": 35,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            248,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 10
                            },
                            "start": {
                              "column": 35,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          248,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 10
                          },
                          "start": {
                            "column": 35,
                            "line": 10
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    217,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                149,
                293
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              143,
              293
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          137,
          294
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        296,
        477
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
              "name": "classExpression",
              "optional": false,
              "range": [
                309,
                324
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "init": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  333,
                  476
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method1",
                      "optional": false,
                      "range": [
                        339,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 16
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
                        346,
                        395
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                387,
                                388
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 17
                                },
                                "start": {
                                  "column": 15,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              380,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 17
                              },
                              "start": {
                                "column": 8,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          370,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 18
                          },
                          "start": {
                            "column": 35,
                            "line": 16
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 16
                              },
                              "start": {
                                "column": 13,
                                "line": 16
                              }
                            },
                            "range": [
                              348,
                              358
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "range": [
                                  357,
                                  358
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                350,
                                358
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 16
                                },
                                "start": {
                                  "column": 15,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            347,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 16
                          },
                          "start": {
                            "column": 24,
                            "line": 16
                          }
                        },
                        "range": [
                          359,
                          369
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              368,
                              369
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 16
                              },
                              "start": {
                                "column": 33,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            361,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 16
                            },
                            "start": {
                              "column": 26,
                              "line": 16
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      339,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "range": [
                        400,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
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
                        407,
                        474
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                466,
                                467
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 20
                                },
                                "start": {
                                  "column": 15,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              459,
                              468
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 20
                              },
                              "start": {
                                "column": 8,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          449,
                          474
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 21
                          },
                          "start": {
                            "column": 53,
                            "line": 19
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 19
                              },
                              "start": {
                                "column": 13,
                                "line": 19
                              }
                            },
                            "range": [
                              409,
                              428
                            ],
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"readonlyType\"",
                                  "value": "readonlyType",
                                  "range": [
                                    413,
                                    427
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  413,
                                  427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 19
                                  }
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "range": [
                                    411,
                                    412
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  411,
                                  412
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                411,
                                428
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 19
                                },
                                "start": {
                                  "column": 15,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            408,
                            428
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 19
                          },
                          "start": {
                            "column": 33,
                            "line": 19
                          }
                        },
                        "range": [
                          429,
                          448
                        ],
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"readonlyType\"",
                              "value": "readonlyType",
                              "range": [
                                433,
                                447
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 19
                                },
                                "start": {
                                  "column": 37,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              433,
                              447
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 19
                              },
                              "start": {
                                "column": 37,
                                "line": 19
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "range": [
                                431,
                                432
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 19
                                },
                                "start": {
                                  "column": 35,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              431,
                              432
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 19
                              },
                              "start": {
                                "column": 35,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            431,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 19
                            },
                            "start": {
                              "column": 35,
                              "line": 19
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      400,
                      474
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 22
                  },
                  "start": {
                    "column": 37,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                327,
                476
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 22
                },
                "start": {
                  "column": 31,
                  "line": 15
                }
              }
            },
            "range": [
              309,
              476
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 15
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          303,
          477
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        479,
        573
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  567,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              },
              "range": [
                560,
                571
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            554,
            573
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 75,
              "line": 24
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "funcInferredReturnType",
          "optional": false,
          "range": [
            495,
            517
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 24
            },
            "start": {
              "column": 16,
              "line": 24
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 73,
                  "line": 24
                },
                "start": {
                  "column": 42,
                  "line": 24
                }
              },
              "range": [
                521,
                552
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "range": [
                        525,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 24
                        },
                        "start": {
                          "column": 46,
                          "line": 24
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 24
                            },
                            "start": {
                              "column": 54,
                              "line": 24
                            }
                          },
                          "range": [
                            533,
                            543
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                542,
                                543
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 24
                                },
                                "start": {
                                  "column": 63,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              535,
                              543
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 24
                              },
                              "start": {
                                "column": 56,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          532,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 24
                          },
                          "start": {
                            "column": 53,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 24
                        },
                        "start": {
                          "column": 65,
                          "line": 24
                        }
                      },
                      "range": [
                        544,
                        550
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          546,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 24
                          },
                          "start": {
                            "column": 67,
                            "line": 24
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      525,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 24
                      },
                      "start": {
                        "column": 46,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  523,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 24
                  },
                  "start": {
                    "column": 44,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              518,
              552
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 24
              },
              "start": {
                "column": 39,
                "line": 24
              }
            }
          }
        ],
        "range": [
          486,
          573
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        575,
        645
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            628,
            645
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  635,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 29
                  },
                  "start": {
                    "column": 5,
                    "line": 29
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
                    "column": 12,
                    "line": 29
                  },
                  "start": {
                    "column": 7,
                    "line": 29
                  }
                },
                "range": [
                  637,
                  642
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    639,
                    642
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
              },
              "range": [
                634,
                643
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 53,
              "line": 28
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceWithPrivateNamedProperties",
          "optional": false,
          "range": [
            592,
            627
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 28
            },
            "start": {
              "column": 17,
              "line": 28
            }
          }
        },
        "range": [
          582,
          645
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
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
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        647,
        716
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            697,
            716
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  704,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 33
                  },
                  "start": {
                    "column": 5,
                    "line": 33
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                },
                "range": [
                  708,
                  713
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    710,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                }
              },
              "static": false,
              "range": [
                703,
                714
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 50,
              "line": 32
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceWithPrivateNamedMethods",
          "optional": false,
          "range": [
            664,
            696
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 32
            },
            "start": {
              "column": 17,
              "line": 32
            }
          }
        },
        "range": [
          654,
          716
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        718,
        787
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedProperties",
          "optional": false,
          "range": [
            730,
            767
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  777,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 37
                  },
                  "start": {
                    "column": 5,
                    "line": 37
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
                    "column": 12,
                    "line": 37
                  },
                  "start": {
                    "column": 7,
                    "line": 37
                  }
                },
                "range": [
                  779,
                  784
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    781,
                    784
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 37
                    },
                    "start": {
                      "column": 9,
                      "line": 37
                    }
                  }
                }
              },
              "range": [
                776,
                785
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            }
          ],
          "range": [
            770,
            787
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 52,
              "line": 36
            }
          }
        },
        "range": [
          725,
          787
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        789,
        857
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedMethods",
          "optional": false,
          "range": [
            801,
            835
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  845,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 41
                  },
                  "start": {
                    "column": 5,
                    "line": 41
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                },
                "range": [
                  849,
                  854
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    851,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 41
                    },
                    "start": {
                      "column": 11,
                      "line": 41
                    }
                  }
                }
              },
              "static": false,
              "range": [
                844,
                855
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            }
          ],
          "range": [
            838,
            857
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 42
            },
            "start": {
              "column": 49,
              "line": 40
            }
          }
        },
        "range": [
          796,
          857
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        859,
        942
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            904,
            942
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  911,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 45
                  },
                  "start": {
                    "column": 5,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 45
                  },
                  "start": {
                    "column": 7,
                    "line": 45
                  }
                },
                "range": [
                  913,
                  918
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    915,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 45
                    },
                    "start": {
                      "column": 9,
                      "line": 45
                    }
                  }
                }
              },
              "value": null,
              "range": [
                910,
                919
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  932,
                  933
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 46
                  },
                  "start": {
                    "column": 12,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 46
                  },
                  "start": {
                    "column": 14,
                    "line": 46
                  }
                },
                "range": [
                  934,
                  939
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    936,
                    939
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
                    }
                  }
                }
              },
              "value": null,
              "range": [
                924,
                940
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 45,
              "line": 44
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedProperties",
          "optional": false,
          "range": [
            872,
            903
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 44
            },
            "start": {
              "column": 13,
              "line": 44
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          866,
          942
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        944,
        1022
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            986,
            1022
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  993,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 50
                  },
                  "start": {
                    "column": 5,
                    "line": 50
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
                  995,
                  1000
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    998,
                    1000
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 50
                    },
                    "start": {
                      "column": 10,
                      "line": 50
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
                    "column": 12,
                    "line": 50
                  },
                  "start": {
                    "column": 7,
                    "line": 50
                  }
                }
              },
              "range": [
                992,
                1000
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1013,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 51
                  },
                  "start": {
                    "column": 12,
                    "line": 51
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1015,
                  1020
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1018,
                    1020
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 17,
                      "line": 51
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
                    "column": 19,
                    "line": 51
                  },
                  "start": {
                    "column": 14,
                    "line": 51
                  }
                }
              },
              "range": [
                1005,
                1020
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 52
            },
            "start": {
              "column": 42,
              "line": 49
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedMethods",
          "optional": false,
          "range": [
            957,
            985
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 49
            },
            "start": {
              "column": 13,
              "line": 49
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          951,
          1022
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1024,
        1215
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1068,
            1215
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1079,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 55
                  },
                  "start": {
                    "column": 9,
                    "line": 55
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1081,
                  1110
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "range": [
                          1098,
                          1107
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 55
                          },
                          "start": {
                            "column": 28,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1091,
                        1108
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 55
                        },
                        "start": {
                          "column": 21,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "range": [
                    1089,
                    1110
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 55
                    },
                    "start": {
                      "column": 19,
                      "line": 55
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 13,
                      "line": 55
                    }
                  },
                  "range": [
                    1083,
                    1088
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1085,
                      1088
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 55
                      },
                      "start": {
                        "column": 15,
                        "line": 55
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 55
                  }
                }
              },
              "range": [
                1074,
                1110
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1120,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 56
                  },
                  "start": {
                    "column": 9,
                    "line": 56
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1122,
                  1134
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1131,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 56
                        },
                        "start": {
                          "column": 13,
                          "line": 56
                        }
                      },
                      "range": [
                        1124,
                        1129
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1126,
                          1129
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 56
                          },
                          "start": {
                            "column": 15,
                            "line": 56
                          }
                        }
                      }
                    },
                    "range": [
                      1123,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 56
                  },
                  "start": {
                    "column": 11,
                    "line": 56
                  }
                }
              },
              "range": [
                1115,
                1134
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1151,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 57
                  },
                  "start": {
                    "column": 16,
                    "line": 57
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1153,
                  1182
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "range": [
                          1170,
                          1179
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 57
                          },
                          "start": {
                            "column": 35,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1163,
                        1180
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 57
                        },
                        "start": {
                          "column": 28,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "range": [
                    1161,
                    1182
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 57
                    },
                    "start": {
                      "column": 26,
                      "line": 57
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 57
                    },
                    "start": {
                      "column": 20,
                      "line": 57
                    }
                  },
                  "range": [
                    1155,
                    1160
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1157,
                      1160
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 57
                      },
                      "start": {
                        "column": 22,
                        "line": 57
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 57
                  },
                  "start": {
                    "column": 18,
                    "line": 57
                  }
                }
              },
              "range": [
                1139,
                1182
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  1199,
                  1200
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 58
                  },
                  "start": {
                    "column": 16,
                    "line": 58
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1201,
                  1213
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1210,
                    1213
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 58
                    },
                    "start": {
                      "column": 27,
                      "line": 58
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 58
                        },
                        "start": {
                          "column": 20,
                          "line": 58
                        }
                      },
                      "range": [
                        1203,
                        1208
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1205,
                          1208
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 58
                          },
                          "start": {
                            "column": 22,
                            "line": 58
                          }
                        }
                      }
                    },
                    "range": [
                      1202,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 58
                  },
                  "start": {
                    "column": 18,
                    "line": 58
                  }
                }
              },
              "range": [
                1187,
                1213
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 59
            },
            "start": {
              "column": 44,
              "line": 54
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedAccessors",
          "optional": false,
          "range": [
            1037,
            1067
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 54
            },
            "start": {
              "column": 13,
              "line": 54
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          1031,
          1215
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 7,
            "line": 54
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 59
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
