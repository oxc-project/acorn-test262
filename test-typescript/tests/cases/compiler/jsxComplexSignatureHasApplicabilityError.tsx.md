__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    18590
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          68,
          75
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              57,
              62
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            52,
            62
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        }
      ],
      "range": [
        45,
        76
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          119,
          200
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                125,
                130
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                131,
                146
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        139,
                        142
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
                              140,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 19,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            140,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 18,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "range": [
                        133,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      133,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      145,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  133,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              125,
              147
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "range": [
                152,
                160
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  },
                  "range": [
                    167,
                    190
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            175,
                            178
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
                                  176,
                                  177
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                176,
                                177
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 28,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 27,
                              "line": 8
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "range": [
                            169,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          169,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 21,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          181,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 8
                          },
                          "start": {
                            "column": 33,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      169,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  162,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
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
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 43,
                  "line": 8
                }
              },
              "range": [
                191,
                197
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  193,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 8
                  },
                  "start": {
                    "column": 45,
                    "line": 8
                  }
                }
              }
            },
            "static": false,
            "range": [
              152,
              198
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 8
              },
              "start": {
                "column": 4,
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
            "column": 40,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          89,
          94
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        },
        "range": [
          94,
          118
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "range": [
                  105,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "range": [
                105,
                117
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
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
                95,
                96
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              95,
              117
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        79,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractValueType",
        "optional": false,
        "range": [
          207,
          223
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              229,
              230
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 11
              },
              "start": {
                "column": 27,
                "line": 11
              }
            }
          },
          "range": [
            229,
            230
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 27,
              "line": 11
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              255,
              264
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      262,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 11
                      },
                      "start": {
                        "column": 60,
                        "line": 11
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    262,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 11
                    },
                    "start": {
                      "column": 60,
                      "line": 11
                    }
                  }
                },
                "range": [
                  256,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 11
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 11
              },
              "start": {
                "column": 53,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactSelectProps",
            "optional": false,
            "range": [
              239,
              255
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          },
          "range": [
            239,
            264
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 11
            },
            "start": {
              "column": 37,
              "line": 11
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            271,
            276
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 11
            },
            "start": {
              "column": 69,
              "line": 11
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 11
              },
              "start": {
                "column": 65,
                "line": 11
              }
            }
          },
          "range": [
            267,
            268
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 11
            },
            "start": {
              "column": 65,
              "line": 11
            }
          }
        },
        "range": [
          229,
          276
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 21,
            "line": 11
          }
        },
        "range": [
          223,
          226
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
                224,
                225
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
            "out": false,
            "range": [
              224,
              225
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
        ]
      },
      "range": [
        202,
        277
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        279,
        454
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReactSingleSelectProps",
          "optional": false,
          "range": [
            291,
            313
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              375,
              453
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    385,
                    408
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "range": [
                          386,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        386,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"multi\"",
                        "value": "multi",
                        "range": [
                          400,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 16
                          },
                          "start": {
                            "column": 23,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        400,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "range": [
                    381,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "range": [
                  381,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    419,
                    451
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          436,
                          450
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WrappedProps",
                              "optional": false,
                              "range": [
                                437,
                                449
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 17
                                },
                                "start": {
                                  "column": 27,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              437,
                              449
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 17
                              },
                              "start": {
                                "column": 27,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 17
                          },
                          "start": {
                            "column": 26,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtractValueType",
                        "optional": false,
                        "range": [
                          420,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 10,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        420,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "range": [
                    414,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "range": [
                  414,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Overwrite",
            "optional": false,
            "range": [
              366,
              375
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            366,
            453
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 34,
              "line": 13
            }
          },
          "range": [
            313,
            363
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    356,
                    361
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        357,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 14
                        },
                        "start": {
                          "column": 42,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 41,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "range": [
                    340,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                },
                "range": [
                  340,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedProps",
                "optional": false,
                "range": [
                  319,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                319,
                361
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            }
          ]
        },
        "range": [
          286,
          454
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        456,
        1127
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "children": [],
                        "closingElement": null,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "range": [
                            719,
                            1107
                          ],
                          "attributes": [
                            {
                              "type": "JSXSpreadAttribute",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "range": [
                                  789,
                                  794
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 28
                                  }
                                }
                              },
                              "range": [
                                785,
                                795
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 28
                                },
                                "start": {
                                  "column": 16,
                                  "line": 28
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "multi",
                                "range": [
                                  812,
                                  817
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 29
                                  }
                                }
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "false",
                                  "value": false,
                                  "range": [
                                    819,
                                    824
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  818,
                                  825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                812,
                                825
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 29
                                },
                                "start": {
                                  "column": 16,
                                  "line": 29
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "autosize",
                                "range": [
                                  842,
                                  850
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 30
                                  }
                                }
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "false",
                                  "value": false,
                                  "range": [
                                    852,
                                    857
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  851,
                                  858
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                842,
                                858
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 30
                                },
                                "start": {
                                  "column": 16,
                                  "line": 30
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "value",
                                "range": [
                                  875,
                                  880
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 31
                                  }
                                }
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "range": [
                                      882,
                                      887
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      888,
                                      893
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    882,
                                    893
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 31
                                    }
                                  }
                                },
                                "range": [
                                  881,
                                  894
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                875,
                                894
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 31
                                },
                                "start": {
                                  "column": 16,
                                  "line": 31
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "onChange",
                                "range": [
                                  911,
                                  919
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 32
                                  }
                                }
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "alternate": null,
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "arguments": [
                                                  {
                                                    "type": "ConditionalExpression",
                                                    "alternate": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "value",
                                                      "optional": false,
                                                      "range": [
                                                        1044,
                                                        1049
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 73,
                                                          "line": 34
                                                        },
                                                        "start": {
                                                          "column": 68,
                                                          "line": 34
                                                        }
                                                      }
                                                    },
                                                    "consequent": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "undefined",
                                                      "optional": false,
                                                      "range": [
                                                        1032,
                                                        1041
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 65,
                                                          "line": 34
                                                        },
                                                        "start": {
                                                          "column": 56,
                                                          "line": 34
                                                        }
                                                      }
                                                    },
                                                    "test": {
                                                      "type": "BinaryExpression",
                                                      "operator": "===",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "value",
                                                        "optional": false,
                                                        "range": [
                                                          1015,
                                                          1020
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 44,
                                                            "line": 34
                                                          },
                                                          "start": {
                                                            "column": 39,
                                                            "line": 34
                                                          }
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "raw": "null",
                                                        "value": null,
                                                        "range": [
                                                          1025,
                                                          1029
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 53,
                                                            "line": 34
                                                          },
                                                          "start": {
                                                            "column": 49,
                                                            "line": 34
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1015,
                                                        1029
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 53,
                                                          "line": 34
                                                        },
                                                        "start": {
                                                          "column": 39,
                                                          "line": 34
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      1015,
                                                      1049
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 73,
                                                        "line": 34
                                                      },
                                                      "start": {
                                                        "column": 39,
                                                        "line": 34
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
                                                    "name": "props",
                                                    "optional": false,
                                                    "range": [
                                                      1000,
                                                      1005
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 29,
                                                        "line": 34
                                                      },
                                                      "start": {
                                                        "column": 24,
                                                        "line": 34
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "onChange",
                                                    "optional": false,
                                                    "range": [
                                                      1006,
                                                      1014
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 38,
                                                        "line": 34
                                                      },
                                                      "start": {
                                                        "column": 30,
                                                        "line": 34
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    1000,
                                                    1014
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 38,
                                                      "line": 34
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 34
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "range": [
                                                  1000,
                                                  1050
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 74,
                                                    "line": 34
                                                  },
                                                  "start": {
                                                    "column": 24,
                                                    "line": 34
                                                  }
                                                }
                                              },
                                              "range": [
                                                1000,
                                                1051
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 75,
                                                  "line": 34
                                                },
                                                "start": {
                                                  "column": 24,
                                                  "line": 34
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            974,
                                            1073
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 35
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 33
                                            }
                                          }
                                        },
                                        "test": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "props",
                                            "optional": false,
                                            "range": [
                                              958,
                                              963
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 33
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 33
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "onChange",
                                            "optional": false,
                                            "range": [
                                              964,
                                              972
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 38,
                                                "line": 33
                                              },
                                              "start": {
                                                "column": 30,
                                                "line": 33
                                              }
                                            }
                                          },
                                          "range": [
                                            958,
                                            972
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 33
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 33
                                            }
                                          }
                                        },
                                        "range": [
                                          954,
                                          1073
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 35
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 33
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      932,
                                      1091
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 32
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
                                      "name": "value",
                                      "optional": false,
                                      "range": [
                                        922,
                                        927
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 32
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    921,
                                    1091
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  920,
                                  1092
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                911,
                                1092
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 36
                                },
                                "start": {
                                  "column": 16,
                                  "line": 32
                                }
                              }
                            }
                          ],
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "ReactSelectClass",
                            "range": [
                              720,
                              736
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 27
                              },
                              "start": {
                                "column": 13,
                                "line": 27
                              }
                            }
                          },
                          "selfClosing": true,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              736,
                              768
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    753,
                                    767
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "WrappedProps",
                                        "optional": false,
                                        "range": [
                                          754,
                                          766
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 59,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 47,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "range": [
                                        754,
                                        766
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 59,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 27
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 27
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExtractValueType",
                                  "optional": false,
                                  "range": [
                                    737,
                                    753
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 27
                                    }
                                  }
                                },
                                "range": [
                                  737,
                                  767
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 27
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 27
                              },
                              "start": {
                                "column": 29,
                                "line": 27
                              }
                            }
                          },
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          719,
                          1107
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        698,
                        1118
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    688,
                    1124
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 39
                    },
                    "start": {
                      "column": 22,
                      "line": 25
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
                    "name": "props",
                    "optional": false,
                    "range": [
                      678,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 25
                      },
                      "start": {
                        "column": 12,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  677,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              },
              "range": [
                670,
                1125
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            664,
            1127
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 40
            },
            "start": {
              "column": 61,
              "line": 24
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createReactSingleSelect",
          "optional": false,
          "range": [
            472,
            495
          ],
          "loc": {
            "end": {
              "column": 39,
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
            "name": "WrappedComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              },
              "range": [
                567,
                602
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    588,
                    602
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "range": [
                          589,
                          601
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 23
                          },
                          "start": {
                            "column": 42,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        589,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 23
                        },
                        "start": {
                          "column": 42,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 23
                    },
                    "start": {
                      "column": 41,
                      "line": 23
                    }
                  }
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "range": [
                      569,
                      574
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 23
                      },
                      "start": {
                        "column": 22,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "range": [
                      575,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    569,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                },
                "range": [
                  569,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              551,
              602
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 60,
              "line": 24
            },
            "start": {
              "column": 1,
              "line": 24
            }
          },
          "range": [
            604,
            663
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                625,
                663
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      648,
                      662
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WrappedProps",
                          "optional": false,
                          "range": [
                            649,
                            661
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 24
                            },
                            "start": {
                              "column": 46,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          649,
                          661
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 24
                          },
                          "start": {
                            "column": 46,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 24
                      },
                      "start": {
                        "column": 45,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactSingleSelectProps",
                    "optional": false,
                    "range": [
                      626,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    626,
                    662
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 24
                    },
                    "start": {
                      "column": 23,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 24
                },
                "start": {
                  "column": 22,
                  "line": 24
                }
              }
            },
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  606,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 24
                  },
                  "start": {
                    "column": 3,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "range": [
                  612,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 24
                  },
                  "start": {
                    "column": 9,
                    "line": 24
                  }
                }
              },
              "range": [
                606,
                625
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 24
                },
                "start": {
                  "column": 3,
                  "line": 24
                }
              }
            },
            "range": [
              606,
              663
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 24
              },
              "start": {
                "column": 3,
                "line": 24
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 39,
              "line": 20
            }
          },
          "range": [
            495,
            545
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    538,
                    543
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        539,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 21
                        },
                        "start": {
                          "column": 42,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 21
                    },
                    "start": {
                      "column": 41,
                      "line": 21
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "range": [
                    522,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 21
                    },
                    "start": {
                      "column": 25,
                      "line": 21
                    }
                  }
                },
                "range": [
                  522,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 21
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedProps",
                "optional": false,
                "range": [
                  501,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "out": false,
              "range": [
                501,
                543
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            }
          ]
        },
        "range": [
          463,
          1127
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
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
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1170,
        1266
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "range": [
            1182,
            1186
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 44
            },
            "start": {
              "column": 12,
              "line": 44
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1213,
                1214
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 44
                },
                "start": {
                  "column": 43,
                  "line": 44
                }
              }
            },
            "range": [
              1213,
              1214
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 44
              },
              "start": {
                "column": 43,
                "line": 44
              }
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "range": [
              1223,
              1226
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 44
              },
              "start": {
                "column": 53,
                "line": 44
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1260,
              1265
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 44
              },
              "start": {
                "column": 90,
                "line": 44
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1233,
                1257
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
                      1234,
                      1235
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 44
                      },
                      "start": {
                        "column": 64,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1234,
                    1235
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 44
                    },
                    "start": {
                      "column": 64,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1244,
                      1256
                    ],
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1251,
                              1252
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 44
                              },
                              "start": {
                                "column": 81,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            1251,
                            1252
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 44
                            },
                            "start": {
                              "column": 81,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1245,
                          1252
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 44
                          },
                          "start": {
                            "column": 75,
                            "line": 44
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            1254,
                            1255
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 44
                            },
                            "start": {
                              "column": 84,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1254,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 44
                          },
                          "start": {
                            "column": 84,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 44
                      },
                      "start": {
                        "column": 74,
                        "line": 44
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "range": [
                      1237,
                      1244
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 44
                      },
                      "start": {
                        "column": 67,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1237,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 44
                    },
                    "start": {
                      "column": 67,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 44
                },
                "start": {
                  "column": 63,
                  "line": 44
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "range": [
                1229,
                1233
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 44
                },
                "start": {
                  "column": 59,
                  "line": 44
                }
              }
            },
            "range": [
              1229,
              1257
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 44
              },
              "start": {
                "column": 59,
                "line": 44
              }
            }
          },
          "range": [
            1213,
            1265
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 44
            },
            "start": {
              "column": 43,
              "line": 44
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 40,
              "line": 44
            },
            "start": {
              "column": 16,
              "line": 44
            }
          },
          "range": [
            1186,
            1210
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
                  1187,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 17,
                    "line": 44
                  }
                }
              },
              "out": false,
              "range": [
                1187,
                1188
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1206,
                    1209
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 44
                    },
                    "start": {
                      "column": 36,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1200,
                  1209
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 44
                  },
                  "start": {
                    "column": 30,
                    "line": 44
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
                  1190,
                  1191
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 44
                  },
                  "start": {
                    "column": 20,
                    "line": 44
                  }
                }
              },
              "out": false,
              "range": [
                1190,
                1209
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 44
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              }
            }
          ]
        },
        "range": [
          1177,
          1266
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 96,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1267,
        1328
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Overwrite",
          "optional": false,
          "range": [
            1279,
            1288
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 45
            },
            "start": {
              "column": 12,
              "line": 45
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1301,
                  1323
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
                        1302,
                        1303
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 45
                        },
                        "start": {
                          "column": 35,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1302,
                      1303
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 45
                      },
                      "start": {
                        "column": 35,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1311,
                              1312
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 45
                              },
                              "start": {
                                "column": 44,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            1311,
                            1312
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 45
                            },
                            "start": {
                              "column": 44,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1305,
                          1312
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 45
                          },
                          "start": {
                            "column": 38,
                            "line": 45
                          }
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1321,
                              1322
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 45
                              },
                              "start": {
                                "column": 54,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            1321,
                            1322
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 45
                            },
                            "start": {
                              "column": 54,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1315,
                          1322
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 45
                          },
                          "start": {
                            "column": 48,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "range": [
                      1305,
                      1322
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 45
                      },
                      "start": {
                        "column": 38,
                        "line": 45
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 45
                  },
                  "start": {
                    "column": 34,
                    "line": 45
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "range": [
                  1297,
                  1301
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 45
                  },
                  "start": {
                    "column": 30,
                    "line": 45
                  }
                }
              },
              "range": [
                1297,
                1323
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 45
                },
                "start": {
                  "column": 30,
                  "line": 45
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1326,
                  1327
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 45
                  },
                  "start": {
                    "column": 59,
                    "line": 45
                  }
                }
              },
              "range": [
                1326,
                1327
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 45
                },
                "start": {
                  "column": 59,
                  "line": 45
                }
              }
            }
          ],
          "range": [
            1297,
            1327
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 45
            },
            "start": {
              "column": 30,
              "line": 45
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 45
            },
            "start": {
              "column": 21,
              "line": 45
            }
          },
          "range": [
            1288,
            1294
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
                  1289,
                  1290
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 45
                  },
                  "start": {
                    "column": 22,
                    "line": 45
                  }
                }
              },
              "out": false,
              "range": [
                1289,
                1290
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 45
                },
                "start": {
                  "column": 22,
                  "line": 45
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
                  1292,
                  1293
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 25,
                    "line": 45
                  }
                }
              },
              "out": false,
              "range": [
                1292,
                1293
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 25,
                  "line": 45
                }
              }
            }
          ]
        },
        "range": [
          1274,
          1328
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 45
          },
          "start": {
            "column": 7,
            "line": 45
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 61,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1507,
          1572
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "focus",
              "optional": false,
              "range": [
                1513,
                1518
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
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
                1518,
                1527
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
                    "column": 17,
                    "line": 49
                  },
                  "start": {
                    "column": 11,
                    "line": 49
                  }
                },
                "range": [
                  1520,
                  1526
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1522,
                    1526
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 49
                    },
                    "start": {
                      "column": 13,
                      "line": 49
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 18,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "range": [
              1513,
              1527
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
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
              "name": "setValue",
              "optional": false,
              "range": [
                1532,
                1540
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
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
                1540,
                1570
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 50
                      },
                      "start": {
                        "column": 18,
                        "line": 50
                      }
                    },
                    "range": [
                      1546,
                      1562
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1554,
                          1562
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                1555,
                                1561
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 50
                                },
                                "start": {
                                  "column": 27,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1555,
                              1561
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 50
                              },
                              "start": {
                                "column": 27,
                                "line": 50
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 50
                          },
                          "start": {
                            "column": 26,
                            "line": 50
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "range": [
                          1548,
                          1554
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 50
                          },
                          "start": {
                            "column": 20,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1548,
                        1562
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 50
                        },
                        "start": {
                          "column": 20,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1541,
                    1562
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 50
                    },
                    "start": {
                      "column": 13,
                      "line": 50
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 50
                  },
                  "start": {
                    "column": 35,
                    "line": 50
                  }
                },
                "range": [
                  1563,
                  1569
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1565,
                    1569
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 50
                    },
                    "start": {
                      "column": 37,
                      "line": 50
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 42,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "range": [
              1532,
              1570
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 104,
            "line": 48
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactSelectClass",
        "optional": false,
        "range": [
          1417,
          1433
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 48
          },
          "start": {
            "column": 14,
            "line": 48
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            1465,
            1470
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 48
            },
            "start": {
              "column": 62,
              "line": 48
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1471,
            1480
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 48
            },
            "start": {
              "column": 68,
              "line": 48
            }
          }
        },
        "range": [
          1465,
          1480
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 48
          },
          "start": {
            "column": 62,
            "line": 48
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          1480,
          1506
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1497,
                1505
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "range": [
                      1498,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 48
                      },
                      "start": {
                        "column": 95,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1498,
                    1504
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 48
                    },
                    "start": {
                      "column": 95,
                      "line": 48
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 48
                },
                "start": {
                  "column": 94,
                  "line": 48
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactSelectProps",
              "optional": false,
              "range": [
                1481,
                1497
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 48
                },
                "start": {
                  "column": 78,
                  "line": 48
                }
              }
            },
            "range": [
              1481,
              1505
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 48
              },
              "start": {
                "column": 78,
                "line": 48
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 103,
            "line": 48
          },
          "start": {
            "column": 77,
            "line": 48
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 48
          },
          "start": {
            "column": 30,
            "line": 48
          }
        },
        "range": [
          1433,
          1456
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "range": [
                  1443,
                  1455
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 48
                  },
                  "start": {
                    "column": 40,
                    "line": 48
                  }
                }
              },
              "range": [
                1443,
                1455
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 48
                },
                "start": {
                  "column": 40,
                  "line": 48
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                1434,
                1440
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 48
                },
                "start": {
                  "column": 31,
                  "line": 48
                }
              }
            },
            "out": false,
            "range": [
              1434,
              1455
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 48
              },
              "start": {
                "column": 31,
                "line": 48
              }
            }
          }
        ]
      },
      "range": [
        1403,
        1572
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1574,
        1681
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionComponentType",
          "optional": false,
          "range": [
            1586,
            1605
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 53
            },
            "start": {
              "column": 12,
              "line": 53
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1650,
              1680
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1671,
                    1679
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          1672,
                          1678
                        ],
                        "loc": {
                          "end": {
                            "column": 104,
                            "line": 53
                          },
                          "start": {
                            "column": 98,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1672,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 53
                        },
                        "start": {
                          "column": 98,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 53
                    },
                    "start": {
                      "column": 97,
                      "line": 53
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionComponentProps",
                  "optional": false,
                  "range": [
                    1651,
                    1671
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 53
                    },
                    "start": {
                      "column": 77,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1651,
                  1679
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 53
                  },
                  "start": {
                    "column": 77,
                    "line": 53
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 106,
                "line": 53
              },
              "start": {
                "column": 76,
                "line": 53
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                1631,
                1636
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 53
                },
                "start": {
                  "column": 57,
                  "line": 53
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "range": [
                1637,
                1650
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 53
                },
                "start": {
                  "column": 63,
                  "line": 53
                }
              }
            },
            "range": [
              1631,
              1650
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 53
              },
              "start": {
                "column": 57,
                "line": 53
              }
            }
          },
          "range": [
            1631,
            1680
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 53
            },
            "start": {
              "column": 57,
              "line": 53
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 53
            },
            "start": {
              "column": 31,
              "line": 53
            }
          },
          "range": [
            1605,
            1628
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    1615,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 53
                    },
                    "start": {
                      "column": 41,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1615,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 53
                  },
                  "start": {
                    "column": 41,
                    "line": 53
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  1606,
                  1612
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 53
                  },
                  "start": {
                    "column": 32,
                    "line": 53
                  }
                }
              },
              "out": false,
              "range": [
                1606,
                1627
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 53
                },
                "start": {
                  "column": 32,
                  "line": 53
                }
              }
            }
          ]
        },
        "range": [
          1581,
          1681
        ],
        "loc": {
          "end": {
            "column": 107,
            "line": 53
          },
          "start": {
            "column": 7,
            "line": 53
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 107,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1682,
        1788
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueComponentType",
          "optional": false,
          "range": [
            1694,
            1712
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 54
            },
            "start": {
              "column": 12,
              "line": 54
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1758,
              1787
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1778,
                    1786
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          1779,
                          1785
                        ],
                        "loc": {
                          "end": {
                            "column": 103,
                            "line": 54
                          },
                          "start": {
                            "column": 97,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1779,
                        1785
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 54
                        },
                        "start": {
                          "column": 97,
                          "line": 54
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 54
                    },
                    "start": {
                      "column": 96,
                      "line": 54
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueComponentProps",
                  "optional": false,
                  "range": [
                    1759,
                    1778
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 54
                    },
                    "start": {
                      "column": 77,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1759,
                  1786
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 54
                  },
                  "start": {
                    "column": 77,
                    "line": 54
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 54
              },
              "start": {
                "column": 76,
                "line": 54
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                1739,
                1744
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 54
                },
                "start": {
                  "column": 57,
                  "line": 54
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "range": [
                1745,
                1758
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 54
                },
                "start": {
                  "column": 63,
                  "line": 54
                }
              }
            },
            "range": [
              1739,
              1758
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 54
              },
              "start": {
                "column": 57,
                "line": 54
              }
            }
          },
          "range": [
            1739,
            1787
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 54
            },
            "start": {
              "column": 57,
              "line": 54
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 54
            },
            "start": {
              "column": 30,
              "line": 54
            }
          },
          "range": [
            1712,
            1735
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    1722,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 54
                    },
                    "start": {
                      "column": 40,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1722,
                  1734
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 54
                  },
                  "start": {
                    "column": 40,
                    "line": 54
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  1713,
                  1719
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 54
                  },
                  "start": {
                    "column": 31,
                    "line": 54
                  }
                }
              },
              "out": false,
              "range": [
                1713,
                1734
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 54
                },
                "start": {
                  "column": 31,
                  "line": 54
                }
              }
            }
          ]
        },
        "range": [
          1689,
          1788
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 54
          },
          "start": {
            "column": 7,
            "line": 54
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 106,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1790,
        1853
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HandlerRendererResult",
          "optional": false,
          "range": [
            1802,
            1823
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 56
            },
            "start": {
              "column": 12,
              "line": 56
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "range": [
                    1826,
                    1829
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 56
                    },
                    "start": {
                      "column": 36,
                      "line": 56
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "range": [
                    1830,
                    1837
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 56
                    },
                    "start": {
                      "column": 40,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1826,
                  1837
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 56
                  },
                  "start": {
                    "column": 36,
                    "line": 56
                  }
                }
              },
              "range": [
                1826,
                1837
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 56
                },
                "start": {
                  "column": 36,
                  "line": 56
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                1840,
                1844
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 56
                },
                "start": {
                  "column": 50,
                  "line": 56
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  1847,
                  1852
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 56
                  },
                  "start": {
                    "column": 57,
                    "line": 56
                  }
                }
              },
              "range": [
                1847,
                1852
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 56
                },
                "start": {
                  "column": 57,
                  "line": 56
                }
              }
            }
          ],
          "range": [
            1826,
            1852
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 56
            },
            "start": {
              "column": 36,
              "line": 56
            }
          }
        },
        "range": [
          1797,
          1853
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 63,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1867,
        1956
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FocusOptionHandler",
          "optional": false,
          "range": [
            1879,
            1897
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 59
            },
            "start": {
              "column": 12,
              "line": 59
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 59
                  },
                  "start": {
                    "column": 63,
                    "line": 59
                  }
                },
                "range": [
                  1930,
                  1946
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1938,
                      1946
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            1939,
                            1945
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 59
                            },
                            "start": {
                              "column": 72,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1939,
                          1945
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 59
                          },
                          "start": {
                            "column": 72,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 59
                      },
                      "start": {
                        "column": 71,
                        "line": 59
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      1932,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 59
                      },
                      "start": {
                        "column": 65,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1932,
                    1946
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 59
                    },
                    "start": {
                      "column": 65,
                      "line": 59
                    }
                  }
                }
              },
              "range": [
                1924,
                1946
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 59
                },
                "start": {
                  "column": 57,
                  "line": 59
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 59
              },
              "start": {
                "column": 81,
                "line": 59
              }
            },
            "range": [
              1948,
              1955
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                1951,
                1955
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 59
                },
                "start": {
                  "column": 84,
                  "line": 59
                }
              }
            }
          },
          "range": [
            1923,
            1955
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 59
            },
            "start": {
              "column": 56,
              "line": 59
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 59
            },
            "start": {
              "column": 30,
              "line": 59
            }
          },
          "range": [
            1897,
            1920
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    1907,
                    1919
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 59
                    },
                    "start": {
                      "column": 40,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1907,
                  1919
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 59
                  },
                  "start": {
                    "column": 40,
                    "line": 59
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  1898,
                  1904
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 59
                  },
                  "start": {
                    "column": 31,
                    "line": 59
                  }
                }
              },
              "out": false,
              "range": [
                1898,
                1919
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 59
                },
                "start": {
                  "column": 31,
                  "line": 59
                }
              }
            }
          ]
        },
        "range": [
          1874,
          1956
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 59
          },
          "start": {
            "column": 7,
            "line": 59
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 89,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1957,
        2046
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelectValueHandler",
          "optional": false,
          "range": [
            1969,
            1987
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 60
            },
            "start": {
              "column": 12,
              "line": 60
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 60
                  },
                  "start": {
                    "column": 63,
                    "line": 60
                  }
                },
                "range": [
                  2020,
                  2036
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2028,
                      2036
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            2029,
                            2035
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 60
                            },
                            "start": {
                              "column": 72,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          2029,
                          2035
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 60
                          },
                          "start": {
                            "column": 72,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 60
                      },
                      "start": {
                        "column": 71,
                        "line": 60
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      2022,
                      2028
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 60
                      },
                      "start": {
                        "column": 65,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2022,
                    2036
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 60
                    },
                    "start": {
                      "column": 65,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                2014,
                2036
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 60
                },
                "start": {
                  "column": 57,
                  "line": 60
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 60
              },
              "start": {
                "column": 81,
                "line": 60
              }
            },
            "range": [
              2038,
              2045
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                2041,
                2045
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 60
                },
                "start": {
                  "column": 84,
                  "line": 60
                }
              }
            }
          },
          "range": [
            2013,
            2045
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 60
            },
            "start": {
              "column": 56,
              "line": 60
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 60
            },
            "start": {
              "column": 30,
              "line": 60
            }
          },
          "range": [
            1987,
            2010
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    1997,
                    2009
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 60
                    },
                    "start": {
                      "column": 40,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1997,
                  2009
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 60
                  },
                  "start": {
                    "column": 40,
                    "line": 60
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  1988,
                  1994
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 60
                  },
                  "start": {
                    "column": 31,
                    "line": 60
                  }
                }
              },
              "out": false,
              "range": [
                1988,
                2009
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 60
                },
                "start": {
                  "column": 31,
                  "line": 60
                }
              }
            }
          ]
        },
        "range": [
          1964,
          2046
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 60
          },
          "start": {
            "column": 7,
            "line": 60
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 89,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2047,
        2135
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArrowRendererHandler",
          "optional": false,
          "range": [
            2059,
            2079
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 61
            },
            "start": {
              "column": 12,
              "line": 61
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 61
                  },
                  "start": {
                    "column": 41,
                    "line": 61
                  }
                },
                "range": [
                  2088,
                  2108
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrowRendererProps",
                    "optional": false,
                    "range": [
                      2090,
                      2108
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 61
                      },
                      "start": {
                        "column": 43,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2090,
                    2108
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 61
                    },
                    "start": {
                      "column": 43,
                      "line": 61
                    }
                  }
                }
              },
              "range": [
                2083,
                2108
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 61
                },
                "start": {
                  "column": 36,
                  "line": 61
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 61
              },
              "start": {
                "column": 63,
                "line": 61
              }
            },
            "range": [
              2110,
              2134
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  2113,
                  2134
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 61
                  },
                  "start": {
                    "column": 66,
                    "line": 61
                  }
                }
              },
              "range": [
                2113,
                2134
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 61
                },
                "start": {
                  "column": 66,
                  "line": 61
                }
              }
            }
          },
          "range": [
            2082,
            2134
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 61
            },
            "start": {
              "column": 35,
              "line": 61
            }
          }
        },
        "range": [
          2054,
          2135
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 61
          },
          "start": {
            "column": 7,
            "line": 61
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 88,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2136,
        2199
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClearRendererHandler",
          "optional": false,
          "range": [
            2148,
            2168
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 62
            },
            "start": {
              "column": 12,
              "line": 62
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
                "column": 62,
                "line": 62
              },
              "start": {
                "column": 38,
                "line": 62
              }
            },
            "range": [
              2174,
              2198
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  2177,
                  2198
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 62
                  },
                  "start": {
                    "column": 41,
                    "line": 62
                  }
                }
              },
              "range": [
                2177,
                2198
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 62
                },
                "start": {
                  "column": 41,
                  "line": 62
                }
              }
            }
          },
          "range": [
            2171,
            2198
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 62
            },
            "start": {
              "column": 35,
              "line": 62
            }
          }
        },
        "range": [
          2143,
          2199
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 62
          },
          "start": {
            "column": 7,
            "line": 62
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 63,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2200,
        2309
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterOptionHandler",
          "optional": false,
          "range": [
            2212,
            2231
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 63
            },
            "start": {
              "column": 12,
              "line": 63
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 63
                  },
                  "start": {
                    "column": 64,
                    "line": 63
                  }
                },
                "range": [
                  2264,
                  2280
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2272,
                      2280
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            2273,
                            2279
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 63
                            },
                            "start": {
                              "column": 73,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          2273,
                          2279
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 63
                          },
                          "start": {
                            "column": 73,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 63
                      },
                      "start": {
                        "column": 72,
                        "line": 63
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      2266,
                      2272
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 63
                      },
                      "start": {
                        "column": 66,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2266,
                    2280
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 63
                    },
                    "start": {
                      "column": 66,
                      "line": 63
                    }
                  }
                }
              },
              "range": [
                2258,
                2280
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 63
                },
                "start": {
                  "column": 58,
                  "line": 63
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 63
                  },
                  "start": {
                    "column": 88,
                    "line": 63
                  }
                },
                "range": [
                  2288,
                  2296
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2290,
                    2296
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 63
                    },
                    "start": {
                      "column": 90,
                      "line": 63
                    }
                  }
                }
              },
              "range": [
                2282,
                2296
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 63
                },
                "start": {
                  "column": 82,
                  "line": 63
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 108,
                "line": 63
              },
              "start": {
                "column": 98,
                "line": 63
              }
            },
            "range": [
              2298,
              2308
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                2301,
                2308
              ],
              "loc": {
                "end": {
                  "column": 108,
                  "line": 63
                },
                "start": {
                  "column": 101,
                  "line": 63
                }
              }
            }
          },
          "range": [
            2257,
            2308
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 63
            },
            "start": {
              "column": 57,
              "line": 63
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 63
            },
            "start": {
              "column": 31,
              "line": 63
            }
          },
          "range": [
            2231,
            2254
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    2241,
                    2253
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 63
                    },
                    "start": {
                      "column": 41,
                      "line": 63
                    }
                  }
                },
                "range": [
                  2241,
                  2253
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 63
                  },
                  "start": {
                    "column": 41,
                    "line": 63
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  2232,
                  2238
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 63
                  },
                  "start": {
                    "column": 32,
                    "line": 63
                  }
                }
              },
              "out": false,
              "range": [
                2232,
                2253
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 63
                },
                "start": {
                  "column": 32,
                  "line": 63
                }
              }
            }
          ]
        },
        "range": [
          2207,
          2309
        ],
        "loc": {
          "end": {
            "column": 109,
            "line": 63
          },
          "start": {
            "column": 7,
            "line": 63
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 109,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2310,
        2462
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterOptionsHandler",
          "optional": false,
          "range": [
            2322,
            2342
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 64
            },
            "start": {
              "column": 12,
              "line": 64
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 64
                  },
                  "start": {
                    "column": 66,
                    "line": 64
                  }
                },
                "range": [
                  2376,
                  2393
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2385,
                      2393
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            2386,
                            2392
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 64
                            },
                            "start": {
                              "column": 76,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          2386,
                          2392
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 64
                          },
                          "start": {
                            "column": 76,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 64
                      },
                      "start": {
                        "column": 75,
                        "line": 64
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      2378,
                      2385
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 64
                      },
                      "start": {
                        "column": 68,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    2378,
                    2393
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 64
                    },
                    "start": {
                      "column": 68,
                      "line": 64
                    }
                  }
                }
              },
              "range": [
                2369,
                2393
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 64
                },
                "start": {
                  "column": 59,
                  "line": 64
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 64
                  },
                  "start": {
                    "column": 91,
                    "line": 64
                  }
                },
                "range": [
                  2401,
                  2409
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2403,
                    2409
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 64
                    },
                    "start": {
                      "column": 93,
                      "line": 64
                    }
                  }
                }
              },
              "range": [
                2395,
                2409
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 64
                },
                "start": {
                  "column": 85,
                  "line": 64
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "currentValues",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 131,
                    "line": 64
                  },
                  "start": {
                    "column": 114,
                    "line": 64
                  }
                },
                "range": [
                  2424,
                  2441
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2433,
                      2441
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            2434,
                            2440
                          ],
                          "loc": {
                            "end": {
                              "column": 130,
                              "line": 64
                            },
                            "start": {
                              "column": 124,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          2434,
                          2440
                        ],
                        "loc": {
                          "end": {
                            "column": 130,
                            "line": 64
                          },
                          "start": {
                            "column": 124,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 131,
                        "line": 64
                      },
                      "start": {
                        "column": 123,
                        "line": 64
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      2426,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 123,
                        "line": 64
                      },
                      "start": {
                        "column": 116,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    2426,
                    2441
                  ],
                  "loc": {
                    "end": {
                      "column": 131,
                      "line": 64
                    },
                    "start": {
                      "column": 116,
                      "line": 64
                    }
                  }
                }
              },
              "range": [
                2411,
                2441
              ],
              "loc": {
                "end": {
                  "column": 131,
                  "line": 64
                },
                "start": {
                  "column": 101,
                  "line": 64
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 151,
                "line": 64
              },
              "start": {
                "column": 133,
                "line": 64
              }
            },
            "range": [
              2443,
              2461
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2453,
                  2461
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "range": [
                        2454,
                        2460
                      ],
                      "loc": {
                        "end": {
                          "column": 150,
                          "line": 64
                        },
                        "start": {
                          "column": 144,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      2454,
                      2460
                    ],
                    "loc": {
                      "end": {
                        "column": 150,
                        "line": 64
                      },
                      "start": {
                        "column": 144,
                        "line": 64
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 151,
                    "line": 64
                  },
                  "start": {
                    "column": 143,
                    "line": 64
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "range": [
                  2446,
                  2453
                ],
                "loc": {
                  "end": {
                    "column": 143,
                    "line": 64
                  },
                  "start": {
                    "column": 136,
                    "line": 64
                  }
                }
              },
              "range": [
                2446,
                2461
              ],
              "loc": {
                "end": {
                  "column": 151,
                  "line": 64
                },
                "start": {
                  "column": 136,
                  "line": 64
                }
              }
            }
          },
          "range": [
            2368,
            2461
          ],
          "loc": {
            "end": {
              "column": 151,
              "line": 64
            },
            "start": {
              "column": 58,
              "line": 64
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 64
            },
            "start": {
              "column": 32,
              "line": 64
            }
          },
          "range": [
            2342,
            2365
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    2352,
                    2364
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 64
                    },
                    "start": {
                      "column": 42,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2352,
                  2364
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 64
                  },
                  "start": {
                    "column": 42,
                    "line": 64
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  2343,
                  2349
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 64
                  },
                  "start": {
                    "column": 33,
                    "line": 64
                  }
                }
              },
              "out": false,
              "range": [
                2343,
                2364
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 64
                },
                "start": {
                  "column": 33,
                  "line": 64
                }
              }
            }
          ]
        },
        "range": [
          2317,
          2462
        ],
        "loc": {
          "end": {
            "column": 152,
            "line": 64
          },
          "start": {
            "column": 7,
            "line": 64
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 152,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2463,
        2555
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InputRendererHandler",
          "optional": false,
          "range": [
            2475,
            2495
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 65
            },
            "start": {
              "column": 12,
              "line": 65
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 65
                  },
                  "start": {
                    "column": 41,
                    "line": 65
                  }
                },
                "range": [
                  2504,
                  2528
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 65
                              },
                              "start": {
                                "column": 49,
                                "line": 65
                              }
                            },
                            "range": [
                              2512,
                              2520
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2514,
                                2520
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 65
                                },
                                "start": {
                                  "column": 51,
                                  "line": 65
                                }
                              }
                            }
                          },
                          "range": [
                            2509,
                            2520
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 65
                            },
                            "start": {
                              "column": 46,
                              "line": 65
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
                            "column": 63,
                            "line": 65
                          },
                          "start": {
                            "column": 58,
                            "line": 65
                          }
                        },
                        "range": [
                          2521,
                          2526
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2523,
                            2526
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 65
                            },
                            "start": {
                              "column": 60,
                              "line": 65
                            }
                          }
                        }
                      },
                      "range": [
                        2508,
                        2526
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 65
                        },
                        "start": {
                          "column": 45,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "range": [
                    2506,
                    2528
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 65
                    },
                    "start": {
                      "column": 43,
                      "line": 65
                    }
                  }
                }
              },
              "range": [
                2499,
                2528
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 65
                },
                "start": {
                  "column": 36,
                  "line": 65
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 65
              },
              "start": {
                "column": 67,
                "line": 65
              }
            },
            "range": [
              2530,
              2554
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  2533,
                  2554
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 65
                  },
                  "start": {
                    "column": 70,
                    "line": 65
                  }
                }
              },
              "range": [
                2533,
                2554
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 65
                },
                "start": {
                  "column": 70,
                  "line": 65
                }
              }
            }
          },
          "range": [
            2498,
            2554
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 65
            },
            "start": {
              "column": 35,
              "line": 65
            }
          }
        },
        "range": [
          2470,
          2555
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 65
          },
          "start": {
            "column": 7,
            "line": 65
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 92,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2556,
        2673
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MenuRendererHandler",
          "optional": false,
          "range": [
            2568,
            2587
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 66
            },
            "start": {
              "column": 12,
              "line": 66
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 66
                  },
                  "start": {
                    "column": 63,
                    "line": 66
                  }
                },
                "range": [
                  2619,
                  2646
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2638,
                      2646
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            2639,
                            2645
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 66
                            },
                            "start": {
                              "column": 83,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          2639,
                          2645
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 66
                          },
                          "start": {
                            "column": 83,
                            "line": 66
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 66
                      },
                      "start": {
                        "column": 82,
                        "line": 66
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MenuRendererProps",
                    "optional": false,
                    "range": [
                      2621,
                      2638
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 66
                      },
                      "start": {
                        "column": 65,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    2621,
                    2646
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 66
                    },
                    "start": {
                      "column": 65,
                      "line": 66
                    }
                  }
                }
              },
              "range": [
                2614,
                2646
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 66
                },
                "start": {
                  "column": 58,
                  "line": 66
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 116,
                "line": 66
              },
              "start": {
                "column": 92,
                "line": 66
              }
            },
            "range": [
              2648,
              2672
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  2651,
                  2672
                ],
                "loc": {
                  "end": {
                    "column": 116,
                    "line": 66
                  },
                  "start": {
                    "column": 95,
                    "line": 66
                  }
                }
              },
              "range": [
                2651,
                2672
              ],
              "loc": {
                "end": {
                  "column": 116,
                  "line": 66
                },
                "start": {
                  "column": 95,
                  "line": 66
                }
              }
            }
          },
          "range": [
            2613,
            2672
          ],
          "loc": {
            "end": {
              "column": 116,
              "line": 66
            },
            "start": {
              "column": 57,
              "line": 66
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 66
            },
            "start": {
              "column": 31,
              "line": 66
            }
          },
          "range": [
            2587,
            2610
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    2597,
                    2609
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 66
                    },
                    "start": {
                      "column": 41,
                      "line": 66
                    }
                  }
                },
                "range": [
                  2597,
                  2609
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 66
                  },
                  "start": {
                    "column": 41,
                    "line": 66
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  2588,
                  2594
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 66
                  },
                  "start": {
                    "column": 32,
                    "line": 66
                  }
                }
              },
              "out": false,
              "range": [
                2588,
                2609
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 66
                },
                "start": {
                  "column": 32,
                  "line": 66
                }
              }
            }
          ]
        },
        "range": [
          2563,
          2673
        ],
        "loc": {
          "end": {
            "column": 117,
            "line": 66
          },
          "start": {
            "column": 7,
            "line": 66
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 117,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2674,
        2714
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnCloseHandler",
          "optional": false,
          "range": [
            2686,
            2700
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 67
            },
            "start": {
              "column": 12,
              "line": 67
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
                "column": 39,
                "line": 67
              },
              "start": {
                "column": 32,
                "line": 67
              }
            },
            "range": [
              2706,
              2713
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                2709,
                2713
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 67
                },
                "start": {
                  "column": 35,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2703,
            2713
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 67
            },
            "start": {
              "column": 29,
              "line": 67
            }
          }
        },
        "range": [
          2681,
          2714
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 67
          },
          "start": {
            "column": 7,
            "line": 67
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2715,
        2781
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnInputChangeHandler",
          "optional": false,
          "range": [
            2727,
            2747
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 68
            },
            "start": {
              "column": 12,
              "line": 68
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "inputValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 68
                  },
                  "start": {
                    "column": 46,
                    "line": 68
                  }
                },
                "range": [
                  2761,
                  2769
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2763,
                    2769
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 68
                    },
                    "start": {
                      "column": 48,
                      "line": 68
                    }
                  }
                }
              },
              "range": [
                2751,
                2769
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 68
                },
                "start": {
                  "column": 36,
                  "line": 68
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 68
              },
              "start": {
                "column": 56,
                "line": 68
              }
            },
            "range": [
              2771,
              2780
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                2774,
                2780
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 68
                },
                "start": {
                  "column": 59,
                  "line": 68
                }
              }
            }
          },
          "range": [
            2750,
            2780
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 68
            },
            "start": {
              "column": 35,
              "line": 68
            }
          }
        },
        "range": [
          2722,
          2781
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 68
          },
          "start": {
            "column": 7,
            "line": 68
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 66,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2782,
        2880
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnInputKeyDownHandler",
          "optional": false,
          "range": [
            2794,
            2815
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 69
            },
            "start": {
              "column": 12,
              "line": 69
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2844,
              2879
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "range": [
                        2845,
                        2859
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 69
                        },
                        "start": {
                          "column": 63,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      2845,
                      2859
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 69
                      },
                      "start": {
                        "column": 63,
                        "line": 69
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "range": [
                        2862,
                        2878
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 69
                        },
                        "start": {
                          "column": 80,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      2862,
                      2878
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 69
                      },
                      "start": {
                        "column": 80,
                        "line": 69
                      }
                    }
                  }
                ],
                "range": [
                  2845,
                  2878
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 69
                  },
                  "start": {
                    "column": 63,
                    "line": 69
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 69
              },
              "start": {
                "column": 62,
                "line": 69
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                2818,
                2823
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 69
                },
                "start": {
                  "column": 36,
                  "line": 69
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyboardEventHandler",
              "optional": false,
              "range": [
                2824,
                2844
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 69
                },
                "start": {
                  "column": 42,
                  "line": 69
                }
              }
            },
            "range": [
              2818,
              2844
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 69
              },
              "start": {
                "column": 36,
                "line": 69
              }
            }
          },
          "range": [
            2818,
            2879
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 69
            },
            "start": {
              "column": 36,
              "line": 69
            }
          }
        },
        "range": [
          2789,
          2880
        ],
        "loc": {
          "end": {
            "column": 98,
            "line": 69
          },
          "start": {
            "column": 7,
            "line": 69
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 98,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2881,
        2934
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnMenuScrollToBottomHandler",
          "optional": false,
          "range": [
            2893,
            2920
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 70
            },
            "start": {
              "column": 12,
              "line": 70
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
                "column": 52,
                "line": 70
              },
              "start": {
                "column": 45,
                "line": 70
              }
            },
            "range": [
              2926,
              2933
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                2929,
                2933
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 70
                },
                "start": {
                  "column": 48,
                  "line": 70
                }
              }
            }
          },
          "range": [
            2923,
            2933
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 70
            },
            "start": {
              "column": 42,
              "line": 70
            }
          }
        },
        "range": [
          2888,
          2934
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 70
          },
          "start": {
            "column": 7,
            "line": 70
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2935,
        2974
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnOpenHandler",
          "optional": false,
          "range": [
            2947,
            2960
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 71
            },
            "start": {
              "column": 12,
              "line": 71
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
                "column": 38,
                "line": 71
              },
              "start": {
                "column": 31,
                "line": 71
              }
            },
            "range": [
              2966,
              2973
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                2969,
                2973
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 71
                },
                "start": {
                  "column": 34,
                  "line": 71
                }
              }
            }
          },
          "range": [
            2963,
            2973
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 71
            },
            "start": {
              "column": 28,
              "line": 71
            }
          }
        },
        "range": [
          2942,
          2974
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 71
          },
          "start": {
            "column": 7,
            "line": 71
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2975,
        3063
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnFocusHandler",
          "optional": false,
          "range": [
            2987,
            3001
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 72
            },
            "start": {
              "column": 12,
              "line": 72
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3027,
              3062
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "range": [
                        3028,
                        3042
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 72
                        },
                        "start": {
                          "column": 53,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      3028,
                      3042
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 72
                      },
                      "start": {
                        "column": 53,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "range": [
                        3045,
                        3061
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 72
                        },
                        "start": {
                          "column": 70,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      3045,
                      3061
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 72
                      },
                      "start": {
                        "column": 70,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  3028,
                  3061
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 72
                  },
                  "start": {
                    "column": 53,
                    "line": 72
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 72
              },
              "start": {
                "column": 52,
                "line": 72
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                3004,
                3009
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 72
                },
                "start": {
                  "column": 29,
                  "line": 72
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "range": [
                3010,
                3027
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 72
                },
                "start": {
                  "column": 35,
                  "line": 72
                }
              }
            },
            "range": [
              3004,
              3027
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 72
              },
              "start": {
                "column": 29,
                "line": 72
              }
            }
          },
          "range": [
            3004,
            3062
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 72
            },
            "start": {
              "column": 29,
              "line": 72
            }
          }
        },
        "range": [
          2982,
          3063
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 72
          },
          "start": {
            "column": 7,
            "line": 72
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 88,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3064,
        3151
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnBlurHandler",
          "optional": false,
          "range": [
            3076,
            3089
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 73
            },
            "start": {
              "column": 12,
              "line": 73
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3115,
              3150
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "range": [
                        3116,
                        3130
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 73
                        },
                        "start": {
                          "column": 52,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      3116,
                      3130
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 73
                      },
                      "start": {
                        "column": 52,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "range": [
                        3133,
                        3149
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 73
                        },
                        "start": {
                          "column": 69,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      3133,
                      3149
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 73
                      },
                      "start": {
                        "column": 69,
                        "line": 73
                      }
                    }
                  }
                ],
                "range": [
                  3116,
                  3149
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 73
                  },
                  "start": {
                    "column": 52,
                    "line": 73
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 73
              },
              "start": {
                "column": 51,
                "line": 73
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "range": [
                3092,
                3097
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 73
                },
                "start": {
                  "column": 28,
                  "line": 73
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "range": [
                3098,
                3115
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 73
                },
                "start": {
                  "column": 34,
                  "line": 73
                }
              }
            },
            "range": [
              3092,
              3115
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 73
              },
              "start": {
                "column": 28,
                "line": 73
              }
            }
          },
          "range": [
            3092,
            3150
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 73
            },
            "start": {
              "column": 28,
              "line": 73
            }
          }
        },
        "range": [
          3071,
          3151
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 73
          },
          "start": {
            "column": 7,
            "line": 73
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 87,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3152,
        3261
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionRendererHandler",
          "optional": false,
          "range": [
            3164,
            3185
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 74
            },
            "start": {
              "column": 12,
              "line": 74
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 74
                  },
                  "start": {
                    "column": 66,
                    "line": 74
                  }
                },
                "range": [
                  3218,
                  3234
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3226,
                      3234
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            3227,
                            3233
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 74
                            },
                            "start": {
                              "column": 75,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          3227,
                          3233
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 74
                          },
                          "start": {
                            "column": 75,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 74
                      },
                      "start": {
                        "column": 74,
                        "line": 74
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      3220,
                      3226
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 74
                      },
                      "start": {
                        "column": 68,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    3220,
                    3234
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 74
                    },
                    "start": {
                      "column": 68,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                3212,
                3234
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 74
                },
                "start": {
                  "column": 60,
                  "line": 74
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 108,
                "line": 74
              },
              "start": {
                "column": 84,
                "line": 74
              }
            },
            "range": [
              3236,
              3260
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  3239,
                  3260
                ],
                "loc": {
                  "end": {
                    "column": 108,
                    "line": 74
                  },
                  "start": {
                    "column": 87,
                    "line": 74
                  }
                }
              },
              "range": [
                3239,
                3260
              ],
              "loc": {
                "end": {
                  "column": 108,
                  "line": 74
                },
                "start": {
                  "column": 87,
                  "line": 74
                }
              }
            }
          },
          "range": [
            3211,
            3260
          ],
          "loc": {
            "end": {
              "column": 108,
              "line": 74
            },
            "start": {
              "column": 59,
              "line": 74
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 74
            },
            "start": {
              "column": 33,
              "line": 74
            }
          },
          "range": [
            3185,
            3208
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    3195,
                    3207
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 74
                    },
                    "start": {
                      "column": 43,
                      "line": 74
                    }
                  }
                },
                "range": [
                  3195,
                  3207
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 74
                  },
                  "start": {
                    "column": 43,
                    "line": 74
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  3186,
                  3192
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 74
                  },
                  "start": {
                    "column": 34,
                    "line": 74
                  }
                }
              },
              "out": false,
              "range": [
                3186,
                3207
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 74
                },
                "start": {
                  "column": 34,
                  "line": 74
                }
              }
            }
          ]
        },
        "range": [
          3159,
          3261
        ],
        "loc": {
          "end": {
            "column": 109,
            "line": 74
          },
          "start": {
            "column": 7,
            "line": 74
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 109,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3262,
        3386
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueRendererHandler",
          "optional": false,
          "range": [
            3274,
            3294
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 75
            },
            "start": {
              "column": 12,
              "line": 75
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 75
                  },
                  "start": {
                    "column": 65,
                    "line": 75
                  }
                },
                "range": [
                  3327,
                  3343
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3335,
                      3343
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            3336,
                            3342
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 75
                            },
                            "start": {
                              "column": 74,
                              "line": 75
                            }
                          }
                        },
                        "range": [
                          3336,
                          3342
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 75
                          },
                          "start": {
                            "column": 74,
                            "line": 75
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 75
                      },
                      "start": {
                        "column": 73,
                        "line": 75
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      3329,
                      3335
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 75
                      },
                      "start": {
                        "column": 67,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    3329,
                    3343
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 75
                    },
                    "start": {
                      "column": 67,
                      "line": 75
                    }
                  }
                }
              },
              "range": [
                3321,
                3343
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 75
                },
                "start": {
                  "column": 59,
                  "line": 75
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 75
                  },
                  "start": {
                    "column": 89,
                    "line": 75
                  }
                },
                "range": [
                  3351,
                  3359
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    3353,
                    3359
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 75
                    },
                    "start": {
                      "column": 91,
                      "line": 75
                    }
                  }
                }
              },
              "range": [
                3345,
                3359
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 75
                },
                "start": {
                  "column": 83,
                  "line": 75
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 123,
                "line": 75
              },
              "start": {
                "column": 99,
                "line": 75
              }
            },
            "range": [
              3361,
              3385
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "range": [
                  3364,
                  3385
                ],
                "loc": {
                  "end": {
                    "column": 123,
                    "line": 75
                  },
                  "start": {
                    "column": 102,
                    "line": 75
                  }
                }
              },
              "range": [
                3364,
                3385
              ],
              "loc": {
                "end": {
                  "column": 123,
                  "line": 75
                },
                "start": {
                  "column": 102,
                  "line": 75
                }
              }
            }
          },
          "range": [
            3320,
            3385
          ],
          "loc": {
            "end": {
              "column": 123,
              "line": 75
            },
            "start": {
              "column": 58,
              "line": 75
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 75
            },
            "start": {
              "column": 32,
              "line": 75
            }
          },
          "range": [
            3294,
            3317
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    3304,
                    3316
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 75
                    },
                    "start": {
                      "column": 42,
                      "line": 75
                    }
                  }
                },
                "range": [
                  3304,
                  3316
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 75
                  },
                  "start": {
                    "column": 42,
                    "line": 75
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  3295,
                  3301
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 75
                  },
                  "start": {
                    "column": 33,
                    "line": 75
                  }
                }
              },
              "out": false,
              "range": [
                3295,
                3316
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 75
                },
                "start": {
                  "column": 33,
                  "line": 75
                }
              }
            }
          ]
        },
        "range": [
          3269,
          3386
        ],
        "loc": {
          "end": {
            "column": 124,
            "line": 75
          },
          "start": {
            "column": 7,
            "line": 75
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 124,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3387,
        3521
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnValueClickHandler",
          "optional": false,
          "range": [
            3399,
            3418
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 76
            },
            "start": {
              "column": 12,
              "line": 76
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 76
                  },
                  "start": {
                    "column": 64,
                    "line": 76
                  }
                },
                "range": [
                  3451,
                  3467
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3459,
                      3467
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            3460,
                            3466
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 76
                            },
                            "start": {
                              "column": 73,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          3460,
                          3466
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 76
                          },
                          "start": {
                            "column": 73,
                            "line": 76
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 76
                      },
                      "start": {
                        "column": 72,
                        "line": 76
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      3453,
                      3459
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 76
                      },
                      "start": {
                        "column": 66,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    3453,
                    3467
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 76
                    },
                    "start": {
                      "column": 66,
                      "line": 76
                    }
                  }
                }
              },
              "range": [
                3445,
                3467
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 76
                },
                "start": {
                  "column": 58,
                  "line": 76
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 124,
                    "line": 76
                  },
                  "start": {
                    "column": 87,
                    "line": 76
                  }
                },
                "range": [
                  3474,
                  3511
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3492,
                      3511
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLAnchorElement",
                          "optional": false,
                          "range": [
                            3493,
                            3510
                          ],
                          "loc": {
                            "end": {
                              "column": 123,
                              "line": 76
                            },
                            "start": {
                              "column": 106,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          3493,
                          3510
                        ],
                        "loc": {
                          "end": {
                            "column": 123,
                            "line": 76
                          },
                          "start": {
                            "column": 106,
                            "line": 76
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 124,
                        "line": 76
                      },
                      "start": {
                        "column": 105,
                        "line": 76
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        3476,
                        3481
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 76
                        },
                        "start": {
                          "column": 89,
                          "line": 76
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEvent",
                      "optional": false,
                      "range": [
                        3482,
                        3492
                      ],
                      "loc": {
                        "end": {
                          "column": 105,
                          "line": 76
                        },
                        "start": {
                          "column": 95,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      3476,
                      3492
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 76
                      },
                      "start": {
                        "column": 89,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    3476,
                    3511
                  ],
                  "loc": {
                    "end": {
                      "column": 124,
                      "line": 76
                    },
                    "start": {
                      "column": 89,
                      "line": 76
                    }
                  }
                }
              },
              "range": [
                3469,
                3511
              ],
              "loc": {
                "end": {
                  "column": 124,
                  "line": 76
                },
                "start": {
                  "column": 82,
                  "line": 76
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 133,
                "line": 76
              },
              "start": {
                "column": 126,
                "line": 76
              }
            },
            "range": [
              3513,
              3520
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                3516,
                3520
              ],
              "loc": {
                "end": {
                  "column": 133,
                  "line": 76
                },
                "start": {
                  "column": 129,
                  "line": 76
                }
              }
            }
          },
          "range": [
            3444,
            3520
          ],
          "loc": {
            "end": {
              "column": 133,
              "line": 76
            },
            "start": {
              "column": 57,
              "line": 76
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 76
            },
            "start": {
              "column": 31,
              "line": 76
            }
          },
          "range": [
            3418,
            3441
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    3428,
                    3440
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 76
                    },
                    "start": {
                      "column": 41,
                      "line": 76
                    }
                  }
                },
                "range": [
                  3428,
                  3440
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 76
                  },
                  "start": {
                    "column": 41,
                    "line": 76
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  3419,
                  3425
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 76
                  },
                  "start": {
                    "column": 32,
                    "line": 76
                  }
                }
              },
              "out": false,
              "range": [
                3419,
                3440
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 76
                },
                "start": {
                  "column": 32,
                  "line": 76
                }
              }
            }
          ]
        },
        "range": [
          3394,
          3521
        ],
        "loc": {
          "end": {
            "column": 134,
            "line": 76
          },
          "start": {
            "column": 7,
            "line": 76
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 134,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3522,
        3688
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsOptionUniqueHandler",
          "optional": false,
          "range": [
            3534,
            3555
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 77
            },
            "start": {
              "column": 12,
              "line": 77
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 153,
                    "line": 77
                  },
                  "start": {
                    "column": 63,
                    "line": 77
                  }
                },
                "range": [
                  3585,
                  3675
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "option",
                        "optional": false,
                        "range": [
                          3589,
                          3595
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 77
                          },
                          "start": {
                            "column": 67,
                            "line": 77
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
                            "column": 89,
                            "line": 77
                          },
                          "start": {
                            "column": 73,
                            "line": 77
                          }
                        },
                        "range": [
                          3595,
                          3611
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              3603,
                              3611
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    3604,
                                    3610
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 88,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 82,
                                      "line": 77
                                    }
                                  }
                                },
                                "range": [
                                  3604,
                                  3610
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 77
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 77
                              },
                              "start": {
                                "column": 81,
                                "line": 77
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "range": [
                              3597,
                              3603
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 77
                              },
                              "start": {
                                "column": 75,
                                "line": 77
                              }
                            }
                          },
                          "range": [
                            3597,
                            3611
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 77
                            },
                            "start": {
                              "column": 75,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        3589,
                        3612
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 77
                        },
                        "start": {
                          "column": 67,
                          "line": 77
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "range": [
                          3613,
                          3620
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 77
                          },
                          "start": {
                            "column": 91,
                            "line": 77
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
                            "column": 115,
                            "line": 77
                          },
                          "start": {
                            "column": 98,
                            "line": 77
                          }
                        },
                        "range": [
                          3620,
                          3637
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              3629,
                              3637
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    3630,
                                    3636
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 114,
                                      "line": 77
                                    },
                                    "start": {
                                      "column": 108,
                                      "line": 77
                                    }
                                  }
                                },
                                "range": [
                                  3630,
                                  3636
                                ],
                                "loc": {
                                  "end": {
                                    "column": 114,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 108,
                                    "line": 77
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 115,
                                "line": 77
                              },
                              "start": {
                                "column": 107,
                                "line": 77
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Options",
                            "optional": false,
                            "range": [
                              3622,
                              3629
                            ],
                            "loc": {
                              "end": {
                                "column": 107,
                                "line": 77
                              },
                              "start": {
                                "column": 100,
                                "line": 77
                              }
                            }
                          },
                          "range": [
                            3622,
                            3637
                          ],
                          "loc": {
                            "end": {
                              "column": 115,
                              "line": 77
                            },
                            "start": {
                              "column": 100,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        3613,
                        3638
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 77
                        },
                        "start": {
                          "column": 91,
                          "line": 77
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "range": [
                          3639,
                          3647
                        ],
                        "loc": {
                          "end": {
                            "column": 125,
                            "line": 77
                          },
                          "start": {
                            "column": 117,
                            "line": 77
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
                            "column": 133,
                            "line": 77
                          },
                          "start": {
                            "column": 125,
                            "line": 77
                          }
                        },
                        "range": [
                          3647,
                          3655
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3649,
                            3655
                          ],
                          "loc": {
                            "end": {
                              "column": 133,
                              "line": 77
                            },
                            "start": {
                              "column": 127,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        3639,
                        3656
                      ],
                      "loc": {
                        "end": {
                          "column": 134,
                          "line": 77
                        },
                        "start": {
                          "column": 117,
                          "line": 77
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "range": [
                          3657,
                          3665
                        ],
                        "loc": {
                          "end": {
                            "column": 143,
                            "line": 77
                          },
                          "start": {
                            "column": 135,
                            "line": 77
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
                            "column": 151,
                            "line": 77
                          },
                          "start": {
                            "column": 143,
                            "line": 77
                          }
                        },
                        "range": [
                          3665,
                          3673
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3667,
                            3673
                          ],
                          "loc": {
                            "end": {
                              "column": 151,
                              "line": 77
                            },
                            "start": {
                              "column": 145,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        3657,
                        3673
                      ],
                      "loc": {
                        "end": {
                          "column": 151,
                          "line": 77
                        },
                        "start": {
                          "column": 135,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "range": [
                    3587,
                    3675
                  ],
                  "loc": {
                    "end": {
                      "column": 153,
                      "line": 77
                    },
                    "start": {
                      "column": 65,
                      "line": 77
                    }
                  }
                }
              },
              "range": [
                3582,
                3675
              ],
              "loc": {
                "end": {
                  "column": 153,
                  "line": 77
                },
                "start": {
                  "column": 60,
                  "line": 77
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 165,
                "line": 77
              },
              "start": {
                "column": 155,
                "line": 77
              }
            },
            "range": [
              3677,
              3687
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                3680,
                3687
              ],
              "loc": {
                "end": {
                  "column": 165,
                  "line": 77
                },
                "start": {
                  "column": 158,
                  "line": 77
                }
              }
            }
          },
          "range": [
            3581,
            3687
          ],
          "loc": {
            "end": {
              "column": 165,
              "line": 77
            },
            "start": {
              "column": 59,
              "line": 77
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 77
            },
            "start": {
              "column": 33,
              "line": 77
            }
          },
          "range": [
            3555,
            3578
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    3565,
                    3577
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 77
                    },
                    "start": {
                      "column": 43,
                      "line": 77
                    }
                  }
                },
                "range": [
                  3565,
                  3577
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 77
                  },
                  "start": {
                    "column": 43,
                    "line": 77
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  3556,
                  3562
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 77
                  },
                  "start": {
                    "column": 34,
                    "line": 77
                  }
                }
              },
              "out": false,
              "range": [
                3556,
                3577
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 77
                },
                "start": {
                  "column": 34,
                  "line": 77
                }
              }
            }
          ]
        },
        "range": [
          3529,
          3688
        ],
        "loc": {
          "end": {
            "column": 166,
            "line": 77
          },
          "start": {
            "column": 7,
            "line": 77
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 166,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3689,
        3763
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsValidNewOptionHandler",
          "optional": false,
          "range": [
            3701,
            3724
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 78
            },
            "start": {
              "column": 12,
              "line": 78
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 78
                  },
                  "start": {
                    "column": 42,
                    "line": 78
                  }
                },
                "range": [
                  3731,
                  3750
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "range": [
                          3735,
                          3740
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 78
                          },
                          "start": {
                            "column": 46,
                            "line": 78
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
                            "column": 59,
                            "line": 78
                          },
                          "start": {
                            "column": 51,
                            "line": 78
                          }
                        },
                        "range": [
                          3740,
                          3748
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3742,
                            3748
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 78
                            },
                            "start": {
                              "column": 53,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        3735,
                        3748
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 78
                        },
                        "start": {
                          "column": 46,
                          "line": 78
                        }
                      }
                    }
                  ],
                  "range": [
                    3733,
                    3750
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 78
                    },
                    "start": {
                      "column": 44,
                      "line": 78
                    }
                  }
                }
              },
              "range": [
                3728,
                3750
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 78
                },
                "start": {
                  "column": 39,
                  "line": 78
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 78
              },
              "start": {
                "column": 63,
                "line": 78
              }
            },
            "range": [
              3752,
              3762
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                3755,
                3762
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 78
                },
                "start": {
                  "column": 66,
                  "line": 78
                }
              }
            }
          },
          "range": [
            3727,
            3762
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 78
            },
            "start": {
              "column": 38,
              "line": 78
            }
          }
        },
        "range": [
          3696,
          3763
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 78
          },
          "start": {
            "column": 7,
            "line": 78
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 74,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3764,
        3904
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewOptionCreatorHandler",
          "optional": false,
          "range": [
            3776,
            3799
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 79
            },
            "start": {
              "column": 12,
              "line": 79
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 79
                  },
                  "start": {
                    "column": 65,
                    "line": 79
                  }
                },
                "range": [
                  3829,
                  3884
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "range": [
                          3833,
                          3838
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 79
                          },
                          "start": {
                            "column": 69,
                            "line": 79
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
                            "column": 82,
                            "line": 79
                          },
                          "start": {
                            "column": 74,
                            "line": 79
                          }
                        },
                        "range": [
                          3838,
                          3846
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3840,
                            3846
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 79
                            },
                            "start": {
                              "column": 76,
                              "line": 79
                            }
                          }
                        }
                      },
                      "range": [
                        3833,
                        3847
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 79
                        },
                        "start": {
                          "column": 69,
                          "line": 79
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "range": [
                          3848,
                          3856
                        ],
                        "loc": {
                          "end": {
                            "column": 92,
                            "line": 79
                          },
                          "start": {
                            "column": 84,
                            "line": 79
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
                            "column": 100,
                            "line": 79
                          },
                          "start": {
                            "column": 92,
                            "line": 79
                          }
                        },
                        "range": [
                          3856,
                          3864
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3858,
                            3864
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 79
                            },
                            "start": {
                              "column": 94,
                              "line": 79
                            }
                          }
                        }
                      },
                      "range": [
                        3848,
                        3865
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 79
                        },
                        "start": {
                          "column": 84,
                          "line": 79
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "range": [
                          3866,
                          3874
                        ],
                        "loc": {
                          "end": {
                            "column": 110,
                            "line": 79
                          },
                          "start": {
                            "column": 102,
                            "line": 79
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
                            "column": 118,
                            "line": 79
                          },
                          "start": {
                            "column": 110,
                            "line": 79
                          }
                        },
                        "range": [
                          3874,
                          3882
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3876,
                            3882
                          ],
                          "loc": {
                            "end": {
                              "column": 118,
                              "line": 79
                            },
                            "start": {
                              "column": 112,
                              "line": 79
                            }
                          }
                        }
                      },
                      "range": [
                        3866,
                        3882
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 79
                        },
                        "start": {
                          "column": 102,
                          "line": 79
                        }
                      }
                    }
                  ],
                  "range": [
                    3831,
                    3884
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 79
                    },
                    "start": {
                      "column": 67,
                      "line": 79
                    }
                  }
                }
              },
              "range": [
                3826,
                3884
              ],
              "loc": {
                "end": {
                  "column": 120,
                  "line": 79
                },
                "start": {
                  "column": 62,
                  "line": 79
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 139,
                "line": 79
              },
              "start": {
                "column": 122,
                "line": 79
              }
            },
            "range": [
              3886,
              3903
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3895,
                  3903
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "range": [
                        3896,
                        3902
                      ],
                      "loc": {
                        "end": {
                          "column": 138,
                          "line": 79
                        },
                        "start": {
                          "column": 132,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      3896,
                      3902
                    ],
                    "loc": {
                      "end": {
                        "column": 138,
                        "line": 79
                      },
                      "start": {
                        "column": 132,
                        "line": 79
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 139,
                    "line": 79
                  },
                  "start": {
                    "column": 131,
                    "line": 79
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Option",
                "optional": false,
                "range": [
                  3889,
                  3895
                ],
                "loc": {
                  "end": {
                    "column": 131,
                    "line": 79
                  },
                  "start": {
                    "column": 125,
                    "line": 79
                  }
                }
              },
              "range": [
                3889,
                3903
              ],
              "loc": {
                "end": {
                  "column": 139,
                  "line": 79
                },
                "start": {
                  "column": 125,
                  "line": 79
                }
              }
            }
          },
          "range": [
            3825,
            3903
          ],
          "loc": {
            "end": {
              "column": 139,
              "line": 79
            },
            "start": {
              "column": 61,
              "line": 79
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 79
            },
            "start": {
              "column": 35,
              "line": 79
            }
          },
          "range": [
            3799,
            3822
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    3809,
                    3821
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 79
                    },
                    "start": {
                      "column": 45,
                      "line": 79
                    }
                  }
                },
                "range": [
                  3809,
                  3821
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 79
                  },
                  "start": {
                    "column": 45,
                    "line": 79
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  3800,
                  3806
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 79
                  },
                  "start": {
                    "column": 36,
                    "line": 79
                  }
                }
              },
              "out": false,
              "range": [
                3800,
                3821
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 79
                },
                "start": {
                  "column": 36,
                  "line": 79
                }
              }
            }
          ]
        },
        "range": [
          3771,
          3904
        ],
        "loc": {
          "end": {
            "column": 140,
            "line": 79
          },
          "start": {
            "column": 7,
            "line": 79
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 140,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3905,
        3975
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PromptTextCreatorHandler",
          "optional": false,
          "range": [
            3917,
            3941
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 80
            },
            "start": {
              "column": 12,
              "line": 80
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filterText",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 80
                  },
                  "start": {
                    "column": 50,
                    "line": 80
                  }
                },
                "range": [
                  3955,
                  3963
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    3957,
                    3963
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 80
                    },
                    "start": {
                      "column": 52,
                      "line": 80
                    }
                  }
                }
              },
              "range": [
                3945,
                3963
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 80
                },
                "start": {
                  "column": 40,
                  "line": 80
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 80
              },
              "start": {
                "column": 60,
                "line": 80
              }
            },
            "range": [
              3965,
              3974
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                3968,
                3974
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 80
                },
                "start": {
                  "column": 63,
                  "line": 80
                }
              }
            }
          },
          "range": [
            3944,
            3974
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 80
            },
            "start": {
              "column": 39,
              "line": 80
            }
          }
        },
        "range": [
          3912,
          3975
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 80
          },
          "start": {
            "column": 7,
            "line": 80
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 70,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3976,
        4069
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShouldKeyDownEventCreateNewOptionHandler",
          "optional": false,
          "range": [
            3988,
            4028
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 81
            },
            "start": {
              "column": 12,
              "line": 81
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 81
                  },
                  "start": {
                    "column": 59,
                    "line": 81
                  }
                },
                "range": [
                  4035,
                  4056
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keyCode",
                        "optional": false,
                        "range": [
                          4039,
                          4046
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 81
                          },
                          "start": {
                            "column": 63,
                            "line": 81
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
                            "column": 78,
                            "line": 81
                          },
                          "start": {
                            "column": 70,
                            "line": 81
                          }
                        },
                        "range": [
                          4046,
                          4054
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            4048,
                            4054
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 81
                            },
                            "start": {
                              "column": 72,
                              "line": 81
                            }
                          }
                        }
                      },
                      "range": [
                        4039,
                        4054
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 81
                        },
                        "start": {
                          "column": 63,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "range": [
                    4037,
                    4056
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 81
                    },
                    "start": {
                      "column": 61,
                      "line": 81
                    }
                  }
                }
              },
              "range": [
                4032,
                4056
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 81
                },
                "start": {
                  "column": 56,
                  "line": 81
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 92,
                "line": 81
              },
              "start": {
                "column": 82,
                "line": 81
              }
            },
            "range": [
              4058,
              4068
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                4061,
                4068
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 81
                },
                "start": {
                  "column": 85,
                  "line": 81
                }
              }
            }
          },
          "range": [
            4031,
            4068
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 81
            },
            "start": {
              "column": 55,
              "line": 81
            }
          }
        },
        "range": [
          3983,
          4069
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 81
          },
          "start": {
            "column": 7,
            "line": 81
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 93,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4071,
        4170
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeSingleHandler",
          "optional": false,
          "range": [
            4083,
            4104
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 83
            },
            "start": {
              "column": 12,
              "line": 83
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4145,
              4169
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "range": [
                    4146,
                    4152
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 83
                    },
                    "start": {
                      "column": 75,
                      "line": 83
                    }
                  }
                },
                "range": [
                  4146,
                  4152
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 83
                  },
                  "start": {
                    "column": 75,
                    "line": 83
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4160,
                    4168
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          4161,
                          4167
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 83
                          },
                          "start": {
                            "column": 90,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        4161,
                        4167
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 83
                        },
                        "start": {
                          "column": 90,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 83
                    },
                    "start": {
                      "column": 89,
                      "line": 83
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "range": [
                    4154,
                    4160
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 83
                    },
                    "start": {
                      "column": 83,
                      "line": 83
                    }
                  }
                },
                "range": [
                  4154,
                  4168
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 83
                  },
                  "start": {
                    "column": 83,
                    "line": 83
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 83
              },
              "start": {
                "column": 74,
                "line": 83
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "range": [
              4130,
              4145
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 83
              },
              "start": {
                "column": 59,
                "line": 83
              }
            }
          },
          "range": [
            4130,
            4169
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 83
            },
            "start": {
              "column": 59,
              "line": 83
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 83
            },
            "start": {
              "column": 33,
              "line": 83
            }
          },
          "range": [
            4104,
            4127
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4114,
                    4126
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 83
                    },
                    "start": {
                      "column": 43,
                      "line": 83
                    }
                  }
                },
                "range": [
                  4114,
                  4126
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 83
                  },
                  "start": {
                    "column": 43,
                    "line": 83
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4105,
                  4111
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 83
                  },
                  "start": {
                    "column": 34,
                    "line": 83
                  }
                }
              },
              "out": false,
              "range": [
                4105,
                4126
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 83
                },
                "start": {
                  "column": 34,
                  "line": 83
                }
              }
            }
          ]
        },
        "range": [
          4078,
          4170
        ],
        "loc": {
          "end": {
            "column": 99,
            "line": 83
          },
          "start": {
            "column": 7,
            "line": 83
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 99,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4171,
        4273
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeMultipleHandler",
          "optional": false,
          "range": [
            4183,
            4206
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 84
            },
            "start": {
              "column": 12,
              "line": 84
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4247,
              4272
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "range": [
                    4248,
                    4254
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 84
                    },
                    "start": {
                      "column": 77,
                      "line": 84
                    }
                  }
                },
                "range": [
                  4248,
                  4254
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 84
                  },
                  "start": {
                    "column": 77,
                    "line": 84
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4263,
                    4271
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          4264,
                          4270
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 84
                          },
                          "start": {
                            "column": 93,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        4264,
                        4270
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 84
                        },
                        "start": {
                          "column": 93,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 84
                    },
                    "start": {
                      "column": 92,
                      "line": 84
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "range": [
                    4256,
                    4263
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 84
                    },
                    "start": {
                      "column": 85,
                      "line": 84
                    }
                  }
                },
                "range": [
                  4256,
                  4271
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 84
                  },
                  "start": {
                    "column": 85,
                    "line": 84
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 84
              },
              "start": {
                "column": 76,
                "line": 84
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "range": [
              4232,
              4247
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 84
              },
              "start": {
                "column": 61,
                "line": 84
              }
            }
          },
          "range": [
            4232,
            4272
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 84
            },
            "start": {
              "column": 61,
              "line": 84
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 84
            },
            "start": {
              "column": 35,
              "line": 84
            }
          },
          "range": [
            4206,
            4229
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4216,
                    4228
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 84
                    },
                    "start": {
                      "column": 45,
                      "line": 84
                    }
                  }
                },
                "range": [
                  4216,
                  4228
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 84
                  },
                  "start": {
                    "column": 45,
                    "line": 84
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4207,
                  4213
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 84
                  },
                  "start": {
                    "column": 36,
                    "line": 84
                  }
                }
              },
              "out": false,
              "range": [
                4207,
                4228
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 84
                },
                "start": {
                  "column": 36,
                  "line": 84
                }
              }
            }
          ]
        },
        "range": [
          4178,
          4273
        ],
        "loc": {
          "end": {
            "column": 102,
            "line": 84
          },
          "start": {
            "column": 7,
            "line": 84
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 102,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4274,
        4406
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeHandler",
          "optional": false,
          "range": [
            4286,
            4301
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 85
            },
            "start": {
              "column": 12,
              "line": 85
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "newValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 85
                  },
                  "start": {
                    "column": 106,
                    "line": 85
                  }
                },
                "range": [
                  4380,
                  4396
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOption",
                        "optional": false,
                        "range": [
                          4382,
                          4389
                        ],
                        "loc": {
                          "end": {
                            "column": 115,
                            "line": 85
                          },
                          "start": {
                            "column": 108,
                            "line": 85
                          }
                        }
                      },
                      "range": [
                        4382,
                        4389
                      ],
                      "loc": {
                        "end": {
                          "column": 115,
                          "line": 85
                        },
                        "start": {
                          "column": 108,
                          "line": 85
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        4392,
                        4396
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 85
                        },
                        "start": {
                          "column": 118,
                          "line": 85
                        }
                      }
                    }
                  ],
                  "range": [
                    4382,
                    4396
                  ],
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 85
                    },
                    "start": {
                      "column": 108,
                      "line": 85
                    }
                  }
                }
              },
              "range": [
                4372,
                4396
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 85
                },
                "start": {
                  "column": 98,
                  "line": 85
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 131,
                "line": 85
              },
              "start": {
                "column": 124,
                "line": 85
              }
            },
            "range": [
              4398,
              4405
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                4401,
                4405
              ],
              "loc": {
                "end": {
                  "column": 131,
                  "line": 85
                },
                "start": {
                  "column": 127,
                  "line": 85
                }
              }
            }
          },
          "range": [
            4371,
            4405
          ],
          "loc": {
            "end": {
              "column": 131,
              "line": 85
            },
            "start": {
              "column": 97,
              "line": 85
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 94,
              "line": 85
            },
            "start": {
              "column": 27,
              "line": 85
            }
          },
          "range": [
            4301,
            4368
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4311,
                    4323
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 85
                    },
                    "start": {
                      "column": 37,
                      "line": 85
                    }
                  }
                },
                "range": [
                  4311,
                  4323
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 85
                  },
                  "start": {
                    "column": 37,
                    "line": 85
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4302,
                  4308
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 85
                  },
                  "start": {
                    "column": 28,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                4302,
                4323
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 85
                },
                "start": {
                  "column": 28,
                  "line": 85
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4341,
                        4349
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              4342,
                              4348
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 85
                              },
                              "start": {
                                "column": 68,
                                "line": 85
                              }
                            }
                          },
                          "range": [
                            4342,
                            4348
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 85
                            },
                            "start": {
                              "column": 68,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 85
                        },
                        "start": {
                          "column": 67,
                          "line": 85
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "range": [
                        4335,
                        4341
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 85
                        },
                        "start": {
                          "column": 61,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      4335,
                      4349
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 85
                      },
                      "start": {
                        "column": 61,
                        "line": 85
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4359,
                        4367
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              4360,
                              4366
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 85
                              },
                              "start": {
                                "column": 86,
                                "line": 85
                              }
                            }
                          },
                          "range": [
                            4360,
                            4366
                          ],
                          "loc": {
                            "end": {
                              "column": 92,
                              "line": 85
                            },
                            "start": {
                              "column": 86,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 85
                        },
                        "start": {
                          "column": 85,
                          "line": 85
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "range": [
                        4352,
                        4359
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 85
                        },
                        "start": {
                          "column": 78,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      4352,
                      4367
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 85
                      },
                      "start": {
                        "column": 78,
                        "line": 85
                      }
                    }
                  }
                ],
                "range": [
                  4335,
                  4367
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 85
                  },
                  "start": {
                    "column": 61,
                    "line": 85
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TOption",
                "optional": false,
                "range": [
                  4325,
                  4332
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 85
                  },
                  "start": {
                    "column": 51,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                4325,
                4367
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 85
                },
                "start": {
                  "column": 51,
                  "line": 85
                }
              }
            }
          ]
        },
        "range": [
          4281,
          4406
        ],
        "loc": {
          "end": {
            "column": 132,
            "line": 85
          },
          "start": {
            "column": 7,
            "line": 85
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 132,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4407,
        4501
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnNewOptionClickHandler",
          "optional": false,
          "range": [
            4419,
            4442
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 86
            },
            "start": {
              "column": 12,
              "line": 86
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 86
                  },
                  "start": {
                    "column": 68,
                    "line": 86
                  }
                },
                "range": [
                  4475,
                  4491
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      4483,
                      4491
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            4484,
                            4490
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 86
                            },
                            "start": {
                              "column": 77,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          4484,
                          4490
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 86
                          },
                          "start": {
                            "column": 77,
                            "line": 86
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 86
                      },
                      "start": {
                        "column": 76,
                        "line": 86
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      4477,
                      4483
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 86
                      },
                      "start": {
                        "column": 70,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    4477,
                    4491
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 86
                    },
                    "start": {
                      "column": 70,
                      "line": 86
                    }
                  }
                }
              },
              "range": [
                4469,
                4491
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 86
                },
                "start": {
                  "column": 62,
                  "line": 86
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 93,
                "line": 86
              },
              "start": {
                "column": 86,
                "line": 86
              }
            },
            "range": [
              4493,
              4500
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                4496,
                4500
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 86
                },
                "start": {
                  "column": 89,
                  "line": 86
                }
              }
            }
          },
          "range": [
            4468,
            4500
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 86
            },
            "start": {
              "column": 61,
              "line": 86
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 86
            },
            "start": {
              "column": 35,
              "line": 86
            }
          },
          "range": [
            4442,
            4465
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4452,
                    4464
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 86
                    },
                    "start": {
                      "column": 45,
                      "line": 86
                    }
                  }
                },
                "range": [
                  4452,
                  4464
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 86
                  },
                  "start": {
                    "column": 45,
                    "line": 86
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4443,
                  4449
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 86
                  },
                  "start": {
                    "column": 36,
                    "line": 86
                  }
                }
              },
              "out": false,
              "range": [
                4443,
                4464
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 86
                },
                "start": {
                  "column": 36,
                  "line": 86
                }
              }
            }
          ]
        },
        "range": [
          4414,
          4501
        ],
        "loc": {
          "end": {
            "column": 94,
            "line": 86
          },
          "start": {
            "column": 7,
            "line": 86
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 94,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4503,
        4626
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsHandler",
          "optional": false,
          "range": [
            4515,
            4533
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 88
            },
            "start": {
              "column": 12,
              "line": 88
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4582,
                  4590
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "range": [
                        4583,
                        4589
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 88
                        },
                        "start": {
                          "column": 80,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      4583,
                      4589
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 88
                      },
                      "start": {
                        "column": 80,
                        "line": 88
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 88
                  },
                  "start": {
                    "column": 79,
                    "line": 88
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoadOptionsAsyncHandler",
                "optional": false,
                "range": [
                  4559,
                  4582
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 88
                  },
                  "start": {
                    "column": 56,
                    "line": 88
                  }
                }
              },
              "range": [
                4559,
                4590
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 88
                },
                "start": {
                  "column": 56,
                  "line": 88
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4617,
                  4625
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "range": [
                        4618,
                        4624
                      ],
                      "loc": {
                        "end": {
                          "column": 121,
                          "line": 88
                        },
                        "start": {
                          "column": 115,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      4618,
                      4624
                    ],
                    "loc": {
                      "end": {
                        "column": 121,
                        "line": 88
                      },
                      "start": {
                        "column": 115,
                        "line": 88
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 88
                  },
                  "start": {
                    "column": 114,
                    "line": 88
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoadOptionsLegacyHandler",
                "optional": false,
                "range": [
                  4593,
                  4617
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 88
                  },
                  "start": {
                    "column": 90,
                    "line": 88
                  }
                }
              },
              "range": [
                4593,
                4625
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 88
                },
                "start": {
                  "column": 90,
                  "line": 88
                }
              }
            }
          ],
          "range": [
            4559,
            4625
          ],
          "loc": {
            "end": {
              "column": 122,
              "line": 88
            },
            "start": {
              "column": 56,
              "line": 88
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 88
            },
            "start": {
              "column": 30,
              "line": 88
            }
          },
          "range": [
            4533,
            4556
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4543,
                    4555
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 88
                    },
                    "start": {
                      "column": 40,
                      "line": 88
                    }
                  }
                },
                "range": [
                  4543,
                  4555
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 88
                  },
                  "start": {
                    "column": 40,
                    "line": 88
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4534,
                  4540
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 88
                  },
                  "start": {
                    "column": 31,
                    "line": 88
                  }
                }
              },
              "out": false,
              "range": [
                4534,
                4555
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 88
                },
                "start": {
                  "column": 31,
                  "line": 88
                }
              }
            }
          ]
        },
        "range": [
          4510,
          4626
        ],
        "loc": {
          "end": {
            "column": 123,
            "line": 88
          },
          "start": {
            "column": 7,
            "line": 88
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 123,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4627,
        4743
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsAsyncHandler",
          "optional": false,
          "range": [
            4639,
            4662
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 89
            },
            "start": {
              "column": 12,
              "line": 89
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 75,
                    "line": 89
                  },
                  "start": {
                    "column": 67,
                    "line": 89
                  }
                },
                "range": [
                  4694,
                  4702
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    4696,
                    4702
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 89
                    },
                    "start": {
                      "column": 69,
                      "line": 89
                    }
                  }
                }
              },
              "range": [
                4689,
                4702
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 89
                },
                "start": {
                  "column": 62,
                  "line": 89
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 115,
                "line": 89
              },
              "start": {
                "column": 77,
                "line": 89
              }
            },
            "range": [
              4704,
              4742
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4714,
                  4742
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        4733,
                        4741
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              4734,
                              4740
                            ],
                            "loc": {
                              "end": {
                                "column": 113,
                                "line": 89
                              },
                              "start": {
                                "column": 107,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4734,
                            4740
                          ],
                          "loc": {
                            "end": {
                              "column": 113,
                              "line": 89
                            },
                            "start": {
                              "column": 107,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 89
                        },
                        "start": {
                          "column": 106,
                          "line": 89
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutocompleteResult",
                      "optional": false,
                      "range": [
                        4715,
                        4733
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 89
                        },
                        "start": {
                          "column": 88,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      4715,
                      4741
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 89
                      },
                      "start": {
                        "column": 88,
                        "line": 89
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 89
                  },
                  "start": {
                    "column": 87,
                    "line": 89
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  4707,
                  4714
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 89
                  },
                  "start": {
                    "column": 80,
                    "line": 89
                  }
                }
              },
              "range": [
                4707,
                4742
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 89
                },
                "start": {
                  "column": 80,
                  "line": 89
                }
              }
            }
          },
          "range": [
            4688,
            4742
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 89
            },
            "start": {
              "column": 61,
              "line": 89
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 89
            },
            "start": {
              "column": 35,
              "line": 89
            }
          },
          "range": [
            4662,
            4685
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4672,
                    4684
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 89
                    },
                    "start": {
                      "column": 45,
                      "line": 89
                    }
                  }
                },
                "range": [
                  4672,
                  4684
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 89
                  },
                  "start": {
                    "column": 45,
                    "line": 89
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4663,
                  4669
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 89
                  },
                  "start": {
                    "column": 36,
                    "line": 89
                  }
                }
              },
              "out": false,
              "range": [
                4663,
                4684
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 89
                },
                "start": {
                  "column": 36,
                  "line": 89
                }
              }
            }
          ]
        },
        "range": [
          4634,
          4743
        ],
        "loc": {
          "end": {
            "column": 116,
            "line": 89
          },
          "start": {
            "column": 7,
            "line": 89
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 116,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4744,
        4896
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsLegacyHandler",
          "optional": false,
          "range": [
            4756,
            4780
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 90
            },
            "start": {
              "column": 12,
              "line": 90
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 76,
                    "line": 90
                  },
                  "start": {
                    "column": 68,
                    "line": 90
                  }
                },
                "range": [
                  4812,
                  4820
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    4814,
                    4820
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 90
                    },
                    "start": {
                      "column": 70,
                      "line": 90
                    }
                  }
                }
              },
              "range": [
                4807,
                4820
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 90
                },
                "start": {
                  "column": 63,
                  "line": 90
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 142,
                    "line": 90
                  },
                  "start": {
                    "column": 86,
                    "line": 90
                  }
                },
                "range": [
                  4830,
                  4886
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 90
                          },
                          "start": {
                            "column": 92,
                            "line": 90
                          }
                        },
                        "range": [
                          4836,
                          4841
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            4838,
                            4841
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 90
                            },
                            "start": {
                              "column": 94,
                              "line": 90
                            }
                          }
                        }
                      },
                      "range": [
                        4833,
                        4841
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 90
                        },
                        "start": {
                          "column": 89,
                          "line": 90
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 133,
                            "line": 90
                          },
                          "start": {
                            "column": 105,
                            "line": 90
                          }
                        },
                        "range": [
                          4849,
                          4877
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              4869,
                              4877
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    4870,
                                    4876
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 132,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 126,
                                      "line": 90
                                    }
                                  }
                                },
                                "range": [
                                  4870,
                                  4876
                                ],
                                "loc": {
                                  "end": {
                                    "column": 132,
                                    "line": 90
                                  },
                                  "start": {
                                    "column": 126,
                                    "line": 90
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 133,
                                "line": 90
                              },
                              "start": {
                                "column": 125,
                                "line": 90
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AutocompleteResult",
                            "optional": false,
                            "range": [
                              4851,
                              4869
                            ],
                            "loc": {
                              "end": {
                                "column": 125,
                                "line": 90
                              },
                              "start": {
                                "column": 107,
                                "line": 90
                              }
                            }
                          },
                          "range": [
                            4851,
                            4877
                          ],
                          "loc": {
                            "end": {
                              "column": 133,
                              "line": 90
                            },
                            "start": {
                              "column": 107,
                              "line": 90
                            }
                          }
                        }
                      },
                      "range": [
                        4843,
                        4877
                      ],
                      "loc": {
                        "end": {
                          "column": 133,
                          "line": 90
                        },
                        "start": {
                          "column": 99,
                          "line": 90
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 142,
                        "line": 90
                      },
                      "start": {
                        "column": 135,
                        "line": 90
                      }
                    },
                    "range": [
                      4879,
                      4886
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        4882,
                        4886
                      ],
                      "loc": {
                        "end": {
                          "column": 142,
                          "line": 90
                        },
                        "start": {
                          "column": 138,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    4832,
                    4886
                  ],
                  "loc": {
                    "end": {
                      "column": 142,
                      "line": 90
                    },
                    "start": {
                      "column": 88,
                      "line": 90
                    }
                  }
                }
              },
              "range": [
                4822,
                4886
              ],
              "loc": {
                "end": {
                  "column": 142,
                  "line": 90
                },
                "start": {
                  "column": 78,
                  "line": 90
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 151,
                "line": 90
              },
              "start": {
                "column": 144,
                "line": 90
              }
            },
            "range": [
              4888,
              4895
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                4891,
                4895
              ],
              "loc": {
                "end": {
                  "column": 151,
                  "line": 90
                },
                "start": {
                  "column": 147,
                  "line": 90
                }
              }
            }
          },
          "range": [
            4806,
            4895
          ],
          "loc": {
            "end": {
              "column": 151,
              "line": 90
            },
            "start": {
              "column": 62,
              "line": 90
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 90
            },
            "start": {
              "column": 36,
              "line": 90
            }
          },
          "range": [
            4780,
            4803
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4790,
                    4802
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 90
                    },
                    "start": {
                      "column": 46,
                      "line": 90
                    }
                  }
                },
                "range": [
                  4790,
                  4802
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 90
                  },
                  "start": {
                    "column": 46,
                    "line": 90
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4781,
                  4787
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 90
                  },
                  "start": {
                    "column": 37,
                    "line": 90
                  }
                }
              },
              "out": false,
              "range": [
                4781,
                4802
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 90
                },
                "start": {
                  "column": 37,
                  "line": 90
                }
              }
            }
          ]
        },
        "range": [
          4751,
          4896
        ],
        "loc": {
          "end": {
            "column": 152,
            "line": 90
          },
          "start": {
            "column": 7,
            "line": 90
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 152,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4898,
        5278
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            4957,
            5278
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "range": [
                  5010,
                  5017
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
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
                    "column": 28,
                    "line": 94
                  },
                  "start": {
                    "column": 11,
                    "line": 94
                  }
                },
                "range": [
                  5017,
                  5034
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      5026,
                      5034
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            5027,
                            5033
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 94
                            },
                            "start": {
                              "column": 21,
                              "line": 94
                            }
                          }
                        },
                        "range": [
                          5027,
                          5033
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 94
                          },
                          "start": {
                            "column": 21,
                            "line": 94
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 94
                      },
                      "start": {
                        "column": 20,
                        "line": 94
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      5019,
                      5026
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 94
                      },
                      "start": {
                        "column": 13,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    5019,
                    5034
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 94
                    },
                    "start": {
                      "column": 13,
                      "line": 94
                    }
                  }
                }
              },
              "range": [
                5010,
                5035
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "complete",
                "optional": false,
                "range": [
                  5258,
                  5266
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
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
                    "column": 21,
                    "line": 100
                  },
                  "start": {
                    "column": 12,
                    "line": 100
                  }
                },
                "range": [
                  5266,
                  5275
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    5268,
                    5275
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 100
                    },
                    "start": {
                      "column": 14,
                      "line": 100
                    }
                  }
                }
              },
              "range": [
                5258,
                5276
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 101
            },
            "start": {
              "column": 59,
              "line": 92
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AutocompleteResult",
          "optional": false,
          "range": [
            4915,
            4933
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 92
            },
            "start": {
              "column": 17,
              "line": 92
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 58,
              "line": 92
            },
            "start": {
              "column": 35,
              "line": 92
            }
          },
          "range": [
            4933,
            4956
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    4943,
                    4955
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 92
                    },
                    "start": {
                      "column": 45,
                      "line": 92
                    }
                  }
                },
                "range": [
                  4943,
                  4955
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 92
                  },
                  "start": {
                    "column": 45,
                    "line": 92
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  4934,
                  4940
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 92
                  },
                  "start": {
                    "column": 36,
                    "line": 92
                  }
                }
              },
              "out": false,
              "range": [
                4934,
                4955
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 92
                },
                "start": {
                  "column": 36,
                  "line": 92
                }
              }
            }
          ]
        },
        "range": [
          4905,
          5278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 101
          },
          "start": {
            "column": 7,
            "line": 92
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        5280,
        5347
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Options",
          "optional": false,
          "range": [
            5292,
            5299
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 103
            },
            "start": {
              "column": 12,
              "line": 103
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5330,
              5346
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    5337,
                    5345
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          5338,
                          5344
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 103
                          },
                          "start": {
                            "column": 58,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        5338,
                        5344
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 103
                        },
                        "start": {
                          "column": 58,
                          "line": 103
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 103
                    },
                    "start": {
                      "column": 57,
                      "line": 103
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "range": [
                    5331,
                    5337
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 103
                    },
                    "start": {
                      "column": 51,
                      "line": 103
                    }
                  }
                },
                "range": [
                  5331,
                  5345
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 103
                  },
                  "start": {
                    "column": 51,
                    "line": 103
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 103
              },
              "start": {
                "column": 50,
                "line": 103
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              5325,
              5330
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 103
              },
              "start": {
                "column": 45,
                "line": 103
              }
            }
          },
          "range": [
            5325,
            5346
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 103
            },
            "start": {
              "column": 45,
              "line": 103
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 103
            },
            "start": {
              "column": 19,
              "line": 103
            }
          },
          "range": [
            5299,
            5322
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    5309,
                    5321
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 103
                    },
                    "start": {
                      "column": 29,
                      "line": 103
                    }
                  }
                },
                "range": [
                  5309,
                  5321
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 103
                  },
                  "start": {
                    "column": 29,
                    "line": 103
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  5300,
                  5306
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 103
                  },
                  "start": {
                    "column": 20,
                    "line": 103
                  }
                }
              },
              "out": false,
              "range": [
                5300,
                5321
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 103
                },
                "start": {
                  "column": 20,
                  "line": 103
                }
              }
            }
          ]
        },
        "range": [
          5287,
          5347
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 103
          },
          "start": {
            "column": 7,
            "line": 103
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 67,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        5349,
        5916
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            5396,
            5916
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "label",
                "optional": false,
                "range": [
                  5432,
                  5437
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 107
                  },
                  "start": {
                    "column": 10,
                    "line": 107
                  }
                },
                "range": [
                  5438,
                  5446
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    5440,
                    5446
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 107
                    },
                    "start": {
                      "column": 12,
                      "line": 107
                    }
                  }
                }
              },
              "range": [
                5432,
                5447
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  5483,
                  5488
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 109
                  },
                  "start": {
                    "column": 10,
                    "line": 109
                  }
                },
                "range": [
                  5489,
                  5497
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "range": [
                      5491,
                      5497
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 109
                      },
                      "start": {
                        "column": 12,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    5491,
                    5497
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 109
                    },
                    "start": {
                      "column": 12,
                      "line": 109
                    }
                  }
                }
              },
              "range": [
                5483,
                5498
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 109
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearableValue",
                "optional": false,
                "range": [
                  5579,
                  5593
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 114
                  },
                  "start": {
                    "column": 4,
                    "line": 114
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 114
                  },
                  "start": {
                    "column": 19,
                    "line": 114
                  }
                },
                "range": [
                  5594,
                  5603
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    5596,
                    5603
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 114
                    },
                    "start": {
                      "column": 21,
                      "line": 114
                    }
                  }
                }
              },
              "range": [
                5579,
                5604
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "range": [
                  5694,
                  5702
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 119
                  },
                  "start": {
                    "column": 4,
                    "line": 119
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 119
                  },
                  "start": {
                    "column": 13,
                    "line": 119
                  }
                },
                "range": [
                  5703,
                  5712
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    5705,
                    5712
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 119
                    },
                    "start": {
                      "column": 15,
                      "line": 119
                    }
                  }
                }
              },
              "range": [
                5694,
                5713
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 124
                      },
                      "start": {
                        "column": 13,
                        "line": 124
                      }
                    },
                    "range": [
                      5899,
                      5907
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        5901,
                        5907
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 124
                        },
                        "start": {
                          "column": 15,
                          "line": 124
                        }
                      }
                    }
                  },
                  "range": [
                    5891,
                    5907
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 124
                    },
                    "start": {
                      "column": 5,
                      "line": 124
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
                    "column": 27,
                    "line": 124
                  },
                  "start": {
                    "column": 22,
                    "line": 124
                  }
                },
                "range": [
                  5908,
                  5913
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    5910,
                    5913
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 124
                    },
                    "start": {
                      "column": 24,
                      "line": 124
                    }
                  }
                }
              },
              "range": [
                5890,
                5914
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 125
            },
            "start": {
              "column": 47,
              "line": 105
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "range": [
            5366,
            5372
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 105
            },
            "start": {
              "column": 17,
              "line": 105
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 46,
              "line": 105
            },
            "start": {
              "column": 23,
              "line": 105
            }
          },
          "range": [
            5372,
            5395
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    5382,
                    5394
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 105
                    },
                    "start": {
                      "column": 33,
                      "line": 105
                    }
                  }
                },
                "range": [
                  5382,
                  5394
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 105
                  },
                  "start": {
                    "column": 33,
                    "line": 105
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  5373,
                  5379
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 105
                  },
                  "start": {
                    "column": 24,
                    "line": 105
                  }
                }
              },
              "out": false,
              "range": [
                5373,
                5394
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 105
                },
                "start": {
                  "column": 24,
                  "line": 105
                }
              }
            }
          ]
        },
        "range": [
          5356,
          5916
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 125
          },
          "start": {
            "column": 7,
            "line": 105
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        5918,
        5971
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionValues",
          "optional": false,
          "range": [
            5930,
            5942
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 127
            },
            "start": {
              "column": 12,
              "line": 127
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                5945,
                5951
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 127
                },
                "start": {
                  "column": 27,
                  "line": 127
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                5954,
                5960
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 127
                },
                "start": {
                  "column": 36,
                  "line": 127
                }
              }
            },
            {
              "type": "TSBooleanKeyword",
              "range": [
                5963,
                5970
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 127
                },
                "start": {
                  "column": 45,
                  "line": 127
                }
              }
            }
          ],
          "range": [
            5945,
            5970
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 127
            },
            "start": {
              "column": 27,
              "line": 127
            }
          }
        },
        "range": [
          5925,
          5971
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 127
          },
          "start": {
            "column": 7,
            "line": 127
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 127
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        5973,
        7030
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            6031,
            7030
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "focusedOption",
                "optional": false,
                "range": [
                  6150,
                  6163
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 134
                  },
                  "start": {
                    "column": 4,
                    "line": 134
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
                    "column": 33,
                    "line": 134
                  },
                  "start": {
                    "column": 17,
                    "line": 134
                  }
                },
                "range": [
                  6163,
                  6179
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6171,
                      6179
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6172,
                            6178
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 134
                            },
                            "start": {
                              "column": 26,
                              "line": 134
                            }
                          }
                        },
                        "range": [
                          6172,
                          6178
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 134
                          },
                          "start": {
                            "column": 26,
                            "line": 134
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 134
                      },
                      "start": {
                        "column": 25,
                        "line": 134
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      6165,
                      6171
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 134
                      },
                      "start": {
                        "column": 19,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    6165,
                    6179
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 134
                    },
                    "start": {
                      "column": 19,
                      "line": 134
                    }
                  }
                }
              },
              "range": [
                6150,
                6180
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 134
                },
                "start": {
                  "column": 4,
                  "line": 134
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "range": [
                  6277,
                  6288
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 139
                  },
                  "start": {
                    "column": 4,
                    "line": 139
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
                    "column": 43,
                    "line": 139
                  },
                  "start": {
                    "column": 15,
                    "line": 139
                  }
                },
                "range": [
                  6288,
                  6316
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6308,
                      6316
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6309,
                            6315
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 139
                            },
                            "start": {
                              "column": 36,
                              "line": 139
                            }
                          }
                        },
                        "range": [
                          6309,
                          6315
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 139
                          },
                          "start": {
                            "column": 36,
                            "line": 139
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 139
                      },
                      "start": {
                        "column": 35,
                        "line": 139
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FocusOptionHandler",
                    "optional": false,
                    "range": [
                      6290,
                      6308
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 139
                      },
                      "start": {
                        "column": 17,
                        "line": 139
                      }
                    }
                  },
                  "range": [
                    6290,
                    6316
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 139
                    },
                    "start": {
                      "column": 17,
                      "line": 139
                    }
                  }
                }
              },
              "range": [
                6277,
                6317
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 139
                },
                "start": {
                  "column": 4,
                  "line": 139
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "range": [
                  6397,
                  6405
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 144
                  },
                  "start": {
                    "column": 4,
                    "line": 144
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
                    "column": 20,
                    "line": 144
                  },
                  "start": {
                    "column": 12,
                    "line": 144
                  }
                },
                "range": [
                  6405,
                  6413
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    6407,
                    6413
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 144
                    },
                    "start": {
                      "column": 14,
                      "line": 144
                    }
                  }
                }
              },
              "range": [
                6397,
                6414
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 144
                },
                "start": {
                  "column": 4,
                  "line": 144
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "range": [
                  6479,
                  6486
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 149
                  },
                  "start": {
                    "column": 4,
                    "line": 149
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
                    "column": 28,
                    "line": 149
                  },
                  "start": {
                    "column": 11,
                    "line": 149
                  }
                },
                "range": [
                  6486,
                  6503
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6495,
                      6503
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6496,
                            6502
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 149
                            },
                            "start": {
                              "column": 21,
                              "line": 149
                            }
                          }
                        },
                        "range": [
                          6496,
                          6502
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 149
                          },
                          "start": {
                            "column": 21,
                            "line": 149
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 149
                      },
                      "start": {
                        "column": 20,
                        "line": 149
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      6488,
                      6495
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 149
                      },
                      "start": {
                        "column": 13,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    6488,
                    6503
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 149
                    },
                    "start": {
                      "column": 13,
                      "line": 149
                    }
                  }
                }
              },
              "range": [
                6479,
                6504
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 149
                },
                "start": {
                  "column": 4,
                  "line": 149
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "range": [
                  6602,
                  6613
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 154
                  },
                  "start": {
                    "column": 4,
                    "line": 154
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
                    "column": 43,
                    "line": 154
                  },
                  "start": {
                    "column": 15,
                    "line": 154
                  }
                },
                "range": [
                  6613,
                  6641
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6633,
                      6641
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6634,
                            6640
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 154
                            },
                            "start": {
                              "column": 36,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          6634,
                          6640
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 154
                          },
                          "start": {
                            "column": 36,
                            "line": 154
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 154
                      },
                      "start": {
                        "column": 35,
                        "line": 154
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "range": [
                      6615,
                      6633
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 154
                      },
                      "start": {
                        "column": 17,
                        "line": 154
                      }
                    }
                  },
                  "range": [
                    6615,
                    6641
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 154
                    },
                    "start": {
                      "column": 17,
                      "line": 154
                    }
                  }
                }
              },
              "range": [
                6602,
                6642
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 154
                },
                "start": {
                  "column": 4,
                  "line": 154
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueArray",
                "optional": false,
                "range": [
                  6708,
                  6718
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 159
                  },
                  "start": {
                    "column": 4,
                    "line": 159
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
                    "column": 31,
                    "line": 159
                  },
                  "start": {
                    "column": 14,
                    "line": 159
                  }
                },
                "range": [
                  6718,
                  6735
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6727,
                      6735
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6728,
                            6734
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 159
                            },
                            "start": {
                              "column": 24,
                              "line": 159
                            }
                          }
                        },
                        "range": [
                          6728,
                          6734
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 159
                          },
                          "start": {
                            "column": 24,
                            "line": 159
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 159
                      },
                      "start": {
                        "column": 23,
                        "line": 159
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      6720,
                      6727
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 159
                      },
                      "start": {
                        "column": 16,
                        "line": 159
                      }
                    }
                  },
                  "range": [
                    6720,
                    6735
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 159
                    },
                    "start": {
                      "column": 16,
                      "line": 159
                    }
                  }
                }
              },
              "range": [
                6708,
                6736
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 159
                },
                "start": {
                  "column": 4,
                  "line": 159
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "range": [
                  6843,
                  6854
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 164
                  },
                  "start": {
                    "column": 4,
                    "line": 164
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
                    "column": 43,
                    "line": 164
                  },
                  "start": {
                    "column": 15,
                    "line": 164
                  }
                },
                "range": [
                  6854,
                  6882
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6874,
                      6882
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            6875,
                            6881
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 164
                            },
                            "start": {
                              "column": 36,
                              "line": 164
                            }
                          }
                        },
                        "range": [
                          6875,
                          6881
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 164
                          },
                          "start": {
                            "column": 36,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 164
                      },
                      "start": {
                        "column": 35,
                        "line": 164
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "range": [
                      6856,
                      6874
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 164
                      },
                      "start": {
                        "column": 17,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    6856,
                    6882
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 164
                    },
                    "start": {
                      "column": 17,
                      "line": 164
                    }
                  }
                }
              },
              "range": [
                6843,
                6883
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 164
                },
                "start": {
                  "column": 4,
                  "line": 164
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "range": [
                  6982,
                  6996
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 169
                  },
                  "start": {
                    "column": 4,
                    "line": 169
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
                    "column": 49,
                    "line": 169
                  },
                  "start": {
                    "column": 18,
                    "line": 169
                  }
                },
                "range": [
                  6996,
                  7027
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      7019,
                      7027
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            7020,
                            7026
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 169
                            },
                            "start": {
                              "column": 42,
                              "line": 169
                            }
                          }
                        },
                        "range": [
                          7020,
                          7026
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 169
                          },
                          "start": {
                            "column": 42,
                            "line": 169
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 169
                      },
                      "start": {
                        "column": 41,
                        "line": 169
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "range": [
                      6998,
                      7019
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 169
                      },
                      "start": {
                        "column": 20,
                        "line": 169
                      }
                    }
                  },
                  "range": [
                    6998,
                    7027
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 169
                    },
                    "start": {
                      "column": 20,
                      "line": 169
                    }
                  }
                }
              },
              "range": [
                6982,
                7028
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 169
                },
                "start": {
                  "column": 4,
                  "line": 169
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 170
            },
            "start": {
              "column": 58,
              "line": 129
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MenuRendererProps",
          "optional": false,
          "range": [
            5990,
            6007
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 129
            },
            "start": {
              "column": 17,
              "line": 129
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 57,
              "line": 129
            },
            "start": {
              "column": 34,
              "line": 129
            }
          },
          "range": [
            6007,
            6030
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    6017,
                    6029
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 129
                    },
                    "start": {
                      "column": 44,
                      "line": 129
                    }
                  }
                },
                "range": [
                  6017,
                  6029
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 129
                  },
                  "start": {
                    "column": 44,
                    "line": 129
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  6008,
                  6014
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 129
                  },
                  "start": {
                    "column": 35,
                    "line": 129
                  }
                }
              },
              "out": false,
              "range": [
                6008,
                6029
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 129
                },
                "start": {
                  "column": 35,
                  "line": 129
                }
              }
            }
          ]
        },
        "range": [
          5980,
          7030
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 7,
            "line": 129
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        7032,
        8392
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            7093,
            8392
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "range": [
                  7169,
                  7178
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 176
                  },
                  "start": {
                    "column": 4,
                    "line": 176
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 176
                  },
                  "start": {
                    "column": 14,
                    "line": 176
                  }
                },
                "range": [
                  7179,
                  7187
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    7181,
                    7187
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 176
                    },
                    "start": {
                      "column": 16,
                      "line": 176
                    }
                  }
                }
              },
              "range": [
                7169,
                7188
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 176
                },
                "start": {
                  "column": 4,
                  "line": 176
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "range": [
                  7243,
                  7254
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 181
                  },
                  "start": {
                    "column": 4,
                    "line": 181
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 181
                  },
                  "start": {
                    "column": 16,
                    "line": 181
                  }
                },
                "range": [
                  7255,
                  7271
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      7263,
                      7271
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            7264,
                            7270
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 181
                            },
                            "start": {
                              "column": 25,
                              "line": 181
                            }
                          }
                        },
                        "range": [
                          7264,
                          7270
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 181
                          },
                          "start": {
                            "column": 25,
                            "line": 181
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 181
                      },
                      "start": {
                        "column": 24,
                        "line": 181
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      7257,
                      7263
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 181
                      },
                      "start": {
                        "column": 18,
                        "line": 181
                      }
                    }
                  },
                  "range": [
                    7257,
                    7271
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 181
                    },
                    "start": {
                      "column": 18,
                      "line": 181
                    }
                  }
                }
              },
              "range": [
                7243,
                7272
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 181
                },
                "start": {
                  "column": 4,
                  "line": 181
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputValue",
                "optional": false,
                "range": [
                  7278,
                  7288
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 183
                  },
                  "start": {
                    "column": 4,
                    "line": 183
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 183
                  },
                  "start": {
                    "column": 15,
                    "line": 183
                  }
                },
                "range": [
                  7289,
                  7297
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    7291,
                    7297
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 183
                    },
                    "start": {
                      "column": 17,
                      "line": 183
                    }
                  }
                }
              },
              "range": [
                7278,
                7298
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 183
                },
                "start": {
                  "column": 4,
                  "line": 183
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "range": [
                  7303,
                  7317
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 184
                  },
                  "start": {
                    "column": 4,
                    "line": 184
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 184
                  },
                  "start": {
                    "column": 19,
                    "line": 184
                  }
                },
                "range": [
                  7318,
                  7326
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    7320,
                    7326
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 184
                    },
                    "start": {
                      "column": 21,
                      "line": 184
                    }
                  }
                }
              },
              "range": [
                7303,
                7327
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 184
                },
                "start": {
                  "column": 4,
                  "line": 184
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDisabled",
                "optional": false,
                "range": [
                  7389,
                  7399
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 189
                  },
                  "start": {
                    "column": 4,
                    "line": 189
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 189
                  },
                  "start": {
                    "column": 15,
                    "line": 189
                  }
                },
                "range": [
                  7400,
                  7409
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    7402,
                    7409
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 189
                    },
                    "start": {
                      "column": 17,
                      "line": 189
                    }
                  }
                }
              },
              "range": [
                7389,
                7410
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 189
                },
                "start": {
                  "column": 4,
                  "line": 189
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFocused",
                "optional": false,
                "range": [
                  7471,
                  7480
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 194
                  },
                  "start": {
                    "column": 4,
                    "line": 194
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 194
                  },
                  "start": {
                    "column": 14,
                    "line": 194
                  }
                },
                "range": [
                  7481,
                  7490
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    7483,
                    7490
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 194
                    },
                    "start": {
                      "column": 16,
                      "line": 194
                    }
                  }
                }
              },
              "range": [
                7471,
                7491
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 194
                },
                "start": {
                  "column": 4,
                  "line": 194
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSelected",
                "optional": false,
                "range": [
                  7553,
                  7563
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 199
                  },
                  "start": {
                    "column": 4,
                    "line": 199
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 199
                  },
                  "start": {
                    "column": 15,
                    "line": 199
                  }
                },
                "range": [
                  7564,
                  7573
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    7566,
                    7573
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 199
                    },
                    "start": {
                      "column": 17,
                      "line": 199
                    }
                  }
                }
              },
              "range": [
                7553,
                7574
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 199
                },
                "start": {
                  "column": 4,
                  "line": 199
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "range": [
                  7655,
                  7662
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 204
                  },
                  "start": {
                    "column": 4,
                    "line": 204
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 204
                  },
                  "start": {
                    "column": 12,
                    "line": 204
                  }
                },
                "range": [
                  7663,
                  7709
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 204
                          },
                          "start": {
                            "column": 21,
                            "line": 204
                          }
                        },
                        "range": [
                          7672,
                          7688
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              7680,
                              7688
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    7681,
                                    7687
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 204
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 204
                                    }
                                  }
                                },
                                "range": [
                                  7681,
                                  7687
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 204
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 204
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 204
                              },
                              "start": {
                                "column": 29,
                                "line": 204
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "range": [
                              7674,
                              7680
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 204
                              },
                              "start": {
                                "column": 23,
                                "line": 204
                              }
                            }
                          },
                          "range": [
                            7674,
                            7688
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 204
                            },
                            "start": {
                              "column": 23,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        7666,
                        7688
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 204
                        },
                        "start": {
                          "column": 15,
                          "line": 204
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 204
                          },
                          "start": {
                            "column": 44,
                            "line": 204
                          }
                        },
                        "range": [
                          7695,
                          7700
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            7697,
                            7700
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 204
                            },
                            "start": {
                              "column": 46,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        7690,
                        7700
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 204
                        },
                        "start": {
                          "column": 39,
                          "line": 204
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 204
                      },
                      "start": {
                        "column": 51,
                        "line": 204
                      }
                    },
                    "range": [
                      7702,
                      7709
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        7705,
                        7709
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 204
                        },
                        "start": {
                          "column": 54,
                          "line": 204
                        }
                      }
                    }
                  },
                  "range": [
                    7665,
                    7709
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 204
                    },
                    "start": {
                      "column": 14,
                      "line": 204
                    }
                  }
                }
              },
              "range": [
                7655,
                7710
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 204
                },
                "start": {
                  "column": 4,
                  "line": 204
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSelect",
                "optional": false,
                "range": [
                  7792,
                  7800
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 209
                  },
                  "start": {
                    "column": 4,
                    "line": 209
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 209
                  },
                  "start": {
                    "column": 13,
                    "line": 209
                  }
                },
                "range": [
                  7801,
                  7847
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 209
                          },
                          "start": {
                            "column": 22,
                            "line": 209
                          }
                        },
                        "range": [
                          7810,
                          7826
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              7818,
                              7826
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    7819,
                                    7825
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 209
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 209
                                    }
                                  }
                                },
                                "range": [
                                  7819,
                                  7825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 209
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 209
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 209
                              },
                              "start": {
                                "column": 30,
                                "line": 209
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "range": [
                              7812,
                              7818
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 209
                              },
                              "start": {
                                "column": 24,
                                "line": 209
                              }
                            }
                          },
                          "range": [
                            7812,
                            7826
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 209
                            },
                            "start": {
                              "column": 24,
                              "line": 209
                            }
                          }
                        }
                      },
                      "range": [
                        7804,
                        7826
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 209
                        },
                        "start": {
                          "column": 16,
                          "line": 209
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 209
                          },
                          "start": {
                            "column": 45,
                            "line": 209
                          }
                        },
                        "range": [
                          7833,
                          7838
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            7835,
                            7838
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 209
                            },
                            "start": {
                              "column": 47,
                              "line": 209
                            }
                          }
                        }
                      },
                      "range": [
                        7828,
                        7838
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 209
                        },
                        "start": {
                          "column": 40,
                          "line": 209
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 209
                      },
                      "start": {
                        "column": 52,
                        "line": 209
                      }
                    },
                    "range": [
                      7840,
                      7847
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        7843,
                        7847
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 209
                        },
                        "start": {
                          "column": 55,
                          "line": 209
                        }
                      }
                    }
                  },
                  "range": [
                    7803,
                    7847
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 209
                    },
                    "start": {
                      "column": 15,
                      "line": 209
                    }
                  }
                }
              },
              "range": [
                7792,
                7848
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 209
                },
                "start": {
                  "column": 4,
                  "line": 209
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "option",
                "optional": false,
                "range": [
                  7918,
                  7924
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 214
                  },
                  "start": {
                    "column": 4,
                    "line": 214
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
                    "line": 214
                  },
                  "start": {
                    "column": 10,
                    "line": 214
                  }
                },
                "range": [
                  7924,
                  7940
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      7932,
                      7940
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            7933,
                            7939
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 214
                            },
                            "start": {
                              "column": 19,
                              "line": 214
                            }
                          }
                        },
                        "range": [
                          7933,
                          7939
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 214
                          },
                          "start": {
                            "column": 19,
                            "line": 214
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 214
                      },
                      "start": {
                        "column": 18,
                        "line": 214
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      7926,
                      7932
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 214
                      },
                      "start": {
                        "column": 12,
                        "line": 214
                      }
                    }
                  },
                  "range": [
                    7926,
                    7940
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 214
                    },
                    "start": {
                      "column": 12,
                      "line": 214
                    }
                  }
                }
              },
              "range": [
                7918,
                7941
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 214
                },
                "start": {
                  "column": 4,
                  "line": 214
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionIndex",
                "optional": false,
                "range": [
                  8017,
                  8028
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 219
                  },
                  "start": {
                    "column": 4,
                    "line": 219
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 219
                  },
                  "start": {
                    "column": 16,
                    "line": 219
                  }
                },
                "range": [
                  8029,
                  8037
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    8031,
                    8037
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 219
                    },
                    "start": {
                      "column": 18,
                      "line": 219
                    }
                  }
                }
              },
              "range": [
                8017,
                8038
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 219
                },
                "start": {
                  "column": 4,
                  "line": 219
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "range": [
                  8182,
                  8193
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 225
                  },
                  "start": {
                    "column": 4,
                    "line": 225
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 225
                  },
                  "start": {
                    "column": 16,
                    "line": 225
                  }
                },
                "range": [
                  8194,
                  8230
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 225
                          },
                          "start": {
                            "column": 24,
                            "line": 225
                          }
                        },
                        "range": [
                          8202,
                          8221
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "range": [
                                  8204,
                                  8210
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 225
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 225
                                  }
                                }
                              },
                              "range": [
                                8204,
                                8210
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 225
                                },
                                "start": {
                                  "column": 26,
                                  "line": 225
                                }
                              }
                            },
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    8213,
                                    8219
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 225
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 225
                                    }
                                  }
                                },
                                "range": [
                                  8213,
                                  8219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 225
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 225
                                  }
                                }
                              },
                              "range": [
                                8213,
                                8221
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 225
                                },
                                "start": {
                                  "column": 35,
                                  "line": 225
                                }
                              }
                            }
                          ],
                          "range": [
                            8204,
                            8221
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 225
                            },
                            "start": {
                              "column": 26,
                              "line": 225
                            }
                          }
                        }
                      },
                      "range": [
                        8197,
                        8221
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 225
                        },
                        "start": {
                          "column": 19,
                          "line": 225
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 225
                      },
                      "start": {
                        "column": 45,
                        "line": 225
                      }
                    },
                    "range": [
                      8223,
                      8230
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        8226,
                        8230
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 225
                        },
                        "start": {
                          "column": 48,
                          "line": 225
                        }
                      }
                    }
                  },
                  "range": [
                    8196,
                    8230
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 225
                    },
                    "start": {
                      "column": 18,
                      "line": 225
                    }
                  }
                }
              },
              "range": [
                8182,
                8231
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 225
                },
                "start": {
                  "column": 4,
                  "line": 225
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "range": [
                  8341,
                  8352
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 230
                  },
                  "start": {
                    "column": 4,
                    "line": 230
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 230
                  },
                  "start": {
                    "column": 16,
                    "line": 230
                  }
                },
                "range": [
                  8353,
                  8389
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 230
                          },
                          "start": {
                            "column": 24,
                            "line": 230
                          }
                        },
                        "range": [
                          8361,
                          8380
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "range": [
                                  8363,
                                  8369
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 230
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 230
                                  }
                                }
                              },
                              "range": [
                                8363,
                                8369
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 230
                                },
                                "start": {
                                  "column": 26,
                                  "line": 230
                                }
                              }
                            },
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    8372,
                                    8378
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 230
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 230
                                    }
                                  }
                                },
                                "range": [
                                  8372,
                                  8378
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 230
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 230
                                  }
                                }
                              },
                              "range": [
                                8372,
                                8380
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 230
                                },
                                "start": {
                                  "column": 35,
                                  "line": 230
                                }
                              }
                            }
                          ],
                          "range": [
                            8363,
                            8380
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 230
                            },
                            "start": {
                              "column": 26,
                              "line": 230
                            }
                          }
                        }
                      },
                      "range": [
                        8356,
                        8380
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 230
                        },
                        "start": {
                          "column": 19,
                          "line": 230
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 230
                      },
                      "start": {
                        "column": 45,
                        "line": 230
                      }
                    },
                    "range": [
                      8382,
                      8389
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        8385,
                        8389
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 230
                        },
                        "start": {
                          "column": 48,
                          "line": 230
                        }
                      }
                    }
                  },
                  "range": [
                    8355,
                    8389
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 230
                    },
                    "start": {
                      "column": 18,
                      "line": 230
                    }
                  }
                }
              },
              "range": [
                8341,
                8390
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 230
                },
                "start": {
                  "column": 4,
                  "line": 230
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 231
            },
            "start": {
              "column": 61,
              "line": 172
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionComponentProps",
          "optional": false,
          "range": [
            7049,
            7069
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 172
            },
            "start": {
              "column": 17,
              "line": 172
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 60,
              "line": 172
            },
            "start": {
              "column": 37,
              "line": 172
            }
          },
          "range": [
            7069,
            7092
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    7079,
                    7091
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 172
                    },
                    "start": {
                      "column": 47,
                      "line": 172
                    }
                  }
                },
                "range": [
                  7079,
                  7091
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 172
                  },
                  "start": {
                    "column": 47,
                    "line": 172
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  7070,
                  7076
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 172
                  },
                  "start": {
                    "column": 38,
                    "line": 172
                  }
                }
              },
              "out": false,
              "range": [
                7070,
                7091
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 172
                },
                "start": {
                  "column": 38,
                  "line": 172
                }
              }
            }
          ]
        },
        "range": [
          7039,
          8392
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 231
          },
          "start": {
            "column": 7,
            "line": 172
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 231
        },
        "start": {
          "column": 0,
          "line": 172
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        8394,
        8615
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            8430,
            8615
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onMouseDown",
                "optional": false,
                "range": [
                  8491,
                  8502
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 237
                  },
                  "start": {
                    "column": 4,
                    "line": 237
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
                    "column": 45,
                    "line": 237
                  },
                  "start": {
                    "column": 15,
                    "line": 237
                  }
                },
                "range": [
                  8502,
                  8532
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      8527,
                      8532
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          8528,
                          8531
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 237
                          },
                          "start": {
                            "column": 41,
                            "line": 237
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 237
                      },
                      "start": {
                        "column": 40,
                        "line": 237
                      }
                    }
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        8504,
                        8509
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 237
                        },
                        "start": {
                          "column": 17,
                          "line": 237
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "range": [
                        8510,
                        8527
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 237
                        },
                        "start": {
                          "column": 23,
                          "line": 237
                        }
                      }
                    },
                    "range": [
                      8504,
                      8527
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 237
                      },
                      "start": {
                        "column": 17,
                        "line": 237
                      }
                    }
                  },
                  "range": [
                    8504,
                    8532
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 237
                    },
                    "start": {
                      "column": 17,
                      "line": 237
                    }
                  }
                }
              },
              "range": [
                8491,
                8533
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 237
                },
                "start": {
                  "column": 4,
                  "line": 237
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isOpen",
                "optional": false,
                "range": [
                  8597,
                  8603
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 242
                  },
                  "start": {
                    "column": 4,
                    "line": 242
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
                    "column": 19,
                    "line": 242
                  },
                  "start": {
                    "column": 10,
                    "line": 242
                  }
                },
                "range": [
                  8603,
                  8612
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    8605,
                    8612
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 242
                    },
                    "start": {
                      "column": 12,
                      "line": 242
                    }
                  }
                }
              },
              "range": [
                8597,
                8613
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 242
                },
                "start": {
                  "column": 4,
                  "line": 242
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 243
            },
            "start": {
              "column": 36,
              "line": 233
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArrowRendererProps",
          "optional": false,
          "range": [
            8411,
            8429
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 233
            },
            "start": {
              "column": 17,
              "line": 233
            }
          }
        },
        "range": [
          8401,
          8615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 243
          },
          "start": {
            "column": 7,
            "line": 233
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 243
        },
        "start": {
          "column": 0,
          "line": 233
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        8617,
        8989
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            8677,
            8989
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "range": [
                  8683,
                  8691
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 246
                  },
                  "start": {
                    "column": 4,
                    "line": 246
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
                    "column": 50,
                    "line": 246
                  },
                  "start": {
                    "column": 12,
                    "line": 246
                  }
                },
                "range": [
                  8691,
                  8729
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'disabled'",
                      "value": "disabled",
                      "range": [
                        8718,
                        8728
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 246
                        },
                        "start": {
                          "column": 39,
                          "line": 246
                        }
                      }
                    },
                    "range": [
                      8718,
                      8728
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 246
                      },
                      "start": {
                        "column": 39,
                        "line": 246
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        8709,
                        8717
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              8710,
                              8716
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 246
                              },
                              "start": {
                                "column": 31,
                                "line": 246
                              }
                            }
                          },
                          "range": [
                            8710,
                            8716
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 246
                            },
                            "start": {
                              "column": 31,
                              "line": 246
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 246
                        },
                        "start": {
                          "column": 30,
                          "line": 246
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "range": [
                        8693,
                        8709
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 246
                        },
                        "start": {
                          "column": 14,
                          "line": 246
                        }
                      }
                    },
                    "range": [
                      8693,
                      8717
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 246
                      },
                      "start": {
                        "column": 14,
                        "line": 246
                      }
                    }
                  },
                  "range": [
                    8693,
                    8729
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 246
                    },
                    "start": {
                      "column": 14,
                      "line": 246
                    }
                  }
                }
              },
              "range": [
                8683,
                8730
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 246
                },
                "start": {
                  "column": 4,
                  "line": 246
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  8735,
                  8737
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 247
                  },
                  "start": {
                    "column": 4,
                    "line": 247
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
                    "column": 14,
                    "line": 247
                  },
                  "start": {
                    "column": 6,
                    "line": 247
                  }
                },
                "range": [
                  8737,
                  8745
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    8739,
                    8745
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 247
                    },
                    "start": {
                      "column": 8,
                      "line": 247
                    }
                  }
                }
              },
              "range": [
                8735,
                8746
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 247
                },
                "start": {
                  "column": 4,
                  "line": 247
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "range": [
                  8751,
                  8765
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 248
                  },
                  "start": {
                    "column": 4,
                    "line": 248
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
                    "line": 248
                  },
                  "start": {
                    "column": 18,
                    "line": 248
                  }
                },
                "range": [
                  8765,
                  8773
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    8767,
                    8773
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 248
                    },
                    "start": {
                      "column": 20,
                      "line": 248
                    }
                  }
                }
              },
              "range": [
                8751,
                8774
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 248
                },
                "start": {
                  "column": 4,
                  "line": 248
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "range": [
                  8779,
                  8786
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 249
                  },
                  "start": {
                    "column": 4,
                    "line": 249
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
                    "column": 47,
                    "line": 249
                  },
                  "start": {
                    "column": 11,
                    "line": 249
                  }
                },
                "range": [
                  8786,
                  8822
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          8807,
                          8815
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                8808,
                                8814
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 249
                                },
                                "start": {
                                  "column": 33,
                                  "line": 249
                                }
                              }
                            },
                            "range": [
                              8808,
                              8814
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 249
                              },
                              "start": {
                                "column": 33,
                                "line": 249
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 249
                          },
                          "start": {
                            "column": 32,
                            "line": 249
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OnValueClickHandler",
                        "optional": false,
                        "range": [
                          8788,
                          8807
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 249
                          },
                          "start": {
                            "column": 13,
                            "line": 249
                          }
                        }
                      },
                      "range": [
                        8788,
                        8815
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 249
                        },
                        "start": {
                          "column": 13,
                          "line": 249
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        8818,
                        8822
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 249
                        },
                        "start": {
                          "column": 43,
                          "line": 249
                        }
                      }
                    }
                  ],
                  "range": [
                    8788,
                    8822
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 249
                    },
                    "start": {
                      "column": 13,
                      "line": 249
                    }
                  }
                }
              },
              "range": [
                8779,
                8823
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 249
                },
                "start": {
                  "column": 4,
                  "line": 249
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onRemove",
                "optional": false,
                "range": [
                  8828,
                  8836
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 250
                  },
                  "start": {
                    "column": 4,
                    "line": 250
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 250
                  },
                  "start": {
                    "column": 13,
                    "line": 250
                  }
                },
                "range": [
                  8837,
                  8865
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      8857,
                      8865
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            8858,
                            8864
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 250
                            },
                            "start": {
                              "column": 34,
                              "line": 250
                            }
                          }
                        },
                        "range": [
                          8858,
                          8864
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 250
                          },
                          "start": {
                            "column": 34,
                            "line": 250
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 250
                      },
                      "start": {
                        "column": 33,
                        "line": 250
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "range": [
                      8839,
                      8857
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 250
                      },
                      "start": {
                        "column": 15,
                        "line": 250
                      }
                    }
                  },
                  "range": [
                    8839,
                    8865
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 250
                    },
                    "start": {
                      "column": 15,
                      "line": 250
                    }
                  }
                }
              },
              "range": [
                8828,
                8866
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 250
                },
                "start": {
                  "column": 4,
                  "line": 250
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "range": [
                  8871,
                  8882
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 251
                  },
                  "start": {
                    "column": 4,
                    "line": 251
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
                    "column": 56,
                    "line": 251
                  },
                  "start": {
                    "column": 15,
                    "line": 251
                  }
                },
                "range": [
                  8882,
                  8923
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'placeholder'",
                      "value": "placeholder",
                      "range": [
                        8909,
                        8922
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 251
                        },
                        "start": {
                          "column": 42,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      8909,
                      8922
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 251
                      },
                      "start": {
                        "column": 42,
                        "line": 251
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        8900,
                        8908
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              8901,
                              8907
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 251
                              },
                              "start": {
                                "column": 34,
                                "line": 251
                              }
                            }
                          },
                          "range": [
                            8901,
                            8907
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 251
                            },
                            "start": {
                              "column": 34,
                              "line": 251
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 251
                        },
                        "start": {
                          "column": 33,
                          "line": 251
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "range": [
                        8884,
                        8900
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 251
                        },
                        "start": {
                          "column": 17,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      8884,
                      8908
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 251
                      },
                      "start": {
                        "column": 17,
                        "line": 251
                      }
                    }
                  },
                  "range": [
                    8884,
                    8923
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 251
                    },
                    "start": {
                      "column": 17,
                      "line": 251
                    }
                  }
                }
              },
              "range": [
                8871,
                8924
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 251
                },
                "start": {
                  "column": 4,
                  "line": 251
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  8929,
                  8934
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 252
                  },
                  "start": {
                    "column": 4,
                    "line": 252
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
                    "column": 25,
                    "line": 252
                  },
                  "start": {
                    "column": 9,
                    "line": 252
                  }
                },
                "range": [
                  8934,
                  8950
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      8942,
                      8950
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            8943,
                            8949
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 252
                            },
                            "start": {
                              "column": 18,
                              "line": 252
                            }
                          }
                        },
                        "range": [
                          8943,
                          8949
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 252
                          },
                          "start": {
                            "column": 18,
                            "line": 252
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 252
                      },
                      "start": {
                        "column": 17,
                        "line": 252
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      8936,
                      8942
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 252
                      },
                      "start": {
                        "column": 11,
                        "line": 252
                      }
                    }
                  },
                  "range": [
                    8936,
                    8950
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 252
                    },
                    "start": {
                      "column": 11,
                      "line": 252
                    }
                  }
                }
              },
              "range": [
                8929,
                8951
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 252
                },
                "start": {
                  "column": 4,
                  "line": 252
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "range": [
                  8956,
                  8962
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 253
                  },
                  "start": {
                    "column": 4,
                    "line": 253
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 253
                  },
                  "start": {
                    "column": 11,
                    "line": 253
                  }
                },
                "range": [
                  8963,
                  8986
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      8970,
                      8986
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            8977,
                            8985
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "range": [
                                  8978,
                                  8984
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 253
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 253
                                  }
                                }
                              },
                              "range": [
                                8978,
                                8984
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 253
                                },
                                "start": {
                                  "column": 26,
                                  "line": 253
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 253
                            },
                            "start": {
                              "column": 25,
                              "line": 253
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "range": [
                            8971,
                            8977
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 253
                            },
                            "start": {
                              "column": 19,
                              "line": 253
                            }
                          }
                        },
                        "range": [
                          8971,
                          8985
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 253
                          },
                          "start": {
                            "column": 19,
                            "line": 253
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 253
                      },
                      "start": {
                        "column": 18,
                        "line": 253
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "range": [
                      8965,
                      8970
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 253
                      },
                      "start": {
                        "column": 13,
                        "line": 253
                      }
                    }
                  },
                  "range": [
                    8965,
                    8986
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 253
                    },
                    "start": {
                      "column": 13,
                      "line": 253
                    }
                  }
                }
              },
              "range": [
                8956,
                8987
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 253
                },
                "start": {
                  "column": 4,
                  "line": 253
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 254
            },
            "start": {
              "column": 60,
              "line": 245
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueComponentProps",
          "optional": false,
          "range": [
            8634,
            8653
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 245
            },
            "start": {
              "column": 17,
              "line": 245
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 245
            },
            "start": {
              "column": 36,
              "line": 245
            }
          },
          "range": [
            8653,
            8676
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    8663,
                    8675
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 245
                    },
                    "start": {
                      "column": 46,
                      "line": 245
                    }
                  }
                },
                "range": [
                  8663,
                  8675
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 245
                  },
                  "start": {
                    "column": 46,
                    "line": 245
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  8654,
                  8660
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 245
                  },
                  "start": {
                    "column": 37,
                    "line": 245
                  }
                }
              },
              "out": false,
              "range": [
                8654,
                8675
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 245
                },
                "start": {
                  "column": 37,
                  "line": 245
                }
              }
            }
          ]
        },
        "range": [
          8624,
          8989
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 254
          },
          "start": {
            "column": 7,
            "line": 245
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 254
        },
        "start": {
          "column": 0,
          "line": 245
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        8991,
        18589
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            9094,
            18589
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addLabelText",
                "optional": false,
                "range": [
                  9200,
                  9212
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 261
                  },
                  "start": {
                    "column": 4,
                    "line": 261
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 261
                  },
                  "start": {
                    "column": 17,
                    "line": 261
                  }
                },
                "range": [
                  9213,
                  9221
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    9215,
                    9221
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 261
                    },
                    "start": {
                      "column": 19,
                      "line": 261
                    }
                  }
                }
              },
              "range": [
                9200,
                9222
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 261
                },
                "start": {
                  "column": 4,
                  "line": 261
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrowRenderer",
                "optional": false,
                "range": [
                  9359,
                  9372
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 266
                  },
                  "start": {
                    "column": 4,
                    "line": 266
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 266
                  },
                  "start": {
                    "column": 18,
                    "line": 266
                  }
                },
                "range": [
                  9373,
                  9402
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowRendererHandler",
                        "optional": false,
                        "range": [
                          9375,
                          9395
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 266
                          },
                          "start": {
                            "column": 20,
                            "line": 266
                          }
                        }
                      },
                      "range": [
                        9375,
                        9395
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 266
                        },
                        "start": {
                          "column": 20,
                          "line": 266
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        9398,
                        9402
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 266
                        },
                        "start": {
                          "column": 43,
                          "line": 266
                        }
                      }
                    }
                  ],
                  "range": [
                    9375,
                    9402
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 266
                    },
                    "start": {
                      "column": 20,
                      "line": 266
                    }
                  }
                }
              },
              "range": [
                9359,
                9403
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 266
                },
                "start": {
                  "column": 4,
                  "line": 266
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autoBlur",
                "optional": false,
                "range": [
                  9561,
                  9569
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 271
                  },
                  "start": {
                    "column": 4,
                    "line": 271
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 271
                  },
                  "start": {
                    "column": 13,
                    "line": 271
                  }
                },
                "range": [
                  9570,
                  9579
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    9572,
                    9579
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 271
                    },
                    "start": {
                      "column": 15,
                      "line": 271
                    }
                  }
                }
              },
              "range": [
                9561,
                9580
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 271
                },
                "start": {
                  "column": 4,
                  "line": 271
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autofocus",
                "optional": false,
                "range": [
                  9705,
                  9714
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 277
                  },
                  "start": {
                    "column": 4,
                    "line": 277
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 277
                  },
                  "start": {
                    "column": 14,
                    "line": 277
                  }
                },
                "range": [
                  9715,
                  9724
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    9717,
                    9724
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 277
                    },
                    "start": {
                      "column": 16,
                      "line": 277
                    }
                  }
                }
              },
              "range": [
                9705,
                9725
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 277
                },
                "start": {
                  "column": 4,
                  "line": 277
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autoFocus",
                "optional": false,
                "range": [
                  9808,
                  9817
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 282
                  },
                  "start": {
                    "column": 4,
                    "line": 282
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 282
                  },
                  "start": {
                    "column": 14,
                    "line": 282
                  }
                },
                "range": [
                  9818,
                  9827
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    9820,
                    9827
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 282
                    },
                    "start": {
                      "column": 16,
                      "line": 282
                    }
                  }
                }
              },
              "range": [
                9808,
                9828
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 282
                },
                "start": {
                  "column": 4,
                  "line": 282
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autosize",
                "optional": false,
                "range": [
                  9928,
                  9936
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 286
                  },
                  "start": {
                    "column": 4,
                    "line": 286
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 286
                  },
                  "start": {
                    "column": 13,
                    "line": 286
                  }
                },
                "range": [
                  9937,
                  9946
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    9939,
                    9946
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 286
                    },
                    "start": {
                      "column": 15,
                      "line": 286
                    }
                  }
                }
              },
              "range": [
                9928,
                9947
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 286
                },
                "start": {
                  "column": 4,
                  "line": 286
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "backspaceRemoves",
                "optional": false,
                "range": [
                  10074,
                  10090
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 291
                  },
                  "start": {
                    "column": 4,
                    "line": 291
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 291
                  },
                  "start": {
                    "column": 21,
                    "line": 291
                  }
                },
                "range": [
                  10091,
                  10100
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    10093,
                    10100
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 291
                    },
                    "start": {
                      "column": 23,
                      "line": 291
                    }
                  }
                }
              },
              "range": [
                10074,
                10101
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 291
                },
                "start": {
                  "column": 4,
                  "line": 291
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "backspaceToRemoveMessage",
                "optional": false,
                "range": [
                  10302,
                  10326
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 297
                  },
                  "start": {
                    "column": 4,
                    "line": 297
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 297
                  },
                  "start": {
                    "column": 29,
                    "line": 297
                  }
                },
                "range": [
                  10327,
                  10335
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    10329,
                    10335
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 297
                    },
                    "start": {
                      "column": 31,
                      "line": 297
                    }
                  }
                }
              },
              "range": [
                10302,
                10336
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 297
                },
                "start": {
                  "column": 4,
                  "line": 297
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "range": [
                  10400,
                  10409
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 301
                  },
                  "start": {
                    "column": 4,
                    "line": 301
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 301
                  },
                  "start": {
                    "column": 14,
                    "line": 301
                  }
                },
                "range": [
                  10410,
                  10418
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    10412,
                    10418
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 301
                    },
                    "start": {
                      "column": 16,
                      "line": 301
                    }
                  }
                }
              },
              "range": [
                10400,
                10419
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 301
                },
                "start": {
                  "column": 4,
                  "line": 301
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classNamePrefix",
                "optional": false,
                "range": [
                  10520,
                  10535
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 305
                  },
                  "start": {
                    "column": 4,
                    "line": 305
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 305
                  },
                  "start": {
                    "column": 20,
                    "line": 305
                  }
                },
                "range": [
                  10536,
                  10544
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    10538,
                    10544
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 305
                    },
                    "start": {
                      "column": 22,
                      "line": 305
                    }
                  }
                }
              },
              "range": [
                10520,
                10545
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 305
                },
                "start": {
                  "column": 4,
                  "line": 305
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearAllText",
                "optional": false,
                "range": [
                  10652,
                  10664
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 310
                  },
                  "start": {
                    "column": 4,
                    "line": 310
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 310
                  },
                  "start": {
                    "column": 17,
                    "line": 310
                  }
                },
                "range": [
                  10665,
                  10673
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    10667,
                    10673
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 310
                    },
                    "start": {
                      "column": 19,
                      "line": 310
                    }
                  }
                }
              },
              "range": [
                10652,
                10674
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 310
                },
                "start": {
                  "column": 4,
                  "line": 310
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearRenderer",
                "optional": false,
                "range": [
                  10820,
                  10833
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 315
                  },
                  "start": {
                    "column": 4,
                    "line": 315
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 315
                  },
                  "start": {
                    "column": 18,
                    "line": 315
                  }
                },
                "range": [
                  10834,
                  10856
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClearRendererHandler",
                    "optional": false,
                    "range": [
                      10836,
                      10856
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 315
                      },
                      "start": {
                        "column": 20,
                        "line": 315
                      }
                    }
                  },
                  "range": [
                    10836,
                    10856
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 315
                    },
                    "start": {
                      "column": 20,
                      "line": 315
                    }
                  }
                }
              },
              "range": [
                10820,
                10857
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 315
                },
                "start": {
                  "column": 4,
                  "line": 315
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearValueText",
                "optional": false,
                "range": [
                  10945,
                  10959
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 320
                  },
                  "start": {
                    "column": 4,
                    "line": 320
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 320
                  },
                  "start": {
                    "column": 19,
                    "line": 320
                  }
                },
                "range": [
                  10960,
                  10968
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    10962,
                    10968
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 320
                    },
                    "start": {
                      "column": 21,
                      "line": 320
                    }
                  }
                }
              },
              "range": [
                10945,
                10969
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 320
                },
                "start": {
                  "column": 4,
                  "line": 320
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "closeOnSelect",
                "optional": false,
                "range": [
                  11069,
                  11082
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 325
                  },
                  "start": {
                    "column": 4,
                    "line": 325
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 325
                  },
                  "start": {
                    "column": 18,
                    "line": 325
                  }
                },
                "range": [
                  11083,
                  11092
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    11085,
                    11092
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 325
                    },
                    "start": {
                      "column": 20,
                      "line": 325
                    }
                  }
                }
              },
              "range": [
                11069,
                11093
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 325
                },
                "start": {
                  "column": 4,
                  "line": 325
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearable",
                "optional": false,
                "range": [
                  11236,
                  11245
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 330
                  },
                  "start": {
                    "column": 4,
                    "line": 330
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 330
                  },
                  "start": {
                    "column": 14,
                    "line": 330
                  }
                },
                "range": [
                  11246,
                  11255
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    11248,
                    11255
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 330
                    },
                    "start": {
                      "column": 16,
                      "line": 330
                    }
                  }
                }
              },
              "range": [
                11236,
                11256
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 330
                },
                "start": {
                  "column": 4,
                  "line": 330
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteRemoves",
                "optional": false,
                "range": [
                  11365,
                  11378
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 335
                  },
                  "start": {
                    "column": 4,
                    "line": 335
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 335
                  },
                  "start": {
                    "column": 18,
                    "line": 335
                  }
                },
                "range": [
                  11379,
                  11388
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    11381,
                    11388
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 335
                    },
                    "start": {
                      "column": 20,
                      "line": 335
                    }
                  }
                }
              },
              "range": [
                11365,
                11389
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 335
                },
                "start": {
                  "column": 4,
                  "line": 335
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delimiter",
                "optional": false,
                "range": [
                  11478,
                  11487
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 340
                  },
                  "start": {
                    "column": 4,
                    "line": 340
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 340
                  },
                  "start": {
                    "column": 14,
                    "line": 340
                  }
                },
                "range": [
                  11488,
                  11496
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    11490,
                    11496
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 340
                    },
                    "start": {
                      "column": 16,
                      "line": 340
                    }
                  }
                }
              },
              "range": [
                11478,
                11497
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 340
                },
                "start": {
                  "column": 4,
                  "line": 340
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "range": [
                  11585,
                  11593
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 345
                  },
                  "start": {
                    "column": 4,
                    "line": 345
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 345
                  },
                  "start": {
                    "column": 13,
                    "line": 345
                  }
                },
                "range": [
                  11594,
                  11603
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    11596,
                    11603
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 345
                    },
                    "start": {
                      "column": 15,
                      "line": 345
                    }
                  }
                }
              },
              "range": [
                11585,
                11604
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 345
                },
                "start": {
                  "column": 4,
                  "line": 345
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "escapeClearsValue",
                "optional": false,
                "range": [
                  11709,
                  11726
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 350
                  },
                  "start": {
                    "column": 4,
                    "line": 350
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 350
                  },
                  "start": {
                    "column": 22,
                    "line": 350
                  }
                },
                "range": [
                  11727,
                  11736
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    11729,
                    11736
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 350
                    },
                    "start": {
                      "column": 24,
                      "line": 350
                    }
                  }
                }
              },
              "range": [
                11709,
                11737
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 350
                },
                "start": {
                  "column": 4,
                  "line": 350
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filterOption",
                "optional": false,
                "range": [
                  11798,
                  11810
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 354
                  },
                  "start": {
                    "column": 4,
                    "line": 354
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 354
                  },
                  "start": {
                    "column": 17,
                    "line": 354
                  }
                },
                "range": [
                  11811,
                  11840
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      11832,
                      11840
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            11833,
                            11839
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 354
                            },
                            "start": {
                              "column": 39,
                              "line": 354
                            }
                          }
                        },
                        "range": [
                          11833,
                          11839
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 354
                          },
                          "start": {
                            "column": 39,
                            "line": 354
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 354
                      },
                      "start": {
                        "column": 38,
                        "line": 354
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FilterOptionHandler",
                    "optional": false,
                    "range": [
                      11813,
                      11832
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 354
                      },
                      "start": {
                        "column": 19,
                        "line": 354
                      }
                    }
                  },
                  "range": [
                    11813,
                    11840
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 354
                    },
                    "start": {
                      "column": 19,
                      "line": 354
                    }
                  }
                }
              },
              "range": [
                11798,
                11841
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 354
                },
                "start": {
                  "column": 4,
                  "line": 354
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filterOptions",
                "optional": false,
                "range": [
                  11904,
                  11917
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 358
                  },
                  "start": {
                    "column": 4,
                    "line": 358
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 358
                  },
                  "start": {
                    "column": 18,
                    "line": 358
                  }
                },
                "range": [
                  11918,
                  11948
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      11940,
                      11948
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            11941,
                            11947
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 358
                            },
                            "start": {
                              "column": 41,
                              "line": 358
                            }
                          }
                        },
                        "range": [
                          11941,
                          11947
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 358
                          },
                          "start": {
                            "column": 41,
                            "line": 358
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 358
                      },
                      "start": {
                        "column": 40,
                        "line": 358
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FilterOptionsHandler",
                    "optional": false,
                    "range": [
                      11920,
                      11940
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 358
                      },
                      "start": {
                        "column": 20,
                        "line": 358
                      }
                    }
                  },
                  "range": [
                    11920,
                    11948
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 358
                    },
                    "start": {
                      "column": 20,
                      "line": 358
                    }
                  }
                }
              },
              "range": [
                11904,
                11949
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 358
                },
                "start": {
                  "column": 4,
                  "line": 358
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  12044,
                  12046
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 363
                  },
                  "start": {
                    "column": 4,
                    "line": 363
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 363
                  },
                  "start": {
                    "column": 7,
                    "line": 363
                  }
                },
                "range": [
                  12047,
                  12055
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    12049,
                    12055
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 363
                    },
                    "start": {
                      "column": 9,
                      "line": 363
                    }
                  }
                }
              },
              "range": [
                12044,
                12056
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 363
                },
                "start": {
                  "column": 4,
                  "line": 363
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ignoreAccents",
                "optional": false,
                "range": [
                  12148,
                  12161
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 368
                  },
                  "start": {
                    "column": 4,
                    "line": 368
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 368
                  },
                  "start": {
                    "column": 18,
                    "line": 368
                  }
                },
                "range": [
                  12162,
                  12171
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    12164,
                    12171
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 368
                    },
                    "start": {
                      "column": 20,
                      "line": 368
                    }
                  }
                }
              },
              "range": [
                12148,
                12172
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 368
                },
                "start": {
                  "column": 4,
                  "line": 368
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ignoreCase",
                "optional": false,
                "range": [
                  12267,
                  12277
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 373
                  },
                  "start": {
                    "column": 4,
                    "line": 373
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 373
                  },
                  "start": {
                    "column": 15,
                    "line": 373
                  }
                },
                "range": [
                  12278,
                  12287
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    12280,
                    12287
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 373
                    },
                    "start": {
                      "column": 17,
                      "line": 373
                    }
                  }
                }
              },
              "range": [
                12267,
                12288
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 373
                },
                "start": {
                  "column": 4,
                  "line": 373
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputProps",
                "optional": false,
                "range": [
                  12416,
                  12426
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 378
                  },
                  "start": {
                    "column": 4,
                    "line": 378
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 378
                  },
                  "start": {
                    "column": 15,
                    "line": 378
                  }
                },
                "range": [
                  12427,
                  12451
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 378
                              },
                              "start": {
                                "column": 23,
                                "line": 378
                              }
                            },
                            "range": [
                              12435,
                              12443
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                12437,
                                12443
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 378
                                },
                                "start": {
                                  "column": 25,
                                  "line": 378
                                }
                              }
                            }
                          },
                          "range": [
                            12432,
                            12443
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 378
                            },
                            "start": {
                              "column": 20,
                              "line": 378
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
                            "column": 37,
                            "line": 378
                          },
                          "start": {
                            "column": 32,
                            "line": 378
                          }
                        },
                        "range": [
                          12444,
                          12449
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            12446,
                            12449
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 378
                            },
                            "start": {
                              "column": 34,
                              "line": 378
                            }
                          }
                        }
                      },
                      "range": [
                        12431,
                        12449
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 378
                        },
                        "start": {
                          "column": 19,
                          "line": 378
                        }
                      }
                    }
                  ],
                  "range": [
                    12429,
                    12451
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 378
                    },
                    "start": {
                      "column": 17,
                      "line": 378
                    }
                  }
                }
              },
              "range": [
                12416,
                12452
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 378
                },
                "start": {
                  "column": 4,
                  "line": 378
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputRenderer",
                "optional": false,
                "range": [
                  12503,
                  12516
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 382
                  },
                  "start": {
                    "column": 4,
                    "line": 382
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 382
                  },
                  "start": {
                    "column": 18,
                    "line": 382
                  }
                },
                "range": [
                  12517,
                  12539
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InputRendererHandler",
                    "optional": false,
                    "range": [
                      12519,
                      12539
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 382
                      },
                      "start": {
                        "column": 20,
                        "line": 382
                      }
                    }
                  },
                  "range": [
                    12519,
                    12539
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 382
                    },
                    "start": {
                      "column": 20,
                      "line": 382
                    }
                  }
                }
              },
              "range": [
                12503,
                12540
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 382
                },
                "start": {
                  "column": 4,
                  "line": 382
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceId",
                "optional": false,
                "range": [
                  12699,
                  12709
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 387
                  },
                  "start": {
                    "column": 4,
                    "line": 387
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 387
                  },
                  "start": {
                    "column": 15,
                    "line": 387
                  }
                },
                "range": [
                  12710,
                  12718
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    12712,
                    12718
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 387
                    },
                    "start": {
                      "column": 17,
                      "line": 387
                    }
                  }
                }
              },
              "range": [
                12699,
                12719
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 387
                },
                "start": {
                  "column": 4,
                  "line": 387
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isLoading",
                "optional": false,
                "range": [
                  12916,
                  12925
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 393
                  },
                  "start": {
                    "column": 4,
                    "line": 393
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 393
                  },
                  "start": {
                    "column": 14,
                    "line": 393
                  }
                },
                "range": [
                  12926,
                  12935
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    12928,
                    12935
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 393
                    },
                    "start": {
                      "column": 16,
                      "line": 393
                    }
                  }
                }
              },
              "range": [
                12916,
                12936
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 393
                },
                "start": {
                  "column": 4,
                  "line": 393
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "joinValues",
                "optional": false,
                "range": [
                  13066,
                  13076
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 398
                  },
                  "start": {
                    "column": 4,
                    "line": 398
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 398
                  },
                  "start": {
                    "column": 15,
                    "line": 398
                  }
                },
                "range": [
                  13077,
                  13086
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    13079,
                    13086
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 398
                    },
                    "start": {
                      "column": 17,
                      "line": 398
                    }
                  }
                }
              },
              "range": [
                13066,
                13087
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 398
                },
                "start": {
                  "column": 4,
                  "line": 398
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "range": [
                  13180,
                  13188
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 403
                  },
                  "start": {
                    "column": 4,
                    "line": 403
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 403
                  },
                  "start": {
                    "column": 13,
                    "line": 403
                  }
                },
                "range": [
                  13189,
                  13197
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    13191,
                    13197
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 403
                    },
                    "start": {
                      "column": 15,
                      "line": 403
                    }
                  }
                }
              },
              "range": [
                13180,
                13198
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 403
                },
                "start": {
                  "column": 4,
                  "line": 403
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchPos",
                "optional": false,
                "range": [
                  13309,
                  13317
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 408
                  },
                  "start": {
                    "column": 4,
                    "line": 408
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 408
                  },
                  "start": {
                    "column": 13,
                    "line": 408
                  }
                },
                "range": [
                  13318,
                  13326
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    13320,
                    13326
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 408
                    },
                    "start": {
                      "column": 15,
                      "line": 408
                    }
                  }
                }
              },
              "range": [
                13309,
                13327
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 408
                },
                "start": {
                  "column": 4,
                  "line": 408
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchProp",
                "optional": false,
                "range": [
                  13432,
                  13441
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 413
                  },
                  "start": {
                    "column": 4,
                    "line": 413
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 413
                  },
                  "start": {
                    "column": 14,
                    "line": 413
                  }
                },
                "range": [
                  13442,
                  13450
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    13444,
                    13450
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 413
                    },
                    "start": {
                      "column": 16,
                      "line": 413
                    }
                  }
                }
              },
              "range": [
                13432,
                13451
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 413
                },
                "start": {
                  "column": 4,
                  "line": 413
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuBuffer",
                "optional": false,
                "range": [
                  13600,
                  13610
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 418
                  },
                  "start": {
                    "column": 4,
                    "line": 418
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 418
                  },
                  "start": {
                    "column": 15,
                    "line": 418
                  }
                },
                "range": [
                  13611,
                  13619
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    13613,
                    13619
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 418
                    },
                    "start": {
                      "column": 17,
                      "line": 418
                    }
                  }
                }
              },
              "range": [
                13600,
                13620
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 418
                },
                "start": {
                  "column": 4,
                  "line": 418
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuContainerStyle",
                "optional": false,
                "range": [
                  13694,
                  13712
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 422
                  },
                  "start": {
                    "column": 4,
                    "line": 422
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 422
                  },
                  "start": {
                    "column": 23,
                    "line": 422
                  }
                },
                "range": [
                  13713,
                  13734
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        13715,
                        13720
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 422
                        },
                        "start": {
                          "column": 25,
                          "line": 422
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "range": [
                        13721,
                        13734
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 422
                        },
                        "start": {
                          "column": 31,
                          "line": 422
                        }
                      }
                    },
                    "range": [
                      13715,
                      13734
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 422
                      },
                      "start": {
                        "column": 25,
                        "line": 422
                      }
                    }
                  },
                  "range": [
                    13715,
                    13734
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 422
                    },
                    "start": {
                      "column": 25,
                      "line": 422
                    }
                  }
                }
              },
              "range": [
                13694,
                13735
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 422
                },
                "start": {
                  "column": 4,
                  "line": 422
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuRenderer",
                "optional": false,
                "range": [
                  13798,
                  13810
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 426
                  },
                  "start": {
                    "column": 4,
                    "line": 426
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 426
                  },
                  "start": {
                    "column": 17,
                    "line": 426
                  }
                },
                "range": [
                  13811,
                  13840
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      13832,
                      13840
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            13833,
                            13839
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 426
                            },
                            "start": {
                              "column": 39,
                              "line": 426
                            }
                          }
                        },
                        "range": [
                          13833,
                          13839
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 426
                          },
                          "start": {
                            "column": 39,
                            "line": 426
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 426
                      },
                      "start": {
                        "column": 38,
                        "line": 426
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MenuRendererHandler",
                    "optional": false,
                    "range": [
                      13813,
                      13832
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 426
                      },
                      "start": {
                        "column": 19,
                        "line": 426
                      }
                    }
                  },
                  "range": [
                    13813,
                    13840
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 426
                    },
                    "start": {
                      "column": 19,
                      "line": 426
                    }
                  }
                }
              },
              "range": [
                13798,
                13841
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 426
                },
                "start": {
                  "column": 4,
                  "line": 426
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuStyle",
                "optional": false,
                "range": [
                  13905,
                  13914
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 430
                  },
                  "start": {
                    "column": 4,
                    "line": 430
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 430
                  },
                  "start": {
                    "column": 14,
                    "line": 430
                  }
                },
                "range": [
                  13915,
                  13936
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        13917,
                        13922
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 430
                        },
                        "start": {
                          "column": 16,
                          "line": 430
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "range": [
                        13923,
                        13936
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 430
                        },
                        "start": {
                          "column": 22,
                          "line": 430
                        }
                      }
                    },
                    "range": [
                      13917,
                      13936
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 430
                      },
                      "start": {
                        "column": 16,
                        "line": 430
                      }
                    }
                  },
                  "range": [
                    13917,
                    13936
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 430
                    },
                    "start": {
                      "column": 16,
                      "line": 430
                    }
                  }
                }
              },
              "range": [
                13905,
                13937
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 430
                },
                "start": {
                  "column": 4,
                  "line": 430
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "multi",
                "optional": false,
                "range": [
                  14005,
                  14010
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 435
                  },
                  "start": {
                    "column": 4,
                    "line": 435
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 435
                  },
                  "start": {
                    "column": 10,
                    "line": 435
                  }
                },
                "range": [
                  14011,
                  14020
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    14013,
                    14020
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 435
                    },
                    "start": {
                      "column": 12,
                      "line": 435
                    }
                  }
                }
              },
              "range": [
                14005,
                14021
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 435
                },
                "start": {
                  "column": 4,
                  "line": 435
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  14086,
                  14090
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 439
                  },
                  "start": {
                    "column": 4,
                    "line": 439
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 439
                  },
                  "start": {
                    "column": 9,
                    "line": 439
                  }
                },
                "range": [
                  14091,
                  14099
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    14093,
                    14099
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 439
                    },
                    "start": {
                      "column": 11,
                      "line": 439
                    }
                  }
                }
              },
              "range": [
                14086,
                14100
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 439
                },
                "start": {
                  "column": 4,
                  "line": 439
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noResultsText",
                "optional": false,
                "range": [
                  14255,
                  14268
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 444
                  },
                  "start": {
                    "column": 4,
                    "line": 444
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 444
                  },
                  "start": {
                    "column": 18,
                    "line": 444
                  }
                },
                "range": [
                  14269,
                  14291
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        14271,
                        14277
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 444
                        },
                        "start": {
                          "column": 20,
                          "line": 444
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "range": [
                            14280,
                            14283
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 444
                            },
                            "start": {
                              "column": 29,
                              "line": 444
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "range": [
                            14284,
                            14291
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 444
                            },
                            "start": {
                              "column": 33,
                              "line": 444
                            }
                          }
                        },
                        "range": [
                          14280,
                          14291
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 444
                          },
                          "start": {
                            "column": 29,
                            "line": 444
                          }
                        }
                      },
                      "range": [
                        14280,
                        14291
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 444
                        },
                        "start": {
                          "column": 29,
                          "line": 444
                        }
                      }
                    }
                  ],
                  "range": [
                    14271,
                    14291
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 444
                    },
                    "start": {
                      "column": 20,
                      "line": 444
                    }
                  }
                }
              },
              "range": [
                14255,
                14292
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 444
                },
                "start": {
                  "column": 4,
                  "line": 444
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onBlur",
                "optional": false,
                "range": [
                  14356,
                  14362
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 448
                  },
                  "start": {
                    "column": 4,
                    "line": 448
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 448
                  },
                  "start": {
                    "column": 11,
                    "line": 448
                  }
                },
                "range": [
                  14363,
                  14378
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnBlurHandler",
                    "optional": false,
                    "range": [
                      14365,
                      14378
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 448
                      },
                      "start": {
                        "column": 13,
                        "line": 448
                      }
                    }
                  },
                  "range": [
                    14365,
                    14378
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 448
                    },
                    "start": {
                      "column": 13,
                      "line": 448
                    }
                  }
                }
              },
              "range": [
                14356,
                14379
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 448
                },
                "start": {
                  "column": 4,
                  "line": 448
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onBlurResetsInput",
                "optional": false,
                "range": [
                  14466,
                  14483
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 453
                  },
                  "start": {
                    "column": 4,
                    "line": 453
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 453
                  },
                  "start": {
                    "column": 22,
                    "line": 453
                  }
                },
                "range": [
                  14484,
                  14493
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    14486,
                    14493
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 453
                    },
                    "start": {
                      "column": 24,
                      "line": 453
                    }
                  }
                }
              },
              "range": [
                14466,
                14494
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 453
                },
                "start": {
                  "column": 4,
                  "line": 453
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSelectResetsInput",
                "optional": false,
                "range": [
                  14753,
                  14772
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 460
                  },
                  "start": {
                    "column": 4,
                    "line": 460
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 460
                  },
                  "start": {
                    "column": 24,
                    "line": 460
                  }
                },
                "range": [
                  14773,
                  14782
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    14775,
                    14782
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 460
                    },
                    "start": {
                      "column": 26,
                      "line": 460
                    }
                  }
                }
              },
              "range": [
                14753,
                14783
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 460
                },
                "start": {
                  "column": 4,
                  "line": 460
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onCloseResetsInput",
                "optional": false,
                "range": [
                  14895,
                  14913
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 465
                  },
                  "start": {
                    "column": 4,
                    "line": 465
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 465
                  },
                  "start": {
                    "column": 23,
                    "line": 465
                  }
                },
                "range": [
                  14914,
                  14923
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    14916,
                    14923
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 465
                    },
                    "start": {
                      "column": 25,
                      "line": 465
                    }
                  }
                }
              },
              "range": [
                14895,
                14924
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 465
                },
                "start": {
                  "column": 4,
                  "line": 465
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onChange",
                "optional": false,
                "range": [
                  14993,
                  15001
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 469
                  },
                  "start": {
                    "column": 4,
                    "line": 469
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 469
                  },
                  "start": {
                    "column": 13,
                    "line": 469
                  }
                },
                "range": [
                  15002,
                  15027
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      15019,
                      15027
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            15020,
                            15026
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 469
                            },
                            "start": {
                              "column": 31,
                              "line": 469
                            }
                          }
                        },
                        "range": [
                          15020,
                          15026
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 469
                          },
                          "start": {
                            "column": 31,
                            "line": 469
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 469
                      },
                      "start": {
                        "column": 30,
                        "line": 469
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnChangeHandler",
                    "optional": false,
                    "range": [
                      15004,
                      15019
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 469
                      },
                      "start": {
                        "column": 15,
                        "line": 469
                      }
                    }
                  },
                  "range": [
                    15004,
                    15027
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 469
                    },
                    "start": {
                      "column": 15,
                      "line": 469
                    }
                  }
                }
              },
              "range": [
                14993,
                15028
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 469
                },
                "start": {
                  "column": 4,
                  "line": 469
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onClose",
                "optional": false,
                "range": [
                  15086,
                  15093
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 473
                  },
                  "start": {
                    "column": 4,
                    "line": 473
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 473
                  },
                  "start": {
                    "column": 12,
                    "line": 473
                  }
                },
                "range": [
                  15094,
                  15110
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnCloseHandler",
                    "optional": false,
                    "range": [
                      15096,
                      15110
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 473
                      },
                      "start": {
                        "column": 14,
                        "line": 473
                      }
                    }
                  },
                  "range": [
                    15096,
                    15110
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 473
                    },
                    "start": {
                      "column": 14,
                      "line": 473
                    }
                  }
                }
              },
              "range": [
                15086,
                15111
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 473
                },
                "start": {
                  "column": 4,
                  "line": 473
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "range": [
                  15176,
                  15183
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 477
                  },
                  "start": {
                    "column": 4,
                    "line": 477
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 477
                  },
                  "start": {
                    "column": 12,
                    "line": 477
                  }
                },
                "range": [
                  15184,
                  15200
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnFocusHandler",
                    "optional": false,
                    "range": [
                      15186,
                      15200
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 477
                      },
                      "start": {
                        "column": 14,
                        "line": 477
                      }
                    }
                  },
                  "range": [
                    15186,
                    15200
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 477
                    },
                    "start": {
                      "column": 14,
                      "line": 477
                    }
                  }
                }
              },
              "range": [
                15176,
                15201
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 477
                },
                "start": {
                  "column": 4,
                  "line": 477
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onInputChange",
                "optional": false,
                "range": [
                  15277,
                  15290
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 481
                  },
                  "start": {
                    "column": 4,
                    "line": 481
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 481
                  },
                  "start": {
                    "column": 18,
                    "line": 481
                  }
                },
                "range": [
                  15291,
                  15313
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnInputChangeHandler",
                    "optional": false,
                    "range": [
                      15293,
                      15313
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 481
                      },
                      "start": {
                        "column": 20,
                        "line": 481
                      }
                    }
                  },
                  "range": [
                    15293,
                    15313
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 481
                    },
                    "start": {
                      "column": 20,
                      "line": 481
                    }
                  }
                }
              },
              "range": [
                15277,
                15314
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 481
                },
                "start": {
                  "column": 4,
                  "line": 481
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onInputKeyDown",
                "optional": false,
                "range": [
                  15394,
                  15408
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 485
                  },
                  "start": {
                    "column": 4,
                    "line": 485
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 485
                  },
                  "start": {
                    "column": 19,
                    "line": 485
                  }
                },
                "range": [
                  15409,
                  15432
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnInputKeyDownHandler",
                    "optional": false,
                    "range": [
                      15411,
                      15432
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 485
                      },
                      "start": {
                        "column": 21,
                        "line": 485
                      }
                    }
                  },
                  "range": [
                    15411,
                    15432
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 485
                    },
                    "start": {
                      "column": 21,
                      "line": 485
                    }
                  }
                }
              },
              "range": [
                15394,
                15433
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 485
                },
                "start": {
                  "column": 4,
                  "line": 485
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onMenuScrollToBottom",
                "optional": false,
                "range": [
                  15540,
                  15560
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 489
                  },
                  "start": {
                    "column": 4,
                    "line": 489
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 489
                  },
                  "start": {
                    "column": 25,
                    "line": 489
                  }
                },
                "range": [
                  15561,
                  15590
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnMenuScrollToBottomHandler",
                    "optional": false,
                    "range": [
                      15563,
                      15590
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 489
                      },
                      "start": {
                        "column": 27,
                        "line": 489
                      }
                    }
                  },
                  "range": [
                    15563,
                    15590
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 489
                    },
                    "start": {
                      "column": 27,
                      "line": 489
                    }
                  }
                }
              },
              "range": [
                15540,
                15591
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 489
                },
                "start": {
                  "column": 4,
                  "line": 489
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onOpen",
                "optional": false,
                "range": [
                  15649,
                  15655
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 493
                  },
                  "start": {
                    "column": 4,
                    "line": 493
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 493
                  },
                  "start": {
                    "column": 11,
                    "line": 493
                  }
                },
                "range": [
                  15656,
                  15671
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnOpenHandler",
                    "optional": false,
                    "range": [
                      15658,
                      15671
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 493
                      },
                      "start": {
                        "column": 13,
                        "line": 493
                      }
                    }
                  },
                  "range": [
                    15658,
                    15671
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 493
                    },
                    "start": {
                      "column": 13,
                      "line": 493
                    }
                  }
                }
              },
              "range": [
                15649,
                15672
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 493
                },
                "start": {
                  "column": 4,
                  "line": 493
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "openOnClick",
                "optional": false,
                "range": [
                  15770,
                  15781
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 498
                  },
                  "start": {
                    "column": 4,
                    "line": 498
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 498
                  },
                  "start": {
                    "column": 16,
                    "line": 498
                  }
                },
                "range": [
                  15782,
                  15791
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    15784,
                    15791
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 498
                    },
                    "start": {
                      "column": 18,
                      "line": 498
                    }
                  }
                }
              },
              "range": [
                15770,
                15792
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 498
                },
                "start": {
                  "column": 4,
                  "line": 498
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "openOnFocus",
                "optional": false,
                "range": [
                  15918,
                  15929
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 503
                  },
                  "start": {
                    "column": 4,
                    "line": 503
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 503
                  },
                  "start": {
                    "column": 16,
                    "line": 503
                  }
                },
                "range": [
                  15930,
                  15939
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    15932,
                    15939
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 503
                    },
                    "start": {
                      "column": 18,
                      "line": 503
                    }
                  }
                }
              },
              "range": [
                15918,
                15940
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 503
                },
                "start": {
                  "column": 4,
                  "line": 503
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionClassName",
                "optional": false,
                "range": [
                  16010,
                  16025
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 507
                  },
                  "start": {
                    "column": 4,
                    "line": 507
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 507
                  },
                  "start": {
                    "column": 20,
                    "line": 507
                  }
                },
                "range": [
                  16026,
                  16034
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    16028,
                    16034
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 507
                    },
                    "start": {
                      "column": 22,
                      "line": 507
                    }
                  }
                }
              },
              "range": [
                16010,
                16035
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 507
                },
                "start": {
                  "column": 4,
                  "line": 507
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionComponent",
                "optional": false,
                "range": [
                  16102,
                  16117
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 511
                  },
                  "start": {
                    "column": 4,
                    "line": 511
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 511
                  },
                  "start": {
                    "column": 20,
                    "line": 511
                  }
                },
                "range": [
                  16118,
                  16147
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      16139,
                      16147
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            16140,
                            16146
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 511
                            },
                            "start": {
                              "column": 42,
                              "line": 511
                            }
                          }
                        },
                        "range": [
                          16140,
                          16146
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 511
                          },
                          "start": {
                            "column": 42,
                            "line": 511
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 511
                      },
                      "start": {
                        "column": 41,
                        "line": 511
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionComponentType",
                    "optional": false,
                    "range": [
                      16120,
                      16139
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 511
                      },
                      "start": {
                        "column": 22,
                        "line": 511
                      }
                    }
                  },
                  "range": [
                    16120,
                    16147
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 511
                    },
                    "start": {
                      "column": 22,
                      "line": 511
                    }
                  }
                }
              },
              "range": [
                16102,
                16148
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 511
                },
                "start": {
                  "column": 4,
                  "line": 511
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "range": [
                  16246,
                  16260
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 515
                  },
                  "start": {
                    "column": 4,
                    "line": 515
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 515
                  },
                  "start": {
                    "column": 19,
                    "line": 515
                  }
                },
                "range": [
                  16261,
                  16292
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      16284,
                      16292
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            16285,
                            16291
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 515
                            },
                            "start": {
                              "column": 43,
                              "line": 515
                            }
                          }
                        },
                        "range": [
                          16285,
                          16291
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 515
                          },
                          "start": {
                            "column": 43,
                            "line": 515
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 515
                      },
                      "start": {
                        "column": 42,
                        "line": 515
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "range": [
                      16263,
                      16284
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 515
                      },
                      "start": {
                        "column": 21,
                        "line": 515
                      }
                    }
                  },
                  "range": [
                    16263,
                    16292
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 515
                    },
                    "start": {
                      "column": 21,
                      "line": 515
                    }
                  }
                }
              },
              "range": [
                16246,
                16293
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 515
                },
                "start": {
                  "column": 4,
                  "line": 515
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "range": [
                  16367,
                  16374
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 520
                  },
                  "start": {
                    "column": 4,
                    "line": 520
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 520
                  },
                  "start": {
                    "column": 12,
                    "line": 520
                  }
                },
                "range": [
                  16375,
                  16392
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      16384,
                      16392
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            16385,
                            16391
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 520
                            },
                            "start": {
                              "column": 22,
                              "line": 520
                            }
                          }
                        },
                        "range": [
                          16385,
                          16391
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 520
                          },
                          "start": {
                            "column": 22,
                            "line": 520
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 520
                      },
                      "start": {
                        "column": 21,
                        "line": 520
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "range": [
                      16377,
                      16384
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 520
                      },
                      "start": {
                        "column": 14,
                        "line": 520
                      }
                    }
                  },
                  "range": [
                    16377,
                    16392
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 520
                    },
                    "start": {
                      "column": 14,
                      "line": 520
                    }
                  }
                }
              },
              "range": [
                16367,
                16393
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 520
                },
                "start": {
                  "column": 4,
                  "line": 520
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pageSize",
                "optional": false,
                "range": [
                  16494,
                  16502
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 525
                  },
                  "start": {
                    "column": 4,
                    "line": 525
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 525
                  },
                  "start": {
                    "column": 13,
                    "line": 525
                  }
                },
                "range": [
                  16503,
                  16511
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    16505,
                    16511
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 525
                    },
                    "start": {
                      "column": 15,
                      "line": 525
                    }
                  }
                }
              },
              "range": [
                16494,
                16512
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 525
                },
                "start": {
                  "column": 4,
                  "line": 525
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "range": [
                  16619,
                  16630
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 530
                  },
                  "start": {
                    "column": 4,
                    "line": 530
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 530
                  },
                  "start": {
                    "column": 16,
                    "line": 530
                  }
                },
                "range": [
                  16631,
                  16653
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        16633,
                        16639
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 530
                        },
                        "start": {
                          "column": 18,
                          "line": 530
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "range": [
                            16642,
                            16645
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 530
                            },
                            "start": {
                              "column": 27,
                              "line": 530
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "range": [
                            16646,
                            16653
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 530
                            },
                            "start": {
                              "column": 31,
                              "line": 530
                            }
                          }
                        },
                        "range": [
                          16642,
                          16653
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 530
                          },
                          "start": {
                            "column": 27,
                            "line": 530
                          }
                        }
                      },
                      "range": [
                        16642,
                        16653
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 530
                        },
                        "start": {
                          "column": 27,
                          "line": 530
                        }
                      }
                    }
                  ],
                  "range": [
                    16633,
                    16653
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 530
                    },
                    "start": {
                      "column": 18,
                      "line": 530
                    }
                  }
                }
              },
              "range": [
                16619,
                16654
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 530
                },
                "start": {
                  "column": 4,
                  "line": 530
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeSelected",
                "optional": false,
                "range": [
                  16777,
                  16791
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 535
                  },
                  "start": {
                    "column": 4,
                    "line": 535
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 535
                  },
                  "start": {
                    "column": 19,
                    "line": 535
                  }
                },
                "range": [
                  16792,
                  16801
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    16794,
                    16801
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 535
                    },
                    "start": {
                      "column": 21,
                      "line": 535
                    }
                  }
                }
              },
              "range": [
                16777,
                16802
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 535
                },
                "start": {
                  "column": 4,
                  "line": 535
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "range": [
                  16897,
                  16905
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 540
                  },
                  "start": {
                    "column": 4,
                    "line": 540
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 540
                  },
                  "start": {
                    "column": 13,
                    "line": 540
                  }
                },
                "range": [
                  16906,
                  16915
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    16908,
                    16915
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 540
                    },
                    "start": {
                      "column": 15,
                      "line": 540
                    }
                  }
                }
              },
              "range": [
                16897,
                16916
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 540
                },
                "start": {
                  "column": 4,
                  "line": 540
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resetValue",
                "optional": false,
                "range": [
                  16984,
                  16994
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 544
                  },
                  "start": {
                    "column": 4,
                    "line": 544
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 544
                  },
                  "start": {
                    "column": 15,
                    "line": 544
                  }
                },
                "range": [
                  16995,
                  17000
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    16997,
                    17000
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 544
                    },
                    "start": {
                      "column": 17,
                      "line": 544
                    }
                  }
                }
              },
              "range": [
                16984,
                17001
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 544
                },
                "start": {
                  "column": 4,
                  "line": 544
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rtl",
                "optional": false,
                "range": [
                  17095,
                  17098
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 549
                  },
                  "start": {
                    "column": 4,
                    "line": 549
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 549
                  },
                  "start": {
                    "column": 8,
                    "line": 549
                  }
                },
                "range": [
                  17099,
                  17108
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    17101,
                    17108
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 549
                    },
                    "start": {
                      "column": 10,
                      "line": 549
                    }
                  }
                }
              },
              "range": [
                17095,
                17109
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 549
                },
                "start": {
                  "column": 4,
                  "line": 549
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "scrollMenuIntoView",
                "optional": false,
                "range": [
                  17230,
                  17248
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 554
                  },
                  "start": {
                    "column": 4,
                    "line": 554
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 554
                  },
                  "start": {
                    "column": 23,
                    "line": 554
                  }
                },
                "range": [
                  17249,
                  17258
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    17251,
                    17258
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 554
                    },
                    "start": {
                      "column": 25,
                      "line": 554
                    }
                  }
                }
              },
              "range": [
                17230,
                17259
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 554
                },
                "start": {
                  "column": 4,
                  "line": 554
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "searchable",
                "optional": false,
                "range": [
                  17352,
                  17362
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 559
                  },
                  "start": {
                    "column": 4,
                    "line": 559
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 559
                  },
                  "start": {
                    "column": 15,
                    "line": 559
                  }
                },
                "range": [
                  17363,
                  17372
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    17365,
                    17372
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 559
                    },
                    "start": {
                      "column": 17,
                      "line": 559
                    }
                  }
                }
              },
              "range": [
                17352,
                17373
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 559
                },
                "start": {
                  "column": 4,
                  "line": 559
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tabSelectsValue",
                "optional": false,
                "range": [
                  17479,
                  17494
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 563
                  },
                  "start": {
                    "column": 4,
                    "line": 563
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 563
                  },
                  "start": {
                    "column": 20,
                    "line": 563
                  }
                },
                "range": [
                  17495,
                  17504
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    17497,
                    17504
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 563
                    },
                    "start": {
                      "column": 22,
                      "line": 563
                    }
                  }
                }
              },
              "range": [
                17479,
                17505
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 563
                },
                "start": {
                  "column": 4,
                  "line": 563
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  17553,
                  17558
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 567
                  },
                  "start": {
                    "column": 4,
                    "line": 567
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 567
                  },
                  "start": {
                    "column": 10,
                    "line": 567
                  }
                },
                "range": [
                  17559,
                  17643
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          17567,
                          17575
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                17568,
                                17574
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 567
                                },
                                "start": {
                                  "column": 19,
                                  "line": 567
                                }
                              }
                            },
                            "range": [
                              17568,
                              17574
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 567
                              },
                              "start": {
                                "column": 19,
                                "line": 567
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 567
                          },
                          "start": {
                            "column": 18,
                            "line": 567
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "range": [
                          17561,
                          17567
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 567
                          },
                          "start": {
                            "column": 12,
                            "line": 567
                          }
                        }
                      },
                      "range": [
                        17561,
                        17575
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 567
                        },
                        "start": {
                          "column": 12,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          17585,
                          17593
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                17586,
                                17592
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 567
                                },
                                "start": {
                                  "column": 37,
                                  "line": 567
                                }
                              }
                            },
                            "range": [
                              17586,
                              17592
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 567
                              },
                              "start": {
                                "column": 37,
                                "line": 567
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 567
                          },
                          "start": {
                            "column": 36,
                            "line": 567
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "range": [
                          17578,
                          17585
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 567
                          },
                          "start": {
                            "column": 29,
                            "line": 567
                          }
                        }
                      },
                      "range": [
                        17578,
                        17593
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 567
                        },
                        "start": {
                          "column": 29,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        17596,
                        17602
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 567
                        },
                        "start": {
                          "column": 47,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          17605,
                          17611
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 567
                          },
                          "start": {
                            "column": 56,
                            "line": 567
                          }
                        }
                      },
                      "range": [
                        17605,
                        17613
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 567
                        },
                        "start": {
                          "column": 56,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        17616,
                        17622
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 567
                        },
                        "start": {
                          "column": 67,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          17625,
                          17631
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 567
                          },
                          "start": {
                            "column": 76,
                            "line": 567
                          }
                        }
                      },
                      "range": [
                        17625,
                        17633
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 567
                        },
                        "start": {
                          "column": 76,
                          "line": 567
                        }
                      }
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        17636,
                        17643
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 567
                        },
                        "start": {
                          "column": 87,
                          "line": 567
                        }
                      }
                    }
                  ],
                  "range": [
                    17561,
                    17643
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 567
                    },
                    "start": {
                      "column": 12,
                      "line": 567
                    }
                  }
                }
              },
              "range": [
                17553,
                17644
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 567
                },
                "start": {
                  "column": 4,
                  "line": 567
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueKey",
                "optional": false,
                "range": [
                  17737,
                  17745
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 572
                  },
                  "start": {
                    "column": 4,
                    "line": 572
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 572
                  },
                  "start": {
                    "column": 13,
                    "line": 572
                  }
                },
                "range": [
                  17746,
                  17754
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    17748,
                    17754
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 572
                    },
                    "start": {
                      "column": 15,
                      "line": 572
                    }
                  }
                }
              },
              "range": [
                17737,
                17755
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 572
                },
                "start": {
                  "column": 4,
                  "line": 572
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueRenderer",
                "optional": false,
                "range": [
                  17870,
                  17883
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 577
                  },
                  "start": {
                    "column": 4,
                    "line": 577
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 577
                  },
                  "start": {
                    "column": 18,
                    "line": 577
                  }
                },
                "range": [
                  17884,
                  17914
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      17906,
                      17914
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            17907,
                            17913
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 577
                            },
                            "start": {
                              "column": 41,
                              "line": 577
                            }
                          }
                        },
                        "range": [
                          17907,
                          17913
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 577
                          },
                          "start": {
                            "column": 41,
                            "line": 577
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 577
                      },
                      "start": {
                        "column": 40,
                        "line": 577
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValueRendererHandler",
                    "optional": false,
                    "range": [
                      17886,
                      17906
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 577
                      },
                      "start": {
                        "column": 20,
                        "line": 577
                      }
                    }
                  },
                  "range": [
                    17886,
                    17914
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 577
                    },
                    "start": {
                      "column": 20,
                      "line": 577
                    }
                  }
                }
              },
              "range": [
                17870,
                17915
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 577
                },
                "start": {
                  "column": 4,
                  "line": 577
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "range": [
                  17983,
                  17988
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 581
                  },
                  "start": {
                    "column": 4,
                    "line": 581
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 581
                  },
                  "start": {
                    "column": 10,
                    "line": 581
                  }
                },
                "range": [
                  17989,
                  18010
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        17991,
                        17996
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 581
                        },
                        "start": {
                          "column": 12,
                          "line": 581
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "range": [
                        17997,
                        18010
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 581
                        },
                        "start": {
                          "column": 18,
                          "line": 581
                        }
                      }
                    },
                    "range": [
                      17991,
                      18010
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 581
                      },
                      "start": {
                        "column": 12,
                        "line": 581
                      }
                    }
                  },
                  "range": [
                    17991,
                    18010
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 581
                    },
                    "start": {
                      "column": 12,
                      "line": 581
                    }
                  }
                }
              },
              "range": [
                17983,
                18011
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 581
                },
                "start": {
                  "column": 4,
                  "line": 581
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tabIndex",
                "optional": false,
                "range": [
                  18075,
                  18083
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 586
                  },
                  "start": {
                    "column": 4,
                    "line": 586
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 586
                  },
                  "start": {
                    "column": 13,
                    "line": 586
                  }
                },
                "range": [
                  18084,
                  18101
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        18086,
                        18092
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 586
                        },
                        "start": {
                          "column": 15,
                          "line": 586
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        18095,
                        18101
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 586
                        },
                        "start": {
                          "column": 24,
                          "line": 586
                        }
                      }
                    }
                  ],
                  "range": [
                    18086,
                    18101
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 586
                    },
                    "start": {
                      "column": 15,
                      "line": 586
                    }
                  }
                }
              },
              "range": [
                18075,
                18102
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 586
                },
                "start": {
                  "column": 4,
                  "line": 586
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueComponent",
                "optional": false,
                "range": [
                  18158,
                  18172
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 591
                  },
                  "start": {
                    "column": 4,
                    "line": 591
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 591
                  },
                  "start": {
                    "column": 19,
                    "line": 591
                  }
                },
                "range": [
                  18173,
                  18201
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      18193,
                      18201
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            18194,
                            18200
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 591
                            },
                            "start": {
                              "column": 40,
                              "line": 591
                            }
                          }
                        },
                        "range": [
                          18194,
                          18200
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 591
                          },
                          "start": {
                            "column": 40,
                            "line": 591
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 591
                      },
                      "start": {
                        "column": 39,
                        "line": 591
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValueComponentType",
                    "optional": false,
                    "range": [
                      18175,
                      18193
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 591
                      },
                      "start": {
                        "column": 21,
                        "line": 591
                      }
                    }
                  },
                  "range": [
                    18175,
                    18201
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 591
                    },
                    "start": {
                      "column": 21,
                      "line": 591
                    }
                  }
                }
              },
              "range": [
                18158,
                18202
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 591
                },
                "start": {
                  "column": 4,
                  "line": 591
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapperStyle",
                "optional": false,
                "range": [
                  18281,
                  18293
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 596
                  },
                  "start": {
                    "column": 4,
                    "line": 596
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 596
                  },
                  "start": {
                    "column": 17,
                    "line": 596
                  }
                },
                "range": [
                  18294,
                  18315
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        18296,
                        18301
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 596
                        },
                        "start": {
                          "column": 19,
                          "line": 596
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "range": [
                        18302,
                        18315
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 596
                        },
                        "start": {
                          "column": 25,
                          "line": 596
                        }
                      }
                    },
                    "range": [
                      18296,
                      18315
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 596
                      },
                      "start": {
                        "column": 19,
                        "line": 596
                      }
                    }
                  },
                  "range": [
                    18296,
                    18315
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 596
                    },
                    "start": {
                      "column": 19,
                      "line": 596
                    }
                  }
                }
              },
              "range": [
                18281,
                18316
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 596
                },
                "start": {
                  "column": 4,
                  "line": 596
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onValueClick",
                "optional": false,
                "range": [
                  18406,
                  18418
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 601
                  },
                  "start": {
                    "column": 4,
                    "line": 601
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 601
                  },
                  "start": {
                    "column": 17,
                    "line": 601
                  }
                },
                "range": [
                  18419,
                  18448
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      18440,
                      18448
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            18441,
                            18447
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 601
                            },
                            "start": {
                              "column": 39,
                              "line": 601
                            }
                          }
                        },
                        "range": [
                          18441,
                          18447
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 601
                          },
                          "start": {
                            "column": 39,
                            "line": 601
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 601
                      },
                      "start": {
                        "column": 38,
                        "line": 601
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnValueClickHandler",
                    "optional": false,
                    "range": [
                      18421,
                      18440
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 601
                      },
                      "start": {
                        "column": 19,
                        "line": 601
                      }
                    }
                  },
                  "range": [
                    18421,
                    18448
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 601
                    },
                    "start": {
                      "column": 19,
                      "line": 601
                    }
                  }
                }
              },
              "range": [
                18406,
                18449
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 601
                },
                "start": {
                  "column": 4,
                  "line": 601
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "simpleValue",
                "optional": false,
                "range": [
                  18565,
                  18576
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 606
                  },
                  "start": {
                    "column": 4,
                    "line": 606
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 606
                  },
                  "start": {
                    "column": 16,
                    "line": 606
                  }
                },
                "range": [
                  18577,
                  18586
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    18579,
                    18586
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 606
                    },
                    "start": {
                      "column": 18,
                      "line": 606
                    }
                  }
                }
              },
              "range": [
                18565,
                18587
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 606
                },
                "start": {
                  "column": 4,
                  "line": 606
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 607
            },
            "start": {
              "column": 103,
              "line": 256
            }
          }
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  9056,
                  9061
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 256
                  },
                  "start": {
                    "column": 65,
                    "line": 256
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "range": [
                  9062,
                  9067
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 256
                  },
                  "start": {
                    "column": 71,
                    "line": 256
                  }
                }
              },
              "range": [
                9056,
                9067
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 256
                },
                "start": {
                  "column": 65,
                  "line": 256
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                9067,
                9093
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      9084,
                      9092
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            9085,
                            9091
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 256
                            },
                            "start": {
                              "column": 94,
                              "line": 256
                            }
                          }
                        },
                        "range": [
                          9085,
                          9091
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 256
                          },
                          "start": {
                            "column": 94,
                            "line": 256
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 256
                      },
                      "start": {
                        "column": 93,
                        "line": 256
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactSelectClass",
                    "optional": false,
                    "range": [
                      9068,
                      9084
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 256
                      },
                      "start": {
                        "column": 77,
                        "line": 256
                      }
                    }
                  },
                  "range": [
                    9068,
                    9092
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 256
                    },
                    "start": {
                      "column": 77,
                      "line": 256
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 256
                },
                "start": {
                  "column": 76,
                  "line": 256
                }
              }
            },
            "range": [
              9056,
              9093
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 256
              },
              "start": {
                "column": 65,
                "line": 256
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReactSelectProps",
          "optional": false,
          "range": [
            9008,
            9024
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 256
            },
            "start": {
              "column": 17,
              "line": 256
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 256
            },
            "start": {
              "column": 33,
              "line": 256
            }
          },
          "range": [
            9024,
            9047
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "range": [
                    9034,
                    9046
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 256
                    },
                    "start": {
                      "column": 43,
                      "line": 256
                    }
                  }
                },
                "range": [
                  9034,
                  9046
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 256
                  },
                  "start": {
                    "column": 43,
                    "line": 256
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "range": [
                  9025,
                  9031
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 256
                  },
                  "start": {
                    "column": 34,
                    "line": 256
                  }
                }
              },
              "out": false,
              "range": [
                9025,
                9046
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 256
                },
                "start": {
                  "column": 34,
                  "line": 256
                }
              }
            }
          ]
        },
        "range": [
          8998,
          18589
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 607
          },
          "start": {
            "column": 7,
            "line": 256
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 607
        },
        "start": {
          "column": 0,
          "line": 256
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 608
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
