__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    358
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "range": [
          22,
          28
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 66,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          },
          "range": [
            34,
            83
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    47,
                    73
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        48,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        56,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          64,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 3
                          },
                          "start": {
                            "column": 47,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        64,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 3
                        },
                        "start": {
                          "column": 47,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "range": [
                    38,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  38,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  76,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 3
                  },
                  "start": {
                    "column": 59,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              38,
              82
            ],
            "loc": {
              "end": {
                "column": 65,
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
          31,
          83
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "range": [
        17,
        83
      ],
      "loc": {
        "end": {
          "column": 66,
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                96,
                104
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "range": [
                    98,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  98,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              91,
              104
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                        "name": "next",
                        "optional": false,
                        "range": [
                          132,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            145,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 6
                            },
                            "start": {
                              "column": 23,
                              "line": 6
                            }
                          }
                        },
                        "delegate": false,
                        "range": [
                          139,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        132,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    126,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "range": [
                        159,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        164,
                        165
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
                    "range": [
                      159,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    152,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                120,
                168
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 35,
                  "line": 5
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              107,
              168
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          },
          "range": [
            91,
            168
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        85,
        168
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "range": [
          175,
          182
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 72,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          },
          "range": [
            188,
            242
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    206,
                    232
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        207,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 37,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        215,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 10
                        },
                        "start": {
                          "column": 45,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          223,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 10
                          },
                          "start": {
                            "column": 53,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        223,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 10
                        },
                        "start": {
                          "column": 53,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 10
                    },
                    "start": {
                      "column": 36,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "range": [
                    192,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                "range": [
                  192,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  235,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 10
                  },
                  "start": {
                    "column": 65,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              192,
              241
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            }
          }
        },
        "range": [
          185,
          242
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "range": [
        170,
        242
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              },
              "range": [
                255,
                264
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action2",
                  "optional": false,
                  "range": [
                    257,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  257,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              250,
              264
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": true,
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
                        "name": "next",
                        "optional": false,
                        "range": [
                          298,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "''",
                                "value": "",
                                "range": [
                                  333,
                                  335
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 13
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
                                "name": "Promise",
                                "optional": false,
                                "range": [
                                  317,
                                  324
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "range": [
                                  325,
                                  332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                317,
                                332
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 13
                                },
                                "start": {
                                  "column": 29,
                                  "line": 13
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              317,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 13
                              },
                              "start": {
                                "column": 29,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            311,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 13
                            },
                            "start": {
                              "column": 23,
                              "line": 13
                            }
                          }
                        },
                        "delegate": false,
                        "range": [
                          305,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 13
                          },
                          "start": {
                            "column": 17,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        298,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    292,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "range": [
                        348,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        353,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      348,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    341,
                    355
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
              "range": [
                286,
                357
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 42,
                  "line": 12
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              267,
              357
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            250,
            357
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        244,
        357
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
