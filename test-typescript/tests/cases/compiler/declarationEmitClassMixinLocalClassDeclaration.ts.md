__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    635
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        67
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyFunction",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
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
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "range": [
                  44,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 49,
                    "line": 1
                  }
                },
                "range": [
                  49,
                  56
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      51,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 1
                      },
                      "start": {
                        "column": 51,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    51,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 1
                    },
                    "start": {
                      "column": 51,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                41,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 41,
                  "line": 1
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 1
              },
              "start": {
                "column": 58,
                "line": 1
              }
            },
            "range": [
              58,
              67
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "range": [
                  61,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 1
                  },
                  "start": {
                    "column": 61,
                    "line": 1
                  }
                }
              },
              "range": [
                61,
                67
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 1
                },
                "start": {
                  "column": 61,
                  "line": 1
                }
              }
            }
          },
          "range": [
            40,
            67
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            37
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
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
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "range": [
                  24,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                24,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          67
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 1
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
          "column": 67,
          "line": 1
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
        69,
        212
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyConstructor",
          "optional": false,
          "range": [
            81,
            95
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "range": [
                      177,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    },
                    "range": [
                      182,
                      189
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          184,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        184,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 20,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    174,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
                  }
                },
                "range": [
                  191,
                  202
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "range": [
                      194,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 4
                      },
                      "start": {
                        "column": 30,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    194,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 30,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                169,
                202
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "range": [
                  206,
                  212
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
              "range": [
                206,
                212
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
            }
          ],
          "range": [
            168,
            212
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 92,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          },
          "range": [
            95,
            161
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  113,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              },
              "default": {
                "type": "TSObjectKeyword",
                "range": [
                  122,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 3
                  },
                  "start": {
                    "column": 53,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "range": [
                  96,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                96,
                128
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  145,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 3
                  },
                  "start": {
                    "column": 76,
                    "line": 3
                  }
                }
              },
              "default": {
                "type": "TSObjectKeyword",
                "range": [
                  154,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 3
                  },
                  "start": {
                    "column": 85,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "range": [
                  130,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 61,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                130,
                160
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 3
                },
                "start": {
                  "column": 61,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          76,
          212
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 48,
          "line": 4
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
        "name": "MixinHelperFunc",
        "optional": false,
        "range": [
          220,
          235
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 5,
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
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 7
                },
                "start": {
                  "column": 61,
                  "line": 7
                }
              },
              "range": [
                276,
                281
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        279,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 7
                        },
                        "start": {
                          "column": 64,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      279,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
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
                  278,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 7
                  },
                  "start": {
                    "column": 63,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              268,
              281
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 7
              },
              "start": {
                "column": 53,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 74,
                  "line": 7
                },
                "start": {
                  "column": 71,
                  "line": 7
                }
              },
              "range": [
                286,
                289
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    288,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 7
                    },
                    "start": {
                      "column": 73,
                      "line": 7
                    }
                  }
                },
                "range": [
                  288,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 7
                  },
                  "start": {
                    "column": 73,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              283,
              289
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 7
              },
              "start": {
                "column": 68,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 121,
              "line": 7
            },
            "start": {
              "column": 76,
              "line": 7
            }
          },
          "range": [
            291,
            336
          ],
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
                  294,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 7
                  },
                  "start": {
                    "column": 79,
                    "line": 7
                  }
                }
              },
              "range": [
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 7
                },
                "start": {
                  "column": 79,
                  "line": 7
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  315,
                  324
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
                        "name": "M",
                        "optional": false,
                        "range": [
                          322,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 7
                          },
                          "start": {
                            "column": 107,
                            "line": 7
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        322,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 7
                        },
                        "start": {
                          "column": 107,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      316,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 7
                      },
                      "start": {
                        "column": 101,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 7
                  },
                  "start": {
                    "column": 100,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyFunction",
                "optional": false,
                "range": [
                  304,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 7
                  },
                  "start": {
                    "column": 89,
                    "line": 7
                  }
                }
              },
              "range": [
                304,
                324
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 7
                },
                "start": {
                  "column": 89,
                  "line": 7
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                331,
                336
              ],
              "loc": {
                "end": {
                  "column": 121,
                  "line": 7
                },
                "start": {
                  "column": 116,
                  "line": 7
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  327,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 7
                  },
                  "start": {
                    "column": 112,
                    "line": 7
                  }
                }
              },
              "range": [
                327,
                328
              ],
              "loc": {
                "end": {
                  "column": 113,
                  "line": 7
                },
                "start": {
                  "column": 112,
                  "line": 7
                }
              }
            },
            "range": [
              294,
              336
            ],
            "loc": {
              "end": {
                "column": 121,
                "line": 7
              },
              "start": {
                "column": 79,
                "line": 7
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 52,
              "line": 7
            },
            "start": {
              "column": 23,
              "line": 7
            }
          },
          "range": [
            238,
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
                  "name": "AnyConstructor",
                  "optional": false,
                  "range": [
                    249,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                "range": [
                  249,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 34,
                    "line": 7
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  239,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
                239,
                263
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
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
                "name": "T",
                "optional": false,
                "range": [
                  265,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                265,
                266
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 7
                },
                "start": {
                  "column": 50,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          238,
          336
        ],
        "loc": {
          "end": {
            "column": 121,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 7
          }
        }
      },
      "range": [
        215,
        336
      ],
      "loc": {
        "end": {
          "column": 121,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        339,
        388
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
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                },
                "range": [
                  357,
                  374
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MixinHelperFunc",
                    "optional": false,
                    "range": [
                      359,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    359,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                352,
                374
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
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  377,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  385,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 10
                  },
                  "start": {
                    "column": 46,
                    "line": 10
                  }
                }
              },
              "range": [
                377,
                388
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 10
                },
                "start": {
                  "column": 38,
                  "line": 10
                }
              }
            },
            "range": [
              352,
              388
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          346,
          388
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 49,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        391,
        411
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            409,
            411
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 18,
              "line": 13
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            404,
            408
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          398,
          411
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 20,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        414,
        634
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            631,
            634
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 10,
              "line": 23
            },
            "start": {
              "column": 7,
              "line": 23
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "XmlElement2",
          "optional": false,
          "range": [
            427,
            438
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    459,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                458,
                464
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        556,
                        595
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "range": [
                              570,
                              573
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 20
                              },
                              "start": {
                                "column": 12,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 20
                              },
                              "start": {
                                "column": 15,
                                "line": 20
                              }
                            },
                            "range": [
                              573,
                              581
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                575,
                                581
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 20
                                },
                                "start": {
                                  "column": 17,
                                  "line": 20
                                }
                              }
                            }
                          },
                          "value": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              584,
                              585
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 20
                              },
                              "start": {
                                "column": 26,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            570,
                            585
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 20
                            },
                            "start": {
                              "column": 12,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 39,
                          "line": 19
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "range": [
                        531,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    },
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "base",
                      "optional": false,
                      "range": [
                        551,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 19
                        },
                        "start": {
                          "column": 34,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      525,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "range": [
                        611,
                        622
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 15,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      604,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  515,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 49,
                    "line": 18
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
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    },
                    "range": [
                      475,
                      510
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          491,
                          510
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "range": [
                                492,
                                496
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 18
                                },
                                "start": {
                                  "column": 26,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              492,
                              496
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 18
                              },
                              "start": {
                                "column": 26,
                                "line": 18
                              }
                            }
                          },
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "range": [
                                505,
                                509
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 18
                                },
                                "start": {
                                  "column": 39,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              498,
                              509
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 18
                              },
                              "start": {
                                "column": 32,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnyConstructor",
                        "optional": false,
                        "range": [
                          477,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 18
                          },
                          "start": {
                            "column": 11,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        477,
                        510
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    471,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                470,
                629
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin",
            "optional": false,
            "range": [
              447,
              452
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
          "optional": false,
          "range": [
            447,
            630
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 23
            },
            "start": {
              "column": 33,
              "line": 16
            }
          }
        },
        "range": [
          421,
          634
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 10,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
