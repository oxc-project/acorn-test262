__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    661
  ],
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
            "name": "$q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                26
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IQService",
                  "optional": false,
                  "range": [
                    17,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                },
                "range": [
                  17,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              13,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            13,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          295
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "range": [
                55,
                58
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  },
                  "range": [
                    72,
                    116
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            83,
                            87
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "range": [
                                  84,
                                  86
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                84,
                                86
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
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
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            75,
                            83
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          75,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            97,
                            101
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "range": [
                                  98,
                                  100
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                98,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 4
                                },
                                "start": {
                                  "column": 47,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 4
                            },
                            "start": {
                              "column": 46,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            89,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 4
                            },
                            "start": {
                              "column": 38,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          89,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 4
                          },
                          "start": {
                            "column": 38,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            111,
                            115
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T3",
                                "optional": false,
                                "range": [
                                  112,
                                  114
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                112,
                                114
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 4
                                },
                                "start": {
                                  "column": 61,
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
                              "column": 60,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            103,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 4
                            },
                            "start": {
                              "column": 52,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          103,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 4
                          },
                          "start": {
                            "column": 52,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      74,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  71,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 90,
                  "line": 4
                },
                "start": {
                  "column": 66,
                  "line": 4
                }
              },
              "range": [
                117,
                141
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    127,
                    141
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "range": [
                              129,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 4
                              },
                              "start": {
                                "column": 78,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            129,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 4
                            },
                            "start": {
                              "column": 78,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "range": [
                              133,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 4
                              },
                              "start": {
                                "column": 82,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            133,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 4
                            },
                            "start": {
                              "column": 82,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "range": [
                              137,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 4
                              },
                              "start": {
                                "column": 86,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            137,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 4
                            },
                            "start": {
                              "column": 86,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        128,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
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
                      "column": 90,
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
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    119,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 4
                    },
                    "start": {
                      "column": 68,
                      "line": 4
                    }
                  }
                },
                "range": [
                  119,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 4
                  },
                  "start": {
                    "column": 68,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                58,
                70
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      59,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    59,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
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
                    "name": "T2",
                    "optional": false,
                    "range": [
                      63,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    63,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
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
                    "name": "T3",
                    "optional": false,
                    "range": [
                      67,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    67,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              55,
              142
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "range": [
                147,
                150
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  },
                  "range": [
                    160,
                    190
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            171,
                            175
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "range": [
                                  172,
                                  174
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                172,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 5
                                },
                                "start": {
                                  "column": 29,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 28,
                              "line": 5
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            163,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          163,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            185,
                            189
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "range": [
                                  186,
                                  188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                186,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 5
                                },
                                "start": {
                                  "column": 43,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 5
                            },
                            "start": {
                              "column": 42,
                              "line": 5
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            177,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 5
                            },
                            "start": {
                              "column": 34,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          177,
                          189
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 5
                          },
                          "start": {
                            "column": 34,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      162,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  159,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
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
                  "column": 68,
                  "line": 5
                },
                "start": {
                  "column": 48,
                  "line": 5
                }
              },
              "range": [
                191,
                211
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    201,
                    211
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "range": [
                              203,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 5
                              },
                              "start": {
                                "column": 60,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            203,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 5
                            },
                            "start": {
                              "column": 60,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "range": [
                              207,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 5
                              },
                              "start": {
                                "column": 64,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            207,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 5
                            },
                            "start": {
                              "column": 64,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        202,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 5
                        },
                        "start": {
                          "column": 59,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 5
                    },
                    "start": {
                      "column": 58,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    193,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 5
                    },
                    "start": {
                      "column": 50,
                      "line": 5
                    }
                  }
                },
                "range": [
                  193,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
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
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                150,
                158
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      151,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    151,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
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
                    "name": "T2",
                    "optional": false,
                    "range": [
                      155,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    155,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              147,
              212
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "range": [
                217,
                220
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
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  },
                  "range": [
                    226,
                    242
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            237,
                            241
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "range": [
                                  238,
                                  240
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                238,
                                240
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "range": [
                            229,
                            237
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          229,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      228,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  225,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              },
              "range": [
                243,
                259
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    253,
                    259
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "range": [
                              255,
                              257
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 6
                              },
                              "start": {
                                "column": 42,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            255,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 6
                            },
                            "start": {
                              "column": 42,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        254,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 6
                        },
                        "start": {
                          "column": 41,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 6
                    },
                    "start": {
                      "column": 40,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    245,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 32,
                      "line": 6
                    }
                  }
                },
                "range": [
                  245,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
                    "line": 6
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              },
              "range": [
                220,
                224
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      221,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    221,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              217,
              260
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "when",
              "optional": false,
              "range": [
                265,
                269
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
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  },
                  "range": [
                    275,
                    278
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        277,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      277,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  273,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              },
              "range": [
                279,
                292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    289,
                    292
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
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 29,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        290,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 29,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    281,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                },
                "range": [
                  281,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                269,
                272
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
                      270,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    270,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              265,
              293
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 4,
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
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IQService",
        "optional": false,
        "range": [
          39,
          48
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        29,
        295
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
          319,
          389
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                325,
                329
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  },
                  "range": [
                    347,
                    366
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          },
                          "range": [
                            351,
                            354
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                353,
                                354
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 11
                                },
                                "start": {
                                  "column": 32,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              353,
                              354
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          350,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 11
                        },
                        "start": {
                          "column": 35,
                          "line": 11
                        }
                      },
                      "range": [
                        356,
                        366
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "range": [
                            359,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 38,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          359,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 11
                          },
                          "start": {
                            "column": 38,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      349,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 28,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  339,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 11
                },
                "start": {
                  "column": 46,
                  "line": 11
                }
              },
              "range": [
                367,
                386
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    377,
                    386
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "range": [
                          378,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 11
                          },
                          "start": {
                            "column": 57,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        378,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 11
                        },
                        "start": {
                          "column": 57,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 11
                    },
                    "start": {
                      "column": 56,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    369,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 11
                    },
                    "start": {
                      "column": 48,
                      "line": 11
                    }
                  }
                },
                "range": [
                  369,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 11
                  },
                  "start": {
                    "column": 48,
                    "line": 11
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              },
              "range": [
                329,
                338
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      330,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    330,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                }
              ]
            },
            "range": [
              325,
              387
            ],
            "loc": {
              "end": {
                "column": 66,
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
            "column": 22,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "range": [
          307,
          315
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 10
          },
          "start": {
            "column": 18,
            "line": 10
          }
        },
        "range": [
          315,
          318
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
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              316,
              317
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        297,
        389
      ],
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
            "range": [
              423,
              424
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          435,
                          437
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          438,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 19,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        435,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        442,
                        450
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            443,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 15
                            },
                            "start": {
                              "column": 24,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      435,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 16,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          454,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 15
                          },
                          "start": {
                            "column": 35,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          457,
                          461
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 15
                          },
                          "start": {
                            "column": 38,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        454,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 15
                        },
                        "start": {
                          "column": 35,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        461,
                        469
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            462,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 15
                            },
                            "start": {
                              "column": 43,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 15
                        },
                        "start": {
                          "column": 42,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      454,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 35,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  434,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
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
                "name": "$q",
                "optional": false,
                "range": [
                  427,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "range": [
                  430,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "range": [
                427,
                433
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              427,
              473
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            423,
            473
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        419,
        474
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "b",
            "optional": false,
            "range": [
              508,
              509
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          536,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 18
                          },
                          "start": {
                            "column": 32,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          539,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 18
                          },
                          "start": {
                            "column": 35,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        536,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 32,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        543,
                        551
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            544,
                            550
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 18
                            },
                            "start": {
                              "column": 40,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 18
                        },
                        "start": {
                          "column": 39,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      536,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 32,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          555,
                          557
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 18
                          },
                          "start": {
                            "column": 51,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          558,
                          562
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 18
                          },
                          "start": {
                            "column": 54,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        555,
                        562
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 18
                        },
                        "start": {
                          "column": 51,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        562,
                        570
                      ],
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            563,
                            569
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 18
                            },
                            "start": {
                              "column": 59,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 18
                        },
                        "start": {
                          "column": 58,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      555,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 18
                      },
                      "start": {
                        "column": 51,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  535,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 18
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
                "name": "$q",
                "optional": false,
                "range": [
                  512,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "range": [
                  515,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "range": [
                512,
                518
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                518,
                534
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    519,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    527,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 23,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "range": [
              512,
              574
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            508,
            574
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        504,
        575
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "c",
            "optional": false,
            "range": [
              609,
              610
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          621,
                          623
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          624,
                          628
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 21
                          },
                          "start": {
                            "column": 19,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        621,
                        628
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 21
                        },
                        "start": {
                          "column": 16,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        628,
                        636
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            629,
                            635
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      621,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "range": [
                          640,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 21
                          },
                          "start": {
                            "column": 35,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "range": [
                          643,
                          647
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 21
                          },
                          "start": {
                            "column": 38,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        640,
                        647
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 21
                        },
                        "start": {
                          "column": 35,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        647,
                        655
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            648,
                            654
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 21
                            },
                            "start": {
                              "column": 43,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 21
                        },
                        "start": {
                          "column": 42,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      640,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 21
                      },
                      "start": {
                        "column": 35,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  620,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
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
                "name": "$q",
                "optional": false,
                "range": [
                  613,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "range": [
                  616,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              },
              "range": [
                613,
                619
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              613,
              659
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            609,
            659
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 21
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
        605,
        660
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
