__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    302
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
            "name": "a",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    13,
                    14
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 2
                    },
                    "start": {
                      "column": 3,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
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
                            47,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 2
                            },
                            "start": {
                              "column": 37,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          40,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      38,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        },
                        "range": [
                          30,
                          33
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              32,
                              33
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 2
                              },
                              "start": {
                                "column": 22,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            32,
                            33
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        29,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    },
                    "range": [
                      34,
                      37
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
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
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        36,
                        37
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    },
                    "range": [
                      25,
                      28
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
                            26,
                            27
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
                        "out": false,
                        "range": [
                          26,
                          27
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
                      }
                    ]
                  },
                  "range": [
                    16,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "range": [
                  13,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              8,
              56
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            56
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
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
        56
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "range": [
              61,
              63
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    71,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 5
                    },
                    "start": {
                      "column": 3,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
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
                            106,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 5
                            },
                            "start": {
                              "column": 38,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          99,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 5
                          },
                          "start": {
                            "column": 31,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      97,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 29,
                        "line": 5
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        },
                        "range": [
                          85,
                          90
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            87,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        84,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    },
                    "range": [
                      91,
                      96
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        93,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 25,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    74,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "range": [
                  71,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 3,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              66,
              115
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            61,
            115
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        57,
        115
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
      "type": "ExportNamedDeclaration",
      "range": [
        116,
        156
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            135,
            156
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 8
                  },
                  "start": {
                    "column": 3,
                    "line": 8
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      146,
                      149
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          148,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        148,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    145,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                },
                "range": [
                  150,
                  153
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      152,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    152,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                },
                "range": [
                  141,
                  144
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
                        142,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 8
                        },
                        "start": {
                          "column": 5,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      142,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "range": [
                140,
                154
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 3,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 7
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
            133,
            134
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "range": [
          123,
          156
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        157,
        199
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            177,
            199
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  182,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 11
                  },
                  "start": {
                    "column": 3,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    },
                    "range": [
                      185,
                      190
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        187,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    184,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
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
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                },
                "range": [
                  191,
                  196
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    193,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                }
              },
              "static": false,
              "range": [
                182,
                197
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 3,
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
              "column": 20,
              "line": 10
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
            174,
            176
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "range": [
          164,
          199
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
                207,
                210
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    209,
                    210
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
                  209,
                  210
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
              206,
              210
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
            206,
            210
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
        202,
        211
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
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 6,
                  "line": 15
                }
              },
              "range": [
                218,
                222
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "range": [
                    220,
                    222
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
                  220,
                  222
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
              }
            },
            "range": [
              216,
              222
            ],
            "loc": {
              "end": {
                "column": 10,
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
            216,
            222
          ],
          "loc": {
            "end": {
              "column": 10,
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
        212,
        223
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            226,
            227
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            230,
            231
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          226,
          231
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        226,
        232
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            242,
            243
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            246,
            247
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "range": [
          242,
          247
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        242,
        248
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "range": [
            260,
            262
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "range": [
            265,
            267
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 5,
              "line": 20
            }
          }
        },
        "range": [
          260,
          267
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
        260,
        268
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "range": [
            281,
            283
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "range": [
            286,
            288
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 21
            },
            "start": {
              "column": 5,
              "line": 21
            }
          }
        },
        "range": [
          281,
          288
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        281,
        289
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
