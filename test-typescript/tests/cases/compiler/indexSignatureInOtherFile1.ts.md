__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    644
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          20,
          59
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 2,
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
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                30,
                38
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  32,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              24,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  },
                  "range": [
                    44,
                    52
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      46,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  43,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 3
                  },
                  "start": {
                    "column": 3,
                    "line": 3
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
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                53,
                56
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    55,
                    56
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
                "range": [
                  55,
                  56
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
              }
            },
            "range": [
              42,
              57
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        59
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
          89,
          134
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayLength",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  },
                  "range": [
                    109,
                    117
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      111,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  97,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 6,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              },
              "range": [
                118,
                131
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    126,
                    131
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        127,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 36,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array1",
                  "optional": false,
                  "range": [
                    120,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
                    }
                  }
                },
                "range": [
                  120,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              93,
              132
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayConstructor1",
        "optional": false,
        "range": [
          71,
          88
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        61,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "Array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              },
              "range": [
                154,
                173
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayConstructor1",
                  "optional": false,
                  "range": [
                    156,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "range": [
                  156,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              148,
              173
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            148,
            173
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 10
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        136,
        174
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          213,
          260
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  218,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 3,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  225,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                218,
                233
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 3,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              },
              "range": [
                236,
                257
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    254,
                    257
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
                          255,
                          256
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 14
                          },
                          "start": {
                            "column": 40,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        255,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 14
                        },
                        "start": {
                          "column": 40,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 14
                    },
                    "start": {
                      "column": 39,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "range": [
                    238,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 14
                    }
                  }
                },
                "range": [
                  238,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              217,
              258
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 2,
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "range": [
          203,
          209
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        },
        "range": [
          209,
          212
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
                210,
                211
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              210,
              211
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        193,
        260
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          307,
          643
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  449,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 23
                  },
                  "start": {
                    "column": 3,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "unscopables",
                "optional": false,
                "range": [
                  456,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
                  }
                }
              },
              "range": [
                449,
                467
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 3,
                  "line": 23
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 3,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              },
              "range": [
                470,
                640
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
                      "name": "copyWithin",
                      "optional": false,
                      "range": [
                        480,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 24
                        },
                        "start": {
                          "column": 6,
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
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      },
                      "range": [
                        490,
                        499
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          492,
                          499
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      480,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 6,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "range": [
                        507,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 25
                        },
                        "start": {
                          "column": 6,
                          "line": 25
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
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      },
                      "range": [
                        514,
                        523
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          516,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 25
                          },
                          "start": {
                            "column": 15,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      507,
                      524
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 6,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "range": [
                        531,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 26
                        },
                        "start": {
                          "column": 6,
                          "line": 26
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
                          "line": 26
                        },
                        "start": {
                          "column": 10,
                          "line": 26
                        }
                      },
                      "range": [
                        535,
                        544
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          537,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      531,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 6,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "range": [
                        552,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 27
                        },
                        "start": {
                          "column": 6,
                          "line": 27
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
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      },
                      "range": [
                        556,
                        565
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          558,
                          565
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      552,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 27
                      },
                      "start": {
                        "column": 6,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findIndex",
                      "optional": false,
                      "range": [
                        573,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 6,
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
                          "column": 24,
                          "line": 28
                        },
                        "start": {
                          "column": 15,
                          "line": 28
                        }
                      },
                      "range": [
                        582,
                        591
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          584,
                          591
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 28
                          },
                          "start": {
                            "column": 17,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      573,
                      592
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 6,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "range": [
                        599,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 29
                        },
                        "start": {
                          "column": 6,
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
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      },
                      "range": [
                        603,
                        612
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          605,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                      599,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 29
                      },
                      "start": {
                        "column": 6,
                        "line": 29
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
                        620,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 30
                        },
                        "start": {
                          "column": 6,
                          "line": 30
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
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      },
                      "range": [
                        626,
                        635
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          628,
                          635
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 30
                          },
                          "start": {
                            "column": 14,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      620,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 30
                      },
                      "start": {
                        "column": 6,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  472,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 31
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              }
            },
            "static": false,
            "range": [
              448,
              641
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 20,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "range": [
          297,
          303
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 18
          },
          "start": {
            "column": 16,
            "line": 18
          }
        },
        "range": [
          303,
          306
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
                304,
                305
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              304,
              305
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 17,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        287,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    53
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          26,
          53
        ],
        "body": [
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
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  },
                  "range": [
                    34,
                    42
                  ],
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      36,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  31,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
                    "line": 2
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
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              },
              "range": [
                43,
                51
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  45,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
              30,
              51
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 2,
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
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "range": [
          19,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        53
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
