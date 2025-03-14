__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    620
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocaleData",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            24,
            39
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                25,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNeverKeyword",
              "range": [
                33,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            18,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "range": [
          18,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConvertLocaleConfig",
        "optional": false,
        "range": [
          45,
          64
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            108,
            125
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                112,
                118
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
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
                  122,
                  123
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
                122,
                123
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 68,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            102,
            108
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 2
            },
            "start": {
              "column": 62,
              "line": 2
            }
          }
        },
        "range": [
          102,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 62,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        },
        "range": [
          64,
          99
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
                "name": "LocaleData",
                "optional": false,
                "range": [
                  75,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 35,
                    "line": 2
                  }
                }
              },
              "range": [
                75,
                85
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "range": [
                  88,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 48,
                    "line": 2
                  }
                }
              },
              "range": [
                88,
                98
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 48,
                  "line": 2
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
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              65,
              98
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        40,
        126
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocaleConfig",
        "optional": false,
        "range": [
          132,
          144
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            188,
            208
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                189,
                195
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 6
                },
                "start": {
                  "column": 62,
                  "line": 6
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  204,
                  207
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
                        205,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 6
                        },
                        "start": {
                          "column": 78,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      205,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 6
                      },
                      "start": {
                        "column": 78,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 6
                  },
                  "start": {
                    "column": 77,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  197,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 6
                  },
                  "start": {
                    "column": 70,
                    "line": 6
                  }
                }
              },
              "range": [
                197,
                207
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 6
                },
                "start": {
                  "column": 70,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 6
            },
            "start": {
              "column": 61,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            182,
            188
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 6
            },
            "start": {
              "column": 55,
              "line": 6
            }
          }
        },
        "range": [
          182,
          208
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 6
          },
          "start": {
            "column": 55,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        },
        "range": [
          144,
          179
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
                "name": "LocaleData",
                "optional": false,
                "range": [
                  155,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              },
              "range": [
                155,
                165
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "range": [
                  168,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 41,
                    "line": 6
                  }
                }
              },
              "range": [
                168,
                178
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 41,
                  "line": 6
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
                145,
                146
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              145,
              178
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 18,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        127,
        209
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 6
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
        211,
        387
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            268,
            387
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "app",
                "optional": false,
                "range": [
                  274,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
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
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                },
                "range": [
                  277,
                  286
                ],
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    279,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                274,
                287
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "range": [
                  292,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                },
                "range": [
                  299,
                  323
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      320,
                      323
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
                            321,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 10
                            },
                            "start": {
                              "column": 33,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          321,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 10
                          },
                          "start": {
                            "column": 33,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 32,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "range": [
                      301,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    301,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                292,
                324
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 4,
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
                "name": "config",
                "optional": false,
                "range": [
                  329,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
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
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  336,
                  365
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          350,
                          353
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
                                351,
                                352
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              351,
                              352
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 11
                              },
                              "start": {
                                "column": 26,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 25,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LocaleConfig",
                        "optional": false,
                        "range": [
                          338,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 13,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        338,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        356,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    338,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                329,
                366
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 11
                },
                "start": {
                  "column": 4,
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
                "name": "name",
                "optional": false,
                "range": [
                  371,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
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
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                },
                "range": [
                  376,
                  384
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    378,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                371,
                385
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              "column": 57,
              "line": 8
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetLocalesOptions",
          "optional": false,
          "range": [
            228,
            245
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 17,
              "line": 8
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          },
          "range": [
            245,
            267
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
                  "name": "LocaleData",
                  "optional": false,
                  "range": [
                    256,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 8
                    },
                    "start": {
                      "column": 45,
                      "line": 8
                    }
                  }
                },
                "range": [
                  256,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 8
                  },
                  "start": {
                    "column": 45,
                    "line": 8
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
                  246,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 35,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                246,
                266
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 8
                },
                "start": {
                  "column": 35,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          218,
          387
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        389,
        619
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getLocales",
              "optional": false,
              "range": [
                402,
                412
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultLocalesConfig",
                      "optional": false,
                      "range": [
                        595,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      588,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  582,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 22
                  },
                  "start": {
                    "column": 52,
                    "line": 20
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "range": [
                          444,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 16
                          },
                          "start": {
                            "column": 4,
                            "line": 16
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "range": [
                          444,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 16
                          },
                          "start": {
                            "column": 4,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        444,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          453,
                          457
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 17
                          },
                          "start": {
                            "column": 4,
                            "line": 17
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          453,
                          457
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 17
                          },
                          "start": {
                            "column": 4,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        453,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 17
                        },
                        "start": {
                          "column": 4,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "range": [
                          463,
                          470
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 18
                          },
                          "start": {
                            "column": 4,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultLocalesConfig",
                        "optional": false,
                        "range": [
                          472,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 18
                          },
                          "start": {
                            "column": 13,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        463,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 18
                        },
                        "start": {
                          "column": 4,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "range": [
                          498,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 19
                          },
                          "start": {
                            "column": 4,
                            "line": 19
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          506,
                          528
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "userLocalesConfig",
                          "optional": false,
                          "range": [
                            506,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            526,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 19
                            },
                            "start": {
                              "column": 32,
                              "line": 19
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        498,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 1,
                        "line": 20
                      }
                    },
                    "range": [
                      531,
                      553
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          550,
                          553
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
                                551,
                                552
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 20
                                },
                                "start": {
                                  "column": 21,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              551,
                              552
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 20
                              },
                              "start": {
                                "column": 21,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GetLocalesOptions",
                        "optional": false,
                        "range": [
                          533,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 20
                          },
                          "start": {
                            "column": 3,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        533,
                        553
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 20
                        },
                        "start": {
                          "column": 3,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    438,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 49,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                },
                "range": [
                  554,
                  578
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      575,
                      578
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
                            576,
                            577
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 20
                            },
                            "start": {
                              "column": 46,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          576,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 20
                          },
                          "start": {
                            "column": 46,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 20
                      },
                      "start": {
                        "column": 45,
                        "line": 20
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "range": [
                      556,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    556,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 26,
                    "line": 15
                  }
                },
                "range": [
                  415,
                  437
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
                        "name": "LocaleData",
                        "optional": false,
                        "range": [
                          426,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 15
                          },
                          "start": {
                            "column": 37,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        426,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 15
                        },
                        "start": {
                          "column": 37,
                          "line": 15
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
                        416,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      416,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  }
                ]
              },
              "range": [
                415,
                618
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 22
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              }
            },
            "range": [
              402,
              618
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 15
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          396,
          619
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
