__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    827
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          28,
          138
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                34,
                45
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                45,
                136
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 98,
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entity",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 2
                        },
                        "start": {
                          "column": 31,
                          "line": 2
                        }
                      },
                      "range": [
                        61,
                        75
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEntityClass",
                          "optional": false,
                          "range": [
                            63,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 2
                            },
                            "start": {
                              "column": 33,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          63,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 2
                          },
                          "start": {
                            "column": 33,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      54,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    46,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 2
                        },
                        "start": {
                          "column": 63,
                          "line": 2
                        }
                      },
                      "range": [
                        93,
                        126
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            112,
                            126
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEntityClass",
                                "optional": false,
                                "range": [
                                  113,
                                  125
                                ],
                                "loc": {
                                  "end": {
                                    "column": 95,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 83,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                113,
                                125
                              ],
                              "loc": {
                                "end": {
                                  "column": 95,
                                  "line": 2
                                },
                                "start": {
                                  "column": 83,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 2
                            },
                            "start": {
                              "column": 82,
                              "line": 2
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SettingsInterface",
                          "optional": false,
                          "range": [
                            95,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 2
                            },
                            "start": {
                              "column": 65,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          95,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 2
                          },
                          "start": {
                            "column": 65,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      84,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 2
                      },
                      "start": {
                        "column": 54,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    77,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 2
                    },
                    "start": {
                      "column": 47,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              34,
              136
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
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
            "line": 5
          },
          "start": {
            "column": 28,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassA",
        "optional": false,
        "range": [
          6,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          26
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEntityClass",
              "optional": false,
              "range": [
                13,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        138
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        139,
        245
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            184,
            245
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "range": [
                  190,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                },
                "range": [
                  195,
                  222
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        },
                        "range": [
                          201,
                          214
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValueClass",
                            "optional": false,
                            "range": [
                              203,
                              214
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            203,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        198,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    },
                    "range": [
                      216,
                      222
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        219,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    197,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                190,
                223
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  228,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                },
                "range": [
                  234,
                  242
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    236,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                228,
                243
              ],
              "loc": {
                "end": {
                  "column": 19,
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
              "column": 45,
              "line": 6
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueInterface",
          "optional": false,
          "range": [
            156,
            170
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 44,
              "line": 6
            },
            "start": {
              "column": 31,
              "line": 6
            }
          },
          "range": [
            170,
            183
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueClass",
                "optional": false,
                "range": [
                  171,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                171,
                182
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          146,
          245
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 6
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
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        246,
        348
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            289,
            348
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "range": [
                  295,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  302,
                  345
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 17,
                            "line": 11
                          }
                        },
                        "range": [
                          308,
                          316
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TClass",
                            "optional": false,
                            "range": [
                              310,
                              316
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 19,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            310,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 11
                            },
                            "start": {
                              "column": 19,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        305,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    },
                    "range": [
                      318,
                      345
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            335,
                            343
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TClass",
                                "optional": false,
                                "range": [
                                  336,
                                  342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                336,
                                342
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 11
                                },
                                "start": {
                                  "column": 45,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 11
                            },
                            "start": {
                              "column": 44,
                              "line": 11
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ValueInterface",
                          "optional": false,
                          "range": [
                            321,
                            335
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          321,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 11
                          },
                          "start": {
                            "column": 30,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        321,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    304,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                295,
                346
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 11
                },
                "start": {
                  "column": 4,
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
              "column": 43,
              "line": 10
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SettingsInterface",
          "optional": false,
          "range": [
            263,
            280
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 42,
              "line": 10
            },
            "start": {
              "column": 34,
              "line": 10
            }
          },
          "range": [
            280,
            288
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TClass",
                "optional": false,
                "range": [
                  281,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                281,
                287
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 10
                },
                "start": {
                  "column": 35,
                  "line": 10
                }
              }
            }
          ]
        },
        "range": [
          253,
          348
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          369,
          397
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "theName",
              "optional": false,
              "range": [
                375,
                382
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "'myClass'",
              "value": "myClass",
              "range": [
                385,
                394
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "range": [
              375,
              395
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
            "column": 20,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteClass",
        "optional": false,
        "range": [
          355,
          368
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        349,
        397
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
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
            "name": "thisGetsTheFalseError",
            "optional": false,
            "range": [
              403,
              424
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "range": [
                    442,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 17
                    },
                    "start": {
                      "column": 43,
                      "line": 17
                    }
                  }
                },
                "range": [
                  438,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 17
                  },
                  "start": {
                    "column": 39,
                    "line": 17
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
                      "name": "values",
                      "optional": false,
                      "range": [
                        465,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 18
                        },
                        "start": {
                          "column": 4,
                          "line": 18
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    502,
                                    507
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 20
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "range": [
                                      509,
                                      510
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "range": [
                                      511,
                                      518
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "range": [
                                    509,
                                    518
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  502,
                                  518
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 20
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "range": [
                                    532,
                                    536
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 21
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "range": [
                                      543,
                                      591
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        538,
                                        539
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 21
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    538,
                                    591
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  532,
                                  591
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 21
                                  }
                                }
                              }
                            ],
                            "range": [
                              488,
                              601
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 22
                              },
                              "start": {
                                "column": 8,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          478,
                          607
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 18
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "range": [
                            473,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        473,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      465,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  459,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 24
                  },
                  "start": {
                    "column": 60,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "range": [
                431,
                437
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 32,
                  "line": 17
                }
              }
            },
            "range": [
              427,
              610
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 24
              },
              "start": {
                "column": 28,
                "line": 17
              }
            }
          },
          "range": [
            403,
            610
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        399,
        611
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 24
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
            "name": "thisIsOk",
            "optional": false,
            "range": [
              617,
              625
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "range": [
                    658,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 26
                    },
                    "start": {
                      "column": 45,
                      "line": 26
                    }
                  }
                },
                "range": [
                  654,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 26
                  },
                  "start": {
                    "column": 41,
                    "line": 26
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
                      "name": "values",
                      "optional": false,
                      "range": [
                        681,
                        687
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 27
                        },
                        "start": {
                          "column": 4,
                          "line": 27
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    718,
                                    723
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 29
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "range": [
                                      725,
                                      726
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "range": [
                                      727,
                                      734
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    725,
                                    734
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  718,
                                  734
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 29
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "range": [
                                    748,
                                    752
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 30
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "range": [
                                      759,
                                      807
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 30
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        754,
                                        755
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
                                  "range": [
                                    754,
                                    807
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  748,
                                  807
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 30
                                  }
                                }
                              }
                            ],
                            "range": [
                              704,
                              817
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 31
                              },
                              "start": {
                                "column": 8,
                                "line": 28
                              }
                            }
                          }
                        ],
                        "range": [
                          694,
                          823
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 32
                          },
                          "start": {
                            "column": 17,
                            "line": 27
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "range": [
                            689,
                            690
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 27
                            },
                            "start": {
                              "column": 12,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        689,
                        823
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 32
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      681,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 32
                      },
                      "start": {
                        "column": 4,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  675,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 33
                  },
                  "start": {
                    "column": 62,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "range": [
                632,
                638
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 26
                },
                "start": {
                  "column": 19,
                  "line": 26
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                638,
                653
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConcreteClass",
                    "optional": false,
                    "range": [
                      639,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 26
                      },
                      "start": {
                        "column": 26,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    639,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 26
                    },
                    "start": {
                      "column": 26,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 26
                },
                "start": {
                  "column": 25,
                  "line": 26
                }
              }
            },
            "range": [
              628,
              826
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 26
              }
            }
          },
          "range": [
            617,
            826
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        613,
        827
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 33
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
      "column": 3,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
