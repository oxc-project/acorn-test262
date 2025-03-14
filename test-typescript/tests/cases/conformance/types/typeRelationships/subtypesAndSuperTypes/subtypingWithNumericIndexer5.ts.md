__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    62,
    883
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          77,
          93
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                79,
                82
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 17,
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
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                82,
                90
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  84,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              79,
              91
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          72,
          76
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        62,
        93
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
          125,
          141
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                127,
                130
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
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
                  "column": 44,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              },
              "range": [
                130,
                138
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              127,
              139
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              120,
              124
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
          },
          "range": [
            120,
            124
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
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          104,
          111
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        94,
        141
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          177,
          193
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                179,
                182
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
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
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              },
              "range": [
                182,
                190
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              179,
              191
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "range": [
              169,
              176
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "range": [
            169,
            176
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          152,
          160
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        142,
        193
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          207,
          236
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  },
                  "range": [
                    215,
                    223
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      217,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  214,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 5,
                    "line": 8
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
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              },
              "range": [
                224,
                233
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "range": [
                    226,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
                    }
                  }
                },
                "range": [
                  226,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              213,
              234
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "column": 12,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          205,
          206
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        195,
        236
      ],
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          259,
          294
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  },
                  "range": [
                    267,
                    275
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      269,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  266,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
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
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              },
              "range": [
                276,
                282
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    278,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "range": [
                  278,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
              265,
              283
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 12
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
            "line": 13
          },
          "start": {
            "column": 21,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          244,
          245
        ],
        "loc": {
          "end": {
            "column": 7,
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
            "name": "A",
            "optional": false,
            "range": [
              257,
              258
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          "range": [
            257,
            258
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 19,
              "line": 11
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        238,
        294
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
          318,
          354
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 6,
                      "line": 16
                    }
                  },
                  "range": [
                    326,
                    334
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      328,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                },
                "range": [
                  325,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
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
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              },
              "range": [
                335,
                345
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "range": [
                    337,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                "range": [
                  337,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              324,
              346
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 16
              },
              "start": {
                "column": 4,
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
            "column": 22,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "range": [
          302,
          304
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              316,
              317
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          "range": [
            316,
            317
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        296,
        354
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                406,
                437
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 10,
                            "line": 21
                          }
                        },
                        "range": [
                          418,
                          426
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            420,
                            426
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 21
                            },
                            "start": {
                              "column": 12,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        417,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 21
                        },
                        "start": {
                          "column": 9,
                          "line": 21
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
                        "column": 22,
                        "line": 21
                      },
                      "start": {
                        "column": 19,
                        "line": 21
                      }
                    },
                    "range": [
                      427,
                      430
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          429,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 21,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        429,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    416,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 32,
                  "line": 20
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                388,
                389
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              },
              "range": [
                389,
                405
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
                      "name": "Base",
                      "optional": false,
                      "range": [
                        400,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 20
                        },
                        "start": {
                          "column": 26,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      400,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
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
                      390,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    390,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                }
              ]
            },
            "range": [
              378,
              437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                470,
                513
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 10,
                            "line": 25
                          }
                        },
                        "range": [
                          482,
                          490
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            484,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        481,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 9,
                          "line": 25
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
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
                      }
                    },
                    "range": [
                      491,
                      500
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          493,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 25
                          },
                          "start": {
                            "column": 21,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        493,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 25
                        },
                        "start": {
                          "column": 21,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    480,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 24
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                449,
                450
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    462,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 23,
                      "line": 24
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    463,
                    469
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          464,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 24
                          },
                          "start": {
                            "column": 25,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        464,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 24
                        },
                        "start": {
                          "column": 25,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  462,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 23,
                    "line": 24
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              443,
              513
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                550,
                594
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
                          }
                        },
                        "range": [
                          562,
                          570
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            564,
                            570
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        }
                      },
                      "range": [
                        561,
                        570
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 9,
                          "line": 29
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
                        "column": 29,
                        "line": 29
                      },
                      "start": {
                        "column": 19,
                        "line": 29
                      }
                    },
                    "range": [
                      571,
                      581
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          573,
                          581
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 29
                          },
                          "start": {
                            "column": 21,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        573,
                        581
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 29
                        },
                        "start": {
                          "column": 21,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    560,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 35,
                  "line": 28
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                525,
                527
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    539,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    540,
                    549
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          541,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 28
                          },
                          "start": {
                            "column": 26,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        541,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 28
                        },
                        "start": {
                          "column": 26,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 28
                    },
                    "start": {
                      "column": 25,
                      "line": 28
                    }
                  }
                },
                "range": [
                  539,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              519,
              594
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                644,
                687
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 10,
                            "line": 33
                          }
                        },
                        "range": [
                          656,
                          664
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            658,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        655,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 33
                        },
                        "start": {
                          "column": 9,
                          "line": 33
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
                        "column": 25,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    },
                    "range": [
                      665,
                      671
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          667,
                          671
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        667,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 33
                        },
                        "start": {
                          "column": 21,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    654,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 48,
                  "line": 32
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                606,
                608
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    639,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 32
                    },
                    "start": {
                      "column": 43,
                      "line": 32
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    640,
                    643
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
                          641,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 32
                          },
                          "start": {
                            "column": 45,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        641,
                        642
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 32
                        },
                        "start": {
                          "column": 45,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 32
                    },
                    "start": {
                      "column": 44,
                      "line": 32
                    }
                  }
                },
                "range": [
                  639,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 32
                  },
                  "start": {
                    "column": 43,
                    "line": 32
                  }
                }
              }
            ],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 32
                }
              },
              "range": [
                608,
                627
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
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        619,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 32
                        },
                        "start": {
                          "column": 23,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      619,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 32
                      },
                      "start": {
                        "column": 23,
                        "line": 32
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
                      609,
                      610
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 32
                      },
                      "start": {
                        "column": 13,
                        "line": 32
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    609,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 32
                    },
                    "start": {
                      "column": 13,
                      "line": 32
                    }
                  }
                }
              ]
            },
            "range": [
              600,
              687
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                737,
                783
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 37
                          },
                          "start": {
                            "column": 10,
                            "line": 37
                          }
                        },
                        "range": [
                          749,
                          757
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            751,
                            757
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        748,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 37
                        },
                        "start": {
                          "column": 9,
                          "line": 37
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
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 19,
                        "line": 37
                      }
                    },
                    "range": [
                      758,
                      767
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          760,
                          767
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 37
                          },
                          "start": {
                            "column": 21,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        760,
                        767
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 37
                        },
                        "start": {
                          "column": 21,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    747,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 48,
                  "line": 36
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B4",
              "optional": false,
              "range": [
                699,
                701
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 36
                },
                "start": {
                  "column": 10,
                  "line": 36
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    732,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 36
                    },
                    "start": {
                      "column": 43,
                      "line": 36
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    733,
                    736
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
                          734,
                          735
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 36
                          },
                          "start": {
                            "column": 45,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        734,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 36
                        },
                        "start": {
                          "column": 45,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 36
                    },
                    "start": {
                      "column": 44,
                      "line": 36
                    }
                  }
                },
                "range": [
                  732,
                  736
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 36
                  },
                  "start": {
                    "column": 43,
                    "line": 36
                  }
                }
              }
            ],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 36
                }
              },
              "range": [
                701,
                720
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
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        712,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 36
                        },
                        "start": {
                          "column": 23,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      712,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 36
                      },
                      "start": {
                        "column": 23,
                        "line": 36
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
                      702,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    702,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 36
                    },
                    "start": {
                      "column": 13,
                      "line": 36
                    }
                  }
                }
              ]
            },
            "range": [
              693,
              783
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                834,
                881
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        },
                        "range": [
                          846,
                          854
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            848,
                            854
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 41
                            },
                            "start": {
                              "column": 12,
                              "line": 41
                            }
                          }
                        }
                      },
                      "range": [
                        845,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 41
                        },
                        "start": {
                          "column": 9,
                          "line": 41
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
                        "column": 29,
                        "line": 41
                      },
                      "start": {
                        "column": 19,
                        "line": 41
                      }
                    },
                    "range": [
                      855,
                      865
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          857,
                          865
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 41
                          },
                          "start": {
                            "column": 21,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        857,
                        865
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 41
                        },
                        "start": {
                          "column": 21,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    844,
                    866
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 49,
                  "line": 40
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B5",
              "optional": false,
              "range": [
                795,
                797
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    829,
                    830
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 40
                    },
                    "start": {
                      "column": 44,
                      "line": 40
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    830,
                    833
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
                          831,
                          832
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 40
                          },
                          "start": {
                            "column": 46,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        831,
                        832
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 40
                        },
                        "start": {
                          "column": 46,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 40
                    },
                    "start": {
                      "column": 45,
                      "line": 40
                    }
                  }
                },
                "range": [
                  829,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 40
                  },
                  "start": {
                    "column": 44,
                    "line": 40
                  }
                }
              }
            ],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              },
              "range": [
                797,
                817
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
                      "name": "Derived2",
                      "optional": false,
                      "range": [
                        808,
                        816
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 40
                        },
                        "start": {
                          "column": 23,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      808,
                      816
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
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
                      798,
                      799
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 13,
                        "line": 40
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    798,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 40
                    },
                    "start": {
                      "column": 13,
                      "line": 40
                    }
                  }
                }
              ]
            },
            "range": [
              789,
              881
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          372,
          883
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 16,
            "line": 19
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          363,
          371
        ],
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "kind": "module",
      "range": [
        356,
        883
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
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
      "column": 1,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
