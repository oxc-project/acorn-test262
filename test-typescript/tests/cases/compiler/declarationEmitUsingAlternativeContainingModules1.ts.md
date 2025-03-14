__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4041
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryKey",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
            29,
            38
          ],
          "params": [
            {
              "type": "TSUnknownKeyword",
              "range": [
                30,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "range": [
            16,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "range": [
          16,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 16,
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          60,
          62
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Register",
        "optional": false,
        "range": [
          51,
          59
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        41,
        62
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultError",
        "optional": false,
        "range": [
          69,
          81
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
            "name": "Register",
            "optional": false,
            "range": [
              84,
              92
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
            84,
            92
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
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultError",
                "optional": false,
                "range": [
                  105,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
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
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                },
                "range": [
                  117,
                  131
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
                      "name": "TError",
                      "optional": false,
                      "range": [
                        125,
                        131
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      125,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    119,
                    131
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
              },
              "range": [
                105,
                132
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            101,
            134
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Error",
            "optional": false,
            "range": [
              150,
              155
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "range": [
            150,
            155
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TError",
            "optional": false,
            "range": [
              139,
              145
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "range": [
            139,
            145
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "range": [
          84,
          155
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 9
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "range": [
        64,
        156
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldRetryFunction",
        "optional": false,
        "range": [
          163,
          182
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "failureCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
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
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
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
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
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
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                241,
                249
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "range": [
                    243,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  243,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              236,
              249
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 12,
              "line": 14
            },
            "start": {
              "column": 2,
              "line": 14
            }
          },
          "range": [
            253,
            263
          ],
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "range": [
              256,
              263
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 14
              },
              "start": {
                "column": 5,
                "line": 14
              }
            }
          }
        },
        "range": [
          208,
          263
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 50,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 11
          },
          "start": {
            "column": 24,
            "line": 11
          }
        },
        "range": [
          182,
          205
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  192,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 34,
                    "line": 11
                  }
                }
              },
              "range": [
                192,
                204
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 11
                },
                "start": {
                  "column": 34,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                183,
                189
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              183,
              204
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        158,
        264
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RetryValue",
        "optional": false,
        "range": [
          270,
          280
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSBooleanKeyword",
            "range": [
              291,
              298
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 15
              },
              "start": {
                "column": 26,
                "line": 15
              }
            }
          },
          {
            "type": "TSNumberKeyword",
            "range": [
              301,
              307
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 36,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                329,
                337
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "range": [
                      330,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 15
                      },
                      "start": {
                        "column": 65,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    330,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 15
                    },
                    "start": {
                      "column": 65,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 15
                },
                "start": {
                  "column": 64,
                  "line": 15
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ShouldRetryFunction",
              "optional": false,
              "range": [
                310,
                329
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 15
                },
                "start": {
                  "column": 45,
                  "line": 15
                }
              }
            },
            "range": [
              310,
              337
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 15
              },
              "start": {
                "column": 45,
                "line": 15
              }
            }
          }
        ],
        "range": [
          291,
          337
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 15
          },
          "start": {
            "column": 26,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        },
        "range": [
          280,
          288
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                281,
                287
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              281,
              287
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        265,
        338
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunctionContext",
        "optional": false,
        "range": [
          345,
          365
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPageParam",
                "optional": false,
                "range": [
                  435,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              },
              "range": [
                435,
                445
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            434,
            446
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "range": [
                456,
                461
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            455,
            462
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 20
            },
            "start": {
              "column": 25,
              "line": 20
            }
          }
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "range": [
                  514,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                    "column": 25,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                },
                "range": [
                  522,
                  533
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "range": [
                      524,
                      533
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    524,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                514,
                534
              ],
              "loc": {
                "end": {
                  "column": 26,
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
                "name": "pageParam",
                "optional": false,
                "range": [
                  541,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                },
                "range": [
                  550,
                  562
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TPageParam",
                    "optional": false,
                    "range": [
                      552,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    552,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 26
                    },
                    "start": {
                      "column": 17,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                541,
                563
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            }
          ],
          "range": [
            506,
            569
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "range": [
                  475,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
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
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 22
                  }
                },
                "range": [
                  483,
                  494
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "range": [
                      485,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    485,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                }
              },
              "range": [
                475,
                495
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            467,
            501
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          434,
          569
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 27
          },
          "start": {
            "column": 4,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 25,
            "line": 17
          }
        },
        "range": [
          365,
          431
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  387,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "range": [
                387,
                395
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  398,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 18
                  }
                }
              },
              "range": [
                398,
                406
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                369,
                378
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              369,
              406
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                423,
                428
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "range": [
                410,
                420
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              410,
              428
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        340,
        570
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunction",
        "optional": false,
        "range": [
          577,
          590
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              },
              "range": [
                682,
                727
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    704,
                    727
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "range": [
                          705,
                          714
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 33
                          },
                          "start": {
                            "column": 35,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        705,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 33
                        },
                        "start": {
                          "column": 35,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "range": [
                          716,
                          726
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 33
                          },
                          "start": {
                            "column": 46,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        716,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 33
                        },
                        "start": {
                          "column": 46,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 33
                    },
                    "start": {
                      "column": 34,
                      "line": 33
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryFunctionContext",
                  "optional": false,
                  "range": [
                    684,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 33
                    },
                    "start": {
                      "column": 14,
                      "line": 33
                    }
                  }
                },
                "range": [
                  684,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 33
                  },
                  "start": {
                    "column": 14,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              675,
              727
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 33
              },
              "start": {
                "column": 5,
                "line": 33
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 76,
              "line": 33
            },
            "start": {
              "column": 59,
              "line": 33
            }
          },
          "range": [
            729,
            746
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    732,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 33
                    },
                    "start": {
                      "column": 62,
                      "line": 33
                    }
                  }
                },
                "range": [
                  732,
                  733
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 33
                  },
                  "start": {
                    "column": 62,
                    "line": 33
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    743,
                    746
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
                          744,
                          745
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 33
                          },
                          "start": {
                            "column": 74,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        744,
                        745
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 33
                        },
                        "start": {
                          "column": 74,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 33
                    },
                    "start": {
                      "column": 73,
                      "line": 33
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    736,
                    743
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 33
                    },
                    "start": {
                      "column": 66,
                      "line": 33
                    }
                  }
                },
                "range": [
                  736,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 33
                  },
                  "start": {
                    "column": 66,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              732,
              746
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 33
              },
              "start": {
                "column": 62,
                "line": 33
              }
            }
          }
        },
        "range": [
          674,
          746
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 33
          },
          "start": {
            "column": 4,
            "line": 33
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 18,
            "line": 29
          }
        },
        "range": [
          590,
          671
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                598,
                605
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
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
                594,
                595
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              594,
              605
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  627,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 31
                  }
                }
              },
              "range": [
                627,
                635
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  638,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 31
                  },
                  "start": {
                    "column": 31,
                    "line": 31
                  }
                }
              },
              "range": [
                638,
                646
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 31
                },
                "start": {
                  "column": 31,
                  "line": 31
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                609,
                618
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 2,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              609,
              646
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                663,
                668
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "range": [
                650,
                660
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              650,
              668
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        572,
        747
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          913,
          1119
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retry",
              "optional": false,
              "range": [
                917,
                922
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 42
                },
                "start": {
                  "column": 2,
                  "line": 42
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
                  "column": 28,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              },
              "range": [
                923,
                943
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    935,
                    943
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TError",
                        "optional": false,
                        "range": [
                          936,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 42
                          },
                          "start": {
                            "column": 21,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        936,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 42
                        },
                        "start": {
                          "column": 21,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RetryValue",
                  "optional": false,
                  "range": [
                    925,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  925,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              917,
              944
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryFn",
              "optional": false,
              "range": [
                947,
                954
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
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
                  "column": 62,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              },
              "range": [
                955,
                1007
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    970,
                    1007
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryFnData",
                        "optional": false,
                        "range": [
                          971,
                          983
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 43
                          },
                          "start": {
                            "column": 26,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        971,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 43
                        },
                        "start": {
                          "column": 26,
                          "line": 43
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "range": [
                          985,
                          994
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 43
                          },
                          "start": {
                            "column": 40,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        985,
                        994
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 43
                        },
                        "start": {
                          "column": 40,
                          "line": 43
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "range": [
                          996,
                          1006
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 43
                          },
                          "start": {
                            "column": 51,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        996,
                        1006
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 43
                        },
                        "start": {
                          "column": 51,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 43
                    },
                    "start": {
                      "column": 25,
                      "line": 43
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryFunction",
                  "optional": false,
                  "range": [
                    957,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 43
                    },
                    "start": {
                      "column": 12,
                      "line": 43
                    }
                  }
                },
                "range": [
                  957,
                  1007
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 43
                  },
                  "start": {
                    "column": 12,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              947,
              1008
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryKey",
              "optional": false,
              "range": [
                1011,
                1019
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 44
                },
                "start": {
                  "column": 2,
                  "line": 44
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
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              },
              "range": [
                1020,
                1031
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "range": [
                    1022,
                    1031
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 44
                    },
                    "start": {
                      "column": 13,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1022,
                  1031
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 44
                  },
                  "start": {
                    "column": 13,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1011,
              1032
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialData",
              "optional": false,
              "range": [
                1035,
                1046
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 2,
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
                  "column": 21,
                  "line": 45
                },
                "start": {
                  "column": 14,
                  "line": 45
                }
              },
              "range": [
                1047,
                1054
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "range": [
                    1049,
                    1054
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 45
                    },
                    "start": {
                      "column": 16,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1049,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 45
                  },
                  "start": {
                    "column": 16,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1035,
              1055
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 45
              },
              "start": {
                "column": 2,
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
              "name": "initialDataUpdatedAt",
              "optional": false,
              "range": [
                1058,
                1078
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 46
                },
                "start": {
                  "column": 2,
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
                  "column": 60,
                  "line": 46
                },
                "start": {
                  "column": 23,
                  "line": 46
                }
              },
              "range": [
                1079,
                1116
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1081,
                      1087
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 46
                      },
                      "start": {
                        "column": 25,
                        "line": 46
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 46
                        },
                        "start": {
                          "column": 38,
                          "line": 46
                        }
                      },
                      "range": [
                        1094,
                        1115
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1097,
                              1103
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 46
                              },
                              "start": {
                                "column": 41,
                                "line": 46
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              1106,
                              1115
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 46
                              },
                              "start": {
                                "column": 50,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "range": [
                          1097,
                          1115
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 46
                          },
                          "start": {
                            "column": 41,
                            "line": 46
                          }
                        }
                      }
                    },
                    "range": [
                      1091,
                      1115
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 46
                      },
                      "start": {
                        "column": 35,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  1081,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 46
                  },
                  "start": {
                    "column": 25,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1058,
              1117
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 46
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 2,
            "line": 41
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryOptions",
        "optional": false,
        "range": [
          759,
          771
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 22,
            "line": 35
          }
        },
        "range": [
          771,
          912
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                790,
                797
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 36
                },
                "start": {
                  "column": 17,
                  "line": 36
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "range": [
                775,
                787
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              775,
              797
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  810,
                  822
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 37
                  }
                }
              },
              "range": [
                810,
                822
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                801,
                807
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 37
                },
                "start": {
                  "column": 2,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              801,
              822
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  834,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              },
              "range": [
                834,
                846
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 38
                },
                "start": {
                  "column": 10,
                  "line": 38
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                826,
                831
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              826,
              846
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  868,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 39
                  },
                  "start": {
                    "column": 20,
                    "line": 39
                  }
                }
              },
              "range": [
                868,
                876
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 39
                },
                "start": {
                  "column": 20,
                  "line": 39
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  879,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 39
                  },
                  "start": {
                    "column": 31,
                    "line": 39
                  }
                }
              },
              "range": [
                879,
                887
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 39
                },
                "start": {
                  "column": 31,
                  "line": 39
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                850,
                859
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 39
                },
                "start": {
                  "column": 2,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              850,
              887
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                904,
                909
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "range": [
                891,
                901
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 2,
                  "line": 40
                }
              }
            },
            "out": false,
            "range": [
              891,
              909
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          }
        ]
      },
      "range": [
        749,
        1119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1424,
          1516
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enabled",
              "optional": false,
              "range": [
                1428,
                1435
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 63
                },
                "start": {
                  "column": 2,
                  "line": 63
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
                  "line": 63
                },
                "start": {
                  "column": 10,
                  "line": 63
                }
              },
              "range": [
                1436,
                1445
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1438,
                  1445
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 63
                  },
                  "start": {
                    "column": 12,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              1428,
              1446
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 63
              },
              "start": {
                "column": 2,
                "line": 63
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "refetchInterval",
              "optional": false,
              "range": [
                1449,
                1464
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 64
                },
                "start": {
                  "column": 2,
                  "line": 64
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
                  "column": 26,
                  "line": 64
                },
                "start": {
                  "column": 18,
                  "line": 64
                }
              },
              "range": [
                1465,
                1473
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1467,
                  1473
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 64
                  },
                  "start": {
                    "column": 20,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1449,
              1474
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 64
              },
              "start": {
                "column": 2,
                "line": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "range": [
                1477,
                1483
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 65
                },
                "start": {
                  "column": 2,
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
                  "column": 38,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              },
              "range": [
                1484,
                1513
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 65
                        },
                        "start": {
                          "column": 16,
                          "line": 65
                        }
                      },
                      "range": [
                        1491,
                        1503
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TQueryData",
                          "optional": false,
                          "range": [
                            1493,
                            1503
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 65
                            },
                            "start": {
                              "column": 18,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1493,
                          1503
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 65
                          },
                          "start": {
                            "column": 18,
                            "line": 65
                          }
                        }
                      }
                    },
                    "range": [
                      1487,
                      1503
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 65
                      },
                      "start": {
                        "column": 12,
                        "line": 65
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 65
                    },
                    "start": {
                      "column": 30,
                      "line": 65
                    }
                  },
                  "range": [
                    1505,
                    1513
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "range": [
                        1508,
                        1513
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 65
                        },
                        "start": {
                          "column": 33,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1508,
                      1513
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 65
                      },
                      "start": {
                        "column": 33,
                        "line": 65
                      }
                    }
                  }
                },
                "range": [
                  1486,
                  1513
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1477,
              1514
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 4,
            "line": 62
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
            "name": "QueryOptions",
            "optional": false,
            "range": [
              1330,
              1342
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 56
              },
              "start": {
                "column": 10,
                "line": 56
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1342,
              1423
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryFnData",
                  "optional": false,
                  "range": [
                    1348,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1348,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "range": [
                    1366,
                    1372
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1366,
                  1372
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryData",
                  "optional": false,
                  "range": [
                    1378,
                    1388
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1378,
                  1388
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "range": [
                    1394,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 60
                    },
                    "start": {
                      "column": 4,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1394,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPageParam",
                  "optional": false,
                  "range": [
                    1409,
                    1419
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 61
                    },
                    "start": {
                      "column": 4,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1409,
                  1419
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 62
              },
              "start": {
                "column": 22,
                "line": 56
              }
            }
          },
          "range": [
            1330,
            1423
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 62
            },
            "start": {
              "column": 10,
              "line": 56
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverOptions",
        "optional": false,
        "range": [
          1131,
          1151
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 49
          },
          "start": {
            "column": 10,
            "line": 49
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 30,
            "line": 49
          }
        },
        "range": [
          1151,
          1321
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                1170,
                1177
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "range": [
                1155,
                1167
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 50
                },
                "start": {
                  "column": 2,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1155,
              1177
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 50
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  1190,
                  1202
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 51
                  },
                  "start": {
                    "column": 11,
                    "line": 51
                  }
                }
              },
              "range": [
                1190,
                1202
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                1181,
                1187
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 51
                },
                "start": {
                  "column": 2,
                  "line": 51
                }
              }
            },
            "out": false,
            "range": [
              1181,
              1202
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  1214,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 52
                  },
                  "start": {
                    "column": 10,
                    "line": 52
                  }
                }
              },
              "range": [
                1214,
                1226
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 52
                },
                "start": {
                  "column": 10,
                  "line": 52
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                1206,
                1211
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 52
                },
                "start": {
                  "column": 2,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1206,
              1226
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 52
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  1243,
                  1255
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 53
                  },
                  "start": {
                    "column": 15,
                    "line": 53
                  }
                }
              },
              "range": [
                1243,
                1255
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 53
                },
                "start": {
                  "column": 15,
                  "line": 53
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "range": [
                1230,
                1240
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 53
                },
                "start": {
                  "column": 2,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1230,
              1255
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 53
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  1277,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 54
                  },
                  "start": {
                    "column": 20,
                    "line": 54
                  }
                }
              },
              "range": [
                1277,
                1285
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 54
                },
                "start": {
                  "column": 20,
                  "line": 54
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  1288,
                  1296
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 54
                  },
                  "start": {
                    "column": 31,
                    "line": 54
                  }
                }
              },
              "range": [
                1288,
                1296
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 54
                },
                "start": {
                  "column": 31,
                  "line": 54
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                1259,
                1268
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 54
                },
                "start": {
                  "column": 2,
                  "line": 54
                }
              }
            },
            "out": false,
            "range": [
              1259,
              1296
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 54
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                1313,
                1318
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 55
                },
                "start": {
                  "column": 15,
                  "line": 55
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "range": [
                1300,
                1310
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 55
                },
                "start": {
                  "column": 2,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1300,
              1318
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1121,
        1516
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "range": [
          1523,
          1538
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1732,
                1808
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "range": [
                      1738,
                      1750
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 76
                      },
                      "start": {
                        "column": 4,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1738,
                    1750
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 76
                    },
                    "start": {
                      "column": 4,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "range": [
                      1756,
                      1762
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1756,
                    1762
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 77
                    },
                    "start": {
                      "column": 4,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "range": [
                      1768,
                      1773
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 78
                      },
                      "start": {
                        "column": 4,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1768,
                    1773
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 78
                    },
                    "start": {
                      "column": 4,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "range": [
                      1779,
                      1789
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 79
                      },
                      "start": {
                        "column": 4,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1779,
                    1789
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 79
                    },
                    "start": {
                      "column": 4,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "range": [
                      1795,
                      1804
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 80
                      },
                      "start": {
                        "column": 4,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    1795,
                    1804
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 81
                },
                "start": {
                  "column": 41,
                  "line": 75
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "range": [
                1712,
                1732
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 75
                },
                "start": {
                  "column": 21,
                  "line": 75
                }
              }
            },
            "range": [
              1712,
              1808
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 81
              },
              "start": {
                "column": 21,
                "line": 75
              }
            }
          },
          "range": [
            1706,
            1808
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 81
            },
            "start": {
              "column": 15,
              "line": 75
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Property",
          "optional": false,
          "range": [
            1694,
            1702
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 75
            },
            "start": {
              "column": 3,
              "line": 75
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "range": [
                1908,
                1916
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              1908,
              1916
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1831,
                1907
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "range": [
                      1837,
                      1849
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 82
                      },
                      "start": {
                        "column": 4,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1837,
                    1849
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "range": [
                      1855,
                      1861
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 83
                      },
                      "start": {
                        "column": 4,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    1855,
                    1861
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 83
                    },
                    "start": {
                      "column": 4,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "range": [
                      1867,
                      1872
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 84
                      },
                      "start": {
                        "column": 4,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    1867,
                    1872
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 84
                    },
                    "start": {
                      "column": 4,
                      "line": 84
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "range": [
                      1878,
                      1888
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 85
                      },
                      "start": {
                        "column": 4,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    1878,
                    1888
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "range": [
                      1894,
                      1903
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 86
                      },
                      "start": {
                        "column": 4,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1894,
                    1903
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 87
                },
                "start": {
                  "column": 26,
                  "line": 81
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "range": [
                1811,
                1831
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 81
                },
                "start": {
                  "column": 6,
                  "line": 81
                }
              }
            },
            "range": [
              1811,
              1907
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 87
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          },
          "range": [
            1811,
            1917
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 87
            },
            "start": {
              "column": 6,
              "line": 81
            }
          }
        },
        "range": [
          1689,
          1920
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 4,
            "line": 74
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 20,
            "line": 68
          }
        },
        "range": [
          1538,
          1686
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                1557,
                1564
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 69
                },
                "start": {
                  "column": 17,
                  "line": 69
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "range": [
                1542,
                1554
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 69
                },
                "start": {
                  "column": 2,
                  "line": 69
                }
              }
            },
            "out": false,
            "range": [
              1542,
              1564
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 69
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  1577,
                  1589
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 70
                  },
                  "start": {
                    "column": 11,
                    "line": 70
                  }
                }
              },
              "range": [
                1577,
                1589
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 70
                },
                "start": {
                  "column": 11,
                  "line": 70
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                1568,
                1574
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 70
                },
                "start": {
                  "column": 2,
                  "line": 70
                }
              }
            },
            "out": false,
            "range": [
              1568,
              1589
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 70
              },
              "start": {
                "column": 2,
                "line": 70
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  1601,
                  1613
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 71
                  },
                  "start": {
                    "column": 10,
                    "line": 71
                  }
                }
              },
              "range": [
                1601,
                1613
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 71
                },
                "start": {
                  "column": 10,
                  "line": 71
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                1593,
                1598
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 71
                },
                "start": {
                  "column": 2,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1593,
              1613
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 71
              },
              "start": {
                "column": 2,
                "line": 71
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  1630,
                  1642
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 72
                  },
                  "start": {
                    "column": 15,
                    "line": 72
                  }
                }
              },
              "range": [
                1630,
                1642
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 72
                },
                "start": {
                  "column": 15,
                  "line": 72
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "range": [
                1617,
                1627
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 72
                },
                "start": {
                  "column": 2,
                  "line": 72
                }
              }
            },
            "out": false,
            "range": [
              1617,
              1642
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 72
              },
              "start": {
                "column": 2,
                "line": 72
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  1664,
                  1672
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 73
                  },
                  "start": {
                    "column": 20,
                    "line": 73
                  }
                }
              },
              "range": [
                1664,
                1672
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 20,
                  "line": 73
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  1675,
                  1683
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 73
                  },
                  "start": {
                    "column": 31,
                    "line": 73
                  }
                }
              },
              "range": [
                1675,
                1683
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 73
                },
                "start": {
                  "column": 31,
                  "line": 73
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                1646,
                1655
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 73
                },
                "start": {
                  "column": 2,
                  "line": 73
                }
              }
            },
            "out": false,
            "range": [
              1646,
              1683
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 73
              },
              "start": {
                "column": 2,
                "line": 73
              }
            }
          }
        ]
      },
      "range": [
        1518,
        1921
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedInitialQueryOptions",
        "optional": false,
        "range": [
          1928,
          1956
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2093,
                2147
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "range": [
                      2094,
                      2106
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 95
                      },
                      "start": {
                        "column": 20,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2094,
                    2106
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 95
                    },
                    "start": {
                      "column": 20,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "range": [
                      2108,
                      2114
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 95
                      },
                      "start": {
                        "column": 34,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2108,
                    2114
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 95
                    },
                    "start": {
                      "column": 34,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "range": [
                      2116,
                      2121
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 95
                      },
                      "start": {
                        "column": 42,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2116,
                    2121
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 95
                    },
                    "start": {
                      "column": 42,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "range": [
                      2123,
                      2135
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 95
                      },
                      "start": {
                        "column": 49,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2123,
                    2135
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 95
                    },
                    "start": {
                      "column": 49,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "range": [
                      2137,
                      2146
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 95
                      },
                      "start": {
                        "column": 63,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2137,
                    2146
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 95
                    },
                    "start": {
                      "column": 63,
                      "line": 95
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 95
                },
                "start": {
                  "column": 19,
                  "line": 95
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UseQueryOptions",
              "optional": false,
              "range": [
                2078,
                2093
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            "range": [
              2078,
              2147
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialData",
                  "optional": false,
                  "range": [
                    2154,
                    2165
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 96
                    },
                    "start": {
                      "column": 2,
                      "line": 96
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
                      "column": 25,
                      "line": 96
                    },
                    "start": {
                      "column": 14,
                      "line": 96
                    }
                  },
                  "range": [
                    2166,
                    2177
                  ],
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      2168,
                      2177
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 96
                      },
                      "start": {
                        "column": 16,
                        "line": 96
                      }
                    }
                  }
                },
                "range": [
                  2154,
                  2178
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 96
                  },
                  "start": {
                    "column": 2,
                    "line": 96
                  }
                }
              }
            ],
            "range": [
              2150,
              2180
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 97
              },
              "start": {
                "column": 76,
                "line": 95
              }
            }
          }
        ],
        "range": [
          2078,
          2180
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 4,
            "line": 95
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 33,
            "line": 90
          }
        },
        "range": [
          1956,
          2075
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                1975,
                1982
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 91
                },
                "start": {
                  "column": 17,
                  "line": 91
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "range": [
                1960,
                1972
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 91
                },
                "start": {
                  "column": 2,
                  "line": 91
                }
              }
            },
            "out": false,
            "range": [
              1960,
              1982
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 91
              },
              "start": {
                "column": 2,
                "line": 91
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  1995,
                  2007
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 92
                  },
                  "start": {
                    "column": 11,
                    "line": 92
                  }
                }
              },
              "range": [
                1995,
                2007
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 92
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                1986,
                1992
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 92
                },
                "start": {
                  "column": 2,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              1986,
              2007
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 92
              },
              "start": {
                "column": 2,
                "line": 92
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  2019,
                  2031
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 93
                  },
                  "start": {
                    "column": 10,
                    "line": 93
                  }
                }
              },
              "range": [
                2019,
                2031
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 93
                },
                "start": {
                  "column": 10,
                  "line": 93
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                2011,
                2016
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 93
                },
                "start": {
                  "column": 2,
                  "line": 93
                }
              }
            },
            "out": false,
            "range": [
              2011,
              2031
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 93
              },
              "start": {
                "column": 2,
                "line": 93
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  2053,
                  2061
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 94
                  },
                  "start": {
                    "column": 20,
                    "line": 94
                  }
                }
              },
              "range": [
                2053,
                2061
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 94
                },
                "start": {
                  "column": 20,
                  "line": 94
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  2064,
                  2072
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 94
                  },
                  "start": {
                    "column": 31,
                    "line": 94
                  }
                }
              },
              "range": [
                2064,
                2072
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 94
                },
                "start": {
                  "column": 31,
                  "line": 94
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                2035,
                2044
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 94
                },
                "start": {
                  "column": 2,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              2035,
              2072
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 94
              },
              "start": {
                "column": 2,
                "line": 94
              }
            }
          }
        ]
      },
      "range": [
        1923,
        2181
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2257,
          2788
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                2261,
                2265
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 100
                },
                "start": {
                  "column": 2,
                  "line": 100
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
                  "line": 100
                },
                "start": {
                  "column": 6,
                  "line": 100
                }
              },
              "range": [
                2265,
                2284
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "range": [
                        2267,
                        2272
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 100
                        },
                        "start": {
                          "column": 8,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2267,
                      2272
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      2275,
                      2284
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 100
                      },
                      "start": {
                        "column": 16,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  2267,
                  2284
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 100
                  },
                  "start": {
                    "column": 8,
                    "line": 100
                  }
                }
              }
            },
            "range": [
              2261,
              2285
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 100
              },
              "start": {
                "column": 2,
                "line": 100
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataUpdatedAt",
              "optional": false,
              "range": [
                2288,
                2301
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 101
                },
                "start": {
                  "column": 2,
                  "line": 101
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
                  "column": 23,
                  "line": 101
                },
                "start": {
                  "column": 15,
                  "line": 101
                }
              },
              "range": [
                2301,
                2309
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2303,
                  2309
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 101
                  },
                  "start": {
                    "column": 17,
                    "line": 101
                  }
                }
              }
            },
            "range": [
              2288,
              2310
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 101
              },
              "start": {
                "column": 2,
                "line": 101
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                2313,
                2318
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 102
                },
                "start": {
                  "column": 2,
                  "line": 102
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
                  "line": 102
                },
                "start": {
                  "column": 7,
                  "line": 102
                }
              },
              "range": [
                2318,
                2333
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "range": [
                        2320,
                        2326
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 102
                        },
                        "start": {
                          "column": 9,
                          "line": 102
                        }
                      }
                    },
                    "range": [
                      2320,
                      2326
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 102
                      },
                      "start": {
                        "column": 9,
                        "line": 102
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      2329,
                      2333
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 102
                      },
                      "start": {
                        "column": 18,
                        "line": 102
                      }
                    }
                  }
                ],
                "range": [
                  2320,
                  2333
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 102
                  },
                  "start": {
                    "column": 9,
                    "line": 102
                  }
                }
              }
            },
            "range": [
              2313,
              2334
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 102
              },
              "start": {
                "column": 2,
                "line": 102
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdatedAt",
              "optional": false,
              "range": [
                2337,
                2351
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 103
                },
                "start": {
                  "column": 2,
                  "line": 103
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
                  "line": 103
                },
                "start": {
                  "column": 16,
                  "line": 103
                }
              },
              "range": [
                2351,
                2359
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2353,
                  2359
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 103
                  },
                  "start": {
                    "column": 18,
                    "line": 103
                  }
                }
              }
            },
            "range": [
              2337,
              2360
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 103
              },
              "start": {
                "column": 2,
                "line": 103
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureCount",
              "optional": false,
              "range": [
                2363,
                2375
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 104
                },
                "start": {
                  "column": 2,
                  "line": 104
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
                  "line": 104
                },
                "start": {
                  "column": 14,
                  "line": 104
                }
              },
              "range": [
                2375,
                2383
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2377,
                  2383
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 104
                  },
                  "start": {
                    "column": 16,
                    "line": 104
                  }
                }
              }
            },
            "range": [
              2363,
              2384
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 104
              },
              "start": {
                "column": 2,
                "line": 104
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureReason",
              "optional": false,
              "range": [
                2387,
                2400
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 105
                },
                "start": {
                  "column": 2,
                  "line": 105
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
                  "column": 30,
                  "line": 105
                },
                "start": {
                  "column": 15,
                  "line": 105
                }
              },
              "range": [
                2400,
                2415
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "range": [
                        2402,
                        2408
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 105
                        },
                        "start": {
                          "column": 17,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2402,
                      2408
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 105
                      },
                      "start": {
                        "column": 17,
                        "line": 105
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      2411,
                      2415
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 105
                      },
                      "start": {
                        "column": 26,
                        "line": 105
                      }
                    }
                  }
                ],
                "range": [
                  2402,
                  2415
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 105
                  },
                  "start": {
                    "column": 17,
                    "line": 105
                  }
                }
              }
            },
            "range": [
              2387,
              2416
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 105
              },
              "start": {
                "column": 2,
                "line": 105
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdateCount",
              "optional": false,
              "range": [
                2419,
                2435
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 106
                },
                "start": {
                  "column": 2,
                  "line": 106
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
                  "column": 26,
                  "line": 106
                },
                "start": {
                  "column": 18,
                  "line": 106
                }
              },
              "range": [
                2435,
                2443
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2437,
                  2443
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 106
                  },
                  "start": {
                    "column": 20,
                    "line": 106
                  }
                }
              }
            },
            "range": [
              2419,
              2444
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "range": [
                2447,
                2454
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 107
                },
                "start": {
                  "column": 2,
                  "line": 107
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
                  "line": 107
                },
                "start": {
                  "column": 9,
                  "line": 107
                }
              },
              "range": [
                2454,
                2463
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2456,
                  2463
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 107
                  },
                  "start": {
                    "column": 11,
                    "line": 107
                  }
                }
              }
            },
            "range": [
              2447,
              2464
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 107
              },
              "start": {
                "column": 2,
                "line": 107
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetched",
              "optional": false,
              "range": [
                2467,
                2476
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 108
                },
                "start": {
                  "column": 2,
                  "line": 108
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
                  "line": 108
                },
                "start": {
                  "column": 11,
                  "line": 108
                }
              },
              "range": [
                2476,
                2485
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2478,
                  2485
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 108
                  },
                  "start": {
                    "column": 13,
                    "line": 108
                  }
                }
              }
            },
            "range": [
              2467,
              2486
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 108
              },
              "start": {
                "column": 2,
                "line": 108
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetchedAfterMount",
              "optional": false,
              "range": [
                2489,
                2508
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 109
                },
                "start": {
                  "column": 2,
                  "line": 109
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
                  "column": 30,
                  "line": 109
                },
                "start": {
                  "column": 21,
                  "line": 109
                }
              },
              "range": [
                2508,
                2517
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2510,
                  2517
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 109
                  },
                  "start": {
                    "column": 23,
                    "line": 109
                  }
                }
              }
            },
            "range": [
              2489,
              2518
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 109
              },
              "start": {
                "column": 2,
                "line": 109
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetching",
              "optional": false,
              "range": [
                2521,
                2531
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 110
                },
                "start": {
                  "column": 2,
                  "line": 110
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
                  "line": 110
                },
                "start": {
                  "column": 12,
                  "line": 110
                }
              },
              "range": [
                2531,
                2540
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2533,
                  2540
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 110
                  },
                  "start": {
                    "column": 14,
                    "line": 110
                  }
                }
              }
            },
            "range": [
              2521,
              2541
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 110
              },
              "start": {
                "column": 2,
                "line": 110
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoading",
              "optional": false,
              "range": [
                2544,
                2553
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 111
                },
                "start": {
                  "column": 2,
                  "line": 111
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
                  "line": 111
                },
                "start": {
                  "column": 11,
                  "line": 111
                }
              },
              "range": [
                2553,
                2562
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2555,
                  2562
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 111
                  },
                  "start": {
                    "column": 13,
                    "line": 111
                  }
                }
              }
            },
            "range": [
              2544,
              2563
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 111
              },
              "start": {
                "column": 2,
                "line": 111
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "range": [
                2566,
                2575
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 112
                },
                "start": {
                  "column": 2,
                  "line": 112
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
                  "line": 112
                },
                "start": {
                  "column": 11,
                  "line": 112
                }
              },
              "range": [
                2575,
                2584
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2577,
                  2584
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 112
                  },
                  "start": {
                    "column": 13,
                    "line": 112
                  }
                }
              }
            },
            "range": [
              2566,
              2585
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 112
              },
              "start": {
                "column": 2,
                "line": 112
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "range": [
                2588,
                2602
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 113
                },
                "start": {
                  "column": 2,
                  "line": 113
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
                  "line": 113
                },
                "start": {
                  "column": 16,
                  "line": 113
                }
              },
              "range": [
                2602,
                2611
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2604,
                  2611
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 113
                  },
                  "start": {
                    "column": 18,
                    "line": 113
                  }
                }
              }
            },
            "range": [
              2588,
              2612
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 113
              },
              "start": {
                "column": 2,
                "line": 113
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isInitialLoading",
              "optional": false,
              "range": [
                2615,
                2631
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 114
                },
                "start": {
                  "column": 2,
                  "line": 114
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
                  "column": 27,
                  "line": 114
                },
                "start": {
                  "column": 18,
                  "line": 114
                }
              },
              "range": [
                2631,
                2640
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2633,
                  2640
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 114
                  },
                  "start": {
                    "column": 20,
                    "line": 114
                  }
                }
              }
            },
            "range": [
              2615,
              2641
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 114
              },
              "start": {
                "column": 2,
                "line": 114
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPaused",
              "optional": false,
              "range": [
                2644,
                2652
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 115
                },
                "start": {
                  "column": 2,
                  "line": 115
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
                  "line": 115
                },
                "start": {
                  "column": 10,
                  "line": 115
                }
              },
              "range": [
                2652,
                2661
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2654,
                  2661
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 115
                  },
                  "start": {
                    "column": 12,
                    "line": 115
                  }
                }
              }
            },
            "range": [
              2644,
              2662
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 115
              },
              "start": {
                "column": 2,
                "line": 115
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPlaceholderData",
              "optional": false,
              "range": [
                2665,
                2682
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 116
                },
                "start": {
                  "column": 2,
                  "line": 116
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
                  "line": 116
                },
                "start": {
                  "column": 19,
                  "line": 116
                }
              },
              "range": [
                2682,
                2691
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2684,
                  2691
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 116
                  },
                  "start": {
                    "column": 21,
                    "line": 116
                  }
                }
              }
            },
            "range": [
              2665,
              2692
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 116
              },
              "start": {
                "column": 2,
                "line": 116
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "range": [
                2695,
                2709
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 117
                },
                "start": {
                  "column": 2,
                  "line": 117
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
                  "line": 117
                },
                "start": {
                  "column": 16,
                  "line": 117
                }
              },
              "range": [
                2709,
                2718
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2711,
                  2718
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 117
                  },
                  "start": {
                    "column": 18,
                    "line": 117
                  }
                }
              }
            },
            "range": [
              2695,
              2719
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 117
              },
              "start": {
                "column": 2,
                "line": 117
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetching",
              "optional": false,
              "range": [
                2722,
                2734
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 118
                },
                "start": {
                  "column": 2,
                  "line": 118
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
                  "column": 23,
                  "line": 118
                },
                "start": {
                  "column": 14,
                  "line": 118
                }
              },
              "range": [
                2734,
                2743
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2736,
                  2743
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 118
                  },
                  "start": {
                    "column": 16,
                    "line": 118
                  }
                }
              }
            },
            "range": [
              2722,
              2744
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 118
              },
              "start": {
                "column": 2,
                "line": 118
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isStale",
              "optional": false,
              "range": [
                2747,
                2754
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 119
                },
                "start": {
                  "column": 2,
                  "line": 119
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
                  "line": 119
                },
                "start": {
                  "column": 9,
                  "line": 119
                }
              },
              "range": [
                2754,
                2763
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2756,
                  2763
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 119
                  },
                  "start": {
                    "column": 11,
                    "line": 119
                  }
                }
              }
            },
            "range": [
              2747,
              2764
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 119
              },
              "start": {
                "column": 2,
                "line": 119
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "range": [
                2767,
                2776
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 120
                },
                "start": {
                  "column": 2,
                  "line": 120
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
                  "line": 120
                },
                "start": {
                  "column": 11,
                  "line": 120
                }
              },
              "range": [
                2776,
                2785
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  2778,
                  2785
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 120
                  },
                  "start": {
                    "column": 13,
                    "line": 120
                  }
                }
              }
            },
            "range": [
              2767,
              2786
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 120
              },
              "start": {
                "column": 2,
                "line": 120
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 121
          },
          "start": {
            "column": 74,
            "line": 99
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverBaseResult",
        "optional": false,
        "range": [
          2193,
          2216
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 99
          },
          "start": {
            "column": 10,
            "line": 99
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 73,
            "line": 99
          },
          "start": {
            "column": 33,
            "line": 99
          }
        },
        "range": [
          2216,
          2256
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                2225,
                2232
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 99
                },
                "start": {
                  "column": 42,
                  "line": 99
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                2217,
                2222
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 99
                },
                "start": {
                  "column": 34,
                  "line": 99
                }
              }
            },
            "out": false,
            "range": [
              2217,
              2232
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 99
              },
              "start": {
                "column": 34,
                "line": 99
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  2243,
                  2255
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 99
                  },
                  "start": {
                    "column": 60,
                    "line": 99
                  }
                }
              },
              "range": [
                2243,
                2255
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 99
                },
                "start": {
                  "column": 60,
                  "line": 99
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                2234,
                2240
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 99
                },
                "start": {
                  "column": 51,
                  "line": 99
                }
              }
            },
            "out": false,
            "range": [
              2234,
              2255
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 99
              },
              "start": {
                "column": 51,
                "line": 99
              }
            }
          }
        ]
      },
      "range": [
        2183,
        2788
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2916,
          3077
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                2920,
                2924
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 125
                },
                "start": {
                  "column": 2,
                  "line": 125
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
                  "column": 13,
                  "line": 125
                },
                "start": {
                  "column": 6,
                  "line": 125
                }
              },
              "range": [
                2924,
                2931
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "range": [
                    2926,
                    2931
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 125
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                },
                "range": [
                  2926,
                  2931
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 125
                  },
                  "start": {
                    "column": 8,
                    "line": 125
                  }
                }
              }
            },
            "range": [
              2920,
              2932
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 125
              },
              "start": {
                "column": 2,
                "line": 125
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                2935,
                2940
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 126
                },
                "start": {
                  "column": 2,
                  "line": 126
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
                  "column": 13,
                  "line": 126
                },
                "start": {
                  "column": 7,
                  "line": 126
                }
              },
              "range": [
                2940,
                2946
              ],
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "range": [
                  2942,
                  2946
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 126
                  },
                  "start": {
                    "column": 9,
                    "line": 126
                  }
                }
              }
            },
            "range": [
              2935,
              2947
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 126
              },
              "start": {
                "column": 2,
                "line": 126
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "range": [
                2950,
                2957
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 127
                },
                "start": {
                  "column": 2,
                  "line": 127
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
                  "line": 127
                },
                "start": {
                  "column": 9,
                  "line": 127
                }
              },
              "range": [
                2957,
                2964
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    2959,
                    2964
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 127
                    },
                    "start": {
                      "column": 11,
                      "line": 127
                    }
                  }
                },
                "range": [
                  2959,
                  2964
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 127
                  },
                  "start": {
                    "column": 11,
                    "line": 127
                  }
                }
              }
            },
            "range": [
              2950,
              2965
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 127
              },
              "start": {
                "column": 2,
                "line": 127
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "range": [
                2968,
                2977
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 128
                },
                "start": {
                  "column": 2,
                  "line": 128
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
                  "line": 128
                },
                "start": {
                  "column": 11,
                  "line": 128
                }
              },
              "range": [
                2977,
                2984
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    2979,
                    2984
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 128
                    },
                    "start": {
                      "column": 13,
                      "line": 128
                    }
                  }
                },
                "range": [
                  2979,
                  2984
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 128
                  },
                  "start": {
                    "column": 13,
                    "line": 128
                  }
                }
              }
            },
            "range": [
              2968,
              2985
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 128
              },
              "start": {
                "column": 2,
                "line": 128
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "range": [
                2988,
                3002
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 129
                },
                "start": {
                  "column": 2,
                  "line": 129
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
                  "column": 23,
                  "line": 129
                },
                "start": {
                  "column": 16,
                  "line": 129
                }
              },
              "range": [
                3002,
                3009
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    3004,
                    3009
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 129
                    },
                    "start": {
                      "column": 18,
                      "line": 129
                    }
                  }
                },
                "range": [
                  3004,
                  3009
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 129
                  },
                  "start": {
                    "column": 18,
                    "line": 129
                  }
                }
              }
            },
            "range": [
              2988,
              3010
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 129
              },
              "start": {
                "column": 2,
                "line": 129
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "range": [
                3013,
                3027
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 130
                },
                "start": {
                  "column": 2,
                  "line": 130
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
                  "column": 23,
                  "line": 130
                },
                "start": {
                  "column": 16,
                  "line": 130
                }
              },
              "range": [
                3027,
                3034
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    3029,
                    3034
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 130
                    },
                    "start": {
                      "column": 18,
                      "line": 130
                    }
                  }
                },
                "range": [
                  3029,
                  3034
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 130
                  },
                  "start": {
                    "column": 18,
                    "line": 130
                  }
                }
              }
            },
            "range": [
              3013,
              3035
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 130
              },
              "start": {
                "column": 2,
                "line": 130
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "range": [
                3038,
                3047
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 131
                },
                "start": {
                  "column": 2,
                  "line": 131
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
                  "line": 131
                },
                "start": {
                  "column": 11,
                  "line": 131
                }
              },
              "range": [
                3047,
                3053
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    3049,
                    3053
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 131
                    },
                    "start": {
                      "column": 13,
                      "line": 131
                    }
                  }
                },
                "range": [
                  3049,
                  3053
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 131
                  },
                  "start": {
                    "column": 13,
                    "line": 131
                  }
                }
              }
            },
            "range": [
              3038,
              3054
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 131
              },
              "start": {
                "column": 2,
                "line": 131
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "status",
              "optional": false,
              "range": [
                3057,
                3063
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 132
                },
                "start": {
                  "column": 2,
                  "line": 132
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
                  "line": 132
                },
                "start": {
                  "column": 8,
                  "line": 132
                }
              },
              "range": [
                3063,
                3074
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"success\"",
                  "value": "success",
                  "range": [
                    3065,
                    3074
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 132
                    },
                    "start": {
                      "column": 10,
                      "line": 132
                    }
                  }
                },
                "range": [
                  3065,
                  3074
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 132
                  },
                  "start": {
                    "column": 10,
                    "line": 132
                  }
                }
              }
            },
            "range": [
              3057,
              3075
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 132
              },
              "start": {
                "column": 2,
                "line": 132
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 133
          },
          "start": {
            "column": 49,
            "line": 124
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
            "name": "QueryObserverBaseResult",
            "optional": false,
            "range": [
              2877,
              2900
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 124
              },
              "start": {
                "column": 10,
                "line": 124
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2900,
              2915
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "range": [
                    2901,
                    2906
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 124
                    },
                    "start": {
                      "column": 34,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2901,
                  2906
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 124
                  },
                  "start": {
                    "column": 34,
                    "line": 124
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "range": [
                    2908,
                    2914
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 124
                    },
                    "start": {
                      "column": 41,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2908,
                  2914
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 124
                  },
                  "start": {
                    "column": 41,
                    "line": 124
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 124
              },
              "start": {
                "column": 33,
                "line": 124
              }
            }
          },
          "range": [
            2877,
            2915
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 124
            },
            "start": {
              "column": 10,
              "line": 124
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverSuccessResult",
        "optional": false,
        "range": [
          2800,
          2826
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 123
          },
          "start": {
            "column": 10,
            "line": 123
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 76,
            "line": 123
          },
          "start": {
            "column": 36,
            "line": 123
          }
        },
        "range": [
          2826,
          2866
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                2835,
                2842
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 123
                },
                "start": {
                  "column": 45,
                  "line": 123
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                2827,
                2832
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 123
                },
                "start": {
                  "column": 37,
                  "line": 123
                }
              }
            },
            "out": false,
            "range": [
              2827,
              2842
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 123
              },
              "start": {
                "column": 37,
                "line": 123
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  2853,
                  2865
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 123
                  },
                  "start": {
                    "column": 63,
                    "line": 123
                  }
                }
              },
              "range": [
                2853,
                2865
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 123
                },
                "start": {
                  "column": 63,
                  "line": 123
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                2844,
                2850
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 123
                },
                "start": {
                  "column": 54,
                  "line": 123
                }
              }
            },
            "out": false,
            "range": [
              2844,
              2865
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 123
              },
              "start": {
                "column": 54,
                "line": 123
              }
            }
          }
        ]
      },
      "range": [
        2790,
        3077
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefinedQueryObserverResult",
        "optional": false,
        "range": [
          3084,
          3110
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 135
          },
          "start": {
            "column": 5,
            "line": 135
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3186,
            3201
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "range": [
                  3187,
                  3192
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 138
                  },
                  "start": {
                    "column": 31,
                    "line": 138
                  }
                }
              },
              "range": [
                3187,
                3192
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 138
                },
                "start": {
                  "column": 31,
                  "line": 138
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "range": [
                  3194,
                  3200
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 138
                  },
                  "start": {
                    "column": 38,
                    "line": 138
                  }
                }
              },
              "range": [
                3194,
                3200
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 138
                },
                "start": {
                  "column": 38,
                  "line": 138
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 138
            },
            "start": {
              "column": 30,
              "line": 138
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "QueryObserverSuccessResult",
          "optional": false,
          "range": [
            3160,
            3186
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 138
            },
            "start": {
              "column": 4,
              "line": 138
            }
          }
        },
        "range": [
          3160,
          3201
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 138
          },
          "start": {
            "column": 4,
            "line": 138
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 138
          },
          "start": {
            "column": 31,
            "line": 135
          }
        },
        "range": [
          3110,
          3157
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                3122,
                3129
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 136
                },
                "start": {
                  "column": 10,
                  "line": 136
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                3114,
                3119
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 136
                },
                "start": {
                  "column": 2,
                  "line": 136
                }
              }
            },
            "out": false,
            "range": [
              3114,
              3129
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 136
              },
              "start": {
                "column": 2,
                "line": 136
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  3142,
                  3154
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 137
                  },
                  "start": {
                    "column": 11,
                    "line": 137
                  }
                }
              },
              "range": [
                3142,
                3154
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 137
                },
                "start": {
                  "column": 11,
                  "line": 137
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                3133,
                3139
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 137
                },
                "start": {
                  "column": 2,
                  "line": 137
                }
              }
            },
            "out": false,
            "range": [
              3133,
              3154
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 137
              },
              "start": {
                "column": 2,
                "line": 137
              }
            }
          }
        ]
      },
      "range": [
        3079,
        3202
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 135
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverResult",
        "optional": false,
        "range": [
          3208,
          3227
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 139
          },
          "start": {
            "column": 5,
            "line": 139
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3303,
            3318
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "range": [
                  3304,
                  3309
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 142
                  },
                  "start": {
                    "column": 31,
                    "line": 142
                  }
                }
              },
              "range": [
                3304,
                3309
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 142
                },
                "start": {
                  "column": 31,
                  "line": 142
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "range": [
                  3311,
                  3317
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 142
                  },
                  "start": {
                    "column": 38,
                    "line": 142
                  }
                }
              },
              "range": [
                3311,
                3317
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 142
                },
                "start": {
                  "column": 38,
                  "line": 142
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 142
            },
            "start": {
              "column": 30,
              "line": 142
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefinedQueryObserverResult",
          "optional": false,
          "range": [
            3277,
            3303
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 142
            },
            "start": {
              "column": 4,
              "line": 142
            }
          }
        },
        "range": [
          3277,
          3318
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 142
          },
          "start": {
            "column": 4,
            "line": 142
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 142
          },
          "start": {
            "column": 24,
            "line": 139
          }
        },
        "range": [
          3227,
          3274
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                3239,
                3246
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 140
                },
                "start": {
                  "column": 10,
                  "line": 140
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                3231,
                3236
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 140
                },
                "start": {
                  "column": 2,
                  "line": 140
                }
              }
            },
            "out": false,
            "range": [
              3231,
              3246
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 140
              },
              "start": {
                "column": 2,
                "line": 140
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  3259,
                  3271
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 141
                  },
                  "start": {
                    "column": 11,
                    "line": 141
                  }
                }
              },
              "range": [
                3259,
                3271
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 141
                },
                "start": {
                  "column": 11,
                  "line": 141
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                3250,
                3256
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 141
                },
                "start": {
                  "column": 2,
                  "line": 141
                }
              }
            },
            "out": false,
            "range": [
              3250,
              3271
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 141
              },
              "start": {
                "column": 2,
                "line": 141
              }
            }
          }
        ]
      },
      "range": [
        3203,
        3319
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 142
        },
        "start": {
          "column": 0,
          "line": 139
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToRef",
        "optional": false,
        "range": [
          3326,
          3331
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 144
          },
          "start": {
            "column": 5,
            "line": 144
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
              "name": "value",
              "optional": false,
              "range": [
                3341,
                3346
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 145
                },
                "start": {
                  "column": 2,
                  "line": 145
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
                  "column": 10,
                  "line": 145
                },
                "start": {
                  "column": 7,
                  "line": 145
                }
              },
              "range": [
                3346,
                3349
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3348,
                    3349
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 145
                    },
                    "start": {
                      "column": 9,
                      "line": 145
                    }
                  }
                },
                "range": [
                  3348,
                  3349
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 145
                  },
                  "start": {
                    "column": 9,
                    "line": 145
                  }
                }
              }
            },
            "range": [
              3341,
              3350
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 145
              },
              "start": {
                "column": 2,
                "line": 145
              }
            }
          }
        ],
        "range": [
          3337,
          3352
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 146
          },
          "start": {
            "column": 16,
            "line": 144
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 144
          },
          "start": {
            "column": 10,
            "line": 144
          }
        },
        "range": [
          3331,
          3334
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
                3332,
                3333
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 144
                },
                "start": {
                  "column": 11,
                  "line": 144
                }
              }
            },
            "out": false,
            "range": [
              3332,
              3333
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 144
              },
              "start": {
                "column": 11,
                "line": 144
              }
            }
          }
        ]
      },
      "range": [
        3321,
        3353
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 144
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseBaseQueryReturnType",
        "optional": false,
        "range": [
          3360,
          3382
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 148
          },
          "start": {
            "column": 5,
            "line": 148
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "range": [
                    3470,
                    3476
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 153
                    },
                    "start": {
                      "column": 14,
                      "line": 153
                    }
                  }
                },
                "range": [
                  3470,
                  3476
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 153
                  },
                  "start": {
                    "column": 14,
                    "line": 153
                  }
                }
              },
              "range": [
                3464,
                3476
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 153
                },
                "start": {
                  "column": 8,
                  "line": 153
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                3459,
                3460
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 153
                },
                "start": {
                  "column": 3,
                  "line": 153
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    3479,
                    3480
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 153
                    },
                    "start": {
                      "column": 23,
                      "line": 153
                    }
                  }
                },
                "range": [
                  3479,
                  3480
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 153
                  },
                  "start": {
                    "column": 23,
                    "line": 153
                  }
                }
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"fetchNextPage\"",
                      "value": "fetchNextPage",
                      "range": [
                        3495,
                        3510
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 154
                        },
                        "start": {
                          "column": 6,
                          "line": 154
                        }
                      }
                    },
                    "range": [
                      3495,
                      3510
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 154
                      },
                      "start": {
                        "column": 6,
                        "line": 154
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"fetchPreviousPage\"",
                      "value": "fetchPreviousPage",
                      "range": [
                        3517,
                        3536
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 155
                        },
                        "start": {
                          "column": 6,
                          "line": 155
                        }
                      }
                    },
                    "range": [
                      3517,
                      3536
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 155
                      },
                      "start": {
                        "column": 6,
                        "line": 155
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"refetch\"",
                      "value": "refetch",
                      "range": [
                        3543,
                        3552
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 156
                        },
                        "start": {
                          "column": 6,
                          "line": 156
                        }
                      }
                    },
                    "range": [
                      3543,
                      3552
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 156
                      },
                      "start": {
                        "column": 6,
                        "line": 156
                      }
                    }
                  }
                ],
                "range": [
                  3493,
                  3552
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 156
                  },
                  "start": {
                    "column": 4,
                    "line": 154
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3580,
                    3601
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            3598,
                            3599
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 158
                            },
                            "start": {
                              "column": 29,
                              "line": 158
                            }
                          }
                        },
                        "range": [
                          3598,
                          3599
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 158
                          },
                          "start": {
                            "column": 29,
                            "line": 158
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            3589,
                            3597
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "range": [
                                  3590,
                                  3596
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 158
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 158
                                  }
                                }
                              },
                              "range": [
                                3590,
                                3596
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 158
                                },
                                "start": {
                                  "column": 21,
                                  "line": 158
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 158
                            },
                            "start": {
                              "column": 20,
                              "line": 158
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "range": [
                            3581,
                            3589
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 158
                            },
                            "start": {
                              "column": 12,
                              "line": 158
                            }
                          }
                        },
                        "range": [
                          3581,
                          3597
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 158
                          },
                          "start": {
                            "column": 12,
                            "line": 158
                          }
                        }
                      },
                      "range": [
                        3581,
                        3600
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 158
                        },
                        "start": {
                          "column": 12,
                          "line": 158
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 158
                    },
                    "start": {
                      "column": 11,
                      "line": 158
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToRef",
                  "optional": false,
                  "range": [
                    3575,
                    3580
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 158
                    },
                    "start": {
                      "column": 6,
                      "line": 158
                    }
                  }
                },
                "range": [
                  3575,
                  3601
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 158
                  },
                  "start": {
                    "column": 6,
                    "line": 158
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
                    "name": "K",
                    "optional": false,
                    "range": [
                      3566,
                      3567
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 157
                      },
                      "start": {
                        "column": 13,
                        "line": 157
                      }
                    }
                  },
                  "range": [
                    3566,
                    3567
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 157
                    },
                    "start": {
                      "column": 13,
                      "line": 157
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "range": [
                      3559,
                      3565
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 157
                      },
                      "start": {
                        "column": 6,
                        "line": 157
                      }
                    }
                  },
                  "range": [
                    3559,
                    3565
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 157
                    },
                    "start": {
                      "column": 6,
                      "line": 157
                    }
                  }
                },
                "range": [
                  3559,
                  3568
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 157
                  },
                  "start": {
                    "column": 6,
                    "line": 157
                  }
                }
              },
              "range": [
                3479,
                3601
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 158
                },
                "start": {
                  "column": 23,
                  "line": 153
                }
              }
            },
            "range": [
              3454,
              3604
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "suspense",
                  "optional": false,
                  "range": [
                    3611,
                    3619
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 160
                    },
                    "start": {
                      "column": 2,
                      "line": 160
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
                      "column": 33,
                      "line": 160
                    },
                    "start": {
                      "column": 10,
                      "line": 160
                    }
                  },
                  "range": [
                    3619,
                    3642
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 160
                        },
                        "start": {
                          "column": 15,
                          "line": 160
                        }
                      },
                      "range": [
                        3624,
                        3642
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            3634,
                            3642
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "range": [
                                  3635,
                                  3641
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 160
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 160
                                  }
                                }
                              },
                              "range": [
                                3635,
                                3641
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 160
                                },
                                "start": {
                                  "column": 26,
                                  "line": 160
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 160
                            },
                            "start": {
                              "column": 25,
                              "line": 160
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            3627,
                            3634
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 160
                            },
                            "start": {
                              "column": 18,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          3627,
                          3642
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 160
                          },
                          "start": {
                            "column": 18,
                            "line": 160
                          }
                        }
                      }
                    },
                    "range": [
                      3621,
                      3642
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 160
                      },
                      "start": {
                        "column": 12,
                        "line": 160
                      }
                    }
                  }
                },
                "range": [
                  3611,
                  3643
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 160
                  },
                  "start": {
                    "column": 2,
                    "line": 160
                  }
                }
              }
            ],
            "range": [
              3607,
              3645
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          }
        ],
        "range": [
          3454,
          3645
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 161
          },
          "start": {
            "column": 4,
            "line": 152
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 152
          },
          "start": {
            "column": 27,
            "line": 148
          }
        },
        "range": [
          3382,
          3451
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                3386,
                3391
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 149
                },
                "start": {
                  "column": 2,
                  "line": 149
                }
              }
            },
            "out": false,
            "range": [
              3386,
              3391
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 149
              },
              "start": {
                "column": 2,
                "line": 149
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
              "name": "TError",
              "optional": false,
              "range": [
                3395,
                3401
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 150
                },
                "start": {
                  "column": 2,
                  "line": 150
                }
              }
            },
            "out": false,
            "range": [
              3395,
              3401
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 150
              },
              "start": {
                "column": 2,
                "line": 150
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3433,
                  3448
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "range": [
                        3434,
                        3439
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 151
                        },
                        "start": {
                          "column": 31,
                          "line": 151
                        }
                      }
                    },
                    "range": [
                      3434,
                      3439
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 151
                      },
                      "start": {
                        "column": 31,
                        "line": 151
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "range": [
                        3441,
                        3447
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 151
                        },
                        "start": {
                          "column": 38,
                          "line": 151
                        }
                      }
                    },
                    "range": [
                      3441,
                      3447
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 151
                      },
                      "start": {
                        "column": 38,
                        "line": 151
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 151
                  },
                  "start": {
                    "column": 30,
                    "line": 151
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryObserverResult",
                "optional": false,
                "range": [
                  3414,
                  3433
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 151
                  },
                  "start": {
                    "column": 11,
                    "line": 151
                  }
                }
              },
              "range": [
                3414,
                3448
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 151
                },
                "start": {
                  "column": 11,
                  "line": 151
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "range": [
                3405,
                3411
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 151
                },
                "start": {
                  "column": 2,
                  "line": 151
                }
              }
            },
            "out": false,
            "range": [
              3405,
              3448
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 151
              },
              "start": {
                "column": 2,
                "line": 151
              }
            }
          }
        ]
      },
      "range": [
        3355,
        3646
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryReturnType",
        "optional": false,
        "range": [
          3653,
          3671
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 163
          },
          "start": {
            "column": 5,
            "line": 163
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3711,
            3726
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "range": [
                  3712,
                  3717
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 163
                  },
                  "start": {
                    "column": 64,
                    "line": 163
                  }
                }
              },
              "range": [
                3712,
                3717
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 163
                },
                "start": {
                  "column": 64,
                  "line": 163
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "range": [
                  3719,
                  3725
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 163
                  },
                  "start": {
                    "column": 71,
                    "line": 163
                  }
                }
              },
              "range": [
                3719,
                3725
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 163
                },
                "start": {
                  "column": 71,
                  "line": 163
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 163
            },
            "start": {
              "column": 63,
              "line": 163
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UseBaseQueryReturnType",
          "optional": false,
          "range": [
            3689,
            3711
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 163
            },
            "start": {
              "column": 41,
              "line": 163
            }
          }
        },
        "range": [
          3689,
          3726
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 163
          },
          "start": {
            "column": 41,
            "line": 163
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 163
          },
          "start": {
            "column": 23,
            "line": 163
          }
        },
        "range": [
          3671,
          3686
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                3672,
                3677
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 163
                },
                "start": {
                  "column": 24,
                  "line": 163
                }
              }
            },
            "out": false,
            "range": [
              3672,
              3677
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 163
              },
              "start": {
                "column": 24,
                "line": 163
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
              "name": "TError",
              "optional": false,
              "range": [
                3679,
                3685
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 163
                },
                "start": {
                  "column": 31,
                  "line": 163
                }
              }
            },
            "out": false,
            "range": [
              3679,
              3685
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 163
              },
              "start": {
                "column": 31,
                "line": 163
              }
            }
          }
        ]
      },
      "range": [
        3648,
        3727
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 163
        },
        "start": {
          "column": 0,
          "line": 163
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "range": [
          3746,
          3754
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 165
          },
          "start": {
            "column": 17,
            "line": 165
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 171
              },
              "start": {
                "column": 9,
                "line": 171
              }
            },
            "range": [
              3884,
              3954
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3914,
                  3954
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryFnData",
                      "optional": false,
                      "range": [
                        3915,
                        3927
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 171
                        },
                        "start": {
                          "column": 40,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3915,
                      3927
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 171
                      },
                      "start": {
                        "column": 40,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "range": [
                        3929,
                        3935
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 171
                        },
                        "start": {
                          "column": 54,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3929,
                      3935
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 171
                      },
                      "start": {
                        "column": 54,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "range": [
                        3937,
                        3942
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 171
                        },
                        "start": {
                          "column": 62,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3937,
                      3942
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 171
                      },
                      "start": {
                        "column": 62,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryKey",
                      "optional": false,
                      "range": [
                        3944,
                        3953
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 171
                        },
                        "start": {
                          "column": 69,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3944,
                      3953
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 171
                      },
                      "start": {
                        "column": 69,
                        "line": 171
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 171
                  },
                  "start": {
                    "column": 39,
                    "line": 171
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UndefinedInitialQueryOptions",
                "optional": false,
                "range": [
                  3886,
                  3914
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 171
                  },
                  "start": {
                    "column": 11,
                    "line": 171
                  }
                }
              },
              "range": [
                3886,
                3954
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 171
                },
                "start": {
                  "column": 11,
                  "line": 171
                }
              }
            }
          },
          "range": [
            3877,
            3954
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 171
            },
            "start": {
              "column": 2,
              "line": 171
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 172
          },
          "start": {
            "column": 1,
            "line": 172
          }
        },
        "range": [
          3957,
          3992
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3977,
              3992
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "range": [
                    3978,
                    3983
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 172
                    },
                    "start": {
                      "column": 22,
                      "line": 172
                    }
                  }
                },
                "range": [
                  3978,
                  3983
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 172
                  },
                  "start": {
                    "column": 22,
                    "line": 172
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "range": [
                    3985,
                    3991
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 172
                    },
                    "start": {
                      "column": 29,
                      "line": 172
                    }
                  }
                },
                "range": [
                  3985,
                  3991
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 172
                  },
                  "start": {
                    "column": 29,
                    "line": 172
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 172
              },
              "start": {
                "column": 21,
                "line": 172
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "range": [
              3959,
              3977
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 172
              },
              "start": {
                "column": 3,
                "line": 172
              }
            }
          },
          "range": [
            3959,
            3992
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 172
            },
            "start": {
              "column": 3,
              "line": 172
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 25,
            "line": 165
          }
        },
        "range": [
          3754,
          3873
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                3773,
                3780
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 166
                },
                "start": {
                  "column": 17,
                  "line": 166
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "range": [
                3758,
                3770
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 166
                },
                "start": {
                  "column": 2,
                  "line": 166
                }
              }
            },
            "out": false,
            "range": [
              3758,
              3780
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 166
              },
              "start": {
                "column": 2,
                "line": 166
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "range": [
                  3793,
                  3805
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 167
                  },
                  "start": {
                    "column": 11,
                    "line": 167
                  }
                }
              },
              "range": [
                3793,
                3805
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 167
                },
                "start": {
                  "column": 11,
                  "line": 167
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "range": [
                3784,
                3790
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 167
                },
                "start": {
                  "column": 2,
                  "line": 167
                }
              }
            },
            "out": false,
            "range": [
              3784,
              3805
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 167
              },
              "start": {
                "column": 2,
                "line": 167
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "range": [
                  3817,
                  3829
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 168
                  },
                  "start": {
                    "column": 10,
                    "line": 168
                  }
                }
              },
              "range": [
                3817,
                3829
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 168
                },
                "start": {
                  "column": 10,
                  "line": 168
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "range": [
                3809,
                3814
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 168
                },
                "start": {
                  "column": 2,
                  "line": 168
                }
              }
            },
            "out": false,
            "range": [
              3809,
              3829
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 168
              },
              "start": {
                "column": 2,
                "line": 168
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
                "name": "QueryKey",
                "optional": false,
                "range": [
                  3851,
                  3859
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 169
                  },
                  "start": {
                    "column": 20,
                    "line": 169
                  }
                }
              },
              "range": [
                3851,
                3859
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 169
                },
                "start": {
                  "column": 20,
                  "line": 169
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "range": [
                  3862,
                  3870
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 169
                  },
                  "start": {
                    "column": 31,
                    "line": 169
                  }
                }
              },
              "range": [
                3862,
                3870
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 169
                },
                "start": {
                  "column": 31,
                  "line": 169
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "range": [
                3833,
                3842
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 169
                },
                "start": {
                  "column": 2,
                  "line": 169
                }
              }
            },
            "out": false,
            "range": [
              3833,
              3870
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 169
              },
              "start": {
                "column": 2,
                "line": 169
              }
            }
          }
        ]
      },
      "range": [
        3729,
        3993
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 165
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "range": [
              4009,
              4027
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 174
              },
              "start": {
                "column": 14,
                "line": 174
              }
            }
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "range": [
              4009,
              4027
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 174
              },
              "start": {
                "column": 14,
                "line": 174
              }
            }
          },
          "range": [
            4004,
            4027
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 174
            },
            "start": {
              "column": 9,
              "line": 174
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "range": [
              4029,
              4037
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 174
              },
              "start": {
                "column": 34,
                "line": 174
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "range": [
              4029,
              4037
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 174
              },
              "start": {
                "column": 34,
                "line": 174
              }
            }
          },
          "range": [
            4029,
            4037
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 174
            },
            "start": {
              "column": 34,
              "line": 174
            }
          }
        }
      ],
      "range": [
        3995,
        4040
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 175
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
    71
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./useQuery-CPqkvEsh.js'",
        "value": "./useQuery-CPqkvEsh.js",
        "range": [
          45,
          69
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 1
          },
          "start": {
            "column": 45,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "range": [
              9,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "range": [
              9,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "range": [
              29,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "range": [
              29,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "range": [
            29,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        70
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 1
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
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
