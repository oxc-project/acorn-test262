__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    453
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateHook",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            38
          ],
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    27,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 27,
                      "line": 1
                    }
                  }
                },
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
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
            "range": [
              26,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        },
        "range": [
          20,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
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
        "name": "StoreUtils",
        "optional": false,
        "range": [
          46,
          56
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                99,
                194
              ],
              "params": [
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
                        "name": "Store",
                        "optional": false,
                        "range": [
                          118,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        118,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      112,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      107,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  },
                  "nameType": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "use",
                          "raw": "use"
                        },
                        "range": [
                          127,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
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
                          155,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 4
                          },
                          "start": {
                            "column": 53,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            143,
                            155
                          ],
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    144,
                                    150
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 4
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "range": [
                                      153,
                                      154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    153,
                                    154
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "range": [
                                144,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 4
                                },
                                "start": {
                                  "column": 42,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 4
                            },
                            "start": {
                              "column": 41,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Capitalize",
                          "optional": false,
                          "range": [
                            133,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 4
                            },
                            "start": {
                              "column": 31,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          133,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 4
                          },
                          "start": {
                            "column": 31,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      127,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        169,
                        179
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
                                176,
                                177
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 4
                                },
                                "start": {
                                  "column": 74,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              176,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 4
                              },
                              "start": {
                                "column": 74,
                                "line": 4
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Store",
                              "optional": false,
                              "range": [
                                170,
                                175
                              ],
                              "loc": {
                                "end": {
                                  "column": 73,
                                  "line": 4
                                },
                                "start": {
                                  "column": 68,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              170,
                              175
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 4
                              },
                              "start": {
                                "column": 68,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            170,
                            178
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
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 4
                        },
                        "start": {
                          "column": 67,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false,
                      "range": [
                        160,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 4
                        },
                        "start": {
                          "column": 58,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      160,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 4
                      },
                      "start": {
                        "column": 58,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    100,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 5
                    },
                    "start": {
                      "column": 59,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'useStore'",
                    "value": "useStore",
                    "range": [
                      183,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 3,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    183,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 3,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "range": [
                95,
                99
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 54,
                  "line": 3
                }
              }
            },
            "range": [
              95,
              194
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 54,
                "line": 3
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
                  "name": "Provider",
                  "optional": false,
                  "range": [
                    201,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  },
                  "range": [
                    209,
                    218
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      211,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  201,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useStore",
                  "optional": false,
                  "range": [
                    222,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
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
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  },
                  "range": [
                    230,
                    248
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        241,
                        248
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Store",
                            "optional": false,
                            "range": [
                              242,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            242,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 22,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false,
                      "range": [
                        232,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      232,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  222,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              197,
              250
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          }
        ],
        "range": [
          95,
          250
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 54,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          56,
          92
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 3
                          },
                          "start": {
                            "column": 34,
                            "line": 3
                          }
                        },
                        "range": [
                          75,
                          83
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            77,
                            83
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 3
                            },
                            "start": {
                              "column": 36,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        74,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 33,
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
                        "column": 48,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
                        "line": 3
                      }
                    },
                    "range": [
                      84,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        86,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 3
                        },
                        "start": {
                          "column": 45,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    73,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                71,
                91
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Store",
              "optional": false,
              "range": [
                57,
                62
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              57,
              91
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        41,
        251
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "createStore",
        "optional": false,
        "range": [
          270,
          281
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "store",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 10
              },
              "start": {
                "column": 70,
                "line": 10
              }
            },
            "range": [
              323,
              330
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Store",
                "optional": false,
                "range": [
                  325,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 10
                  },
                  "start": {
                    "column": 72,
                    "line": 10
                  }
                }
              },
              "range": [
                325,
                330
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 10
                },
                "start": {
                  "column": 72,
                  "line": 10
                }
              }
            }
          },
          "range": [
            318,
            330
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 10
            },
            "start": {
              "column": 65,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 97,
            "line": 10
          },
          "start": {
            "column": 78,
            "line": 10
          }
        },
        "range": [
          331,
          350
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              343,
              350
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "range": [
                    344,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 10
                    },
                    "start": {
                      "column": 91,
                      "line": 10
                    }
                  }
                },
                "range": [
                  344,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 10
                  },
                  "start": {
                    "column": 91,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 10
              },
              "start": {
                "column": 90,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StoreUtils",
            "optional": false,
            "range": [
              333,
              343
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 10
              },
              "start": {
                "column": 80,
                "line": 10
              }
            }
          },
          "range": [
            333,
            350
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 10
            },
            "start": {
              "column": 80,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 10
          }
        },
        "range": [
          281,
          317
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 10
                          },
                          "start": {
                            "column": 47,
                            "line": 10
                          }
                        },
                        "range": [
                          300,
                          308
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            302,
                            308
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 10
                            },
                            "start": {
                              "column": 49,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        299,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 10
                        },
                        "start": {
                          "column": 46,
                          "line": 10
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
                        "column": 61,
                        "line": 10
                      },
                      "start": {
                        "column": 56,
                        "line": 10
                      }
                    },
                    "range": [
                      309,
                      314
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        311,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 10
                        },
                        "start": {
                          "column": 58,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    298,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 10
                    },
                    "start": {
                      "column": 45,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                296,
                316
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 10
                },
                "start": {
                  "column": 43,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Store",
              "optional": false,
              "range": [
                282,
                287
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              282,
              316
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 10
              },
              "start": {
                "column": 29,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        253,
        351
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 10
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
                  "name": "Provider",
                  "optional": false,
                  "range": [
                    361,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
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
                  "name": "Provider",
                  "optional": false,
                  "range": [
                    361,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  361,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useUsername",
                  "optional": false,
                  "range": [
                    371,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
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
                  "name": "useUsername",
                  "optional": false,
                  "range": [
                    371,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  }
                },
                "range": [
                  371,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useAge",
                  "optional": false,
                  "range": [
                    384,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 31,
                      "line": 12
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
                  "name": "useAge",
                  "optional": false,
                  "range": [
                    384,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 31,
                      "line": 12
                    }
                  }
                },
                "range": [
                  384,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 12
                  },
                  "start": {
                    "column": 31,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useStore",
                  "optional": false,
                  "range": [
                    392,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 39,
                      "line": 12
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
                  "name": "useStore",
                  "optional": false,
                  "range": [
                    392,
                    400
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 39,
                      "line": 12
                    }
                  }
                },
                "range": [
                  392,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 39,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              359,
              402
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
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
                      "name": "username",
                      "optional": false,
                      "range": [
                        421,
                        429
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 13
                        },
                        "start": {
                          "column": 2,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"Aral\"",
                      "value": "Aral",
                      "range": [
                        431,
                        437
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      421,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 2,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "range": [
                        441,
                        444
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "31",
                      "value": 31,
                      "range": [
                        446,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 7,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      441,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  417,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 15
                  },
                  "start": {
                    "column": 64,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStore",
              "optional": false,
              "range": [
                405,
                416
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 12
                },
                "start": {
                  "column": 52,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              405,
              451
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 52,
                "line": 12
              }
            }
          },
          "range": [
            359,
            451
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        353,
        452
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
