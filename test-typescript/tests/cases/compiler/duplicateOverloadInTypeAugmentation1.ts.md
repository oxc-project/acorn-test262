__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    340
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          282
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "range": [
                25,
                31
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  },
                  "range": [
                    42,
                    118
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previousValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 2
                            },
                            "start": {
                              "column": 37,
                              "line": 2
                            }
                          },
                          "range": [
                            58,
                            61
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                60,
                                61
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 2
                                },
                                "start": {
                                  "column": 39,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              60,
                              61
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 2
                              },
                              "start": {
                                "column": 39,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          45,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 2
                            },
                            "start": {
                              "column": 54,
                              "line": 2
                            }
                          },
                          "range": [
                            75,
                            78
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                77,
                                78
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 2
                                },
                                "start": {
                                  "column": 56,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              77,
                              78
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 2
                              },
                              "start": {
                                "column": 56,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          63,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 2
                          },
                          "start": {
                            "column": 42,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 2
                            },
                            "start": {
                              "column": 71,
                              "line": 2
                            }
                          },
                          "range": [
                            92,
                            100
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              94,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 2
                              },
                              "start": {
                                "column": 73,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          80,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 2
                          },
                          "start": {
                            "column": 59,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 2
                            },
                            "start": {
                              "column": 86,
                              "line": 2
                            }
                          },
                          "range": [
                            107,
                            112
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  109,
                                  110
                                ],
                                "loc": {
                                  "end": {
                                    "column": 89,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 88,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                109,
                                110
                              ],
                              "loc": {
                                "end": {
                                  "column": 89,
                                  "line": 2
                                },
                                "start": {
                                  "column": 88,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              109,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 91,
                                "line": 2
                              },
                              "start": {
                                "column": 88,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          102,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 2
                          },
                          "start": {
                            "column": 81,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 2
                        },
                        "start": {
                          "column": 93,
                          "line": 2
                        }
                      },
                      "range": [
                        114,
                        118
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            117,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 2
                            },
                            "start": {
                              "column": 96,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          117,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 2
                          },
                          "start": {
                            "column": 96,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      44,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  32,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialValue",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  },
                  "range": [
                    141,
                    144
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        143,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      143,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  128,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              },
              "range": [
                145,
                148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    147,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                },
                "range": [
                  147,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              25,
              149
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "range": [
                154,
                160
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 4
                    },
                    "start": {
                      "column": 24,
                      "line": 4
                    }
                  },
                  "range": [
                    174,
                    250
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previousValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 4
                            },
                            "start": {
                              "column": 40,
                              "line": 4
                            }
                          },
                          "range": [
                            190,
                            193
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                192,
                                193
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 4
                                },
                                "start": {
                                  "column": 42,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              192,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 4
                              },
                              "start": {
                                "column": 42,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          177,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 4
                            },
                            "start": {
                              "column": 57,
                              "line": 4
                            }
                          },
                          "range": [
                            207,
                            210
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                209,
                                210
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 4
                                },
                                "start": {
                                  "column": 59,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              209,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 4
                              },
                              "start": {
                                "column": 59,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          195,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 4
                          },
                          "start": {
                            "column": 45,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 4
                            },
                            "start": {
                              "column": 74,
                              "line": 4
                            }
                          },
                          "range": [
                            224,
                            232
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              226,
                              232
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 4
                              },
                              "start": {
                                "column": 76,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          212,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 4
                          },
                          "start": {
                            "column": 62,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 4
                            },
                            "start": {
                              "column": 89,
                              "line": 4
                            }
                          },
                          "range": [
                            239,
                            244
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  241,
                                  242
                                ],
                                "loc": {
                                  "end": {
                                    "column": 92,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 91,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                241,
                                242
                              ],
                              "loc": {
                                "end": {
                                  "column": 92,
                                  "line": 4
                                },
                                "start": {
                                  "column": 91,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              241,
                              244
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 4
                              },
                              "start": {
                                "column": 91,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          234,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 4
                          },
                          "start": {
                            "column": 84,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 4
                        },
                        "start": {
                          "column": 96,
                          "line": 4
                        }
                      },
                      "range": [
                        246,
                        250
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            249,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 4
                            },
                            "start": {
                              "column": 99,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          249,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 4
                          },
                          "start": {
                            "column": 99,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      176,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  164,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    272,
                    275
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        274,
                        275
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      274,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  260,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              },
              "range": [
                276,
                279
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    278,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
                    }
                  }
                },
                "range": [
                  278,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              },
              "range": [
                160,
                163
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
                      161,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    161,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              154,
              280
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
        "name": "Array",
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
        282
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                288,
                303
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    295,
                    303
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        296,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    290,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  290,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              287,
              303
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            287,
            303
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        283,
        304
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "r5",
            "optional": false,
            "range": [
              309,
              311
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      333,
                      334
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      337,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    333,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
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
                      324,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      327,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  323,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
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
                "name": "a",
                "optional": false,
                "range": [
                  314,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "range": [
                  316,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                314,
                322
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              314,
              339
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          },
          "range": [
            309,
            339
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        305,
        340
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 35,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
