__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    250
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        151
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Handler",
          "optional": false,
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                },
                "range": [
                  62,
                  70
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TEvent",
                    "optional": false,
                    "range": [
                      64,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    64,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                57,
                70
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "context",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                },
                "range": [
                  83,
                  87
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    85,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                76,
                87
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  101,
                  120
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      111,
                      120
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
                            112,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 23,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          112,
                          119
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "range": [
                      103,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    103,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                93,
                120
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            },
            "range": [
              124,
              150
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    127,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      141,
                      150
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
                            142,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          142,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      134,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    134,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                127,
                150
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              }
            }
          },
          "range": [
            51,
            150
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 51,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          },
          "range": [
            19,
            48
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSAnyKeyword",
                "range": [
                  29,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
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
                  20,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                20,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSAnyKeyword",
                "range": [
                  44,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "range": [
                  34,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                34,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          151
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        153,
        249
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "range": [
            165,
            173
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
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 7
                  },
                  "start": {
                    "column": 45,
                    "line": 7
                  }
                },
                "range": [
                  198,
                  221
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          200,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        200,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 7
                        },
                        "start": {
                          "column": 47,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        208,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 7
                        },
                        "start": {
                          "column": 55,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        217,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 7
                        },
                        "start": {
                          "column": 64,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    200,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                192,
                221
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 7
                },
                "start": {
                  "column": 39,
                  "line": 7
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 7
                  },
                  "start": {
                    "column": 77,
                    "line": 7
                  }
                },
                "range": [
                  230,
                  239
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      232,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 7
                      },
                      "start": {
                        "column": 79,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    232,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 7
                    },
                    "start": {
                      "column": 79,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                223,
                239
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 7
                },
                "start": {
                  "column": 70,
                  "line": 7
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 95,
                "line": 7
              },
              "start": {
                "column": 88,
                "line": 7
              }
            },
            "range": [
              241,
              248
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                244,
                248
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 7
                },
                "start": {
                  "column": 91,
                  "line": 7
                }
              }
            }
          },
          "range": [
            191,
            248
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 7
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 35,
              "line": 7
            },
            "start": {
              "column": 20,
              "line": 7
            }
          },
          "range": [
            173,
            188
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSAnyKeyword",
                "range": [
                  184,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "range": [
                  174,
                  181
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
              "out": false,
              "range": [
                174,
                187
              ],
              "loc": {
                "end": {
                  "column": 34,
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
          160,
          249
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 96,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1027
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'aws-lambda'",
        "value": "aws-lambda",
        "range": [
          34,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "range": [
              9,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "range": [
              9,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
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
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "range": [
              18,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "range": [
              18,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
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
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandlerEvent",
              "optional": false,
              "range": [
                90,
                102
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
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
                    124,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 43,
                      "line": 3
                    }
                  }
                },
                "range": [
                  124,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    141,
                    155
                  ],
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            148,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 3
                            },
                            "start": {
                              "column": 67,
                              "line": 3
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          148,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 3
                          },
                          "start": {
                            "column": 67,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        142,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 3
                        },
                        "start": {
                          "column": 61,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 3
                    },
                    "start": {
                      "column": 60,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "range": [
                    134,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 53,
                      "line": 3
                    }
                  }
                },
                "range": [
                  134,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  167,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 3
                  },
                  "start": {
                    "column": 86,
                    "line": 3
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "range": [
                    158,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 3
                    },
                    "start": {
                      "column": 77,
                      "line": 3
                    }
                  }
                },
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 3
                  },
                  "start": {
                    "column": 77,
                    "line": 3
                  }
                }
              },
              "range": [
                124,
                172
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 3
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              },
              "range": [
                102,
                121
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
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        113,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 3
                        },
                        "start": {
                          "column": 32,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      113,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 3
                      },
                      "start": {
                        "column": 32,
                        "line": 3
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
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    103,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              85,
              173
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 3
              },
              "start": {
                "column": 4,
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
              "name": "HandlerResult",
              "optional": false,
              "range": [
                183,
                196
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
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
                    218,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 4
                    },
                    "start": {
                      "column": 44,
                      "line": 4
                    }
                  }
                },
                "range": [
                  218,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 44,
                    "line": 4
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    235,
                    255
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        236,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 4
                        },
                        "start": {
                          "column": 62,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "range": [
                            247,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 4
                            },
                            "start": {
                              "column": 73,
                              "line": 4
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          247,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 4
                          },
                          "start": {
                            "column": 73,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        241,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 4
                        },
                        "start": {
                          "column": 67,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 4
                    },
                    "start": {
                      "column": 61,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "range": [
                    228,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 4
                    },
                    "start": {
                      "column": 54,
                      "line": 4
                    }
                  }
                },
                "range": [
                  228,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  268,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 4
                  },
                  "start": {
                    "column": 94,
                    "line": 4
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "range": [
                    258,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 4
                    },
                    "start": {
                      "column": 84,
                      "line": 4
                    }
                  }
                },
                "range": [
                  258,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 4
                  },
                  "start": {
                    "column": 84,
                    "line": 4
                  }
                }
              },
              "range": [
                218,
                273
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 4
                },
                "start": {
                  "column": 44,
                  "line": 4
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              },
              "range": [
                196,
                215
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
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        207,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 33,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      207,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 33,
                        "line": 4
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
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    197,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              178,
              274
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandlerError",
              "optional": false,
              "range": [
                284,
                296
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 9,
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    318,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 5
                    }
                  }
                },
                "range": [
                  318,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    335,
                    355
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        336,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 5
                        },
                        "start": {
                          "column": 61,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "range": [
                            347,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 5
                            },
                            "start": {
                              "column": 72,
                              "line": 5
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          347,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 5
                          },
                          "start": {
                            "column": 72,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        341,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 5
                        },
                        "start": {
                          "column": 66,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 5
                    },
                    "start": {
                      "column": 60,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "range": [
                    328,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 5
                    },
                    "start": {
                      "column": 53,
                      "line": 5
                    }
                  }
                },
                "range": [
                  328,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 5
                  },
                  "start": {
                    "column": 53,
                    "line": 5
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  424,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    377,
                    413
                  ],
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'0'",
                          "value": "0",
                          "range": [
                            408,
                            411
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 6
                            },
                            "start": {
                              "column": 52,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          408,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 6
                          },
                          "start": {
                            "column": 52,
                            "line": 6
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            388,
                            407
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  397,
                                  406
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
                                        398,
                                        405
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      398,
                                      405
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 6
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 6
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Callback",
                                "optional": false,
                                "range": [
                                  389,
                                  397
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                389,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 6
                                },
                                "start": {
                                  "column": 33,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 6
                            },
                            "start": {
                              "column": 32,
                              "line": 6
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "range": [
                            378,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          378,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        378,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "range": [
                    366,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "range": [
                  366,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "range": [
                318,
                429
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 43,
                  "line": 5
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                296,
                315
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
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        307,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      307,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
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
                      297,
                      298
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
                  "out": false,
                  "range": [
                    297,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              279,
              430
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                460,
                590
              ],
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        },
                        "range": [
                          477,
                          480
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              479,
                              480
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 17,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            479,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        471,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 10
                        },
                        "start": {
                          "column": 9,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 10
                          },
                          "start": {
                            "column": 31,
                            "line": 10
                          }
                        },
                        "range": [
                          493,
                          498
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            495,
                            498
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 10
                            },
                            "start": {
                              "column": 33,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        482,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 20,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 10
                      },
                      "start": {
                        "column": 37,
                        "line": 10
                      }
                    },
                    "range": [
                      499,
                      521
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSVoidKeyword",
                          "range": [
                            501,
                            505
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 10
                            },
                            "start": {
                              "column": 39,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              515,
                              521
                            ],
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "range": [
                                  516,
                                  520
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 10
                              },
                              "start": {
                                "column": 53,
                                "line": 10
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              508,
                              515
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 10
                              },
                              "start": {
                                "column": 46,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            508,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 10
                            },
                            "start": {
                              "column": 46,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        501,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 10
                        },
                        "start": {
                          "column": 39,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    470,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        },
                        "range": [
                          538,
                          541
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              540,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            540,
                            541
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        532,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 11
                          },
                          "start": {
                            "column": 31,
                            "line": 11
                          }
                        },
                        "range": [
                          554,
                          559
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            556,
                            559
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 11
                            },
                            "start": {
                              "column": 33,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        543,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 11
                          },
                          "start": {
                            "column": 43,
                            "line": 11
                          }
                        },
                        "range": [
                          566,
                          576
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 11
                              },
                              "start": {
                                "column": 48,
                                "line": 11
                              }
                            },
                            "range": [
                              571,
                              576
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "range": [
                                574,
                                576
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 11
                                },
                                "start": {
                                  "column": 51,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            568,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 11
                            },
                            "start": {
                              "column": 45,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        561,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 11
                        },
                        "start": {
                          "column": 38,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 11
                      },
                      "start": {
                        "column": 54,
                        "line": 11
                      }
                    },
                    "range": [
                      577,
                      583
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        579,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    531,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 9
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "VerifierFn",
              "optional": false,
              "range": [
                446,
                456
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              },
              "range": [
                456,
                459
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
                      457,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    457,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                }
              ]
            },
            "range": [
              436,
              590
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
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
              "name": "Verifier",
              "optional": false,
              "range": [
                600,
                608
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
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
                  "name": "S",
                  "optional": false,
                  "range": [
                    614,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                },
                "range": [
                  614,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 23,
                    "line": 13
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    636,
                    645
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Handler",
                        "optional": false,
                        "range": [
                          637,
                          644
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 13
                          },
                          "start": {
                            "column": 46,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        637,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 13
                        },
                        "start": {
                          "column": 46,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 13
                    },
                    "start": {
                      "column": 45,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerError",
                  "optional": false,
                  "range": [
                    624,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 13
                    },
                    "start": {
                      "column": 33,
                      "line": 13
                    }
                  }
                },
                "range": [
                  624,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 13
                  },
                  "start": {
                    "column": 33,
                    "line": 13
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    808,
                    811
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "range": [
                          809,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 19
                          },
                          "start": {
                            "column": 21,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        809,
                        810
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 19
                        },
                        "start": {
                          "column": 21,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VerifierFn",
                  "optional": false,
                  "range": [
                    798,
                    808
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "range": [
                  798,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      656,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    656,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "range": [
                    666,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 20,
                      "line": 14
                    }
                  }
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        720,
                        721
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      720,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 14,
                        "line": 16
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        730,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      730,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "range": [
                      782,
                      787
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        760,
                        767
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              761,
                              766
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 17
                              },
                              "start": {
                                "column": 25,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            761,
                            766
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 17
                            },
                            "start": {
                              "column": 25,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VerifierFn",
                      "optional": false,
                      "range": [
                        750,
                        760
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      750,
                      767
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    720,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      697,
                      705
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          698,
                          704
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 15
                          },
                          "start": {
                            "column": 25,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "VerifierFn",
                    "optional": false,
                    "range": [
                      687,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    687,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  656,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                614,
                811
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              },
              "range": [
                608,
                611
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
                      609,
                      610
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    609,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                }
              ]
            },
            "range": [
              595,
              812
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                856,
                908
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "range": [
                      866,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "range": [
                      871,
                      902
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 22
                            },
                            "start": {
                              "column": 19,
                              "line": 22
                            }
                          },
                          "range": [
                            877,
                            894
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                891,
                                894
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
                                      892,
                                      893
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    892,
                                    893
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 22
                                },
                                "start": {
                                  "column": 33,
                                  "line": 22
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "HandlerEvent",
                              "optional": false,
                              "range": [
                                879,
                                891
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 22
                                },
                                "start": {
                                  "column": 21,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              879,
                              894
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 22
                              },
                              "start": {
                                "column": 21,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          872,
                          894
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 22
                        },
                        "start": {
                          "column": 37,
                          "line": 22
                        }
                      },
                      "range": [
                        895,
                        901
                      ],
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "range": [
                          897,
                          901
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 22
                          },
                          "start": {
                            "column": 39,
                            "line": 22
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    866,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 42,
                  "line": 21
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "range": [
                824,
                836
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 21
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 21
                },
                "start": {
                  "column": 22,
                  "line": 21
                }
              },
              "range": [
                836,
                855
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
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        847,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 33,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      847,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 33,
                        "line": 21
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
                      837,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    837,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 21
                    },
                    "start": {
                      "column": 23,
                      "line": 21
                    }
                  }
                }
              ]
            },
            "range": [
              818,
              908
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
          }
        ],
        "range": [
          79,
          910
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 31,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          66,
          78
        ],
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "kind": "namespace",
      "range": [
        48,
        910
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "lambdaTester",
        "optional": false,
        "range": [
          929,
          941
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 26
              },
              "start": {
                "column": 56,
                "line": 26
              }
            },
            "range": [
              968,
              971
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  970,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 26
                  },
                  "start": {
                    "column": 58,
                    "line": 26
                  }
                }
              },
              "range": [
                970,
                971
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 26
                },
                "start": {
                  "column": 58,
                  "line": 26
                }
              }
            }
          },
          "range": [
            961,
            971
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 26
            },
            "start": {
              "column": 49,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 90,
            "line": 26
          },
          "start": {
            "column": 60,
            "line": 26
          }
        },
        "range": [
          972,
          1002
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              999,
              1002
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
                    1000,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 26
                    },
                    "start": {
                      "column": 88,
                      "line": 26
                    }
                  }
                },
                "range": [
                  1000,
                  1001
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 26
                  },
                  "start": {
                    "column": 88,
                    "line": 26
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 26
              },
              "start": {
                "column": 87,
                "line": 26
              }
            }
          },
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaTester",
              "optional": false,
              "range": [
                974,
                986
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 26
                },
                "start": {
                  "column": 62,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "range": [
                987,
                999
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 26
                },
                "start": {
                  "column": 75,
                  "line": 26
                }
              }
            },
            "range": [
              974,
              999
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 26
              },
              "start": {
                "column": 62,
                "line": 26
              }
            }
          },
          "range": [
            974,
            1002
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 26
            },
            "start": {
              "column": 62,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 26
          },
          "start": {
            "column": 29,
            "line": 26
          }
        },
        "range": [
          941,
          960
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
                "name": "Handler",
                "optional": false,
                "range": [
                  952,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 26
                  },
                  "start": {
                    "column": 40,
                    "line": 26
                  }
                }
              },
              "range": [
                952,
                959
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 26
                },
                "start": {
                  "column": 40,
                  "line": 26
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
                942,
                943
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 26
                },
                "start": {
                  "column": 30,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              942,
              959
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 26
              },
              "start": {
                "column": 30,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        912,
        1003
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "range": [
          1014,
          1026
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "range": [
        1005,
        1027
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 22,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    245
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'lambda-tester'",
        "value": "lambda-tester",
        "range": [
          30,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "range": [
              12,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'aws-lambda'",
        "value": "aws-lambda",
        "range": [
          71,
          83
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "range": [
              56,
              63
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "range": [
              56,
              63
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            56,
            63
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        47,
        84
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 2
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
        "name": "Actual",
        "optional": false,
        "range": [
          91,
          97
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            121,
            158
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  148,
                  157
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        149,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 4
                        },
                        "start": {
                          "column": 63,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      149,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 4
                      },
                      "start": {
                        "column": 63,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 4
                  },
                  "start": {
                    "column": 62,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "range": [
                    122,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "range": [
                    135,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 49,
                      "line": 4
                    }
                  }
                },
                "range": [
                  122,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                }
              },
              "range": [
                122,
                157
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 4
            },
            "start": {
              "column": 35,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "range": [
              100,
              112
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "range": [
              113,
              121
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          },
          "range": [
            100,
            121
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "range": [
          100,
          158
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "range": [
        86,
        159
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "range": [
          165,
          173
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            197,
            244
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  224,
                  243
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        232,
                        242
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            233,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 5
                            },
                            "start": {
                              "column": 73,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            238,
                            241
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 5
                            },
                            "start": {
                              "column": 78,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 5
                        },
                        "start": {
                          "column": 72,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "range": [
                        225,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 5
                        },
                        "start": {
                          "column": 65,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      225,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 5
                      },
                      "start": {
                        "column": 65,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 5
                  },
                  "start": {
                    "column": 64,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "range": [
                    198,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 5
                    },
                    "start": {
                      "column": 38,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "range": [
                    211,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 5
                    },
                    "start": {
                      "column": 51,
                      "line": 5
                    }
                  }
                },
                "range": [
                  198,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              },
              "range": [
                198,
                243
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 5
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "range": [
              176,
              188
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "range": [
              189,
              197
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          },
          "range": [
            176,
            197
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "range": [
          176,
          244
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "range": [
        160,
        245
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 85,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
