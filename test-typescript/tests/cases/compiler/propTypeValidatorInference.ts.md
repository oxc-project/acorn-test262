__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1421
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        44
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
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                },
                "range": [
                  28,
                  43
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      37,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    30,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 1
                    },
                    "start": {
                      "column": 30,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                13,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              13,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          44
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
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
        46,
        169
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsOptional",
          "optional": false,
          "range": [
            58,
            68
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  74,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSNullKeyword",
                "range": [
                  86,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              74,
              90
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
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                99,
                100
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
              99,
              100
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
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "range": [
                110,
                119
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 3
                },
                "start": {
                  "column": 64,
                  "line": 3
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 3
                  },
                  "start": {
                    "column": 82,
                    "line": 3
                  }
                }
              },
              "range": [
                128,
                129
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 3
                },
                "start": {
                  "column": 82,
                  "line": 3
                }
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSNullKeyword",
                "range": [
                  139,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 3
                  },
                  "start": {
                    "column": 93,
                    "line": 3
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    152,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 3
                    },
                    "start": {
                      "column": 106,
                      "line": 3
                    }
                  }
                },
                "range": [
                  152,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 3
                  },
                  "start": {
                    "column": 106,
                    "line": 3
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    163,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 3
                    },
                    "start": {
                      "column": 117,
                      "line": 3
                    }
                  }
                },
                "range": [
                  163,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 3
                  },
                  "start": {
                    "column": 117,
                    "line": 3
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    156,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 3
                    },
                    "start": {
                      "column": 110,
                      "line": 3
                    }
                  }
                },
                "range": [
                  156,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 3
                  },
                  "start": {
                    "column": 110,
                    "line": 3
                  }
                }
              },
              "range": [
                139,
                168
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 3
                },
                "start": {
                  "column": 93,
                  "line": 3
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  132,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 3
                  },
                  "start": {
                    "column": 86,
                    "line": 3
                  }
                }
              },
              "range": [
                132,
                136
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 3
                },
                "start": {
                  "column": 86,
                  "line": 3
                }
              }
            },
            "range": [
              110,
              168
            ],
            "loc": {
              "end": {
                "column": 122,
                "line": 3
              },
              "start": {
                "column": 64,
                "line": 3
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                103,
                107
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 3
                },
                "start": {
                  "column": 57,
                  "line": 3
                }
              }
            },
            "range": [
              103,
              107
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 3
              },
              "start": {
                "column": 57,
                "line": 3
              }
            }
          },
          "range": [
            74,
            168
          ],
          "loc": {
            "end": {
              "column": 122,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 3
            }
          },
          "range": [
            68,
            71
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
                  69,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          53,
          169
        ],
        "loc": {
          "end": {
            "column": 123,
            "line": 3
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
          "column": 123,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        171,
        333
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredKeys",
          "optional": false,
          "range": [
            183,
            195
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
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
                "name": "V",
                "optional": false,
                "range": [
                  330,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 160,
                    "line": 5
                  },
                  "start": {
                    "column": 159,
                    "line": 5
                  }
                }
              },
              "range": [
                330,
                331
              ],
              "loc": {
                "end": {
                  "column": 160,
                  "line": 5
                },
                "start": {
                  "column": 159,
                  "line": 5
                }
              }
            },
            "range": [
              324,
              331
            ],
            "loc": {
              "end": {
                "column": 160,
                "line": 5
              },
              "start": {
                "column": 153,
                "line": 5
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
                  "name": "V",
                  "optional": false,
                  "range": [
                    215,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 44,
                      "line": 5
                    }
                  }
                },
                "range": [
                  215,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                }
              },
              "range": [
                209,
                216
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                204,
                205
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              }
            },
            "nameType": null,
            "optional": "-",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    228,
                    245
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
                            231,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 5
                            },
                            "start": {
                              "column": 60,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          231,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 5
                          },
                          "start": {
                            "column": 60,
                            "line": 5
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            229,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 5
                            },
                            "start": {
                              "column": 58,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          229,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 5
                          },
                          "start": {
                            "column": 58,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        229,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 5
                        },
                        "start": {
                          "column": 58,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        235,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 5
                        },
                        "start": {
                          "column": 64,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 5
                    },
                    "start": {
                      "column": 57,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "range": [
                    221,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 50,
                      "line": 5
                    }
                  }
                },
                "range": [
                  221,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    263,
                    272
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
                          "name": "T",
                          "optional": false,
                          "range": [
                            270,
                            271
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 5
                            },
                            "start": {
                              "column": 99,
                              "line": 5
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          270,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 5
                          },
                          "start": {
                            "column": 99,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        264,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 5
                        },
                        "start": {
                          "column": 93,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 5
                    },
                    "start": {
                      "column": 92,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "range": [
                    254,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 5
                    },
                    "start": {
                      "column": 83,
                      "line": 5
                    }
                  }
                },
                "range": [
                  254,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 5
                  },
                  "start": {
                    "column": 83,
                    "line": 5
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "range": [
                  316,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 150,
                    "line": 5
                  },
                  "start": {
                    "column": 145,
                    "line": 5
                  }
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      285,
                      288
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
                            286,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 116,
                              "line": 5
                            },
                            "start": {
                              "column": 115,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          286,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 116,
                            "line": 5
                          },
                          "start": {
                            "column": 115,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 117,
                        "line": 5
                      },
                      "start": {
                        "column": 114,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsOptional",
                    "optional": false,
                    "range": [
                      275,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 5
                      },
                      "start": {
                        "column": 104,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    275,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 117,
                      "line": 5
                    },
                    "start": {
                      "column": 104,
                      "line": 5
                    }
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      297,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 130,
                        "line": 5
                      },
                      "start": {
                        "column": 126,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    297,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 130,
                      "line": 5
                    },
                    "start": {
                      "column": 126,
                      "line": 5
                    }
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      312,
                      313
                    ],
                    "loc": {
                      "end": {
                        "column": 142,
                        "line": 5
                      },
                      "start": {
                        "column": 141,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    312,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 142,
                      "line": 5
                    },
                    "start": {
                      "column": 141,
                      "line": 5
                    }
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    304,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 138,
                      "line": 5
                    },
                    "start": {
                      "column": 133,
                      "line": 5
                    }
                  }
                },
                "range": [
                  275,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 142,
                    "line": 5
                  },
                  "start": {
                    "column": 104,
                    "line": 5
                  }
                }
              },
              "range": [
                221,
                321
              ],
              "loc": {
                "end": {
                  "column": 150,
                  "line": 5
                },
                "start": {
                  "column": 50,
                  "line": 5
                }
              }
            },
            "range": [
              201,
              323
            ],
            "loc": {
              "end": {
                "column": 152,
                "line": 5
              },
              "start": {
                "column": 30,
                "line": 5
              }
            }
          },
          "range": [
            201,
            332
          ],
          "loc": {
            "end": {
              "column": 161,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          },
          "range": [
            195,
            198
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  196,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                196,
                197
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          178,
          333
        ],
        "loc": {
          "end": {
            "column": 162,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 162,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        334,
        398
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalKeys",
          "optional": false,
          "range": [
            346,
            358
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              371,
              397
            ],
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      378,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 6
                      },
                      "start": {
                        "column": 44,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    378,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 6
                    },
                    "start": {
                      "column": 44,
                      "line": 6
                    }
                  }
                },
                "range": [
                  372,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    393,
                    396
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          394,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 6
                          },
                          "start": {
                            "column": 60,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        394,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 6
                        },
                        "start": {
                          "column": 60,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 6
                    },
                    "start": {
                      "column": 59,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiredKeys",
                  "optional": false,
                  "range": [
                    381,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 6
                    },
                    "start": {
                      "column": 47,
                      "line": 6
                    }
                  }
                },
                "range": [
                  381,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 6
                  },
                  "start": {
                    "column": 47,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "range": [
              364,
              371
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 30,
                "line": 6
              }
            }
          },
          "range": [
            364,
            397
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          },
          "range": [
            358,
            361
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  359,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                359,
                360
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          341,
          398
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
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
        399,
        471
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferPropsInner",
          "optional": false,
          "range": [
            411,
            426
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
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
                "name": "V",
                "optional": false,
                "range": [
                  446,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 47,
                    "line": 7
                  }
                }
              },
              "range": [
                446,
                447
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 47,
                  "line": 7
                }
              }
            },
            "range": [
              440,
              447
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 41,
                "line": 7
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              435,
              436
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 36,
                "line": 7
              }
            }
          },
          "nameType": null,
          "optional": "-",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                461,
                467
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
                        464,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 7
                        },
                        "start": {
                          "column": 65,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      464,
                      465
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 7
                      },
                      "start": {
                        "column": 65,
                        "line": 7
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        462,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 7
                        },
                        "start": {
                          "column": 63,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      462,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 7
                      },
                      "start": {
                        "column": 63,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    462,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 7
                    },
                    "start": {
                      "column": 63,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 7
                },
                "start": {
                  "column": 62,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferType",
              "optional": false,
              "range": [
                452,
                461
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 7
                },
                "start": {
                  "column": 53,
                  "line": 7
                }
              }
            },
            "range": [
              452,
              467
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 7
              },
              "start": {
                "column": 53,
                "line": 7
              }
            }
          },
          "range": [
            432,
            470
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 7
            },
            "start": {
              "column": 33,
              "line": 7
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 27,
              "line": 7
            }
          },
          "range": [
            426,
            429
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  427,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                427,
                428
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          406,
          471
        ],
        "loc": {
          "end": {
            "column": 72,
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
          "column": 72,
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
        473,
        649
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            503,
            649
          ],
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    },
                    "range": [
                      515,
                      523
                    ],
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "range": [
                        517,
                        523
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
                    }
                  },
                  "range": [
                    510,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    },
                    "range": [
                      533,
                      541
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        535,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 30,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    525,
                    541
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
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "componentName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 10
                      },
                      "start": {
                        "column": 51,
                        "line": 10
                      }
                    },
                    "range": [
                      556,
                      564
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        558,
                        564
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
                    }
                  },
                  "range": [
                    543,
                    564
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 10
                    },
                    "start": {
                      "column": 38,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 10
                      },
                      "start": {
                        "column": 69,
                        "line": 10
                      }
                    },
                    "range": [
                      574,
                      582
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        576,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 10
                        },
                        "start": {
                          "column": 71,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    566,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 10
                    },
                    "start": {
                      "column": 61,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propFullName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 10
                      },
                      "start": {
                        "column": 91,
                        "line": 10
                      }
                    },
                    "range": [
                      596,
                      604
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        598,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 10
                        },
                        "start": {
                          "column": 93,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    584,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 10
                    },
                    "start": {
                      "column": 79,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 10
                  },
                  "start": {
                    "column": 100,
                    "line": 10
                  }
                },
                "range": [
                  605,
                  619
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
                          607,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 107,
                            "line": 10
                          },
                          "start": {
                            "column": 102,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        607,
                        612
                      ],
                      "loc": {
                        "end": {
                          "column": 107,
                          "line": 10
                        },
                        "start": {
                          "column": 102,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        615,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 10
                        },
                        "start": {
                          "column": 110,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    607,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 10
                    },
                    "start": {
                      "column": 102,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                509,
                620
              ],
              "loc": {
                "end": {
                  "column": 115,
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
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nominalTypeHack",
                "optional": false,
                "range": [
                  626,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
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
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                },
                "range": [
                  643,
                  646
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      645,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    645,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                625,
                647
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 30,
              "line": 9
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validator",
          "optional": false,
          "range": [
            490,
            499
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 17,
              "line": 9
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          },
          "range": [
            499,
            502
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
                  500,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                500,
                501
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          480,
          649
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        651,
        750
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            704,
            750
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isRequired",
                "optional": false,
                "range": [
                  710,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
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
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 14,
                    "line": 15
                  }
                },
                "range": [
                  720,
                  747
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      731,
                      747
                    ],
                    "params": [
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
                                    "column": 39,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                744,
                                745
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 15
                                },
                                "start": {
                                  "column": 38,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 15
                            },
                            "start": {
                              "column": 37,
                              "line": 15
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NonNullable",
                          "optional": false,
                          "range": [
                            732,
                            743
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 15
                            },
                            "start": {
                              "column": 26,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          732,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 15
                          },
                          "start": {
                            "column": 26,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Validator",
                    "optional": false,
                    "range": [
                      722,
                      731
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 16,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    722,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                710,
                748
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 4,
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
              "column": 53,
              "line": 14
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
              "name": "Validator",
              "optional": false,
              "range": [
                691,
                700
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 14
                },
                "start": {
                  "column": 40,
                  "line": 14
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                700,
                703
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
                      701,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 14
                      },
                      "start": {
                        "column": 50,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    701,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 14
                    },
                    "start": {
                      "column": 50,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 14
                },
                "start": {
                  "column": 49,
                  "line": 14
                }
              }
            },
            "range": [
              691,
              703
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 14
              },
              "start": {
                "column": 40,
                "line": 14
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Requireable",
          "optional": false,
          "range": [
            668,
            679
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 14
            },
            "start": {
              "column": 17,
              "line": 14
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 14
            },
            "start": {
              "column": 28,
              "line": 14
            }
          },
          "range": [
            679,
            682
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
                  680,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 29,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                680,
                681
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 29,
                  "line": 14
                }
              }
            }
          ]
        },
        "range": [
          658,
          750
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        752,
        820
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValidationMap",
          "optional": false,
          "range": [
            764,
            777
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
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
                  797,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 45,
                    "line": 18
                  }
                }
              },
              "range": [
                797,
                798
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 18
                },
                "start": {
                  "column": 45,
                  "line": 18
                }
              }
            },
            "range": [
              791,
              798
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 18
              },
              "start": {
                "column": 39,
                "line": 18
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              786,
              787
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 18
              },
              "start": {
                "column": 34,
                "line": 18
              }
            }
          },
          "nameType": null,
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                811,
                817
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
                        814,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 18
                        },
                        "start": {
                          "column": 62,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      814,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 18
                      },
                      "start": {
                        "column": 62,
                        "line": 18
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
                        812,
                        813
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 18
                        },
                        "start": {
                          "column": 60,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      812,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 18
                      },
                      "start": {
                        "column": 60,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    812,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 18
                    },
                    "start": {
                      "column": 60,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 18
                },
                "start": {
                  "column": 59,
                  "line": 18
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "range": [
                802,
                811
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 18
                },
                "start": {
                  "column": 50,
                  "line": 18
                }
              }
            },
            "range": [
              802,
              817
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 18
              },
              "start": {
                "column": 50,
                "line": 18
              }
            }
          },
          "range": [
            783,
            819
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 18
            },
            "start": {
              "column": 31,
              "line": 18
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 28,
              "line": 18
            },
            "start": {
              "column": 25,
              "line": 18
            }
          },
          "range": [
            777,
            780
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
                  778,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 26,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                778,
                779
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 26,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          759,
          820
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 68,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        822,
        888
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferType",
          "optional": false,
          "range": [
            834,
            843
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 20
            },
            "start": {
              "column": 12,
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
              "name": "V",
              "optional": false,
              "range": [
                849,
                850
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            },
            "range": [
              849,
              850
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 27,
                "line": 20
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                868,
                877
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        875,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 20
                        },
                        "start": {
                          "column": 53,
                          "line": 20
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      875,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 20
                      },
                      "start": {
                        "column": 53,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    869,
                    876
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 20
                    },
                    "start": {
                      "column": 47,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 20
                },
                "start": {
                  "column": 46,
                  "line": 20
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "range": [
                859,
                868
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 20
                },
                "start": {
                  "column": 37,
                  "line": 20
                }
              }
            },
            "range": [
              859,
              877
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 20
              },
              "start": {
                "column": 37,
                "line": 20
              }
            }
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "range": [
              884,
              887
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 20
              },
              "start": {
                "column": 62,
                "line": 20
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                880,
                881
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 20
                },
                "start": {
                  "column": 58,
                  "line": 20
                }
              }
            },
            "range": [
              880,
              881
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 20
              },
              "start": {
                "column": 58,
                "line": 20
              }
            }
          },
          "range": [
            849,
            887
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 20
            },
            "start": {
              "column": 27,
              "line": 20
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 21,
              "line": 20
            }
          },
          "range": [
            843,
            846
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  844,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 22,
                    "line": 20
                  }
                }
              },
              "out": false,
              "range": [
                844,
                845
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            }
          ]
        },
        "range": [
          829,
          888
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 66,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        889,
        1022
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferProps",
          "optional": false,
          "range": [
            901,
            911
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 21
            },
            "start": {
              "column": 12,
              "line": 21
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
                  938,
                  964
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        943,
                        963
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              944,
                              945
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 22
                              },
                              "start": {
                                "column": 27,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            944,
                            945
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 22
                            },
                            "start": {
                              "column": 27,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              959,
                              962
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "range": [
                                    960,
                                    961
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 22
                                    }
                                  }
                                },
                                "range": [
                                  960,
                                  961
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 22
                              },
                              "start": {
                                "column": 42,
                                "line": 22
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RequiredKeys",
                            "optional": false,
                            "range": [
                              947,
                              959
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 22
                              },
                              "start": {
                                "column": 30,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            947,
                            962
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 22
                            },
                            "start": {
                              "column": 30,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 22
                        },
                        "start": {
                          "column": 26,
                          "line": 22
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        939,
                        943
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      939,
                      963
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 22
                      },
                      "start": {
                        "column": 22,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InferPropsInner",
                "optional": false,
                "range": [
                  923,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
                  }
                }
              },
              "range": [
                923,
                964
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  978,
                  1021
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        994,
                        1020
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              999,
                              1019
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "range": [
                                    1000,
                                    1001
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  1000,
                                  1001
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 23
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    1015,
                                    1018
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "range": [
                                          1016,
                                          1017
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 51,
                                            "line": 23
                                          }
                                        }
                                      },
                                      "range": [
                                        1016,
                                        1017
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 23
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 23
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OptionalKeys",
                                  "optional": false,
                                  "range": [
                                    1003,
                                    1015
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  1003,
                                  1018
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 23
                              },
                              "start": {
                                "column": 34,
                                "line": 23
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "range": [
                              995,
                              999
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 23
                              },
                              "start": {
                                "column": 30,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            995,
                            1019
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 23
                            },
                            "start": {
                              "column": 30,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 23
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InferPropsInner",
                      "optional": false,
                      "range": [
                        979,
                        994
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      979,
                      1020
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 23
                      },
                      "start": {
                        "column": 14,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  971,
                  978
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 23
                  },
                  "start": {
                    "column": 6,
                    "line": 23
                  }
                }
              },
              "range": [
                971,
                1021
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            921,
            1021
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 21
            },
            "start": {
              "column": 22,
              "line": 21
            }
          },
          "range": [
            911,
            914
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  912,
                  913
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
                912,
                913
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
            }
          ]
        },
        "range": [
          896,
          1022
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 57,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1024,
        1059
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
              "name": "any",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 25
                  },
                  "start": {
                    "column": 16,
                    "line": 25
                  }
                },
                "range": [
                  1040,
                  1058
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1053,
                      1058
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          1054,
                          1057
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 25
                          },
                          "start": {
                            "column": 30,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 25
                      },
                      "start": {
                        "column": 29,
                        "line": 25
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "range": [
                      1042,
                      1053
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1042,
                    1058
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 25
                    },
                    "start": {
                      "column": 18,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                1037,
                1058
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "init": null,
            "range": [
              1037,
              1058
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1031,
          1059
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1060,
        1099
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
              "name": "array",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 18,
                    "line": 26
                  }
                },
                "range": [
                  1078,
                  1098
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1091,
                      1098
                    ],
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "range": [
                            1092,
                            1095
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 26
                            },
                            "start": {
                              "column": 32,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          1092,
                          1097
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 26
                          },
                          "start": {
                            "column": 32,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 26
                      },
                      "start": {
                        "column": 31,
                        "line": 26
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "range": [
                      1080,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 26
                      },
                      "start": {
                        "column": 20,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1080,
                    1098
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 20,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                1073,
                1098
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            },
            "init": null,
            "range": [
              1073,
              1098
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1067,
          1099
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1100,
        1140
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
              "name": "bool",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                },
                "range": [
                  1117,
                  1139
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1130,
                      1139
                    ],
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1131,
                          1138
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 27
                          },
                          "start": {
                            "column": 31,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 27
                      },
                      "start": {
                        "column": 30,
                        "line": 27
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "range": [
                      1119,
                      1130
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 27
                      },
                      "start": {
                        "column": 19,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    1119,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                }
              },
              "range": [
                1113,
                1139
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "init": null,
            "range": [
              1113,
              1139
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1107,
          1140
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1141,
        1182
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
              "name": "string",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 28
                  }
                },
                "range": [
                  1160,
                  1181
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1173,
                      1181
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1174,
                          1180
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 28
                          },
                          "start": {
                            "column": 33,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 28
                      },
                      "start": {
                        "column": 32,
                        "line": 28
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "range": [
                      1162,
                      1173
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 21,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    1162,
                    1181
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 28
                    },
                    "start": {
                      "column": 21,
                      "line": 28
                    }
                  }
                }
              },
              "range": [
                1154,
                1181
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 28
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              }
            },
            "init": null,
            "range": [
              1154,
              1181
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 28
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1148,
          1182
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1183,
        1224
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
              "name": "number",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 29
                  },
                  "start": {
                    "column": 19,
                    "line": 29
                  }
                },
                "range": [
                  1202,
                  1223
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1215,
                      1223
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1216,
                          1222
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 29
                          },
                          "start": {
                            "column": 33,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 29
                      },
                      "start": {
                        "column": 32,
                        "line": 29
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Requireable",
                    "optional": false,
                    "range": [
                      1204,
                      1215
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 29
                      },
                      "start": {
                        "column": 21,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    1204,
                    1223
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 29
                    },
                    "start": {
                      "column": 21,
                      "line": 29
                    }
                  }
                }
              },
              "range": [
                1196,
                1223
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "init": null,
            "range": [
              1196,
              1223
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1190,
          1224
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 29
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
        1225,
        1314
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "range": [
            1241,
            1246
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 30
            },
            "start": {
              "column": 16,
              "line": 30
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 30
                },
                "start": {
                  "column": 56,
                  "line": 30
                }
              },
              "range": [
                1281,
                1284
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    1283,
                    1284
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 30
                    },
                    "start": {
                      "column": 58,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1283,
                  1284
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 30
                  },
                  "start": {
                    "column": 58,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              1277,
              1284
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 30
              },
              "start": {
                "column": 52,
                "line": 30
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 88,
              "line": 30
            },
            "start": {
              "column": 60,
              "line": 30
            }
          },
          "range": [
            1285,
            1313
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1298,
                1313
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1309,
                      1312
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            1310,
                            1311
                          ],
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 30
                            },
                            "start": {
                              "column": 85,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          1310,
                          1311
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 30
                          },
                          "start": {
                            "column": 85,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 30
                      },
                      "start": {
                        "column": 84,
                        "line": 30
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InferProps",
                    "optional": false,
                    "range": [
                      1299,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 30
                      },
                      "start": {
                        "column": 74,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1299,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 30
                    },
                    "start": {
                      "column": 74,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 30
                },
                "start": {
                  "column": 73,
                  "line": 30
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "range": [
                1287,
                1298
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 30
                },
                "start": {
                  "column": 62,
                  "line": 30
                }
              }
            },
            "range": [
              1287,
              1313
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 30
              },
              "start": {
                "column": 62,
                "line": 30
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 51,
              "line": 30
            },
            "start": {
              "column": 21,
              "line": 30
            }
          },
          "range": [
            1246,
            1276
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
                    1270,
                    1275
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1271,
                        1274
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 30
                        },
                        "start": {
                          "column": 46,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 30
                    },
                    "start": {
                      "column": 45,
                      "line": 30
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValidationMap",
                  "optional": false,
                  "range": [
                    1257,
                    1270
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 30
                    },
                    "start": {
                      "column": 32,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1257,
                  1275
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 30
                  },
                  "start": {
                    "column": 32,
                    "line": 30
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1247,
                  1248
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 22,
                    "line": 30
                  }
                }
              },
              "out": false,
              "range": [
                1247,
                1275
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 30
                },
                "start": {
                  "column": 22,
                  "line": 30
                }
              }
            }
          ]
        },
        "range": [
          1232,
          1314
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 89,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1315,
        1419
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "oneOfType",
          "optional": false,
          "range": [
            1331,
            1340
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 16,
              "line": 31
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 31
                },
                "start": {
                  "column": 57,
                  "line": 31
                }
              },
              "range": [
                1372,
                1377
              ],
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
                      1374,
                      1375
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 31
                      },
                      "start": {
                        "column": 59,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1374,
                    1375
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 31
                    },
                    "start": {
                      "column": 59,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1374,
                  1377
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 31
                  },
                  "start": {
                    "column": 59,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              1367,
              1377
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 31
              },
              "start": {
                "column": 52,
                "line": 31
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 103,
              "line": 31
            },
            "start": {
              "column": 63,
              "line": 31
            }
          },
          "range": [
            1378,
            1418
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1391,
                1418
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1403,
                      1417
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1413,
                            1416
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
                                  1414,
                                  1415
                                ],
                                "loc": {
                                  "end": {
                                    "column": 100,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 99,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                1414,
                                1415
                              ],
                              "loc": {
                                "end": {
                                  "column": 100,
                                  "line": 31
                                },
                                "start": {
                                  "column": 99,
                                  "line": 31
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 31
                            },
                            "start": {
                              "column": 98,
                              "line": 31
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferType",
                          "optional": false,
                          "range": [
                            1404,
                            1413
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 31
                            },
                            "start": {
                              "column": 89,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          1404,
                          1416
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 31
                          },
                          "start": {
                            "column": 89,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 31
                      },
                      "start": {
                        "column": 88,
                        "line": 31
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "range": [
                      1392,
                      1403
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 31
                      },
                      "start": {
                        "column": 77,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1392,
                    1417
                  ],
                  "loc": {
                    "end": {
                      "column": 102,
                      "line": 31
                    },
                    "start": {
                      "column": 77,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 31
                },
                "start": {
                  "column": 76,
                  "line": 31
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Requireable",
              "optional": false,
              "range": [
                1380,
                1391
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 31
                },
                "start": {
                  "column": 65,
                  "line": 31
                }
              }
            },
            "range": [
              1380,
              1418
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 31
              },
              "start": {
                "column": 65,
                "line": 31
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 51,
              "line": 31
            },
            "start": {
              "column": 25,
              "line": 31
            }
          },
          "range": [
            1340,
            1366
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
                    1360,
                    1365
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1361,
                        1364
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 31
                        },
                        "start": {
                          "column": 46,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 31
                    },
                    "start": {
                      "column": 45,
                      "line": 31
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "range": [
                    1351,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 31
                    },
                    "start": {
                      "column": 36,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1351,
                  1365
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 31
                  },
                  "start": {
                    "column": 36,
                    "line": 31
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
                  1341,
                  1342
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 31
                  },
                  "start": {
                    "column": 26,
                    "line": 31
                  }
                }
              },
              "out": false,
              "range": [
                1341,
                1365
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 31
                },
                "start": {
                  "column": 26,
                  "line": 31
                }
              }
            }
          ]
        },
        "range": [
          1322,
          1419
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 104,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 33
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
    1433
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"prop-types\"",
        "value": "prop-types",
        "range": [
          27,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 27,
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
            "name": "PropTypes",
            "optional": false,
            "range": [
              12,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
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
            21
          ],
          "loc": {
            "end": {
              "column": 21,
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
        40
      ],
      "loc": {
        "end": {
          "column": 40,
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
          57,
          283
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "range": [
                63,
                66
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                67,
                72
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  69,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              63,
              73
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
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "range": [
                78,
                83
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                83,
                93
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    85,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "range": [
                  85,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              78,
              94
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bool",
              "optional": false,
              "range": [
                99,
                103
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              },
              "range": [
                103,
                112
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  105,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              99,
              113
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shape",
              "optional": false,
              "range": [
                118,
                123
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                123,
                194
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        135,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
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
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      },
                      "range": [
                        138,
                        146
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          140,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 13,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      135,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        156,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
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
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      },
                      "range": [
                        160,
                        169
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          162,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      156,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "range": [
                        179,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
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
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      },
                      "range": [
                        183,
                        188
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          185,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      179,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  125,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              118,
              195
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
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
              "name": "oneOfType",
              "optional": false,
              "range": [
                200,
                209
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 4,
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              },
              "range": [
                209,
                280
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      211,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      220,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            240,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
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
                              "column": 20,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          },
                          "range": [
                            244,
                            252
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              246,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 12
                              },
                              "start": {
                                "column": 14,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          240,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
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
                          "name": "bar",
                          "optional": false,
                          "range": [
                            262,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
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
                              "line": 13
                            },
                            "start": {
                              "column": 11,
                              "line": 13
                            }
                          },
                          "range": [
                            265,
                            273
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              267,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          262,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      230,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  211,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              200,
              281
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          51,
          56
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
      "range": [
        41,
        283
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
        "name": "PropTypesMap",
        "optional": false,
        "range": [
          290,
          302
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            328,
            335
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "range": [
                  329,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 17
                  },
                  "start": {
                    "column": 44,
                    "line": 17
                  }
                }
              },
              "range": [
                329,
                334
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 17
                },
                "start": {
                  "column": 44,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 17
            },
            "start": {
              "column": 43,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "range": [
              305,
              314
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "ValidationMap",
            "optional": false,
            "range": [
              315,
              328
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 30,
                "line": 17
              }
            }
          },
          "range": [
            305,
            328
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 17
            },
            "start": {
              "column": 20,
              "line": 17
            }
          }
        },
        "range": [
          305,
          335
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 17
          },
          "start": {
            "column": 20,
            "line": 17
          }
        }
      },
      "range": [
        285,
        336
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "innerProps",
            "optional": false,
            "range": [
              344,
              354
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    363,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        368,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "range": [
                        378,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      368,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      385,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    368,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
                    }
                  }
                },
                "range": [
                  363,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    401,
                    404
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "range": [
                      406,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bool",
                    "optional": false,
                    "range": [
                      416,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 19,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    406,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 9,
                      "line": 21
                    }
                  }
                },
                "range": [
                  401,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    426,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "range": [
                      431,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "range": [
                      441,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    431,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "range": [
                  426,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              357,
              446
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 19,
                "line": 19
              }
            }
          },
          "range": [
            344,
            446
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        338,
        447
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "arrayOfTypes",
            "optional": false,
            "range": [
              455,
              467
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "range": [
                    471,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 25
                    },
                    "start": {
                      "column": 22,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "range": [
                    481,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 25
                    },
                    "start": {
                      "column": 32,
                      "line": 25
                    }
                  }
                },
                "range": [
                  471,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 25
                  },
                  "start": {
                    "column": 22,
                    "line": 25
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypes",
                  "optional": false,
                  "range": [
                    489,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 25
                    },
                    "start": {
                      "column": 40,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "range": [
                    499,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 25
                    },
                    "start": {
                      "column": 50,
                      "line": 25
                    }
                  }
                },
                "range": [
                  489,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                }
              },
              {
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            527,
                            530
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 26
                            },
                            "start": {
                              "column": 4,
                              "line": 26
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PropTypes",
                            "optional": false,
                            "range": [
                              532,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 26
                              },
                              "start": {
                                "column": 9,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "range": [
                              542,
                              548
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 26
                              },
                              "start": {
                                "column": 19,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            532,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 26
                            },
                            "start": {
                              "column": 9,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          527,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 26
                          },
                          "start": {
                            "column": 4,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            554,
                            557
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 27
                            },
                            "start": {
                              "column": 4,
                              "line": 27
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PropTypes",
                              "optional": false,
                              "range": [
                                559,
                                568
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 27
                                },
                                "start": {
                                  "column": 9,
                                  "line": 27
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "number",
                              "optional": false,
                              "range": [
                                569,
                                575
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 27
                                },
                                "start": {
                                  "column": 19,
                                  "line": 27
                                }
                              }
                            },
                            "range": [
                              559,
                              575
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 27
                              },
                              "start": {
                                "column": 9,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isRequired",
                            "optional": false,
                            "range": [
                              576,
                              586
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 27
                              },
                              "start": {
                                "column": 26,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            559,
                            586
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 27
                            },
                            "start": {
                              "column": 9,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          554,
                          586
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 27
                          },
                          "start": {
                            "column": 4,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      521,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 28
                      },
                      "start": {
                        "column": 72,
                        "line": 25
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
                    "name": "PropTypes",
                    "optional": false,
                    "range": [
                      505,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 25
                      },
                      "start": {
                        "column": 56,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "range": [
                      515,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 25
                      },
                      "start": {
                        "column": 66,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    505,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 25
                    },
                    "start": {
                      "column": 56,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "range": [
                  505,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 28
                  },
                  "start": {
                    "column": 56,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              470,
              590
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 21,
                "line": 25
              }
            }
          },
          "range": [
            455,
            590
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        449,
        591
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              },
              "range": [
                623,
                637
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypesMap",
                  "optional": false,
                  "range": [
                    625,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                },
                "range": [
                  625,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              614,
              637
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "any",
                  "optional": false,
                  "range": [
                    646,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "range": [
                      651,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "range": [
                      661,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 32
                      },
                      "start": {
                        "column": 19,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    651,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 32
                    },
                    "start": {
                      "column": 9,
                      "line": 32
                    }
                  }
                },
                "range": [
                  646,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "range": [
                    670,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        677,
                        686
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 33
                        },
                        "start": {
                          "column": 11,
                          "line": 33
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "range": [
                        687,
                        692
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 21,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      677,
                      692
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      693,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 33
                      },
                      "start": {
                        "column": 27,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    677,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                },
                "range": [
                  670,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "range": [
                    709,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        715,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 10,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "range": [
                        725,
                        729
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 20,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      715,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 34
                      },
                      "start": {
                        "column": 10,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      730,
                      740
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 25,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    715,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                "range": [
                  709,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "range": [
                    746,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "range": [
                          769,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 35
                          },
                          "start": {
                            "column": 27,
                            "line": 35
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
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          753,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 35
                          },
                          "start": {
                            "column": 11,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "range": [
                          763,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 35
                          },
                          "start": {
                            "column": 21,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        753,
                        768
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      753,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 35
                      },
                      "start": {
                        "column": 11,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      781,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 35
                      },
                      "start": {
                        "column": 39,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    753,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                },
                "range": [
                  746,
                  791
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "range": [
                    797,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "range": [
                          828,
                          840
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 36
                          },
                          "start": {
                            "column": 35,
                            "line": 36
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
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          808,
                          817
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 36
                          },
                          "start": {
                            "column": 15,
                            "line": 36
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "range": [
                          818,
                          827
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 36
                          },
                          "start": {
                            "column": 25,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        808,
                        827
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 36
                        },
                        "start": {
                          "column": 15,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      808,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 36
                      },
                      "start": {
                        "column": 15,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      842,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 36
                      },
                      "start": {
                        "column": 49,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    808,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 36
                    },
                    "start": {
                      "column": 15,
                      "line": 36
                    }
                  }
                },
                "range": [
                  797,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              }
            ],
            "range": [
              640,
              855
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 37
              },
              "start": {
                "column": 32,
                "line": 31
              }
            }
          },
          "range": [
            614,
            855
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        608,
        856
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "propTypesWithoutAnnotation",
            "optional": false,
            "range": [
              879,
              905
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "any",
                  "optional": false,
                  "range": [
                    914,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropTypes",
                    "optional": false,
                    "range": [
                      919,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 41
                      },
                      "start": {
                        "column": 9,
                        "line": 41
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "range": [
                      929,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 41
                      },
                      "start": {
                        "column": 19,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    919,
                    932
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 41
                    },
                    "start": {
                      "column": 9,
                      "line": 41
                    }
                  }
                },
                "range": [
                  914,
                  932
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "range": [
                    938,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        945,
                        954
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 42
                        },
                        "start": {
                          "column": 11,
                          "line": 42
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "range": [
                        955,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 42
                        },
                        "start": {
                          "column": 21,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      945,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 42
                      },
                      "start": {
                        "column": 11,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      961,
                      971
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 42
                      },
                      "start": {
                        "column": 27,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    945,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 42
                    },
                    "start": {
                      "column": 11,
                      "line": 42
                    }
                  }
                },
                "range": [
                  938,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "range": [
                    977,
                    981
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        983,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 43
                        },
                        "start": {
                          "column": 10,
                          "line": 43
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bool",
                      "optional": false,
                      "range": [
                        993,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 43
                        },
                        "start": {
                          "column": 20,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      983,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 43
                      },
                      "start": {
                        "column": 10,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      998,
                      1008
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 43
                      },
                      "start": {
                        "column": 25,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    983,
                    1008
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                "range": [
                  977,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "range": [
                    1014,
                    1019
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerProps",
                        "optional": false,
                        "range": [
                          1037,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 44
                          },
                          "start": {
                            "column": 27,
                            "line": 44
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
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          1021,
                          1030
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 44
                          },
                          "start": {
                            "column": 11,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "range": [
                          1031,
                          1036
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 21,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1021,
                        1036
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 44
                        },
                        "start": {
                          "column": 11,
                          "line": 44
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1021,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 44
                      },
                      "start": {
                        "column": 11,
                        "line": 44
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      1049,
                      1059
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 44
                      },
                      "start": {
                        "column": 39,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1021,
                    1059
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 44
                    },
                    "start": {
                      "column": 11,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1014,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOfType",
                  "optional": false,
                  "range": [
                    1065,
                    1074
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arrayOfTypes",
                        "optional": false,
                        "range": [
                          1096,
                          1108
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 45
                          },
                          "start": {
                            "column": 35,
                            "line": 45
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
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          1076,
                          1085
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oneOfType",
                        "optional": false,
                        "range": [
                          1086,
                          1095
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 45
                          },
                          "start": {
                            "column": 25,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1076,
                        1095
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 45
                        },
                        "start": {
                          "column": 15,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1076,
                      1109
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 45
                      },
                      "start": {
                        "column": 15,
                        "line": 45
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRequired",
                    "optional": false,
                    "range": [
                      1110,
                      1120
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 45
                      },
                      "start": {
                        "column": 49,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1076,
                    1120
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 45
                    },
                    "start": {
                      "column": 15,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1065,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              }
            ],
            "range": [
              908,
              1123
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 46
              },
              "start": {
                "column": 35,
                "line": 40
              }
            }
          },
          "range": [
            879,
            1123
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        873,
        1124
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractedProps",
        "optional": false,
        "range": [
          1131,
          1145
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 48
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1168,
            1186
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "propTypes",
                "optional": false,
                "range": [
                  1176,
                  1185
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 48
                  },
                  "start": {
                    "column": 50,
                    "line": 48
                  }
                }
              },
              "range": [
                1169,
                1185
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 48
                },
                "start": {
                  "column": 43,
                  "line": 48
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 48
            },
            "start": {
              "column": 42,
              "line": 48
            }
          }
        },
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "range": [
              1148,
              1157
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 48
              },
              "start": {
                "column": 22,
                "line": 48
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "range": [
              1158,
              1168
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 48
              },
              "start": {
                "column": 32,
                "line": 48
              }
            }
          },
          "range": [
            1148,
            1168
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 48
            },
            "start": {
              "column": 22,
              "line": 48
            }
          }
        },
        "range": [
          1148,
          1186
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 48
          },
          "start": {
            "column": 22,
            "line": 48
          }
        }
      },
      "range": [
        1126,
        1187
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractedPropsWithoutAnnotation",
        "optional": false,
        "range": [
          1194,
          1225
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1248,
            1283
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "propTypesWithoutAnnotation",
                "optional": false,
                "range": [
                  1256,
                  1282
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 50
                  },
                  "start": {
                    "column": 67,
                    "line": 50
                  }
                }
              },
              "range": [
                1249,
                1282
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 50
                },
                "start": {
                  "column": 60,
                  "line": 50
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 50
            },
            "start": {
              "column": 59,
              "line": 50
            }
          }
        },
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropTypes",
            "optional": false,
            "range": [
              1228,
              1237
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 50
              },
              "start": {
                "column": 39,
                "line": 50
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferProps",
            "optional": false,
            "range": [
              1238,
              1248
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 50
              },
              "start": {
                "column": 49,
                "line": 50
              }
            }
          },
          "range": [
            1228,
            1248
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 50
            },
            "start": {
              "column": 39,
              "line": 50
            }
          }
        },
        "range": [
          1228,
          1283
        ],
        "loc": {
          "end": {
            "column": 94,
            "line": 50
          },
          "start": {
            "column": 39,
            "line": 50
          }
        }
      },
      "range": [
        1189,
        1284
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractPropsMatch",
        "optional": false,
        "range": [
          1291,
          1308
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
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
            "name": "ExtractedProps",
            "optional": false,
            "range": [
              1311,
              1325
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 52
              },
              "start": {
                "column": 25,
                "line": 52
              }
            }
          },
          "range": [
            1311,
            1325
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 52
            },
            "start": {
              "column": 25,
              "line": 52
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExtractedPropsWithoutAnnotation",
            "optional": false,
            "range": [
              1334,
              1365
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 52
              },
              "start": {
                "column": 48,
                "line": 52
              }
            }
          },
          "range": [
            1334,
            1365
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 52
            },
            "start": {
              "column": 48,
              "line": 52
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              1375,
              1380
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 52
              },
              "start": {
                "column": 89,
                "line": 52
              }
            }
          },
          "range": [
            1375,
            1380
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 52
            },
            "start": {
              "column": 89,
              "line": 52
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              1368,
              1372
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 52
              },
              "start": {
                "column": 82,
                "line": 52
              }
            }
          },
          "range": [
            1368,
            1372
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 52
            },
            "start": {
              "column": 82,
              "line": 52
            }
          }
        },
        "range": [
          1311,
          1380
        ],
        "loc": {
          "end": {
            "column": 94,
            "line": 52
          },
          "start": {
            "column": 25,
            "line": 52
          }
        }
      },
      "range": [
        1286,
        1381
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 7,
                  "line": 53
                }
              },
              "range": [
                1389,
                1395
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1391,
                    1395
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 53
                    },
                    "start": {
                      "column": 9,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1391,
                  1395
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 53
                  },
                  "start": {
                    "column": 9,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1388,
              1395
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1399,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 53
                  },
                  "start": {
                    "column": 17,
                    "line": 53
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1407,
                  1410
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 53
                  },
                  "start": {
                    "column": 25,
                    "line": 53
                  }
                }
              },
              "range": [
                1399,
                1410
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 53
                },
                "start": {
                  "column": 17,
                  "line": 53
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtractPropsMatch",
                "optional": false,
                "range": [
                  1414,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 53
                  },
                  "start": {
                    "column": 32,
                    "line": 53
                  }
                }
              },
              "range": [
                1414,
                1431
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 53
                },
                "start": {
                  "column": 32,
                  "line": 53
                }
              }
            },
            "range": [
              1399,
              1431
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 53
              },
              "start": {
                "column": 17,
                "line": 53
              }
            }
          },
          "range": [
            1388,
            1432
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1382,
        1433
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 51,
      "line": 53
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
