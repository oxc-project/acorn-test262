__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    1603
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "range": [
          73,
          92
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                102,
                103
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "range": [
              102,
              103
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "range": [
              112,
              115
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              138,
              143
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 38,
                "line": 4
              }
            }
          },
          "trueType": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  },
                  "range": [
                    120,
                    123
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        122,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      122,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  119,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              },
              "range": [
                125,
                135
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  128,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              118,
              135
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          },
          "range": [
            102,
            143
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                },
                "range": [
                  156,
                  165
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        164,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      164,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 20,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    158,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                155,
                165
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            },
            "range": [
              167,
              177
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                170,
                177
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            }
          },
          "range": [
            154,
            177
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 10,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            188,
            193
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              182,
              183
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "range": [
            182,
            183
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "range": [
          98,
          193
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 24,
            "line": 3
          }
        },
        "range": [
          92,
          95
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
                93,
                94
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        68,
        194
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 7
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
          216,
          349
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "range": [
                220,
                226
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
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
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                227,
                235
              ],
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "range": [
                  229,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              220,
              236
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "range": [
                239,
                246
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 2,
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
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              },
              "range": [
                247,
                255
              ],
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "range": [
                  249,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              239,
              256
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicExtends",
              "optional": false,
              "range": [
                259,
                272
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
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
                  "column": 43,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              },
              "range": [
                273,
                300
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    281,
                    300
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        282,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 25,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false,
                        "range": [
                          290,
                          299
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 12
                          },
                          "start": {
                            "column": 33,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        290,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 12
                        },
                        "start": {
                          "column": 33,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    275,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                },
                "range": [
                  275,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              259,
              301
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateExtends",
              "optional": false,
              "range": [
                304,
                318
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
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
                  "column": 44,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              },
              "range": [
                319,
                346
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    327,
                    346
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        328,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 13
                        },
                        "start": {
                          "column": 26,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false,
                        "range": [
                          336,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 13
                          },
                          "start": {
                            "column": 34,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        336,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 13
                        },
                        "start": {
                          "column": 34,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 13
                    },
                    "start": {
                      "column": 25,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    321,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  }
                },
                "range": [
                  321,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 13
                  },
                  "start": {
                    "column": 19,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              304,
              347
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassSpec",
        "optional": false,
        "range": [
          206,
          215
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        196,
        349
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybeMergePrivateSuperSpec",
        "optional": false,
        "range": [
          356,
          382
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              388,
              389
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 37,
                "line": 16
              }
            }
          },
          "range": [
            388,
            389
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 37,
              "line": 16
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              404,
              423
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  405,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 16
                  },
                  "start": {
                    "column": 54,
                    "line": 16
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassSpec",
                  "optional": false,
                  "range": [
                    413,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 16
                    },
                    "start": {
                      "column": 62,
                      "line": 16
                    }
                  }
                },
                "range": [
                  413,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 16
                  },
                  "start": {
                    "column": 62,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 16
              },
              "start": {
                "column": 53,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              398,
              404
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 16
              },
              "start": {
                "column": 47,
                "line": 16
              }
            }
          },
          "range": [
            398,
            423
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 16
            },
            "start": {
              "column": 47,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            457,
            459
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              449,
              452
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
                    450,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 26,
                      "line": 17
                    }
                  }
                },
                "range": [
                  450,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              }
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
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MergePrivateSuperSpec",
            "optional": false,
            "range": [
              428,
              449
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
          "range": [
            428,
            452
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          388,
          459
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 18
          },
          "start": {
            "column": 37,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 16
          },
          "start": {
            "column": 31,
            "line": 16
          }
        },
        "range": [
          382,
          385
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
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 32,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 32,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        351,
        460
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybeMergePrivateSpecs",
        "optional": false,
        "range": [
          467,
          489
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              516,
              517
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 20
              },
              "start": {
                "column": 54,
                "line": 20
              }
            }
          },
          "range": [
            516,
            517
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 20
            },
            "start": {
              "column": 54,
              "line": 20
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassSpec",
            "optional": false,
            "range": [
              526,
              535
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 20
              },
              "start": {
                "column": 64,
                "line": 20
              }
            }
          },
          "range": [
            526,
            535
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 20
            },
            "start": {
              "column": 64,
              "line": 20
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              568,
              569
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "range": [
            568,
            569
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              557,
              563
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
                    558,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
                    }
                  }
                },
                "range": [
                  558,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    561,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 25,
                      "line": 21
                    }
                  }
                },
                "range": [
                  561,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 21,
                "line": 21
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MergePrivateSpecs",
            "optional": false,
            "range": [
              540,
              557
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "range": [
            540,
            563
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          516,
          569
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 22
          },
          "start": {
            "column": 54,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 20
          },
          "start": {
            "column": 27,
            "line": 20
          }
        },
        "range": [
          489,
          513
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
                "name": "ClassSpec",
                "optional": false,
                "range": [
                  500,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 38,
                    "line": 20
                  }
                }
              },
              "range": [
                500,
                509
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 20
                },
                "start": {
                  "column": 38,
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
                490,
                491
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 28,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              490,
              509
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
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
              "name": "U",
              "optional": false,
              "range": [
                511,
                512
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 20
                },
                "start": {
                  "column": 49,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              511,
              512
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 20
              },
              "start": {
                "column": 49,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        462,
        570
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergePrivateSpecs",
        "optional": false,
        "range": [
          577,
          594
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
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
              "name": "public",
              "optional": false,
              "range": [
                643,
                649
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 25
                },
                "start": {
                  "column": 2,
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
                  "column": 35,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              },
              "range": [
                649,
                676
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"public\"",
                        "value": "public",
                        "range": [
                          653,
                          661
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        653,
                        661
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          651,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 25
                          },
                          "start": {
                            "column": 10,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        651,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 25
                        },
                        "start": {
                          "column": 10,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      651,
                      662
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 10,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"public\"",
                        "value": "public",
                        "range": [
                          667,
                          675
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 25
                          },
                          "start": {
                            "column": 26,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        667,
                        675
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 25
                        },
                        "start": {
                          "column": 26,
                          "line": 25
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          665,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 24,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        665,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 24,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      665,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  651,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              643,
              677
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 2,
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
              "name": "private",
              "optional": false,
              "range": [
                680,
                687
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 2,
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
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              },
              "range": [
                687,
                716
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"private\"",
                        "value": "private",
                        "range": [
                          691,
                          700
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 26
                          },
                          "start": {
                            "column": 13,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        691,
                        700
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          689,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        689,
                        690
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      689,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 26
                      },
                      "start": {
                        "column": 11,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"private\"",
                        "value": "private",
                        "range": [
                          706,
                          715
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 26
                          },
                          "start": {
                            "column": 28,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        706,
                        715
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 26
                        },
                        "start": {
                          "column": 28,
                          "line": 26
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          704,
                          705
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 26
                          },
                          "start": {
                            "column": 26,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        704,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 26
                        },
                        "start": {
                          "column": 26,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      704,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 26
                      },
                      "start": {
                        "column": 26,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  689,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              680,
              717
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "range": [
          639,
          719
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 67,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 24
          },
          "start": {
            "column": 22,
            "line": 24
          }
        },
        "range": [
          594,
          636
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
                "name": "ClassSpec",
                "optional": false,
                "range": [
                  605,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 24
                  },
                  "start": {
                    "column": 33,
                    "line": 24
                  }
                }
              },
              "range": [
                605,
                614
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 24
                },
                "start": {
                  "column": 33,
                  "line": 24
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
                595,
                596
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
            "out": false,
            "range": [
              595,
              614
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassSpec",
                "optional": false,
                "range": [
                  626,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 24
                  },
                  "start": {
                    "column": 54,
                    "line": 24
                  }
                }
              },
              "range": [
                626,
                635
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 24
                },
                "start": {
                  "column": 54,
                  "line": 24
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                616,
                617
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 24
                },
                "start": {
                  "column": 44,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              616,
              635
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 24
              },
              "start": {
                "column": 44,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        572,
        720
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergePrivateSuperSpec",
        "optional": false,
        "range": [
          727,
          748
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            809,
            884
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      878,
                      879
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    878,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "range": [
                  872,
                  879
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 33
                  },
                  "start": {
                    "column": 6,
                    "line": 33
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        835,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 32
                        },
                        "start": {
                          "column": 18,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      835,
                      836
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 32
                      },
                      "start": {
                        "column": 18,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    829,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 32
                    },
                    "start": {
                      "column": 12,
                      "line": 32
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    824,
                    825
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 32
                    },
                    "start": {
                      "column": 7,
                      "line": 32
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      858,
                      864
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              861,
                              862
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 32
                              },
                              "start": {
                                "column": 44,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            861,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 32
                            },
                            "start": {
                              "column": 44,
                              "line": 32
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              859,
                              860
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 32
                              },
                              "start": {
                                "column": 42,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            859,
                            860
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 32
                            },
                            "start": {
                              "column": 42,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          859,
                          863
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 32
                          },
                          "start": {
                            "column": 42,
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
                        "column": 41,
                        "line": 32
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SimplifyPrivateSpec",
                    "optional": false,
                    "range": [
                      839,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 32
                      },
                      "start": {
                        "column": 22,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    839,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 32
                    },
                    "start": {
                      "column": 22,
                      "line": 32
                    }
                  }
                },
                "range": [
                  815,
                  871
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "range": [
                815,
                880
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 34
            },
            "start": {
              "column": 21,
              "line": 30
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "range": [
            790,
            809
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 30
            },
            "start": {
              "column": 2,
              "line": 30
            }
          }
        },
        "range": [
          790,
          884
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 34
          },
          "start": {
            "column": 2,
            "line": 30
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 63,
            "line": 29
          },
          "start": {
            "column": 26,
            "line": 29
          }
        },
        "range": [
          748,
          785
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  765,
                  784
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      766,
                      772
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 29
                      },
                      "start": {
                        "column": 44,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassSpec",
                      "optional": false,
                      "range": [
                        774,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 29
                        },
                        "start": {
                          "column": 52,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      774,
                      783
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 29
                      },
                      "start": {
                        "column": 52,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 29
                  },
                  "start": {
                    "column": 43,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  759,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 29
                  },
                  "start": {
                    "column": 37,
                    "line": 29
                  }
                }
              },
              "range": [
                759,
                784
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 29
                },
                "start": {
                  "column": 37,
                  "line": 29
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
                749,
                750
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 29
                },
                "start": {
                  "column": 27,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              749,
              784
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 29
              },
              "start": {
                "column": 27,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        722,
        885
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        887,
        1095
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SimplifyPrivateSpec",
          "optional": false,
          "range": [
            899,
            918
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 36
            },
            "start": {
              "column": 12,
              "line": 36
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              964,
              1094
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    990,
                    1041
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
                          991,
                          992
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 37
                          },
                          "start": {
                            "column": 25,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        991,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 37
                        },
                        "start": {
                          "column": 25,
                          "line": 37
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1020,
                          1040
                        ],
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"publicExtends\"",
                                "value": "publicExtends",
                                "range": [
                                  1023,
                                  1038
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                1023,
                                1038
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 37
                                },
                                "start": {
                                  "column": 57,
                                  "line": 37
                                }
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1021,
                                  1022
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                1021,
                                1022
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 37
                                },
                                "start": {
                                  "column": 55,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              1021,
                              1039
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 37
                              },
                              "start": {
                                "column": 55,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 37
                          },
                          "start": {
                            "column": 54,
                            "line": 37
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MaybeMergePrivateSuperSpec",
                        "optional": false,
                        "range": [
                          994,
                          1020
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 37
                          },
                          "start": {
                            "column": 28,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        994,
                        1040
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 37
                        },
                        "start": {
                          "column": 28,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 37
                    },
                    "start": {
                      "column": 24,
                      "line": 37
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaybeMergePrivateSpecs",
                  "optional": false,
                  "range": [
                    968,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 37
                    },
                    "start": {
                      "column": 2,
                      "line": 37
                    }
                  }
                },
                "range": [
                  968,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 37
                  },
                  "start": {
                    "column": 2,
                    "line": 37
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1071,
                    1092
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"privateExtends\"",
                          "value": "privateExtends",
                          "range": [
                            1074,
                            1090
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 38
                            },
                            "start": {
                              "column": 31,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1074,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 38
                          },
                          "start": {
                            "column": 31,
                            "line": 38
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            1072,
                            1073
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 38
                            },
                            "start": {
                              "column": 29,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1072,
                          1073
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 38
                          },
                          "start": {
                            "column": 29,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1072,
                        1091
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 38
                        },
                        "start": {
                          "column": 29,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 38
                    },
                    "start": {
                      "column": 28,
                      "line": 38
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaybeMergePrivateSuperSpec",
                  "optional": false,
                  "range": [
                    1045,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 38
                    },
                    "start": {
                      "column": 2,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1045,
                  1092
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 38
                  },
                  "start": {
                    "column": 2,
                    "line": 38
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 39
              },
              "start": {
                "column": 77,
                "line": 36
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MaybeMergePrivateSpecs",
            "optional": false,
            "range": [
              942,
              964
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 36
              },
              "start": {
                "column": 55,
                "line": 36
              }
            }
          },
          "range": [
            942,
            1094
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 55,
              "line": 36
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 52,
              "line": 36
            },
            "start": {
              "column": 31,
              "line": 36
            }
          },
          "range": [
            918,
            939
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
                  "name": "ClassSpec",
                  "optional": false,
                  "range": [
                    929,
                    938
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 36
                    },
                    "start": {
                      "column": 42,
                      "line": 36
                    }
                  }
                },
                "range": [
                  929,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 36
                  },
                  "start": {
                    "column": 42,
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
                  919,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 36
                  },
                  "start": {
                    "column": 32,
                    "line": 36
                  }
                }
              },
              "out": false,
              "range": [
                919,
                938
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 36
                },
                "start": {
                  "column": 32,
                  "line": 36
                }
              }
            }
          ]
        },
        "range": [
          894,
          1095
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Converted",
        "optional": false,
        "range": [
          1193,
          1202
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1224,
                1225
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
              1224,
              1225
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
            1218,
            1225
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 44
            },
            "start": {
              "column": 8,
              "line": 44
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1213,
            1214
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 44
            },
            "start": {
              "column": 3,
              "line": 44
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "range": [
              1228,
              1232
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 44
              },
              "start": {
                "column": 18,
                "line": 44
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1243,
                  1244
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 44
                  },
                  "start": {
                    "column": 33,
                    "line": 44
                  }
                }
              },
              "range": [
                1243,
                1244
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 44
                },
                "start": {
                  "column": 33,
                  "line": 44
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1241,
                  1242
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 31,
                    "line": 44
                  }
                }
              },
              "range": [
                1241,
                1242
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 31,
                  "line": 44
                }
              }
            },
            "range": [
              1241,
              1245
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 44
              },
              "start": {
                "column": 31,
                "line": 44
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1257,
                  1258
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 44
                  },
                  "start": {
                    "column": 47,
                    "line": 44
                  }
                }
              },
              "range": [
                1257,
                1258
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 44
                },
                "start": {
                  "column": 47,
                  "line": 44
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1255,
                  1256
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 44
                  },
                  "start": {
                    "column": 45,
                    "line": 44
                  }
                }
              },
              "range": [
                1255,
                1256
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 44
                },
                "start": {
                  "column": 45,
                  "line": 44
                }
              }
            },
            "range": [
              1255,
              1259
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 44
              },
              "start": {
                "column": 45,
                "line": 44
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1250,
                  1251
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 44
                  },
                  "start": {
                    "column": 40,
                    "line": 44
                  }
                }
              },
              "range": [
                1250,
                1251
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 44
                },
                "start": {
                  "column": 40,
                  "line": 44
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1248,
                  1249
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 44
                  },
                  "start": {
                    "column": 38,
                    "line": 44
                  }
                }
              },
              "range": [
                1248,
                1249
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 44
                },
                "start": {
                  "column": 38,
                  "line": 44
                }
              }
            },
            "range": [
              1248,
              1252
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 44
              },
              "start": {
                "column": 38,
                "line": 44
              }
            }
          },
          "range": [
            1228,
            1259
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 44
            },
            "start": {
              "column": 18,
              "line": 44
            }
          }
        },
        "range": [
          1208,
          1262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 20,
            "line": 43
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 43
          },
          "start": {
            "column": 14,
            "line": 43
          }
        },
        "range": [
          1202,
          1205
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
                1203,
                1204
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 43
                },
                "start": {
                  "column": 15,
                  "line": 43
                }
              }
            },
            "out": false,
            "range": [
              1203,
              1204
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 43
              },
              "start": {
                "column": 15,
                "line": 43
              }
            }
          }
        ]
      },
      "range": [
        1188,
        1263
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultsDeep",
        "optional": false,
        "range": [
          1270,
          1282
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1317,
                1318
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 48
                },
                "start": {
                  "column": 14,
                  "line": 48
                }
              }
            },
            "range": [
              1317,
              1318
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 48
              },
              "start": {
                "column": 14,
                "line": 48
              }
            }
          },
          "range": [
            1311,
            1318
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 8,
              "line": 48
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            1306,
            1307
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 48
            },
            "start": {
              "column": 3,
              "line": 48
            }
          }
        },
        "nameType": null,
        "optional": "-",
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1325,
                  1326
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 48
                  },
                  "start": {
                    "column": 22,
                    "line": 48
                  }
                }
              },
              "range": [
                1325,
                1326
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 48
                },
                "start": {
                  "column": 22,
                  "line": 48
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1323,
                  1324
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 48
                  },
                  "start": {
                    "column": 20,
                    "line": 48
                  }
                }
              },
              "range": [
                1323,
                1324
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 48
                },
                "start": {
                  "column": 20,
                  "line": 48
                }
              }
            },
            "range": [
              1323,
              1327
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 48
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1338,
                  1339
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 48
                  },
                  "start": {
                    "column": 35,
                    "line": 48
                  }
                }
              },
              "range": [
                1338,
                1339
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 48
                },
                "start": {
                  "column": 35,
                  "line": 48
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1336,
                  1337
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 48
                  },
                  "start": {
                    "column": 33,
                    "line": 48
                  }
                }
              },
              "range": [
                1336,
                1337
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 48
                },
                "start": {
                  "column": 33,
                  "line": 48
                }
              }
            },
            "range": [
              1336,
              1340
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 48
              },
              "start": {
                "column": 33,
                "line": 48
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1443,
                  1444
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "range": [
                1443,
                1444
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1441,
                  1442
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 52
                  },
                  "start": {
                    "column": 6,
                    "line": 52
                  }
                }
              },
              "range": [
                1441,
                1442
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 52
                },
                "start": {
                  "column": 6,
                  "line": 52
                }
              }
            },
            "range": [
              1441,
              1445
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
              }
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSNullKeyword",
              "range": [
                1347,
                1351
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 49
                },
                "start": {
                  "column": 6,
                  "line": 49
                }
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1362,
                    1363
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 49
                    },
                    "start": {
                      "column": 21,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1362,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 49
                  },
                  "start": {
                    "column": 21,
                    "line": 49
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1360,
                    1361
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 49
                    },
                    "start": {
                      "column": 19,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1360,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 49
                  },
                  "start": {
                    "column": 19,
                    "line": 49
                  }
                }
              },
              "range": [
                1360,
                1364
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 49
                },
                "start": {
                  "column": 19,
                  "line": 49
                }
              }
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1432,
                    1433
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 51
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1432,
                  1433
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 51
                  },
                  "start": {
                    "column": 10,
                    "line": 51
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1430,
                    1431
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1430,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              "range": [
                1430,
                1434
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 51
                },
                "start": {
                  "column": 8,
                  "line": 51
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1382,
                  1421
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1395,
                        1420
                      ],
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "range": [
                                1398,
                                1399
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 50
                                },
                                "start": {
                                  "column": 33,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1398,
                              1399
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 50
                              },
                              "start": {
                                "column": 33,
                                "line": 50
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1396,
                                1397
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 50
                                },
                                "start": {
                                  "column": 31,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1396,
                              1397
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 50
                              },
                              "start": {
                                "column": 31,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1396,
                            1400
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 50
                            },
                            "start": {
                              "column": 31,
                              "line": 50
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1413,
                              1419
                            ],
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "range": [
                                      1416,
                                      1417
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    1416,
                                    1417
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 50
                                    }
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      1414,
                                      1415
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    1414,
                                    1415
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 50
                                    }
                                  }
                                },
                                "range": [
                                  1414,
                                  1418
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 50
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 50
                              },
                              "start": {
                                "column": 48,
                                "line": 50
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonNullable",
                            "optional": false,
                            "range": [
                              1402,
                              1413
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 50
                              },
                              "start": {
                                "column": 37,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1402,
                            1419
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 50
                            },
                            "start": {
                              "column": 37,
                              "line": 50
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 50
                        },
                        "start": {
                          "column": 30,
                          "line": 50
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultsDeep",
                      "optional": false,
                      "range": [
                        1383,
                        1395
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 50
                        },
                        "start": {
                          "column": 18,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1383,
                      1420
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 50
                      },
                      "start": {
                        "column": 18,
                        "line": 50
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 50
                  },
                  "start": {
                    "column": 17,
                    "line": 50
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Converted",
                "optional": false,
                "range": [
                  1373,
                  1382
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              "range": [
                1373,
                1421
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              1347,
              1434
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "range": [
            1323,
            1445
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 52
            },
            "start": {
              "column": 20,
              "line": 48
            }
          }
        },
        "range": [
          1301,
          1448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 36,
            "line": 47
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 47
          },
          "start": {
            "column": 17,
            "line": 47
          }
        },
        "range": [
          1282,
          1298
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
                1283,
                1284
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 47
                },
                "start": {
                  "column": 18,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1283,
              1284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 47
              },
              "start": {
                "column": 18,
                "line": 47
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1296,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 47
                  },
                  "start": {
                    "column": 31,
                    "line": 47
                  }
                }
              },
              "range": [
                1296,
                1297
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 47
                },
                "start": {
                  "column": 31,
                  "line": 47
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1286,
                1287
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 47
                },
                "start": {
                  "column": 21,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1286,
              1297
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 47
              },
              "start": {
                "column": 21,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1265,
        1449
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1471,
          1535
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "find",
              "optional": false,
              "range": [
                1475,
                1479
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 56
                },
                "start": {
                  "column": 2,
                  "line": 56
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 56
                    },
                    "start": {
                      "column": 29,
                      "line": 56
                    }
                  },
                  "range": [
                    1502,
                    1525
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
                              "column": 40,
                              "line": 56
                            },
                            "start": {
                              "column": 37,
                              "line": 56
                            }
                          },
                          "range": [
                            1510,
                            1513
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1512,
                                1513
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 56
                                },
                                "start": {
                                  "column": 39,
                                  "line": 56
                                }
                              }
                            },
                            "range": [
                              1512,
                              1513
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 56
                              },
                              "start": {
                                "column": 39,
                                "line": 56
                              }
                            }
                          }
                        },
                        "range": [
                          1505,
                          1513
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 56
                          },
                          "start": {
                            "column": 32,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 56
                        },
                        "start": {
                          "column": 42,
                          "line": 56
                        }
                      },
                      "range": [
                        1515,
                        1525
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1518,
                          1525
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 56
                          },
                          "start": {
                            "column": 45,
                            "line": 56
                          }
                        }
                      }
                    },
                    "range": [
                      1504,
                      1525
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 56
                      },
                      "start": {
                        "column": 31,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1493,
                  1525
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 56
                  },
                  "start": {
                    "column": 20,
                    "line": 56
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 56
                },
                "start": {
                  "column": 53,
                  "line": 56
                }
              },
              "range": [
                1526,
                1532
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1528,
                  1532
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 56
                  },
                  "start": {
                    "column": 55,
                    "line": 56
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
                  "line": 56
                },
                "start": {
                  "column": 6,
                  "line": 56
                }
              },
              "range": [
                1479,
                1492
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        1490,
                        1491
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 56
                        },
                        "start": {
                          "column": 17,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1490,
                      1491
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      1480,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 56
                      },
                      "start": {
                        "column": 7,
                        "line": 56
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1480,
                    1491
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 7,
                      "line": 56
                    }
                  }
                }
              ]
            },
            "range": [
              1475,
              1533
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 20,
            "line": 55
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Array",
        "optional": false,
        "range": [
          1461,
          1467
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 55
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 55
          },
          "start": {
            "column": 16,
            "line": 55
          }
        },
        "range": [
          1467,
          1470
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
                1468,
                1469
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1468,
              1469
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 17,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1451,
        1535
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 59
                },
                "start": {
                  "column": 7,
                  "line": 59
                }
              },
              "range": [
                1544,
                1574
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1552,
                    1574
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1565,
                          1573
                        ],
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              1566,
                              1568
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 59
                              },
                              "start": {
                                "column": 29,
                                "line": 59
                              }
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              1570,
                              1572
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 59
                              },
                              "start": {
                                "column": 33,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 59
                          },
                          "start": {
                            "column": 28,
                            "line": 59
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DefaultsDeep",
                        "optional": false,
                        "range": [
                          1553,
                          1565
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 59
                          },
                          "start": {
                            "column": 16,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1553,
                        1573
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 59
                        },
                        "start": {
                          "column": 16,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 59
                    },
                    "start": {
                      "column": 15,
                      "line": 59
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_Array",
                  "optional": false,
                  "range": [
                    1546,
                    1552
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 59
                    },
                    "start": {
                      "column": 9,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1546,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 59
                  },
                  "start": {
                    "column": 9,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1543,
              1574
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              1577,
              1579
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 59
              },
              "start": {
                "column": 40,
                "line": 59
              }
            }
          },
          "range": [
            1543,
            1579
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1537,
        1580
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
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
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1596,
                1600
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 61
                },
                "start": {
                  "column": 14,
                  "line": 61
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
                "name": "_",
                "optional": false,
                "range": [
                  1590,
                  1591
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
              }
            ],
            "range": [
              1589,
              1600
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 61
              },
              "start": {
                "column": 7,
                "line": 61
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
            "name": "z",
            "optional": false,
            "range": [
              1582,
              1583
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 61
              },
              "start": {
                "column": 0,
                "line": 61
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "range": [
              1584,
              1588
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 61
              },
              "start": {
                "column": 2,
                "line": 61
              }
            }
          },
          "range": [
            1582,
            1588
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 61
            }
          }
        },
        "optional": false,
        "range": [
          1582,
          1601
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        1582,
        1602
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 62
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
