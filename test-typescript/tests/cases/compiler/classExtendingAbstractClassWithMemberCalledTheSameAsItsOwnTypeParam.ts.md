__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    605
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          110
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleChange",
              "optional": false,
              "range": [
                23,
                35
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  },
                  "range": [
                    58,
                    83
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        71,
                        83
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
                              72,
                              73
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 2
                              },
                              "start": {
                                "column": 50,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            72,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 2
                            },
                            "start": {
                              "column": 50,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TChange",
                            "optional": false,
                            "range": [
                              75,
                              82
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 2
                              },
                              "start": {
                                "column": 53,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            75,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 2
                            },
                            "start": {
                              "column": 53,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 2
                        },
                        "start": {
                          "column": 49,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IObservable",
                      "optional": false,
                      "range": [
                        60,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      60,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  48,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "change",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 2
                    },
                    "start": {
                      "column": 69,
                      "line": 2
                    }
                  },
                  "range": [
                    91,
                    100
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "range": [
                        93,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 2
                        },
                        "start": {
                          "column": 71,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      93,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 2
                      },
                      "start": {
                        "column": 71,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  85,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 2
                  },
                  "start": {
                    "column": 63,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 2
                },
                "start": {
                  "column": 79,
                  "line": 2
                }
              },
              "range": [
                101,
                107
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  103,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 2
                  },
                  "start": {
                    "column": 81,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                35,
                47
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
                      36,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 14,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    36,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
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
                    "name": "TChange",
                    "optional": false,
                    "range": [
                      39,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    39,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              23,
              108
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 2
              },
              "start": {
                "column": 1,
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
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IObserver",
        "optional": false,
        "range": [
          10,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
        110
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
          156,
          198
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                159,
                162
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 6
                },
                "start": {
                  "column": 1,
                  "line": 6
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                164,
                167
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    166,
                    167
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
                "range": [
                  166,
                  167
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
              }
            },
            "static": false,
            "range": [
              159,
              168
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "range": [
                179,
                186
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                186,
                195
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TChange",
                  "optional": false,
                  "range": [
                    188,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "range": [
                  188,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              170,
              196
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 1,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 44,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IObservable",
        "optional": false,
        "range": [
          122,
          133
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 5
          }
        },
        "range": [
          133,
          155
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
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
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
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                147,
                154
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "range": [
                137,
                144
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              137,
              154
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        112,
        198
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
      "type": "ExportNamedDeclaration",
      "range": [
        200,
        284
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            225,
            284
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readObservable",
                "optional": false,
                "range": [
                  228,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 1,
                    "line": 11
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observable",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    },
                    "range": [
                      256,
                      277
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          269,
                          277
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
                                270,
                                271
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 11
                                },
                                "start": {
                                  "column": 43,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              270,
                              271
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 11
                              },
                              "start": {
                                "column": 43,
                                "line": 11
                              }
                            }
                          },
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              273,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 11
                              },
                              "start": {
                                "column": 46,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObservable",
                        "optional": false,
                        "range": [
                          258,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 11
                          },
                          "start": {
                            "column": 31,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        258,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    246,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 11
                  },
                  "start": {
                    "column": 51,
                    "line": 11
                  }
                },
                "range": [
                  278,
                  281
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      280,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 11
                      },
                      "start": {
                        "column": 53,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    280,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 11
                    },
                    "start": {
                      "column": 53,
                      "line": 11
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                },
                "range": [
                  242,
                  245
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
                        243,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  }
                ]
              },
              "range": [
                228,
                282
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 11
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
              "column": 25,
              "line": 10
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IReader",
          "optional": false,
          "range": [
            217,
            224
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "range": [
          207,
          284
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        286,
        448
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": true,
        "body": {
          "type": "ClassBody",
          "range": [
            376,
            448
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "range": [
                  383,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
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
                  390,
                  419
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            411,
                            415
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 15
                            },
                            "start": {
                              "column": 33,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          411,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 15
                          },
                          "start": {
                            "column": 33,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        404,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    402,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
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
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  },
                  "range": [
                    392,
                    401
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "range": [
                        394,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      394,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 16,
                        "line": 15
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              "range": [
                379,
                419
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 1,
                  "line": 15
                }
              }
            },
            {
              "type": "TSAbstractMethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "range": [
                  437,
                  440
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  440,
                  446
                ],
                "async": false,
                "body": null,
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
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  },
                  "range": [
                    442,
                    445
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        444,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      444,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 20,
                    "line": 16
                  }
                }
              },
              "range": [
                421,
                446
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 1,
                  "line": 16
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 90,
              "line": 14
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "range": [
            308,
            328
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 14
            },
            "start": {
              "column": 22,
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
              "name": "IObservable",
              "optional": false,
              "range": [
                352,
                363
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 14
                },
                "start": {
                  "column": 66,
                  "line": 14
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                363,
                375
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
                      364,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 14
                      },
                      "start": {
                        "column": 78,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    364,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 14
                    },
                    "start": {
                      "column": 78,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TChange",
                    "optional": false,
                    "range": [
                      367,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 14
                      },
                      "start": {
                        "column": 81,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    367,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 14
                    },
                    "start": {
                      "column": 81,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 14
                },
                "start": {
                  "column": 77,
                  "line": 14
                }
              }
            },
            "range": [
              352,
              375
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 14
              },
              "start": {
                "column": 66,
                "line": 14
              }
            }
          }
        ],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 14
            },
            "start": {
              "column": 42,
              "line": 14
            }
          },
          "range": [
            328,
            340
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
                  329,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 14
                  },
                  "start": {
                    "column": 43,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                329,
                330
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 14
                },
                "start": {
                  "column": 43,
                  "line": 14
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
                "name": "TChange",
                "optional": false,
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 14
                  },
                  "start": {
                    "column": 46,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                332,
                339
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 14
                },
                "start": {
                  "column": 46,
                  "line": 14
                }
              }
            }
          ]
        },
        "range": [
          293,
          448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        450,
        604
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": true,
        "body": {
          "type": "ClassBody",
          "range": [
            547,
            604
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "protected",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "observers",
                "optional": false,
                "range": [
                  569,
                  578
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
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    585,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 20
                    },
                    "start": {
                      "column": 36,
                      "line": 20
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    588,
                    599
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObserver",
                        "optional": false,
                        "range": [
                          589,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 20
                          },
                          "start": {
                            "column": 40,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        589,
                        598
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 20
                        },
                        "start": {
                          "column": 40,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 39,
                      "line": 20
                    }
                  }
                },
                "range": [
                  581,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              },
              "range": [
                550,
                602
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 20
                },
                "start": {
                  "column": 1,
                  "line": 20
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 97,
              "line": 19
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseObservable",
          "optional": false,
          "range": [
            472,
            486
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 19
            },
            "start": {
              "column": 22,
              "line": 19
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "range": [
            514,
            534
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 19
            },
            "start": {
              "column": 64,
              "line": 19
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            534,
            546
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
                  535,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 19
                  },
                  "start": {
                    "column": 85,
                    "line": 19
                  }
                }
              },
              "range": [
                535,
                536
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 19
                },
                "start": {
                  "column": 85,
                  "line": 19
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "range": [
                  538,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 19
                  },
                  "start": {
                    "column": 88,
                    "line": 19
                  }
                }
              },
              "range": [
                538,
                545
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 19
                },
                "start": {
                  "column": 88,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 19
            },
            "start": {
              "column": 84,
              "line": 19
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 19
            },
            "start": {
              "column": 36,
              "line": 19
            }
          },
          "range": [
            486,
            505
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
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 37,
                    "line": 19
                  }
                }
              },
              "out": false,
              "range": [
                487,
                488
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 37,
                  "line": 19
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSVoidKeyword",
                "range": [
                  500,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 19
                  },
                  "start": {
                    "column": 50,
                    "line": 19
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "range": [
                  490,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 19
                  },
                  "start": {
                    "column": 40,
                    "line": 19
                  }
                }
              },
              "out": false,
              "range": [
                490,
                504
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 19
                },
                "start": {
                  "column": 40,
                  "line": 19
                }
              }
            }
          ]
        },
        "range": [
          457,
          604
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
