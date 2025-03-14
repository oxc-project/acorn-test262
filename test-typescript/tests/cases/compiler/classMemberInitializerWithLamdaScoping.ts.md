__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    983
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                50
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
                      "name": "log",
                      "optional": false,
                      "range": [
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 2
                            },
                            "start": {
                              "column": 12,
                              "line": 2
                            }
                          },
                          "range": [
                            35,
                            40
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              37,
                              40
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 2
                              },
                              "start": {
                                "column": 14,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      },
                      "range": [
                        41,
                        47
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          43,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  50
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
            },
            "range": [
              12,
              50
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            50
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        51
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          63,
          420
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                69,
                80
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                80,
                111
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  104,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 39,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      },
                      "range": [
                        94,
                        102
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          96,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 5
                          },
                          "start": {
                            "column": 31,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      89,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    81,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              69,
              111
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "range": [
                116,
                130
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
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
                          "name": "field",
                          "optional": false,
                          "range": [
                            153,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              161,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 8
                              },
                              "start": {
                                "column": 20,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "range": [
                              166,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 8
                              },
                              "start": {
                                "column": 25,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            161,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          153,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      149,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                          "name": "field",
                          "optional": false,
                          "range": [
                            193,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            181,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            189,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          181,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        181,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      181,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  139,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                133,
                244
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "range": [
              116,
              245
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "range": [
                257,
                262
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
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
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              },
              "range": [
                262,
                270
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  264,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            },
            "value": null,
            "range": [
              250,
              271
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "range": [
                283,
                303
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                          "name": "field",
                          "optional": false,
                          "range": [
                            326,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test",
                            "optional": false,
                            "range": [
                              334,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "range": [
                              339,
                              344
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
                          },
                          "range": [
                            334,
                            344
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          326,
                          344
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      322,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                          "name": "field",
                          "optional": false,
                          "range": [
                            366,
                            371
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
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "range": [
                            354,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            362,
                            365
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 16,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          354,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        354,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      354,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  312,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 40,
                    "line": 12
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                306,
                417
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            },
            "range": [
              276,
              418
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          58,
          62
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        52,
        420
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "field1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 10,
                  "line": 18
                }
              },
              "range": [
                432,
                440
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  434,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              426,
              440
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
          "init": null,
          "range": [
            426,
            440
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        422,
        441
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          454,
          983
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                460,
                471
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                471,
                503
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  496,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 40,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 20
                        },
                        "start": {
                          "column": 30,
                          "line": 20
                        }
                      },
                      "range": [
                        486,
                        494
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          488,
                          494
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 20
                          },
                          "start": {
                            "column": 32,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      480,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    472,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              460,
              503
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "range": [
                508,
                522
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
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
                          "name": "field1",
                          "optional": false,
                          "range": [
                            553,
                            559
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 23
                            },
                            "start": {
                              "column": 20,
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            541,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            549,
                            552
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 23
                            },
                            "start": {
                              "column": 16,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          541,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        541,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      541,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  531,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 22
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                525,
                851
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "range": [
              508,
              852
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "range": [
                864,
                884
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                          "name": "field1",
                          "optional": false,
                          "range": [
                            915,
                            921
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 28
                            },
                            "start": {
                              "column": 20,
                              "line": 28
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            903,
                            910
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 28
                            },
                            "start": {
                              "column": 8,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            911,
                            914
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 28
                            },
                            "start": {
                              "column": 16,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          903,
                          914
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        903,
                        922
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      903,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  893,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 40,
                    "line": 27
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                887,
                980
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 27
                }
              }
            },
            "range": [
              857,
              981
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 27
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
            "column": 12,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          448,
          453
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        442,
        983
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
