__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    649
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "range": [
          28,
          33
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              },
              "range": [
                39,
                44
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    41,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "range": [
                  41,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              38,
              44
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ],
        "range": [
          36,
          46
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "range": [
        23,
        46
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
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
        47,
        128
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cleaner",
          "optional": false,
          "range": [
            59,
            66
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "runner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 4
                  },
                  "start": {
                    "column": 46,
                    "line": 4
                  }
                },
                "range": [
                  93,
                  111
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      108,
                      111
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "range": [
                            109,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 4
                            },
                            "start": {
                              "column": 62,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          109,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 4
                          },
                          "start": {
                            "column": 62,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 4
                      },
                      "start": {
                        "column": 61,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FeatureRunner",
                    "optional": false,
                    "range": [
                      95,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 48,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    95,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 4
                    },
                    "start": {
                      "column": 48,
                      "line": 4
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
                  "column": 64,
                  "line": 4
                },
                "start": {
                  "column": 40,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 81,
                "line": 4
              },
              "start": {
                "column": 66,
                "line": 4
              }
            },
            "range": [
              113,
              128
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  123,
                  128
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      124,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 4
                      },
                      "start": {
                        "column": 77,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 4
                  },
                  "start": {
                    "column": 76,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  116,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 4
                  },
                  "start": {
                    "column": 69,
                    "line": 4
                  }
                }
              },
              "range": [
                116,
                128
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 4
                },
                "start": {
                  "column": 69,
                  "line": 4
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            },
            "range": [
              69,
              86
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
                    "name": "Store",
                    "optional": false,
                    "range": [
                      80,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 4
                      },
                      "start": {
                        "column": 33,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    80,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "out": false,
                "range": [
                  70,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            ]
          },
          "range": [
            69,
            128
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 4
            },
            "start": {
              "column": 22,
              "line": 4
            }
          }
        },
        "range": [
          54,
          128
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 81,
          "line": 4
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
        130,
        552
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            174,
            552
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cleaners",
                "optional": false,
                "range": [
                  197,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                },
                "range": [
                  205,
                  216
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cleaner",
                      "optional": false,
                      "range": [
                        207,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 31,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      207,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    207,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                }
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  219,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              },
              "range": [
                180,
                221
              ],
              "loc": {
                "end": {
                  "column": 45,
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
                "decorators": [],
                "name": "runFeature",
                "optional": false,
                "range": [
                  233,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
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
                  243,
                  419
                ],
                "async": true,
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
                            "name": "objectWhichShouldBeConst",
                            "optional": false,
                            "range": [
                              276,
                              300
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 10
                              },
                              "start": {
                                "column": 14,
                                "line": 10
                              }
                            }
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "range": [
                                      317,
                                      322
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      324,
                                      326
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    317,
                                    326
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 11
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "settings",
                                    "optional": false,
                                    "range": [
                                      340,
                                      348
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "range": [
                                      350,
                                      352
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    340,
                                    352
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 12
                                    }
                                  }
                                }
                              ],
                              "range": [
                                303,
                                363
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 13
                                },
                                "start": {
                                  "column": 41,
                                  "line": 10
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "range": [
                                  367,
                                  372
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                367,
                                372
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 13
                                },
                                "start": {
                                  "column": 13,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              303,
                              372
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 13
                              },
                              "start": {
                                "column": 41,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            276,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 13
                            },
                            "start": {
                              "column": 14,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        270,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objectWhichShouldBeConst",
                        "optional": false,
                        "range": [
                          389,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        382,
                        413
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
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
                    260,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 37,
                      "line": 9
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
                      "column": 36,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  },
                  "range": [
                    245,
                    259
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        254,
                        259
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            255,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        247,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 24,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      247,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
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
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                227,
                419
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                "name": "run",
                "optional": false,
                "range": [
                  431,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
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
                  434,
                  550
                ],
                "async": true,
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
                            "name": "result",
                            "optional": false,
                            "range": [
                              467,
                              473
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 18
                              },
                              "start": {
                                "column": 14,
                                "line": 18
                              }
                            }
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "range": [
                              476,
                              478
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 23,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            467,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 18
                            },
                            "start": {
                              "column": 14,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        461,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "range": [
                                    516,
                                    520
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "range": [
                                  514,
                                  515
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                514,
                                521
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 19
                                },
                                "start": {
                                  "column": 35,
                                  "line": 19
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
                                "name": "c",
                                "optional": false,
                                "range": [
                                  509,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              509,
                              521
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 19
                              },
                              "start": {
                                "column": 30,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                487,
                                491
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 19
                                },
                                "start": {
                                  "column": 8,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cleaners",
                              "optional": false,
                              "range": [
                                492,
                                500
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 19
                                },
                                "start": {
                                  "column": 13,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              487,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 8,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "range": [
                              501,
                              508
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 19
                              },
                              "start": {
                                "column": 22,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            487,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 8,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          487,
                          522
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        487,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          538,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        531,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    451,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 30,
                      "line": 17
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
                      "column": 29,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 17
                    }
                  },
                  "range": [
                    436,
                    450
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        445,
                        450
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            446,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 17
                            },
                            "start": {
                              "column": 25,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        438,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      438,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              },
              "range": [
                425,
                550
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
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
              "line": 22
            },
            "start": {
              "column": 44,
              "line": 6
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FeatureRunner",
          "optional": false,
          "range": [
            143,
            156
          ],
          "loc": {
            "end": {
              "column": 26,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 43,
              "line": 6
            },
            "start": {
              "column": 26,
              "line": 6
            }
          },
          "range": [
            156,
            173
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
                  "name": "Store",
                  "optional": false,
                  "range": [
                    167,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                },
                "range": [
                  167,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 6
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 27,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                157,
                172
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          137,
          552
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
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
          "line": 22
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
        554,
        627
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            572,
            627
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  578,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
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
                  579,
                  625
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
                            "name": "one",
                            "optional": false,
                            "range": [
                              602,
                              605
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                608,
                                609
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 26
                                },
                                "start": {
                                  "column": 18,
                                  "line": 26
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "range": [
                                  613,
                                  618
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                613,
                                618
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 26
                                },
                                "start": {
                                  "column": 23,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              608,
                              618
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 26
                              },
                              "start": {
                                "column": 18,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            602,
                            618
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 26
                            },
                            "start": {
                              "column": 12,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        598,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    588,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 25
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
                      "column": 13,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  },
                  "range": [
                    581,
                    587
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      583,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              "range": [
                578,
                625
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 18,
              "line": 24
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
            567,
            568
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 24
            },
            "start": {
              "column": 13,
              "line": 24
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 17,
              "line": 24
            },
            "start": {
              "column": 14,
              "line": 24
            }
          },
          "range": [
            568,
            571
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
                  569,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 24
                  },
                  "start": {
                    "column": 15,
                    "line": 24
                  }
                }
              },
              "out": false,
              "range": [
                569,
                570
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            }
          ]
        },
        "range": [
          561,
          627
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                633,
                641
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    634,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              }
            },
            "range": [
              628,
              643
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 29
              },
              "start": {
                "column": 0,
                "line": 29
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              644,
              645
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 29
              },
              "start": {
                "column": 16,
                "line": 29
              }
            }
          },
          "range": [
            628,
            645
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          628,
          647
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        628,
        648
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
