__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    426
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        58
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            34,
            58
          ],
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "progress",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    },
                    "range": [
                      46,
                      50
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        47,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    38,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 2,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                },
                "range": [
                  51,
                  55
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    52,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                37,
                56
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 1,
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
              "column": 34,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ProgressCallback",
          "optional": false,
          "range": [
            17,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "range": [
          7,
          58
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
      "type": "ExportNamedDeclaration",
      "range": [
        84,
        426
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            117,
            426
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  122,
                  133
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 1,
                    "line": 8
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
                  133,
                  240
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
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      },
                      "range": [
                        138,
                        222
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "complete",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 8
                                },
                                "start": {
                                  "column": 27,
                                  "line": 8
                                }
                              },
                              "range": [
                                148,
                                165
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
                                          "column": 37,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 8
                                        }
                                      },
                                      "range": [
                                        156,
                                        158
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "V",
                                          "optional": false,
                                          "range": [
                                            157,
                                            158
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 36,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          157,
                                          158
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 8
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      151,
                                      158
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 8
                                    }
                                  },
                                  "range": [
                                    159,
                                    165
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "range": [
                                      161,
                                      165
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 8
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  150,
                                  165
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              140,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 8
                                },
                                "start": {
                                  "column": 51,
                                  "line": 8
                                }
                              },
                              "range": [
                                172,
                                188
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
                                          "column": 60,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 56,
                                          "line": 8
                                        }
                                      },
                                      "range": [
                                        177,
                                        181
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "range": [
                                          178,
                                          181
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 60,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 57,
                                            "line": 8
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      174,
                                      181
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 53,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 8
                                    }
                                  },
                                  "range": [
                                    182,
                                    188
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "range": [
                                      184,
                                      188
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 67,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 63,
                                        "line": 8
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  173,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              167,
                              188
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 8
                              },
                              "start": {
                                "column": 46,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "progress",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 94,
                                  "line": 8
                                },
                                "start": {
                                  "column": 77,
                                  "line": 8
                                }
                              },
                              "range": [
                                198,
                                215
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ProgressCallback",
                                  "optional": false,
                                  "range": [
                                    199,
                                    215
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 94,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  199,
                                  215
                                ],
                                "loc": {
                                  "end": {
                                    "column": 94,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              190,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 8
                              },
                              "start": {
                                "column": 69,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 8
                            },
                            "start": {
                              "column": 95,
                              "line": 8
                            }
                          },
                          "range": [
                            216,
                            222
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              218,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 101,
                                "line": 8
                              },
                              "start": {
                                "column": 97,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          139,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      134,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oncancel",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 117,
                          "line": 8
                        },
                        "start": {
                          "column": 112,
                          "line": 8
                        }
                      },
                      "range": [
                        233,
                        238
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          235,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 117,
                            "line": 8
                          },
                          "start": {
                            "column": 114,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      224,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 117,
                        "line": 8
                      },
                      "start": {
                        "column": 103,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 119,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "range": [
                122,
                240
              ],
              "loc": {
                "end": {
                  "column": 119,
                  "line": 8
                },
                "start": {
                  "column": 1,
                  "line": 8
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "range": [
                  309,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
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
                  313,
                  424
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
                    "name": "success",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
                          "line": 11
                        }
                      },
                      "range": [
                        325,
                        349
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
                                  "column": 34,
                                  "line": 11
                                },
                                "start": {
                                  "column": 32,
                                  "line": 11
                                }
                              },
                              "range": [
                                333,
                                335
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "range": [
                                    334,
                                    335
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  334,
                                  335
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 11
                                  }
                                }
                              }
                            },
                            "range": [
                              328,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 11
                              },
                              "start": {
                                "column": 27,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 11
                            },
                            "start": {
                              "column": 35,
                              "line": 11
                            }
                          },
                          "range": [
                            336,
                            349
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                346,
                                349
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      347,
                                      348
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    347,
                                    348
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 11
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 11
                                },
                                "start": {
                                  "column": 45,
                                  "line": 11
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "range": [
                                338,
                                346
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 11
                                },
                                "start": {
                                  "column": 37,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              338,
                              349
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 11
                              },
                              "start": {
                                "column": 37,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          327,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 11
                          },
                          "start": {
                            "column": 26,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      317,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      },
                      "range": [
                        357,
                        381
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
                                  "column": 66,
                                  "line": 11
                                },
                                "start": {
                                  "column": 62,
                                  "line": 11
                                }
                              },
                              "range": [
                                363,
                                367
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  364,
                                  367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 11
                                  }
                                }
                              }
                            },
                            "range": [
                              360,
                              367
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 11
                              },
                              "start": {
                                "column": 59,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 11
                            },
                            "start": {
                              "column": 67,
                              "line": 11
                            }
                          },
                          "range": [
                            368,
                            381
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                378,
                                381
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      379,
                                      380
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    379,
                                    380
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 11
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 11
                                },
                                "start": {
                                  "column": 77,
                                  "line": 11
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "range": [
                                370,
                                378
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 11
                                },
                                "start": {
                                  "column": 69,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              370,
                              381
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 11
                              },
                              "start": {
                                "column": 69,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          359,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 11
                          },
                          "start": {
                            "column": 58,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      351,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 11
                      },
                      "start": {
                        "column": 50,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "progress",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 11
                        },
                        "start": {
                          "column": 91,
                          "line": 11
                        }
                      },
                      "range": [
                        392,
                        409
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ProgressCallback",
                          "optional": false,
                          "range": [
                            393,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 11
                            },
                            "start": {
                              "column": 92,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          393,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 11
                          },
                          "start": {
                            "column": 92,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      383,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 11
                      },
                      "start": {
                        "column": 82,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 11
                    },
                    "start": {
                      "column": 109,
                      "line": 11
                    }
                  },
                  "range": [
                    410,
                    423
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        420,
                        423
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              421,
                              422
                            ],
                            "loc": {
                              "end": {
                                "column": 121,
                                "line": 11
                              },
                              "start": {
                                "column": 120,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            421,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 121,
                              "line": 11
                            },
                            "start": {
                              "column": 120,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 11
                        },
                        "start": {
                          "column": 119,
                          "line": 11
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "range": [
                        412,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 119,
                          "line": 11
                        },
                        "start": {
                          "column": 111,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      412,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 11
                      },
                      "start": {
                        "column": 111,
                        "line": 11
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  },
                  "range": [
                    313,
                    316
                  ],
                  "params": [
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
                          314,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        314,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 123,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              },
              "range": [
                302,
                424
              ],
              "loc": {
                "end": {
                  "column": 123,
                  "line": 11
                },
                "start": {
                  "column": 1,
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
              "column": 33,
              "line": 6
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TPromise",
          "optional": false,
          "range": [
            105,
            113
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 21,
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
              "column": 32,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          },
          "range": [
            113,
            116
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 30,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          91,
          426
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
