__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    532
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          10
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
          29,
          140
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                39,
                50
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
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
                50,
                110
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "directive": "inject",
                    "expression": {
                      "type": "Literal",
                      "raw": "'inject'",
                      "value": "inject",
                      "range": [
                        57,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 4
                        },
                        "start": {
                          "column": 2,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      57,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          69,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 5
                          },
                          "start": {
                            "column": 2,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        69,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 2,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      69,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 2,
                        "line": 5
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
                            86,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            90,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          86,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      80,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 2,
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            101,
                            102
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
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            105,
                            106
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
                        "range": [
                          101,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
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
                    "kind": "const",
                    "range": [
                      95,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
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
                  53,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 3
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
                  "column": 2,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "range": [
              32,
              110
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    114,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
                    }
                  }
                },
                "range": [
                  113,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 1,
                    "line": 10
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                126,
                127
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                127,
                138
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  136,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
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
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  129,
                  135
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    131,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "range": [
              113,
              138
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          17,
          18
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        11,
        140
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "FunctionExpression",
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
                          "type": "ThisExpression",
                          "range": [
                            235,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 16
                            },
                            "start": {
                              "column": 14,
                              "line": 16
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
                          "name": "method",
                          "optional": false,
                          "range": [
                            223,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 16
                            },
                            "start": {
                              "column": 2,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "range": [
                            230,
                            234
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
                          223,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
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
                        223,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 2,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      223,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 2,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  219,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 17
                  },
                  "start": {
                    "column": 29,
                    "line": 15
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    },
                    "range": [
                      212,
                      217
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        214,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    208,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                198,
                244
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              191,
              245
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 1,
                "line": 15
              }
            }
          }
        ],
        "range": [
          188,
          247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 46,
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
          151,
          154
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "method",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
              }
            },
            "range": [
              161,
              166
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            }
          },
          "range": [
            155,
            166
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 14
            },
            "start": {
              "column": 13,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            },
            "range": [
              176,
              181
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                178,
                181
              ],
              "loc": {
                "end": {
                  "column": 39,
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
            168,
            181
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 14
            },
            "start": {
              "column": 26,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 14
          },
          "start": {
            "column": 40,
            "line": 14
          }
        },
        "range": [
          182,
          187
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            184,
            187
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 14
            },
            "start": {
              "column": 42,
              "line": 14
            }
          }
        }
      },
      "range": [
        142,
        247
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            253,
            254
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "range": [
          249,
          256
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        249,
        257
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          323,
          412
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                333,
                344
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 19,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
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
                344,
                363
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          351,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 25
                          },
                          "start": {
                            "column": 2,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          356,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 25
                          },
                          "start": {
                            "column": 7,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        351,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 25
                        },
                        "start": {
                          "column": 2,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      351,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 2,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  347,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 24
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
                  "column": 2,
                  "line": 26
                },
                "start": {
                  "column": 19,
                  "line": 24
                }
              }
            },
            "range": [
              326,
              363
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 24
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    367,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 2,
                      "line": 28
                    }
                  }
                },
                "range": [
                  366,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 1,
                    "line": 28
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "range": [
                383,
                386
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                386,
                410
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        406,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 29
                        },
                        "start": {
                          "column": 35,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      399,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 29
                      },
                      "start": {
                        "column": 28,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  397,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
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
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                },
                "range": [
                  388,
                  396
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    390,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 29
                    },
                    "start": {
                      "column": 19,
                      "line": 29
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "range": [
              366,
              410
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 29
              },
              "start": {
                "column": 1,
                "line": 28
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
            "column": 8,
            "line": 23
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
          321,
          322
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        315,
        412
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          431,
          531
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                441,
                452
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
                452,
                482
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
                        "type": "Super",
                        "range": [
                          459,
                          464
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 33
                          },
                          "start": {
                            "column": 2,
                            "line": 33
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        459,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 2,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      459,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 33
                      },
                      "start": {
                        "column": 2,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          470,
                          474
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 34
                          },
                          "start": {
                            "column": 2,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          475,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 34
                          },
                          "start": {
                            "column": 7,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        470,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 34
                        },
                        "start": {
                          "column": 2,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      470,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
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
                  455,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 35
                  },
                  "start": {
                    "column": 22,
                    "line": 32
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
                  "column": 2,
                  "line": 35
                },
                "start": {
                  "column": 19,
                  "line": 32
                }
              }
            },
            "range": [
              434,
              482
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 32
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    486,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 37
                    },
                    "start": {
                      "column": 2,
                      "line": 37
                    }
                  }
                },
                "range": [
                  485,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 1,
                    "line": 37
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "range": [
                502,
                505
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 12,
                  "line": 38
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
                505,
                529
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        525,
                        526
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 38
                        },
                        "start": {
                          "column": 35,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      518,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 28,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  516,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 38
                  },
                  "start": {
                    "column": 26,
                    "line": 38
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
                    "line": 38
                  },
                  "start": {
                    "column": 17,
                    "line": 38
                  }
                },
                "range": [
                  507,
                  515
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    509,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 38
                    },
                    "start": {
                      "column": 19,
                      "line": 38
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 38
                },
                "start": {
                  "column": 15,
                  "line": 38
                }
              }
            },
            "range": [
              485,
              529
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 38
              },
              "start": {
                "column": 1,
                "line": 37
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 18,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          419,
          420
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          429,
          430
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 31
          }
        }
      },
      "range": [
        413,
        531
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 31
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
      "line": 1
    }
  },
  "hashbang": null
}
```
