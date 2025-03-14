__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    881
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "raw": "\"use strict\"",
              "value": "use strict",
              "range": [
                21,
                33
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                54,
                200
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      64,
                      75
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
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
                      75,
                      112
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        101,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 45,
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
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            },
                            "range": [
                              91,
                              99
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                93,
                                99
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 5
                                },
                                "start": {
                                  "column": 37,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            83,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 5
                            },
                            "start": {
                              "column": 27,
                              "line": 5
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          76,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    64,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 5
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
                    "name": "greet",
                    "optional": false,
                    "range": [
                      122,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
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
                      127,
                      194
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "raw": "\"<h1>\"",
                                "value": "<h1>",
                                "range": [
                                  151,
                                  157
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 9
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    160,
                                    164
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "range": [
                                    165,
                                    173
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  160,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                151,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"</h1>\"",
                              "value": "</h1>",
                              "range": [
                                176,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 9
                                },
                                "start": {
                                  "column": 44,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              151,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            144,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        130,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 8
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
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    122,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "range": [
                46,
                53
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              40,
              200
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
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
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "range": [
                          276,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 27,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false,
                      "range": [
                        268,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      264,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    257,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                247,
                292
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 44,
                  "line": 14
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
                216,
                219
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  },
                  "range": [
                    228,
                    236
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      230,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  220,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              },
              "range": [
                237,
                246
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false,
                  "range": [
                    239,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 36,
                      "line": 14
                    }
                  }
                },
                "range": [
                  239,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              207,
              292
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "greeter",
                  "optional": false,
                  "range": [
                    302,
                    309
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
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"Hello, world!\"",
                      "value": "Hello, world!",
                      "range": [
                        324,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 18
                        },
                        "start": {
                          "column": 30,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "range": [
                      316,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 22,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    312,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
                    }
                  }
                },
                "range": [
                  302,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              298,
              341
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "name": "str",
                  "optional": false,
                  "range": [
                    350,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "range": [
                        356,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "range": [
                        364,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      356,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    356,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  350,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              346,
              372
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          },
                          "range": [
                            480,
                            491
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "range": [
                                  482,
                                  489
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                482,
                                489
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 22
                                },
                                "start": {
                                  "column": 22,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              482,
                              491
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 22
                              },
                              "start": {
                                "column": 22,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          472,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          494,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 22
                          },
                          "start": {
                            "column": 34,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        472,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    468,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "range": [
                          533,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          542,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        533,
                        544
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
                    "right": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "range": [
                            559,
                            567
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "range": [
                          551,
                          558
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 23
                          },
                          "start": {
                            "column": 26,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        547,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 23
                        },
                        "start": {
                          "column": 22,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      533,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    533,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "range": [
                                      665,
                                      678
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      679,
                                      680
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    665,
                                    681
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "range": [
                                  657,
                                  664
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                653,
                                682
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 25
                                },
                                "start": {
                                  "column": 26,
                                  "line": 25
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
                              "name": "greeters",
                              "optional": false,
                              "range": [
                                639,
                                647
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 25
                                },
                                "start": {
                                  "column": 12,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "range": [
                                648,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 25
                                },
                                "start": {
                                  "column": 21,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              639,
                              652
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 25
                              },
                              "start": {
                                "column": 12,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            639,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          639,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      625,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 55,
                        "line": 24
                      }
                    }
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            587,
                            588
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            591,
                            592
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 24
                            },
                            "start": {
                              "column": 21,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          587,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 24
                          },
                          "start": {
                            "column": 17,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      583,
                      592
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        594,
                        595
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "range": [
                          598,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 24
                          },
                          "start": {
                            "column": 28,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          612,
                          618
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 24
                          },
                          "start": {
                            "column": 42,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        598,
                        618
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 24
                        },
                        "start": {
                          "column": 28,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      594,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        620,
                        621
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 24
                        },
                        "start": {
                          "column": 50,
                          "line": 24
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      620,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 24
                      },
                      "start": {
                        "column": 50,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    578,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "range": [
                      711,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    704,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                458,
                726
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 84,
                  "line": 21
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                387,
                391
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 21
                    },
                    "start": {
                      "column": 26,
                      "line": 21
                    }
                  },
                  "range": [
                    400,
                    408
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      402,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 28,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  392,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "range": [
                    413,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 21
                    },
                    "start": {
                      "column": 72,
                      "line": 21
                    }
                  },
                  "range": [
                    446,
                    456
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        448,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 21
                        },
                        "start": {
                          "column": 74,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      448,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 21
                      },
                      "start": {
                        "column": 74,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  410,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              378,
              726
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    736,
                    737
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"Hello\"",
                      "value": "Hello",
                      "range": [
                        745,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 31
                        },
                        "start": {
                          "column": 17,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"World\"",
                      "value": "World",
                      "range": [
                        754,
                        761
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 31
                        },
                        "start": {
                          "column": 26,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"!\"",
                      "value": "!",
                      "range": [
                        763,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 35,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      740,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    740,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  736,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              732,
              768
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            860,
                            861
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 34
                            },
                            "start": {
                              "column": 8,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            862,
                            863
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 34
                            },
                            "start": {
                              "column": 10,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          860,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greet",
                        "optional": false,
                        "range": [
                          865,
                          870
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 34
                          },
                          "start": {
                            "column": 13,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        860,
                        870
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      860,
                      872
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    860,
                    873
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                850,
                879
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 39,
                  "line": 33
                }
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "range": [
                      824,
                      825
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      828,
                      829
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 17,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    824,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                820,
                829
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  831,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    835,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 33
                    },
                    "start": {
                      "column": 24,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    837,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                },
                "range": [
                  835,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 33
                  },
                  "start": {
                    "column": 24,
                    "line": 33
                  }
                }
              },
              "range": [
                831,
                843
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 33
                },
                "start": {
                  "column": 20,
                  "line": 33
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  845,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 33
                  },
                  "start": {
                    "column": 34,
                    "line": 33
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                845,
                848
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 33
                },
                "start": {
                  "column": 34,
                  "line": 33
                }
              }
            },
            "range": [
              815,
              879
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          15,
          881
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          7,
          14
        ],
        "left": {
          "type": "Identifier",
          "range": [
            7,
            10
          ],
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            11,
            14
          ],
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        },
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        881
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
