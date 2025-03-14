__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    793
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          40
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someMethod",
              "optional": false,
              "range": [
                25,
                35
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false,
            "range": [
              25,
              38
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
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
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IContext",
        "optional": false,
        "range": [
          10,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
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
        40
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          50,
          667
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "range": [
                64,
                86
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
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
                86,
                153
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
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 49,
                        "line": 5
                      }
                    },
                    "range": [
                      101,
                      111
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "range": [
                          103,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 5
                          },
                          "start": {
                            "column": 51,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        103,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 5
                        },
                        "start": {
                          "column": 51,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    87,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 5
                      },
                      "start": {
                        "column": 63,
                        "line": 5
                      }
                    },
                    "range": [
                      115,
                      151
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 5
                              },
                              "start": {
                                "column": 80,
                                "line": 5
                              }
                            },
                            "range": [
                              132,
                              142
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "range": [
                                  134,
                                  142
                                ],
                                "loc": {
                                  "end": {
                                    "column": 90,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                134,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 5
                                },
                                "start": {
                                  "column": 82,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            118,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 5
                            },
                            "start": {
                              "column": 66,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 5
                          },
                          "start": {
                            "column": 92,
                            "line": 5
                          }
                        },
                        "range": [
                          144,
                          151
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            147,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 5
                            },
                            "start": {
                              "column": 95,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        117,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 5
                        },
                        "start": {
                          "column": 65,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    113,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 5
                    },
                    "start": {
                      "column": 61,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 101,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "range": [
              56,
              153
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "range": [
                166,
                188
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
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
                188,
                267
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
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 6
                      },
                      "start": {
                        "column": 54,
                        "line": 6
                      }
                    },
                    "range": [
                      208,
                      225
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          215,
                          225
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "range": [
                                216,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 6
                                },
                                "start": {
                                  "column": 62,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              216,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 6
                              },
                              "start": {
                                "column": 62,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 6
                          },
                          "start": {
                            "column": 61,
                            "line": 6
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          210,
                          215
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 6
                          },
                          "start": {
                            "column": 56,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        210,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 6
                        },
                        "start": {
                          "column": 56,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    189,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 111,
                        "line": 6
                      },
                      "start": {
                        "column": 75,
                        "line": 6
                      }
                    },
                    "range": [
                      229,
                      265
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 102,
                                "line": 6
                              },
                              "start": {
                                "column": 92,
                                "line": 6
                              }
                            },
                            "range": [
                              246,
                              256
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "range": [
                                  248,
                                  256
                                ],
                                "loc": {
                                  "end": {
                                    "column": 102,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 94,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                248,
                                256
                              ],
                              "loc": {
                                "end": {
                                  "column": 102,
                                  "line": 6
                                },
                                "start": {
                                  "column": 94,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            232,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 102,
                              "line": 6
                            },
                            "start": {
                              "column": 78,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 111,
                            "line": 6
                          },
                          "start": {
                            "column": 104,
                            "line": 6
                          }
                        },
                        "range": [
                          258,
                          265
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            261,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 111,
                              "line": 6
                            },
                            "start": {
                              "column": 107,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        231,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 111,
                          "line": 6
                        },
                        "start": {
                          "column": 77,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    227,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 6
                    },
                    "start": {
                      "column": 73,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 113,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 6
                }
              }
            },
            "range": [
              158,
              267
            ],
            "loc": {
              "end": {
                "column": 113,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "range": [
                280,
                302
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
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
                302,
                390
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  358,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 90,
                    "line": 7
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    303,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 7
                      },
                      "start": {
                        "column": 46,
                        "line": 7
                      }
                    },
                    "range": [
                      314,
                      350
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 7
                              },
                              "start": {
                                "column": 63,
                                "line": 7
                              }
                            },
                            "range": [
                              331,
                              341
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "range": [
                                  333,
                                  341
                                ],
                                "loc": {
                                  "end": {
                                    "column": 73,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                333,
                                341
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 7
                                },
                                "start": {
                                  "column": 65,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            317,
                            341
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 7
                            },
                            "start": {
                              "column": 49,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 7
                          },
                          "start": {
                            "column": 75,
                            "line": 7
                          }
                        },
                        "range": [
                          343,
                          350
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            346,
                            350
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 7
                            },
                            "start": {
                              "column": 78,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        316,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    312,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 7
                  },
                  "start": {
                    "column": 83,
                    "line": 7
                  }
                },
                "range": [
                  351,
                  357
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    353,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 7
                    },
                    "start": {
                      "column": 85,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 34,
                  "line": 7
                }
              }
            },
            "range": [
              272,
              390
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "range": [
                404,
                431
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
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
                431,
                458
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
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 54,
                        "line": 11
                      }
                    },
                    "range": [
                      446,
                      456
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "range": [
                          448,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 11
                          },
                          "start": {
                            "column": 56,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        448,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    432,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 11
                    },
                    "start": {
                      "column": 40,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 11
                },
                "start": {
                  "column": 39,
                  "line": 11
                }
              }
            },
            "range": [
              396,
              458
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "range": [
                471,
                498
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 12
                },
                "start": {
                  "column": 12,
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
                498,
                577
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
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 12
                      },
                      "start": {
                        "column": 59,
                        "line": 12
                      }
                    },
                    "range": [
                      518,
                      535
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          525,
                          535
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "range": [
                                526,
                                534
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 12
                                },
                                "start": {
                                  "column": 67,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              526,
                              534
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 12
                              },
                              "start": {
                                "column": 67,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 12
                          },
                          "start": {
                            "column": 66,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          520,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 12
                          },
                          "start": {
                            "column": 61,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        520,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 12
                        },
                        "start": {
                          "column": 61,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    499,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 116,
                        "line": 12
                      },
                      "start": {
                        "column": 80,
                        "line": 12
                      }
                    },
                    "range": [
                      539,
                      575
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 107,
                                "line": 12
                              },
                              "start": {
                                "column": 97,
                                "line": 12
                              }
                            },
                            "range": [
                              556,
                              566
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "range": [
                                  558,
                                  566
                                ],
                                "loc": {
                                  "end": {
                                    "column": 107,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 99,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                558,
                                566
                              ],
                              "loc": {
                                "end": {
                                  "column": 107,
                                  "line": 12
                                },
                                "start": {
                                  "column": 99,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            542,
                            566
                          ],
                          "loc": {
                            "end": {
                              "column": 107,
                              "line": 12
                            },
                            "start": {
                              "column": 83,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 116,
                            "line": 12
                          },
                          "start": {
                            "column": 109,
                            "line": 12
                          }
                        },
                        "range": [
                          568,
                          575
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            571,
                            575
                          ],
                          "loc": {
                            "end": {
                              "column": 116,
                              "line": 12
                            },
                            "start": {
                              "column": 112,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        541,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 12
                        },
                        "start": {
                          "column": 82,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    537,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 116,
                      "line": 12
                    },
                    "start": {
                      "column": 78,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 118,
                  "line": 12
                },
                "start": {
                  "column": 39,
                  "line": 12
                }
              }
            },
            "range": [
              463,
              577
            ],
            "loc": {
              "end": {
                "column": 118,
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "range": [
                590,
                617
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 13
                },
                "start": {
                  "column": 12,
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
                617,
                665
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  633,
                  665
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 55,
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    618,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 13
                    },
                    "start": {
                      "column": 40,
                      "line": 13
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 13
                  },
                  "start": {
                    "column": 48,
                    "line": 13
                  }
                },
                "range": [
                  626,
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
                      "column": 54,
                      "line": 13
                    },
                    "start": {
                      "column": 50,
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
                  "column": 39,
                  "line": 13
                }
              }
            },
            "range": [
              582,
              665
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
            "column": 9,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "range": [
          47,
          49
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        41,
        667
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          685,
          793
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload1",
              "optional": false,
              "range": [
                699,
                708
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
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
                708,
                722
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    709,
                    716
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 22,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    718,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 18
                    },
                    "start": {
                      "column": 31,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "range": [
              691,
              722
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "range": [
                736,
                745
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
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
                745,
                755
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    746,
                    753
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "range": [
              728,
              755
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "range": [
                768,
                777
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
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
                777,
                791
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
                  "name": "context",
                  "optional": false,
                  "range": [
                    778,
                    785
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    787,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 31,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 21
                },
                "start": {
                  "column": 21,
                  "line": 21
                }
              }
            },
            "range": [
              760,
              791
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "range": [
          682,
          684
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 17
          },
          "start": {
            "column": 14,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        668,
        793
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
