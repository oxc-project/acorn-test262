__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    107,
    645
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          131,
          242
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                137,
                138
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                138,
                240
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 6
                              },
                              "start": {
                                "column": 13,
                                "line": 6
                              }
                            },
                            "range": [
                              156,
                              159
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  158,
                                  159
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                158,
                                159
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 6
                                },
                                "start": {
                                  "column": 15,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            155,
                            159
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          155,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      151,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            173,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                177,
                                178
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "raw": "'getDate'",
                              "value": "getDate",
                              "range": [
                                179,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 18,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              177,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            177,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          173,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      169,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          218,
                          219
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
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              222,
                              223
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getDate",
                            "optional": false,
                            "range": [
                              224,
                              231
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            222,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          222,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        218,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      211,
                      234
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
                  }
                ],
                "range": [
                  141,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 5
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
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              }
            },
            "range": [
              137,
              240
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
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
            "column": 24,
            "line": 4
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
          113,
          114
        ],
        "loc": {
          "end": {
            "column": 7,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        },
        "range": [
          114,
          130
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                125,
                129
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
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
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              115,
              129
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        107,
        242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "r",
            "optional": false,
            "range": [
              248,
              249
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    257,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    258,
                    264
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          259,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        259,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "range": [
                  253,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  268,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                252,
                269
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              252,
              271
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            248,
            271
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        244,
        272
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          302,
          317
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                308,
                311
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
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
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              },
              "range": [
                311,
                314
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    313,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              308,
              315
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
            "column": 28,
            "line": 14
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
          284,
          285
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 11,
            "line": 14
          }
        },
        "range": [
          285,
          301
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  296,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 22,
                    "line": 14
                  }
                }
              },
              "range": [
                296,
                300
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
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
                286,
                287
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              286,
              300
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        274,
        317
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                323,
                332
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    326,
                    332
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          327,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 17
                          },
                          "start": {
                            "column": 9,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        327,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    325,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "range": [
                  325,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              322,
              332
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            322,
            332
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        318,
        333
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "r2",
            "optional": false,
            "range": [
              338,
              340
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    343,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    345,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  }
                },
                "range": [
                  343,
                  348
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "range": [
                  349,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                }
              },
              "range": [
                343,
                356
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              343,
              358
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            338,
            358
          ],
          "loc": {
            "end": {
              "column": 24,
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
        334,
        359
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "r2b",
            "optional": false,
            "range": [
              364,
              367
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    370,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    372,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  370,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'getDate'",
                "value": "getDate",
                "range": [
                  376,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 19
                  },
                  "start": {
                    "column": 16,
                    "line": 19
                  }
                }
              },
              "range": [
                370,
                386
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 19
                },
                "start": {
                  "column": 10,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              370,
              388
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            364,
            388
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        360,
        389
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                396,
                428
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      },
                      "range": [
                        422,
                        425
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            424,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 22
                            },
                            "start": {
                              "column": 24,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          424,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 22
                          },
                          "start": {
                            "column": 24,
                            "line": 22
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 4,
                          "line": 22
                        }
                      },
                      "range": [
                        404,
                        420
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                415,
                                419
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 22
                                },
                                "start": {
                                  "column": 15,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              415,
                              419
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 22
                              },
                              "start": {
                                "column": 15,
                                "line": 22
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
                              405,
                              406
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 22
                              },
                              "start": {
                                "column": 5,
                                "line": 22
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            405,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 22
                            },
                            "start": {
                              "column": 5,
                              "line": 22
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      404,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  398,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              395,
              428
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            395,
            428
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        391,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
            "name": "r3",
            "optional": false,
            "range": [
              433,
              435
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    438,
                    439
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    439,
                    445
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          440,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 24
                          },
                          "start": {
                            "column": 11,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        440,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 24
                    },
                    "start": {
                      "column": 10,
                      "line": 24
                    }
                  }
                },
                "range": [
                  438,
                  447
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "range": [
                  448,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 19,
                    "line": 24
                  }
                }
              },
              "range": [
                438,
                455
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              438,
              457
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            433,
            457
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        429,
        458
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r3b",
            "optional": false,
            "range": [
              463,
              466
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    469,
                    470
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "range": [
                  469,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'getDate'",
                "value": "getDate",
                "range": [
                  473,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                469,
                483
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              469,
              485
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 10,
                "line": 25
              }
            }
          },
          "range": [
            463,
            485
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        459,
        486
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "b",
            "optional": false,
            "range": [
              492,
              493
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    502,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                547,
                                548
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 29
                                },
                                "start": {
                                  "column": 12,
                                  "line": 29
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    551,
                                    552
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
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "raw": "'getDate'",
                                  "value": "getDate",
                                  "range": [
                                    553,
                                    562
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  551,
                                  563
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 29
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                551,
                                565
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 29
                                },
                                "start": {
                                  "column": 16,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              547,
                              565
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 29
                              },
                              "start": {
                                "column": 12,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          543,
                          566
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              592,
                              593
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 30
                              },
                              "start": {
                                "column": 15,
                                "line": 30
                              }
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  596,
                                  597
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 30
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getDate",
                                "optional": false,
                                "range": [
                                  598,
                                  605
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                596,
                                605
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 30
                                },
                                "start": {
                                  "column": 19,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              596,
                              607
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 30
                              },
                              "start": {
                                "column": 19,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            592,
                            607
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 30
                            },
                            "start": {
                              "column": 15,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          585,
                          608
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      533,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 31
                      },
                      "start": {
                        "column": 35,
                        "line": 28
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 28
                          },
                          "start": {
                            "column": 27,
                            "line": 28
                          }
                        },
                        "range": [
                          525,
                          528
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              527,
                              528
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 28
                              },
                              "start": {
                                "column": 29,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            527,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 28
                            },
                            "start": {
                              "column": 29,
                              "line": 28
                            }
                          }
                        }
                      },
                      "range": [
                        524,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 28
                        },
                        "start": {
                          "column": 26,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    },
                    "range": [
                      507,
                      523
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "range": [
                              518,
                              522
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 28
                              },
                              "start": {
                                "column": 20,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            518,
                            522
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 28
                            },
                            "start": {
                              "column": 20,
                              "line": 28
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
                            508,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 28
                            },
                            "start": {
                              "column": 10,
                              "line": 28
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          508,
                          522
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 28
                          },
                          "start": {
                            "column": 10,
                            "line": 28
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    507,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 31
                    },
                    "start": {
                      "column": 9,
                      "line": 28
                    }
                  }
                },
                "range": [
                  502,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              496,
              616
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            492,
            616
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        488,
        616
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "r4",
            "optional": false,
            "range": [
              622,
              624
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    637,
                    641
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
                },
                "range": [
                  633,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
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
                "name": "b",
                "optional": false,
                "range": [
                  627,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 34
                  },
                  "start": {
                    "column": 9,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  629,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "range": [
                627,
                632
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              627,
              644
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          "range": [
            622,
            644
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        618,
        645
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 27,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
