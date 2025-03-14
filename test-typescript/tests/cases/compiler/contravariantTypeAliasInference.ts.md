__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    359
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func1",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              },
              "range": [
                18,
                21
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    20,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              17,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            30
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              26,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        },
        "range": [
          16,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          13
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 11,
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func2",
        "optional": false,
        "range": [
          37,
          42
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
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
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  },
                  "range": [
                    51,
                    54
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        53,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 2
                        },
                        "start": {
                          "column": 21,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  50,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              },
              "range": [
                56,
                63
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  59,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              49,
              63
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              67,
              76
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          }
        ],
        "range": [
          48,
          76
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        },
        "range": [
          42,
          45
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
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        32,
        77
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                93,
                108
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    100,
                    108
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        101,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func1",
                  "optional": false,
                  "range": [
                    95,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                "range": [
                  95,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              91,
              108
            ],
            "loc": {
              "end": {
                "column": 29,
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
            91,
            108
          ],
          "loc": {
            "end": {
              "column": 29,
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
      "kind": "let",
      "range": [
        79,
        109
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 4
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              },
              "range": [
                124,
                136
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    131,
                    136
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          132,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 22,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        132,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func1",
                  "optional": false,
                  "range": [
                    126,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                "range": [
                  126,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              122,
              136
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            122,
            136
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        110,
        137
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
          156,
          159
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            },
            "range": [
              165,
              175
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  172,
                  175
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
                        173,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 34,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      173,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func1",
                "optional": false,
                "range": [
                  167,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "range": [
                167,
                175
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            }
          },
          "range": [
            163,
            175
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 40,
                "line": 7
              }
            },
            "range": [
              179,
              189
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  186,
                  189
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
                        187,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      187,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 7
                      },
                      "start": {
                        "column": 48,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 7
                  },
                  "start": {
                    "column": 47,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func1",
                "optional": false,
                "range": [
                  181,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 7
                  }
                }
              },
              "range": [
                181,
                189
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 7
                },
                "start": {
                  "column": 42,
                  "line": 7
                }
              }
            }
          },
          "range": [
            177,
            189
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 7
          },
          "start": {
            "column": 51,
            "line": 7
          }
        },
        "range": [
          190,
          196
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            192,
            196
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 7
            },
            "start": {
              "column": 53,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          159,
          162
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
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              160,
              161
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        139,
        197
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              203,
              205
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "range": [
              207,
              209
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
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
            199,
            202
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          199,
          210
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        199,
        211
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              },
              "range": [
                227,
                242
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    234,
                    242
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        235,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func2",
                  "optional": false,
                  "range": [
                    229,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  229,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              225,
              242
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            225,
            242
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        213,
        243
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              },
              "range": [
                258,
                270
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    265,
                    270
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          266,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        266,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 21,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func2",
                  "optional": false,
                  "range": [
                    260,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "range": [
                  260,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              256,
              270
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            256,
            270
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 12
            },
            "start": {
              "column": 12,
              "line": 12
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        244,
        271
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
          290,
          293
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 26,
                "line": 14
              }
            },
            "range": [
              299,
              309
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  306,
                  309
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
                        307,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 14
                        },
                        "start": {
                          "column": 34,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      307,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 14
                  },
                  "start": {
                    "column": 33,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func2",
                "optional": false,
                "range": [
                  301,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              "range": [
                301,
                309
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 28,
                  "line": 14
                }
              }
            }
          },
          "range": [
            297,
            309
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 14
            },
            "start": {
              "column": 24,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 14
              },
              "start": {
                "column": 40,
                "line": 14
              }
            },
            "range": [
              313,
              323
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  320,
                  323
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
                        321,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 14
                        },
                        "start": {
                          "column": 48,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      321,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 14
                      },
                      "start": {
                        "column": 48,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func2",
                "optional": false,
                "range": [
                  315,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              "range": [
                315,
                323
              ],
              "loc": {
                "end": {
                  "column": 50,
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
            311,
            323
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 14
            },
            "start": {
              "column": 38,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 14
          },
          "start": {
            "column": 51,
            "line": 14
          }
        },
        "range": [
          324,
          330
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            326,
            330
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 14
            },
            "start": {
              "column": 53,
              "line": 14
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 14
          }
        },
        "range": [
          293,
          296
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
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              294,
              295
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        273,
        331
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 14
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              337,
              339
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
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "range": [
              341,
              343
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
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
            333,
            336
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          333,
          344
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        333,
        345
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g1",
            "optional": false,
            "range": [
              350,
              352
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "range": [
              354,
              356
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 8,
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
            346,
            349
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          346,
          357
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        346,
        358
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
