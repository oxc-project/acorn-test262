__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    331
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
            "name": "nake",
            "optional": false,
            "range": [
              4,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            8
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                84,
                93
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              77,
              94
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          70,
          96
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 60,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doCompile",
        "optional": false,
        "range": [
          19,
          28
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fileset",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            },
            "range": [
              48,
              52
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "range": [
                  50,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 40,
                    "line": 2
                  }
                }
              },
              "range": [
                50,
                52
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 40,
                  "line": 2
                }
              }
            }
          },
          "range": [
            41,
            52
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 2
            },
            "start": {
              "column": 31,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 54,
                "line": 2
              }
            },
            "range": [
              64,
              68
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "range": [
                  66,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 56,
                    "line": 2
                  }
                }
              },
              "range": [
                66,
                68
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 56,
                  "line": 2
                }
              }
            }
          },
          "range": [
            54,
            68
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 44,
              "line": 2
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        },
        "range": [
          28,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "range": [
                29,
                31
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              29,
              31
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "range": [
                33,
                35
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              33,
              35
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "range": [
                37,
                39
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              37,
              39
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        10,
        96
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        97,
        330
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "compileServer",
              "optional": false,
              "range": [
                108,
                121
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
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
                              "name": "folder",
                              "optional": false,
                              "range": [
                                179,
                                185
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 8
                                },
                                "start": {
                                  "column": 8,
                                  "line": 8
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "range": [
                                    188,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 8
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "range": [
                                    193,
                                    197
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  188,
                                  197
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                188,
                                199
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 8
                                },
                                "start": {
                                  "column": 17,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              179,
                              199
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "range": [
                                209,
                                216
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 9
                                },
                                "start": {
                                  "column": 8,
                                  "line": 9
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "folder",
                                  "optional": false,
                                  "range": [
                                    257,
                                    263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 9
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
                                  "name": "nake",
                                  "optional": false,
                                  "range": [
                                    219,
                                    223
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileSetSync",
                                  "optional": false,
                                  "range": [
                                    224,
                                    235
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  219,
                                  235
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  235,
                                  256
                                ],
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      236,
                                      242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 9
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      244,
                                      250
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 9
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      252,
                                      255
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                219,
                                264
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              209,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          175,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 9
                          },
                          "start": {
                            "column": 4,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "range": [
                                305,
                                312
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 10
                                },
                                "start": {
                                  "column": 40,
                                  "line": 10
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "moduleType",
                              "optional": false,
                              "range": [
                                314,
                                324
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 10
                                },
                                "start": {
                                  "column": 49,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doCompile",
                            "optional": false,
                            "range": [
                              274,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 9,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              283,
                              304
                            ],
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  284,
                                  290
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  292,
                                  298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "TSAnyKeyword",
                                "range": [
                                  300,
                                  303
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 10
                              },
                              "start": {
                                "column": 18,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            274,
                            325
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 10
                            },
                            "start": {
                              "column": 9,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          267,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 10
                          },
                          "start": {
                            "column": 2,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      168,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 11
                      },
                      "start": {
                        "column": 71,
                        "line": 6
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 6
                      },
                      "start": {
                        "column": 53,
                        "line": 6
                      }
                    },
                    "range": [
                      150,
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
                          "name": "P0",
                          "optional": false,
                          "range": [
                            151,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 6
                            },
                            "start": {
                              "column": 54,
                              "line": 6
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          151,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 6
                          },
                          "start": {
                            "column": 54,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "range": [
                            155,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 6
                            },
                            "start": {
                              "column": 58,
                              "line": 6
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          155,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 6
                          },
                          "start": {
                            "column": 58,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P2",
                          "optional": false,
                          "range": [
                            159,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 6
                            },
                            "start": {
                              "column": 62,
                              "line": 6
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          159,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 6
                          },
                          "start": {
                            "column": 62,
                            "line": 6
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    150,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 11
                    },
                    "start": {
                      "column": 53,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "task",
                "optional": false,
                "range": [
                  124,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  128,
                  149
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
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 32,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      137,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 6
                      },
                      "start": {
                        "column": 40,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      145,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 6
                      },
                      "start": {
                        "column": 48,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                }
              },
              "range": [
                124,
                329
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "range": [
              108,
              329
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          104,
          330
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
