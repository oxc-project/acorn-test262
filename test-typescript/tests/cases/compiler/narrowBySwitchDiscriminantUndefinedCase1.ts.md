__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    666
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          69,
          98
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "range": [
                73,
                85
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                86,
                95
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    88,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "range": [
                  88,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              73,
              96
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "column": 12,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          67,
          68
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        57,
        98
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
                        "name": "optionalProp",
                        "optional": false,
                        "range": [
                          134,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
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
                        "name": "optionalProp",
                        "optional": false,
                        "range": [
                          134,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        134,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    132,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    151,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                "range": [
                  132,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              126,
              155
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        216,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      209,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 6,
                        "line": 12
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    192,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  187,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        258,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      251,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 6,
                        "line": 14
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    236,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  231,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "range": [
                            304,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "range": [
                          286,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 16
                          },
                          "start": {
                            "column": 6,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        286,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 6,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      286,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 16
                      },
                      "start": {
                        "column": 6,
                        "line": 16
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  271,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "range": [
                167,
                179
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              159,
              322
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          122,
          324
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "range": [
          109,
          113
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
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
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            },
            "range": [
              117,
              120
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            }
          },
          "range": [
            114,
            120
          ],
          "loc": {
            "end": {
              "column": 20,
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
        100,
        324
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalProp",
                  "optional": false,
                  "range": [
                    353,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            369,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "range": [
                              380,
                              385
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 21
                              },
                              "start": {
                                "column": 35,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            380,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 21
                            },
                            "start": {
                              "column": 35,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          369,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 21
                          },
                          "start": {
                            "column": 24,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      368,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "range": [
                          387,
                          391
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
                        "name": "random",
                        "optional": false,
                        "range": [
                          392,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 21
                          },
                          "start": {
                            "column": 47,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        387,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 21
                        },
                        "start": {
                          "column": 42,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      387,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    368,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 21
                    },
                    "start": {
                      "column": 23,
                      "line": 21
                    }
                  }
                },
                "range": [
                  353,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              347,
              402
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        463,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      456,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 6,
                        "line": 25
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    439,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  434,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        505,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 27
                        },
                        "start": {
                          "column": 13,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      498,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 27
                      },
                      "start": {
                        "column": 6,
                        "line": 27
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    483,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  478,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optionalProp",
                          "optional": false,
                          "range": [
                            551,
                            563
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 29
                            },
                            "start": {
                              "column": 24,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUnreachable",
                        "optional": false,
                        "range": [
                          533,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 29
                          },
                          "start": {
                            "column": 6,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        533,
                        564
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 29
                        },
                        "start": {
                          "column": 6,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      533,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 29
                      },
                      "start": {
                        "column": 6,
                        "line": 29
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  518,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "optionalProp",
              "optional": false,
              "range": [
                414,
                426
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 10,
                  "line": 23
                }
              }
            },
            "range": [
              406,
              569
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "range": [
          343,
          571
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 17,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "range": [
          335,
          340
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [],
      "range": [
        326,
        571
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 20
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
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Unreachable path taken\"",
                  "value": "Unreachable path taken",
                  "range": [
                    637,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 34
                    },
                    "start": {
                      "column": 18,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  631,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "range": [
                627,
                662
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              621,
              663
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          }
        ],
        "range": [
          617,
          665
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 44,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertUnreachable",
        "optional": false,
        "range": [
          582,
          599
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 33
              },
              "start": {
                "column": 28,
                "line": 33
              }
            },
            "range": [
              601,
              608
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                603,
                608
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 33
                },
                "start": {
                  "column": 30,
                  "line": 33
                }
              }
            }
          },
          "range": [
            600,
            608
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 33
            },
            "start": {
              "column": 27,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 33
          },
          "start": {
            "column": 36,
            "line": 33
          }
        },
        "range": [
          609,
          616
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            611,
            616
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 33
            },
            "start": {
              "column": 38,
              "line": 33
            }
          }
        }
      },
      "range": [
        573,
        665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
