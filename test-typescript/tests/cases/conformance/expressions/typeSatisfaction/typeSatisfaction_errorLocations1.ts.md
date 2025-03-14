__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1453
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
            "name": "obj1",
            "optional": false,
            "range": [
              6,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
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
                  "name": "a",
                  "optional": false,
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    18,
                    19
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                },
                "range": [
                  15,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              13,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "range": [
            6,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "range": [
              30,
              33
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                56,
                58
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  },
                  "range": [
                    38,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            42,
                            43
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 3
                            },
                            "start": {
                              "column": 18,
                              "line": 3
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
                              "column": 25,
                              "line": 3
                            },
                            "start": {
                              "column": 19,
                              "line": 3
                            }
                          },
                          "range": [
                            43,
                            49
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                45,
                                49
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 3
                                },
                                "start": {
                                  "column": 21,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              45,
                              49
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 21,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          42,
                          49
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      40,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  37,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              36,
              58
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            30,
            58
          ],
          "loc": {
            "end": {
              "column": 34,
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
        24,
        59
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                64,
                66
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                77,
                84
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
              64,
              84
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "range": [
            60,
            63
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          60,
          85
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        60,
        86
      ],
      "loc": {
        "end": {
          "column": 26,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
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
                      96,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    93,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                91,
                99
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                110,
                117
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              91,
              117
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "range": [
            87,
            90
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          87,
          118
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        87,
        119
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "range": [
                124,
                128
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                139,
                146
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              124,
              146
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "range": [
            120,
            123
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          120,
          147
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        120,
        148
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          161,
          197
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                165,
                176
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
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
                176,
                195
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  193,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
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
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    },
                    "range": [
                      178,
                      191
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
                              182,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
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
                                "column": 26,
                                "line": 9
                              },
                              "start": {
                                "column": 20,
                                "line": 9
                              }
                            },
                            "range": [
                              183,
                              189
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  185,
                                  189
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                185,
                                189
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            182,
                            189
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 9
                            },
                            "start": {
                              "column": 19,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        180,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    177,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "range": [
              165,
              195
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "range": [
          156,
          160
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        150,
        197
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                207,
                209
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                220,
                227
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
              207,
              227
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "range": [
            202,
            206
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "range": [
          198,
          228
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        198,
        229
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      241,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
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
                      244,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    241,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                239,
                247
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                258,
                265
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            },
            "range": [
              239,
              265
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "range": [
            234,
            238
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          230,
          266
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        230,
        267
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "range": [
                277,
                281
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                292,
                299
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "range": [
              277,
              299
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "range": [
            272,
            276
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
        },
        "range": [
          268,
          300
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        268,
        301
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            374,
                            375
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 16
                            },
                            "start": {
                              "column": 6,
                              "line": 16
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            377,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 16
                            },
                            "start": {
                              "column": 9,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          374,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 16
                          },
                          "start": {
                            "column": 6,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      372,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      394,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    372,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                370,
                402
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            },
            "range": [
              370,
              403
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
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
                  "name": "o",
                  "optional": false,
                  "range": [
                    412,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          418,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            421,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 17
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
                              429,
                              434
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 17
                              },
                              "start": {
                                "column": 25,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            429,
                            434
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 17
                            },
                            "start": {
                              "column": 25,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          421,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 17
                          },
                          "start": {
                            "column": 17,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        418,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    416,
                    436
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
                "range": [
                  412,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              406,
              437
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 17
              },
              "start": {
                "column": 2,
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
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "range": [
                      442,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 18
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      454,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 16,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    442,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  440,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                440,
                462
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            },
            "range": [
              440,
              463
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "range": [
          366,
          465
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 63,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          312,
          315
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 15
              },
              "start": {
                "column": 39,
                "line": 15
              }
            },
            "range": [
              342,
              364
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      348,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 15
                      },
                      "start": {
                        "column": 45,
                        "line": 15
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 49,
                        "line": 15
                      }
                    },
                    "range": [
                      352,
                      355
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          354,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 15
                          },
                          "start": {
                            "column": 51,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        354,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 15
                        },
                        "start": {
                          "column": 51,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    345,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 15
                    },
                    "start": {
                      "column": 42,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 15
                  },
                  "start": {
                    "column": 54,
                    "line": 15
                  }
                },
                "range": [
                  357,
                  364
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    360,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 15
                    },
                    "start": {
                      "column": 57,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                344,
                364
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 15
                },
                "start": {
                  "column": 41,
                  "line": 15
                }
              }
            }
          },
          "range": [
            341,
            364
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 15
            },
            "start": {
              "column": 38,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 15
          }
        },
        "range": [
          315,
          340
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
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
                        328,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 25,
                          "line": 15
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
                          "column": 32,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      },
                      "range": [
                        329,
                        335
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            331,
                            335
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 15
                            },
                            "start": {
                              "column": 28,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          331,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 28,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      328,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 23,
                    "line": 15
                  }
                }
              },
              "range": [
                326,
                339
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
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
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              316,
              339
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 15
              },
              "start": {
                "column": 13,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        303,
        465
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              },
              "range": [
                479,
                499
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      482,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      491,
                      498
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
                  }
                ],
                "range": [
                  481,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              473,
              499
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  503,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              },
              {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    509,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 21
                    },
                    "start": {
                      "column": 42,
                      "line": 21
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    523,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 21
                    },
                    "start": {
                      "column": 56,
                      "line": 21
                    }
                  }
                },
                "range": [
                  509,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 21
                  },
                  "start": {
                    "column": 42,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              502,
              531
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 21
              },
              "start": {
                "column": 35,
                "line": 21
              }
            }
          },
          "range": [
            473,
            531
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        467,
        532
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "obj2",
            "optional": false,
            "range": [
              540,
              544
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      549,
                      550
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      552,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    549,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      556,
                      557
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 22,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      559,
                      563
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 23
                      },
                      "start": {
                        "column": 25,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    556,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                547,
                565
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  582,
                  598
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      583,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 23
                      },
                      "start": {
                        "column": 49,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      591,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 23
                      },
                      "start": {
                        "column": 57,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 23
                  },
                  "start": {
                    "column": 48,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  576,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 23
                  },
                  "start": {
                    "column": 42,
                    "line": 23
                  }
                }
              },
              "range": [
                576,
                598
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 23
                },
                "start": {
                  "column": 42,
                  "line": 23
                }
              }
            },
            "range": [
              547,
              598
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 23
              }
            }
          },
          "range": [
            540,
            598
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        534,
        599
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "literal1",
            "optional": false,
            "range": [
              607,
              615
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                618,
                619
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                630,
                637
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 25
                },
                "start": {
                  "column": 29,
                  "line": 25
                }
              }
            },
            "range": [
              618,
              637
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 17,
                "line": 25
              }
            }
          },
          "range": [
            607,
            637
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        601,
        638
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "literal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              },
              "range": [
                653,
                659
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    655,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 16,
                      "line": 26
                    }
                  }
                },
                "range": [
                  655,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 16,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              645,
              659
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                662,
                663
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 26
                },
                "start": {
                  "column": 23,
                  "line": 26
                }
              }
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                674,
                680
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 26
                },
                "start": {
                  "column": 35,
                  "line": 26
                }
              }
            },
            "range": [
              662,
              680
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 26
              },
              "start": {
                "column": 23,
                "line": 26
              }
            }
          },
          "range": [
            645,
            680
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        639,
        681
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "range": [
          700,
          703
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              707,
              711
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 28,
                "line": 28
              }
            },
            "range": [
              711,
              722
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  713,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 28
                  },
                  "start": {
                    "column": 30,
                    "line": 28
                  }
                }
              },
              "range": [
                713,
                722
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 28
                },
                "start": {
                  "column": 30,
                  "line": 28
                }
              }
            }
          },
          "range": [
            704,
            722
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 28
            },
            "start": {
              "column": 21,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 28
          },
          "start": {
            "column": 40,
            "line": 28
          }
        },
        "range": [
          723,
          729
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            725,
            729
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 28
            },
            "start": {
              "column": 42,
              "line": 28
            }
          }
        }
      },
      "range": [
        683,
        730
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
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
              735,
              737
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      744,
                      746
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 29
                      },
                      "start": {
                        "column": 13,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"20\"",
                    "value": "20",
                    "range": [
                      748,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  743,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 29
                  },
                  "start": {
                    "column": 12,
                    "line": 29
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    764,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 29
                    },
                    "start": {
                      "column": 33,
                      "line": 29
                    }
                  }
                },
                "range": [
                  764,
                  772
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 29
                  },
                  "start": {
                    "column": 33,
                    "line": 29
                  }
                }
              },
              "range": [
                743,
                772
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 29
                },
                "start": {
                  "column": 12,
                  "line": 29
                }
              }
            },
            "range": [
              739,
              773
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "range": [
            731,
            734
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          731,
          774
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        731,
        775
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 29
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
            "name": "tuple2",
            "optional": false,
            "range": [
              782,
              788
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    792,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 30
                    },
                    "start": {
                      "column": 16,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"20\"",
                  "value": "20",
                  "range": [
                    796,
                    800
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                791,
                801
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 30
                },
                "start": {
                  "column": 15,
                  "line": 30
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
                  805,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 30
                  },
                  "start": {
                    "column": 29,
                    "line": 30
                  }
                }
              },
              "range": [
                805,
                810
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 30
                },
                "start": {
                  "column": 29,
                  "line": 30
                }
              }
            },
            "range": [
              791,
              810
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 30
              },
              "start": {
                "column": 15,
                "line": 30
              }
            }
          },
          "range": [
            782,
            810
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
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        776,
        811
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
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
              816,
              818
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple2",
                "optional": false,
                "range": [
                  824,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 12,
                    "line": 31
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    841,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 31
                    },
                    "start": {
                      "column": 29,
                      "line": 31
                    }
                  }
                },
                "range": [
                  841,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 31
                  }
                }
              },
              "range": [
                824,
                849
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            },
            "range": [
              820,
              850
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 8,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "range": [
            812,
            815
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          812,
          851
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        812,
        852
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "range": [
          871,
          874
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 33
          },
          "start": {
            "column": 17,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              878,
              882
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 33
              },
              "start": {
                "column": 24,
                "line": 33
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 33
              },
              "start": {
                "column": 28,
                "line": 33
              }
            },
            "range": [
              882,
              892
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  884,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 33
                  },
                  "start": {
                    "column": 30,
                    "line": 33
                  }
                }
              },
              "range": [
                884,
                892
              ],
              "loc": {
                "end": {
                  "column": 38,
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
            875,
            892
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 21,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 33
          },
          "start": {
            "column": 39,
            "line": 33
          }
        },
        "range": [
          893,
          899
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            895,
            899
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 33
            },
            "start": {
              "column": 41,
              "line": 33
            }
          }
        }
      },
      "range": [
        854,
        900
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
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
              905,
              907
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"10\"",
                    "value": "10",
                    "range": [
                      914,
                      918
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"20\"",
                    "value": "20",
                    "range": [
                      920,
                      924
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 34
                      },
                      "start": {
                        "column": 19,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  913,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      945,
                      951
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 34
                      },
                      "start": {
                        "column": 44,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    945,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 34
                    },
                    "start": {
                      "column": 44,
                      "line": 34
                    }
                  }
                },
                "range": [
                  936,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 34
                  },
                  "start": {
                    "column": 35,
                    "line": 34
                  }
                }
              },
              "range": [
                913,
                953
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            },
            "range": [
              909,
              954
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 34
              },
              "start": {
                "column": 8,
                "line": 34
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "range": [
            901,
            904
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          901,
          955
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        901,
        956
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "tuple3",
            "optional": false,
            "range": [
              963,
              969
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"10\"",
                  "value": "10",
                  "range": [
                    973,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 35
                    },
                    "start": {
                      "column": 16,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"20\"",
                  "value": "20",
                  "range": [
                    979,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 22,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                972,
                984
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 35
                },
                "start": {
                  "column": 15,
                  "line": 35
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
                  988,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 35
                  },
                  "start": {
                    "column": 31,
                    "line": 35
                  }
                }
              },
              "range": [
                988,
                993
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 35
                },
                "start": {
                  "column": 31,
                  "line": 35
                }
              }
            },
            "range": [
              972,
              993
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            }
          },
          "range": [
            963,
            993
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        957,
        994
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
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
              999,
              1001
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple3",
                "optional": false,
                "range": [
                  1007,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 36
                  },
                  "start": {
                    "column": 12,
                    "line": 36
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      1033,
                      1039
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 36
                      },
                      "start": {
                        "column": 38,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1033,
                    1041
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 36
                    },
                    "start": {
                      "column": 38,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1024,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 36
                  },
                  "start": {
                    "column": 29,
                    "line": 36
                  }
                }
              },
              "range": [
                1007,
                1041
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 36
                }
              }
            },
            "range": [
              1003,
              1042
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 36
              },
              "start": {
                "column": 8,
                "line": 36
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "range": [
            995,
            998
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "optional": false,
        "range": [
          995,
          1043
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        995,
        1044
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  1080,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 39
                  },
                  "start": {
                    "column": 9,
                    "line": 39
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  1096,
                  1103
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 39
                  },
                  "start": {
                    "column": 25,
                    "line": 39
                  }
                }
              },
              "range": [
                1080,
                1103
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              }
            },
            "range": [
              1073,
              1104
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          }
        ],
        "range": [
          1069,
          1106
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 23,
            "line": 38
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "range": [
          1055,
          1058
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 38
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 38
          },
          "start": {
            "column": 14,
            "line": 38
          }
        },
        "range": [
          1060,
          1068
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1062,
            1068
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 38
            },
            "start": {
              "column": 16,
              "line": 38
            }
          }
        }
      },
      "range": [
        1046,
        1106
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 38
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
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  1142,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 43
                  },
                  "start": {
                    "column": 9,
                    "line": 43
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1158,
                  1164
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 43
                  },
                  "start": {
                    "column": 25,
                    "line": 43
                  }
                }
              },
              "range": [
                1142,
                1164
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "range": [
              1135,
              1165
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          }
        ],
        "range": [
          1131,
          1167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 23,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "range": [
          1117,
          1120
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 42
          },
          "start": {
            "column": 14,
            "line": 42
          }
        },
        "range": [
          1122,
          1130
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1124,
            1130
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 42
            },
            "start": {
              "column": 16,
              "line": 42
            }
          }
        }
      },
      "range": [
        1108,
        1167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1190,
                1192
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 46
                },
                "start": {
                  "column": 21,
                  "line": 46
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                1204,
                1211
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 46
                },
                "start": {
                  "column": 35,
                  "line": 46
                }
              }
            },
            "range": [
              1189,
              1211
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 46
              },
              "start": {
                "column": 20,
                "line": 46
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 46
              },
              "start": {
                "column": 3,
                "line": 46
              }
            },
            "range": [
              1172,
              1185
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
                      1176,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 46
                      },
                      "start": {
                        "column": 7,
                        "line": 46
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
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    },
                    "range": [
                      1177,
                      1183
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1179,
                          1183
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 46
                          },
                          "start": {
                            "column": 10,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1179,
                        1183
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 46
                        },
                        "start": {
                          "column": 10,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1176,
                    1183
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 46
                    },
                    "start": {
                      "column": 7,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                1174,
                1185
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 46
                },
                "start": {
                  "column": 5,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1170,
            1211
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 46
            },
            "start": {
              "column": 1,
              "line": 46
            }
          }
        },
        "optional": false,
        "range": [
          1169,
          1214
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1169,
        1215
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1239,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 47
                      },
                      "start": {
                        "column": 23,
                        "line": 47
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
                      1242,
                      1243
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 47
                      },
                      "start": {
                        "column": 26,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1239,
                    1243
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 47
                    },
                    "start": {
                      "column": 23,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1237,
                1245
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 47
                },
                "start": {
                  "column": 21,
                  "line": 47
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                1257,
                1264
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 47
                },
                "start": {
                  "column": 41,
                  "line": 47
                }
              }
            },
            "range": [
              1236,
              1264
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 47
              },
              "start": {
                "column": 20,
                "line": 47
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 47
              },
              "start": {
                "column": 3,
                "line": 47
              }
            },
            "range": [
              1219,
              1232
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
                      1223,
                      1224
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 47
                      },
                      "start": {
                        "column": 7,
                        "line": 47
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
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    },
                    "range": [
                      1224,
                      1230
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1226,
                          1230
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
                        1226,
                        1230
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
                    }
                  },
                  "range": [
                    1223,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 7,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1221,
                1232
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 47
                },
                "start": {
                  "column": 5,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1217,
            1264
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 47
            },
            "start": {
              "column": 1,
              "line": 47
            }
          }
        },
        "optional": false,
        "range": [
          1216,
          1267
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1216,
        1268
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "range": [
                1289,
                1293
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 48
                },
                "start": {
                  "column": 20,
                  "line": 48
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                1304,
                1311
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 48
                },
                "start": {
                  "column": 35,
                  "line": 48
                }
              }
            },
            "range": [
              1289,
              1311
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 48
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 48
              },
              "start": {
                "column": 3,
                "line": 48
              }
            },
            "range": [
              1272,
              1285
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
                      1276,
                      1277
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 48
                      },
                      "start": {
                        "column": 7,
                        "line": 48
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
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    },
                    "range": [
                      1277,
                      1283
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1279,
                          1283
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 48
                          },
                          "start": {
                            "column": 10,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1279,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 48
                        },
                        "start": {
                          "column": 10,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    1276,
                    1283
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 7,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                1274,
                1285
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1270,
            1311
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 48
            },
            "start": {
              "column": 1,
              "line": 48
            }
          }
        },
        "optional": false,
        "range": [
          1269,
          1314
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        1269,
        1315
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1339,
                  1341
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 50
                  },
                  "start": {
                    "column": 22,
                    "line": 50
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  1353,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 50
                  },
                  "start": {
                    "column": 36,
                    "line": 50
                  }
                }
              },
              "range": [
                1338,
                1360
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 50
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                1372,
                1379
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 50
                },
                "start": {
                  "column": 55,
                  "line": 50
                }
              }
            },
            "range": [
              1337,
              1379
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 50
              },
              "start": {
                "column": 20,
                "line": 50
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 50
              },
              "start": {
                "column": 3,
                "line": 50
              }
            },
            "range": [
              1320,
              1333
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
                      1324,
                      1325
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 50
                      },
                      "start": {
                        "column": 7,
                        "line": 50
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
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    },
                    "range": [
                      1325,
                      1331
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1327,
                          1331
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 50
                          },
                          "start": {
                            "column": 10,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1327,
                        1331
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 50
                        },
                        "start": {
                          "column": 10,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1324,
                    1331
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 50
                    },
                    "start": {
                      "column": 7,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1322,
                1333
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 50
                },
                "start": {
                  "column": 5,
                  "line": 50
                }
              }
            }
          },
          "range": [
            1318,
            1379
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 50
            },
            "start": {
              "column": 1,
              "line": 50
            }
          }
        },
        "optional": false,
        "range": [
          1317,
          1382
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1317,
        1383
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  1407,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 51
                  },
                  "start": {
                    "column": 23,
                    "line": 51
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  1421,
                  1428
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 51
                  },
                  "start": {
                    "column": 37,
                    "line": 51
                  }
                }
              },
              "range": [
                1406,
                1428
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 51
                },
                "start": {
                  "column": 22,
                  "line": 51
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                1441,
                1448
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 51
                },
                "start": {
                  "column": 57,
                  "line": 51
                }
              }
            },
            "range": [
              1404,
              1448
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 51
              },
              "start": {
                "column": 20,
                "line": 51
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 16,
                "line": 51
              },
              "start": {
                "column": 3,
                "line": 51
              }
            },
            "range": [
              1387,
              1400
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
                      1391,
                      1392
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 51
                      },
                      "start": {
                        "column": 7,
                        "line": 51
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
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    },
                    "range": [
                      1392,
                      1398
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1394,
                          1398
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 51
                          },
                          "start": {
                            "column": 10,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1394,
                        1398
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 51
                        },
                        "start": {
                          "column": 10,
                          "line": 51
                        }
                      }
                    }
                  },
                  "range": [
                    1391,
                    1398
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 51
                    },
                    "start": {
                      "column": 7,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1389,
                1400
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 51
                },
                "start": {
                  "column": 5,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1385,
            1448
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 51
            },
            "start": {
              "column": 1,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          1384,
          1451
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1384,
        1452
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 52
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
