__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    687
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        77
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "range": [
            16,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              },
              "range": [
                28,
                36
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              21,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 45,
                  "line": 1
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 1
                  },
                  "start": {
                    "column": 47,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              38,
              53
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                58,
                62
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 1
                },
                "start": {
                  "column": 58,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 1
                },
                "start": {
                  "column": 62,
                  "line": 1
                }
              },
              "range": [
                62,
                69
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    64,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 1
                    },
                    "start": {
                      "column": 64,
                      "line": 1
                    }
                  }
                },
                "range": [
                  64,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 1
                  },
                  "start": {
                    "column": 64,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              55,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 55,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 76,
              "line": 1
            },
            "start": {
              "column": 70,
              "line": 1
            }
          },
          "range": [
            70,
            76
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              72,
              76
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 1
              },
              "start": {
                "column": 72,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          77
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 77,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        78,
        171
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "range": [
                    151,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "range": [
                    161,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  151,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "range": [
                144,
                169
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            138,
            171
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
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
          "name": "func",
          "optional": false,
          "range": [
            94,
            98
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              },
              "range": [
                106,
                114
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  108,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              99,
              114
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              },
              "range": [
                123,
                131
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  125,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 2
                  },
                  "start": {
                    "column": 47,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              116,
              131
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 59,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          },
          "range": [
            132,
            137
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              134,
              137
            ],
            "loc": {
              "end": {
                "column": 59,
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
          85,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        173,
        504
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            188,
            504
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  194,
                  205
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  205,
                  256
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 23,
                          "line": 7
                        }
                      },
                      "range": [
                        213,
                        221
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          215,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 25,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      206,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 7
                        },
                        "start": {
                          "column": 40,
                          "line": 7
                        }
                      },
                      "range": [
                        230,
                        238
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          232,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
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
                      223,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 7
                      },
                      "start": {
                        "column": 33,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        243,
                        247
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
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 7
                        },
                        "start": {
                          "column": 57,
                          "line": 7
                        }
                      },
                      "range": [
                        247,
                        254
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            249,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 7
                            },
                            "start": {
                              "column": 59,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          249,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 7
                          },
                          "start": {
                            "column": 59,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      240,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 7
                      },
                      "start": {
                        "column": 50,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                194,
                256
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  261,
                  272
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                  272,
                  341
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "range": [
                            317,
                            324
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
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            327,
                            334
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          317,
                          334
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
                      },
                      "range": [
                        317,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    307,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 50,
                      "line": 8
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
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      },
                      "range": [
                        280,
                        288
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          282,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      273,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      },
                      "range": [
                        297,
                        305
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          299,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 8
                          },
                          "start": {
                            "column": 42,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      290,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
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
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                261,
                341
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                "name": "method",
                "optional": false,
                "range": [
                  347,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
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
                  353,
                  410
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      },
                      "range": [
                        361,
                        369
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          363,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 12
                          },
                          "start": {
                            "column": 20,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      354,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 35,
                          "line": 12
                        }
                      },
                      "range": [
                        378,
                        386
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          380,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 37,
                            "line": 12
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
                        "column": 43,
                        "line": 12
                      },
                      "start": {
                        "column": 28,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        391,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 12
                        },
                        "start": {
                          "column": 48,
                          "line": 12
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 12
                        },
                        "start": {
                          "column": 52,
                          "line": 12
                        }
                      },
                      "range": [
                        395,
                        402
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            397,
                            400
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 12
                            },
                            "start": {
                              "column": 54,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          397,
                          402
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 12
                          },
                          "start": {
                            "column": 54,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      388,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 12
                      },
                      "start": {
                        "column": 45,
                        "line": 12
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 12
                    },
                    "start": {
                      "column": 60,
                      "line": 12
                    }
                  },
                  "range": [
                    403,
                    409
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      405,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 12
                      },
                      "start": {
                        "column": 62,
                        "line": 12
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              },
              "range": [
                347,
                410
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                "name": "method",
                "optional": false,
                "range": [
                  415,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
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
                  421,
                  502
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "range": [
                            478,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            488,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 14
                            },
                            "start": {
                              "column": 25,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          478,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        471,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    461,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 50,
                      "line": 13
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
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      },
                      "range": [
                        429,
                        437
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          431,
                          437
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      422,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 13
                        },
                        "start": {
                          "column": 35,
                          "line": 13
                        }
                      },
                      "range": [
                        446,
                        454
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          448,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 37,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      439,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 13
                      },
                      "start": {
                        "column": 28,
                        "line": 13
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 13
                    },
                    "start": {
                      "column": 44,
                      "line": 13
                    }
                  },
                  "range": [
                    455,
                    460
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      457,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 13
                      },
                      "start": {
                        "column": 46,
                        "line": 13
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "range": [
                415,
                502
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 13
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
              "column": 15,
              "line": 6
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
            186,
            187
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          180,
          504
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
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
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        507,
        589
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "range": [
            523,
            534
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 19
            },
            "start": {
              "column": 16,
              "line": 19
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 38,
                  "line": 19
                }
              },
              "range": [
                545,
                553
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  547,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 40,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              538,
              553
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 31,
                "line": 19
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 19
                },
                "start": {
                  "column": 55,
                  "line": 19
                }
              },
              "range": [
                562,
                565
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    564,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 19
                    },
                    "start": {
                      "column": 57,
                      "line": 19
                    }
                  }
                },
                "range": [
                  564,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 19
                  },
                  "start": {
                    "column": 57,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              555,
              565
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 19
              },
              "start": {
                "column": 48,
                "line": 19
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                570,
                574
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 19
                },
                "start": {
                  "column": 63,
                  "line": 19
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 74,
                  "line": 19
                },
                "start": {
                  "column": 67,
                  "line": 19
                }
              },
              "range": [
                574,
                581
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    576,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 19
                    },
                    "start": {
                      "column": 69,
                      "line": 19
                    }
                  }
                },
                "range": [
                  576,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 19
                  },
                  "start": {
                    "column": 69,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              567,
              581
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 19
              },
              "start": {
                "column": 60,
                "line": 19
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 81,
              "line": 19
            },
            "start": {
              "column": 75,
              "line": 19
            }
          },
          "range": [
            582,
            588
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              584,
              588
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 19
              },
              "start": {
                "column": 77,
                "line": 19
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 19
            },
            "start": {
              "column": 27,
              "line": 19
            }
          },
          "range": [
            534,
            537
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
                  535,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 28,
                    "line": 19
                  }
                }
              },
              "out": false,
              "range": [
                535,
                536
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 28,
                  "line": 19
                }
              }
            }
          ]
        },
        "range": [
          514,
          589
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 19
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
          "column": 82,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        590,
        687
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "range": [
                    667,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 11,
                      "line": 21
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "range": [
                    677,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 21,
                      "line": 21
                    }
                  }
                },
                "range": [
                  667,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              },
              "range": [
                660,
                685
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            }
          ],
          "range": [
            654,
            687
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 64,
              "line": 20
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "range": [
            606,
            617
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 20
            },
            "start": {
              "column": 16,
              "line": 20
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 20
                },
                "start": {
                  "column": 35,
                  "line": 20
                }
              },
              "range": [
                625,
                633
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  627,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              618,
              633
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 20
                },
                "start": {
                  "column": 52,
                  "line": 20
                }
              },
              "range": [
                642,
                647
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  644,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 20
                  },
                  "start": {
                    "column": 54,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              635,
              647
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 20
              },
              "start": {
                "column": 45,
                "line": 20
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 63,
              "line": 20
            },
            "start": {
              "column": 58,
              "line": 20
            }
          },
          "range": [
            648,
            653
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              650,
              653
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 20
              },
              "start": {
                "column": 60,
                "line": 20
              }
            }
          }
        },
        "range": [
          597,
          687
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
