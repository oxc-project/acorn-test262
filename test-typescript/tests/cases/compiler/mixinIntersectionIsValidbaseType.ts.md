__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    725
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        79
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  61,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 1
                  },
                  "start": {
                    "column": 61,
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
                    "column": 72,
                    "line": 1
                  },
                  "start": {
                    "column": 65,
                    "line": 1
                  }
                },
                "range": [
                  65,
                  72
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      67,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 1
                      },
                      "start": {
                        "column": 67,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    67,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 1
                    },
                    "start": {
                      "column": 67,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                58,
                72
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 1
                },
                "start": {
                  "column": 58,
                  "line": 1
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 1
              },
              "start": {
                "column": 74,
                "line": 1
              }
            },
            "range": [
              74,
              78
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 1
                  },
                  "start": {
                    "column": 77,
                    "line": 1
                  }
                }
              },
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 1
                },
                "start": {
                  "column": 77,
                  "line": 1
                }
              }
            }
          },
          "range": [
            53,
            78
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 1
            },
            "start": {
              "column": 53,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            50
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "default": {
                "type": "TSObjectKeyword",
                "range": [
                  43,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                24,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          79
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 79,
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
        81,
        142
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            107,
            142
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": false,
                "range": [
                  113,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      121,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    },
                    "range": [
                      125,
                      132
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          127,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        127,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    118,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                },
                "range": [
                  133,
                  139
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    135,
                    139
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
              },
              "static": false,
              "range": [
                113,
                140
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Initable",
          "optional": false,
          "range": [
            98,
            106
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        },
        "range": [
          88,
          142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        205,
        507
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
              "name": "Serializable",
              "optional": false,
              "range": [
                218,
                230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "init": {
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
                          "name": "LocalMixin",
                          "optional": false,
                          "range": [
                            314,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 13
                            },
                            "start": {
                              "column": 10,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ClassExpression",
                                  "abstract": false,
                                  "body": {
                                    "type": "ClassBody",
                                    "range": [
                                      416,
                                      427
                                    ],
                                    "body": [],
                                    "loc": {
                                      "end": {
                                        "column": 9,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 63,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "declare": false,
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SerializableLocal",
                                    "optional": false,
                                    "range": [
                                      374,
                                      391
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "implements": [],
                                  "superClass": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "InnerSuperClass",
                                    "optional": false,
                                    "range": [
                                      400,
                                      415
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    368,
                                    427
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  361,
                                  427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              351,
                              433
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 16
                              },
                              "start": {
                                "column": 47,
                                "line": 13
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InnerSuperClass",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 13
                                  }
                                },
                                "range": [
                                  343,
                                  346
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "range": [
                                      345,
                                      346
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    345,
                                    346
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 13
                                    }
                                  }
                                }
                              },
                              "range": [
                                328,
                                346
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 13
                                },
                                "start": {
                                  "column": 24,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            327,
                            433
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 16
                            },
                            "start": {
                              "column": 23,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          314,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 16
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
                      308,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
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
                          "name": "ResultClass",
                          "optional": false,
                          "range": [
                            443,
                            454
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
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
                              "name": "SuperClass",
                              "optional": false,
                              "range": [
                                468,
                                478
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 17
                                },
                                "start": {
                                  "column": 33,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "LocalMixin",
                            "optional": false,
                            "range": [
                              457,
                              467
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 17
                              },
                              "start": {
                                "column": 22,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            457,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 17
                            },
                            "start": {
                              "column": 22,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          443,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      439,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResultClass",
                      "optional": false,
                      "range": [
                        492,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      485,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  302,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SuperClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      293,
                      296
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          295,
                          296
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
                      "range": [
                        295,
                        296
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
                  },
                  "range": [
                    283,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                },
                "range": [
                  233,
                  277
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              255,
                              265
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Initable",
                                  "optional": false,
                                  "range": [
                                    256,
                                    264
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  256,
                                  264
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 10
                              },
                              "start": {
                                "column": 50,
                                "line": 10
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false,
                            "range": [
                              244,
                              255
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 10
                              },
                              "start": {
                                "column": 39,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            244,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 10
                            },
                            "start": {
                              "column": 39,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Initable",
                            "optional": false,
                            "range": [
                              268,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 10
                              },
                              "start": {
                                "column": 63,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            268,
                            276
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 10
                            },
                            "start": {
                              "column": 63,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        244,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 10
                        },
                        "start": {
                          "column": 39,
                          "line": 10
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        234,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      234,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "range": [
                233,
                506
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 19
                },
                "start": {
                  "column": 28,
                  "line": 10
                }
              }
            },
            "range": [
              218,
              506
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          212,
          507
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 19
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
            "name": "AMixin",
            "optional": false,
            "range": [
              515,
              521
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
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
                        "name": "SomeHowOkay",
                        "optional": false,
                        "range": [
                          597,
                          608
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "init": {
                        "type": "ClassExpression",
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "range": [
                            638,
                            645
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 23
                            },
                            "start": {
                              "column": 49,
                              "line": 22
                            }
                          }
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            617,
                            618
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 22
                            },
                            "start": {
                              "column": 28,
                              "line": 22
                            }
                          }
                        },
                        "implements": [],
                        "superClass": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SuperClass",
                          "optional": false,
                          "range": [
                            627,
                            637
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 22
                            },
                            "start": {
                              "column": 38,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          611,
                          645
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 23
                          },
                          "start": {
                            "column": 22,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        597,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    593,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
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
                        "name": "SomeHowNotOkay",
                        "optional": false,
                        "range": [
                          656,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "init": {
                        "type": "ClassExpression",
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "range": [
                            714,
                            721
                          ],
                          "body": [],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 26
                            },
                            "start": {
                              "column": 66,
                              "line": 25
                            }
                          }
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            679,
                            680
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 25
                            },
                            "start": {
                              "column": 31,
                              "line": 25
                            }
                          }
                        },
                        "implements": [],
                        "superClass": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false,
                              "range": [
                                702,
                                712
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 25
                                },
                                "start": {
                                  "column": 54,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Serializable",
                            "optional": false,
                            "range": [
                              689,
                              701
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 25
                              },
                              "start": {
                                "column": 41,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            689,
                            713
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 25
                            },
                            "start": {
                              "column": 41,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          673,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 26
                          },
                          "start": {
                            "column": 25,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        656,
                        721
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    652,
                    722
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                587,
                724
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 27
                },
                "start": {
                  "column": 78,
                  "line": 21
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "SuperClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 21
                    },
                    "start": {
                      "column": 70,
                      "line": 21
                    }
                  },
                  "range": [
                    579,
                    582
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        581,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 21
                        },
                        "start": {
                          "column": 72,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      581,
                      582
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 21
                      },
                      "start": {
                        "column": 72,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  569,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 21
                  },
                  "start": {
                    "column": 60,
                    "line": 21
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              },
              "range": [
                524,
                568
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            546,
                            556
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Initable",
                                "optional": false,
                                "range": [
                                  547,
                                  555
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                547,
                                555
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 21
                                },
                                "start": {
                                  "column": 38,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 21
                            },
                            "start": {
                              "column": 37,
                              "line": 21
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "range": [
                            535,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 21
                            },
                            "start": {
                              "column": 26,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          535,
                          556
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Initable",
                          "optional": false,
                          "range": [
                            559,
                            567
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 21
                            },
                            "start": {
                              "column": 50,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          559,
                          567
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 21
                          },
                          "start": {
                            "column": 50,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      535,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 21
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      525,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    525,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ]
            },
            "range": [
              524,
              724
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 15,
                "line": 21
              }
            }
          },
          "range": [
            515,
            724
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        509,
        725
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
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
      "column": 2,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
