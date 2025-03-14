__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1312
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          15,
          35
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
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                24,
                32
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  26,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              21,
              33
            ],
            "loc": {
              "end": {
                "column": 16,
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
            "column": 15,
            "line": 1
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
          10,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        35
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          68,
          88
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
                74,
                77
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                77,
                85
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  79,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              74,
              86
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 31,
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
            "name": "Base",
            "optional": false,
            "range": [
              63,
              67
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          "range": [
            63,
            67
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
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
          47,
          54
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        37,
        88
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
                311,
                356
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
                      321,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    },
                    "range": [
                      324,
                      330
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          326,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        326,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    321,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      340,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    },
                    "range": [
                      343,
                      349
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          345,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 14
                          },
                          "start": {
                            "column": 13,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        345,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    340,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 12
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
                309,
                310
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              299,
              356
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                384,
                449
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
                      394,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
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
                        "line": 18
                      },
                      "start": {
                        "column": 11,
                        "line": 18
                      }
                    },
                    "range": [
                      397,
                      406
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          399,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 18
                          },
                          "start": {
                            "column": 13,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        399,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    394,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      422,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
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
                        "line": 19
                      },
                      "start": {
                        "column": 11,
                        "line": 19
                      }
                    },
                    "range": [
                      425,
                      433
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        427,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 13,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    422,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 17
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    382,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
                    }
                  }
                },
                "range": [
                  382,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 17
                  },
                  "start": {
                    "column": 24,
                    "line": 17
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                372,
                373
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "range": [
              362,
              449
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                468,
                511
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      478,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
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
                        "column": 15,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    },
                    "range": [
                      479,
                      485
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          481,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        481,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    478,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2.0",
                    "value": 2,
                    "range": [
                      495,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
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
                        "column": 17,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    },
                    "range": [
                      498,
                      504
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          500,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        500,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    495,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                465,
                467
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 22
                }
              }
            },
            "range": [
              455,
              511
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                541,
                602
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      551,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    },
                    "range": [
                      552,
                      561
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          554,
                          561
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 28
                          },
                          "start": {
                            "column": 11,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        554,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 28
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    551,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      577,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                        "column": 17,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    },
                    "range": [
                      578,
                      586
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        580,
                        586
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 29
                        },
                        "start": {
                          "column": 11,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    577,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                  "column": 28,
                  "line": 27
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
                  "name": "A2",
                  "optional": false,
                  "range": [
                    538,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 27
                    },
                    "start": {
                      "column": 25,
                      "line": 27
                    }
                  }
                },
                "range": [
                  538,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 25,
                    "line": 27
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                527,
                529
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 14,
                  "line": 27
                }
              }
            },
            "range": [
              517,
              602
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                621,
                668
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      631,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
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
                        "column": 17,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 33
                      }
                    },
                    "range": [
                      634,
                      640
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          636,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 33
                          },
                          "start": {
                            "column": 13,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        636,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 33
                        },
                        "start": {
                          "column": 13,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    631,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'2.0'",
                    "value": "2.0",
                    "range": [
                      650,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
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
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    },
                    "range": [
                      655,
                      661
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          657,
                          661
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        657,
                        661
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    650,
                    662
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 32
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                618,
                620
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              }
            },
            "range": [
              608,
              668
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                698,
                765
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      708,
                      711
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
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
                        "line": 38
                      },
                      "start": {
                        "column": 11,
                        "line": 38
                      }
                    },
                    "range": [
                      711,
                      720
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          713,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 38
                          },
                          "start": {
                            "column": 13,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        713,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 38
                        },
                        "start": {
                          "column": 13,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    708,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'2.0'",
                    "value": "2.0",
                    "range": [
                      736,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    },
                    "range": [
                      741,
                      749
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        743,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    736,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 28,
                  "line": 37
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
                  "name": "A3",
                  "optional": false,
                  "range": [
                    695,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 37
                    },
                    "start": {
                      "column": 25,
                      "line": 37
                    }
                  }
                },
                "range": [
                  695,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 37
                  },
                  "start": {
                    "column": 25,
                    "line": 37
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                684,
                686
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 37
                },
                "start": {
                  "column": 14,
                  "line": 37
                }
              }
            },
            "range": [
              674,
              765
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          293,
          767
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 19,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          281,
          292
        ],
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        274,
        767
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 11
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
                844,
                891
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
                      854,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    },
                    "range": [
                      858,
                      864
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          860,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 46
                          },
                          "start": {
                            "column": 14,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        860,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 46
                        },
                        "start": {
                          "column": 14,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    854,
                    865
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      874,
                      877
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
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
                        "line": 47
                      },
                      "start": {
                        "column": 12,
                        "line": 47
                      }
                    },
                    "range": [
                      878,
                      884
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          880,
                          884
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        880,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 47
                        },
                        "start": {
                          "column": 14,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    874,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 16,
                  "line": 45
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
                842,
                843
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 45
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              }
            },
            "range": [
              832,
              891
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                919,
                986
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
                      929,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                        "line": 51
                      },
                      "start": {
                        "column": 12,
                        "line": 51
                      }
                    },
                    "range": [
                      933,
                      942
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          935,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 51
                          },
                          "start": {
                            "column": 14,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        935,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 51
                        },
                        "start": {
                          "column": 14,
                          "line": 51
                        }
                      }
                    }
                  },
                  "range": [
                    929,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      958,
                      961
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
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
                        "line": 52
                      },
                      "start": {
                        "column": 12,
                        "line": 52
                      }
                    },
                    "range": [
                      962,
                      970
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        964,
                        970
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 52
                        },
                        "start": {
                          "column": 14,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    958,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 26,
                  "line": 50
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
                  "name": "A",
                  "optional": false,
                  "range": [
                    917,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 50
                    },
                    "start": {
                      "column": 24,
                      "line": 50
                    }
                  }
                },
                "range": [
                  917,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 50
                  },
                  "start": {
                    "column": 24,
                    "line": 50
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                907,
                908
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 50
                },
                "start": {
                  "column": 14,
                  "line": 50
                }
              }
            },
            "range": [
              897,
              986
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1005,
                1050
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1015,
                      1016
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
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
                        "column": 16,
                        "line": 56
                      },
                      "start": {
                        "column": 10,
                        "line": 56
                      }
                    },
                    "range": [
                      1017,
                      1023
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1019,
                          1023
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1019,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    1015,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2.0",
                    "value": 2,
                    "range": [
                      1033,
                      1036
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
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
                        "line": 57
                      },
                      "start": {
                        "column": 12,
                        "line": 57
                      }
                    },
                    "range": [
                      1037,
                      1043
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1039,
                          1043
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 57
                          },
                          "start": {
                            "column": 14,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1039,
                        1043
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 57
                        },
                        "start": {
                          "column": 14,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1033,
                    1044
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "range": [
                1002,
                1004
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              }
            },
            "range": [
              992,
              1050
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1080,
                1143
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1090,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
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
                        "line": 61
                      },
                      "start": {
                        "column": 10,
                        "line": 61
                      }
                    },
                    "range": [
                      1092,
                      1101
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1094,
                          1101
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1094,
                        1101
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
                        }
                      }
                    }
                  },
                  "range": [
                    1090,
                    1102
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      1117,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
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
                        "line": 62
                      },
                      "start": {
                        "column": 10,
                        "line": 62
                      }
                    },
                    "range": [
                      1119,
                      1127
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1121,
                        1127
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 62
                        },
                        "start": {
                          "column": 12,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1117,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 28,
                  "line": 60
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
                  "name": "A2",
                  "optional": false,
                  "range": [
                    1077,
                    1079
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 60
                    },
                    "start": {
                      "column": 25,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1077,
                  1079
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 60
                  },
                  "start": {
                    "column": 25,
                    "line": 60
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "range": [
                1066,
                1068
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 60
                },
                "start": {
                  "column": 14,
                  "line": 60
                }
              }
            },
            "range": [
              1056,
              1143
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1162,
                1211
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      1172,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
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
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    },
                    "range": [
                      1176,
                      1182
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1178,
                          1182
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 66
                          },
                          "start": {
                            "column": 14,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1178,
                        1182
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 66
                        },
                        "start": {
                          "column": 14,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1172,
                    1183
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'2.0'",
                    "value": "2.0",
                    "range": [
                      1192,
                      1197
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
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
                        "line": 67
                      },
                      "start": {
                        "column": 14,
                        "line": 67
                      }
                    },
                    "range": [
                      1198,
                      1204
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1200,
                          1204
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 67
                          },
                          "start": {
                            "column": 16,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1200,
                        1204
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 67
                        },
                        "start": {
                          "column": 16,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    1192,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "range": [
                1159,
                1161
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 65
                },
                "start": {
                  "column": 14,
                  "line": 65
                }
              }
            },
            "range": [
              1149,
              1211
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1241,
                1310
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      1251,
                      1254
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
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
                        "line": 71
                      },
                      "start": {
                        "column": 12,
                        "line": 71
                      }
                    },
                    "range": [
                      1255,
                      1264
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1257,
                          1264
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 71
                          },
                          "start": {
                            "column": 14,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1257,
                        1264
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 71
                        },
                        "start": {
                          "column": 14,
                          "line": 71
                        }
                      }
                    }
                  },
                  "range": [
                    1251,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "'2.0'",
                    "value": "2.0",
                    "range": [
                      1280,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
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
                        "line": 72
                      },
                      "start": {
                        "column": 14,
                        "line": 72
                      }
                    },
                    "range": [
                      1286,
                      1294
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1288,
                        1294
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 72
                        },
                        "start": {
                          "column": 16,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    1280,
                    1295
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 28,
                  "line": 70
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
                  "name": "A3",
                  "optional": false,
                  "range": [
                    1238,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 70
                    },
                    "start": {
                      "column": 25,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1238,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 70
                  },
                  "start": {
                    "column": 25,
                    "line": 70
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "range": [
                1227,
                1229
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 70
                },
                "start": {
                  "column": 14,
                  "line": 70
                }
              }
            },
            "range": [
              1217,
              1310
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          826,
          1312
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 16,
            "line": 44
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          817,
          825
        ],
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "kind": "module",
      "range": [
        810,
        1312
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 74
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
