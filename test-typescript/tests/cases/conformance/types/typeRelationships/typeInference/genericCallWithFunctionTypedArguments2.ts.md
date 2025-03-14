__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    166,
    931
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    220,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              "range": [
                214,
                225
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              207,
              226
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          201,
          228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 35,
            "line": 4
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
          175,
          178
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
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
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            },
            "range": [
              183,
              199
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    },
                    "range": [
                      190,
                      193
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          192,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        192,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    189,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                },
                "range": [
                  195,
                  199
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      198,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    198,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                185,
                199
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          },
          "range": [
            182,
            199
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 4
          }
        },
        "range": [
          178,
          181
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
                179,
                180
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              179,
              180
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        166,
        228
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          242,
          267
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  },
                  "range": [
                    257,
                    260
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        259,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      259,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  256,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              },
              "range": [
                261,
                264
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    263,
                    264
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
                "range": [
                  263,
                  264
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
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              },
              "range": [
                252,
                255
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
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                }
              ]
            },
            "range": [
              248,
              265
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 4,
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
            "column": 12,
            "line": 8
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
          240,
          241
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        230,
        267
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          284,
          306
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  },
                  "range": [
                    296,
                    299
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        298,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      298,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  295,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              },
              "range": [
                300,
                303
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "range": [
                  302,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
              290,
              304
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          278,
          280
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          280,
          283
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
                281,
                282
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              281,
              282
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        268,
        306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                312,
                315
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    314,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  314,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              311,
              315
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            311,
            315
          ],
          "loc": {
            "end": {
              "column": 8,
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
      "kind": "var",
      "range": [
        307,
        316
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 6,
                  "line": 15
                }
              },
              "range": [
                323,
                335
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    327,
                    335
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        328,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "range": [
                    325,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "range": [
                  325,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              321,
              335
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            321,
            335
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "var",
      "range": [
        317,
        336
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                342,
                369
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                              "column": 16,
                              "line": 17
                            },
                            "start": {
                              "column": 13,
                              "line": 17
                            }
                          },
                          "range": [
                            359,
                            362
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                361,
                                362
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 17
                                },
                                "start": {
                                  "column": 15,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              361,
                              362
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 17
                              },
                              "start": {
                                "column": 15,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          358,
                          362
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      },
                      "range": [
                        363,
                        366
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            365,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 17
                            },
                            "start": {
                              "column": 19,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          365,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      },
                      "range": [
                        354,
                        357
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
                              355,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 17
                              },
                              "start": {
                                "column": 9,
                                "line": 17
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            355,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 17
                            },
                            "start": {
                              "column": 9,
                              "line": 17
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      350,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  344,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              341,
              369
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            341,
            369
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        337,
        369
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
            "name": "r",
            "optional": false,
            "range": [
              375,
              376
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  383,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
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
                379,
                382
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              379,
              385
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            375,
            385
          ],
          "loc": {
            "end": {
              "column": 14,
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
      "kind": "var",
      "range": [
        371,
        386
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "r2",
            "optional": false,
            "range": [
              398,
              400
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  415,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
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
                403,
                406
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                406,
                414
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    407,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "range": [
              403,
              417
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            398,
            417
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 21
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
        394,
        418
      ],
      "loc": {
        "end": {
          "column": 24,
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
            "name": "r3",
            "optional": false,
            "range": [
              434,
              436
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  443,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
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
                439,
                442
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              439,
              446
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            434,
            446
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        430,
        447
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
              462,
              465
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  472,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
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
                468,
                471
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 10,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              468,
              474
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 23
              },
              "start": {
                "column": 10,
                "line": 23
              }
            }
          },
          "range": [
            462,
            474
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        458,
        475
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    550,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 18,
                      "line": 26
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "range": [
                  547,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              },
              "range": [
                543,
                552
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              536,
              553
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          530,
          555
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 46,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          493,
          497
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
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
                "column": 24,
                "line": 25
              },
              "start": {
                "column": 21,
                "line": 25
              }
            },
            "range": [
              505,
              508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  507,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
                    "line": 25
                  }
                }
              },
              "range": [
                507,
                508
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              }
            }
          },
          "range": [
            504,
            508
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 25
            },
            "start": {
              "column": 20,
              "line": 25
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 25
              },
              "start": {
                "column": 28,
                "line": 25
              }
            },
            "range": [
              512,
              528
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 25
                      },
                      "start": {
                        "column": 35,
                        "line": 25
                      }
                    },
                    "range": [
                      519,
                      522
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          521,
                          522
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 25
                          },
                          "start": {
                            "column": 37,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        521,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 25
                        },
                        "start": {
                          "column": 37,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    518,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 25
                    },
                    "start": {
                      "column": 34,
                      "line": 25
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                },
                "range": [
                  524,
                  528
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      527,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 25
                      },
                      "start": {
                        "column": 43,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    527,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 25
                    },
                    "start": {
                      "column": 43,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                514,
                528
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            }
          },
          "range": [
            510,
            528
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 25
            },
            "start": {
              "column": 26,
              "line": 25
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 13,
            "line": 25
          }
        },
        "range": [
          497,
          503
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
                498,
                499
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              498,
              499
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
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
              "name": "U",
              "optional": false,
              "range": [
                501,
                502
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
            "out": false,
            "range": [
              501,
              502
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
          }
        ]
      },
      "range": [
        484,
        555
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
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
            "name": "r4",
            "optional": false,
            "range": [
              561,
              563
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  571,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 14,
                    "line": 29
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  574,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                566,
                570
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              566,
              577
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 29
              },
              "start": {
                "column": 9,
                "line": 29
              }
            }
          },
          "range": [
            561,
            577
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        557,
        578
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "r4b",
            "optional": false,
            "range": [
              592,
              595
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  603,
                  604
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
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  606,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                598,
                602
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              598,
              608
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
              }
            }
          },
          "range": [
            592,
            608
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        588,
        609
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "r5",
            "optional": false,
            "range": [
              621,
              623
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  631,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  634,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                626,
                630
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              626,
              636
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            621,
            636
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        617,
        637
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "r6",
            "optional": false,
            "range": [
              649,
              651
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  675,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 30,
                    "line": 32
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  679,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                654,
                658
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                658,
                674
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    659,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 32
                    },
                    "start": {
                      "column": 14,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    667,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 32
                    },
                    "start": {
                      "column": 22,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "range": [
              654,
              682
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "range": [
            649,
            682
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        645,
        683
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    767,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 18,
                      "line": 35
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "range": [
                  764,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "range": [
                760,
                769
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "range": [
              753,
              770
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          747,
          772
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 52,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          704,
          708
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
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
                "column": 24,
                "line": 34
              },
              "start": {
                "column": 21,
                "line": 34
              }
            },
            "range": [
              716,
              719
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  718,
                  719
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 34
                  },
                  "start": {
                    "column": 23,
                    "line": 34
                  }
                }
              },
              "range": [
                718,
                719
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 34
                },
                "start": {
                  "column": 23,
                  "line": 34
                }
              }
            }
          },
          "range": [
            715,
            719
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 34
            },
            "start": {
              "column": 20,
              "line": 34
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 34
              },
              "start": {
                "column": 28,
                "line": 34
              }
            },
            "range": [
              723,
              739
            ],
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 34
                      },
                      "start": {
                        "column": 35,
                        "line": 34
                      }
                    },
                    "range": [
                      730,
                      733
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          732,
                          733
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 34
                          },
                          "start": {
                            "column": 37,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        732,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 34
                        },
                        "start": {
                          "column": 37,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    729,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 34
                    },
                    "start": {
                      "column": 34,
                      "line": 34
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 34
                  },
                  "start": {
                    "column": 40,
                    "line": 34
                  }
                },
                "range": [
                  735,
                  739
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      738,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 34
                      },
                      "start": {
                        "column": 43,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    738,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 34
                    },
                    "start": {
                      "column": 43,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                725,
                739
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 34
                },
                "start": {
                  "column": 30,
                  "line": 34
                }
              }
            }
          },
          "range": [
            721,
            739
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 34
            },
            "start": {
              "column": 26,
              "line": 34
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 34
              },
              "start": {
                "column": 47,
                "line": 34
              }
            },
            "range": [
              742,
              745
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  744,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 34
                  },
                  "start": {
                    "column": 49,
                    "line": 34
                  }
                }
              },
              "range": [
                744,
                745
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 34
                },
                "start": {
                  "column": 49,
                  "line": 34
                }
              }
            }
          },
          "range": [
            741,
            745
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 34
            },
            "start": {
              "column": 46,
              "line": 34
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 34
          },
          "start": {
            "column": 13,
            "line": 34
          }
        },
        "range": [
          708,
          714
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
                709,
                710
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 14,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              709,
              710
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
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
              "name": "U",
              "optional": false,
              "range": [
                712,
                713
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              712,
              713
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 17,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        695,
        772
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
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
            "name": "r7",
            "optional": false,
            "range": [
              778,
              780
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  788,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 38
                  },
                  "start": {
                    "column": 14,
                    "line": 38
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  794,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 38
                  },
                  "start": {
                    "column": 20,
                    "line": 38
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  797,
                  799
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                783,
                787
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              783,
              800
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            778,
            800
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        774,
        801
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "r7b",
            "optional": false,
            "range": [
              813,
              816
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  824,
                  828
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 39
                  },
                  "start": {
                    "column": 15,
                    "line": 39
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  830,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 39
                  },
                  "start": {
                    "column": 21,
                    "line": 39
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  833,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 39
                  },
                  "start": {
                    "column": 24,
                    "line": 39
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                819,
                823
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              819,
              836
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 39
              },
              "start": {
                "column": 10,
                "line": 39
              }
            }
          },
          "range": [
            813,
            836
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        809,
        837
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "r8",
            "optional": false,
            "range": [
              849,
              851
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  859,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 40
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  862,
                  864
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 40
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  866,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 40
                  },
                  "start": {
                    "column": 21,
                    "line": 40
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                854,
                858
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              854,
              868
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 40
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          },
          "range": [
            849,
            868
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        845,
        869
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "r9",
            "optional": false,
            "range": [
              883,
              885
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  909,
                  911
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 41
                  },
                  "start": {
                    "column": 30,
                    "line": 41
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  913,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 41
                  },
                  "start": {
                    "column": 34,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  917,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 41
                  },
                  "start": {
                    "column": 38,
                    "line": 41
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                888,
                892
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                892,
                908
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    893,
                    899
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    901,
                    907
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 41
                    },
                    "start": {
                      "column": 22,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "range": [
              888,
              920
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 41
              },
              "start": {
                "column": 9,
                "line": 41
              }
            }
          },
          "range": [
            883,
            920
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        879,
        921
      ],
      "loc": {
        "end": {
          "column": 42,
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
      "column": 52,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
