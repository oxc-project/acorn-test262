__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1306
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                29,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                40
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    35,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                },
                "range": [
                  35,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              26,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          },
          "range": [
            42,
            46
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 45,
                  "line": 1
                }
              }
            },
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          }
        },
        "range": [
          22,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
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
          60,
          118
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                66,
                77
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                77,
                116
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  114,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      },
                      "range": [
                        86,
                        94
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          88,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      85,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    78,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      },
                      "range": [
                        104,
                        112
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          106,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      103,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 41,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    96,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              116
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          55,
          59
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        49,
        118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          147,
          235
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                153,
                164
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                164,
                233
              ],
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            221,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            224,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          215,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
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
                        215,
                        226
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
                    "range": [
                      215,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  205,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 56,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    },
                    "range": [
                      166,
                      174
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        168,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    },
                    "range": [
                      177,
                      185
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        179,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    176,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 8
                        },
                        "start": {
                          "column": 46,
                          "line": 8
                        }
                      },
                      "range": [
                        195,
                        203
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          197,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 8
                          },
                          "start": {
                            "column": 48,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      194,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    187,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 8
                    },
                    "start": {
                      "column": 38,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              153,
              233
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          126,
          133
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          142,
          146
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        120,
        235
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          257,
          279
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "print",
              "optional": false,
              "range": [
                263,
                268
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              },
              "range": [
                270,
                276
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  272,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              263,
              277
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 20,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Printable",
        "optional": false,
        "range": [
          247,
          256
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        237,
        279
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "Printable",
            "optional": false,
            "range": [
              287,
              296
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  426,
                  545
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "range": [
                        443,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        453,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 25,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      436,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
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
                      "name": "print",
                      "optional": false,
                      "range": [
                        470,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
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
                        475,
                        539
                      ],
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
                                  "name": "output",
                                  "optional": false,
                                  "range": [
                                    498,
                                    504
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 21
                                    }
                                  }
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          507,
                                          511
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 21
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
                                          512,
                                          513
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        507,
                                        513
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "\",\"",
                                      "value": ",",
                                      "range": [
                                        516,
                                        519
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      507,
                                      519
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        522,
                                        526
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        527,
                                        528
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      522,
                                      528
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    507,
                                    528
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  498,
                                  528
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 21
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              492,
                              529
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 21
                              },
                              "start": {
                                "column": 12,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          478,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 22
                          },
                          "start": {
                            "column": 16,
                            "line": 20
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
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      470,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 29,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "range": [
                  415,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              },
              "range": [
                401,
                545
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 17
                    },
                    "start": {
                      "column": 58,
                      "line": 17
                    }
                  },
                  "range": [
                    339,
                    342
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        341,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 17
                        },
                        "start": {
                          "column": 60,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      341,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 17
                      },
                      "start": {
                        "column": 60,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  329,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 17
                  },
                  "start": {
                    "column": 48,
                    "line": 17
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 112,
                  "line": 17
                },
                "start": {
                  "column": 62,
                  "line": 17
                }
              },
              "range": [
                343,
                393
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        356,
                        367
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Printable",
                            "optional": false,
                            "range": [
                              357,
                              366
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 17
                              },
                              "start": {
                                "column": 76,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            357,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 17
                            },
                            "start": {
                              "column": 76,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 17
                        },
                        "start": {
                          "column": 75,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        345,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 17
                        },
                        "start": {
                          "column": 64,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      345,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 17
                      },
                      "start": {
                        "column": 64,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            372,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 17
                            },
                            "start": {
                              "column": 91,
                              "line": 17
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
                              "column": 106,
                              "line": 17
                            },
                            "start": {
                              "column": 98,
                              "line": 17
                            }
                          },
                          "range": [
                            379,
                            387
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              381,
                              387
                            ],
                            "loc": {
                              "end": {
                                "column": 106,
                                "line": 17
                              },
                              "start": {
                                "column": 100,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          372,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 106,
                            "line": 17
                          },
                          "start": {
                            "column": 91,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      370,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 17
                      },
                      "start": {
                        "column": 89,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        392,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 17
                        },
                        "start": {
                          "column": 111,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      392,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 112,
                        "line": 17
                      },
                      "start": {
                        "column": 111,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  345,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 112,
                    "line": 17
                  },
                  "start": {
                    "column": 64,
                    "line": 17
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              },
              "range": [
                299,
                328
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        321,
                        327
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "range": [
                              322,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 17
                              },
                              "start": {
                                "column": 41,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            322,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 17
                            },
                            "start": {
                              "column": 41,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 17
                        },
                        "start": {
                          "column": 40,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        310,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 29,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      310,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      300,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    300,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 17
                    },
                    "start": {
                      "column": 19,
                      "line": 17
                    }
                  }
                }
              ]
            },
            "range": [
              299,
              545
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          "range": [
            287,
            545
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        281,
        545
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          564,
          585
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "range": [
                570,
                574
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              },
              "range": [
                574,
                582
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  576,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              570,
              583
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "range": [
          557,
          563
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "range": [
        547,
        585
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                703,
                841
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_tag",
                    "optional": false,
                    "range": [
                      713,
                      717
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
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
                        "column": 20,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    },
                    "range": [
                      717,
                      725
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        719,
                        725
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 14,
                          "line": 31
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    713,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      735,
                      746
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
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
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      746,
                      835
                    ],
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
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    786,
                                    790
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  783,
                                  790
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 33
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "range": [
                                777,
                                782
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              777,
                              791
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            777,
                            792
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  805,
                                  809
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 34
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_tag",
                                "optional": false,
                                "range": [
                                  810,
                                  814
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                805,
                                814
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 34
                                },
                                "start": {
                                  "column": 12,
                                  "line": 34
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"hello\"",
                              "value": "hello",
                              "range": [
                                817,
                                824
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 34
                                },
                                "start": {
                                  "column": 24,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              805,
                              824
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 34
                              },
                              "start": {
                                "column": 12,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            805,
                            825
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        763,
                        835
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 36,
                          "line": 32
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            750,
                            754
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 32
                            },
                            "start": {
                              "column": 23,
                              "line": 32
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 32
                            },
                            "start": {
                              "column": 27,
                              "line": 32
                            }
                          },
                          "range": [
                            754,
                            761
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                756,
                                759
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 32
                                },
                                "start": {
                                  "column": 29,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              756,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 32
                              },
                              "start": {
                                "column": 29,
                                "line": 32
                              }
                            }
                          }
                        },
                        "range": [
                          747,
                          761
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 32
                          },
                          "start": {
                            "column": 20,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    735,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 31,
                  "line": 30
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                682,
                683
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "superClass",
              "optional": false,
              "range": [
                692,
                702
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            "range": [
              676,
              841
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                853,
                854
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "range": [
              846,
              855
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
          670,
          857
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 83,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "range": [
          596,
          602
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 29
              },
              "start": {
                "column": 53,
                "line": 29
              }
            },
            "range": [
              640,
              643
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  642,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 29
                  },
                  "start": {
                    "column": 55,
                    "line": 29
                  }
                }
              },
              "range": [
                642,
                643
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 29
                },
                "start": {
                  "column": 55,
                  "line": 29
                }
              }
            }
          },
          "range": [
            630,
            643
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 29
            },
            "start": {
              "column": 43,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 29
          },
          "start": {
            "column": 57,
            "line": 29
          }
        },
        "range": [
          644,
          669
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  657,
                  665
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tagged",
                      "optional": false,
                      "range": [
                        658,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 29
                        },
                        "start": {
                          "column": 71,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      658,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 29
                      },
                      "start": {
                        "column": 71,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 29
                  },
                  "start": {
                    "column": 70,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  646,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 29
                  },
                  "start": {
                    "column": 59,
                    "line": 29
                  }
                }
              },
              "range": [
                646,
                665
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 29
                },
                "start": {
                  "column": 59,
                  "line": 29
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  668,
                  669
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 29
                  },
                  "start": {
                    "column": 81,
                    "line": 29
                  }
                }
              },
              "range": [
                668,
                669
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 29
                },
                "start": {
                  "column": 81,
                  "line": 29
                }
              }
            }
          ],
          "range": [
            646,
            669
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 29
            },
            "start": {
              "column": 59,
              "line": 29
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 29
          },
          "start": {
            "column": 15,
            "line": 29
          }
        },
        "range": [
          602,
          629
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  624,
                  628
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      625,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 29
                      },
                      "start": {
                        "column": 38,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 29
                  },
                  "start": {
                    "column": 37,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  613,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
                  }
                }
              },
              "range": [
                613,
                628
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 29
                },
                "start": {
                  "column": 26,
                  "line": 29
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              603,
              628
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 29
              },
              "start": {
                "column": 16,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        587,
        857
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "Thing1",
            "optional": false,
            "range": [
              865,
              871
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "range": [
                  881,
                  888
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "range": [
                874,
                880
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              874,
              889
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 40
              },
              "start": {
                "column": 15,
                "line": 40
              }
            }
          },
          "range": [
            865,
            889
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        859,
        890
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "Thing2",
            "optional": false,
            "range": [
              897,
              903
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "range": [
                      923,
                      930
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 41
                      },
                      "start": {
                        "column": 32,
                        "line": 41
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Printable",
                  "optional": false,
                  "range": [
                    913,
                    922
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 22,
                      "line": 41
                    }
                  }
                },
                "optional": false,
                "range": [
                  913,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 41
                  },
                  "start": {
                    "column": 22,
                    "line": 41
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "range": [
                906,
                912
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 41
                }
              }
            },
            "optional": false,
            "range": [
              906,
              932
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 41
              },
              "start": {
                "column": 15,
                "line": 41
              }
            }
          },
          "range": [
            897,
            932
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        891,
        933
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
          "name": "Thing2",
          "optional": false,
          "range": [
            934,
            940
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "range": [
            941,
            948
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 42
            },
            "start": {
              "column": 7,
              "line": 42
            }
          }
        },
        "range": [
          934,
          948
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        934,
        949
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
                  "name": "thing",
                  "optional": false,
                  "range": [
                    977,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 45
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        996,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 45
                        },
                        "start": {
                          "column": 29,
                          "line": 45
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        999,
                        1000
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 45
                        },
                        "start": {
                          "column": 32,
                          "line": 45
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1002,
                        1003
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 45
                        },
                        "start": {
                          "column": 35,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing1",
                    "optional": false,
                    "range": [
                      989,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 45
                      },
                      "start": {
                        "column": 22,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    985,
                    1004
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 45
                    },
                    "start": {
                      "column": 18,
                      "line": 45
                    }
                  }
                },
                "range": [
                  977,
                  1004
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              971,
              1005
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                "name": "thing",
                "optional": false,
                "range": [
                  1010,
                  1015
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
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
                  1016,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 46
                  },
                  "start": {
                    "column": 10,
                    "line": 46
                  }
                }
              },
              "range": [
                1010,
                1017
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1010,
              1018
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                "name": "thing",
                "optional": false,
                "range": [
                  1023,
                  1028
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "range": [
                  1029,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 10,
                    "line": 47
                  }
                }
              },
              "range": [
                1023,
                1033
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1023,
              1034
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          965,
          1036
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 14,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          960,
          962
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [],
      "range": [
        951,
        1036
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 44
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
                  "name": "thing",
                  "optional": false,
                  "range": [
                    1064,
                    1069
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 51
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1083,
                        1084
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 51
                        },
                        "start": {
                          "column": 29,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1086,
                        1087
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 51
                        },
                        "start": {
                          "column": 32,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1089,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 51
                        },
                        "start": {
                          "column": 35,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing2",
                    "optional": false,
                    "range": [
                      1076,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 51
                      },
                      "start": {
                        "column": 22,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1072,
                    1091
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 51
                    },
                    "start": {
                      "column": 18,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1064,
                  1091
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 51
                  },
                  "start": {
                    "column": 10,
                    "line": 51
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1058,
              1092
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
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
                "name": "thing",
                "optional": false,
                "range": [
                  1097,
                  1102
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
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
                  1103,
                  1104
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 52
                  },
                  "start": {
                    "column": 10,
                    "line": 52
                  }
                }
              },
              "range": [
                1097,
                1104
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1097,
              1105
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
                "name": "thing",
                "optional": false,
                "range": [
                  1110,
                  1115
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "range": [
                  1116,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 53
                  },
                  "start": {
                    "column": 10,
                    "line": 53
                  }
                }
              },
              "range": [
                1110,
                1120
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1110,
              1121
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                  "name": "thing",
                  "optional": false,
                  "range": [
                    1126,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 54
                    },
                    "start": {
                      "column": 4,
                      "line": 54
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "print",
                  "optional": false,
                  "range": [
                    1132,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1126,
                  1137
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                1126,
                1139
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              1126,
              1140
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1052,
          1142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 14,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1047,
          1049
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "params": [],
      "range": [
        1038,
        1142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1172,
          1305
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1178,
                1189
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
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
                1189,
                1262
              ],
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
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            1219,
                            1221
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 59
                            },
                            "start": {
                              "column": 14,
                              "line": 59
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "20",
                          "value": 20,
                          "range": [
                            1223,
                            1225
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 59
                            },
                            "start": {
                              "column": 18,
                              "line": 59
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "30",
                          "value": 30,
                          "range": [
                            1227,
                            1229
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 59
                            },
                            "start": {
                              "column": 22,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1213,
                          1218
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1213,
                        1230
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1213,
                      1231
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1240,
                            1244
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 60
                            },
                            "start": {
                              "column": 8,
                              "line": 60
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_tag",
                          "optional": false,
                          "range": [
                            1245,
                            1249
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 60
                            },
                            "start": {
                              "column": 13,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          1240,
                          1249
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 60
                          },
                          "start": {
                            "column": 8,
                            "line": 60
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "range": [
                          1252,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 60
                          },
                          "start": {
                            "column": 20,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1240,
                        1255
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 60
                        },
                        "start": {
                          "column": 8,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1240,
                      1256
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  1203,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 61
                  },
                  "start": {
                    "column": 29,
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    },
                    "range": [
                      1193,
                      1201
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1195,
                        1201
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 58
                        },
                        "start": {
                          "column": 21,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    1190,
                    1201
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 58
                    },
                    "start": {
                      "column": 16,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 15,
                  "line": 58
                }
              }
            },
            "range": [
              1178,
              1262
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 58
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
              "name": "test",
              "optional": false,
              "range": [
                1267,
                1271
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
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
                1271,
                1303
              ],
              "async": false,
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
                          "type": "ThisExpression",
                          "range": [
                            1284,
                            1288
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 63
                            },
                            "start": {
                              "column": 8,
                              "line": 63
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "range": [
                            1289,
                            1294
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 63
                            },
                            "start": {
                              "column": 13,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1284,
                          1294
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 63
                          },
                          "start": {
                            "column": 8,
                            "line": 63
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1284,
                        1296
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 63
                        },
                        "start": {
                          "column": 8,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1284,
                      1297
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  }
                ],
                "range": [
                  1274,
                  1303
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 11,
                    "line": 62
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
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 62
                }
              }
            },
            "range": [
              1267,
              1303
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 28,
            "line": 57
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "range": [
          1150,
          1156
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 57
          },
          "start": {
            "column": 6,
            "line": 57
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "range": [
          1165,
          1171
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 57
          },
          "start": {
            "column": 21,
            "line": 57
          }
        }
      },
      "range": [
        1144,
        1305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 66
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
