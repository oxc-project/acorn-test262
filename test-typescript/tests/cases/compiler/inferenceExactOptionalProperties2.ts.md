__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1524
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "range": [
          5,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
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
                25,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "range": [
              25,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "range": [
            19,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
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
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          14
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
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "name": "EventObject",
        "optional": false,
        "range": [
          35,
          46
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "type",
              "optional": false,
              "range": [
                53,
                57
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                57,
                65
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  59,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              53,
              66
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          49,
          68
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "range": [
        30,
        69
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
          120,
          162
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transition",
              "optional": false,
              "range": [
                124,
                134
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                  "column": 37,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                134,
                159
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      },
                      "range": [
                        139,
                        147
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            141,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          141,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      137,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  },
                  "range": [
                    149,
                    159
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      152,
                      159
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
                },
                "range": [
                  136,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              124,
              160
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 49,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActorLogic",
        "optional": false,
        "range": [
          81,
          91
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          91,
          119
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
                "name": "EventObject",
                "optional": false,
                "range": [
                  107,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 7
                  }
                }
              },
              "range": [
                107,
                118
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 36,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                92,
                98
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              92,
              118
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        71,
        162
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownActorLogic",
        "optional": false,
        "range": [
          169,
          186
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            199,
            206
          ],
          "params": [
            {
              "type": "TSNeverKeyword",
              "range": [
                200,
                205
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 11
                },
                "start": {
                  "column": 36,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 35,
              "line": 11
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActorLogic",
          "optional": false,
          "range": [
            189,
            199
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 25,
              "line": 11
            }
          }
        },
        "range": [
          189,
          206
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 11
          },
          "start": {
            "column": 25,
            "line": 11
          }
        }
      },
      "range": [
        164,
        207
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          233,
          279
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "src",
              "optional": false,
              "range": [
                237,
                240
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 2,
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
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                240,
                248
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  242,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              237,
              249
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "range": [
                252,
                257
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
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
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              },
              "range": [
                257,
                276
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnknownActorLogic",
                  "optional": false,
                  "range": [
                    259,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  259,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              252,
              277
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 24,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "range": [
          219,
          232
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        209,
        279
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
          336,
          375
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              },
              "range": [
                342,
                348
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  344,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              340,
              349
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "range": [
                352,
                363
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              },
              "range": [
                364,
                372
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "range": [
                    366,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                "range": [
                  366,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              352,
              373
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 55,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "range": [
          291,
          305
        ],
        "loc": {
          "end": {
            "column": 24,
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
            "column": 54,
            "line": 18
          },
          "start": {
            "column": 24,
            "line": 18
          }
        },
        "range": [
          305,
          335
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  321,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 18
                  },
                  "start": {
                    "column": 40,
                    "line": 18
                  }
                }
              },
              "range": [
                321,
                334
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 18
                },
                "start": {
                  "column": 40,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                306,
                312
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              306,
              334
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        281,
        375
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          430,
          469
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              },
              "range": [
                436,
                442
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  438,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              434,
              443
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 24
              },
              "start": {
                "column": 2,
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
              "name": "_out_TActor",
              "optional": false,
              "range": [
                446,
                457
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
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
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              },
              "range": [
                458,
                466
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "range": [
                    460,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                },
                "range": [
                  460,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
              446,
              467
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 53,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "range": [
          387,
          399
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 23
          },
          "start": {
            "column": 22,
            "line": 23
          }
        },
        "range": [
          399,
          429
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  415,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 23
                  },
                  "start": {
                    "column": 38,
                    "line": 23
                  }
                }
              },
              "range": [
                415,
                428
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 23
                },
                "start": {
                  "column": 38,
                  "line": 23
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                400,
                406
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              400,
              428
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        377,
        469
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          525,
          562
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "range": [
                529,
                534
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
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
                  "column": 32,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              },
              "range": [
                535,
                559
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    551,
                    559
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TActor",
                        "optional": false,
                        "range": [
                          552,
                          558
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 29
                          },
                          "start": {
                            "column": 25,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        552,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 29
                        },
                        "start": {
                          "column": 25,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 24,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "range": [
                    537,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 10,
                      "line": 29
                    }
                  }
                },
                "range": [
                  537,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              529,
              560
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 54,
            "line": 28
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "range": [
          481,
          494
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 28
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 28
          },
          "start": {
            "column": 23,
            "line": 28
          }
        },
        "range": [
          494,
          524
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  510,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 28
                  },
                  "start": {
                    "column": 39,
                    "line": 28
                  }
                }
              },
              "range": [
                510,
                523
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                495,
                501
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              495,
              523
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        471,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
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
        "name": "assign",
        "optional": false,
        "range": [
          581,
          587
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 33
              },
              "start": {
                "column": 3,
                "line": 33
              }
            },
            "range": [
              622,
              669
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spawn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 33
                      }
                    },
                    "range": [
                      630,
                      662
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "actor",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 33
                              },
                              "start": {
                                "column": 19,
                                "line": 33
                              }
                            },
                            "range": [
                              638,
                              653
                            ],
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"src\"",
                                  "value": "src",
                                  "range": [
                                    647,
                                    652
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  647,
                                  652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 33
                                  }
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TActor",
                                  "optional": false,
                                  "range": [
                                    640,
                                    646
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  640,
                                  646
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                640,
                                653
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 33
                                },
                                "start": {
                                  "column": 21,
                                  "line": 33
                                }
                              }
                            }
                          },
                          "range": [
                            633,
                            653
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
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 33
                          },
                          "start": {
                            "column": 36,
                            "line": 33
                          }
                        },
                        "range": [
                          655,
                          662
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            658,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 33
                            },
                            "start": {
                              "column": 39,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        632,
                        662
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
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
                    625,
                    662
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 33
                    },
                    "start": {
                      "column": 6,
                      "line": 33
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 33
                  },
                  "start": {
                    "column": 45,
                    "line": 33
                  }
                },
                "range": [
                  664,
                  669
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    667,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 33
                    },
                    "start": {
                      "column": 48,
                      "line": 33
                    }
                  }
                }
              },
              "range": [
                624,
                669
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 33
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              }
            }
          },
          "range": [
            621,
            669
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 33
            },
            "start": {
              "column": 2,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 34
          },
          "start": {
            "column": 1,
            "line": 34
          }
        },
        "range": [
          672,
          694
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              686,
              694
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "range": [
                    687,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                },
                "range": [
                  687,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 34
                  },
                  "start": {
                    "column": 16,
                    "line": 34
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "range": [
              674,
              686
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 3,
                "line": 34
              }
            }
          },
          "range": [
            674,
            694
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 34
            },
            "start": {
              "column": 3,
              "line": 34
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 32
          },
          "start": {
            "column": 23,
            "line": 32
          }
        },
        "range": [
          587,
          617
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
                "name": "ProvidedActor",
                "optional": false,
                "range": [
                  603,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 32
                  },
                  "start": {
                    "column": 39,
                    "line": 32
                  }
                }
              },
              "range": [
                603,
                616
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 32
                },
                "start": {
                  "column": 39,
                  "line": 32
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "range": [
                588,
                594
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              588,
              616
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 32
              },
              "start": {
                "column": 24,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        564,
        695
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToProvidedActor",
        "optional": false,
        "range": [
          702,
          717
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            779,
            869
          ],
          "params": [
            {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TActors",
                        "optional": false,
                        "range": [
                          798,
                          805
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 38
                          },
                          "start": {
                            "column": 16,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        798,
                        805
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      792,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 38
                      },
                      "start": {
                        "column": 10,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      808,
                      814
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 38
                      },
                      "start": {
                        "column": 26,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  792,
                  814
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  787,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 38
                  },
                  "start": {
                    "column": 5,
                    "line": 38
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "range": [
                        825,
                        828
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 39
                        },
                        "start": {
                          "column": 6,
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
                          "column": 12,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      },
                      "range": [
                        828,
                        831
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            830,
                            831
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 39
                            },
                            "start": {
                              "column": 11,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          830,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      825,
                      832
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 39
                      },
                      "start": {
                        "column": 6,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logic",
                      "optional": false,
                      "range": [
                        839,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 40
                        },
                        "start": {
                          "column": 6,
                          "line": 40
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
                          "line": 40
                        },
                        "start": {
                          "column": 11,
                          "line": 40
                        }
                      },
                      "range": [
                        844,
                        856
                      ],
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              854,
                              855
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 40
                              },
                              "start": {
                                "column": 21,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            854,
                            855
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 40
                            },
                            "start": {
                              "column": 21,
                              "line": 40
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "range": [
                              846,
                              853
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 40
                              },
                              "start": {
                                "column": 13,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            846,
                            853
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 40
                            },
                            "start": {
                              "column": 13,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          846,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 40
                          },
                          "start": {
                            "column": 13,
                            "line": 40
                          }
                        }
                      }
                    },
                    "range": [
                      839,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 40
                      },
                      "start": {
                        "column": 6,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  817,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 35,
                    "line": 38
                  }
                }
              },
              "range": [
                780,
                868
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 42
            },
            "start": {
              "column": 8,
              "line": 37
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "range": [
            773,
            779
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
        "range": [
          773,
          869
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 42
          },
          "start": {
            "column": 2,
            "line": 37
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 71,
            "line": 36
          },
          "start": {
            "column": 20,
            "line": 36
          }
        },
        "range": [
          717,
          768
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
                  740,
                  767
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      741,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 36
                      },
                      "start": {
                        "column": 44,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "range": [
                        749,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 36
                        },
                        "start": {
                          "column": 52,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      749,
                      766
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 36
                      },
                      "start": {
                        "column": 52,
                        "line": 36
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 36
                  },
                  "start": {
                    "column": 43,
                    "line": 36
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  734,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 36
                  },
                  "start": {
                    "column": 37,
                    "line": 36
                  }
                }
              },
              "range": [
                734,
                767
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 36
                },
                "start": {
                  "column": 37,
                  "line": 36
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActors",
              "optional": false,
              "range": [
                718,
                725
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 21,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              718,
              767
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 36
              },
              "start": {
                "column": 21,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        697,
        870
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 36
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
        "name": "setup",
        "optional": false,
        "range": [
          889,
          894
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 44
          },
          "start": {
            "column": 17,
            "line": 44
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 18,
                "line": 46
              }
            },
            "range": [
              972,
              1026
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
                    "name": "actors",
                    "optional": false,
                    "range": [
                      978,
                      984
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 47
                      },
                      "start": {
                        "column": 2,
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
                        "column": 47,
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    },
                    "range": [
                      985,
                      1023
                    ],
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
                            "name": "TActors",
                            "optional": false,
                            "range": [
                              1001,
                              1008
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 47
                              },
                              "start": {
                                "column": 25,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1001,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 47
                            },
                            "start": {
                              "column": 25,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          995,
                          1008
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 47
                          },
                          "start": {
                            "column": 19,
                            "line": 47
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          990,
                          991
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
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
                            "name": "K",
                            "optional": false,
                            "range": [
                              1019,
                              1020
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 47
                              },
                              "start": {
                                "column": 43,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1019,
                            1020
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 47
                            },
                            "start": {
                              "column": 43,
                              "line": 47
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "range": [
                              1011,
                              1018
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 47
                              },
                              "start": {
                                "column": 35,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1011,
                            1018
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 47
                            },
                            "start": {
                              "column": 35,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1011,
                          1021
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 47
                          },
                          "start": {
                            "column": 35,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        987,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    978,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 47
                    },
                    "start": {
                      "column": 2,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                974,
                1026
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 48
                },
                "start": {
                  "column": 20,
                  "line": 46
                }
              }
            }
          },
          "range": [
            956,
            1026
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 48
            },
            "start": {
              "column": 2,
              "line": 46
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 2,
            "line": 48
          }
        },
        "range": [
          1027,
          1157
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
                "name": "createMachine",
                "optional": false,
                "range": [
                  1033,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 49
                  },
                  "start": {
                    "column": 2,
                    "line": 49
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
                    "column": 11,
                    "line": 53
                  },
                  "start": {
                    "column": 15,
                    "line": 49
                  }
                },
                "range": [
                  1046,
                  1154
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "config",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 52
                          },
                          "start": {
                            "column": 10,
                            "line": 52
                          }
                        },
                        "range": [
                          1132,
                          1141
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TConfig",
                            "optional": false,
                            "range": [
                              1134,
                              1141
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 52
                              },
                              "start": {
                                "column": 12,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            1134,
                            1141
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 52
                            },
                            "start": {
                              "column": 12,
                              "line": 52
                            }
                          }
                        }
                      },
                      "range": [
                        1126,
                        1141
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 52
                        },
                        "start": {
                          "column": 4,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    },
                    "range": [
                      1147,
                      1154
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1150,
                        1154
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 53
                        },
                        "start": {
                          "column": 7,
                          "line": 53
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 51
                      },
                      "start": {
                        "column": 17,
                        "line": 49
                      }
                    },
                    "range": [
                      1048,
                      1120
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": true,
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1089,
                              1115
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    1105,
                                    1114
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TActors",
                                        "optional": false,
                                        "range": [
                                          1106,
                                          1113
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 63,
                                            "line": 50
                                          },
                                          "start": {
                                            "column": 56,
                                            "line": 50
                                          }
                                        }
                                      },
                                      "range": [
                                        1106,
                                        1113
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 50
                                        },
                                        "start": {
                                          "column": 56,
                                          "line": 50
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 50
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ToProvidedActor",
                                  "optional": false,
                                  "range": [
                                    1090,
                                    1105
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 50
                                    }
                                  }
                                },
                                "range": [
                                  1090,
                                  1114
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 50
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 50
                              },
                              "start": {
                                "column": 39,
                                "line": 50
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MachineConfig",
                            "optional": false,
                            "range": [
                              1076,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 50
                              },
                              "start": {
                                "column": 26,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1076,
                            1115
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 50
                            },
                            "start": {
                              "column": 26,
                              "line": 50
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TConfig",
                          "optional": false,
                          "range": [
                            1060,
                            1067
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 50
                            },
                            "start": {
                              "column": 10,
                              "line": 50
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          1054,
                          1115
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 50
                          },
                          "start": {
                            "column": 4,
                            "line": 50
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    1048,
                    1154
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 53
                    },
                    "start": {
                      "column": 17,
                      "line": 49
                    }
                  }
                }
              },
              "range": [
                1033,
                1155
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 53
                },
                "start": {
                  "column": 2,
                  "line": 49
                }
              }
            }
          ],
          "range": [
            1029,
            1157
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 22,
            "line": 44
          }
        },
        "range": [
          894,
          955
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
                  920,
                  947
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      921,
                      927
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 45
                      },
                      "start": {
                        "column": 25,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "range": [
                        929,
                        946
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 45
                        },
                        "start": {
                          "column": 33,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      929,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 45
                      },
                      "start": {
                        "column": 33,
                        "line": 45
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 45
                  },
                  "start": {
                    "column": 24,
                    "line": 45
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  914,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 45
                  },
                  "start": {
                    "column": 18,
                    "line": 45
                  }
                }
              },
              "range": [
                914,
                947
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 45
                },
                "start": {
                  "column": 18,
                  "line": 45
                }
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                950,
                952
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 45
                },
                "start": {
                  "column": 54,
                  "line": 45
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActors",
              "optional": false,
              "range": [
                898,
                905
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
                }
              }
            },
            "out": false,
            "range": [
              898,
              952
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          }
        ]
      },
      "range": [
        872,
        1158
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "counterLogic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 56
                },
                "start": {
                  "column": 26,
                  "line": 56
                }
              },
              "range": [
                1186,
                1221
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1198,
                    1221
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "range": [
                              1201,
                              1205
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 56
                              },
                              "start": {
                                "column": 41,
                                "line": 56
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
                                "column": 58,
                                "line": 56
                              },
                              "start": {
                                "column": 45,
                                "line": 56
                              }
                            },
                            "range": [
                              1205,
                              1218
                            ],
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"INCREMENT\"",
                                "value": "INCREMENT",
                                "range": [
                                  1207,
                                  1218
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1207,
                                1218
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 56
                                },
                                "start": {
                                  "column": 47,
                                  "line": 56
                                }
                              }
                            }
                          },
                          "range": [
                            1201,
                            1218
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 56
                            },
                            "start": {
                              "column": 41,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        1199,
                        1220
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 56
                        },
                        "start": {
                          "column": 39,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 56
                    },
                    "start": {
                      "column": 38,
                      "line": 56
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActorLogic",
                  "optional": false,
                  "range": [
                    1188,
                    1198
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 56
                    },
                    "start": {
                      "column": 28,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1188,
                  1221
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 56
                  },
                  "start": {
                    "column": 28,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1174,
              1221
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 56
              },
              "start": {
                "column": 14,
                "line": 56
              }
            }
          },
          "init": null,
          "range": [
            1174,
            1221
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 56
            },
            "start": {
              "column": 14,
              "line": 56
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1160,
        1222
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "range": [
                    1307,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 62
                    },
                    "start": {
                      "column": 2,
                      "line": 62
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\"counter\"",
                                  "value": "counter",
                                  "range": [
                                    1344,
                                    1353
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 63
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "range": [
                                  1338,
                                  1343
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 63
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1338,
                                1354
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 63
                                },
                                "start": {
                                  "column": 4,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1338,
                              1355
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 63
                              },
                              "start": {
                                "column": 4,
                                "line": 63
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\"alarm\"",
                                  "value": "alarm",
                                  "range": [
                                    1372,
                                    1379
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 64
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "range": [
                                  1366,
                                  1371
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 64
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1366,
                                1380
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 64
                                },
                                "start": {
                                  "column": 4,
                                  "line": 64
                                }
                              }
                            },
                            "range": [
                              1366,
                              1381
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 64
                              },
                              "start": {
                                "column": 4,
                                "line": 64
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "range": [
                                1402,
                                1404
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 65
                                },
                                "start": {
                                  "column": 11,
                                  "line": 65
                                }
                              }
                            },
                            "range": [
                              1395,
                              1405
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 65
                              },
                              "start": {
                                "column": 4,
                                "line": 65
                              }
                            }
                          }
                        ],
                        "range": [
                          1332,
                          1409
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 66
                          },
                          "start": {
                            "column": 27,
                            "line": 62
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "spawn",
                          "optional": false,
                          "range": [
                            1322,
                            1327
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 62
                            },
                            "start": {
                              "column": 17,
                              "line": 62
                            }
                          }
                        }
                      ],
                      "range": [
                        1321,
                        1409
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 66
                        },
                        "start": {
                          "column": 16,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "range": [
                      1314,
                      1320
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 62
                      },
                      "start": {
                        "column": 9,
                        "line": 62
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1314,
                    1410
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 66
                    },
                    "start": {
                      "column": 9,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1307,
                  1410
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 66
                  },
                  "start": {
                    "column": 2,
                    "line": 62
                  }
                }
              }
            ],
            "range": [
              1303,
              1413
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 67
              },
              "start": {
                "column": 17,
                "line": 61
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "actors",
                      "optional": false,
                      "range": [
                        1251,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 60
                        },
                        "start": {
                          "column": 2,
                          "line": 60
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counter",
                            "optional": false,
                            "range": [
                              1261,
                              1268
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
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counterLogic",
                            "optional": false,
                            "range": [
                              1270,
                              1282
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 60
                              },
                              "start": {
                                "column": 21,
                                "line": 60
                              }
                            }
                          },
                          "range": [
                            1261,
                            1282
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 60
                            },
                            "start": {
                              "column": 12,
                              "line": 60
                            }
                          }
                        }
                      ],
                      "range": [
                        1259,
                        1284
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 60
                        },
                        "start": {
                          "column": 10,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1251,
                      1284
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 60
                      },
                      "start": {
                        "column": 2,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  1247,
                  1287
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 61
                  },
                  "start": {
                    "column": 6,
                    "line": 59
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "range": [
                1241,
                1246
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 0,
                  "line": 59
                }
              }
            },
            "optional": false,
            "range": [
              1241,
              1288
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 61
              },
              "start": {
                "column": 0,
                "line": 59
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "range": [
              1289,
              1302
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 61
              },
              "start": {
                "column": 3,
                "line": 61
              }
            }
          },
          "range": [
            1241,
            1302
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "optional": false,
        "range": [
          1241,
          1414
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 67
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1241,
        1415
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 67
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "range": [
                    1493,
                    1498
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          1514,
                          1516
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 71
                          },
                          "start": {
                            "column": 23,
                            "line": 71
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1507,
                        1517
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 71
                        },
                        "start": {
                          "column": 16,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "range": [
                      1500,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 71
                      },
                      "start": {
                        "column": 9,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1500,
                    1518
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 71
                    },
                    "start": {
                      "column": 9,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1493,
                  1518
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 71
                  },
                  "start": {
                    "column": 2,
                    "line": 71
                  }
                }
              }
            ],
            "range": [
              1489,
              1521
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 72
              },
              "start": {
                "column": 22,
                "line": 70
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "range": [
                1467,
                1472
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 0,
                  "line": 70
                }
              }
            },
            "optional": false,
            "range": [
              1467,
              1474
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 70
              },
              "start": {
                "column": 0,
                "line": 70
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "range": [
              1475,
              1488
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 70
              },
              "start": {
                "column": 8,
                "line": 70
              }
            }
          },
          "range": [
            1467,
            1488
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "optional": false,
        "range": [
          1467,
          1522
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        1467,
        1523
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
