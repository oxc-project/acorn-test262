__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    573
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MorphTuple",
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
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              19,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"|>\"",
              "value": "|>",
              "range": [
                27,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
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
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          {
            "type": "TSAnyKeyword",
            "range": [
              33,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          }
        ],
        "range": [
          18,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateMorph",
        "optional": false,
        "range": [
          44,
          57
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            },
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 49,
                "line": 3
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                84,
                87
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
            },
            "range": [
              84,
              87
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
          },
          "range": [
            84,
            90
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 45,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"|>\"",
            "value": "|>",
            "range": [
              99,
              103
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 60,
                "line": 3
              }
            }
          },
          "range": [
            99,
            103
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 3
            },
            "start": {
              "column": 60,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "range": [
              176,
              179
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "range": [
            176,
            179
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  129,
                  137
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          134,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 30,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        134,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 30,
                          "line": 4
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "range": [
                          130,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        130,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      130,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "range": [
                  111,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              },
              "range": [
                111,
                137
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"|>\"",
                "value": "|>",
                "range": [
                  139,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              },
              "range": [
                139,
                143
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 35,
                  "line": 4
                }
              }
            },
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 44,
                        "line": 4
                      }
                    },
                    "range": [
                      148,
                      156
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
                            154,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 4
                            },
                            "start": {
                              "column": 50,
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
                            "column": 51,
                            "line": 4
                          },
                          "start": {
                            "column": 50,
                            "line": 4
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "range": [
                            150,
                            153
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
                        },
                        "range": [
                          150,
                          153
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
                      },
                      "range": [
                        150,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
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
                    146,
                    156
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                },
                "range": [
                  158,
                  168
                ],
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    161,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 4
                    },
                    "start": {
                      "column": 57,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                145,
                168
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 4
                },
                "start": {
                  "column": 41,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            110,
            169
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        },
        "range": [
          84,
          179
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 45,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          57,
          81
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
                "name": "MorphTuple",
                "optional": false,
                "range": [
                  70,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "range": [
                70,
                80
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                58,
                61
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              58,
              80
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        39,
        179
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 5
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
        "name": "validateDefinition",
        "optional": false,
        "range": [
          186,
          204
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
            "name": "def",
            "optional": false,
            "range": [
              212,
              215
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
          "range": [
            212,
            215
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
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MorphTuple",
            "optional": false,
            "range": [
              224,
              234
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 43,
                "line": 7
              }
            }
          },
          "range": [
            224,
            234
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 7
            },
            "start": {
              "column": 43,
              "line": 7
            }
          }
        },
        "falseType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "def",
                "optional": false,
                "range": [
                  290,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              "range": [
                290,
                293
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              284,
              293
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                314,
                322
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "range": [
                        319,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 10
                        },
                        "start": {
                          "column": 51,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 51,
                        "line": 10
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "range": [
                        315,
                        318
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 10
                        },
                        "start": {
                          "column": 47,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      315,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 10
                      },
                      "start": {
                        "column": 47,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    315,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 47,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 10
                },
                "start": {
                  "column": 46,
                  "line": 10
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "validateDefinition",
              "optional": false,
              "range": [
                296,
                314
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 10
                }
              }
            },
            "range": [
              296,
              322
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 10
              },
              "start": {
                "column": 28,
                "line": 10
              }
            }
          },
          "range": [
            266,
            330
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              254,
              259
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "range": [
                    255,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                "range": [
                  255,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "validateMorph",
            "optional": false,
            "range": [
              241,
              254
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "range": [
            241,
            259
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        },
        "range": [
          212,
          330
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 31,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 7
          }
        },
        "range": [
          204,
          209
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                205,
                208
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              205,
              208
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        181,
        330
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "type",
        "optional": false,
        "range": [
          349,
          353
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            },
            "range": [
              362,
              387
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  382,
                  387
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "range": [
                        383,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 13
                        },
                        "start": {
                          "column": 51,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      383,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 13
                      },
                      "start": {
                        "column": 51,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 13
                  },
                  "start": {
                    "column": 50,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "range": [
                  364,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              "range": [
                364,
                387
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 13
                },
                "start": {
                  "column": 32,
                  "line": 13
                }
              }
            }
          },
          "range": [
            359,
            387
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 13
            },
            "start": {
              "column": 27,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 13
          },
          "start": {
            "column": 56,
            "line": 13
          }
        },
        "range": [
          388,
          393
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "range": [
              390,
              393
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 13
              },
              "start": {
                "column": 58,
                "line": 13
              }
            }
          },
          "range": [
            390,
            393
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 13
            },
            "start": {
              "column": 58,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 21,
            "line": 13
          }
        },
        "range": [
          353,
          358
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                354,
                357
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              354,
              357
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        332,
        393
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "shallow",
            "optional": false,
            "range": [
              401,
              408
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 6,
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
                    "type": "Literal",
                    "raw": "\"ark\"",
                    "value": "ark",
                    "range": [
                      417,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"|>\"",
                    "value": "|>",
                    "range": [
                      424,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          437,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 15
                          },
                          "start": {
                            "column": 42,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          439,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 15
                          },
                          "start": {
                            "column": 44,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        437,
                        445
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
                          431,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 15
                          },
                          "start": {
                            "column": 36,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      430,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
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
                  416,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 15
                  },
                  "start": {
                    "column": 21,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                411,
                415
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              411,
              447
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          "range": [
            401,
            447
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        395,
        447
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "objectLiteral",
            "optional": false,
            "range": [
              454,
              467
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        477,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"ark\"",
                          "value": "ark",
                          "range": [
                            481,
                            486
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 16
                            },
                            "start": {
                              "column": 33,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "\"|>\"",
                          "value": "|>",
                          "range": [
                            488,
                            492
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 16
                            },
                            "start": {
                              "column": 40,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                501,
                                502
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 16
                                },
                                "start": {
                                  "column": 53,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "range": [
                                503,
                                509
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 16
                                },
                                "start": {
                                  "column": 55,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              501,
                              509
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 16
                              },
                              "start": {
                                "column": 53,
                                "line": 16
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
                                495,
                                496
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 16
                                },
                                "start": {
                                  "column": 47,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            494,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 16
                            },
                            "start": {
                              "column": 46,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        480,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 16
                        },
                        "start": {
                          "column": 32,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      477,
                      510
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  475,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                470,
                474
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              470,
              513
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 16
              }
            }
          },
          "range": [
            454,
            513
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        448,
        513
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "nestedTuple",
            "optional": false,
            "range": [
              520,
              531
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
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
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"ark\"",
                        "value": "ark",
                        "range": [
                          541,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 17
                          },
                          "start": {
                            "column": 27,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"|>\"",
                        "value": "|>",
                        "range": [
                          548,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 17
                          },
                          "start": {
                            "column": 34,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              561,
                              562
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 17
                              },
                              "start": {
                                "column": 47,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              563,
                              569
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 17
                              },
                              "start": {
                                "column": 49,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            561,
                            569
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 17
                            },
                            "start": {
                              "column": 47,
                              "line": 17
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
                              555,
                              556
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 17
                              },
                              "start": {
                                "column": 41,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          554,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 17
                          },
                          "start": {
                            "column": 40,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      540,
                      570
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 17
                      },
                      "start": {
                        "column": 26,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  539,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                534,
                538
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              534,
              572
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          },
          "range": [
            520,
            572
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        514,
        572
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
