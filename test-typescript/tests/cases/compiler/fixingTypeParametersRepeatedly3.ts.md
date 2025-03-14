__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    448
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          15,
          32
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseProp",
              "optional": false,
              "range": [
                21,
                29
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "range": [
              21,
              30
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        32
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          64,
          88
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toBase",
              "optional": false,
              "range": [
                70,
                76
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                79,
                85
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    81,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  81,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              70,
              86
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 31,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              59,
              63
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          },
          "range": [
            59,
            63
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 26,
              "line": 4
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          43,
          50
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
      "range": [
        33,
        88
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "name": "derived",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              },
              "range": [
                101,
                110
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    103,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  103,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              94,
              110
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            94,
            110
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        90,
        111
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
        "name": "foo",
        "optional": false,
        "range": [
          130,
          133
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
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
                "column": 28,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            },
            "range": [
              138,
              141
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            }
          },
          "range": [
            137,
            141
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 10
            },
            "start": {
              "column": 24,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 34,
                "line": 10
              }
            },
            "range": [
              147,
              160
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 41,
                        "line": 10
                      },
                      "start": {
                        "column": 38,
                        "line": 10
                      }
                    },
                    "range": [
                      151,
                      154
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          153,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 10
                          },
                          "start": {
                            "column": 40,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        153,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 10
                        },
                        "start": {
                          "column": 40,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    150,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 37,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                },
                "range": [
                  156,
                  160
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 10
                      },
                      "start": {
                        "column": 46,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    159,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 46,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                149,
                160
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 36,
                  "line": 10
                }
              }
            }
          },
          "range": [
            143,
            160
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 10
            },
            "start": {
              "column": 30,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 10
          },
          "start": {
            "column": 48,
            "line": 10
          }
        },
        "range": [
          161,
          164
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              163,
              164
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 50,
                "line": 10
              }
            }
          },
          "range": [
            163,
            164
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 10
            },
            "start": {
              "column": 50,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          133,
          136
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
                134,
                135
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              134,
              135
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        113,
        165
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "result",
            "optional": false,
            "range": [
              170,
              176
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "derived",
                "optional": false,
                "range": [
                  183,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        197,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toBase",
                      "optional": false,
                      "range": [
                        199,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 33,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      197,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    197,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 31,
                      "line": 11
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
                    "name": "d",
                    "optional": false,
                    "range": [
                      192,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  192,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 26,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                179,
                182
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              179,
              208
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "range": [
            170,
            208
          ],
          "loc": {
            "end": {
              "column": 42,
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
      "kind": "var",
      "range": [
        166,
        209
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "bar",
        "optional": false,
        "range": [
          315,
          318
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
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
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 25,
                "line": 15
              }
            },
            "range": [
              323,
              326
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  325,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              },
              "range": [
                325,
                326
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 27,
                  "line": 15
                }
              }
            }
          },
          "range": [
            322,
            326
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 15
            },
            "start": {
              "column": 24,
              "line": 15
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 15
              },
              "start": {
                "column": 34,
                "line": 15
              }
            },
            "range": [
              332,
              345
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 38,
                        "line": 15
                      }
                    },
                    "range": [
                      336,
                      339
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          338,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 15
                          },
                          "start": {
                            "column": 40,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        338,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 15
                        },
                        "start": {
                          "column": 40,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    335,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 37,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 15
                  },
                  "start": {
                    "column": 43,
                    "line": 15
                  }
                },
                "range": [
                  341,
                  345
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      344,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 15
                      },
                      "start": {
                        "column": 46,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    344,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 15
                    },
                    "start": {
                      "column": 46,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                334,
                345
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 15
                },
                "start": {
                  "column": 36,
                  "line": 15
                }
              }
            }
          },
          "range": [
            328,
            345
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 15
            },
            "start": {
              "column": 30,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 15
          },
          "start": {
            "column": 48,
            "line": 15
          }
        },
        "range": [
          346,
          349
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              348,
              349
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 15
              },
              "start": {
                "column": 50,
                "line": 15
              }
            }
          },
          "range": [
            348,
            349
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 15
            },
            "start": {
              "column": 50,
              "line": 15
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 20,
            "line": 15
          }
        },
        "range": [
          318,
          321
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
                319,
                320
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 21,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              319,
              320
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 21,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        298,
        350
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "bar",
        "optional": false,
        "range": [
          368,
          371
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
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
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 25,
                "line": 16
              }
            },
            "range": [
              376,
              379
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  378,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "range": [
                378,
                379
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            }
          },
          "range": [
            375,
            379
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 16
            },
            "start": {
              "column": 24,
              "line": 16
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 16
              },
              "start": {
                "column": 34,
                "line": 16
              }
            },
            "range": [
              385,
              398
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 41,
                        "line": 16
                      },
                      "start": {
                        "column": 38,
                        "line": 16
                      }
                    },
                    "range": [
                      389,
                      392
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          391,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 16
                          },
                          "start": {
                            "column": 40,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        391,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 16
                        },
                        "start": {
                          "column": 40,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    388,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 16
                    },
                    "start": {
                      "column": 37,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 16
                  },
                  "start": {
                    "column": 43,
                    "line": 16
                  }
                },
                "range": [
                  394,
                  398
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      397,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 16
                      },
                      "start": {
                        "column": 46,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    397,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 16
                    },
                    "start": {
                      "column": 46,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                387,
                398
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 16
                },
                "start": {
                  "column": 36,
                  "line": 16
                }
              }
            }
          },
          "range": [
            381,
            398
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 16
            },
            "start": {
              "column": 30,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 16
          },
          "start": {
            "column": 48,
            "line": 16
          }
        },
        "range": [
          399,
          402
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              401,
              402
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 16
              },
              "start": {
                "column": 50,
                "line": 16
              }
            }
          },
          "range": [
            401,
            402
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 16
            },
            "start": {
              "column": 50,
              "line": 16
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        },
        "range": [
          371,
          374
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
                372,
                373
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              372,
              373
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 21,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        351,
        403
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "result2",
            "optional": false,
            "range": [
              408,
              415
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "derived",
                "optional": false,
                "range": [
                  422,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        436,
                        437
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 17
                        },
                        "start": {
                          "column": 32,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toBase",
                      "optional": false,
                      "range": [
                        438,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 34,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      436,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    436,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 17
                    },
                    "start": {
                      "column": 32,
                      "line": 17
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
                    "name": "d",
                    "optional": false,
                    "range": [
                      431,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  431,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                418,
                421
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              418,
              447
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 14,
                "line": 17
              }
            }
          },
          "range": [
            408,
            447
          ],
          "loc": {
            "end": {
              "column": 43,
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
        404,
        448
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 44,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
