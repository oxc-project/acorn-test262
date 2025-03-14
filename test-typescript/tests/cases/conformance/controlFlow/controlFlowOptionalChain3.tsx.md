__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    102,
    640
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          120,
          127
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            109,
            114
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              109,
              114
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        }
      ],
      "range": [
        102,
        128
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          144,
          163
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                148,
                151
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                151,
                160
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  153,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              148,
              161
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          140,
          143
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        130,
        163
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      236,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    236,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                230,
                244
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 26,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      210,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 6,
                        "line": 12
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      215,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    210,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                },
                "range": [
                  210,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  223,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 12
                  }
                }
              },
              "range": [
                210,
                228
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              206,
              244
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                247,
                250
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "range": [
              247,
              251
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "range": [
          202,
          253
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 37,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          174,
          179
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            },
            "range": [
              183,
              200
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      185,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    185,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    191,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                185,
                200
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            }
          },
          "range": [
            180,
            200
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        }
      ],
      "range": [
        165,
        253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      346,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    346,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                340,
                354
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      326,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    326,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                320,
                334
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 19
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      300,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 6,
                        "line": 19
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      305,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 19
                      },
                      "start": {
                        "column": 11,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    300,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
                      "line": 19
                    }
                  }
                },
                "range": [
                  300,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  313,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 19
                  }
                }
              },
              "range": [
                300,
                318
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "range": [
              296,
              354
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          }
        ],
        "range": [
          292,
          356
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 37,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          264,
          269
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
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            },
            "range": [
              273,
              290
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      275,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    275,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    281,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                275,
                290
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          },
          "range": [
            270,
            290
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 18
            }
          }
        }
      ],
      "range": [
        255,
        356
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 18
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
              "type": "JSXElement",
              "children": [
                {
                  "type": "JSXText",
                  "range": [
                    430,
                    437
                  ],
                  "raw": "\n      ",
                  "value": "\n      ",
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 29
                    },
                    "start": {
                      "column": 9,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              438,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 29
                              },
                              "start": {
                                "column": 7,
                                "line": 29
                              }
                            }
                          },
                          "optional": true,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              443,
                              446
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 29
                              },
                              "start": {
                                "column": 12,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            438,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 29
                            },
                            "start": {
                              "column": 7,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          438,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 29
                          },
                          "start": {
                            "column": 7,
                            "line": 29
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          451,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        438,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 29
                        },
                        "start": {
                          "column": 7,
                          "line": 29
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        460,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 29
                        },
                        "start": {
                          "column": 29,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      438,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 29
                      },
                      "start": {
                        "column": 7,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    437,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "range": [
                    466,
                    473
                  ],
                  "raw": "\n      ",
                  "value": "\n      ",
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 30
                    },
                    "start": {
                      "column": 35,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Literal",
                      "raw": "\"false\"",
                      "value": "false",
                      "range": [
                        493,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 30
                        },
                        "start": {
                          "column": 26,
                          "line": 30
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "\"true\"",
                      "value": "true",
                      "range": [
                        484,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 30
                        },
                        "start": {
                          "column": 17,
                          "line": 30
                        }
                      }
                    },
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          474,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 30
                          },
                          "start": {
                            "column": 7,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          478,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 30
                          },
                          "start": {
                            "column": 11,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        474,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 30
                        },
                        "start": {
                          "column": 7,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      474,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 30
                      },
                      "start": {
                        "column": 7,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    473,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "range": [
                    501,
                    506
                  ],
                  "raw": "\n    ",
                  "value": "\n    ",
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 31
                    },
                    "start": {
                      "column": 34,
                      "line": 30
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    508,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 6,
                      "line": 31
                    }
                  }
                },
                "range": [
                  506,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    426,
                    429
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
                "range": [
                  425,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "range": [
                425,
                512
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              412,
              517
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          }
        ],
        "range": [
          408,
          519
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 50,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "range": [
          367,
          372
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  375,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  375,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              "range": [
                375,
                378
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
              }
            },
            "range": [
              380,
              406
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      384,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 26
                      },
                      "start": {
                        "column": 26,
                        "line": 26
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
                        "column": 46,
                        "line": 26
                      },
                      "start": {
                        "column": 29,
                        "line": 26
                      }
                    },
                    "range": [
                      387,
                      404
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              389,
                              392
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 26
                              },
                              "start": {
                                "column": 31,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            389,
                            392
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 26
                            },
                            "start": {
                              "column": 31,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            395,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 26
                            },
                            "start": {
                              "column": 37,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        389,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 26
                        },
                        "start": {
                          "column": 31,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    384,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 26
                    },
                    "start": {
                      "column": 26,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                382,
                406
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 26
                }
              }
            }
          },
          "range": [
            373,
            406
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 26
            },
            "start": {
              "column": 15,
              "line": 26
            }
          }
        }
      ],
      "range": [
        358,
        519
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 26
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      625,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 37
                      },
                      "start": {
                        "column": 4,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    625,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                619,
                637
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 38
                },
                "start": {
                  "column": 41,
                  "line": 36
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        584,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 6,
                          "line": 36
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        593,
                        594
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 36
                        },
                        "start": {
                          "column": 15,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      584,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 36
                      },
                      "start": {
                        "column": 6,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    584,
                    594
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 36
                    },
                    "start": {
                      "column": 6,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    599,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 36
                    },
                    "start": {
                      "column": 21,
                      "line": 36
                    }
                  }
                },
                "range": [
                  584,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 36
                  },
                  "start": {
                    "column": 6,
                    "line": 36
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    608,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 36
                    },
                    "start": {
                      "column": 30,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    616,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 38,
                      "line": 36
                    }
                  }
                },
                "range": [
                  608,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 36
                  },
                  "start": {
                    "column": 30,
                    "line": 36
                  }
                }
              },
              "range": [
                584,
                617
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 36
                },
                "start": {
                  "column": 6,
                  "line": 36
                }
              }
            },
            "range": [
              580,
              637
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          }
        ],
        "range": [
          576,
          639
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 55,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "range": [
          530,
          535
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 35
              },
              "start": {
                "column": 23,
                "line": 35
              }
            },
            "range": [
              544,
              574
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      548,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 35
                      },
                      "start": {
                        "column": 27,
                        "line": 35
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
                        "column": 38,
                        "line": 35
                      },
                      "start": {
                        "column": 29,
                        "line": 35
                      }
                    },
                    "range": [
                      550,
                      559
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        552,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 35
                        },
                        "start": {
                          "column": 31,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    548,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 35
                    },
                    "start": {
                      "column": 27,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      561,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 35
                      },
                      "start": {
                        "column": 40,
                        "line": 35
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
                        "column": 51,
                        "line": 35
                      },
                      "start": {
                        "column": 42,
                        "line": 35
                      }
                    },
                    "range": [
                      563,
                      572
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        565,
                        572
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 35
                        },
                        "start": {
                          "column": 44,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    561,
                    572
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 35
                    },
                    "start": {
                      "column": 40,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                546,
                574
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 35
                },
                "start": {
                  "column": 25,
                  "line": 35
                }
              }
            }
          },
          "range": [
            536,
            574
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 35
            },
            "start": {
              "column": 15,
              "line": 35
            }
          }
        }
      ],
      "range": [
        521,
        639
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
