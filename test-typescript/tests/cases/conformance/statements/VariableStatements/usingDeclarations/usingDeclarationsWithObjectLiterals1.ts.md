__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    656
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          23,
          71
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                27,
                32
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                32,
                40
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              27,
              41
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  45,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "dispose",
                "optional": false,
                "range": [
                  52,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              },
              "range": [
                45,
                59
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 3,
                  "line": 3
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
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                62,
                68
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  64,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              44,
              69
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDisposable",
        "optional": false,
        "range": [
          10,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        71
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
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
                "name": "_",
                "optional": false,
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "init": {
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
                        "name": "Symbol",
                        "optional": false,
                        "range": [
                          90,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "range": [
                          97,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        90,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
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
                        105,
                        110
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          108,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 33,
                            "line": 7
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
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      89,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 14,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              },
              "range": [
                83,
                112
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            }
          ],
          "declare": false,
          "kind": "using",
          "range": [
            77,
            113
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 7
            },
            "start": {
              "column": 2,
              "line": 7
            }
          }
        }
      ],
      "range": [
        73,
        115
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
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
                "name": "_",
                "optional": false,
                "range": [
                  127,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "init": {
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
                        "name": "Symbol",
                        "optional": false,
                        "range": [
                          134,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "range": [
                          141,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 22,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        134,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
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
                        149,
                        154
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          152,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 11
                          },
                          "start": {
                            "column": 33,
                            "line": 11
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
                          "column": 35,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      133,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        156,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 37,
                          "line": 11
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        163,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 11
                        },
                        "start": {
                          "column": 44,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      156,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 37,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  131,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              },
              "range": [
                127,
                166
              ],
              "loc": {
                "end": {
                  "column": 47,
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
          "kind": "using",
          "range": [
            121,
            167
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 11
            },
            "start": {
              "column": 2,
              "line": 11
            }
          }
        }
      ],
      "range": [
        117,
        169
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
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
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  },
                  "range": [
                    182,
                    196
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyDisposable",
                      "optional": false,
                      "range": [
                        184,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      184,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  181,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "init": {
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
                        "name": "Symbol",
                        "optional": false,
                        "range": [
                          202,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 29,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "range": [
                          209,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 15
                          },
                          "start": {
                            "column": 36,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        202,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 29,
                          "line": 15
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
                        217,
                        222
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          220,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 15
                          },
                          "start": {
                            "column": 47,
                            "line": 15
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
                          "column": 49,
                          "line": 15
                        },
                        "start": {
                          "column": 44,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      201,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 15
                      },
                      "start": {
                        "column": 28,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        224,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 15
                        },
                        "start": {
                          "column": 51,
                          "line": 15
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        231,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 15
                        },
                        "start": {
                          "column": 58,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      224,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 51,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "range": [
                        234,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 15
                        },
                        "start": {
                          "column": 61,
                          "line": 15
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        241,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 15
                        },
                        "start": {
                          "column": 68,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      234,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 15
                      },
                      "start": {
                        "column": 61,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  199,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                }
              },
              "range": [
                181,
                248
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            }
          ],
          "declare": false,
          "kind": "using",
          "range": [
            175,
            249
          ],
          "loc": {
            "end": {
              "column": 76,
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
        171,
        251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          281,
          343
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
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
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 7,
                  "line": 19
                }
              },
              "range": [
                290,
                298
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  292,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              285,
              299
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  303,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 3,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "asyncDispose",
                "optional": false,
                "range": [
                  310,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              },
              "range": [
                303,
                322
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 3,
                  "line": 20
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
                  "column": 40,
                  "line": 20
                },
                "start": {
                  "column": 25,
                  "line": 20
                }
              },
              "range": [
                325,
                340
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    334,
                    340
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        335,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 35,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    327,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 20
                    },
                    "start": {
                      "column": 27,
                      "line": 20
                    }
                  }
                },
                "range": [
                  327,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              }
            },
            "static": false,
            "range": [
              302,
              341
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 28,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyAsyncDisposable",
        "optional": false,
        "range": [
          263,
          280
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        253,
        343
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
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
                      "name": "_",
                      "optional": false,
                      "range": [
                        386,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 25
                        }
                      }
                    },
                    "init": {
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
                              "name": "Symbol",
                              "optional": false,
                              "range": [
                                399,
                                405
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 25
                                },
                                "start": {
                                  "column": 29,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "range": [
                                406,
                                418
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 25
                                },
                                "start": {
                                  "column": 36,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              399,
                              418
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 25
                              },
                              "start": {
                                "column": 29,
                                "line": 25
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
                              419,
                              424
                            ],
                            "async": true,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                422,
                                424
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 25
                                },
                                "start": {
                                  "column": 52,
                                  "line": 25
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
                                "column": 54,
                                "line": 25
                              },
                              "start": {
                                "column": 49,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            392,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 25
                            },
                            "start": {
                              "column": 22,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        390,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      386,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "await using",
                "range": [
                  374,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              368,
              431
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          {
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
                      "name": "_",
                      "optional": false,
                      "range": [
                        453,
                        454
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
                    "init": {
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
                              "name": "Symbol",
                              "optional": false,
                              "range": [
                                466,
                                472
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 29
                                },
                                "start": {
                                  "column": 29,
                                  "line": 29
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "range": [
                                473,
                                485
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 29
                                },
                                "start": {
                                  "column": 36,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              466,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 29
                              },
                              "start": {
                                "column": 29,
                                "line": 29
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
                              486,
                              491
                            ],
                            "async": true,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                489,
                                491
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 29
                                },
                                "start": {
                                  "column": 52,
                                  "line": 29
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
                                "column": 54,
                                "line": 29
                              },
                              "start": {
                                "column": 49,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            459,
                            491
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 29
                            },
                            "start": {
                              "column": 22,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              493,
                              498
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 29
                              },
                              "start": {
                                "column": 56,
                                "line": 29
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              500,
                              501
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 29
                              },
                              "start": {
                                "column": 63,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            493,
                            501
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 29
                            },
                            "start": {
                              "column": 56,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        457,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 29
                        },
                        "start": {
                          "column": 20,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      453,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "await using",
                "range": [
                  441,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              435,
              508
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          {
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        },
                        "range": [
                          531,
                          550
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyAsyncDisposable",
                            "optional": false,
                            "range": [
                              533,
                              550
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 33
                              },
                              "start": {
                                "column": 19,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            533,
                            550
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 33
                            },
                            "start": {
                              "column": 19,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        530,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    },
                    "init": {
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
                              "name": "Symbol",
                              "optional": false,
                              "range": [
                                568,
                                574
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 34
                                },
                                "start": {
                                  "column": 13,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "range": [
                                575,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 34
                                },
                                "start": {
                                  "column": 20,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              568,
                              587
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 34
                              },
                              "start": {
                                "column": 13,
                                "line": 34
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
                              588,
                              593
                            ],
                            "async": true,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                591,
                                593
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 34
                                },
                                "start": {
                                  "column": 36,
                                  "line": 34
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
                                "column": 38,
                                "line": 34
                              },
                              "start": {
                                "column": 33,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            561,
                            593
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 34
                            },
                            "start": {
                              "column": 6,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              601,
                              606
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 35
                              },
                              "start": {
                                "column": 6,
                                "line": 35
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              608,
                              609
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 35
                              },
                              "start": {
                                "column": 13,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            601,
                            609
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 35
                            },
                            "start": {
                              "column": 6,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extra",
                            "optional": false,
                            "range": [
                              617,
                              622
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 36
                              },
                              "start": {
                                "column": 6,
                                "line": 36
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"foo\"",
                            "value": "foo",
                            "range": [
                              624,
                              629
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 36
                              },
                              "start": {
                                "column": 13,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            617,
                            629
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 36
                            },
                            "start": {
                              "column": 6,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        553,
                        636
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 37
                        },
                        "start": {
                          "column": 39,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      530,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 37
                      },
                      "start": {
                        "column": 16,
                        "line": 33
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "await using",
                "range": [
                  518,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              512,
              641
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          }
        ],
        "range": [
          364,
          643
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 19,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          360,
          361
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "params": [],
      "range": [
        345,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        645,
        655
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 42
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
