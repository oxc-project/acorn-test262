__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    461
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          45
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "range": [
                25,
                30
              ],
              "loc": {
                "end": {
                  "column": 9,
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
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                    36,
                    39
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        38,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  31,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
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
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              },
              "range": [
                40,
                43
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    42,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "range": [
                  42,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              25,
              43
            ],
            "loc": {
              "end": {
                "column": 22,
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
        "name": "Field",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          18
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        45
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
          88,
          146
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "range": [
                94,
                99
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                99,
                144
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"Yup\"",
                      "value": "Yup",
                      "range": [
                        132,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      125,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  115,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 6
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
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    },
                    "range": [
                      105,
                      113
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        107,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    100,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "range": [
              94,
              144
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 41,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CharField",
        "optional": false,
        "range": [
          53,
          62
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Field",
            "optional": false,
            "range": [
              74,
              79
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              79,
              87
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  80,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          },
          "range": [
            74,
            87
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        47,
        146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          191,
          247
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clean",
              "optional": false,
              "range": [
                197,
                202
              ],
              "loc": {
                "end": {
                  "column": 9,
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
              "type": "FunctionExpression",
              "range": [
                202,
                245
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        235,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      228,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  218,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    },
                    "range": [
                      208,
                      216
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        210,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    203,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "range": [
              197,
              245
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
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
            "line": 15
          },
          "start": {
            "column": 43,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberField",
        "optional": false,
        "range": [
          154,
          165
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Field",
            "optional": false,
            "range": [
              177,
              182
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              182,
              190
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  183,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          "range": [
            177,
            190
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        148,
        247
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          312,
          353
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                318,
                329
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                329,
                351
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  348,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 18
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
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 29,
                          "line": 18
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
                          "name": "T",
                          "optional": false,
                          "range": [
                            345,
                            346
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 18
                            },
                            "start": {
                              "column": 31,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          345,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 31,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      337,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    330,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              318,
              351
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 63,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectField",
        "optional": false,
        "range": [
          255,
          266
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 62,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        },
        "range": [
          266,
          311
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                267,
                268
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 17
                          },
                          "start": {
                            "column": 38,
                            "line": 17
                          }
                        },
                        "range": [
                          287,
                          295
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            289,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 17
                            },
                            "start": {
                              "column": 40,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        283,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 17
                        },
                        "start": {
                          "column": 34,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 17
                      },
                      "start": {
                        "column": 47,
                        "line": 17
                      }
                    },
                    "range": [
                      296,
                      308
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          303,
                          308
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              304,
                              307
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 17
                              },
                              "start": {
                                "column": 55,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 17
                          },
                          "start": {
                            "column": 54,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Field",
                        "optional": false,
                        "range": [
                          298,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 17
                          },
                          "start": {
                            "column": 49,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        298,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 17
                        },
                        "start": {
                          "column": 49,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    282,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 17
                    },
                    "start": {
                      "column": 33,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                280,
                310
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
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
                270,
                271
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 21,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              270,
              310
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 17
              },
              "start": {
                "column": 21,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        249,
        353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "person",
            "optional": false,
            "range": [
              359,
              365
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "range": [
                        390,
                        392
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberField",
                        "optional": false,
                        "range": [
                          398,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        394,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      390,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        417,
                        421
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 23
                        },
                        "start": {
                          "column": 4,
                          "line": 23
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CharField",
                        "optional": false,
                        "range": [
                          427,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        423,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 10,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      417,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  384,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ObjectField",
              "optional": false,
              "range": [
                372,
                383
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            },
            "range": [
              368,
              441
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 24
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          },
          "range": [
            359,
            441
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 24
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
        355,
        442
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "person",
            "optional": false,
            "range": [
              444,
              450
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fields",
            "optional": false,
            "range": [
              451,
              457
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 26
              },
              "start": {
                "column": 7,
                "line": 26
              }
            }
          },
          "range": [
            444,
            457
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "range": [
            458,
            460
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 26
            },
            "start": {
              "column": 14,
              "line": 26
            }
          }
        },
        "range": [
          444,
          460
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        444,
        461
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 17,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
