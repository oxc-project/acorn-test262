__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1033
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPromise",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            27,
            30
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              },
              "range": [
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "range": [
            20,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          20,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
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
            "out": false,
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
          }
        ]
      },
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                53,
                69
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    62,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                },
                "range": [
                  55,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              44,
              69
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            44,
            69
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        32,
        70
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                84,
                101
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    93,
                    101
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        94,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    86,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  86,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              83,
              101
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            83,
            101
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        71,
        102
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                117,
                136
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    128,
                    136
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        129,
                        135
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
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "range": [
                    119,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  119,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              115,
              136
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            115,
            136
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        103,
        137
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          159,
          162
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "range": [
          154,
          156
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "params": [],
      "range": [
        139,
        162
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          198,
          201
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 7
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
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          178,
          180
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        },
        "range": [
          182,
          197
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              191,
              197
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  192,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 28,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              184,
              191
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          },
          "range": [
            184,
            197
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 21,
              "line": 7
            }
          }
        }
      },
      "range": [
        163,
        201
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          239,
          242
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 8
          },
          "start": {
            "column": 37,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          217,
          219
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 8
          }
        },
        "range": [
          221,
          238
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              232,
              238
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  233,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              }
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
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "range": [
              223,
              232
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          },
          "range": [
            223,
            238
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          }
        }
      },
      "range": [
        202,
        242
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "f4",
            "optional": false,
            "range": [
              248,
              250
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                270,
                273
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              253,
              273
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            248,
            273
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        244,
        273
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "f5",
            "optional": false,
            "range": [
              278,
              280
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                315,
                318
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 41,
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
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              },
              "range": [
                299,
                314
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    308,
                    314
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        309,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 35,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    301,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 27,
                      "line": 11
                    }
                  }
                },
                "range": [
                  301,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              283,
              318
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            278,
            318
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        274,
        318
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "f6",
            "optional": false,
            "range": [
              323,
              325
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                362,
                365
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 12
                },
                "start": {
                  "column": 43,
                  "line": 12
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
                  "column": 42,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              },
              "range": [
                344,
                361
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    355,
                    361
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        356,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 12
                        },
                        "start": {
                          "column": 37,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 12
                    },
                    "start": {
                      "column": 36,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "range": [
                    346,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                "range": [
                  346,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              328,
              365
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            323,
            365
          ],
          "loc": {
            "end": {
              "column": 46,
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
      "kind": "let",
      "range": [
        319,
        365
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "f7",
            "optional": false,
            "range": [
              371,
              373
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                388,
                391
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
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              376,
              391
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            371,
            391
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        367,
        392
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 14
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
            "name": "f8",
            "optional": false,
            "range": [
              397,
              399
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                429,
                432
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 36,
                  "line": 15
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              },
              "range": [
                410,
                425
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    419,
                    425
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        420,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    412,
                    419
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
                  412,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              402,
              432
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            397,
            432
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        393,
        433
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 15
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
            "name": "f9",
            "optional": false,
            "range": [
              438,
              440
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                472,
                475
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 16
                },
                "start": {
                  "column": 38,
                  "line": 16
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              },
              "range": [
                451,
                468
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    462,
                    468
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        463,
                        467
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "range": [
                    453,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 16
                    },
                    "start": {
                      "column": 19,
                      "line": 16
                    }
                  }
                },
                "range": [
                  453,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              443,
              475
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            438,
            475
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        434,
        476
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 16
        },
        "start": {
          "column": 0,
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
            "name": "f10",
            "optional": false,
            "range": [
              481,
              484
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                499,
                500
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              487,
              500
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          },
          "range": [
            481,
            500
          ],
          "loc": {
            "end": {
              "column": 23,
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
      "kind": "let",
      "range": [
        477,
        501
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "f11",
            "optional": false,
            "range": [
              506,
              509
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "range": [
                524,
                526
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 18
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              512,
              526
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 10,
                "line": 18
              }
            }
          },
          "range": [
            506,
            526
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
      "kind": "let",
      "range": [
        502,
        527
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
            "name": "f12",
            "optional": false,
            "range": [
              532,
              535
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
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "range": [
                567,
                569
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 39,
                  "line": 19
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
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              },
              "range": [
                546,
                563
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    555,
                    563
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        556,
                        562
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 28,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 27,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    548,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "range": [
                  548,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              538,
              569
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            532,
            569
          ],
          "loc": {
            "end": {
              "column": 41,
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
      "kind": "let",
      "range": [
        528,
        570
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "f13",
            "optional": false,
            "range": [
              575,
              578
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
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                612,
                613
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 41,
                  "line": 20
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
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              },
              "range": [
                589,
                608
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    600,
                    608
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        601,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 30,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "range": [
                    591,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  591,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              581,
              613
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          },
          "range": [
            575,
            613
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        571,
        614
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              620,
              621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  "name": "m1",
                  "optional": false,
                  "range": [
                    633,
                    635
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
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
                    635,
                    641
                  ],
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      638,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
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
                      "column": 15,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  627,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 1,
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
                  "name": "m2",
                  "optional": false,
                  "range": [
                    650,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 7,
                      "line": 24
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
                    652,
                    673
                  ],
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      670,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 24
                      },
                      "start": {
                        "column": 27,
                        "line": 24
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
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    },
                    "range": [
                      654,
                      669
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          663,
                          669
                        ],
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              664,
                              668
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 24
                              },
                              "start": {
                                "column": 21,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          656,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        656,
                        669
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  644,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 1,
                    "line": 24
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "range": [
                    682,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
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
                    684,
                    707
                  ],
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      704,
                      707
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 25
                      },
                      "start": {
                        "column": 29,
                        "line": 25
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
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    },
                    "range": [
                      686,
                      703
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          697,
                          703
                        ],
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              698,
                              702
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 25
                              },
                              "start": {
                                "column": 23,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 25
                          },
                          "start": {
                            "column": 22,
                            "line": 25
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyPromise",
                        "optional": false,
                        "range": [
                          688,
                          697
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
                        688,
                        703
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  676,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 1,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              624,
              709
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            620,
            709
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        616,
        710
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          720,
          904
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "range": [
                729,
                731
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 7,
                  "line": 29
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
                731,
                737
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  734,
                  737
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            "range": [
              723,
              737
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 29
              },
              "start": {
                "column": 1,
                "line": 29
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
              "name": "m2",
              "optional": false,
              "range": [
                745,
                747
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 7,
                  "line": 30
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
                747,
                768
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  765,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 27,
                    "line": 30
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
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                },
                "range": [
                  749,
                  764
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      758,
                      764
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          759,
                          763
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 30
                          },
                          "start": {
                            "column": 21,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 20,
                        "line": 30
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      751,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 13,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    751,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 30
                    },
                    "start": {
                      "column": 13,
                      "line": 30
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 30,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "range": [
              739,
              768
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 30
              },
              "start": {
                "column": 1,
                "line": 30
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
              "name": "m3",
              "optional": false,
              "range": [
                776,
                778
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 7,
                  "line": 31
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
                778,
                801
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  798,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 31
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
                    "column": 28,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                },
                "range": [
                  780,
                  797
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      791,
                      797
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          792,
                          796
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 31
                          },
                          "start": {
                            "column": 23,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 31
                      },
                      "start": {
                        "column": 22,
                        "line": 31
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "range": [
                      782,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    782,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              770,
              801
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 1,
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
              "decorators": [],
              "name": "m4",
              "optional": false,
              "range": [
                816,
                818
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
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
                818,
                824
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  821,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 32
                  },
                  "start": {
                    "column": 19,
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
                  "column": 22,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              }
            },
            "range": [
              803,
              824
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 32
              },
              "start": {
                "column": 1,
                "line": 32
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
              "name": "m5",
              "optional": false,
              "range": [
                839,
                841
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 14,
                  "line": 33
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
                841,
                862
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  859,
                  862
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 33
                  },
                  "start": {
                    "column": 18,
                    "line": 33
                  }
                },
                "range": [
                  843,
                  858
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      852,
                      858
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          853,
                          857
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 33
                          },
                          "start": {
                            "column": 28,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 33
                      },
                      "start": {
                        "column": 27,
                        "line": 33
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      845,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 33
                      },
                      "start": {
                        "column": 20,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    845,
                    858
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 33
                    },
                    "start": {
                      "column": 20,
                      "line": 33
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 37,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              }
            },
            "range": [
              826,
              862
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 33
              },
              "start": {
                "column": 1,
                "line": 33
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
              "name": "m6",
              "optional": false,
              "range": [
                877,
                879
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 14,
                  "line": 34
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
                879,
                902
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  899,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 34
                  },
                  "start": {
                    "column": 18,
                    "line": 34
                  }
                },
                "range": [
                  881,
                  898
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      892,
                      898
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          893,
                          897
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 34
                          },
                          "start": {
                            "column": 30,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 29,
                        "line": 34
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "range": [
                      883,
                      892
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 34
                      },
                      "start": {
                        "column": 20,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    883,
                    898
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 34
                    },
                    "start": {
                      "column": 20,
                      "line": 34
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 34
                },
                "start": {
                  "column": 16,
                  "line": 34
                }
              }
            },
            "range": [
              864,
              902
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 34
              },
              "start": {
                "column": 1,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 8,
            "line": 28
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
          718,
          719
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        712,
        904
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              918,
              948
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  945,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 38
                  },
                  "start": {
                    "column": 28,
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
                "name": "f1",
                "optional": false,
                "range": [
                  940,
                  942
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 38
                  },
                  "start": {
                    "column": 23,
                    "line": 38
                  }
                }
              },
              "params": [],
              "range": [
                925,
                948
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 31,
                "line": 38
              },
              "start": {
                "column": 1,
                "line": 38
              }
            }
          }
        ],
        "range": [
          915,
          950
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          913,
          914
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "kind": "module",
      "range": [
        906,
        950
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
            "type": "LabeledStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1002,
                        1003
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 43
                        },
                        "start": {
                          "column": 14,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      996,
                      1003
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    996,
                    1004
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "block",
                    "optional": false,
                    "range": [
                      1019,
                      1024
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 14,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1013,
                    1025
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                986,
                1031
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "block",
              "optional": false,
              "range": [
                979,
                984
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              979,
              1031
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          973,
          1033
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 21,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "range": [
          967,
          970
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 41
          },
          "start": {
            "column": 15,
            "line": 41
          }
        }
      },
      "params": [],
      "range": [
        952,
        1033
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
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
      "column": 1,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
