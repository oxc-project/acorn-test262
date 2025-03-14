__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    472
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                35,
                42
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "range": [
                28,
                34
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              42
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                64,
                99
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "range": [
                      74,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    },
                    "range": [
                      84,
                      92
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        86,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    74,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "range": [
                57,
                63
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              47,
              99
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                126,
                185
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokens",
                    "optional": false,
                    "range": [
                      136,
                      142
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    },
                    "range": [
                      142,
                      152
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "range": [
                            144,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          144,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 16,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        144,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    136,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "range": [
                      162,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
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
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    },
                    "range": [
                      170,
                      178
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "range": [
                          172,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        172,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 18,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    162,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "range": [
                114,
                125
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "range": [
              104,
              185
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                206,
                293
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "range": [
                      216,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 12
                          },
                          "start": {
                            "column": 21,
                            "line": 12
                          }
                        },
                        "range": [
                          229,
                          236
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            230,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        225,
                        236
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 12
                          },
                          "start": {
                            "column": 35,
                            "line": 12
                          }
                        },
                        "range": [
                          243,
                          250
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "range": [
                              244,
                              250
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
                          "range": [
                            244,
                            250
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
                        }
                      },
                      "range": [
                        238,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 12
                        },
                        "start": {
                          "column": 30,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 12
                          },
                          "start": {
                            "column": 57,
                            "line": 12
                          }
                        },
                        "range": [
                          265,
                          273
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            266,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 12
                            },
                            "start": {
                              "column": 58,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        252,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 12
                        },
                        "start": {
                          "column": 44,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 12
                      },
                      "start": {
                        "column": 66,
                        "line": 12
                      }
                    },
                    "range": [
                      274,
                      286
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "range": [
                          275,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 12
                          },
                          "start": {
                            "column": 67,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        275,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 12
                        },
                        "start": {
                          "column": 67,
                          "line": 12
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    216,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "range": [
                200,
                205
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              190,
              293
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              298,
              465
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  332,
                  465
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "range": [
                        349,
                        357
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
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
                        357,
                        459
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                444,
                                448
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 16
                                },
                                "start": {
                                  "column": 19,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              437,
                              449
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          423,
                          459
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 17
                          },
                          "start": {
                            "column": 89,
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 15
                              },
                              "start": {
                                "column": 28,
                                "line": 15
                              }
                            },
                            "range": [
                              362,
                              369
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                363,
                                369
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 15
                                },
                                "start": {
                                  "column": 29,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            358,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
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
                          "name": "tokens",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 15
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            },
                            "range": [
                              377,
                              386
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IToken",
                                  "optional": false,
                                  "range": [
                                    378,
                                    384
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  378,
                                  384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                378,
                                386
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 15
                                },
                                "start": {
                                  "column": 44,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            371,
                            386
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 15
                            },
                            "start": {
                              "column": 37,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 15
                              },
                              "start": {
                                "column": 67,
                                "line": 15
                              }
                            },
                            "range": [
                              401,
                              409
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                402,
                                409
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 15
                                },
                                "start": {
                                  "column": 68,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            388,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 15
                            },
                            "start": {
                              "column": 54,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 15
                          },
                          "start": {
                            "column": 76,
                            "line": 15
                          }
                        },
                        "range": [
                          410,
                          422
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "range": [
                              411,
                              422
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 15
                              },
                              "start": {
                                "column": 77,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            411,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 15
                            },
                            "start": {
                              "column": 77,
                              "line": 15
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      342,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 38,
                    "line": 14
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "range": [
                  311,
                  314
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
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "range": [
                      326,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 32,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    326,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 32,
                      "line": 14
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                305,
                465
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          12,
          471
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          11
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
