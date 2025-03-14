__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    528
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            },
            {
              "type": "TSRestType",
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
                      32,
                      33
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 1
                      },
                      "start": {
                        "column": 32,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                "range": [
                  32,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                29,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
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
            25,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "range": [
          16,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          13
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "bindAll",
        "optional": false,
        "range": [
          56,
          63
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            },
            "range": [
              158,
              167
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTarget",
                "optional": false,
                "range": [
                  160,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "range": [
                160,
                167
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            }
          },
          "range": [
            152,
            167
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 2,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 8
              }
            },
            "range": [
              179,
              358
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
                    "name": "TTypes",
                    "optional": false,
                    "range": [
                      199,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    199,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                "range": [
                  193,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  188,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
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
                      "name": "type",
                      "optional": false,
                      "range": [
                        216,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 10
                        },
                        "start": {
                          "column": 6,
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
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      },
                      "range": [
                        220,
                        231
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
                              229,
                              230
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
                          "range": [
                            229,
                            230
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
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTypes",
                            "optional": false,
                            "range": [
                              222,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            222,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          222,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      216,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 6,
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
                      "name": "listener",
                      "optional": false,
                      "range": [
                        239,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
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
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      },
                      "range": [
                        247,
                        346
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
                                  "column": 79,
                                  "line": 12
                                },
                                "start": {
                                  "column": 10,
                                  "line": 12
                                }
                              },
                              "range": [
                                261,
                                330
                              ],
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      328,
                                      329
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 78,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 77,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    328,
                                    329
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 78,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 77,
                                      "line": 12
                                    }
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      273,
                                      327
                                    ],
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            281,
                                            326
                                          ],
                                          "params": [
                                            {
                                              "type": "TSIndexedAccessType",
                                              "indexType": {
                                                "type": "TSIndexedAccessType",
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "range": [
                                                      297,
                                                      298
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 47,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 46,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    297,
                                                    298
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 47,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 46,
                                                      "line": 12
                                                    }
                                                  }
                                                },
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "TTypes",
                                                    "optional": false,
                                                    "range": [
                                                      290,
                                                      296
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 45,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 39,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    290,
                                                    296
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 45,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 39,
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
                                                    "column": 48,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 39,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TTarget",
                                                  "optional": false,
                                                  "range": [
                                                    282,
                                                    289
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 38,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 31,
                                                      "line": 12
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  282,
                                                  289
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 38,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 31,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "range": [
                                                282,
                                                300
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 49,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 31,
                                                  "line": 12
                                                }
                                              }
                                            },
                                            {
                                              "type": "TSFunctionType",
                                              "params": [
                                                {
                                                  "type": "RestElement",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "args",
                                                    "optional": false,
                                                    "range": [
                                                      306,
                                                      310
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 59,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 55,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  "decorators": [],
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "loc": {
                                                      "end": {
                                                        "column": 66,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 59,
                                                        "line": 12
                                                      }
                                                    },
                                                    "range": [
                                                      310,
                                                      317
                                                    ],
                                                    "typeAnnotation": {
                                                      "type": "TSArrayType",
                                                      "elementType": {
                                                        "type": "TSAnyKeyword",
                                                        "range": [
                                                          312,
                                                          315
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 64,
                                                            "line": 12
                                                          },
                                                          "start": {
                                                            "column": 61,
                                                            "line": 12
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        312,
                                                        317
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 66,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 61,
                                                          "line": 12
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    303,
                                                    317
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 66,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 52,
                                                      "line": 12
                                                    }
                                                  }
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "loc": {
                                                  "end": {
                                                    "column": 74,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 68,
                                                    "line": 12
                                                  }
                                                },
                                                "range": [
                                                  319,
                                                  325
                                                ],
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "range": [
                                                    322,
                                                    325
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 74,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 71,
                                                      "line": 12
                                                    }
                                                  }
                                                }
                                              },
                                              "range": [
                                                302,
                                                325
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 74,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 51,
                                                  "line": 12
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 75,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Extract",
                                          "optional": false,
                                          "range": [
                                            274,
                                            281
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "range": [
                                          274,
                                          326
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 75,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 12
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Parameters",
                                    "optional": false,
                                    "range": [
                                      263,
                                      273
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    263,
                                    327
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  263,
                                  330
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              259,
                              330
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 12
                              },
                              "start": {
                                "column": 8,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          },
                          "range": [
                            339,
                            346
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              342,
                              346
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 13
                              },
                              "start": {
                                "column": 11,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          249,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      239,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  208,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              },
              "range": [
                181,
                358
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            }
          },
          "range": [
            171,
            358
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 1,
            "line": 16
          }
        },
        "range": [
          360,
          366
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            362,
            366
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 3,
              "line": 16
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 3
          }
        },
        "range": [
          63,
          148
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
                "name": "EventTarget",
                "optional": false,
                "range": [
                  83,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                83,
                94
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTarget",
              "optional": false,
              "range": [
                67,
                74
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              67,
              94
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  118,
                  146
                ],
                "params": [
                  {
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
                            "name": "TTarget",
                            "optional": false,
                            "range": [
                              125,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 5
                              },
                              "start": {
                                "column": 29,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            125,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 5
                            },
                            "start": {
                              "column": 29,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          119,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "on",
                              "raw": "on"
                            },
                            "range": [
                              135,
                              140
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 5
                              },
                              "start": {
                                "column": 39,
                                "line": 5
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              143,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 5
                              },
                              "start": {
                                "column": 47,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "types": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              140,
                              143
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 5
                              },
                              "start": {
                                "column": 44,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          135,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 5
                          },
                          "start": {
                            "column": 39,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      119,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "range": [
                  113,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "range": [
                113,
                146
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTypes",
              "optional": false,
              "range": [
                98,
                104
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              98,
              146
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        39,
        367
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                377,
                379
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
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLButtonElement",
                "optional": false,
                "range": [
                  383,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              },
              "range": [
                383,
                400
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "range": [
              377,
              400
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        412,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 20
                        },
                        "start": {
                          "column": 4,
                          "line": 20
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"onclick\"",
                      "value": "onclick",
                      "range": [
                        418,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      412,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "range": [
                        433,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 21
                        },
                        "start": {
                          "column": 4,
                          "line": 21
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          454,
                          456
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 25,
                            "line": 21
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
                          "name": "event",
                          "optional": false,
                          "range": [
                            444,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        443,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      433,
                      456
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
                  }
                ],
                "range": [
                  406,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 2,
                    "line": 19
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        471,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 24
                        },
                        "start": {
                          "column": 4,
                          "line": 24
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"onkeydown\"",
                      "value": "onkeydown",
                      "range": [
                        477,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 10,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      471,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "range": [
                        494,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 4,
                          "line": 25
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          515,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 25
                          },
                          "start": {
                            "column": 25,
                            "line": 25
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
                          "name": "event",
                          "optional": false,
                          "range": [
                            505,
                            510
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 25
                            },
                            "start": {
                              "column": 15,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        504,
                        517
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 25
                        },
                        "start": {
                          "column": 14,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      494,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 25
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  465,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 26
                  },
                  "start": {
                    "column": 2,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              402,
              525
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 33,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bindAll",
          "optional": false,
          "range": [
            369,
            376
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          369,
          526
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        369,
        527
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
