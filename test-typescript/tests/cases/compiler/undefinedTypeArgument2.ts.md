__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    214
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          214
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectMany",
              "optional": false,
              "range": [
                55,
                65
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  },
                  "range": [
                    77,
                    95
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 33,
                              "line": 3
                            }
                          },
                          "range": [
                            84,
                            87
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                86,
                                87
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 3
                                },
                                "start": {
                                  "column": 35,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              86,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 3
                              },
                              "start": {
                                "column": 35,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          80,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      },
                      "range": [
                        89,
                        95
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              92,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 3
                              },
                              "start": {
                                "column": 41,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            92,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 3
                            },
                            "start": {
                              "column": 41,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          92,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 3
                          },
                          "start": {
                            "column": 41,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      79,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  69,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
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
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              },
              "range": [
                96,
                106
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    103,
                    106
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
                          104,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 3
                          },
                          "start": {
                            "column": 53,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 3
                        },
                        "start": {
                          "column": 53,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    98,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 3
                    },
                    "start": {
                      "column": 47,
                      "line": 3
                    }
                  }
                },
                "range": [
                  98,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 47,
                    "line": 3
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
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                65,
                68
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
                      66,
                      67
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
                  "out": false,
                  "range": [
                    66,
                    67
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
              ]
            },
            "range": [
              55,
              107
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectMany",
              "optional": false,
              "range": [
                112,
                122
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                "name": "arraySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  },
                  "range": [
                    139,
                    157
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 4
                            },
                            "start": {
                              "column": 38,
                              "line": 4
                            }
                          },
                          "range": [
                            146,
                            149
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                148,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 4
                                },
                                "start": {
                                  "column": 40,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              148,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 4
                              },
                              "start": {
                                "column": 40,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          142,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 34,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      },
                      "range": [
                        151,
                        157
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              154,
                              155
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 4
                              },
                              "start": {
                                "column": 46,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            154,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 4
                            },
                            "start": {
                              "column": 46,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          154,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 4
                          },
                          "start": {
                            "column": 46,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      141,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 4
                      },
                      "start": {
                        "column": 33,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  126,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resultSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 4
                    },
                    "start": {
                      "column": 65,
                      "line": 4
                    }
                  },
                  "range": [
                    173,
                    200
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 4
                            },
                            "start": {
                              "column": 73,
                              "line": 4
                            }
                          },
                          "range": [
                            181,
                            184
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                183,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 4
                                },
                                "start": {
                                  "column": 75,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              183,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 4
                              },
                              "start": {
                                "column": 75,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          176,
                          184
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
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 4
                            },
                            "start": {
                              "column": 83,
                              "line": 4
                            }
                          },
                          "range": [
                            191,
                            194
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                193,
                                194
                              ],
                              "loc": {
                                "end": {
                                  "column": 86,
                                  "line": 4
                                },
                                "start": {
                                  "column": 85,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              193,
                              194
                            ],
                            "loc": {
                              "end": {
                                "column": 86,
                                "line": 4
                              },
                              "start": {
                                "column": 85,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          186,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 4
                          },
                          "start": {
                            "column": 78,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 4
                        },
                        "start": {
                          "column": 88,
                          "line": 4
                        }
                      },
                      "range": [
                        196,
                        200
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            199,
                            200
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
                          199,
                          200
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
                      }
                    },
                    "range": [
                      175,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 4
                      },
                      "start": {
                        "column": 67,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  159,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 4
                  },
                  "start": {
                    "column": 51,
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
                  "column": 103,
                  "line": 4
                },
                "start": {
                  "column": 93,
                  "line": 4
                }
              },
              "range": [
                201,
                211
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    208,
                    211
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "range": [
                          209,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 102,
                            "line": 4
                          },
                          "start": {
                            "column": 101,
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
                          "column": 102,
                          "line": 4
                        },
                        "start": {
                          "column": 101,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 4
                    },
                    "start": {
                      "column": 100,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    203,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 4
                    },
                    "start": {
                      "column": 95,
                      "line": 4
                    }
                  }
                },
                "range": [
                  203,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 4
                  },
                  "start": {
                    "column": 95,
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
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                122,
                125
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
                      123,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    123,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              112,
              212
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 4
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
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          40,
          45
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        },
        "range": [
          45,
          48
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
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        30,
        214
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
