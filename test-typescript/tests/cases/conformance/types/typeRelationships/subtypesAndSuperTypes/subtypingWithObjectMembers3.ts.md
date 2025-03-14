__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1277
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
                359
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
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    },
                    "range": [
                      343,
                      352
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          345,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
              359
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
                387,
                450
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
                      397,
                      400
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
                      400,
                      409
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          402,
                          409
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
                        402,
                        409
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
                    397,
                    410
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
                      425,
                      428
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
                        "column": 17,
                        "line": 19
                      },
                      "start": {
                        "column": 11,
                        "line": 19
                      }
                    },
                    "range": [
                      428,
                      434
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          430,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 19
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        430,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
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
                    425,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                    385,
                    386
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
                  385,
                  386
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
                375,
                376
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
              365,
              450
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
                469,
                515
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
                      479,
                      480
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
                      480,
                      486
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          482,
                          486
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
                        482,
                        486
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
                    479,
                    487
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
                      496,
                      499
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
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    },
                    "range": [
                      499,
                      508
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          501,
                          508
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        501,
                        508
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                    496,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                466,
                468
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
              456,
              515
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
                545,
                604
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
                      555,
                      556
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
                      556,
                      565
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          558,
                          565
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
                        558,
                        565
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
                    555,
                    566
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
                      581,
                      582
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
                        "column": 15,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    },
                    "range": [
                      582,
                      588
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          584,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 29
                          },
                          "start": {
                            "column": 11,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        584,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
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
                    581,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                    542,
                    544
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
                  542,
                  544
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
                531,
                533
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
              521,
              604
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
                623,
                673
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
                      633,
                      636
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
                      636,
                      642
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          638,
                          642
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
                        638,
                        642
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
                    633,
                    643
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
                      652,
                      657
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
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    },
                    "range": [
                      657,
                      666
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          659,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        659,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
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
                    652,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                620,
                622
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
              610,
              673
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
                703,
                768
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
                      713,
                      716
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
                      716,
                      725
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          718,
                          725
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
                        718,
                        725
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
                    713,
                    726
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
                      741,
                      746
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
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    },
                    "range": [
                      746,
                      752
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          748,
                          752
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        748,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
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
                    741,
                    753
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                    700,
                    702
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
                  700,
                  702
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
                689,
                691
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
              679,
              768
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
          770
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
        770
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
                806,
                856
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
                      816,
                      819
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
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
                        "line": 45
                      },
                      "start": {
                        "column": 12,
                        "line": 45
                      }
                    },
                    "range": [
                      820,
                      826
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          822,
                          826
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 45
                          },
                          "start": {
                            "column": 14,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        822,
                        826
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 45
                        },
                        "start": {
                          "column": 14,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    816,
                    827
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
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
                      836,
                      839
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
                        "column": 21,
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    },
                    "range": [
                      840,
                      849
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          842,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 46
                          },
                          "start": {
                            "column": 14,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        842,
                        849
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
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
                    836,
                    850
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 16,
                  "line": 44
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
                804,
                805
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              }
            },
            "range": [
              794,
              856
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                884,
                949
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
                      894,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                        "line": 50
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    },
                    "range": [
                      898,
                      907
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          900,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 50
                          },
                          "start": {
                            "column": 14,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        900,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 50
                        },
                        "start": {
                          "column": 14,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    894,
                    908
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
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
                      923,
                      926
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
                        "column": 18,
                        "line": 51
                      },
                      "start": {
                        "column": 12,
                        "line": 51
                      }
                    },
                    "range": [
                      927,
                      933
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          929,
                          933
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 51
                          },
                          "start": {
                            "column": 14,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        929,
                        933
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
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
                    923,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 26,
                  "line": 49
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
                    882,
                    883
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 49
                    },
                    "start": {
                      "column": 24,
                      "line": 49
                    }
                  }
                },
                "range": [
                  882,
                  883
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 49
                  },
                  "start": {
                    "column": 24,
                    "line": 49
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
                872,
                873
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            },
            "range": [
              862,
              949
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                968,
                1016
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
                      978,
                      979
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
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
                        "line": 55
                      },
                      "start": {
                        "column": 10,
                        "line": 55
                      }
                    },
                    "range": [
                      980,
                      986
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          982,
                          986
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        982,
                        986
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    978,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
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
                      996,
                      999
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
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
                        "column": 21,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    },
                    "range": [
                      1000,
                      1009
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1002,
                          1009
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 14,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1002,
                        1009
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 56
                        },
                        "start": {
                          "column": 14,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    996,
                    1010
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 17,
                  "line": 54
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
                965,
                967
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 54
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              }
            },
            "range": [
              955,
              1016
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1046,
                1107
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
                      1056,
                      1057
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
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
                        "line": 60
                      },
                      "start": {
                        "column": 10,
                        "line": 60
                      }
                    },
                    "range": [
                      1058,
                      1067
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1060,
                          1067
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 60
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1060,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 60
                        },
                        "start": {
                          "column": 12,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    1056,
                    1068
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
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
                      1083,
                      1084
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
                        "column": 16,
                        "line": 61
                      },
                      "start": {
                        "column": 10,
                        "line": 61
                      }
                    },
                    "range": [
                      1085,
                      1091
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1087,
                          1091
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1087,
                        1091
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                    1083,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 28,
                  "line": 59
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
                    1043,
                    1045
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 59
                    },
                    "start": {
                      "column": 25,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1043,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 59
                  },
                  "start": {
                    "column": 25,
                    "line": 59
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
                1032,
                1034
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 59
                },
                "start": {
                  "column": 14,
                  "line": 59
                }
              }
            },
            "range": [
              1022,
              1107
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1126,
                1178
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
                      1136,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
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
                        "line": 65
                      },
                      "start": {
                        "column": 12,
                        "line": 65
                      }
                    },
                    "range": [
                      1140,
                      1146
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1142,
                          1146
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 65
                          },
                          "start": {
                            "column": 14,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1142,
                        1146
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 65
                        },
                        "start": {
                          "column": 14,
                          "line": 65
                        }
                      }
                    }
                  },
                  "range": [
                    1136,
                    1147
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
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
                      1156,
                      1161
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                        "column": 23,
                        "line": 66
                      },
                      "start": {
                        "column": 14,
                        "line": 66
                      }
                    },
                    "range": [
                      1162,
                      1171
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1164,
                          1171
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 66
                          },
                          "start": {
                            "column": 16,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1164,
                        1171
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 66
                        },
                        "start": {
                          "column": 16,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1156,
                    1172
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 17,
                  "line": 64
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
                1123,
                1125
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 64
                },
                "start": {
                  "column": 14,
                  "line": 64
                }
              }
            },
            "range": [
              1113,
              1178
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1208,
                1275
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
                      1218,
                      1221
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
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
                        "line": 70
                      },
                      "start": {
                        "column": 12,
                        "line": 70
                      }
                    },
                    "range": [
                      1222,
                      1231
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "range": [
                          1224,
                          1231
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 70
                          },
                          "start": {
                            "column": 14,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1224,
                        1231
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 70
                        },
                        "start": {
                          "column": 14,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1218,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
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
                      1247,
                      1252
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                        "column": 20,
                        "line": 71
                      },
                      "start": {
                        "column": 14,
                        "line": 71
                      }
                    },
                    "range": [
                      1253,
                      1259
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1255,
                          1259
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 71
                          },
                          "start": {
                            "column": 16,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1255,
                        1259
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 71
                        },
                        "start": {
                          "column": 16,
                          "line": 71
                        }
                      }
                    }
                  },
                  "range": [
                    1247,
                    1260
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 72
                },
                "start": {
                  "column": 28,
                  "line": 69
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
                    1205,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 69
                    },
                    "start": {
                      "column": 25,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1205,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 69
                  },
                  "start": {
                    "column": 25,
                    "line": 69
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
                1194,
                1196
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            },
            "range": [
              1184,
              1275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          788,
          1277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 16,
            "line": 43
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          779,
          787
        ],
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "kind": "module",
      "range": [
        772,
        1277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 73
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
