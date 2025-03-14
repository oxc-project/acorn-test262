__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    665
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          22,
          157
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "changeListeners",
              "optional": false,
              "range": [
                28,
                43
              ],
              "loc": {
                "end": {
                  "column": 19,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              },
              "range": [
                43,
                62
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "range": [
                          45,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 2
                          },
                          "start": {
                            "column": 21,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        45,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 2
                        },
                        "start": {
                          "column": 21,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      45,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      58,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 34,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
              28,
              62
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observe",
              "optional": false,
              "range": [
                67,
                74
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  },
                  "range": [
                    82,
                    121
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "change",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
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
                                "column": 33,
                                "line": 3
                              },
                              "start": {
                                "column": 30,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          85,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oldValue",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 3
                            },
                            "start": {
                              "column": 44,
                              "line": 3
                            }
                          },
                          "range": [
                            107,
                            112
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              109,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 3
                              },
                              "start": {
                                "column": 46,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          98,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 3
                          },
                          "start": {
                            "column": 35,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 3
                        },
                        "start": {
                          "column": 51,
                          "line": 3
                        }
                      },
                      "range": [
                        114,
                        121
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          117,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 3
                          },
                          "start": {
                            "column": 54,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      84,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
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
                  75,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fireImmediately",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  },
                  "range": [
                    139,
                    148
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      141,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 3
                      },
                      "start": {
                        "column": 78,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  123,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 92,
                  "line": 3
                },
                "start": {
                  "column": 86,
                  "line": 3
                }
              },
              "range": [
                149,
                155
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  151,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 3
                  },
                  "start": {
                    "column": 88,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              67,
              155
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IListenable",
        "optional": false,
        "range": [
          10,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
        157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        "body": [],
        "range": [
          223,
          226
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 64,
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
        "name": "notifyListeners",
        "optional": false,
        "range": [
          168,
          183
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "listenable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            },
            "range": [
              197,
              210
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListenable",
                "optional": false,
                "range": [
                  199,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 40,
                    "line": 6
                  }
                }
              },
              "range": [
                199,
                210
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 40,
                  "line": 6
                }
              }
            }
          },
          "range": [
            187,
            210
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 6
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
                "column": 62,
                "line": 6
              },
              "start": {
                "column": 59,
                "line": 6
              }
            },
            "range": [
              218,
              221
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  220,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 6
                  },
                  "start": {
                    "column": 61,
                    "line": 6
                  }
                }
              },
              "range": [
                220,
                221
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 61,
                  "line": 6
                }
              }
            }
          },
          "range": [
            212,
            221
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 6
            },
            "start": {
              "column": 53,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 6
          }
        },
        "range": [
          183,
          186
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
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              184,
              185
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 25,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        159,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        228,
        665
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            260,
            665
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  266,
                  277
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                  277,
                  528
                ],
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
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 13
                                },
                                "start": {
                                  "column": 22,
                                  "line": 13
                                }
                              },
                              "range": [
                                333,
                                336
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    335,
                                    336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  335,
                                  336
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 13
                                  }
                                }
                              }
                            },
                            "range": [
                              325,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 13
                              },
                              "start": {
                                "column": 14,
                                "line": 13
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              339,
                              344
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            325,
                            344
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 13
                            },
                            "start": {
                              "column": 14,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        319,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
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
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              },
                              "range": [
                                368,
                                373
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  370,
                                  373
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              360,
                              373
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 14
                              },
                              "start": {
                                "column": 14,
                                "line": 14
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              376,
                              380
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 14
                              },
                              "start": {
                                "column": 30,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            360,
                            380
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        354,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
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
                            "type": "ThisExpression",
                            "range": [
                              406,
                              410
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
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    426,
                                    430
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 16
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"update\"",
                                  "value": "update",
                                  "range": [
                                    432,
                                    440
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  426,
                                  440
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false,
                                  "range": [
                                    454,
                                    460
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 17
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ThisExpression",
                                  "range": [
                                    462,
                                    466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  454,
                                  466
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 17
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "range": [
                                    480,
                                    488
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 18
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "range": [
                                    480,
                                    488
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  480,
                                  488
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 18
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "range": [
                                    502,
                                    510
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 19
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "range": [
                                    502,
                                    510
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  502,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              412,
                              520
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 20
                              },
                              "start": {
                                "column": 30,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notifyListeners",
                          "optional": false,
                          "range": [
                            390,
                            405
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          390,
                          521
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        390,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    309,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
                          }
                        },
                        "range": [
                          299,
                          302
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              301,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 11
                              },
                              "start": {
                                "column": 22,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            301,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 11
                            },
                            "start": {
                              "column": 22,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        294,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      287,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                266,
                528
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "changeListeners",
                "optional": false,
                "range": [
                  533,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 22
                  },
                  "start": {
                    "column": 19,
                    "line": 22
                  }
                },
                "range": [
                  548,
                  567
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "range": [
                            550,
                            558
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 22
                            },
                            "start": {
                              "column": 21,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          550,
                          558
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 21,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        550,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        563,
                        567
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 22
                        },
                        "start": {
                          "column": 34,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "range": [
                    550,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 22
                    },
                    "start": {
                      "column": 21,
                      "line": 22
                    }
                  }
                }
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  570,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 22
                  },
                  "start": {
                    "column": 41,
                    "line": 22
                  }
                }
              },
              "range": [
                533,
                573
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                "name": "observe",
                "optional": false,
                "range": [
                  578,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
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
                  585,
                  663
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    661,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 23
                    },
                    "start": {
                      "column": 87,
                      "line": 23
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
                    "name": "handler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      },
                      "range": [
                        593,
                        632
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "change",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 23
                                },
                                "start": {
                                  "column": 28,
                                  "line": 23
                                }
                              },
                              "range": [
                                602,
                                607
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  604,
                                  607
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              596,
                              607
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 23
                              },
                              "start": {
                                "column": 22,
                                "line": 23
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 23
                                },
                                "start": {
                                  "column": 44,
                                  "line": 23
                                }
                              },
                              "range": [
                                618,
                                623
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  620,
                                  623
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 23
                                  }
                                }
                              }
                            },
                            "range": [
                              609,
                              623
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 23
                              },
                              "start": {
                                "column": 35,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 23
                            },
                            "start": {
                              "column": 51,
                              "line": 23
                            }
                          },
                          "range": [
                            625,
                            632
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              628,
                              632
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 23
                              },
                              "start": {
                                "column": 54,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          595,
                          632
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 23
                          },
                          "start": {
                            "column": 21,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      586,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fireImmediately",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 23
                        },
                        "start": {
                          "column": 76,
                          "line": 23
                        }
                      },
                      "range": [
                        650,
                        659
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          652,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 23
                          },
                          "start": {
                            "column": 78,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      634,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 23
                      },
                      "start": {
                        "column": 60,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "range": [
                578,
                663
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 32,
              "line": 9
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObservableValue",
          "optional": false,
          "range": [
            241,
            256
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 9
            }
          },
          "range": [
            256,
            259
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
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                257,
                258
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 29,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          235,
          665
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
